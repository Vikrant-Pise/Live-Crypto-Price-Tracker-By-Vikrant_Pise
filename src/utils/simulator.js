
import { updateAssetData } from "./features/cryptoSlice";

export const startSimulation = (dispatch, getState) => {
  setInterval(() => {
    const state = getState();
    const assets = state.crypto.assets;

    if (assets.length === 0) return;

    const randomAsset = assets[Math.floor(Math.random() * assets.length)];
    const newPrice = +(randomAsset.price * (0.98 + Math.random() * 0.04)).toFixed(2);
    const changes = {
      price: newPrice,
      percentChange1h: +(Math.random() * 10 - 5).toFixed(2),
      percentChange24h: +(Math.random() * 10 - 5).toFixed(2),
      volume24h: Math.floor(randomAsset.volume24h * (0.9 + Math.random() * 0.2)),
    };

    dispatch(updateAssetData({ id: randomAsset.id, changes }));
  }, 1500);
};
