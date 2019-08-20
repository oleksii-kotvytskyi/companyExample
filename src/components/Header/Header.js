import React from 'react';
import { Menu, Image, Container, Dropdown, } from 'semantic-ui-react';
import Logo from '../../img/Logo.jpg';
import './Header.css';
import { headerItems } from '../../api/dataForComponents';

const colorsA = ['yellow', 'green', 'blue', 'grey', 'yellow', 'teal'];
const options = [
    { key: 1, text: 'UA' },
    { key: 2, text: 'Eng' },
    { key: 3, text: 'Ru' },
  ];

export class Header extends React.Component {
    state = { activeA: null}
    handleAClick = (e,  {name} ) => this.setState({ activeA: name });

    render() {
        const { activeA, } = this.state;
        return (
            <div >
                <Menu className='menu' inverted size="large" fixed='top' >
                    <Image src={Logo} size='small' />
                    <div className='menuItems'>
                        { headerItems.map((el, idx) => (
                            <Menu.Item
                                key={el}
                                name={el}
                                active={activeA === el}
                                // color={colorsA[idx] || 'blue'}
                                // style={ activeA === el ? {backgroundColor: colorsA[idx],} : null}
                                onClick={this.handleAClick}
                                size='small'
                            />
                        ))}
                        {/* options={options} */}
                    </div>
                    <Dropdown text='Language' simple item style={{height: '80%', alignItems: 'center'}} >
                            <Dropdown.Menu>
                            {options.map(el => (
                                <Dropdown.Item key={el.key} style={{textAlign: 'center'}}>
                                    {el.text}
                                </Dropdown.Item>
                            ))}
                            </Dropdown.Menu>
                        </Dropdown>
                </Menu>
                <Container fluid className='headerMainContent'>
                    <div className='animationContainer'>
                        <p className='animationPart'>
                            Pre Text
                            <span className="animationText">
                                Some Interesting TEXT
                            </span>
                            Lorem ipsum dolor sit amet.
                        </p>
                    </div>
                    <Container text textAlign='left'>
                        <p>
                            Cum deserunt dolorum id illum in magni necessitatibus nisi tenetur. Lorem ipsum dolor sit amet,
                            consectetur adipisicing elit. Adipisci assumenda illum magni, quaerat quas quia quo rerum sapiente
                            tempore voluptatem! Consectetur dolorum id illum in magni necessitatibus nisi tenetur.
                        </p>
                    </Container>
                </Container>
            </div>
        )
    }
}