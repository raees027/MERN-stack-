const express = require("express");
const cors = require("cors");
const multer = require("multer");
const fs = require("fs");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/images");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const extension = file.originalname.split(".").pop();
    cb(null, file.fieldname + "-" + uniqueSuffix + "." + extension);
  },
});

const upload = multer({ storage: storage });

app.get("/api/image-grid", (req, res) => {
  const imagesFolder = path.join(__dirname, "public/images");

  fs.readdir(imagesFolder, (err, files) => {
    if (err) {
      console.error("Error reading folder:", err);
      return res.status(500).json({ error: "Unable to read images folder" });
    }

    const imageFiles = files.filter((file) => {
      return (
        file.endsWith(".png") ||
        file.endsWith(".jpg") ||
        file.endsWith(".jpeg") ||
        file.endsWith(".webp") ||
        file.endsWith(".gif")
      );
    });

    res.json(imageFiles);
  });
});

app.post("/api/image-grid/upload", upload.single("upload_file"), (req, res) => {
  console.log(req.url);
  console.log(req.file);

  res.json("image uploaded !!!!!");
});

PORT = 3005;
app.listen(PORT, () => {
  console.log(`Server started running in ${PORT}`);
});
