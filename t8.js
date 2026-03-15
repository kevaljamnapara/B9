const person =[
    {name: "PQR", age: 38},
    {name: "ABC", age: 35},
    {name: "XYZ", age: 47}
]

max = person.sort((a,b)=>b.age-a.age)[0]
console.log(max)

var test = { "division1": {"name":["Z","B","H"]},"division2": {"name" :["Y","A","G"]}}
test.division1.name.sort()
test.division2.name.sort()
newarr = test.division1.name.concat(test.division2.name).sort()
console.log(newarr)

