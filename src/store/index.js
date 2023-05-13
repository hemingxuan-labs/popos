import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import walletReducer from '@/store/wallet.js'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'

const persistConfig = {
    key: 'root',
    storage,
}
const persistedReducer = persistReducer(persistConfig, walletReducer)
export const store = configureStore({
    reducer: {
        wallet: persistedReducer,
    },
    middleware: [thunk],
    devTools: process.env.NODE_ENV !== 'production',
})

export const persistor = persistStore(store)
