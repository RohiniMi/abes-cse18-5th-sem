var a = 45;
function f(){
    console.log(a);
    var a = 12;
    let b = 12;
    const c = 7;
    console.log(b);
    console.log(c);
}
console.log(f);
f();
console.log(a);
