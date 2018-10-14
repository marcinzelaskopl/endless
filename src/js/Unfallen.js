import React, { Component } from 'react';
import '../App.css';

class Unfallen extends Component {
    render(){
        return (
            <div className={'grid-container unfallen-main'}>
                <div className={'row'}>
                    <div className={'col-13'}>
                        <h1>THE UNFALLEN</h1>
                        <h4>"The carnage of the flames terrified us, but the heart soothed us, and we thought long about what we must do."</h4>
                        <button className={'btn-more'}>LEARN MORE</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Unfallen