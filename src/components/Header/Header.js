import React from 'react';
import { Menu, Image, Dropdown, Responsive, Sidebar, Icon, TransitionablePortal, Ref, Segment } from 'semantic-ui-react';
import Logo from '../../img/Logo.jpg';
import './Header.css';
import { headerItems } from '../../api/dataForComponents';

const colorsA = ['yellow', 'green', 'blue', 'grey', 'yellow', 'teal'];
const options = [
    { key: 1, text: 'UA' },
    { key: 2, text: 'Eng' },
    { key: 3, text: 'Ru' },
  ];
const MenuItems = (props) => {
    const { activeA, handleClick, mobile, itemsClass = '' } = props;

    return mobile ?
        ( <div className='menuItems'>
                { headerItems.map((el, idx) => (
                    <Menu.Item
                        key={el}
                        name={el}
                        active={activeA === el}
                        onClick={handleClick}
                        size='small'
                    />
                ))}
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
        ) :
        ( <div className='menuItems'>
            { headerItems.map((el, idx) => (
                <Menu.Item
                    key={el}
                    name={el}
                    active={activeA === el}
                    onClick={handleClick}
                    size='small'

                />
            ))}
        </div>)

}
export class Header extends React.Component {
    constructor(props) {
     super(props);
     this.headerRef = React.createRef();
    }
    state = {
        activeA: null,
        curWidth: window.innerWidth || 0,
        menuItems: false,
        itRef: null
    }

    handleAClick = (e,  { name } ) => this.setState({ activeA: name });
    handleOnUpdate = (e, { width }) => this.setState({curWidth: width})

    componentDidMount() {
        this.setState({itRef: this.headerRef.current})
    }

    render() {
        const { activeA, curWidth } = this.state;
        const isMobile = curWidth <= 550;
        console.log( this.state.itRef);
        return (
            <div >
                <Responsive onUpdate={this.handleOnUpdate}>
                    <Sidebar as={Menu} visible={!isMobile} className='menu' inverted size="large" fixed='top'>
                        <Image src={Logo} style={{width: '120px'}} />
                        <MenuItems activeA={activeA} handleClick={this.handleAClick} mobile={isMobile}/>
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
                    <Ref innerRef={this.headerRef}>


                    <Sidebar as={Menu} visible={isMobile} className='menu' inverted size="large" fixed='top'>

                        <Image src={Logo} style={{width: '80px', height: '80px', alignSelf: 'center', marginLeft: '2rem'}} />

                        <TransitionablePortal
                            closeOnTriggerClick
                            mountNode={this.headerRef.current}
                            openOnTriggerClick

                            trigger={
                                <Icon
                                    name='sidebar'
                                    inverted
                                    style={{alignSelf: 'center', fontSize: '2.7rem', lineHeight: '2.7rem', marginRight: '2rem'}}
                                />
                            }
                        >
                            <MenuItems as={Menu} activeA={activeA} handleClick={this.handleAClick} mobile={isMobile}               />
                        </TransitionablePortal>
                    </Sidebar>
                    </Ref>


                    <div className='headerMainContent'>
                        <div className='animationContainer'>
                            <p className='animationPart'>
                                Pre Text
                                <span className="animationText">
                                Sunlight
                            </span>
                                Lorem ipsum dolor sit amet.
                            </p>
                        </div>
                        <p>
                            Cum deserunt dolorum id illum in magni necessitatibus nisi tenetur. Lorem ipsum dolor sit amet,
                            consectetur adipisicing elit. Adipisci assumenda illum magni, quaerat quas quia quo rerum sapiente
                            tempore voluptatem! Consectetur dolorum id illum in magni necessitatibus nisi tenetur.
                        </p>
                    </div>
                </Responsive>
            </div>
        )
    }
}

{/*<TransitionablePortal*/}
{/*    closeOnTriggerClick*/}
{/*    // onOpen={this.handleOpen}*/}
{/*    // onClose={this.handleClose}*/}
{/*    openOnTriggerClick*/}
{/*    trigger={*/}
{/*        <Icon*/}
{/*            name='sidebar'*/}
{/*            inverted*/}
{/*            style={{alignSelf: 'center', fontSize: '2.7rem', lineHeight: '2.7rem'}}*/}
{/*        />*/}
{/*    }*/}
{/*>*/}
{/*    <MenuItems as={Menu} activeA={activeA} handleClick={this.handleAClick} mobile={isMobile} />*/}
{/*</TransitionablePortal>*/}