const express = require("express");
const db = require("../models");

//get all movies
const getAllEmployees =  async (req, res) => {
  const { Employees } = db;

  const employees = await Employees.findAll({
  });

  res.status(200).json({success:true, employees})

};

module.exports={
    getAllEmployees
}