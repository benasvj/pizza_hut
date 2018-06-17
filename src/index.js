import React from 'react';
import ReactDOM from 'react-dom';
import './sass/main.scss';
import registerServiceWorker from './registerServiceWorker';
import AppRoutes from './AppRoutes';
import 'normalize.css';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import pizzaReducer from './reducers/pizzaReducer';
import drinksReducer from './reducers/drinksReducer';
import ordersReducer from './reducers/ordersReducer';
// import me from './playground/default-exports';  //patys sugalvojom pavadinima (me)
// import {food, getInfo} from './playground/named-exports';  //isvardinam kuriuos paimam
// import {food as maistas} from './playground/named-exports'; //nebegalim naudot food, tik maistas
// import * as all from './playground/named-exports'; //bus pasiekiamas per taska kaip objekto narys pvz all.food


const rootReducer = combineReducers(
    {
        pizza:pizzaReducer,
        drinks:drinksReducer,
        orders:ordersReducer
    }
)

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
console.log(store.getState());
// console.log(me);
// console.log(food);
// console.log(getInfo());
// console.log(maistas);
// console.log(all.food);

ReactDOM.render(
    <Provider store={store}>
        <AppRoutes/>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
