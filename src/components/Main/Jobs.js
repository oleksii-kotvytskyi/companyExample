import React from 'react';
import { Header, Icon, Grid, Divider } from 'semantic-ui-react';
import { JobItem } from "./jobItem";
import './Main.css';
// import Translate from '../../translate';
import { jobsInf } from '../../api/dataForComponents';

export  const Jobs = (props) => {
    return (
        <div id='jobs' className='containerJobs'>
            <Header as='h2' icon textAlign='center' >
                <Icon name='briefcase' circular color='green'/>
                <Header.Content>{ 'Jobs' }</Header.Content>
            </Header>
            <Divider className='isDivider'/>
            <Grid className='jobsCards'>
                { jobsInf.map((card, idx) =>
                    <JobItem
                        roll={card.title}
                        content={card.content}
                        key={idx}
                    /> )
                }
            </Grid>
        </div>
    )}