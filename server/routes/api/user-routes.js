const router = require('express').Router();
const {
  createUser,
  getSingleUser,
  getAllUser,
  login,
  updateUserData,
  saveUserLink,
  updateDisplayname
} = require('../../controllers/user-controller');

// import middleware
const { authMiddleware } = require('../../utils/auth');

// put authMiddleware anywhere we need to send a token for verification of user
router
  .route('/')
  .get(getAllUser)
  .post(createUser)
  .put(authMiddleware, createUser);

router
    .route("/profile/:id")
    .get(getSingleUser)
    .put(authMiddleware, updateDisplayname)
    .put(authMiddleware, updateUserData);

router
  .route('/login')
  .get(authMiddleware, getSingleUser)
  .put(authMiddleware, saveUserLink)
  .post(login);

router
  .route('/me')
  .get(authMiddleware, getSingleUser);

router
  .route('/')

module.exports = router;