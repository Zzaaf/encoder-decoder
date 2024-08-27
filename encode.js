const crypto = require('crypto');

const iv = crypto.randomBytes(16); // генерация вектора инициализации
const key = crypto.scryptSync('secret', 'salt', 32); // генерация секретного ключа

const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
let encryptedData = cipher.update('Elbrus', 'utf8', 'hex');
encryptedData += cipher.final('hex');

const output = iv.toString('hex') + ':' + encryptedData;

module.exports = { key, output };