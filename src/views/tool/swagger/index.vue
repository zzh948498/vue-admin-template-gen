<template>
    <i-frame v-model:src="url"></i-frame>
</template>

<script setup lang="ts">
import iFrame from '@/components/iFrame/index.vue';
import { ref } from 'vue';

const url = ref(import.meta.env.VITE_APP_BASE_API + '/swagger-ui/index.html');
url.value = 'http://127.0.0.1:5000/docs';
</script>
