import React, { useState, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import axios from "axios";

const EditUser = () => {
    let history = useHistory();
    const { id } = useParams();
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

    useEffect(() => {
        loadUser();
    }, []);

    const onSubmit = async e => {
        e.preventDefault();
        await axios.put(`http://localhost:3001/users/${id}`, user);
        history.push("/")
    }

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:3001/users/${id}`);
        setUser(result.data);
    }
    return(
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
            <Link className="btn btn-success" to="/">
                back to Home
            </Link>
                <h2 className="text-center mb-4">Edit A User</h2>
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
                    <button className="btn btn-warning btn-block">Update User</button>
                </form>
            </div>
        </div>
    )
}

export default EditUser;