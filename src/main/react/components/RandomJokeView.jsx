import React from "react";

// functional component
const RandomJokeView = (props) => {
    const {randomJokeInfo} = props
    const handleRefresh = () => {
        window.location.reload();
      };

        return(
            <div>
                <div>
                    <p>{randomJokeInfo.setup}</p>
                </div>
                <div>
                    <p>{randomJokeInfo.punchline}</p>
                </div>
               <button onClick={handleRefresh} type="button" className="btn btn-secondary">Refresh</button>
            </div>
        ) 
 
}

export default RandomJokeView;