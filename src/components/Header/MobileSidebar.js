import React from 'react';
import { Menu, Image, Sidebar, Icon, TransitionablePortal, Ref } from 'semantic-ui-react';
import Logo from '../../img/Logo.jpg';
import './Header.css';
import LanguageSwitch from '../../containers/LanguageSwitch';
import Translate from "../../translate";


export class MobileSidebar extends React.Component {
    state = {
        active: null,
        open: false
    };
    handleClick = (e, obj ) => this.setState({ active: obj ? obj.href.slice(1) : null });
    handleOpen = () => this.setState((prevState) => ({open: !prevState.open}))
    render() {
        const { isMobile, headerRef } = this.props;
        const { active } = this.state;
        const menus = [
            {id: 'about_us', name: Translate.__('About Us')},
            {id: 'what_we_do', name: Translate.__('What We Do')},
            {id: 'jobs', name: Translate.__('Jobs')},
        ];

       return (
           <Ref innerRef={headerRef} >
               <Sidebar as={Menu} visible={isMobile} className='menu' inverted size='large' fixed='top'>
                   <Image src={Logo}  className='imgLogo' as='a' href='#header' onClick={this.handleClick}/>
                   <TransitionablePortal
                       closeOnTriggerClick
                       mountNode={headerRef.current || document.body}
                       // openOnTriggerClick
                       open={isMobile && this.state.open}
                       transition={{
                           animation: 'slide down',
                           duration: 500
                       }}
                       trigger={
                           <Icon
                               name='sidebar'
                               inverted
                               className='mobileIcon'
                               onClick={this.handleOpen}
                           />
                       }
                   >
                       <div className='menuItems'>
                           { menus.map(el => {
                               return (
                                   <Menu.Item
                                       as='a'
                                       href={`#${el.id}`}
                                       key={el.id}
                                       name={el.name}
                                       active={active === el.id}
                                       onClick={this.handleClick}
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