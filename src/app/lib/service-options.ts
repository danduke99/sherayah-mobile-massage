import type { ServiceOption } from "./service-types";

export const DEFAULT_SERVICE_OPTIONS: ServiceOption[] = [
  { label: "60 Minutes", duration: 60, price: 100 },
  { label: "90 Minutes", duration: 90, price: 145 },
];

export const SERVICE_OPTIONS_BY_SLUG: Record<string, ServiceOption[]> = {
  "swedish-massage": [
    { label: "60 Minutes", duration: 60, price: 100 },
    { label: "90 Minutes", duration: 90, price: 145 },
  ],
  "head-neck-shoulder-massage": [
    { label: "60 Minutes", duration: 60, price: 90 },
    { label: "90 Minutes", duration: 90, price: 130 },
  ],
  "foot-massage": [
    { label: "60 Minutes", duration: 60, price: 85 },
    { label: "90 Minutes", duration: 90, price: 125 },
  ],
  "aromatic-massage": [
    { label: "60 Minutes", duration: 60, price: 105 },
    { label: "90 Minutes", duration: 90, price: 150 },
  ],
  "hot-oil-massage": [
    { label: "60 Minutes", duration: 60, price: 110 },
    { label: "90 Minutes", duration: 90, price: 155 },
  ],
  "relax-massage": [
    { label: "60 Minutes", duration: 60, price: 95 },
    { label: "90 Minutes", duration: 90, price: 140 },
  ],
  "chair-massage": [
    { label: "60 Minutes", duration: 60, price: 80 },
    { label: "90 Minutes", duration: 90, price: 120 },
  ],
  "bamboo-massage": [
    { label: "60 Minutes", duration: 60, price: 115 },
    { label: "90 Minutes", duration: 90, price: 160 },
  ],
  "hot-stone-massage": [
    { label: "60 Minutes", duration: 60, price: 120 },
    { label: "90 Minutes", duration: 90, price: 170 },
  ],
};
