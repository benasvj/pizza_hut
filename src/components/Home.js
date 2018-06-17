import React from 'react';
import margarita from '../pizza.png';

class Home extends React.Component{
    render(){
        return(
            <div>
                <div className="image-box">
                    <img src={margarita} alt=""/>
                </div>
            </div>
        );
    };
};

export default Home;