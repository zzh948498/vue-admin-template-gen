<template>
    <div>
        <el-card>
            <el-tabs v-model="activeName">
                <el-tab-pane label="基本信息" name="basic">
                    <basic-info-form ref="basicFormInstance" :info="info" />
                </el-tab-pane>
                <el-tab-pane label="字段信息" name="columnInfo">
                    <el-row :gutter="10" class="mb-2">
                        <el-col :span="1.5">
                            <el-button type="primary" plain :icon="Plus" @click="addColumns"
                                >添加字段</el-button
                            >
                        </el-col>
                        <el-col :span="1.5">
                            <el-button type="primary" plain :icon="Upload" @click="openImport"
                                >导入字段</el-button
                            >
                        </el-col>
                        <el-col :span="1.5">
                            <el-button type="primary" plain :icon="Upload" @click="openImportInterface"
                                >导入interface</el-button
                            >
                        </el-col>
                        <el-col :span="1.5">
                            <el-button type="danger" plain :icon="Delete" @click="batchDelete"
                                >删除</el-button
                            >
                        </el-col>
                    </el-row>
                    <el-form ref="columnsFormRef" :model="columnsForm" :rules="rules" label-width="0">
                        <el-table
                            ref="dragTable"
                            :data="columnsForm.columns"
                            row-key="id"
                            :max-height="tableHeight"
                            @selectionChange="handleSelectionChange"
                        >
                            <el-table-column fixed type="selection" width="55" align="center" />
                            <el-table-column label="序号" type="index" min-width="5%" />
                            <el-table-column label="字段列名" min-width="10%">
                                <template #default="scope">
                                    <el-form-item
                                        :prop="'columns.' + scope.$index + '.name'"
                                        :rules="rules.name"
                                        class="pt-4"
                                    >
                                        <el-input v-model="scope.row.name"></el-input>
                                    </el-form-item>
                                </template>
                            </el-table-column>

                            <el-table-column label="字段描述" min-width="10%">
                                <template #default="scope">
                                    <el-input v-model="scope.row.desc"></el-input>
                                </template>
                            </el-table-column>
                            <el-table-column label="ts类型" min-width="11%">
                                <template #default="scope">
                                    <div>
                                        <el-select v-model="scope.row.tsType">
                                            <el-option label="string" value="string" />
                                            <el-option label="number" value="number" />
                                            <el-option label="boolean" value="boolean" />
                                            <el-option label="Date" value="Date" />
                                        </el-select>
                                    </div>
                                    <el-select
                                        v-show="scope.row.isEnum"
                                        v-model="scope.row.enumValues"
                                        multiple
                                        filterable
                                        allow-create
                                        default-first-option
                                        placeholder="填写你的类型"
                                    >
                                    </el-select>
                                </template>
                            </el-table-column>
                            <el-table-column label="枚举类型" min-width="5%">
                                <template #default="scope">
                                    <el-checkbox v-model="scope.row.isEnum"></el-checkbox>
                                </template>
                            </el-table-column>
                            <el-table-column min-width="5%">
                                <template #header>
                                    <editTableCheckTitle
                                        v-model="columnsForm.columns"
                                        label="插入"
                                        columnKey="isInsert"
                                    />
                                </template>
                                <template #default="scope">
                                    <el-checkbox v-model="scope.row.isInsert"></el-checkbox>
                                </template>
                            </el-table-column>
                            <el-table-column min-width="5%">
                                <template #header>
                                    <editTableCheckTitle
                                        v-model="columnsForm.columns"
                                        label="编辑"
                                        columnKey="isEdit"
                                    />
                                </template>
                                <template #default="scope">
                                    <el-checkbox v-model="scope.row.isEdit"></el-checkbox>
                                </template>
                            </el-table-column>
                            <el-table-column min-width="5%">
                                <template #header>
                                    <editTableCheckTitle
                                        v-model="columnsForm.columns"
                                        label="列表"
                                        columnKey="isList"
                                    />
                                </template>
                                <template #default="scope">
                                    <el-checkbox v-model="scope.row.isList"></el-checkbox>
                                </template>
                            </el-table-column>
                            <el-table-column min-width="5%">
                                <template #header>
                                    <editTableCheckTitle
                                        v-model="columnsForm.columns"
                                        label="查询"
                                        columnKey="isQuery"
                                    />
                                </template>
                                <template #default="scope">
                                    <el-checkbox v-model="scope.row.isQuery"></el-checkbox>
                                </template>
                            </el-table-column>
                            <!-- <el-table-column label="查询方式" min-width="10%">
                            <template #default="scope">
                                <el-select v-model="scope.row.queryType">
                                    <el-option label="=" value="EQ" />
                                    <el-option label="!=" value="NE" />
                                    <el-option label=">" value="GT" />
                                    <el-option label=">=" value="GTE" />
                                    <el-option label="<" value="LT" />
                                    <el-option label="<=" value="LTE" />
                                    <el-option label="LIKE" value="LIKE" />
                                    <el-option label="BETWEEN" value="BETWEEN" />
                                </el-select>
                            </template>
                        </el-table-column> -->
                            <el-table-column min-width="5%">
                                <template #header>
                                    <editTableCheckTitle
                                        v-model="columnsForm.columns"
                                        label="必填"
                                        columnKey="required"
                                    />
                                </template>
                                <template #default="scope">
                                    <el-checkbox v-model="scope.row.required"></el-checkbox>
                                </template>
                            </el-table-column>
                            <el-table-column label="显示类型" min-width="12%">
                                <template #default="scope">
                                    <el-select v-model="scope.row.htmlType">
                                        <el-option label="文本框" value="input" />
                                        <el-option label="文本域" value="textarea" />
                                        <el-option label="下拉框" value="select" />
                                        <el-option label="单选框" value="radio" />
                                        <el-option label="复选框" value="checkbox" />
                                        <el-option label="日期控件" value="datetime" />
                                        <el-option label="图片上传" value="imageUpload" />
                                        <el-option label="文件上传" value="fileUpload" />
                                        <el-option label="富文本控件" value="editor" />
                                    </el-select>
                                </template>
                            </el-table-column>
                            <!-- <el-table-column label="字典类型" min-width="12%">
                                <template #default="scope">
                                    <el-select
                                        v-model="scope.row.dictType"
                                        clearable
                                        filterable
                                        placeholder="请选择"
                                    >
                                        <el-option
                                            v-for="dict in dictOptions"
                                            :key="dict.dictType"
                                            :label="dict.dictName"
                                            :value="dict.dictType"
                                        >
                                            <span style="float: left">{{ dict.dictName }}</span>
                                            <span style="float: right; color: #8492a6; font-size: 13px">{{
                                                dict.dictType
                                            }}</span>
                                        </el-option>
                                    </el-select>
                                </template>
                            </el-table-column> -->
                            <el-table-column
                                label="操作"
                                align="center"
                                width="50"
                                class-name="small-padding fixed-width"
                            >
                                <template #default="scope">
                                    <el-tooltip content="删除" placement="top">
                                        <el-button
                                            link
                                            type="primary"
                                            :icon="Delete"
                                            @click="handleDelete(scope.row, scope.$index)"
                                        ></el-button>
                                    </el-tooltip>
                                </template>
                            </el-table-column>
                        </el-table>
                    </el-form>
                </el-tab-pane>
                <el-tab-pane label="关系信息" name="genInfo">
                    <gen-info-form
                        ref="genFormInstance"
                        :info="info"
                        :tables="tables"
                        @getAllList="getList"
                    />
                </el-tab-pane>
            </el-tabs>
            <el-form label-width="100px">
                <div style="text-align: center; margin-left: -100px; margin-top: 10px">
                    <el-button type="primary" @click="submitForm()">提交</el-button>
                    <el-button @click="close()">返回</el-button>
                </div>
            </el-form>
        </el-card>
        <!-- 添加或修改角色配置对话框 -->
        <el-dialog v-model="importVisible" title="导入字段" width="70%" append-to-body>
            <el-form ref="importFormRef" :model="importForm" :rules="importFormRules" label-width="170px">
                <el-form-item label="swagger地址" prop="url">
                    <el-input v-model="importForm.url" placeholder="请输入swagger地址" />
                </el-form-item>
                <el-form-item label="schema" prop="schema">
                    <el-input v-model="importForm.schema" placeholder="请输入schema" />
                </el-form-item>
            </el-form>
            <template #footer>
                <div class="dialog-footer">
                    <el-button type="primary" @click="submitImportForm">确 定</el-button>
                    <el-button @click="importVisible = false">取 消</el-button>
                </div>
            </template>
        </el-dialog>
        <!-- 添加或修改角色配置对话框 -->
        <el-dialog v-model="importInterfaceVisible" title="导入interface" width="700px" append-to-body>
            <el-form
                ref="importInterfaceFormRef"
                :model="importInterfaceForm"
                :rules="importInterfaceFormRules"
                label-width="120px"
            >
                <el-form-item label="interface内容" prop="interface">
                    <el-input
                        v-model="importInterfaceForm.interface"
                        type="textarea"
                        :autosize="{ minRows: 30, maxRows: 50 }"
                        placeholder="请输入interface内容"
                    />
                </el-form-item>
            </el-form>
            <template #footer>
                <div class="dialog-footer">
                    <el-button type="primary" @click="submitImportInterfaceForm">确 定</el-button>
                    <el-button @click="importInterfaceVisible = false">取 消</el-button>
                </div>
            </template>
        </el-dialog>
    </div>
