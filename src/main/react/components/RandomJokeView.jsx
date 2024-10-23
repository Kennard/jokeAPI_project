import React from "react";

// functional component
const RandomJokeView = (props) => {
    const {randomJokeInfo} = props
    const handleRefresh = () => {
        window.location.reload();
      };

        return(
            <div className="conatiner">
                <div className="row">
                    <div className="col-3"></div>
                    <div className="col-6">
                        <h5>{randomJokeInfo.setup}</h5>
                        <p>{randomJokeInfo.punchline}</p>
                    </div> 
                    <div className="col-3"></div>                 
                </div>
                <div className="row">
                    <div className="col-3"></div>
                    <div className="col-6">
                        <button onClick={handleRefresh} type="button" className="btn btn-secondary">Refresh</button>
                    </div>
                    <div className="col-3"></div>
                </div>
            </div>
        ) 
 
}

export default RandomJokeView;