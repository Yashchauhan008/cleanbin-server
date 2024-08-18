const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dustbinSchema = new Schema(
  {
    type: {
      type: String,
      enum: ["dry", "wet"],
      default: "dry",
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    filledUp: {
      type: Number,
      default: 0,
      required: true,
    },
    isDamaged: {
      type: Boolean,
      default: false,
    },
    address: {
      type: String,
      required: true,
    },
    requestCount: {
      type: Number,
      default: 0,
    },
    isRequest: {
      type: Boolean,
      default: false,
    },
    requestTimeAndDate: { type: [Date], default: [] }, // Initialize as an empty array

    dustbinName: {
      type: Number,
      required: true,
      unique: true,
    },
    responsiblePerson: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

const Dustbin = mongoose.model("Dustbin", dustbinSchema);

module.exports = Dustbin;