</template>

<script setup name="GenEdit" lang="ts">
import basicInfoForm from './basicInfoForm.vue';
import genInfoForm from './genInfoForm.vue';
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { oneOf, PartialByKeys } from '@zeronejs/utils';
import { DeepRequired, GenColumnsEntity, GenTableEntity } from '@/api/interface';
import { CheckboxValueType, ElMessage, FormInstance } from 'element-plus';
import { ElModalConfirm } from '@/plugins/ElModal';
import { Upload, Delete, Plus } from '@element-plus/icons-vue';
import { v4 as uuidv4 } from 'uuid';

import type { Schema } from 'swagger-schema-official';
import {
    getGenTableAll,
    patchGenTableUpdateById,
    deleteGenColumnsRemoveById,
    getGenTableDetailsById,
    patchGenColumnsUpdateById,
    postGenColumnsCreate,
    patchGenTableRelationsUpdateById,
    postGenTableRelationsCreate,
    postJsonDetails,
} from '@/api/controller';
import { vueLocalStorage } from '@/utils/vueLocalStroge';
import { postImportInterface } from '@/api/controller/genTable/postImportInterface';
import editTableCheckTitle from './components/editTableCheckTitle.vue';
const route = useRoute();
const router = useRouter();
type ColumnsListItem = PartialByKeys<GenColumnsEntity, 'id' | 'createdAt' | 'updatedAt' | 'table'> & {
    tmpId?: string;
};

