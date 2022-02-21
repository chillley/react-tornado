import axios, {ServerResponse} from "./axios"


/// 地图信息
export function getMapInfo(params: Record<any, any> = {}): Promise<ServerResponse> {
    return axios.post(`/zhiyinGame/getMapInfo`, params)
}

/// 开始游戏
export function startGame(params: Record<any, any> = {}): Promise<ServerResponse> {
    return axios.post(`zhiyinGame/startGame`, params)
}
