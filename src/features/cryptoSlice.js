import { createSlice } from "@reduxjs/toolkit";
import mockAssets from "../data/mockAssets";

const cryptoSlice = createSlice({
  name: "crypto",
  initialState: {
    assets: mockAssets,
  },
  reducers: {
    updateAssets: (state, action) => {
      state.assets = action.payload;
    },
    updateAssetData: (state, action) => {
      const { id, changes } = action.payload;
      const index = state.assets.findIndex(asset => asset.id === id);
      if (index !== -1) {
        state.assets[index] = {
          ...state.assets[index],
          ...changes,
        };
      }
    },
  },
});

export const { updateAssets, updateAssetData } = cryptoSlice.actions;
export const selectAssets = (state) => state.crypto.assets;
export default cryptoSlice.reducer;
