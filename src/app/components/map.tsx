import type { ImageKey } from "@/app/components/media/images";
import type { VideoKey } from "@/app/components/media/video";

export type CarouselItem =
  | { id: number; type: "image"; srcKey: ImageKey; alt?: string }
  | { id: number; type: "video"; srcKey: VideoKey; alt?: string };

export type ServiceOption = {
  label: string;
  duration: 60 | 90;
  price: number;
};

export type Service = {
  id: string;
  title: string;
  imageKey: ImageKey;
  description: string;
  options: ServiceOption[];
};

export const services: Service[] = [
  {
    id: "swedish-massage",
    title: "Swedish Massage",
    imageKey: "swedish",
    description: "Gentle, flowing strokes that promote relaxation and reduce tension.",
    options: [
      { label: "60 Minutes", duration: 60, price: 100 },
      { label: "90 Minutes", duration: 90, price: 145 },
    ],
  },
  {
    id: "head-neck-shoulder-massage",
    title: "Head, Neck, Shoulder Massage",
    imageKey: "neck",
    description: "Relieve built-up stress and tension in the upper body.",
    options: [
      { label: "60 Minutes", duration: 60, price: 90 },
      { label: "90 Minutes", duration: 90, price: 130 },
    ],
  },
  {
    id: "foot-massage",
    title: "Foot Massage",
    imageKey: "foot",
    description: "Soothe tired feet and improve circulation with targeted pressure.",
    options: [
      { label: "60 Minutes", duration: 60, price: 85 },
      { label: "90 Minutes", duration: 90, price: 125 },
    ],
  },
  {
    id: "aromatic-massage",
    title: "Aromatic Massage",
    imageKey: "massage5",
    description: "Enhance well-being with therapeutic essential oils and soft touch.",
    options: [
      { label: "60 Minutes", duration: 60, price: 105 },
      { label: "90 Minutes", duration: 90, price: 150 },
    ],
  },
  {
    id: "hot-oil-massage",
    title: "Hot Oil Massage",
    imageKey: "hotOil",
    description: "Melt away stress with nourishing, warm oils and deep strokes.",
    options: [
      { label: "60 Minutes", duration: 60, price: 110 },
      { label: "90 Minutes", duration: 90, price: 155 },
    ],
  },
  {
    id: "relax-massage",
    title: "Relax Massage",
    imageKey: "massage4",
    description: "Experience tranquility through smooth and calming massage therapy.",
    options: [
      { label: "60 Minutes", duration: 60, price: 95 },
      { label: "90 Minutes", duration: 90, price: 140 },
    ],
  },
  {
    id: "chair-massage",
    title: "Chair Massage",
    imageKey: "chair",
    description: "Quick stress relief focused on your back, neck, and shoulders.",
    options: [
      { label: "60 Minutes", duration: 60, price: 80 },
      { label: "90 Minutes", duration: 90, price: 120 },
    ],
  },
  {
    id: "bamboo-massage",
    title: "Bamboo Massage",
    imageKey: "bamboo",
    description: "Deep tissue work using warm bamboo rods for intense relief.",
    options: [
      { label: "60 Minutes", duration: 60, price: 115 },
      { label: "90 Minutes", duration: 90, price: 160 },
    ],
  },
  {
    id: "hot-stone-massage",
    title: "Hot Stone Massage",
    imageKey: "stone",
    description: "Feel your muscles unwind as heated stones ease tightness.",
    options: [
      { label: "60 Minutes", duration: 60, price: 120 },
      { label: "90 Minutes", duration: 90, price: 170 },
    ],
  },
];

export type TeamMember = {
  name: string;
  role: string;
  imageKey: ImageKey;
};

export const teamMembers: TeamMember[] = [
  {
    name: "Peggy",
    role: "Massage Therapist",
    imageKey: "theraP", // you MUST match the key in images.ts exactly
  },
  {
    name: "Jose",
    role: "Chiropractor/Massage Therapist",
    imageKey: "thera3",
  },
  {
    name: "Tessa",
    role: "Massage Therapist",
    imageKey: "thera4",
  },
  {
    name: "Samuel",
    role: "Massage Therapist",
    imageKey: "thera2",
  },
  {
    name: "Stefano",
    role: "Massage Therapist",
    imageKey: "thera1",
  },
];

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