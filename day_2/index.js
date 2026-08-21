d = 32;
function f() {
    var a = 81;
    f2();
    function f2() {
        console.log(a);
        let b = 82;
        f3();
        function f3() {
            console.log(b);
            let c = 21;
            f4();
            function f4(){
                console.log(a);
                console.log(b);
                console.log(c); 
                console.log(d);
                   
            }

        }
    }
}
f();
var d;