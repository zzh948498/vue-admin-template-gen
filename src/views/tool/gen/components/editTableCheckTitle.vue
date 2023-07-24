<template>
    <div class="flex items-center">
        <span class="mr-1">{{ label }}</span>
        <el-checkbox
            v-model="checkAll"
            :indeterminate="isIndeterminate"
            @change="handleCheckAllChange"
        ></el-checkbox>
    </div>
</template>
<script setup lang="ts">
import { CheckboxValueType } from 'element-plus';
import { GenColumnsEntity } from '@/api/interface';
import { computed } from 'vue';
import { PartialByKeys } from '@zeronejs/utils';
type ColumnsListItem = PartialByKeys<GenColumnsEntity, 'id' | 'createdAt' | 'updatedAt' | 'table'>;
const props = defineProps<{
    label: string;
    columnKey: keyof Pick<GenColumnsEntity, 'isInsert' | 'isEdit' | 'isList' | 'isQuery' | 'required'>;
    modelValue: ColumnsListItem[];
}>();

const emit = defineEmits(['update:modelValue']);
const columns = computed({
    get() {
        return props.modelValue;
    },
    set(value) {
        emit('update:modelValue', value);
    },
});
const checkAll = computed(() => columns.value.every(it => it[props.columnKey]));
const isIndeterminate = computed(() => !checkAll.value && columns.value.some(it => it[props.columnKey]));
const handleCheckAllChange = (val: CheckboxValueType) => {
    columns.value.forEach(it => (it[props.columnKey] = Boolean(val)));
};
</script>
