import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus, faXmark } from "@fortawesome/free-solid-svg-icons";

import "./ImageGallery.css";
import { ImageUploadContext } from "../../Context/ImageUploadContext/ImageUploadContext";
import { useContext, useEffect, useState } from "react";

export const ImageGallery = () => {
  const {
    image,
    imagePreview,
    imageNames,
    progress,
    handleImage,
    fetchImageName,
    uploadImage,
    setImage,
  } = useContext(ImageUploadContext);

  const [showModal, setShowModal] = useState(false);

  console.log(image, "==imagePreview");
  useEffect(() => {
    fetchImageName();
  }, []);

  return (
    <>
      <div className="image-gallery-container">
        <h2>Photo Gallery</h2>
        <h3>A picture is worth thousand words.</h3>
        <div className="image-uploading-section">
          <div>
            <FontAwesomeIcon
              icon={faCirclePlus}
              style={{
                height: "35px",
                width: "35px",
                backgroundColor: "transparent",
                color: " #EED8C0",
                cursor: "pointer",
              }}
              onClick={() => setShowModal(true)}
            />
            {showModal && (
              <div className="modal-overlay">
                <div className="modal-box">
                  <div
                    className="close-btn"
                    onClick={() => setShowModal(false)}
                  >
                    <FontAwesomeIcon
                      icon={faXmark}
                      style={{ color: "#00000084" }}
                    />
                  </div>
                  <h3>Upload Image</h3>

                  <div>
                    {imagePreview && (
                      <img
                        src={imagePreview}
                        alt=""
                        style={{ width: "200px", height: "200px" }}
                      />
                    )}
                  </div>
                  <input type="file" accept="image/*" onChange={handleImage} />
                  <button
                    onClick={() => {
                      uploadImage();
                      setShowModal(false);
                    }}
                  >
                    Upload
                  </button>
                </div>
              </div>
            )}
          </div>

          <p>{image.name}</p>

          <div className="progress-bar" style={{ width: `${progress}%` }}></div>
          <div className="image-grid">
            {imageNames.map((data, index) => (
              <img
                src={`http://localhost:3005/images/${data}`}
                alt=""
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
