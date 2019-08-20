import React, { Component, createRef } from 'react';
import { Header, Container, Grid, Divider, Button, Ref, Transition } from 'semantic-ui-react';


export class JobItem extends Component {
    state = {
        refCard: null,
        visible: false,
        addFile: false
    }
    cardRef = createRef();

    handleClick = () => {
        this.cardRef.current.classList.toggle('active');
        this.setState((prevState) => ({
            refCard: this.cardRef.current,
            visible: !prevState.visible,
        }))
    }
    handleSubmit = (e) => {
        e.preventDefault();
        if(this.cardRef.current.classList.contains('active')) {
            let input = this.cardRef.current.querySelector('input[type="file"]')
            let data = new FormData();
            data.append('file', input.files[0])
            data.append('roll', this.props.roll);

            fetch('/data', {
                method: 'POST',
                body: data
            }).then(el => console.log(el))
        }
    }

    addBtn = () => {
        setTimeout(() => this.setState({addFile: true}), 1000)
    }

    render() {
        const { roll, content} = this.props;
        const { visible } = this.state;
        return(
            <Grid.Row  centered columns='2' style={{marginTop: '3rem'}}>
                <Ref innerRef={this.cardRef}>
                    <Grid.Column className='jobsCard' >
                        <Header color='green'>
                            {roll}
                        </Header>
                        <p>
                            {content}
                        </p>
                        <Divider />
                        <Button icon='angle down' floated='right' onClick={this.handleClick} inverted color='green' active={visible}/>
                        <Transition
                            visible={visible}
                            animation='scale'
                            duration={500}
                        >
                            <div>
                                <p style={{padding: '1rem', clear:'both', width: '90%'}}>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos officia quisquam sit?
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab inventore iure magni praesentium
                                    quasi quisquam ullam voluptatem! Dicta, nam, repellat! Beatae delectus ex facilis neque quidem quisquam sint, sunt? Officiis.
                                </p>
                                <form action="" style={{marginLeft: '1rem'}} onSubmit={this.handleSubmit}>
                                    <input type="file" name={`${roll}_CV`} onClick={this.addBtn}/>
                                    <Button style={this.state.addFile ? {display: 'inline-block'} : {display: 'none'}}>Send CV</Button>
                                </form>
                            </div>
                        </Transition>
                    </Grid.Column>
                </Ref>
            </Grid.Row>
        )
    }

}