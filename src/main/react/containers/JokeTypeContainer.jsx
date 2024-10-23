import React, {  useEffect, useState } from "react";
import axios from "axios";


// functional component
const JokeTypeContainer  = () => {
    const [jokeTypes, setJokeTypes] = useState('')
    const [jokeTypeStatus, setJokeTypeStatus] = useState(null)

      useEffect(() => {
        setJokeTypeStatus("PENDING")
        axios.get("/types")
        .then(function(response){
            setJokeTypes(response.data)
            setJokeTypeStatus("SUCCESS")
        })
        .catch(function(error){
            jokeTypeStatus("FAILURE")
            console.error(error)
        })
    }, [])


    return jokeTypeStatus === "SUCCESS" ?
        onSuccess() 
        : jokeTypeStatus === "FAILURE" ?
            onFailure()
            : <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>

    function onFailure(){
        return(
            <div> Oops something went wrong...</div>
        ) 
    }

    function onSuccess(){
 
        return(
            <div className="container">
                <div className="row">
                    <div className="col-sm-4">
                        {jokeTypes.map((userjokeType, index) => (
                            <ul key={index} value={userjokeType}>
                               <li> {userjokeType} </li>
                            </ul>
                        ))}
                    </div>
                    <div className="col-sm-12"> </div>
                </div>                          
            </div>
        ) 
    
    }
    
}

export default JokeTypeContainer