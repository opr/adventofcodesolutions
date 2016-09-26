let crypto = require('crypto'),
    found = false,
    secret = 'bgvyzdsv';

for(let i = 0; !found; i++){
    let hash = crypto.createHash('md5').update(secret + i).digest('hex');
    if( hash.substr(0,5) == '00000' ) {
        found = true;
        console.log( secret+i, hash);
    }
}

found = false;
for(let i = 0; !found; i++){
    let hash = crypto.createHash('md5').update(secret + i).digest('hex');
    if( hash.substr(0,6) == '000000' ) {
        found = true;
        console.log( secret+i, hash);
    }
}