import { configureStore } from "@reduxjs/toolkit";
import cyworld from "./modules/cyworldSlice";
import join from "./modules/joinSlice";
import user from "./modules/userSlice";
import music from "./modules/musicBoxSlice";
import diary from "./modules/diarySlice";
import profile from "./modules/profileSlice";
import guest from "./modules/guestSlice";
import theme from "./modules/dotoriThemeSlice"
import minimi from "./modules/minimiSlice";

export const store = configureStore({
    reducer: {
      cyworld,
      join,
      user,
      music,
      diary,
      profile,
      guest,
      theme,
      minimi
    }
});