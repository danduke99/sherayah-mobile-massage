export const videos = {
  carousel1: "1_sgzpi0",
  belVid: "belVid_xni2h4",
  home: "home_cozpzb",
  loc: "loc_labxuq",
  work: "work_b8vugi",
  work2: "work2_zfp2vt",
} as const;

export type VideoKey = keyof typeof videos;