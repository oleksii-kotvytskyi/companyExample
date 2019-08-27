import React, { Component } from 'react';
import { Header, Icon, Container, Image, TransitionablePortal, Segment, Divider } from 'semantic-ui-react';
import './Main.css';
import { aboutUsInf } from '../../api/dataForComponents';


export class AboutAs extends Component {
    constructor(props) {
        super(props);
        this.refAboutUs = React.createRef();
        this.state = {
            stateRefAboutUs : null,
        }
    }
    componentDidMount() {
        this.setState({
                stateRefAboutUs: this.refAboutUs.current
        })
    }

    render() {
        const regExp = /^photo/i;
        const renderArr = Object.keys(aboutUsInf).filter(el => regExp.test(el));
         return (
            <div className='containerAboutUs' ref={this.refAboutUs}>
                <Header as='h2' icon textAlign='center'>
                    <Icon name='users' circular color='green'/>
                    <Header.Content>About Us</Header.Content>
                </Header>
                <Divider style={{width: '80%', margin: '0 auto'}}/>
                <Container className='wrapperAboutUs'>
                    <Container text>
                        <p>
                            { aboutUsInf.content }
                        </p>
                    </Container>
                    {
                        renderArr.map((el, idx) => (
                        <TransitionablePortal
                            key={idx}
                            closeOnTriggerClick
                            openOnTriggerClick
                            mountNode={this.state.stateRefAboutUs}
                            trigger={
                                <Image
                                    src={aboutUsInf[el].src}
                                    circular
                                    className={`wrapperAboutUs_photo ${el}`}
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
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet architecto at beatae blanditiis dignissimos eos error, eveniet incidunt laboriosam minima nam, nihil obcaecati odio odit praesentium quibusdam similique ut vel.</p>
                            </Segment>
                        </TransitionablePortal>
                    ))}
                </Container>
            </div>
        );
    }
}