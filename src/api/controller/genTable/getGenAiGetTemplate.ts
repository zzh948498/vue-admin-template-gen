import request from "@/utils/request";
import { RListDto, DeepRequired } from "../../interface";

export interface GetGenAiGetTemplateResult extends RListDto {
    data: number[];
}

/**
 * 生成ai编程所需的 模板代码
 * /genAI/getTemplate
 */
export function getGenAiGetTemplate(params: GetGenAiGetTemplateParams) {
    const paramsInput = {
        path: params.path,
    };
    return request.get<DeepRequired<GetGenAiGetTemplateResult>>(`/genAI/getTemplate`, {
        params: paramsInput,
    });
}

interface GetGenAiGetTemplateParams {
    /** path */
    path?: string;
}
