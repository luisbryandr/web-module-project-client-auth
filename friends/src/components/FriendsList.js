import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { axiosWithAuth } from "../helpers/axiosWithAuth";



const FriendsList = () => {

    const[ friends, setFriends]= useState([])

    useEffect(()=>{
        axiosWithAuth()
        .get('http://localhost:5000/api/friends')
        .then((res) => {
            setFriends(res.data);
        })
        .catch((err) => {
            console.log(err.message)
        })
    },[]);

    return(
        <Router> 
            <div>
                <h3>These are our friends</h3>
                    {friends.map((friend) => (
                     <p key={friend.id}>{friend.name}</p>
                    ))}

             
            </div>
        </Router>
        
       
    )

}

export default FriendsList;