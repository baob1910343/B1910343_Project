import { configureStore } from "@reduxjs/toolkit"; //cấu hình và tạo ra Redux store.
import { combineReducers } from "redux"; //kết hợp các reducer thành một reducer duy nhất
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage"; //ạo ra một "persistent" reducer. Nó sẽ lưu trạng thái của Redux vào storage.
import { persistReducer } from "redux-persist";
import cart from "./cartSlice";
// , expandSidebar, dialog
const reducers = combineReducers({ cart });

const config = {
  key: "root",
  storage,
};
//để lưu trạng thái vào storage ("root")

const reducer = persistReducer(config, reducers);
//tạo ra một persistent reducer.
const store = configureStore({
  reducer: reducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});
//để xử lý các action async trong Redux

export default store;
