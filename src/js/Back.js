import React, { Component } from 'react';
import '../App.css';
import Cards from "./Cards";

class Back extends Component {
    render(){
        return (
            <div className={'grid-container background'}>
                <div className={'row'}>
                    <div className={'col-13'}>
                    </div>
                </div>
                <Cards/>
            </div>
        )
    }
}

export default Back