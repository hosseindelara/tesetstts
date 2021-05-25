import { combineReducers } from "redux";


export const baceUrlreducer = (baseurl = 'http://localhost:3000/api', action) => baseurl
   

export const reducers = combineReducers({

    baseUrl: baceUrlreducer,
    
})