const ThinkerWithHat =({hat})=>(
    <div>
        <Hat type={hat}/>
        <Thinker/>
    </div>
);

class HelloComponent extends React.Component{
    render(){
        return <div>Hello {this.props.name}</div>;
    }
};


var React = require('react/addon');
var myComponent = React.createClass({
    //do something
});
module.export = myComponent;

import React from 'React/addon';
class myComponent extends React.Component{
    //so somthing use ES6
}
export default myComponent;