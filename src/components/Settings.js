import {ApiDomain, ApiPort, ApiProtocol} from "./ApiConf";

export const ApiURL = ApiProtocol + "://" + ApiDomain + ((ApiPort === 80 || ApiPort === 443) ? ":" + ApiPort : "");

