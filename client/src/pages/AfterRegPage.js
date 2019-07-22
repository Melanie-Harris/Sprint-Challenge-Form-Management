import React, { useEffect, useState } from 'react';
import {axiosWithAuth} from '../axiosAuth';
import Logout from '../components/Logout';
import AddRegistrant from './AddRegistrant';
import { useLocalStateHook } from '../components/LocalStateHook';



export default function AfterRegPage(props) {
    const [data, setData] = useState([]);
    // returns actual token and setter
    //  goes to localStore, grabs token, returns as token variable with setter
    //  there by making local store reactive
    const [token, setToken]= useLocalStateHook("token")
    useEffect((res) => {
        
        axiosWithAuth(token)
        .get('http://localhost:5007/api/restricted/data')
        .then(res => setData(res.data))
            // console.log("got data", res.data )
          .catch(error => console.error( "caught an error!", error))

    }, [])
    
    return (
        <div>
            {data.map((grab) => (
                <div>
                    <p>{grab.name}</p>
                    <p>{grab.course}</p>
                    <p>{grab.technique}</p>
                    <p>{grab.ingredients}</p>
                </div>
            ))}
            
            <Logout
                history={props.history} />
        </div>
    )
}

