import axios from "axios";
import { createContext, useState } from "react";

export const ImageUploadContext = createContext();

export const ImageUploadProvider = ({ children }) => {
  const [image, setImage] = useState("");
  const [imagePreview, setImagePreview] = useState("");
  const [imageNames, setImageNames] = useState([]);
  const [progress, setProgress] = useState(0);
  const API_URL = "http://localhost:3005/api/image-grid/upload";

  const handleImage = (event) => {
    setImage(event.target.files[0]);
    setImagePreview(URL.createObjectURL(event.target.files[0]));
  };

  const uploadImage = async () => {
    const formData = new FormData();
    formData.append("upload_file", image);

    const response = await axios(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
      },

      onUploadProgress: (progressEvent) => {
        const percentCompleted = Math.round(
          (progressEvent.loaded * 100) / progressEvent.total
        );
        setProgress(percentCompleted);
      },
      data: formData,
    });

    console.log(response.data);
    fetchImageName();
    setImagePreview("");
    // setProgress(0);
  };

  const fetchImageName = async () => {
    const response = await axios("http://localhost:3005/api/image-grid");
    setImageNames(response.data);
  };

  return (
    <ImageUploadContext.Provider
      value={{
        image,
        imagePreview,
        imageNames,
        progress,
        handleImage,
        uploadImage,
        fetchImageName,
        setImage,
      }}
    >
      {children}
    </ImageUploadContext.Provider>
  );
};
