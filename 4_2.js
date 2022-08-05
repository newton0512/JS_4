const protoObj = {
    a: 1,
    hello: 2,
    '': 3,
    123: 4,
    var: 5,
}
obj = Object.create(protoObj)
obj.own1 = 123
obj.ownStr = 'own string'

function hasProperties(str, a){
    if(str in a) return true
    else return false;
}

console.log(hasProperties('own', obj));
console.log(hasProperties('123', obj));
console.log(hasProperties('', obj));
console.log(hasProperties('own1', protoObj));