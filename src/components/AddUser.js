import React, {Component} from "react";


class AddUser extends Component{
    render(){
        return(
            <div className="card"> 
              <h4 className="card-header"> Add New User</h4>
             <form>
               <div className="form-group">
                   <label htmlFor="name">Name</label>
                   <input type="text" 
                   name="name" 
                   id="name" 
                   placeholder="Enter Name" 
                   className="form-control"></input>
               </div>
               <div className="form-group">
                   <label htmlFor="name">Email</label>
                   <input type="text" 
                   name="email" 
                   id="email" 
                   placeholder="Enter email" 
                   className="form-control"></input>
               </div>
               <button type="submit"
               className="btn btn-danger btn block">
                   Add New User
               </button>
             </form>
            </div>
        );
    }
}
export default AddUser;