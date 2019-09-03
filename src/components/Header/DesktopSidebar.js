import React from 'react';
import { Menu, Image, Sidebar } from 'semantic-ui-react';
import Logo from '../../img/Logo.jpg';
import LanguageSwitch from '../../containers/LanguageSwitch';
import Translate from '../../translate';
import './Header.css';


export class DesktopSidebar extends React.Component {

  render() {
    const { activeA, handleClick, isMobile, } = this.props;

    const menus = [
      {id: 'about_us', name: Translate.__('About Us')},
      {id: 'what_we_do', name: Translate.__('What We Do')},
      {id: 'jobs', name: Translate.__('Jobs')},
    ];

    return (
      <Sidebar as={Menu} visible={!isMobile} className='menu' inverted size="large" fixed='top'>
        <Image src={Logo} className='imgLogo' as='a' href='#header'/>
        <div className='menuItems'>
          {menus.map(it => {
            return (
              <Menu.Item
                as='a'
                href={`#${it.id}`}
                key={it.id}
                name={it.name}
                active={activeA === it.id || false}
                onClick={handleClick}
                size='small'
              />
            );
          })}
        </div>
        <div className='dropdownLang'>
          <LanguageSwitch/>
        </div>
      </Sidebar>
    );
  }
}
