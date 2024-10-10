// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// const dustbinSchema = new Schema(
//   {
//     type: {
//       type: String,
//       enum: ["dry", "wet"],
//       default: "dry",
//       required: true,
//     },
//     color: {
//       type: String,
//       required: true,
//     },
//     filledUp: {
//       type: Number,
//       default: 0,
//       required: true,
//     },
//     isDamaged: {
//       type: Boolean,
//       default: false,
//     },
//     address: {
//       type: String,
//       required: true,
//     },
//     requestCount: {
//       type: Number,
//       default: 0,
//     },
//     isRequest: {
//       type: Boolean,
//       default: false,
//     },
//     requestTimeAndDate: { type: [Date], default: [] }, // Initialize as an empty array

//     dustbinName: {
//       type: Number,
//       required: true,
//       unique: true,
//     },
//     responsiblePerson: {
//       type: String,
//       required: true,
//     },
//   },
//   {
//     timestamps: true, // Automatically adds createdAt and updatedAt fields
//   }
// );

// const Dustbin = mongoose.model("Dustbin", dustbinSchema);

// module.exports = Dustbin;
const mongoose = require("mongoose");

const dustbinSchema = new mongoose.Schema(
  {
    dustbinId: {
      type: String,
      unique: true,
      default: () => new mongoose.Types.ObjectId(), // Automatically generate ObjectId
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
    dustbinName: { type: String, required: true }, // Should it be Number instead?
    responsiblePerson: { type: String, required: true },
    isDamaged: { type: Boolean, required: true },
    requestTimeAndDate: { type: Date, default: null }, // Change to a single date
    requestCount: {
      type: Number,
      default: 0,
    },
    isRequest: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt fields
);

const Dustbin = mongoose.model("Dustbin", dustbinSchema);

module.exports = Dustbin;
