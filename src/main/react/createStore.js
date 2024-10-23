import { create } from "zustand";
import axios from "axios";

export const useStore = create((set, get) => ({
    randomJoke:{},
    randomJokeStatus: "",
    joketype:{},
    joketypeStatus: "",
    randomjokeType:{},
    randomjokeTypeStatus: "",
    fetchRandomJoke: async() => {
        set({randomJokeStatus: 'PENDING'})
        try{
            const res = await axios.get("/random_joke")
            set({randomJoke: res.data, randomJokeStatus: 'SUCCESS'})
        }catch(err){
            set({randomJokeStatus: 'FAILURE'})
            console.log(err)
        }
    },
    fetchJokeType: async() => {
        set({joketypeStatus: 'PENDING'})
        axios.get("/types")
        .then((res) => {
            set({joketype: res.data, joketypeStatus: 'SUCCESS'})
        })
        .catch(() => {
            set({joketypeStatus: 'FAILURE'})
        })
    },
    fetchRandomJokeType: async(jokeType) => {
        set({randomjokeTypeStatus: 'PENDING'})
        axios.get(`/type/${jokeType}`)
        .then((res) => {
            set({randomjokeType: res.data, randomjokeTypeStatus: 'SUCCESS'})
        })
        .catch(() => {
            set({randomjokeTypeStatus: 'FAILURE'})
        })
    },
}))