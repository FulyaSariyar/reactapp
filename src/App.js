import React, {Component} from "react";

class App extends Component{
  constructor (props){
    super(props);
    this.state={
      users:[]
    }
  }
  render() {
    return (
      <div className="container">
      <h4>User App</h4>
      <hr></hr>
     </div>
    );
  }
}


export default App;
