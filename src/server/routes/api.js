const express = require('express');
const router = express.Router();

router.post('/contact', (req, res) => {
  console.log(req.body);
  res.status(200).send('AZ Cakes');
});

module.exports = router;
