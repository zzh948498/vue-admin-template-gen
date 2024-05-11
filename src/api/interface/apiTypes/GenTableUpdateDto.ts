export interface GenTableUpdateDto {
    /** 表名称 */
    name?: string;
    /** 表描述 */
    desc?: string;
    /** 路由前缀 */
    pathPrefix?: string;
    /** 备注 */
    remark?: string;
    /** 生成模板类型 */
    tplCategory?: 'crud' | 'tree';
}
