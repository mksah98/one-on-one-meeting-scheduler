const express = require("express");
const db = require("../models");

//get all movies
const getAllMeetings =  async (req, res) => {
  const { Meetings } = db;

  const meetings = await Meetings.findAll({
  });

  res.status(200).json({success:true, meetings})

};

module.exports={
    getAllMeetings
}