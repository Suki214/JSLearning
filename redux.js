//Action: 说白了就是一个带type属性的JavaScript对象
{
    type: ADD_TODO;
    text: 'Build my first redux app'
}

//Store: 就是我们存取状态数据的地方，外加可以订阅状态数据改变时触发的事件。
//以下代码来自redux官方教程
const createStore =(reducer)=>{
    let state;
    let listeners=[];
    //用来返回当前的state
    const getState = ()=>state;
    //根据action调用reducer返回新的state并触发listener
    const dispatch =(action)=>{
        state = reducer(state, action);
        listeners.forEach(listener=>listener());
    };

    /**这里调用subscribe有两个功能
     * 调用subscri(listener) 会使用listners.push(listener)注册一个listener
     * 而调用subscribe的返回函数则会注销掉listener 
     */
    const subscribe =(listener)=>{
        listeners.push(listener);
        return()=>{
            listeners = listeners.filter(l => l !== listener);
        };
    };

    return{getState, dispatch, subscribe};
};

//Reducer: 命名不代表含义，叫这个名字完全是因为和reduce函数长得很像，所以叫reducer
