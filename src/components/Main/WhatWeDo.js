import React, { Component } from 'react';
import { Header, Icon, Container, Grid, Divider } from 'semantic-ui-react';
import { whatWeDoInf } from '../../api/dataForComponents';
import './Main.css';

export class WhatWeDo extends Component {
    render() {
        return (
            <div className='containerWhatWeDo'>
                <Header as='h2' icon textAlign='center' >
                    <Icon name='angrycreative' circular color='olive'/>
                    <Header.Content>What We Do</Header.Content>
                </Header>
                <Divider className='isDivider'/>
                <Grid columns={3} style={{width: '80%', margin: '3rem auto 3rem auto'}} centered>
                    { whatWeDoInf.map((el, idx) => (
                        <Grid.Column key={idx}  >
                            <Header as='h2' icon textAlign='center'>
                                <Icon name={el.icon}  color={el.color ? el.color : 'yellow'} />
                                <Header.Content>{el.tittle}</Header.Content>
                            </Header>
                            <Container textAlign='center'>
                                <p> { el.content } </p>
                            </Container>
                        </Grid.Column>
                    ))}
                </Grid>
            </div>
        )
    }
}