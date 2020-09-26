import React from 'react';

class Body extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <main className='container'>
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </main>
        )
    }
}

export default Body;