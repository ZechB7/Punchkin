const router = require('express').Router();
const { Project, User , Monster,  Treasure} = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const projectData = await Project.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    // Serialize data so the template can read it
    const projects = projectData.map((project) => project.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', { 
      projects, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/demo', async (req, res) => {
  try {
    RandoId = Math.floor(Math.random() * 5) + 1
    const monsterData = await Monster.findOne({
      where: {
        id: RandoId,
      }
    });
    const monster = monsterData.get({ plain: true });
    console.log(monster)
    // res.status(200).json(monster);
    res.render('combat', {
      monster,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/treasures', async (req, res) => {
  try {

    const treasureData = await Treasure.findAll();
    const treasures = treasureData.map((treasure) =>
      treasure.get({ plain: true })
    );
    console.log(treasures);

    res.status(200).json(treasures);
    console.log("All Monsters: " + JSON.stringify(treasures));
    console.log("One Monster: " + JSON.stringify(treasures[1]));
    console.log("Should read Maul Rat:" + treasures[1].name);
    // res.render('combat', {
    //   ...treasures,
    //   logged_in: req.session.logged_in
    // });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/treasure/:id', async (req, res) => {
  try {

    const treasureData = await Treasure.findOne({
      where: {
        id: req.params.id,
      }
    });
    const treasure = treasureData.get({ plain: true });
    console.log(treasure)
    // res.status(200).json(treasure);
    res.render('combat', {
      treasure,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/monsters', async (req, res) => {
  try {

    const monsterData = await Monster.findAll();
    const monsters = monsterData.map((monster) =>
      monster.get({ plain: true })
    );
    console.log(monsters);

    res.status(200).json(monsters);
    console.log("All Monsters: " + JSON.stringify(monsters));
    console.log("One Monster: " + JSON.stringify(monsters[1]));
    console.log("Should read Maul Rat:" + monsters[1].name);
    // res.render('combat', {
    //   ...monsters,
    //   logged_in: req.session.logged_in
    // });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/monster/:id', async (req, res) => {
  try {

    const monsterData = await Monster.findOne({
      where: {
        id: req.params.id,
      }
    });
    const monster = monsterData.get({ plain: true });
    console.log(monster)
    // res.status(200).json(monster);
    res.render('combat', {
      monster,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Project }],
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

router.get('/combat', (req, res) => {
  if (!req.session.logged_in) {
    res.redirect('/login');
    return;
  }
  res.render('combat',{
      logged_in: true
    });
});

router.get('/scoreboard', (req, res) => {
  if (!req.session.logged_in) {
    res.redirect('/login');
    return;
  }
  res.render('scoreboard',{
    logged_in: true
  });
});

module.exports = router;