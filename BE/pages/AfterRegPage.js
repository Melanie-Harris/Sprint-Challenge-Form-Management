import React, { useEffect, useState } from 'react';
import { axiosWithAuth } from '../../axiosAuth';
// import protectedRoutes from '../routes/protectedRoutes';
import Logout from '../pages/Logout';



export default function AfterRegPage(props) {
    const [data, setData] = useState([]);
    useEffect(() => {
        console.log("starting component")
        axiosWithAuth()
            .get('http://localhost:6000/api/restricted/data')
            .then((res) => {
                console.log('made it to private page')
                setData(res.data)
            })
            .catch((e) => {
                console.log("couldnt reach server")
            })
    });
    
    return (
        <div>
            Welcome
        {data.map((data) => {
                return (<div>
                    <div>{data.name}</div>
                    <div>{data.course}
                    <div>{data.technique}</div>
                    <div>{data.ingredients}</div>
                    </div></div>)

            })}
            <Logout history={props.history} />
        </div>
    )
}


