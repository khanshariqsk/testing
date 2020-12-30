const events = require('events')
const eventEmiiter = new events.EventEmitter()

eventEmiiter.on('scream',function(){
    // setTimeout(()=>{console.log("IM here")},2000)
    for(i=1;i<20;i++){
        console.log("event forloop")
    }
})
eventEmiiter.emit('scream')
console.log("Im crossed")