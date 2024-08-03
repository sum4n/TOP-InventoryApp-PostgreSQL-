const asyncHandler = require("express-async-handler");
const db = require("../db/itemTypeQueries");

exports.listItemTypes = asyncHandler(async (req, res) => {
  let itemTypes = await db.getAllItemTypes();
  res.render("pages/item_types/itemTypes", {
    title: "Item Types",
    itemTypes,
  });
});

exports.getItemType = asyncHandler(async (req, res) => {
  let itemType = await db.getItemType(req.params.id);
  res.render("pages/item_types/itemTypeDescription", {
    title: "Item Type Description",
    itemType,
  });
});

exports.createItemType_get = asyncHandler(async (req, res) => {
  res.render("pages/item_types/itemTypeForm", {
    title: "Create Item Type",
  });
});

exports.createItemType_post = asyncHandler(async (req, res) => {
  const itemTypeName = req.body.type_name;
  await db.insertItemType(itemTypeName);
  res.redirect("/item_types");
});

exports.updateItemType_get = asyncHandler(async (req, res) => {
  res.send("Update Item Type GET (WIP)");
});

exports.updateItemType_post = asyncHandler(async (req, res) => {
  res.send("Update Item Type POST (WIP)");
});

exports.deleteItemType_get = asyncHandler(async (req, res) => {
  res.send("Delete Item Type GET (WIP)");
});

exports.deleteItemType_post = asyncHandler(async (req, res) => {
  res.send("Delete Item Type POST (WIP)");
});
