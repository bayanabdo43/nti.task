const fs = require('fs')
const addstudent =(id,name,degree,comment)=>{
    const student = loadNotes()
    student.push({
        id:id,
        name,
        degree,
        comment
    })
    savedata(student)
}

const loadNotes =()=>{
    const data = fs.readFileSync('student.json').toString()
    return Json.parse(data)
}

const savedata = (student) =>{
    const saveprod = JSON.stringify(student)
    fs.writeFileSync('student.json','saveprod')
}

module.exports ={
    addstudent
}