import React, { useState } from "react";
import axios from "axios";

const FriendsList = () => {

    const[ friends, setFriends]= useState([])

    return(
        <div>
            <h3>These are our friends</h3>
        </div>
    )

}

export default FriendsList;