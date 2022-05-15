import { decode } from "blurhash";

export const getBlurDataURL = (blurHash: string) => {
  const pixels = decode(blurHash, 350, 150);
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d")!;
  const imageData = ctx.createImageData(350, 150);
  imageData.data.set(pixels);
  ctx.putImageData(imageData, 0, 0);
  return canvas.toDataURL();
};
