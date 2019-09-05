import React, { Component } from 'react';
import { Header, Icon, Container, Grid, Divider } from 'semantic-ui-react';
import './Main.css';
import { getWidth } from '../../utils/Utils';
import Translate from '../../translate';


export class WhatWeDo extends Component {

  render() {
    let columns = getWidth() < 750 ? 1 : 3;
    const items = [
      {tittle: Translate.__('Prototype'), content: Translate.__('Prototype_text'), icon: "sitemap", color: "black"},
      {tittle: Translate.__('Design'), content: Translate.__('Design_text'), icon: "sync", color: "green"},
      {tittle: Translate.__('Backend'), content: Translate.__('Backend_text'), icon: "php", color: "violet"},
      {tittle: Translate.__('Frontend'), content: Translate.__('Frontend_text'), icon: "react", color: "blue"},
      {tittle: Translate.__('Plugins'), content: Translate.__('Plugins_text'), icon: "gem"},
    ];

    return (
      <div className='containerWhatWeDo' id='what_we_do' >
        <Header as='h2' icon textAlign='center'>
          <Icon name='angrycreative' circular color='olive'/>
          <Header.Content>{ Translate.__('What We Do') }</Header.Content>
        </Header>
        <Divider className='isDivider'/>
        <Grid columns={columns} className='phasesWhatWeDo'  centered>
          {
              items.map((el, idx) => (
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