import React from 'react';
import HeaderSimple from '../headerSimple';
import Footer from "../footer";
import axios from "axios"; 
import { NavLink } from 'react-router-dom'
const API_URL = process.env.REACT_APP_API_URL;
class Registration extends React.Component<any, any> {

  state = {
    email: '',
    password:'',
  }

  handleChange(event:any) {
    this.setState({ email: event.target[0].value, password:event.target[1].value});
  }

  handleSubmit(event:any) {
    event.preventDefault();

    const user = {
      email: "nayon@genex.digital",
      password: "pass1234"
    };

    // axios.post(`http://localhost:8080/user`, { user })
    //   .then(res => {
    //     console.log(res);
    //     console.log(res.data);
    //   })
  }

  // constructor(props:any) {
  //   super(props);

  //   this.handleChange = this.handleChange.bind(this);
  //   this.handleSubmit = this.handleSubmit.bind(this);
  // }

  // handleChange(event:any) {
  //   this.setState({value: event.target.value});
  // }

  // handleSubmit(event:any) {
  //   alert('An essay was submitted: ' + this.state.value);
  //   event.preventDefault();
  // }

  render() {
    return (
      <>
      <div className="body-wrapper log-in">
      <div className="access-container w-container">
        <div className="card sign-up">
          <h1 className="heading login">Login to read and write reviews for your favorite conferences. </h1>
          <div className="proceed-with-email-container">
            <a href="/registration" className="continue-with-email-instead">Continue with email instead</a>
          </div>
          <div className="">
            <div className="">


              <form onSubmit = { this.handleSubmit }>
                <div className="">
                    <label className="email-label">Email Address</label>
                    <input type="email" className="user-email w-input" max={256} name="email" placeholder="Email address" />
                </div>
                <div className="">
                    {/* <label className="user-name-label">Name (public)</label> */}
                    {/* <input type="text" className="user-public-name w-input" max={256} name="name" placeholder="Name"/> */}
                    <label className="user-name-label">Password </label>
                    <input type="text" className="user-public-name w-input" max={256} name="password" placeholder="Password"/>
                    <label className="">
                    <input type="checkbox"name="agree" className="w-checkbox-input"/>
                    {/* <span className="w-form-label">I agree to the <a href="#">terms</a> and <a href="#">conditions.</a></span> */}
                    </label>
                </div>
                <div>
                  {/* <input type="submit" value="Sign In" className="w-button"/> */}
                  <NavLink className="w-button" to="/dashboard"> Sign In </NavLink>
                </div>
                
              </form>


              <div className="w-form-done">
                <div>Thank you! Your submission has been received!</div>
              </div>
              <div className="w-form-fail">
                <div>Oops! Something went wrong while submitting the form.</div>
              </div>
            </div>
          </div>
          <div className="data-verification-verify-form">
            <div className="data-form w-form">
              <form id="email-form" name="email-form" data-name="Email Form" className="verify-account-form">
                  <label className="unique-code-text">Enter the unique code we just sent to your email</label>
                  <input type="email" className="user-email w-input" max={256} name="email-3" data-name="Email 3" placeholder="" id="email-3" />
                  <div className="terms-and-conditions-span"><a href="#" className="user-required-email-button w-button">Continue</a></div>
              </form>
              <div className="w-form-done">
                <div>Thank you! Your submission has been received!</div>
              </div>
              <div className="w-form-fail">
                <div>Oops! Something went wrong while submitting the form.</div>
              </div>
            </div>
          </div>
        </div>
        <div className="card biz-submit-conference">
          <h1 className="heading login biz">Are you in charge of a conference?</h1>
          <div className="access-button-container sub">
            <h1 className="heading login biz sub">Boost SEO, engage with customers, and promote your conference.</h1><a href="component/conference-claim.html" className="conference-sign-up-button w-button">Add your conference to our list</a></div>
        </div>
      </div>
    </div>
    </>


    );
  }
}

export default Registration;