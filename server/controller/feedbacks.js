const express = require("express");
const db = require("../models");

//get all movies
const getAllFeedbacks =  async (req, res) => {
  const { Feedbacks } = db;

  const feedbacks = await Feedbacks.findAll({
  });

  res.status(200).json({success:true, feedbacks})

};

module.exports={
    getAllFeedbacks
}