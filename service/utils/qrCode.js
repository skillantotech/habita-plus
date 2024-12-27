const qrCode = require("qrcode");
const Visitor_new_visitentry = require("../models/Visitor_new_visitentry");

async function generateQRCodeImage(data) {
  try {
    const qrCodeBuffer = await qrCode.toBuffer(data);
    console.log("Generated QR code buffer:", qrCodeBuffer);
    return qrCodeBuffer;
  } catch (error) {
    console.error("Error generating QR code:", error);
    throw new Error("Failed to generate QR code");
  }
}

async function saveQRCodeImage(qrCodeImageBuffer, visit_entry_Id) {
  try {
    const visitorEntry = await Visitor_new_visitentry.findByPk(visit_entry_Id);
    if (!visitorEntry) throw new Error("Visitor entry not found");

    visitorEntry.qrCodeImage = qrCodeImageBuffer;
    await visitorEntry.save();
    return visitorEntry;
  } catch (error) {
    console.error("Error saving QR code image:", error);
    throw new Error("Unable to save QR code image");
  }
}

module.exports = {
  generateQRCodeImage,
  saveQRCodeImage,
};