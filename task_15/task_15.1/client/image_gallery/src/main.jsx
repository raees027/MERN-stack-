import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ImageUploadProvider } from "./Context/ImageUploadContext/ImageUploadContext.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <ImageUploadProvider>
      <App />
    </ImageUploadProvider>
  </>
);
