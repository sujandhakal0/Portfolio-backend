import mongoose from "mongoose";

const ApplicationSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  svg: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
});

export const Application = mongoose.model(
  "Application",
  ApplicationSchema
);