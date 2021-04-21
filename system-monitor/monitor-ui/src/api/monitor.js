import http from './http'

// 查询服务器详细
export const getServer = () => http.get('/monitor/server')
// 查询缓存详细
export const getCache = () => http.get('/monitor/cache')
