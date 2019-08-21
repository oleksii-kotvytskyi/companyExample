import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';




export class Footer extends Component {

    render() {

        return (
            <div className='containerFooter' >
                <Grid textAlign={'center'} style={{backgroundColor: 'rgba(0,0,0,.87)', color: 'white'}}>
                    <Grid.Column width={6}>
                        Company Name © 2019 Copyright Text
                    </Grid.Column>
                    <Grid.Column width={6}>
                        093-121-12-12
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}