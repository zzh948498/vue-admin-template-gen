import request from "@/utils/request";
import { RDto, GenTableGenCodeResultDto, DeepRequired, GenTableGenCodeDto } from "../../interface";

export interface PostGenCodeResult extends RDto {
    data: GenTableGenCodeResultDto;
}

/**
 * 生成代码
 * /genCode
 */
export function postGenCode(input: GenTableGenCodeDto) {
    return request.post<DeepRequired<PostGenCodeResult>>(`/genCode`, input);
}
