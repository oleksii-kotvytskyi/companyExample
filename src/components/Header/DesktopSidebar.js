import React from 'react';
import { Menu, Image, Dropdown, Sidebar } from 'semantic-ui-react';
import Logo from '../../img/Logo.jpg';
import './Header.css';
import { headerItems } from '../../api/dataForComponents';
import LanguageSwitch from '../../containers/LanguageSwitch';
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
                <Image src={Logo}  className='imgLogo' as='a' href='#Header'/>
                <div className='menuItems'>
                    { headerItems.map(el => {
                        return (
                            <Menu.Item
                                as='a'
                                href={`#${el}`}
                                key={el}
                                name={/_/g.test(el) ? el.replace('_', ' ') : el}
                                active={activeA === el || false}
                                onClick={handleClick}
                                size='small'
                            />
                        )
                    })}
                </div>
                <div className='dropdownLang'>
                    <LanguageSwitch />
                </div>
            </Sidebar>
        )
    }
}

