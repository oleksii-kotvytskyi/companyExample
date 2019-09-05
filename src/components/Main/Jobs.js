import React from 'react';
import { Header, Icon, Grid, Divider } from 'semantic-ui-react';
import { JobItem } from "./jobItem";
import './Main.css';
import Translate from '../../translate';

export  const Jobs = (props) => {
    const { list } = props.sectionData;
    return (
        <div id='jobs' className='containerJobs'>
            <Header as='h2' icon textAlign='center' >
                <Icon name='briefcase' circular color='green'/>
                <Header.Content>{ Translate.__('Jobs') }</Header.Content>
            </Header>
            <Divider className='isDivider'/>
            <Grid className='jobsCards'>
                { list.map((card, idx) =>
                    <JobItem
                        roll={card.title}
                        content={card.content}
                        key={idx}
                    /> )
                }
            </Grid>
        </div>
    )}