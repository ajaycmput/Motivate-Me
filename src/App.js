import React from 'react';
import axios from 'axios';

import './App.css';

class App extends React.Component {
    state = { advice: '' };

    componentDidMount() {
        this.fetchAdvice();
    }

    fetchAdvice = () => {
        axios.get('https://api.adviceslip.com/advice')  //advice API
        .then((response) => {
            const { advice } = response.data.slip;  //we only want to get the data part of the response, did a little code refactoring here.
            
            this.setState({ advice });  //same as this.setState({ advice: advice})

            //alternative: console.log(response.data.slip.advice)   
        })
        .catch((error) => {
            console.log(error);
        });
    }


    render() {
        const { advice } = this.state;

        return (
            <div className= "app">
                <div className= "card">
                    <h1 className= "heading">{advice}</h1>
                    <button className= "button" onClick={this.fetchAdvice}>
                        <span> GIVE ME ADVICE </span>
                    </button>
                </div>
            </div>
        )
        
    };
}

export default App;