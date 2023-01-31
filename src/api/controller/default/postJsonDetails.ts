import request from "@/utils/request";
import { RDto, AppReadJsonRes, DeepRequired, AppReadJsonWhereDto } from "../../interface";

export interface PostJsonDetailsResult extends RDto {
    data: AppReadJsonRes;
}

/**
 * 获取json内容
 * /json/details
 */
export function postJsonDetails(input: AppReadJsonWhereDto) {
    return request.post<DeepRequired<PostJsonDetailsResult>>(`/json/details`, input);
}
