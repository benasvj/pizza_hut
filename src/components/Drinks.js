import React from 'react';
import {connect} from 'react-redux';

class Drinks extends React.Component{
    render(){
        const drinks = this.props.drinks.map((drink, i)=>{
            return <div key={i}>
                    <h3>{drink.title}</h3>
                    <h4>{drink.price}€</h4>
                    <button onClick={()=>this.props.addDrink(drink)}>Į krepšelį</button>
                </div>
        });
        return(
            <div>
                {drinks}
            </div>
        );
    };
};

const mapStateToProps = (state)=>{
    return{
        drinks:state.drinks
    }
};

const mapDispatchToProps = (dispatch)=>{
    return{
        addDrink(drink){
            dispatch({type:'ADD_DRINK', payload:drink});
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Drinks);