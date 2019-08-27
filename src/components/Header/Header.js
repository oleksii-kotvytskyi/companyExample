import React from 'react';
import { Menu, Image, Container, Dropdown, Responsive } from 'semantic-ui-react';
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
    state = { activeA: null }
    handleAClick = (e,  {name} ) => this.setState({ activeA: name });

    render() {
        const { activeA } = this.state;
        return (
            <div >
                {/*<Responsive >*/}
                    <Menu className='menu' inverted size="large" fixed='top' >
                        <Image src={Logo} style={{width: '120px'}} />
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
                        </div>
                        <div style={{display: 'flex', alignItems: 'center'}}>
                            <Dropdown text='Language' simple item  >
                                <Dropdown.Menu>
                                    {options.map(el => (
                                        <Dropdown.Item key={el.key} style={{textAlign: 'center'}}>
                                            {el.text}
                                        </Dropdown.Item>
                                    ))}
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </Menu>
                    <Container fluid className='headerMainContent'>
                        <div className='animationContainer'>
                            <p className='animationPart'>
                                Pre Text
                                <span className="animationText">
                                Sunlight
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
                {/*</Responsive>*/}
            </div>
        )
    }
}