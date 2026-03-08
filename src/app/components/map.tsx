import type { ImageKey } from "@/app/components/media/images";
import type { VideoKey } from "@/app/components/media/video"; // NOTE: videos (plural) is recommended

export type CarouselItem =
  | { id: number; type: "image"; srcKey: ImageKey; alt?: string }
  | { id: number; type: "video"; srcKey: VideoKey; alt?: string };

export type ServiceOption = {
  label: string;
  duration: string;
  price: string;
};

export type Service = {
  title: string;
  imageKey: ImageKey;
  description: string;
  options: ServiceOption[];
};

export const services: Service[] = [
  {
    title: "Swedish Massage",
    imageKey: "swedish",
    description: "Gentle, flowing strokes that promote relaxation and reduce tension.",
    options: [
      { label: "30 Minutes", duration: "30 min", price: "$65" },
      { label: "60 Minutes", duration: "60 min", price: "$110" },
    ],
  },
  {
    title: "Back, Neck, Shoulder Massage",
    imageKey: "neck",
    description: "Relieve built-up stress and tension in the upper body.",
    options: [
      { label: "30 Minutes", duration: "30 min", price: "$50" },
      { label: "60 Minutes", duration: "60 min", price: "$100" },
    ],
  },
  {
    title: "Foot Massage",
    imageKey: "foot",
    description: "Soothe tired feet and improve circulation with targeted pressure.",
    options: [
      { label: "30 Minutes", duration: "30 min", price: "$65" },
    ],
  },
  {
    title: "Aromatherapy Massage",
    imageKey: "massage5",
    description: "Enhance well-being with therapeutic essential oils and soft touch.",
    options: [
      { label: "60 Minutes", duration: "60 min", price: "$120" },
    ],
  },
  {
    title: "Deep Tissue Massage",
    imageKey: "hotOil",
    description: "Target deep muscle tension with firm pressure designed to release tightness and restore mobility.",
    options: [
      { label: "60 Minutes", duration: "60 min", price: "$130" },
      { label: "90 Minutes", duration: "90 min", price: "$150" },
    ],
  },
  {
    title: "Relax Massage",
    imageKey: "massage4",
    description: "Experience tranquility through smooth and calming massage therapy.",
    options: [
      { label: "60 Minutes", duration: "60 min", price: "$120" },
      { label: "90 Minutes", duration: "90 min", price: "$130" },
    ],
  },
  {
    title: "Chair Massage",
    imageKey: "chair",
    description: "Quick stress relief focused on your back, neck, and shoulders.",
    options: [
      { label: "50 Minutes", duration: "50 min", price: "$75" },
    ],
  },
  {
    title: "Bamboo Massage",
    imageKey: "bamboo",
    description: "Deep tissue work using warm bamboo rods for intense relief.",
    options: [
      { label: "60 Minutes", duration: "60 min", price: "$150" },
      { label: "90 Minutes", duration: "90 min", price: "$160" },
    ],
  },
  {
    title: "Hot Stone Massage",
    imageKey: "stone",
    description: "Feel your muscles unwind as heated stones ease tightness.",
    options: [
      { label: "60 Minutes", duration: "60 min", price: "$150" },
      { label: "90 Minutes", duration: "90 min", price: "$160" },
    ],
  },
  {
    title: "Couple Massage",
    imageKey: "massage5",
    description: "Share a relaxing massage experience side by side with your partner.",
    options: [
      { label: "60 Minutes", duration: "60 min", price: "$260" },
      { label: "90 Minutes", duration: "90 min", price: "$270" },
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