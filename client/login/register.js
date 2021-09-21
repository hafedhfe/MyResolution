import React from "react";

export class Register extends React.Component {
  constructor(props) {
    super(props);
  }
  register( event){
    event.preventDefault();
 let userName = this.refs.username.value ;
    let email =  this.refs.email.value ;
    let password =  this.refs.password.value ;
    console.log(userName+"-"+email+"-"+password)
    Accounts.createUser({
      "username":userName,
      "email":email,
      "password":password
    });


   }
  render() {
    return (
        <form onSubmit={this.register.bind(this)}>
      <div className="base-container" >
        <div className="header">Register</div>
        <div className="content">
          <div className="image">
            <img src="/login.svg" />
          </div>
          <div className="form">
            <div className="form-group">
              <label >Username</label>
              <input type="text" ref="username" placeholder="username" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" ref="email" placeholder="email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="text" ref="password" placeholder="password" />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="submit" className="btn"   >
            Register
          </button>
        </div>
      </div>
        </form>
    );
  }
}
