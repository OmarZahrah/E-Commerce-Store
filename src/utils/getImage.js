export const getImage = (image) => {
  return import.meta.env.VITE_UPLOAD_URL + image.attributes.url;
};
