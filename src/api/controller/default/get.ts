import request from "@/utils/request";
import { DeepRequired } from "../../interface";

/**
 * /
 */
export function get() {
    return request.get<DeepRequired<string>>(`/`);
}
