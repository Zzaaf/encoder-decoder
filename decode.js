const crypto = require('crypto');
const { key, output } = require('./encode'); // строка вида: 'iv:encryptedData'

// делим строку на IV и зашифрованные данные
const [ivString, encryptedData] = output.split(':');

// преобразуем IV из hex в Buffer
const iv = Buffer.from(ivString, 'hex');
// преобразуем зашифрованные данные из hex в Buffer
const encryptedBuffer = Buffer.from(encryptedData, 'hex');

const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
let decryptedData = decipher.update(encryptedBuffer, null, 'utf8');
decryptedData += decipher.final('utf8');

console.log(decryptedData);