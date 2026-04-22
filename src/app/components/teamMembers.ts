import type { ImageKey } from "@/app/components/media/images";

export type TeamMember = {
  name: string;
  role: string;
  imageKey: ImageKey;
};

export const teamMembers: TeamMember[] = [
  {
    name: "Peggy",
    role: "Massage Therapist",
    imageKey: "theraP",
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
