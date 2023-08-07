import React, { Component } from 'react'

export default class MyComponents extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count:0
        };
        console.log("Constructor called");
    }

    componentDidMount(){
        console.log("componentDidMount() called ")
    }

    shouldComponentUpdate(nextProp, nextState){
        console.log('shouldComponentupdate() called')
        return nextState.count !== this.state.count;
    }

    componentDidUpdate(prevProps, prevState){
        console.log('componentDidUpdate() called')
    }

    componentWillUnmount(){
        console.log('componentWillunmount() called ')
    }

    incrementCount = () =>  {
        this.setState((prevState) => ({
            count: prevState.count + 1,
        }));
    }
    


  render() {
    console.log('render() called ') ;

    return (
        <div>
            <h1>Count : {this.state.count}</h1>
            <button onClick={this.incrementCount}>Increase Count</button>
        </div>
    )
  }
}
