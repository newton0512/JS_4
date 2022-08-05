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

function printOwnProperties(a){
    for (let x in a){
        if (a.hasOwnProperty(x)) console.log(x + ': ' + a[x]);
    }
}

printOwnProperties(obj)