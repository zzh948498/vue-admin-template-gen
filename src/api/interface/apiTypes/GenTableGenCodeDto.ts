export interface GenTableGenCodeDto {
    /** ids */
    ids: number[];
    /** 表单类型 */
    formType: string;
    /** 模板 */
    template: string;
    /** 接口地址 */
    apiController: string;
    /** 是否有 产品需求文档 */
    hasPRD?: boolean;
}
