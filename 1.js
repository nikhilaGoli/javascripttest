var jsonData = [{'id':1, 'type': 'external'}, {'id':2}, {'id':3, type: 'internal'}];
var answer = jsonData.filter(item => item.type);
console.log(answer)