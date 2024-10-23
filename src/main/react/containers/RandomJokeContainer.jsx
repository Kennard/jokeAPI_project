import React, { useEffect, useState } from "react";
import axios from "axios";
import RandomJokeView from "../components/RandomJokeView";

// functional component
const RandomJokeContainer = () => {
    const [randomJoke, setRandomJoke] = useState({})
    const [randomJokeStatus, setRandomJokeStatus] = useState(null)

    useEffect(() => {

        setRandomJokeStatus("PENDING")
        axios.get("/random_joke")
        .then(function(response){
            setRandomJoke(response.data)
            setRandomJokeStatus("SUCCESS")
        })
        .catch(function(error){
            randomJokeStatus("FAILURE")
            console.error(error)
        })
    },[])
  
    return randomJokeStatus === "SUCCESS" ?
        <RandomJokeView 
            randomJokeInfo={randomJoke}
        />
        : randomJokeStatus === "FAILURE" ?
            onFailure()
            : <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
    
    function onFailure(){
       return(
        <div> Oops something went wrong...</div>
       ) 
    }



}

export default RandomJokeContainer