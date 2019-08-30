import React from 'react';
import { Header, Icon, Grid, Divider } from 'semantic-ui-react';
import { jobsInf } from '../../api/dataForComponents';
import { JobItem } from "./jobItem";
import './Main.css';

export  const Jobs = () => {
    return (
        <div >
            <Header as='h2' icon textAlign='center' >
                <Icon name='briefcase' circular color='green'/>
                <Header.Content>Jobs</Header.Content>
            </Header>
            <Divider className='isDivider'/>
            <Grid className='jobsCards'>
                { jobsInf.map((card, idx) =>
                    <JobItem roll={card.roll} content={card.content} key={idx}/>) }
            </Grid>
        </div>
    )}