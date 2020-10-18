import React from 'react';
import './App.css';
import axios from 'axios';
//advice Slip JSON api
//netlify deploy: https://vigorous-poincare-4feff3.netlify.app
class App extends React.Component {
    state = { advice: '' };

    componentDidMount() {
        this.fetchAdvice();
    }
    
    fetchAdvice = () => {
        axios.get('https://api.adviceslip.com/advice')
            .then((response) => {
                const { advice } = response.data.slip
                this.setState({ advice });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        const { advice } = this.state;
        return (
            <div className="App">
                <div className="card">
                    <h1>{advice}</h1>
                    <button className="button" 
                    onClick={this.fetchAdvice}>
                        <span>Give Me Some Advice</span>
                    </button>
                </div>
            </div>
        );
    }
}

export default App;
