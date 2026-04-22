import { images } from "../media/images";

export function resolveServiceImageSrc(imageKey: string) {
  if (imageKey in images) {
    return images[imageKey as keyof typeof images];
  }
  return imageKey;
}
