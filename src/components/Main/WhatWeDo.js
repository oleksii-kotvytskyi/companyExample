import React, { Component } from 'react';
import { Header, Icon, Container, Grid, Divider } from 'semantic-ui-react';
import './Main.css';
import { getWidth } from '../../utils/Utils';
import { whatWeDoInf } from '../../api/dataForComponents';


export class WhatWeDo extends Component {

  render() {
    let columns = getWidth() < 750 ? 1 : 3;

    return (
      <div className='containerWhatWeDo' id='what_we_do' >
        <Header as='h2' icon textAlign='center'>
          <Icon name='angrycreative' circular color='olive'/>
          <Header.Content>What We Do</Header.Content>
        </Header>
        <Divider className='isDivider'/>
        <Grid columns={columns} className='phasesWhatWeDo'  centered>
          {
              whatWeDoInf.map((el, idx) => (
                <Grid.Column key={idx}>
                  <Header as='h2' icon textAlign='center'>
                    <Icon name={el.icon} color={el.color ? el.color : 'yellow'}/>
                    <Header.Content>
                        {el.tittle}
                    </Header.Content>
                  </Header>
                  <Container textAlign='center'>
                    <p> {el.content} </p>
                  </Container>
                </Grid.Column>
          ))}
        </Grid>
      </div>
    );
  }
}