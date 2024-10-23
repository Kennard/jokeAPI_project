import React from "react";

// functional component
const JokeView = (props) => {
    const {jokeInfo} = props
   
         return(
            <div className="row mt-3"> 
               <div className="col-4 mr-4">              
                    {jokeInfo.map((joke, index) => (
                        <div key={index}> 
                            <h5>{joke.setup}</h5>
                            <p>{joke.punchline}</p>
                        </div>
                    ))}  
                </div>                   
            </div>
        ) 
}

export default JokeView;