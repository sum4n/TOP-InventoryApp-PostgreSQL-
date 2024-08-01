const asyncHandler = require("express-async-handler");
const db = require("../db/slotQueries");

exports.listSlots = asyncHandler(async (req, res) => {
  const slots = await db.getAllSlots();
  res.render("pages/slots/slots", {
    title: "Slots list",
    slots,
  });
});

exports.getSlot = asyncHandler(async (req, res) => {
  const slot = await db.getSlot(req.params.id);
  res.render("pages/slots/slotDescription", {
    title: "Slot Description",
    slot,
  });
  // res.send(slot);
});

exports.createSlot_get = asyncHandler(async (req, res) => {
  res.send("Create slot page GET (WIP)");
});

exports.createSlot_post = asyncHandler(async (req, res) => {
  res.send("Create slot page POST (WIP)");
});

exports.updateSlot_get = asyncHandler(async (req, res) => {
  res.send("Slot update page GET (WIP)");
});

exports.updateSlot_post = asyncHandler(async (req, res) => {
  res.send("Slot update page POST (WIP)");
});

exports.deleteSlot_get = asyncHandler(async (req, res) => {
  res.send("Slot delete page GET (WIP)");
});

exports.deleteSlot_post = asyncHandler(async (req, res) => {
  res.send("Slot delete page POST (WIP)");
});
