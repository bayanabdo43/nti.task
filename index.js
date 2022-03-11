const fs = require ('fs')
const yargs = require('yargs')
const student = require('./student')
yargs.command({
    command:'add',
    describe:'add students data',
    builder:{
        id:{
            describe:'add id to student',
            demandoption:true,
            type: number
        },
        name:{
            describe:'name student',
            demandoption:true,
            type:'string'
        },
        degree:{
            describe:'student degree',
            demandoption:true,
            type:'string'
        },
        comment:{
            describe:'add comment',
            type:'string'

        }

    },
    handler:(x)=>{
        console.log(x.id,x.name,x.degree,x.comment)
    
    }

})


////////////
yargs.command({
    command:'delet',
    describe:'delet student',
    builder:{
        id:{
            describe:'student id',
            demandoption:true,
            type:'number'
        }
    },
    handler:()=>{

    }
})

///////////////
yargs.command({
    command:'read',
    describe:'read data',
    builder:{
        id:{
            describe:'student id',
            demandoption:true,
            type:'number'
        }
    },
    handler:()=>{
        
    }
})
//////////////
yargs.command({
    command:'list',
    describe:'list student',
    handler:()=>{
        
    }
})



yargs.parse()