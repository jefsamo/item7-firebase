import React, { Component } from 'react'
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils"

import { SignupContainer, SignupSection, SignupInput } from "./SignupPage.style"
import { Link } from "react-router-dom"


const bottomStyle = {
    minHeight: "100vh",
    height: "100%"
}


class SignupPage extends Component {
    state = {
        displayName: "",
        email: "",
        firstName: "",
        lastName: "",
        phoneNumber: "",
        password: "",
        confirmPassword: "",
    };

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };
    handleSubmit = async (e) => {
        e.preventDefault();
        const {
            displayName,
            email,
            firstName,
            lastName,
            phoneNumber,
            password,
            confirmPassword,
        } = this.state;
        if (password !== confirmPassword) {
            alert("Password and Confirm Password do not match");
            return;
        }
        try {
            const { user } = await auth.createUserWithEmailAndPassword(
                email,
                password
            );
            await createUserProfileDocument(user, {
                displayName,
                phoneNumber,
                firstName,
                lastName,
            });
            this.setState({
                displayName: "",
                email: "",
                firstName: "",
                lastName: "",
                phoneNumber: "",
                password: "",
                confirmPassword: "",
            });
        } catch (error) {
            console.log(error);
        }
    };

    render() {
        const {
            displayName,
            firstName,
            lastName,
            email,
            phoneNumber,
            password,
            confirmPassword,
        } = this.state;

        return (
            <SignupContainer>
                <div className="bottom" style={bottomStyle}>

                    <SignupSection>
                        <h1 style={{ textAlign: "center" }}>Sign Up</h1>
                        <div className="form" style={{ width: "80%", margin: "0 auto" }}>
                            <form onSubmit={this.handleSubmit}>

                                <label htmlFor="">First Name</label>
                                <br />
                                <SignupInput type="text"
                                    name="firstName"
                                    value={firstName}
                                    placeholder="First Name"
                                    id="firstname"
                                    className="input"
                                    onChange={this.handleChange}></SignupInput>
                                <br />
                                <label htmlFor="">Last Name</label>
                                <br />
                                <SignupInput type="text"
                                    name="lastName"
                                    value={lastName}
                                    placeholder="Last Name"
                                    id="lastName"
                                    className="input"
                                    onChange={this.handleChange}></SignupInput>
                                <br />
                                <label htmlFor="">Display Name</label>
                                <br />
                                <SignupInput type="text"
                                    name="displayName"
                                    value={displayName}
                                    placeholder="Display Name"
                                    id="displayName"
                                    className="input"
                                    onChange={this.handleChange}></SignupInput>
                                <br />
                                <label htmlFor="">Email</label>
                                <br />
                                <SignupInput type="email"
                                    name="email"
                                    value={email}
                                    placeholder="Email"
                                    id="email"
                                    className="input"
                                    onChange={this.handleChange}></SignupInput>
                                <br />
                                <label htmlFor="">Phone Number</label>
                                <br />
                                <SignupInput type="text"
                                    name="phoneNumber"
                                    value={phoneNumber}
                                    placeholder="Phone Number"
                                    id="phoneNumber"
                                    className="input"
                                    onChange={this.handleChange}></SignupInput>
                                <br />
                                <label htmlFor="">Password</label>
                                <br />
                                <SignupInput type="password"
                                    name="password"
                                    value={password}
                                    placeholder="Password"
                                    id="password"
                                    className="input"
                                    onChange={this.handleChange}></SignupInput>
                                <br />
                                <label htmlFor="">Confirm Password</label>
                                <br />
                                <SignupInput type="password"
                                    name="confirmPassword"
                                    value={confirmPassword}
                                    placeholder="Confirm Password"
                                    id="confirmPassword"
                                    onChange={this.handleChange}></SignupInput>
                                <br />
                                <br />
                                <input type="submit" value="Sign up" style={{
                                    margin: "0 auto", display: "block", width: "100%",
                                    height: "40px", backgroundColor: "red", color: "#fff", outline: "none", border: "none"
                                }} />
                            </form>
                            <div className="subsection" style={{ display: "flex", justifyContent: "center", padding: "10px 0" }}>
                                <Link to="/login" style={{ textDecoration: "none" }}>Already have an account? Login</Link>
                            </div>
                        </div>
                    </SignupSection>
                </div>
            </SignupContainer>
        )
    }
}

export default SignupPage
