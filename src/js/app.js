import React from 'react';
import ReactDOM from 'react-dom';

//import PrimarySearchAppBar from './material/navigation';
import Utils from './utils';
import Header from './legacy/Header';


class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header/>
                {/* <PrimarySearchAppBar/> */}
            </div>
            
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)