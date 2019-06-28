function foo(x) {
    console.log('x = ' + x); // 10
    for (var i=0; i<arguments.length; i++) {
        //for (let i=0; i<arguments.length; i++) {
        console.log('arg ' + i + ' = ' + arguments[i]); // 10, 20, 30
    }
    alert('i='+i);//i仍然可以引用 i=3
    //用let定义之后，此处i就是undefined，会报错
}
foo(10, 20, 30);


function goo(a,b,...rest){
    console.log('a='+a);
    alert('a='+a);
    console.log('b='+b);
    alert('b='+b);
    console.log(rest);    
    alert(rest);    
}

goo(1,2,3,4,5);
//a=1
//b=2
//3,4,5

function f(){
    return {name: 'f'};}
    f(); //name: 'f'

function foo() {
    return
        { name: 'foo' };
}
foo(); //undefined

function foo() {
    return; //自动添加分号，相当于return了undefined
    { name: 'foo' }; //导致这一行无法执行
}
    
function foo() {
    var
    x = 1, // x初始化为1
    y = x + 1, // y初始化为2
    z, i; // z和i为undefined
    // 其他语句:
    for (i=0; i<100; i++) {
        i++;
    }
}


var MYAPP ={}; //唯一的全局变量myapp
//其他变量
MYAPP.name='myapp';
MYAPP.version=1.0;
//其他函数
MYAPP.foo= function(){
    return 'foo';
};