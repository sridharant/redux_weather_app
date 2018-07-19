import { FETCH_WEATHER } from "../actions/index";


export default function (state = [], action) {
    
    console.log('action recd.', action);
 //   return state;
  //  debugger;
    // switch (action.type) {
    //     case FETCH_WEATHER:
    //         return action.payload.data;
    //        // return state.concat([action.payload.data]);
    //     /* const d = [action.payload.data, ...state];
    //     console.log("data", d);
    //     return d; */
    // }

    return state;
}