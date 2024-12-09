import request from "@/utils/request";
import { DeepRequired } from "../../interface";

/**
 * /apifox
 */
export function getApifox(params: GetApifoxParams) {
    const paramsInput = {
        projectId: params.projectId,
        access_token: params.access_token,
    };
    return request.get<DeepRequired<any>>(`/apifox`, {
        params: paramsInput,
    });
}

interface GetApifoxParams {
    /** projectId */
    projectId: string;
    /** access_token */
    access_token?: string;
}
