import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'wallet',
    initialState: {
        walletAddress: '',
        showWalletAddress: '',
        walletToken: '',
        userToken: ''
    },
    reducers: {
        setWalletAddress: (state, action) => {
            state.walletAddress = action.payload
            state.showWalletAddress = `${action.payload.slice(0, 6)}...${action.payload.slice(
                action.payload.length - 4,
                action.payload.length
            )}`
        },
        setWalletToken: (state, action) => {
            state.walletToken = action.payload
        },
        setUserToken: (state, action) => {
            state.userToken = action.payload
        },
        setWalletLoginLogout: (state, action) => {
            state.walletAddress = ''
            state.showWalletAddress = ''
            state.walletToken = ''
            state.walletToken = ''
        }
    }
})
// 每个 case reducer 函数会生成对应的 Action creators
export const { setWalletAddress, setWalletToken, setUserToken, setWalletLoginLogout } =
    counterSlice.actions
export default counterSlice.reducer
