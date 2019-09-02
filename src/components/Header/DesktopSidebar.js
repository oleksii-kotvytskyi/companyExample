import React from 'react';
import { Menu, Image, Dropdown, Sidebar } from 'semantic-ui-react';
import Logo from '../../img/Logo.jpg';
import './Header.css';
import { headerItems } from '../../api/dataForComponents';

const options = [
    { key: 1, text: 'ua' },
    { key: 2, text: 'en' },
];

export class DesktopSidebar extends React.Component {
    render() {

        const {
          activeA,
          handleClick,
          isMobile,
          changeLanguage,
        } = this.props;

        return(
            <Sidebar as={Menu}  visible={!isMobile} className='menu' inverted size="large" fixed='top'>
                <Image src={Logo}  className='imgLogo' />
                <div className='menuItems'>
                    { headerItems.map(el => (
                        <Menu.Item
                            key={el}
                            name={el}
                            active={activeA === el}
                            onClick={handleClick}
                            size='small'
                        />
                    ))}
                </div>
                <div className='dropdownLang'>
                    <Dropdown text='Language' simple item>
                        <Dropdown.Menu>
                            {options.map(el => (
                                <Dropdown.Item
                                  key={el.key}
                                  style={{textAlign: 'center'}}
                                  value={el.text}
                                  onClick={() => {changeLanguage(el.text)}} >
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

