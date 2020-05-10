import React, { Component } from "react";
import "../../App.css";
import axios from "axios";

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      form: { username: "", password: "" },
      loginErrorMessage: "",
    };
  }

  handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    let { form } = this.state;
    form[name] = value;
    this.setState({ form: form });
  };

  login = (event) => {
    event.preventDefault();
    // axios
    //   .get("...")
    //   .then((respData) => {})
    //   .catch((err) => {
    //     this.setState({ loginErrorMessage: "Username or password missmatch" });
    //   });
    this.props.history.push("/dashboard");
  };

  render() {
    return (
      <React.Fragment>
        <div className="container mt-5">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="card shadow p-3 mb-5 bg-card rounded">
                <div className="card-body">
                  <span className="text-danger">
                    {this.state.loginErrorMessage}
                  </span>
                  <img
                    src={require("../../assets/image/gitzberrylogo002.png")}
                    className="card-img-top img-rounded shadow"
                    style={{ height: "300px" }}
                    alt="Logo"
                  />
                  <div className="mt-3">
                    <form onSubmit={this.login}>
                      <div className="form-group">
                        <input
                          type="text"
                          name="username"
                          value={this.state.form.username}
                          className="form-control shadow"
                          placeholder="Username"
                          required
                          onChange={this.handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="password"
                          name="password"
                          value={this.state.form.password}
                          className="form-control shadow"
                          placeholder="Password"
                          required
                          onChange={this.handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <button
                          type="submit"
                          name="submit"
                          className="btn btn-block btn-primary shadow"
                        >
                          Login
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
