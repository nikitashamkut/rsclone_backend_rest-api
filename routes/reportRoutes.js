import express from "express";
import asyncHandler from "express-async-handler";
import Report from "../models/reportModel.js";
const router = express.Router();

// @desc    Fetch all reports
// @route   GET /api/reports
// @access  Public
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const reports = await Report.find({});

    res.json(reports);
  })
);

// @desc    Fetch reports by city
// @route   GET /api/reports/:city
// @access  Public
router.get(
  "/:city",
  asyncHandler(async (req, res) => {
    const reports = await Report.find({ city: req.params.city });

    if (reports.length > 0) {
      res.json(reports);
    } else {
      res.status(404);
      throw new Error("Reports not found");
    }
  })
);

export default router;
