const os = require('os');

// info about current user
const user = os.userInfo();
console.log(user);

// how long the computer is on ( up time in seconds)
console.log(`System up time is ${os.uptime()} seconds`);
console.log(`System up time is ${(os.uptime() / 60)/60} hrs`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOS);
