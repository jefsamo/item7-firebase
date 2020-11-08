import React, { Component } from 'react'
import { auth } from "../../firebase/firebase.utils";
import { LoginContainer, LoginSection, LoginInput } from "./LoginPage.style"
import { Link } from "react-router-dom"


const bottomStyle = {
    minHeight: "70vh",
    height: "100%"
}


class LoginPage extends Component {
    state = {
        email: "",
        password: "",
    };

    handleSubmit = async (e) => {
        e.preventDefault();
        const { email, password } = this.state;

        try {
            const user = await auth.signInWithEmailAndPassword(email, password);
            console.log(user)
            this.setState({ email: "", password: "" });
        } catch (error) {
            console.log(error);
        }

        this.setState({ email: "", password: "" });
    };

    handleChange = (e) => {
        const { value, name } = e.target;

        this.setState({ [name]: value });
    };
    render() {

        return (
            <LoginContainer>
                <div className="bottom" style={bottomStyle}>

                    <LoginSection>
                        <h1 style={{ textAlign: "center" }}>Login</h1>
                        <div className="form" style={{ width: "80%", margin: "0 auto" }}>
                            <form onSubmit={this.handleSubmit}>

                                <label htmlFor="">Email</label>
                                <br />
                                <LoginInput type="email" name="email" id="" placeholder="Email"
                                    value={this.state.email}
                                    onChange={this.handleChange}
                                    className="input"></LoginInput>
                                <br />
                                <br />
                                <label htmlFor="">Password</label>
                                <br />
                                <LoginInput
                                    name="password"
                                    placeholder="Password"
                                    type="password"
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                    className="input"></LoginInput>
                                <br />
                                <br />
                                <input type="submit" value="Login" style={{
                                    margin: "0 auto", display: "block", width: "100%",
                                    height: "40px", backgroundColor: "red", color: "#fff", outline: "none", border: "none"
                                }} />
                            </form>
                            <div className="subsection" style={{ display: "flex", justifyContent: "space-between", padding: "10px 0" }}>
                                <Link to="/signup" style={{ textDecoration: "none" }}>Sign up</Link>
                                <Link to="/" style={{ textDecoration: "none" }}>Forgot Password?</Link>
                            </div>
                        </div>
                    </LoginSection>
                </div>
            </LoginContainer>
        )
    }
}

export default LoginPage
