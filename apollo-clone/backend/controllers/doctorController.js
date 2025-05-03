// controllers/doctorController.js
const Doctor = require('../models/doctorModel');

const listDoctorsWithFilter = async (req, res) => {
  try {
    const { specialty, location, experience, fees, page = 1, limit = 5 } = req.query;

    const currentPage = parseInt(page);
    const pageSize = parseInt(limit);
    const skip = (currentPage - 1) * pageSize;

    let filter = {};

    if (specialty) {
      filter.specialty = { $regex: specialty, $options: 'i' };
    }

    if (location) {
      filter.location = { $regex: location, $options: 'i' };
    }

    if (experience) {
      const experienceRanges = Array.isArray(experience) ? experience : [experience];
      const experienceConditions = experienceRanges.map(range => {
        const [min, max] = range.split('-').map(Number);
        return max !== undefined
          ? { experience: { $gte: min, $lte: max } }
          : { experience: { $gte: min } };
      });
      filter.$or = [...(filter.$or || []), ...experienceConditions];
    }

    if (fees) {
      const feeRanges = Array.isArray(fees) ? fees : [fees];
      const feeConditions = feeRanges.map(range => {
        if (range === '1000+') return { consultationFee: { $gte: 1000 } };
        const [min, max] = range.split('-').map(Number);
        return { consultationFee: { $gte: min, $lte: max } };
      });
      filter.$or = [...(filter.$or || []), ...feeConditions];
    }

    const total = await Doctor.countDocuments(filter);
    const doctors = await Doctor.find(filter).skip(skip).limit(pageSize);
    const totalPages = Math.ceil(total / pageSize);

    res.json({
      success: true,
      data: doctors,
      pagination: {
        total,
        page: currentPage,
        limit: pageSize,
        totalPages,
      },
    });
  } catch (err) {
    console.error('Error fetching doctors:', err);
    res.status(500).json({ success: false, error: 'Server error' });
  }
};

module.exports = { listDoctorsWithFilter };