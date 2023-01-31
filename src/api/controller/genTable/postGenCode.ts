import request from "@/utils/request";
import { RListDto, DeepRequired, GenTableGenCodeDto } from "../../interface";

export interface PostGenCodeResult extends RListDto {
    data: number[];
}

/**
 * 生成代码
 * /genCode
 */
export function postGenCode(input: GenTableGenCodeDto) {
    return request.post<DeepRequired<PostGenCodeResult>>(`/genCode`, input);
}
