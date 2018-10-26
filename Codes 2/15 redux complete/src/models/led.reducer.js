
const ledReducer=(state={leds:"11"},action)=>{
    console.log('led reducer state:',state,action);
    switch(action.type){
        case "DISPLAY":
            let x={leds:action.payload.ledValue};;
            state=x;
            console.log('ledreducer new state:',state);
            break;
    }

    return state;
};

export default ledReducer;
