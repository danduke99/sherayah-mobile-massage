const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

if (!CLOUD_NAME) {
  throw new Error("Missing NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME");
}

export const cloudinaryVideoUrl = (
  publicId: string,
  transform = "f_auto,q_auto"
) => `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/${transform}/${publicId}`;
