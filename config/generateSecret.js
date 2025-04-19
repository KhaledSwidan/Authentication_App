// generateSecrets.js
const crypto = require('crypto');

const accessTokenSecret = crypto.randomBytes(32).toString('base64');
const refreshTokenSecret = crypto.randomBytes(32).toString('base64');

console.log('ACCESS_TOKEN_SECRET =', accessTokenSecret);
console.log('REFRESH_TOKEN_SECRET =', refreshTokenSecret);
