function createObjectWithoutProto(){
    return Object.create(null);
}

a = createObjectWithoutProto()
a.own = 'something'

console.log(Object.getPrototypeOf(a))