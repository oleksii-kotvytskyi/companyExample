import React from 'react';
import {Icon, Menu, Image} from 'semantic-ui-react';
import Logo from '../../Logo.jpg';
import './Header.css';

const colorsA = ['red', 'orange', 'yellow', 'olive', 'green', 'teal'];
const headerItems = [ 'About Us', 'What We Do', 'Used Tech', 'Our Projects', 'Jobs', 'Contact Us' ];


export class Header extends React.Component {
    state = { activeA: colorsA[0] }

    handleAClick = (e, { name }) => this.setState({ activeA: name })

    render() {
        const { activeA, } = this.state;

        return (
            <div >
                <Menu className='menu'  color="teal" inverted size="massive" fixed='top'>
                    <Image src={Logo} size='small' />
                    <div className='menuItems'>
                        {headerItems.map(el => (
                            <Menu.Item
                                key={el}
                                name={el}
                                active={activeA === el}
                                color='red'
                                onClick={this.handleAClick}
                                size='small'
                            />
                        ))}
                    </div>
                </Menu>
                <div className='headerMainContent'>
                    <div className='animationContainer'>
                        <p className='animationPart'>
                            Pre Text
                            <span className="animationText">
                            Some Interesting TEXT
                        </span>
                            Lorem ipsum dolor sit amet.
                        </p>
                    </div>
                    <div className='header'>
                        <span>
                            Cum deserunt dolorum id illum in magni necessitatibus nisi tenetur. Lorem ipsum dolor sit amet,
                            consectetur adipisicing elit. Adipisci assumenda illum magni, quaerat quas quia quo rerum sapiente
                            tempore voluptatem! Consectetur dolorum id illum in magni necessitatibus nisi tenetur.
                        </span>
                    </div>
                </div>



            </div>
        )
    }
}