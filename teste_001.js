function hello() {
    var a = "function";
    for (var i = 0; i < 10; i++) {
        var a = "block";
    }
    console.log(a);
}
hello();
