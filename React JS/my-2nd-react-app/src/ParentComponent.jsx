import React, { Component } from 'react'
import MyComponents from './MyComponents'

export default class ParentComponent extends Component {

    constructor(props){
        super(props) ;
        this.state = {
            showComponent:true,
        };
    }

    toggleComponent = () => {
        this.setState((prevState) => ({
            showComponent: !prevState.showComponent,
        })) ;
    } ;

  render() {
    const { showComponent } = this.state ;      // destructuring the state here 

    return (
      <div>
        <button onClick={this.toggleComponent}> {showComponent? 'unmount' : 'mount' } Component </button>
        { showComponent ? (<MyComponents/>) : (<div id='empty-container'/>) }
      </div>
    )
  }
}
