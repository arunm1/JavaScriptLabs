var showHoisting=()=> {
 let x = 2;
    const z = {foo: true, bar: true, baz: true};
    z.foo = false;
z.qux = true;
 if (x == 2) {
 var y = true;
 }
 return y;
}

export default showHoisting;