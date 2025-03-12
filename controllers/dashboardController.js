const User = require('../models/User');

exports.getDashboard = async (req, res) => {
  try {
    const user = await User.findByPk(req.userId, {
      attributes: { exclude: ['password'] },
    });
    res.status(200).json({ message: 'Dashboard data', user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};