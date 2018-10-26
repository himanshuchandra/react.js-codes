import {createStore,combineReducers} from 'redux';

import ledReducer from './led.reducer';
import mobileReducer from './mobile.reducer';


const store = createStore(combineReducers({"mobilesKey":mobileReducer,"ledsKey":ledReducer}));
store.subscribe(()=>{
    console.log("state change",store.getState())
});



export default store;