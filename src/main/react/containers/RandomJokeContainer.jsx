import React, { useEffect, useState } from "react";
import RandomJokeView from "../components/RandomJokeView";
import { useStore } from "../createStore";


// functional component
const RandomJokeContainer = () => {
    const getrandomjoke = useStore()
    useEffect(() => {
        getrandomjoke.fetchRandomJoke()       
    },[])
  
    return getrandomjoke.randomJokeStatus === "SUCCESS" ?
        <RandomJokeView 
            randomJokeInfo={getrandomjoke.randomJoke}
        />
        :  getrandomjoke.randomJokeStatus === "FAILURE" ?
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