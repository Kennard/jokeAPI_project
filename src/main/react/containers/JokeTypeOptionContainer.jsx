import React, {  Component } from "react";
import axios from "axios";
import JokeView from "../components/JokeView";

// class component
export class JokeTypeOptionContainer  extends Component {
   constructor(props){
    super(props);
    this.state = {
        randomType: {},
        randomTypeStatus: null,
        userJokeType: null,
        jokeTypes:[]
    }
   }
    
   componentDidMount(){
       this.randomTypeApiCall(null)
       this.jokeTypeApiCall(null)
   }



   render() {
    const {randomTypeStatus, randomType, jokeTypes, userJokeType} = this.state

    return randomTypeStatus === "SUCCESS" ?
    <React.Fragment>
        {/* <div>
            <button type="button" className="btn btn-primary" onClick={() => this.randomTypeApiCall(null)}>
                Get Random Type
            </button>
        </div> */}
        <div className="container">
            <div className="row mb-5">
                <div className="col-4">
                    <h5>Jokes types: </h5>
                    {jokeTypes.map((userjokeType, index) => (
                        <ul className="list-group" key={index} value={userjokeType}>
                            <li className="list-group-item"> {userjokeType} </li>
                        </ul>
                    ))}
                </div>
               <div className="col-8"></div> 
            </div>
            <div className="row">
                <div className="col-4 mr-4">
                <select className="form-select" aria-label="Default select example" >
                    {jokeTypes.map((userjokeType, index) => (
                        <option key={index} value={userjokeType}>
                        {userjokeType} 
                        </option>
                    ))}
                </select>
                </div>
                <div className="col-4">
                    <input 
                        placeholder="Select joke type" 
                        type="text" 
                        value={userJokeType} 
                        onChange={(event) => this.setState({userJokeType: event.target.value})}
                    /> 
                
                    <button disabled={!userJokeType} type="button" className="btn btn-primary" onClick={() => this.randomTypeApiCall(userJokeType)}>
                        Get Joke Type
                    </button>
                </div>
                
            </div>
       
        <JokeView 
            jokeInfo={randomType}
        />  
        </div>
    </React.Fragment>

  
    : randomTypeStatus === "FAILURE" ?
        this.onFailure()
        : <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
   }
    
   onFailure = () => {
        return(
            <div> 
                Oops something went wrong...
            </div>
        ) 
    }

   randomTypeApiCall = (jokeType) => {
        const stateControl = (data, status) => {
            this.setState({randomType: data, randomTypeStatus: status})
        }
        axios.get(`/type/${jokeType}`)
        .then(function(response){
           stateControl(response.data, "SUCCESS");
        })
        .catch(function(error){
            stateControl({}, "FAILURE");
            console.log(error)
        })
   }

   jokeTypeApiCall = () => {
        const stateControl = (data, status) => {
            this.setState({jokeTypes: data, randomTypeStatus: status})
        }
        axios.get("/types")
        .then(function(response){
        stateControl(response.data, "SUCCESS");
        })
        .catch(function(error){
            stateControl({}, "FAILURE");
            console.log(error)
        })
}

    
}

export default JokeTypeOptionContainer