const activeName = ref('columnInfo');
const tableHeight = ref(document.documentElement.scrollHeight - 245 + 'px');
const tables = ref<GenTableEntity[]>([]);
const columnsFormRef = ref<FormInstance>();
// const columns = ref<ColumnsListItem[]>([]);
const columnsForm = ref<{
    columns: ColumnsListItem[];
}>({
    columns: [],
});
const importVisible = ref(false);

const dictOptions = ref<any[]>([]);
const info = ref<GenTableEntity>();
const basicFormInstance = ref<InstanceType<typeof basicInfoForm>>();
const genFormInstance = ref<InstanceType<typeof genInfoForm>>();
const rules = ref({
    name: [{ required: true, message: '请输入字段名称', trigger: 'blur' }],
    desc: [{ required: true, message: '请输入字段描述', trigger: 'blur' }],
    tsType: [
        {
            required: true,
            message: '请选择一个ts类型',
            trigger: 'change',
        },
    ],
});
const importFormRef = ref();

const importForm = ref({
    url: '',
    schema: '',
});

const importFormRules = ref({
    url: [{ required: true, message: '请输入swagger地址', trigger: 'blur' }],
    schema: [{ required: true, message: '请输入schema', trigger: 'blur' }],
});

const submiting = ref(false);
const addColumns = () => {
    columnsForm.value.columns.push({
        tmpId: uuidv4(),
        name: 'string',
        /** 字段描述 */
        desc: 'string',
        /** ts类型 */
        tsType: 'string',
        isEnum: false,
        /** 插入 */
        isInsert: false,
        /** 编辑 */
        isEdit: false,
        /** 列表 */
        isList: true,
        /** 查询 */
        isQuery: false,
        /** 必填 */
        required: false,
        /** 表id */
        tableId: info.value?.id ?? 0,
        htmlType: 'input',
    });
};
/** 提交按钮 */
async function submitForm() {
    const basicForm = basicFormInstance.value?.basicInfoForm;
    const genInfoForm = genFormInstance.value?.genInfoForm;
    // const genForm = genFormInstance.value?.$refs.genInfoForm as Ref<FormInstance>;
    if (submiting.value) {
        return;
    }
    submiting.value = true;
    const [basicCheck, columnsCheck, genInfoCheck] = await Promise.all(
        [basicForm!, columnsFormRef.value!, genInfoForm!].map(getFormPromise)
    );
    if (!basicCheck) {
        submiting.value = false;
        return ElMessage.error('基本信息校验未通过，请重新检查提交内容');
    } else if (!columnsCheck) {
        submiting.value = false;
        return ElMessage.error('字段校验未通过，请重新检查提交内容');
    } else if (!genInfoCheck) {
        submiting.value = false;
        return ElMessage.error('关系信息校验未通过，请重新检查提交内容');
    }

    await Promise.all([
        ...columnsForm.value.columns.map(it => {
            if (!it.id) {
                return postGenColumnsCreate(it);
            }
            return patchGenColumnsUpdateById({ id: it.id }, it);
        }),
        patchGenTableUpdateById({ id: info.value!.id }, info.value ?? {}),
        ...(genFormInstance.value?.relationsForm.relations.map(it => {
            if (!it.id) {
                return postGenTableRelationsCreate(it);
            }
            return patchGenTableRelationsUpdateById({ id: it.id }, it);
        }) ?? []),
    ]);
    ElMessage.success('操作成功');
    await getList();
    submiting.value = false;
}
function getFormPromise(form: FormInstance) {
    return new Promise(resolve => {
        form.validate((res: boolean) => {
            resolve(res);
        });
    });
}
/** 删除按钮操作 */
async function handleDelete(row: ColumnsListItem, index: number) {
    if (row.id) {
        try {
            await ElModalConfirm('确定删除？');
            // delTable(tableIds);
        } catch (e) {
            return console.log(e);
        }
        await deleteGenColumnsRemoveById({ id: row.id });

        await getList();
    } else {
        columnsForm.value.columns.splice(index, 1);
    }
    ElMessage.success('删除成功');
    // const tableIds = row.tableId || ids.value;
}

