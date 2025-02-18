const os=require('os')//this is built in, not external(needs installation)

//info about current user
const user = os.userInfo()
console.log(user)

//returns the system uptime in seocnds
console.log(`The system has been on for ${os.uptime()} seconds`)

const currentos= {
    name: os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentos)