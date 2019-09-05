import React from 'react';
import { Responsive } from 'semantic-ui-react';
import { MobileSidebar } from './MobileSidebar';
import { DesktopSidebar } from './DesktopSidebar';
import HeaderContent from './HeaderContent';

export class Header extends React.Component {
    headerRef = React.createRef();
    state = {
        activeA: null,
        curWidth: window.innerWidth || 0,
    };

    handleOnUpdate = (e, { width }) => this.setState({ curWidth: width });
    componentDidMount = () => { this.setState({})}; // fixMe - without it dont work TransitionablePortal ....

    render() {
        const { curWidth, } = this.state;
        const { sectionData } = this.props;
        const isMobile = curWidth <= 550;

        return (
            <Responsive onUpdate={this.handleOnUpdate} className='containerHeader' id='header'>
                <DesktopSidebar isMobile={isMobile }/>
                <MobileSidebar isMobile={isMobile } headerRef={this.headerRef}/>
                <HeaderContent>
                    { sectionData.content }
                </HeaderContent>
            </Responsive>
        )
    }
}
