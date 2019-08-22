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
                        <Grid.Row>
                            <Grid.Column>
                                <a href="tel:+380688902793">+380 68 890 27 93</a>
                            </Grid.Column>
                            <Grid.Column>
                                <a href="mailto:web@msunligth.com?subject=Тема%20письма&body=Body:%0AНомер%20для%20связи:">web@sunligth.com</a>
                            </Grid.Column>
                        </Grid.Row>


                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}