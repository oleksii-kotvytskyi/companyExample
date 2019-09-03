import React from 'react';
import { Menu, Image, Dropdown, Sidebar, Icon, TransitionablePortal, Ref } from 'semantic-ui-react';
import Logo from '../../img/Logo.jpg';
import './Header.css';
import { headerItems } from '../../api/dataForComponents';
import  { LanguageSwitch } from '../../containers/LanguageSwitch';
const options = [
    { key: 1, text: 'ua' },
    { key: 2, text: 'en' },
];

export class MobileSidebar extends React.Component {
    render() {
        const { activeA, handleClick, isMobile, headerRef, changeLanguage } = this.props;

       return (
           <Ref innerRef={headerRef} >
               <Sidebar as={Menu} visible={isMobile} className='menu' inverted size="large" fixed='top'>
                   <Image src={Logo}  className='imgLogo' as='a' href='#Header' />
                   <TransitionablePortal
                       closeOnTriggerClick
                       mountNode={headerRef.current || document.body}
                       // open={isMobile}
                       openOnTriggerClick
                       transition={{
                           animation: 'slide down',
                           duration: 500
                       }}
                       trigger={
                           <Icon
                               name='sidebar'
                               inverted
                               className='mobileIcon'
                           />
                       }
                   >
                       <div className={`menuItems`}>
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
                           <Dropdown text='Language' simple item onClick={handleClick} >
                               <Dropdown.Menu >
                                   {options.map(el => (
                                       <Dropdown.Item
                                         key={el.key}
                                         style={{textAlign: 'center'}}
                                         onClick={() => changeLanguage(el.text)} >
                                           {el.text}
                                       </Dropdown.Item>
                                   ))}
                               </Dropdown.Menu>
                           </Dropdown>
                       </div>
                   </TransitionablePortal>
               </Sidebar>
           </Ref>
       )
    }
}