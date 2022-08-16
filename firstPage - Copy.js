let student1 = {
    name : 'younes',
    age:36
}

let student2 = JSON.parse(JSON.stringify(student1))




let colors = ['blue','yellow','red','green'];

for(key of colors){
    console.log(key)
};

let user = {
    name:'younes',
    age:36,
    situation:'director'
};
console.log(user)
for(key in user){
    console.log(key , user[key])
};


let teacher = [
    {name:'younes',age:36 ,situation:true},
    {name:'tirdad',age:20,situation:false},
    {name:'sheikhlar',age:25,situation:true},
    {name:'jam',age:41,situation:false}
]

teacher.forEach(teacher => {
    console.log(teacher.name);
    console.log(teacher.age)
    console.log(teacher.situation)
    console.log('----------')
})