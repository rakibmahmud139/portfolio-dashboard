const image_hosting = "f8d60e7198e709546f5742c3031873ee";

const img_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting}`;

export const imageUpload = async (image: File) => {
  const formData = new FormData();
  formData.append("image", image);
  let imgUrl;
  await fetch(img_hosting_url, {
    method: "POST",
    body: formData,
  })
    .then((res) => res.json())
    .then((imgRes) => {
      if (imgRes.success) {
        imgUrl = imgRes.data.display_url;
      } else {
        console.log("image not uploaded");
      }
    });

  return imgUrl;
};
