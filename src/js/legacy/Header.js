import React from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0,
            interval: null
        }
    }

    componentWillMount() {
        console.log('component will render');
        
    }

    componentDidMount() {
        this.updateNumberStream(1000);
    }

    componentWillUnmount() {
        clearInterval(this.state.interval);
    }

    generateNumber() {
        return Math.round(Math.random() * 100)
    }

    updateNumberStream(ms) {
        var me = this;
        this.state.interval = setInterval(() => {
            // this.setState({
            //     number: this.generateNumber()
            // })
            this.setState((prev, props) => {
                return {
                    number: prev.number + 1
                }
            })
            me;
            //debugger;
        }, ms);
    }

    counterButton() {
        return (
            <li>
                <a href="#" className='nav-link'>Number Button - {this.state.number}</a>
            </li>
        )
    }

    getMenuBar = () => {
        const menuItems = ['Home', 'Gallery', 'About'];
        const domItems = [];
        menuItems.map((item) => {
            domItems.push(
                <li>
                    <a href='#' className='nav-link'>{item}</a>
                </li>
            )
        });
        //debugger;
        return <div>
            <ul className='nav'>
                {domItems}               
                {this.counterButton()}
            </ul>
        </div>
    }

    render() {
        return (
            <div>
                {this.getMenuBar()}
            </div>            
        )
    }
}

export default Header;