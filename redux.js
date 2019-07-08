//Action: 说白了就是一个带type属性的JavaScript对象
const ADD_TODO ='ADD_TODO'
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
const todos =(state=[], action)=>{
    //根据不同的action.type对state进行不同的操作，一般是用switch实现
    switch(action.type){
        case 'ADD_TODO':
            return [
                //这里是ES7里的对象展开运算符语法
                ...state,
                {
                    id: action.id,
                    text : action.text,
                    completed: false
                }
            ];
        //不知道是什么类型的action的话就返回默认的state
        default:
            return state;
    }
};

function addTodo(text){
    return {
        type: ADD_TODO,
        text
    }
    dispatch(action)
};

{
    visibilityFilter: 'SHOW_ALL';
    todos:[
        {
            text: 'consider using redux',
            completed:true,
        },
        {
            text: 'keep all state in a single tree',
            completed: false
        }
    ]
}

const initialState ={
    visibilityFilter: visibilityFilters.SHOW_ALL,
    todo: []
}

function todoApp(state =initialState, action){ //即当state为undefined时，取initialState函数结果
    switch(action.type){
        case SET_VISIBILITY_FILTER:
            return Object.assign({}, state,{
                visibilityFilter: action.filter
            })
            default: 
            return state;
    }
}


function todoApp(state = initialState, action){
    switch(action.type){
        case SET_VISIBILITY_FILTER:
            return Object.assign({}, state,{
                visibilityFilter:action.filter
            })
        case ADD_TODO:
            return Object.assign({}, state,{
                todos:[
                    ...state.todos,
                    {
                        text: action.text,
                        completed: false
                    }
                ]
            })
        case TOGGLE_TODO:
            return Object.assign({},state,{
                todos:state.todos.map((todo,index)=>{
                    if(index==action.index){
                        return Object.assign({},todo,{
                            completed: !todo.completed
                        })
                    }
                    return todo
                })
            })
            default:
                return state 
    }
}

//以上代码todos和visibilityFilter的更新看起来时独立的，有时候state中的字段时相互依赖的，
//需要认真考虑，但是在本例中，可以把todos更新的业务逻辑拆分到一个独立函数中
function todos(state=[],action){
    switch(action.type){
        case ADD_TODO:
            return [
                ...state,
                {
                    text: action.text,
                    completed:false
                }
            ]
        case TOGGLE_TODO:
            return state.map((todo, index)=>{
                if (index==action.index){
                    return Object.assign({},todo,{
                        completed: !todo.completed
                    })
                }
                return todo
            })
        default:
            return state
    }
}

function todoApp(state =initialState, action){
    switch(action.type){
        case SET_VISIBILITY_FILTER:
            return Object.assign({}, state,{
                visibilityFilter:action.filter
            })
        case ADD_TODO:
            return Object.assign({},state,{
                todos: todos(state.todos,action)
            })
        case TOGGLE_TODO:
            return Object.assign({},state,{
                todos:todos(state.todos,action)
            })
        default:
            return state
    }
}
//解构，分开visibilityFilter
const{SHOW_ALL} = visibilityFilters

function visibilityFilter(state=SHOW_ALL, action){
    switch(action.type){
        case SET_VISIBILITY_FILTER:
            return action.filter
        default:
            state
    }
}
//接下来开发一个函数作为主reducer，调用多个reducer反别处理state中的部分数据，然后再把这些数据合成一个大的单一对象。
//主reducer并不需要设置初始化时完整的state。初始时，如果传入undefined，子reducer将负责返回他们的默认值。
function todos(state =[], action){
    switch(action.type){
        case ADD_TODO:
            return[
                ...state,
                {
                    text: action.text,
                    completed:false
                }
            ]
        case TOGGLE_TODO:
            return state.map((todo,index)=>{
                if(index===action.index){
                    return Object.assign({},todo,{
                        completed: !todo.completed
                    })
                }
            return todo
            })
        default:
            return state
    }
}

function visibilityFilter(state=SHOW_ALL, action){
    switch(action.type){
        case SET_VISIBILITY_FILTER:
            return action.filter
        default:
            return state
    }
}

function todoApp(state=[],action){
    return{
        visibilityFilter: visibilityFilter(state.visibilityFilter, action),
        todos:todos(state.todos,action)
    }
}
//每个reducer只负责管理全局state中它负责的一部分。每个reducer的state参数不同，分别对应它管理的那部分state数据
//最后redux提供了combineReducers()工具类来做上面todoApp的事情
//按以下方式来
