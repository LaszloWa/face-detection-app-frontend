import React, { Component } from 'react';
import CookieConsent from "react-cookie-consent";

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: ''
        }
    }

    onNameChange = (event) => {
        this.setState({name: event.target.value});
    }
    
    onEmailChange = (event) => {
        this.setState({email: event.target.value});
    }

    onPasswordChange = (event) => {
        this.setState({password: event.target.value});
    }

    onSubmitRegister = () => {
        fetch('https://sleepy-wildwood-42035.herokuapp.com/register', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: this.state.name,
                email: this.state.email,
                password: this.state.password
            })
        })
            .then(response => response.json())
            .then( user => {
                if (user.id) {
                    this.props.loadUser(user);
                    this.props.onRouteChange('home');  
                }    
            })
    }

    render() {
        const { isDarkMode } = this.props;
        let isTextColor = '';
        if (isDarkMode === 'darkMode') {
            isTextColor = 'hover-bg-black-70 hover-dark-green'
        } else {
            isTextColor = 'hover-bg-blue hover-white';
        }
        return (
            <article className="br3 ba shadow-5 b--black-10 mv4 w-100 w-50-m w-25-l mw6 center">
                <main className="pa4 black-80">
                    <div className="measure">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f1 fw6 ph0 mh0">Register</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                                <input className={`pa2 input-reset ba bg-transparent ${isTextColor} w-100`} type="text" name="name"  id="name" 
                                onChange={this.onNameChange}
                                />
                            </div>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                                <input className={`pa2 input-reset ba bg-transparent ${isTextColor} w-100`} type="email" name="email-address"id="email-address"
                                onChange={this.onEmailChange}
                                />
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                                <input className={`pa2 input-reset ba bg-transparent ${isTextColor} w-100`} type="password" name="password"  id="password" 
                                onChange={this.onPasswordChange}
                                />
                            </div>
                        </fieldset>
                        <div className="">
                            <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Register"
                            onClick={this.onSubmitRegister} 
                            />
                        </div>
                    </div>
                </main>
                <CookieConsent>
                    Your email is stored solely for the purpose of tracking # of entries made, and can be deleted under 'Profile' at any time. The address is not verified, so feel free to use a made up one if you prefer :)
                </CookieConsent>
            </article>
        )
    }
}

export default Register;