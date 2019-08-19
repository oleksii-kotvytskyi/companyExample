import React, { Component, createRef } from 'react';
import { Header, Container, Grid, Divider, Button, Ref, Transition } from 'semantic-ui-react';


export class JobItem extends Component {
    state = {
        refCard: null,
        visible: false
    }
    cardRef = createRef();

    handleClick = () => {
        this.cardRef.current.classList.toggle('active');
        this.setState((prevState) => ({
            refCard: this.cardRef.current,
            visible: !prevState.visible
        }))
    }

    render() {
        const { roll, content} = this.props;
        const { visible } = this.state;
        return(
            <Grid.Row  centered columns='2' style={{marginTop: '3rem'}}>
                <Ref innerRef={this.cardRef}>
                    <Grid.Column className='jobsCard' >
                        <Header color='green'>
                            {roll}
                        </Header>
                        <p>
                            {content}
                        </p>
                        <Divider />
                        <Button icon='angle down' floated='right' onClick={this.handleClick} inverted color='green' active={visible}/>
                        <Transition
                            visible={visible}
                            animation='scale'
                            duration={500}
                        >
                            <p style={{padding: '1rem', clear:'both', width: '90%'}}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos officia quisquam sit?
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab inventore iure magni praesentium
                                quasi quisquam ullam voluptatem! Dicta, nam, repellat! Beatae delectus ex facilis neque quidem quisquam sint, sunt? Officiis.
                            </p>
                        </Transition>
                    </Grid.Column>
                </Ref>
            </Grid.Row>
        )
    }

}