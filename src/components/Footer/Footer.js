import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import Translate from '../../translate';


export class Footer extends Component {

    render() {
        const { email, phone } = this.props.sectionData;

        return (
            <div className='containerFooter' >
                <Grid textAlign={'center'} style={{backgroundColor: 'rgba(0,0,0,.87)', color: 'white', margin: 0}}>
                    <Grid.Column computer={6} mobile={12}>
                        { Translate.__('Copyright') }
                    </Grid.Column>
                    <Grid.Column computer={6} mobile={12}>
                        <Grid.Row>
                            <Grid.Column>
                                <a href={'tel:' + phone }>{ phone }</a>
                            </Grid.Column>
                            <Grid.Column>
                                <a href={`mailto:web@sunlight.com`}>{ email }</a>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}