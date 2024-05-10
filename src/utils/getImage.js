export const getImage = (image) => {
  console.log(
    "single image",
    import.meta.env.VITE_UPLOAD_URL + image.attributes.url
  );
  return import.meta.env.VITE_UPLOAD_URL + image.attributes.url;
};
