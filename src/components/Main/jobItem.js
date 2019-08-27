import React, { Component, createRef } from 'react';
import { Header, Grid, Divider, Button, Ref, Transition, TextArea, Form } from 'semantic-ui-react';


export class JobItem extends Component {
    state = {
        refCard: null,
        visible: false,
        reply: false,
        file: null,
        textArea: ''
    }
    cardRef = createRef();

    handleClick = () => {
        this.cardRef.current.classList.toggle('active');
        this.setState((prevState) => ({
            refCard: this.cardRef.current,
            visible: !prevState.visible,
            reply: false,
            textArea: '',
            file: null
        }))
    }
    replyMail = () => this.setState(prevState => ({reply: !prevState.reply}))
    callUploader = () => {
        let inputFile = document.createElement('input');
        inputFile.type = 'file';
        inputFile.dispatchEvent(new MouseEvent('click'));
        inputFile.addEventListener('change', () => {
            this.setState({file: inputFile.files[0]})
        });
    };
    sendData = () => {
        let data = new FormData();
        data.append('file', this.state.file);
        data.append('roll', this.props.roll);
        data.append('text', this.state.textArea);

        fetch('/data', {
            method: 'POST',
            body: data
        })
        this.setState({file: null, textArea: '', visible: false, reply: false});
    }



    render() {
        const { roll, content } = this.props;
        const { visible, reply } = this.state;
        console.log(reply);
        return(
            <Grid.Row centered  >
                <Ref innerRef={this.cardRef}>
                    <Grid.Column className='jobsCard' width='6' >
                        <Header color='green'>
                            {roll}
                        </Header>
                        <p>
                            {content}
                        </p>
                        <Divider />
                        <Button icon='angle down' floated='right' active={visible} onClick={this.handleClick} inverted color='green' />
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
                                <div style={{textAlign: 'center'}}>
                                    <Button onClick={this.replyMail}  toggle active={reply}>Reply</Button>
                                </div>

                                <Transition
                                    visible={reply}
                                    animation='scale'
                                    duration={500}
                                >
                                    <div>
                                        <Form style={{marginLeft: '1rem', marginTop: '1rem'}}>
                                            <Form.TextArea placeholder='Tell us more' onChange={e => this.setState({textArea: e.target.value})} value={this.state.textArea} />
                                            <Button onClick={this.callUploader} floated='left'>Add File</Button>
                                            <span style={{lineHeight: 2.5}}>
                                                {this.state.file ? this.state.file.name : ''}
                                            </span>
                                            <Button onClick={this.sendData} floated='right'>SEND</Button>

                                        </Form>
                                    </div>
                                </Transition>
                            </div>
                        </Transition>
                    </Grid.Column>
                </Ref>
            </Grid.Row>
        )
    }

}
{/*<Button onClick={this.callUploader} style={{marginLeft: '1rem'}}>SEND CV</Button>*/}