function bar(params) {
    console.log('bar');
}
function foo(params) {
    console.log('foo');
    const Bar = bar();
}

foo();