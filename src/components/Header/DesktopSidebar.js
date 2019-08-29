import React from 'react';
import { Menu, Image, Container, Dropdown, Responsive, Sidebar } from 'semantic-ui-react';
import Logo from '../../img/Logo.jpg';
import './Header.css';
import { headerItems } from '../../api/dataForComponents';

export class DesktopSidebar extends React.Component {
    render() {
        return(
            <Sidebar as={Menu} visible={true} className='menu' inverted size="large" fixed='top'>
                <Image src={Logo} style={{width: '120px'}} />
                <div className='menuItems'>
                    { headerItems.map((el, idx) => (
                        <Menu.Item
                            key={el}
                            name={el}
                            active={activeA === el}
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
            </Sidebar>
        )
    }
}