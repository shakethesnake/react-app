import React from 'react';

class Footer extends React.Component {
    constructor (props) {
        super(props);
    }

    getNavItems() {
        const items = ['Contact us', 'Help'];
        return <ul className='nav'>
            {
                items.map((itemText) => {
                    const key = Math.floor(Math.random() * 10) + 'index';
                    console.log(key)
                    return (
                        <li key={key} className='nav-item'>
                            <a className='nav-link' href='#'>{itemText}</a>
                        </li>
                    )
                })
            }
        </ul>;
    }

    render() {
        return (
            <footer className='footer'>
                <nav className='text-center'>{this.getNavItems()}</nav>
            </footer>
        )
    }
}

export default Footer;