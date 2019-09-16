import React, { Component } from 'react';
import { Header, Icon, Image, TransitionablePortal, Segment, Divider } from 'semantic-ui-react';
// import Translate from '../../translate';
import { aboutUsInf } from '../../api/dataForComponents';
import './Main.css';


export class AboutAs extends Component {
    constructor(props) {
        super(props);
        this.refAboutUs = React.createRef();
        this.state = {
            stateRefAboutUs : null,
        }
    }
    componentDidMount = ()  =>  this.setState({ stateRefAboutUs: this.refAboutUs.current });

    render() {
        // const { content, list, } = this.props.sectionData;
        console.log(Object.keys(aboutUsInf).filter(el => typeof aboutUsInf[el] === 'object').map(el => el));
         return (
            <div className='containerAboutUs' ref={this.refAboutUs} id='about_us'>
                <Header as='h2' icon textAlign='center'>
                    <Icon name='users' circular color='green'/>
                    <Header.Content>About Us</Header.Content>
                </Header>
                <Divider className='isDivider'/>
                <div className='wrapperAboutUs'>
                    <p className='descriptionAboutUs'>
                        { aboutUsInf.content }
                    </p>
                    <div className='photosAboutUs'>
                    {
                        Object.keys(aboutUsInf).filter(el => typeof aboutUsInf[el] === 'object').map((el, idx) => (
                        <TransitionablePortal
                            key={idx}
                            closeOnTriggerClick
                            openOnTriggerClick
                            mountNode={this.state.stateRefAboutUs}
                            trigger={
                                <Image
                                    src={aboutUsInf[el].src}
                                    circular
                                    className={`wrapperAboutUs_photo photo${idx}`}
                                />
                            }
                        >
                            <Segment className='employeeInf'>
                                <Image
                                    src={aboutUsInf[el].src}
                                    circular
                                    size='tiny'
                                    verticalAlign='top'
                                />
                                <Header style={{color: 'white'}}>{aboutUsInf[el].fullName}</Header>
                                <p>{aboutUsInf[el].roll}</p>
                                <p>{aboutUsInf.content.slice(0,250)}</p>
                            </Segment>
                        </TransitionablePortal>
                    ))}
                    </div>
                </div>
            </div>
        );
    }
}