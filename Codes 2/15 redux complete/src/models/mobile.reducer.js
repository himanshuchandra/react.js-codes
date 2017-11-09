
const mobileReducer=(state={mobiles:"00"},action)=>{
    console.log('mobile reducer state:',state);
    switch(action.type){
        case 'SHOW':
            var x={mobiles:action.payload.mobileValue};
            state=x;
            console.log('mobile reducer new state',state);
            break;
    }

    return state;
};

export default mobileReducer;
