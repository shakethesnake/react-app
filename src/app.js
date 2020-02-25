import React from 'react';
import ReactDOM from 'react-dom';

import Header from './Header.js';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header/>
                <h1>Hi bitches 1</h1>
            </div>
            
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)