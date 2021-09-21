import React from "react";

export class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  login( event){
    event.preventDefault();
    let userName = this.refs.email.value ;

    let password =  this.refs.password.value ;
    console.log(userName+"-"+ "-"+password)
    Meteor.loginWithPassword(userName,password);

  }
  render() {

    return (
        <form onSubmit={this.login.bind(this)}>
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Login</div>
        <div className="content">
          <div className="image">
            <img src= "/login.svg"  />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Email</label>
              <input type="text" ref="email" placeholder="email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" ref="password" placeholder="password" />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="submit" className="btn"  >
            Login
          </button>
        </div>
      </div>
        </form>
    );
  }
}
