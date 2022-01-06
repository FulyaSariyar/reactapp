import React, {Component} from "react";
import AddUser from "./components/AddUser";
import Users from "./components/Users";


class App extends Component{
//   state={
//     users:[]
//   };
  constructor (props){
    super(props);
    this.state={
      users:[
        {
        id:1,
        name:"Fulya Sarıyar Abdullah",
        email:"fulya12agustos@hotmail.com"

      },
      {
        id:2,
        name:"Zekeriyacan Abdullah",
        email:"zekeriyacanabdullah@outlook.com"

      },
      {
        id:3,
        name:"Ömer Abdullah",
        email:"ömerabdullah@outlook.com"

      }
  
    ]
    }
  }
  render() {
    return (
      <div className="container">
      <h4>User App</h4>
      <hr></hr>
      <AddUser></AddUser>
      <hr></hr>
      <Users users="{this.state.users}"></Users>
     </div>
    );
  }
}


export default App;
