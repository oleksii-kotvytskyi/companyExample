import React from 'react';
import { Menu, Image, Dropdown, Sidebar, Icon, TransitionablePortal, Ref } from 'semantic-ui-react';
import Logo from '../../img/Logo.jpg';
import './Header.css';
import { headerItems } from '../../api/dataForComponents';

const options = [
    { key: 1, text: 'UA' },
    { key: 2, text: 'Eng' },
    { key: 3, text: 'Ru' },
];

export class MobileSidebar extends React.Component {
    render() {
        const { activeA, handleClick, isMobile, headerRef } = this.props;

       return (
           <Ref innerRef={headerRef} >
               <Sidebar as={Menu} visible={isMobile} className='menu' inverted size="large" fixed='top'>
                   <Image src={Logo}  className='imgLogo' />
                   <TransitionablePortal
                       closeOnTriggerClick
                       mountNode={headerRef.current || document.body}
                       open={isMobile}
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
                           { headerItems.map(el => (
                               <Menu.Item
                                   key={el}
                                   name={el}
                                   active={activeA === el || false}
                                   onClick={handleClick}
                                   size='small'
                               />
                           ))}
                           <Dropdown text='Language' simple item onClick={handleClick} >
                               <Dropdown.Menu >
                                   {options.map(el => (
                                       <Dropdown.Item key={el.key} style={{textAlign: 'center'}} >
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