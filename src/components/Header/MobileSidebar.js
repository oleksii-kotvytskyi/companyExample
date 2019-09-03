import React from 'react';
import { Menu, Image, Dropdown, Sidebar, Icon, TransitionablePortal, Ref } from 'semantic-ui-react';
import Logo from '../../img/Logo.jpg';
import './Header.css';
import LanguageSwitch from '../../containers/LanguageSwitch';
// import Translate from '../../translate';
import { headerItems } from '../../api/dataForComponents';


export class MobileSidebar extends React.Component {
    render() {
        const { activeA, handleClick, isMobile, headerRef } = this.props;

       return (
           <Ref innerRef={headerRef} >
               <Sidebar as={Menu} visible={isMobile} className='menu' inverted size="large" fixed='top'>
                   <Image src={Logo}  className='imgLogo' as='a' href='#header' />
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
                           <LanguageSwitch/>
                       </div>
                   </TransitionablePortal>
               </Sidebar>
           </Ref>
       )
    }
}