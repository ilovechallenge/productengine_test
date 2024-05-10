import { setupListeners } from "@reduxjs/toolkit/query";
import { persistStore, persistReducer } from "redux-persist";
import { combineReducers, configureStore, createSlice } from "@reduxjs/toolkit";
import { loginApi, userInfoApi } from "./api";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: 'root',
    storage
}

const appSlice = createSlice({
    name: 'app',
    initialState: {},
    reducers: {
        setAccount: (state, action) => {
            const { user_id, email } = action.payload;
            return { ...state, user_id: user_id, email: email };
        },
        setToken: (state, action) => {
            const {token} = action.payload;
            return { ...state, token: token };
        },
        setLogin: (state, action) => {
            const { id, email, token, gender } = action.payload;
            return { ...state, user_id: id, email: email, token: token, gender: gender };
        },
        setLogout: (state, action) => ({})
    }
})

const persistedReducer = persistReducer(persistConfig, combineReducers({
    [loginApi.reducerPath]: loginApi.reducer,
    [userInfoApi.reducerPath]: userInfoApi.reducer,
    app: appSlice.reducer
}))

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({
            serializableCheck: false
        })
            .concat(loginApi.middleware)
            .concat(userInfoApi.middleware)
})

const persistor = persistStore(store);

export const {
    setAccount,
    setToken,
    setLogout,
    setLogin
} = appSlice.actions

export { store, persistor };

setupListeners(store.dispatch)