import type { Service } from "@/app/lib/service-types";

export const fallbackServices: Service[] = [
  {
    id: "swedish-massage",
    slug: "swedish-massage",
    title: "Swedish Massage",
    imageKey: "swedish",
    description:
      "Gentle, flowing strokes that promote relaxation and reduce tension.",
    options: [
      { label: "60 Minutes", duration: 60, price: 100 },
      { label: "90 Minutes", duration: 90, price: 145 },
    ],
  },
  {
    id: "head-neck-shoulder-massage",
    slug: "head-neck-shoulder-massage",
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
    slug: "foot-massage",
    title: "Foot Massage/Reflexolog",
    imageKey: "foot",
    description:
      "Soothe tired feet and improve circulation with targeted pressure.",
    options: [
      { label: "60 Minutes", duration: 60, price: 85 },
      { label: "90 Minutes", duration: 90, price: 125 },
    ],
  },
  {
    id: "aromatic-massage",
    slug: "aromatic-massage",
    title: "Aromatic Massage",
    imageKey: "massage5",
    description:
      "Enhance well-being with therapeutic essential oils and soft touch.",
    options: [
      { label: "60 Minutes", duration: 60, price: 105 },
      { label: "90 Minutes", duration: 90, price: 150 },
    ],
  },
  {
    id: "hot-oil-massage",
    slug: "hot-oil-massage",
    title: "Deep Tissue Massage",
    imageKey: "hotOil",
    description: "Melt away stress with nourishing, warm oils and deep strokes.",
    options: [
      { label: "60 Minutes", duration: 60, price: 110 },
      { label: "90 Minutes", duration: 90, price: 155 },
    ],
  },
  {
    id: "relax-massage",
    slug: "relax-massage",
    title: "Relax Massage",
    imageKey: "massage4",
    description:
      "Experience tranquility through smooth and calming massage therapy.",
    options: [
      { label: "60 Minutes", duration: 60, price: 95 },
      { label: "90 Minutes", duration: 90, price: 140 },
    ],
  },
  {
    id: "chair-massage",
    slug: "chair-massage",
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
    slug: "bamboo-massage",
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
    slug: "hot-stone-massage",
    title: "Hot Stone Massage",
    imageKey: "stone",
    description: "Feel your muscles unwind as heated stones ease tightness.",
    options: [
      { label: "60 Minutes", duration: 60, price: 120 },
      { label: "90 Minutes", duration: 90, price: 170 },
    ],
  },
];
