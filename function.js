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

var [x, y, z] = ['hello', 'JavaScript', 'ES6'];
alert('x= '+x+' y= '+y+' z= '+z)

var person = {
    name: '小明',
    age: 20,
    gender: 'male',
    passport: 'G-12345678'
};
var {name, age, passport} = person; // name, age, passport分别被赋值为对应属性:

var person = {
    name: '小明',
    age: 20,
    gender: 'male',
    passport: 'G-12345678'
};

// 把passport属性赋值给变量id:
let {name, passport:id} = person;
name; // '小明'
id; // 'G-12345678'
// 注意: passport不是变量，而是为了让变量id获得passport属性:
passport; // Uncaught ReferenceError: passport is not defined


var person = {
    name: '小明',
    age: 20
};

// 如果person对象没有single属性，默认赋值为true:
var {name, single=true} = person;
name; // '小明'
single; // true


// 声明变量:
var x, y;
// 解构赋值:
//{x, y} = { name: '小明', x: 100, y: 200};
// 语法错误: Uncaught SyntaxError: Unexpected token =
//这是因为JavaScript引擎把{开头的语句当作了块处理，于是=不再合法。解决方法是用小括号括起来：
({x, y} = { name: '小明', x: 100, y: 200});

function buildDate({year, month, day, hour=0, minute=0, second=0}) {
    return new Date(year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second);
}


