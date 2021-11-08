const express = require("express");
const db = require("../models");

//get all movies
const getAllActionItems =  async (req, res) => {
  const { Action_items } = db;

  const actionItems = await Action_items.findAll({
  });

  res.status(200).json({success:true, actionItems})

};

module.exports={
    getAllActionItems
}