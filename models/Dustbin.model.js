const mongoose = require("mongoose");

const dustbinSchema = new mongoose.Schema(
  {
    dustbinId: {
      type: String,
      unique: true,
      default: () => new mongoose.Types.ObjectId(),
    },
    type: {
      type: String,
      required: true,
      enum: ["dry", "wet"],
      default: "dry",
    },
    color: { type: String, required: true },
    filledUp: { type: Number, required: true },
    address: { type: String, required: true },
    dustbinName: { type: String, required: true },
    responsiblePerson: { type: String, required: true },
    isDamaged: { type: Boolean, required: true },
    qrcode: { type: String, required: true }, // New QR Code field
    requestCount: {
      type: Number,
      default: 0,
    },
    isRequest: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Dustbin = mongoose.model("Dustbin", dustbinSchema);

module.exports = Dustbin;
