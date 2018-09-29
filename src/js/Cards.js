import React, { Component } from 'react';
import '../App.css';

class Cards extends Component {
    render(){
        return (
            <div className={'grid-container'}>
                <div className={'row'}>
                    <div className={'col-1'}>
                    </div>
                    <div className={'col-3 cards unfallen'}>
                        <h1>The Unfallen</h1>
                    </div>
                    <div className={'col-1'}>
                    </div>
                    <div className={'col-3 cards riftborn'}>
                        <h1>The Riftborn</h1>
                    </div>
                    <div className={'col-1'}>
                    </div>
                    <div className={'col-3 cards vodyani'}>
                        <h1>The Vodyani</h1>
                    </div>
                    <div className={'col-1'}>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cards