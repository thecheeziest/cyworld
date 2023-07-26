import { configureStore } from "@reduxjs/toolkit";
import cyworld from "./modules/cyworldSlice";
import join from "./modules/joinSlice";
import user from "./modules/userSlice";
import music from "./modules/musicBoxSlice";
import musicItem from "./modules/musicItemSlice";
import diary from "./modules/diarySlice";
import cart from "./modules/musicCartSlice";

export const store = configureStore({
    reducer: {
      cyworld,
      join,
      user,
      music,
      musicItem,
      diary,
      cart
    }
});