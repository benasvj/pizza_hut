
const ordersReducer = (state=[], action)=>{ //action tai antras argumentas kuri galima pasivadinti kaip normi
    console.log(action, "inside orders reducer");
    switch(action.type){             //yra priimta tokias konstantas kaip dbr ADD_ORDER naudot caps locku
        case 'ADD_PIZZA' :
            return [...state, action.payload];
        case 'ADD_DRINK' :
            return [...state, action.payload];
        case 'DELETE_ORDER' :
            return [...state].filter((item, i)=>i!==action.payload);
        case 'DELETE_ALL' :
            return [];
        default : return state
    }
}

export default ordersReducer;