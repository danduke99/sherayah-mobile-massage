export const services = [
  {
    title: "Swedish Massage",
    image: "/images/swedish.jpg",
    description: "Gentle, flowing strokes that promote relaxation and reduce tension.",
  },
  {
    title: "Head, Neck, Shoulder Massage",
    image: "/images/neck.jpg",
    description: "Relieve built-up stress and tension in the upper body.",
  },
  {
    title: "Foot Massage",
    image: "/images/foot.jpg",
    description: "Soothe tired feet and improve circulation with targeted pressure.",
  },
  {
    title: "Aromatic Massage",
    image: "/images/massage5.jpg",
    description: "Enhance well-being with therapeutic essential oils and soft touch.",
  },
  {
    title: "Hot Oil Massage",
    image: "/images/hotOil.jpg",
    description: "Melt away stress with nourishing, warm oils and deep strokes.",
  },
  {
    title: "Relax Massage",
    image: "/images/massage4.jpg",
    description: "Experience tranquility through smooth and calming massage therapy.",
  },
  {
    title: "Chair Massage",
    image: "/images/Chair.jpg",
    description: "Quick stress relief focused on your back, neck, and shoulders.",
  },
  {
    title: "Bamboo Massage",
    image: "/images/bamboo.jpg",
    description: "Deep tissue work using warm bamboo rods for intense relief.",
  },
  {
    title: "Hot Stone Massage",
    image: "/images/stone.jpg",
    description: "Feel your muscles unwind as heated stones ease tightness.",
  },
];

export const teamMembers = [
  {
    name: "Jane Doe",
    role: "Head Masseuse",
    image: "/images/headshot1.jpg",
  },
  {
    name: "John Doe",
    role: "Masseuse",
    image: "/images/headshot2.jpg",
  },
  {
    name: "Janet Doe",
    role: "Chiropractor",
    image: "/images/headshot3.jpg",
  },
  {
    name: "Janet Doe",
    role: "Chiropractor",
    image: "/images/headshot3.jpg",
  },
  {
    name: "Janet Doe",
    role: "Chiropractor",
    image: "/images/headshot3.jpg",
  },{
    name: "Janet Doe",
    role: "Chiropractor",
    image: "/images/headshot3.jpg",
  },
  {
    name: "Janet Doe",
    role: "Chiropractor",
    image: "/images/headshot3.jpg",
  },
];

export type CarouselItem = {
  id: number;
  type: "image" | "video";
  src: string;
  alt?: string; // optional for videos
};

export const carouselImages: CarouselItem[] = [
  { id: 1,  type: "image", src: "/images/1.jpeg" },
  { id: 2,  type: "video", src: "/images/1.mp4" },
  { id: 3,  type: "image", src: "/images/2.jpeg" },
  { id: 4,  type: "image", src: "/images/anni.jpeg" },
  { id: 5, type: "image", src: "/images/beach.jpeg" },
  { id: 6, type: "image", src: "/images/beachW.jpeg" },
  { id: 7, type: "image", src: "/images/belairMassage.jpeg" },
  { id: 8, type: "video", src: "/images/belVid.mp4" },
  { id: 9, type: "image", src: "/images/coup.jpeg" },
  { id: 10, type: "image", src: "/images/couple.jpeg" },
  { id: 11, type: "video", src: "/images/home.mp4" },
  { id: 12, type: "video", src: "/images/loc.mp4" },
  { id: 13, type: "image", src: "/images/peggyOT.jpeg" },
  { id: 14, type: "image", src: "/images/wit.jpeg" },
  { id: 15, type: "image", src: "/images/wit2.jpeg" },
  { id: 16, type: "video", src: "/images/work.mp4" },
  { id: 17, type: "video", src: "/images/work2.mp4" },
];
