const { Schema, model, Types } = require("mongoose");

const authorizationSchema = new Schema(
  {
    application_id: {
      type: Types.ObjectId,
      ref: "Application",
    },
    token: String,
  },
  {
    versionKey: false,
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);

module.exports = model("Authorization", authorizationSchema);
