import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

const AddUser = () => {
    let history = useHistory();
    const [ user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: ""
    });

    const { name, username, email, phone, website } = user;
    const onInputchange = e => {
        setUser({ ...user,[e.target.name]: e.target.value })
    };

    const onSubmit = async e => {
        e.preventDefault();
        await axios.post("http://localhost:3001/users", user);
        history.push("/")
    }

    return(
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
            <Link className="btn btn-success" to="/">
                back to Home
            </Link>
                <h2 className="text-center mb-4">Add A User</h2>
                <form onSubmit={e => onSubmit(e)}>
                    <div className="form-group">
                        <input 
                          type="text"
                          className="form-control form-control-lg"
                          placeholder="Enter Your Name"
                          name="name"
                          value={name}
                          onChange={e => onInputchange(e)}
                        />
                    </div>
                    <div className="form-group">
                    <input 
                          type="text"
                          className="form-control form-control-lg"
                          placeholder="Enter Your Username"
                          name="username"
                          value={username}
                          onChange={e => onInputchange(e)}
                        />
                    </div>
                    <div className="form-group">
                    <input 
                          type="text"
                          className="form-control form-control-lg"
                          placeholder="Enter Your E-mail Address"
                          name="email"
                          value={email}
                          onChange={e => onInputchange(e)}
                        />
                    </div>
                    <div className="form-group">
                    <input 
                          type="text"
                          className="form-control form-control-lg"
                          placeholder="Enter Your Phone Number"
                          name="phone"
                          value={phone}
                          onChange={e => onInputchange(e)}
                        />
                    </div>
                    <div className="form-group">
                    <input 
                          type="text"
                          className="form-control form-control-lg"
                          placeholder="Enter Your Website Name"
                          name="website"
                          value={website}
                          onChange={e => onInputchange(e)}
                        />
                    </div>
                    <button className="btn btn-success btn-block">Add User</button>
                </form>
            </div>
        </div>
    )
}

export default AddUser;