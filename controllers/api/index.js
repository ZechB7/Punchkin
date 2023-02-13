const router = require('express').Router();
const userRoutes = require('./userRoutes');
const projectRoutes = require('./projectRoutes');
const gearRoutes = require('./gearRoutes');


router.use('/users', userRoutes);
router.use('/projects', projectRoutes);
router.use('/gear', gearRoutes);

module.exports = router;