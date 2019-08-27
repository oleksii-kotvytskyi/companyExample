import React from 'react';
import { Menu, Image, Container, Dropdown, Responsive, Sidebar, Segment } from 'semantic-ui-react';
import styled  from 'styled-components';
import Logo from '../../img/Logo.jpg';
import { headerItems } from '../../api/dataForComponents';
import  { HeaderAnimeAndContent } from './HeaderAnimeAndContent';

const MenuCustom = styled(Menu)`
    display: flex !important;
    justify-content: space-evenly;
`;
const SidebarCustom = styled(Sidebar)`
    overflow-y: visible;
`;
const MenuItems = styled.div`
    display: flex;
    align-items: center;
`;

const ChooseLang = styled.div`
    display: flex;
    align-items: center;
`;
const options = [
    { key: 1, text: 'UA' },
    { key: 2, text: 'Eng' },
    { key: 3, text: 'Ru' },
  ];




export class Header extends React.Component {
    state = { activeA: null , curWidth: window.innerWidth || 0 }
    handleAClick = (e,  {name} ) => this.setState({ activeA: name });
    handleOnUpdate = (e, { width }) => this.setState({curWidth:  width });

    render() {
        const { activeA, curWidth } = this.state;
        const mobileWidth = curWidth <= 550;
        return (
            <div >
                <Responsive onUpdate={this.handleOnUpdate}>
                    <SidebarCustom visible="true" as={MenuCustom}  inverted fixed='top' size='large'>
                        <Image src={Logo} style={{width: '120px'}} />
                        <MenuItems>
                            { headerItems.map(el => (
                                <Menu.Item
                                    key={el}
                                    name={el}
                                    active={activeA === el}
                                    onClick={this.handleAClick}
                                    size='small'
                                />
                            ))}
                        </MenuItems>
                        <ChooseLang>
                            <Dropdown text='Language' simple item  >
                                <Dropdown.Menu >
                                    { options.map(el => (
                                        <Dropdown.Item key={el.key} style={{textAlign: 'center'}}>
                                            {el.text}
                                        </Dropdown.Item>
                                    ))}
                                </Dropdown.Menu>
                            </Dropdown>
                        </ChooseLang>
                    </SidebarCustom>
                    <HeaderAnimeAndContent width={curWidth}/>
                </Responsive>
            </div>
        )
    }
}