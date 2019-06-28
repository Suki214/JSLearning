//JS大小写敏感
var a =['a','b','c'];
a.forEach(function(element, index, array){
    //element 指向当前元素的值
    //index 指向当前索引
    //array 指向array对象本身
    console.log(element+', index = '+ index)
    alert(element+', index = '+ index)
});

a.forEach(function(element){
    console.log(element);
    alert(element);
});

var s= new Set(['a','b','c']);
s.forEach(function(element,sameElement,set){
    console.log(element);
    alert(element);
});


var m= new Map([[1,'a'],[2,'b'],[3,'c']]);
m.forEach(function(value,key,map){
    console.log(value);
    alert(value);
});