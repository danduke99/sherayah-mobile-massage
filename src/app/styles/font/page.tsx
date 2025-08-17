// src/styles/font/page.ts
import { Cookie, Playfair_Display } from "next/font/google";

export const cookie = Cookie({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-cookie",
  display: "swap",
});

export const playfairLight = Playfair_Display({
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
  variable: "--font-playfairlight",
  display: "swap",
});

export const playfairRegular = Playfair_Display({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
  variable: "--font-playfairregular",
  display: "swap",
});

export const playfairMedium = Playfair_Display({
  subsets: ["latin"],
  weight: ["500"],
  style: ["normal", "italic"],
  variable: "--font-playfairmedium",
  display: "swap",
});

export const playfairSemiBold = Playfair_Display({
  subsets: ["latin"],
  weight: ["600"],
  style: ["normal", "italic"],
  variable: "--font-playfairsemibold",
  display: "swap",
});

export const playfairBold = Playfair_Display({
  subsets: ["latin"],
  weight: ["700"],
  style: ["normal", "italic"],
  variable: "--font-playfairbold",
  display: "swap",
});

export const playfairExtraBold = Playfair_Display({
  subsets: ["latin"],
  weight: ["800"],
  style: ["normal", "italic"],
  variable: "--font-playfairextrabold",
  display: "swap",
});

export const playfairBlack = Playfair_Display({
  subsets: ["latin"],
  weight: ["900"],
  style: ["normal", "italic"],
  variable: "--font-playfairblack",
  display: "swap",
});
