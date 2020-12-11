const express = require('express');
const passport = require('passport');
const router = express.Router();

router.get('/',(req,res)=>{
    if(!req.isAuthenticated()){
        req.session.returnTo = req.originalUrl;
        req.flash('error','You must be signed in');
        return res.redirect('/login');
    }
    res.redirect('https://dreamy-ritchie-b7b58e.netlify.app/');
});

module.exports = router;