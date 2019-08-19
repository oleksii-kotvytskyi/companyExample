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
                        Array(3).fill(0).map((el, idx) => (
                        <TransitionablePortal
                            key={idx}
                            closeOnTriggerClick
                            openOnTriggerClick
                            mountNode={this.state.stateRefAboutUs}
                            trigger={
                                <Image
                                    src={aboutUsInf['photo'+idx].src}
                                    circular
                                    className={`wrapperAboutUs_photo photo${idx}`}
                                />
                            }
                        >
                            <Segment className='employeeInf'>
                                <Image
                                    src={aboutUsInf['photo'+idx].src}
                                    circular
                                    size='tiny'
                                    verticalAlign='top'
                                />
                                <Header style={{color: 'white'}}>{aboutUsInf['photo'+idx].fullName}</Header>
                                <p>{aboutUsInf['photo'+idx].roll}</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet architecto at beatae blanditiis dignissimos eos error, eveniet incidunt laboriosam minima nam, nihil obcaecati odio odit praesentium quibusdam similique ut vel.</p>
                            </Segment>
                        </TransitionablePortal>
                    ))}
                </Container>
            </div>
        );
    }
}