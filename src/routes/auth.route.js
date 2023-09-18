const router = require('express').Router();
const config = require('../config');

router.get('/', async (req, res) => {
  config.app_id;
  if (req.query.code) {
    let access_token_url = 'https://api.instagram.com/oauth/access_token';

    const response = await fetch(access_token_url, {
      method: 'POST',
      headers:{
        'Content-Type': 'application/x-www-form-urlencoded'
      },    
      body: new URLSearchParams({
          'client_id': config.app_id,
          'client_secret': config.app_secret,
          'grant_type': 'authorization_code',
          'redirect_uri': config.redirect_uri,
          'code': req.query.code,
      })
    });

    const data = await response.json();
    res.send(data);
  }
  else {
    res.send(req);
  }
});

module.exports = {
  router, 
};