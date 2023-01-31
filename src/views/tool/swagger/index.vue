<template>
    <iframe :src="url" frameborder="no" style="width: 100%; height: calc(100vh - 70px)" scrolling="auto" />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const url = ref(import.meta.env.VITE_APP_BASE_API + '/swagger-ui/index.html');
url.value = 'http://127.0.0.1:5000/docs';
</script>
