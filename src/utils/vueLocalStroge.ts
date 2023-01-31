import { LocalStorage } from '@zeronejs/utils';
export interface LocalStorageEntities {
    // token
    vue_admin_template_gen_token: string;
    sidebarStatus: boolean;
    importForm: {
        url: string;
        schema: string;
    };
}
// docs: https://zerone.top/zh/techniques/utils.html#localstorage
export const vueLocalStorage = new LocalStorage<LocalStorageEntities>();
