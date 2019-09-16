import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';

const phone = '3809009090';
const email = 'someEmail@example.com'

export class Footer extends Component {
    render() {

        return (
            <div className='containerFooter' >
                <Grid textAlign={'center'} style={{backgroundColor: 'rgba(0,0,0,.87)', color: 'white', margin: 0}}>
                    <Grid.Column computer={6} mobile={12}>
                        Company Name © 2019 All Rights Reserved
                    </Grid.Column>
                    <Grid.Column computer={6} mobile={12}>
                        <Grid.Row>
                            <Grid.Column>
                                <a href={`tel:${phone}`}>{ phone }</a>
                            </Grid.Column>
                            <Grid.Column>
                                <a href={`mailto:${email}`}>{ email }</a>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}