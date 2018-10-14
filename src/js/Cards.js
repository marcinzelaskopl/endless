import React, { Component } from 'react';
import '../App.css';
import Footer from "./Footer";
import {
    Link,
} from 'react-router-dom';

class Cards extends Component {
    constructor(props){
        super(props);

        this.state = {
            unfallen: 'none',
            riftborn: 'none',
            vodyani: 'none'
        }
    }

    handleEnterUnfallen = () => {
        this.setState({
            unfallen: 'block',
        })
    };

    handleLeaveUnfallen = () => {
        this.setState({
            unfallen: 'none',
        })
    };
    handleEnterRiftborn = () => {
        this.setState({
            riftborn: 'block',
        })
    };

    handleLeaveRiftborn = () => {
        this.setState({
            riftborn: 'none',
        })
    };
    handleEnterVodyani = () => {
        this.setState({
            vodyani: 'block',
        })
    };

    handleLeaveVodyani = () => {
        this.setState({
            vodyani: 'none',
        })
    };
    render(){
        return (
            <div className={'grid-container'}>
                <div className={'row'}>
                    <div className={'col-1'}>
                    </div>
                    <Link to='/unfallen'>
                    <div onMouseLeave={this.handleLeaveUnfallen} onMouseEnter={this.handleEnterUnfallen} className={'col-3 cards' +
                    ' unfallen'}>
                        <h1 style={{display: this.state.unfallen}}>Unfallen</h1>
                    </div>
                    </Link>
                    <div className={'col-1'}>
                    </div>
                    <div onMouseLeave={this.handleLeaveRiftborn} onMouseEnter={this.handleEnterRiftborn} className={'col-3 cards' +
                    ' riftborn'}>
                        <h1 style={{display: this.state.riftborn}}>Riftborn</h1>
                    </div>
                    <div className={'col-1'}>
                    </div>
                    <div onMouseLeave={this.handleLeaveVodyani} onMouseEnter={this.handleEnterVodyani} className={'col-3 cards' +
                    ' vodyani'}>
                        <h1 style={{display: this.state.vodyani}}>Vodyani</h1>
                    </div>
                    <div className={'col-1'}>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Cards