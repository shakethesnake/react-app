import React from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount = () => {
        console.log('component will render');
    }

    getMenuBar = (menuItems, style) => {
        const _defaultMenuItems = ['Home', 'Gallery', 'About'];
        menuItems = menuItems ? menuItems : _defaultMenuItems;
        return <div>
            <ul className='nav'>
                {menuItems.map((itemText) => {
                    let _key = 'key' + Math.round(Math.random() * 100);
                    console.log(_key);
                    return (
                        <li key={_key} className='nav-item'>
                            <a href='#' className='nav-link'>{itemText}</a>
                        </li>
                    )
                })}
            </ul>
        </div>
    }

    render() {
        return (
            <div>
                <p>Header</p>
                {this.getMenuBar()}
            </div>            
        )
    }
}

export default Header;