import request from "@/utils/request";
import { RDto, DeepRequired, GenTableUpdateDto } from "../../interface";

export interface PatchGenTableUpdateByIdResult extends RDto {
    data: string;
}

/**
 * 修改代码生成信息表信息
 * /genTable/update/{id}
 */
export function patchGenTableUpdateById(params: PatchGenTableUpdateByIdParams, input: GenTableUpdateDto) {
    return request.patch<DeepRequired<PatchGenTableUpdateByIdResult>>(`/genTable/update/${params.id}`, input);
}

interface PatchGenTableUpdateByIdParams {
    id: number;
}
