import request from "@/utils/request";
import { RListDto, GenTableImportInterfaceResultDto, DeepRequired, GenTableImportInterfaceDto } from "../../interface";

export interface PostImportInterfaceResult extends RListDto {
    data: GenTableImportInterfaceResultDto[];
}

/**
 * 导入interface
 * /importInterface
 */
export function postImportInterface(input: GenTableImportInterfaceDto) {
    return request.post<DeepRequired<PostImportInterfaceResult>>(`/importInterface`, input);
}
