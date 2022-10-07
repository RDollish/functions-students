const createStudent = () => {
 const Student = {
    name: ''
    ,grade: ''
    ,history: ''
    ,math: ''
    ,science: ''
}
return Student
}

let studentGrades = createStudent()
const addName = (objName) => {
    objName.name = "Renee Doll"
    return objName
}
addName(studentGrades)
const addGrade= (objName) => {
    objName.grade = "27"
    return objName
}
addGrade(studentGrades)
const addMath = (objName) => {
    objName.math = "B"
    return objName
}
addMath(studentGrades)
const addHistory = (objName) => {
    objName.history = "C"
    return objName
}
addHistory(studentGrades)
const addScience = (objName) => {
    objName.science = "A"
    return objName
}
addScience(studentGrades)
console.log(studentGrades)