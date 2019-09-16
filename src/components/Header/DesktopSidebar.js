import React from 'react';
import { Menu, Image, Sidebar } from 'semantic-ui-react';
import LanguageSwitch from './LanguageSwitch';
import Logo from '../../tree-logo.jpg';
import './Header.css';
import { menus } from '../../api/dataForComponents';


export class DesktopSidebar extends React.Component {
    state = {
        active: null,
    };
    handleClick = (e, obj ) => this.setState({ active: obj ? obj.href.slice(1) : null });

  render() {
    const { isMobile } = this.props;
    const { active } = this.state;

    return (
      <Sidebar as={Menu} visible={!isMobile} className='menu' inverted size="large" fixed='top'>
        <Image src={Logo} className='imgLogo' as='a' href='#header' onClick={this.handleClick}/>
        <div className='menuItems'>
          { menus.map(it => {
            return (
              <Menu.Item
                as='a'
                href={`#${it.id}`}
                key={it.id}
                name={it.name}
                active={active === it.id}
                onClick={this.handleClick}
                size='small'
              />
            );
          })}
        </div>
        <div className='dropdownLang' >
          <LanguageSwitch />
        </div>
      </Sidebar>
    );
  }
}
