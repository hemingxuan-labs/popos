import service from '@/utils/request.js'
import { store } from '@/store/index.js'
// import { objToUrl } from '@/utils/utils.js'

// 获取质押奖励信息
export const poposInfo = (data) => {
    return service({
        url: `/popos/info`,
        method: 'post',
        data
    })
}
