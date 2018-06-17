import React from 'react';
import {connect} from 'react-redux';

class CheckOut extends React.Component{
    render(){
        const orders = this.props.orders.map((order, i)=>{
            return <li key={i}>{order.title} {order.price} € <button onClick={()=>this.props.deleteOrder(i)}>X</button></li>
        });
        const sum = this.props.orders.reduce((total,a)=>{
            return total+a.price;
        },0);
        return(
            <div>
                CheckOut
                {orders}
                <h6>Užsakymo suma : {sum.toFixed(2)} €</h6>
                <button onClick={()=>this.props.deleteAll()}>Išvalyti krepšelį</button>
            </div>
        );
    };
    
};

const mapStateToProps = (state)=>{
    return{
        orders:state.orders
    }
};

const mapDispatchToProps = (dispatch)=>{
    return{
        deleteOrder(order){
            dispatch({type:'DELETE_ORDER', payload:order})
        },
        deleteAll(){
            dispatch({type:'DELETE_ALL'})
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckOut);