import React, { useState }from "react";
import axios from 'axios';

const initialValues = {username:" ", password: " "}

const Login = ()=> {
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
        .get('http://localhost:5000/api/login')
        .then(res => {
            console.log('thisis the response',res)
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
