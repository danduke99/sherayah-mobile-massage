import type { ImageKey } from "@/app/components/media/images";
import type { VideoKey } from "@/app/components/media/video";

export type CarouselItem =
  | { id: number; type: "image"; srcKey: ImageKey; alt?: string }
  | { id: number; type: "video"; srcKey: VideoKey; alt?: string };

export const carouselImages: CarouselItem[] = [
  { id: 1, type: "image", srcKey: "carousel1" },
  { id: 2, type: "video", srcKey: "carousel1" },
  { id: 3, type: "image", srcKey: "carousel2" },
  { id: 4, type: "image", srcKey: "anni" },
  { id: 5, type: "image", srcKey: "beach" },
  { id: 6, type: "image", srcKey: "beachW" },
  { id: 7, type: "image", srcKey: "belair" },
  { id: 8, type: "video", srcKey: "belVid" },
  { id: 9, type: "image", srcKey: "coup" },
  { id: 10, type: "image", srcKey: "couple" },
  { id: 11, type: "video", srcKey: "home" },
  { id: 12, type: "video", srcKey: "loc" },
  { id: 13, type: "image", srcKey: "peggyOT" },
  { id: 14, type: "image", srcKey: "wit" },
  { id: 15, type: "image", srcKey: "wit2" },
  { id: 16, type: "video", srcKey: "work" },
  { id: 17, type: "video", srcKey: "work2" },
];

export const bgImage = `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/f_auto,q_auto,w_1920/v1767641417/massage2_nvwndo.jpg`;
