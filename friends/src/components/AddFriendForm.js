import React, {useState} from "react";
import { useHistory } from "react-router";
import { axiosWithAuth } from "../helpers/axiosWithAuth";

const initialValues = 
    {
        name: " ",
        age: " ",
        email: " "
    }



const AddFriendForm = () => {
    const [formValues, setFormValues] = useState(initialValues);
    const { push } = useHistory()
    

    const handleSubmit = (e) => {
        e.preventDefault()
        axiosWithAuth()
            .post('/api/friends', formValues)
            .then(res => {
                console.log(res)
                push("/friends")
            })
            .catch(err=> {
                console.log(err.message)
            })
    };

    const handleChanges = (e) =>{
        setFormValues(
            {...formValues,
                [e.target.name]:e.target.value
        })
    };
    

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                    <input 
                        id="name"
                        name="name"
                        value={formValues.name}
                        onChange={handleChanges}
                        />
                <label htmlFor="age">Age</label>
                     <input 
                        id="age"
                        name="age"
                        value={formValues.age}
                        onChange={handleChanges}
                        /> 
                <label  htmlFor="email">Email</label>
                    <input 
                        id="email"
                        name="email"
                        value={formValues.email}
                        onChange={handleChanges}
                        />
                <button>Add New Friend</button> 
            </form>

        </div>
    )
}

export default AddFriendForm;