const batchDelete = async () => {
    await Promise.all(ids.value.map(it => deleteGenColumnsRemoveById({ id: it })));
    columnsForm.value.columns = columnsForm.value.columns.filter(
        it => !tmpIds.value.includes(it.tmpId ?? '') && !ids.value.includes(it.id ?? -1)
    );
    // await getList();
    ElMessage.success('删除成功');
};
const openImport = () => {
    importVisible.value = true;
    const localImportForm = vueLocalStorage.getItem('importForm');
    if (localImportForm) {
        importForm.value = { ...localImportForm };
    }
};
// 导入interface模块
const useImportInterface = () => {
    const importInterfaceVisible = ref(false);
    const importInterfaceFormRef = ref();
    const importInterfaceForm = ref({
        interface: '',
    });
    const importInterfaceFormRules = ref({
        interface: [{ required: true, message: '请输入interface内容', trigger: 'blur' }],
    });
    const openImportInterface = () => {
        importInterfaceVisible.value = true;
    };
    const submitImportInterfaceForm = async () => {
        const valid = await importInterfaceFormRef.value?.validate();
        if (!valid) return;
        const { data } = await postImportInterface(importInterfaceForm.value);
        for (const item of data.data) {
            columnsForm.value.columns.push({
                tmpId: uuidv4(),
                name: item.name,
                /** 字段描述 */
                desc: item.desc || item.name || 'string',
                /** ts类型 */
                tsType: item.tsType as any,
                isEnum: false,
                enumValues: undefined,
                /** 插入 */
                isInsert: false,
                /** 编辑 */
                isEdit: false,
                /** 列表 */
                isList: true,
                /** 查询 */
                isQuery: false,
                /** 必填 */
                required: !item.hasQuestionToken,
                /** 表id */
                tableId: info.value?.id ?? 0,
                htmlType: 'input',
            });
        }
        ElMessage.success('操作成功');
        importInterfaceVisible.value = false;
    };
    return {
        importInterfaceVisible,
        importInterfaceFormRef,
        importInterfaceForm,
        importInterfaceFormRules,
        openImportInterface,
        submitImportInterfaceForm,
    };
};
const {
    importInterfaceVisible,
    importInterfaceFormRef,
    importInterfaceForm,
    importInterfaceFormRules,
    openImportInterface,
    submitImportInterfaceForm,
} = useImportInterface();
/** 导入字段按钮 */
async function submitImportForm() {
    const valid = await importFormRef.value?.validate();
    if (!valid) return;
    const { data } = await postJsonDetails({ url: importForm.value.url });

    const schemas = data.data.json.components.schemas[importForm.value.schema] as Schema;
    if (!schemas) {
        return ElMessage.error('未找到当前schemas');
    }
    if (!schemas.properties) {
        return ElMessage.error('schemas没有properties');
    }
    for (const key in schemas.properties) {
        if (Object.prototype.hasOwnProperty.call(schemas.properties, key)) {
            const element = schemas.properties[key];
            let tsType: GenColumnsEntity['tsType'] = 'string';
            let isEnum = false;
            let enumValues: string[] | undefined;
            let htmlType: GenColumnsEntity['htmlType'] = 'input';
            switch (element.type) {
                case 'string':
                    if (element.format === 'date-time') {
                        tsType = 'Date';
                        htmlType = 'datetime';
                    } else if (element.enum && element.enum.length !== 0) {
                        isEnum = true;
                        enumValues = [...element.enum];
                        htmlType = 'select';
                    }
                    break;
                case 'number':
                case 'integer':
                    tsType = 'number';
                    break;
                case 'boolean':
                    tsType = 'boolean';
                    htmlType = 'radio';
                    break;
            }
            columnsForm.value.columns.push({
                name: key,
                /** 字段描述 */
                desc: element.description ?? 'string',
                /** ts类型 */
                tsType,
                isEnum,
                enumValues,
                /** 插入 */
                isInsert: false,
                /** 编辑 */
                isEdit: false,
                /** 列表 */
                isList: true,
                /** 查询 */
                isQuery: false,
                /** 必填 */
                required: false,
                /** 表id */
                tableId: info.value?.id ?? 0,
                htmlType,
            });
        }
    }
    vueLocalStorage.setItem('importForm', { ...importForm.value });
    ElMessage.success('操作成功');
    importVisible.value = false;
}
function close() {
    router.back();
}
const getList = async () => {
    const tableId = Number(oneOf(route.params.tableId));
    if (tableId) {
        // 获取表详细信息
        // getGenTable(tableId).then(res => {
        //     columns.value = res.data.rows;
        //     info.value = res.data.info;
        //     tables.value = res.data.tables;
        // });
        const [tableInfo, tableAll] = await Promise.all([
            getGenTableDetailsById({ id: tableId }),
            getGenTableAll({}),
        ]);
        tables.value = tableAll.data.data;
        info.value = tableInfo.data.data;
        columnsForm.value.columns = tableInfo.data.data.columns;
        genFormInstance.value?.getList(tableInfo.data.data.relations);
        // /** 查询字典下拉列表 */
        // getDictOptionselect().then(response => {
        //     dictOptions.value = response.data;
        // });
    }
};
getList();
const ids = ref<number[]>([]);
const tmpIds = ref<string[]>([]);
// 单选
const single = ref(true);
// 是否选中了数据
const multiple = ref(true);
/** 多选框选中数据 */
const handleSelectionChange = (selection: DeepRequired<ColumnsListItem[]>) => {
    console.log(selection);
    ids.value = selection.filter(it => it.id).map(item => item.id);
    tmpIds.value = selection.filter(it => it.tmpId).map(item => item.tmpId);

    single.value = selection.length !== 1;
    multiple.value = !selection.length;
};
</script>
