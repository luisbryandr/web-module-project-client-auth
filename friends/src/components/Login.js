import React, { useState }from "react";
import axios from 'axios';
import { useHistory } from "react-router";

const initialValues = {username:" ", password: " "}

const Login = ()=> {
    const { push } = useHistory();
    const [formValues, setFormValues] = useState(initialValues)

    const handleChanges = (e) => {
        setFormValues(
            {...formValues,
                [e.target.name]: e.target.value
            }
        )
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        axios
        .post('http://localhost:5000/api/login', formValues)
        .then(res => {
            // console.log('thisis the response',res)
            //allowed me to see what the response was and build out the following
            //set res.data.payload --which is the token in form of a string-- to local storgage
            window.localStorage.setItem('token', res.data.payload);
            push("/friends");
        })
        .catch(err=>{
            console.log('thisis the error',err.message)
        })
    }

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input
                 id="username" 
                 values={formValues.username}
                 onChange={handleChanges} 
                 name="username"
                 />
                <label htmlFor="password">Password</label>
                <input
                 id="password"
                 value={formValues.password} 
                 onChange={handleChanges}
                 name="password"
                //  type="password" hides the text typed into the password input
                 />
                 <button>Log in!</button>
            </form>
        </div>
    
    )
  }
  export default Login;
