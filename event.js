console.log('Bismi Allah')

//import EventEmitter from node:events

const EventEmitter = require('events')
const celebrity = new EventEmitter();

//subscribe to celebrity event for Observer1
celebrity.on('race', function(result){
    if(result=='win'){
        console.log('Congradulation! You are the best')
    }else{
        console.log('Sorry!, You are not the best')
    }
})

celebrity.emit('race', 'win')
celebrity.emit('race')
process.on('exit',(code)=>{
    console.log('process exit event with code ', code)
})