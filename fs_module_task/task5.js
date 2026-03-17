fs = require('fs')

fs.writeFileSync('1.txt','43 34 62 2 63')

data = fs.readFileSync('1.txt','utf-8')

arr = data.split(' ')

sort = arr.sort((a,b)=>a-b)
max = sort[sort.length-1]

fs.appendFileSync('1.txt','\nSorted Array = '+sort)
fs.appendFileSync('1.txt','\nMaximum number = '+max)