import React, { useState } from "react";

// functional component
const RandomJokeView = (props) => {
    const [showDiv, setShowDiv] = useState(false);
    const handleClick = () => {
        setShowDiv(!showDiv);
      };

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
                        
                        <button onClick={handleClick} type="button" className="btn btn-info">
                                {showDiv ? 'close answer' : 'Answer'}
                        </button>
                                {showDiv && 
                                <div class="mt-4 alert alert-warning alert-dismissible fade show" role="alert"> 
                                     <strong>{randomJokeInfo.punchline}</strong>
                                </div>}
                    </div> 
                   
                    <div className="col-3 "></div>                 
                </div>
                <div className="row mt-4">
                    <div className="col-3"></div>
                    <div className="col-6">
                        <button onClick={handleRefresh} type="button" className="btn btn-secondary">Refresh Page</button>
                    </div>
                    <div className="col-3"></div>
                </div>
            </div>
        ) 
 
}

export default RandomJokeView;