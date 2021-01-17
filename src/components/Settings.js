import {ApiDomain, ApiPort, ApiProtocol} from "./ApiConf";

const ApiURL = ApiProtocol + "://" + ApiDomain + ((ApiPort === 80 || ApiPort === 443) ? "" : ":" + ApiPort);

export function api(path) {
    return ApiURL + path;
}
