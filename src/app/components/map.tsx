import type { ImageKey } from "@/app/components/media/images";
import type { VideoKey } from "@/app/components/media/video";

export type CarouselItem =
  | { id: number; type: "image"; srcKey: ImageKey; alt?: string }
  | { id: number; type: "video"; srcKey: VideoKey; alt?: string };

export const services = [
  {
    title: "Swedish Massage",
    image: "swedish",
    description: "Gentle, flowing strokes that promote relaxation and reduce tension.",
  },
  {
    title: "Head, Neck, Shoulder Massage",
    image: "neck",
    description: "Relieve built-up stress and tension in the upper body.",
  },
  {
    title: "Foot Massage",
    image: "foot",
    description: "Soothe tired feet and improve circulation with targeted pressure.",
  },
  {
    title: "Aromatic Massage",
    image: "massage5",
    description: "Enhance well-being with therapeutic essential oils and soft touch.",
  },
  {
    title: "Hot Oil Massage",
    image: "hotOil",
    description: "Melt away stress with nourishing, warm oils and deep strokes.",
  },
  {
    title: "Relax Massage",
    image: "massage4",
    description: "Experience tranquility through smooth and calming massage therapy.",
  },
  {
    title: "Chair Massage",
    image: "Chair",
    description: "Quick stress relief focused on your back, neck, and shoulders.",
  },
  {
    title: "Bamboo Massage",
    image: "bamboo",
    description: "Deep tissue work using warm bamboo rods for intense relief.",
  },
  {
    title: "Hot Stone Massage",
    image: "stone",
    description: "Feel your muscles unwind as heated stones ease tightness.",
  },
];

export const teamMembers = [
  {
    name: "Jane Doe",
    role: "Head Masseuse",
    image: "headshot1",
  },
  {
    name: "John Doe",
    role: "Masseuse",
    image: "headshot2",
  },
  {
    name: "Janet Doe",
    role: "Chiropractor",
    image: "headshot3",
  },
  {
    name: "Janet Doe",
    role: "Chiropractor",
    image: "headshot3",
  },
  {
    name: "Janet Doe",
    role: "Chiropractor",
    image: "headshot3",
  },{
    name: "Janet Doe",
    role: "Chiropractor",
    image: "headshot3",
  },
  {
    name: "Janet Doe",
    role: "Chiropractor",
    image: "headshot3",
  },
];

export const carouselImages: CarouselItem[] = [
  { id: 1,  type: "image", srcKey: "carousel1" },
  { id: 2,  type: "video", srcKey: "carousel1" },
  { id: 3,  type: "image", srcKey: "carousel2" },
  { id: 4,  type: "image", srcKey: "anni" },
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
