import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class SignInForm extends Component{
    constructor(){
        super();
        
        this.setState({
            email : '',
            password : ''
        })
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e){
        let target = e.target;
        let value =  (target.type == 'check')? target.checked : target.value;
        let name = target.name;
        this.setState({
            [name] : value
        });
    }
    handleSubmit(e){
        e.preventDefault();
        console.log('form has been submitted with the following data');
        console.log(this.state);
    }
    render(){
        return(
            <form onSubmit = {this.handleSubmit} className="formFields">
            <div className="FormField">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" onChange={this.handleChange}/>
            </div>
            <div className="FormField">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" onChange={this.handleChange}/>
            </div>
            <div className="FormField">
                <button className="FormField_button mr-20">SignIn                   
                </button>
                <Link to="/" className="FormField_link">Create an Account</Link>
                </div>
            </form>
        );
    }
}

export default SignInForm;
