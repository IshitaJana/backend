const express = require('express');
const router = express.Router();
const jwtVerify = require('../config/jwtHelper');
const passport = require('passport');


const ctrlUser = require('../controllers/user.controller');

router.post('/register', ctrlUser.register);

router.post('/login', ctrlUser.authenticate);

router.post('/forgot', ctrlUser.forgot);

router.get('/reset/:token', ctrlUser.reset);
router.post('/reset/:token', ctrlUser.resetPassword);
router.post('/company',ctrlUser.CompanyRegister)

// router.get('/auth/google', passport.authenticate('google', {
//   scope: ['profile']
// }), (req, res)=> {
//   res.status(200).json({status: true});
// });

// router.get('/auth/google/redirect', passport.authenticate('google'), (req, res) => {
//   res.send('You have reached the callback url');
// });

router.get('/user-profile', jwtVerify.verifyJwtToken, ctrlUser.userProfile);

// router.get('/forgot', function(req, res) {
//     res.redirect('/reset');
//   });



module.exports = router;
