const mongoose = require("mongoose");

const comicSchema = new mongoose.Schema({
  title: { type: String, required: true },
  genre: { type: String, required: true },
  description: { type: String },
  coverImage: { type: String },  // path or URL to the cover image
  chapters: [
    {
      title: String,
      images: [String], // array of image URLs or paths for each chapter page
      createdAt: { type: Date, default: Date.now },
    }
  ],
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Comic", comicSchema);
