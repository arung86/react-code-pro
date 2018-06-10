import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class SignUpForm extends Component {
    constructor() {
        super();
        this.setState({
            email: '',
            password: '',
            name: '',
            hasAgreed: false
        });
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let target = e.target;
        let value = (target.type == 'check') ? target.checked : target.value;
        let name = target.name;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log('form has been submitted with the following data');
        console.log(this.state);
    }
    render() {
        return (
		<form className="FormFields" onSubmit={this.handleSubmit} >
		 <div className="FormField">
		 <label htmlFor="email">Email Id</label>
                 <input type="email" name="email" id="email" onChange={this.handleChange} />
		</div>
		 <div className="FormField">
		 <label htmlFor="name">Name</label>
                 <input type="text" name="name" id="name" onChange={this.handleChange} />
		</div>
		 <div className="FormField">
		 <button className="FormField__button">SignUp</button>
		<Link to="/sign-in">I'm already member</Link>
		</div>
		</form>
        );
    }

}

export default SignUpForm;
