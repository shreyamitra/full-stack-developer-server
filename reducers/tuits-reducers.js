import {FIND_ALL_TUITS}
  from "/Users/shreyamitra/Desktop/2022/spring/full-stack-developer-server-node/actions/tuits-actions.js";
const tuitsReducer = (state = [], action) => {
 switch (action.type) {
   case FIND_ALL_TUITS:
     return action.tuits;
 }
}
