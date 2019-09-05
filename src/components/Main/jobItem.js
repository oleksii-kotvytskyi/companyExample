import React, { Component, createRef } from 'react';
import { Header, Grid, Divider, Button, Ref, Transition, Form, Icon} from 'semantic-ui-react';

export class JobItem extends Component {
    state = {
        refCard: null,
        visible: false,
        reply: false,
        file: null,
        textArea: '',
    };
    cardRef = createRef();

    handleClick = () => {
        this.setState((prevState) => ({
            refCard: this.cardRef.current,
            visible: !prevState.visible,
            reply: false,
            textArea: '',
            file: null,
        }))
    };
    replyMail = () => this.setState(prevState => ({reply: !prevState.reply}))

    callUploader = () => {
        let inputFile = document.createElement('input');
        inputFile.type = 'file';
        inputFile.dispatchEvent(new MouseEvent('click'));
        inputFile.addEventListener('change', () => {
            this.setState({
                file: inputFile.files[0]
            })
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
        });

        this.setState({
            file: null,
            textArea: '',
            visible: false,
            reply: false
        });
    };

    deleteFile = () => {
        this.setState({
            file: null,
        })
    }

    render() {
        const { roll, content } = this.props;
        const { visible, reply, file } = this.state;

        const contentPart = content.split('===');
        let preview = content;
        let description = '';

        if (contentPart.length === 2) {
            preview = contentPart[0];
            description = contentPart[1];
        }

        return(
            <Grid.Row centered  >
                <Ref innerRef={this.cardRef}>
                    <Grid.Column
                        className='jobsCard'
                        largeScreen={ 8 }
                        computer={ 8 }
                        tablet={ 10 }
                        mobile={ 14 }
                    >
                        <Header color='green'>
                            { roll }
                        </Header>
                        <p>
                            { preview }
                        </p>
                        <Divider />
                        <Button icon='angle down' floated='right' onClick={this.handleClick} inverted color='green' active={visible}/>
                        <Transition
                            visible={visible}
                            animation='scale'
                            duration={ 500 }
                        >
                            <div>
                                <p className='jobItemDescription'>
                                    { description }
                                </p>
                                <Button onClick={this.replyMail} style={{marginLeft: '1rem'}}>
                                    Reply
                                </Button>
                                <Transition
                                    visible={reply}
                                    animation='scale'
                                    duration={ 500 }
                                >
                                    <div>
                                        <Form style={{marginLeft: '1rem', marginTop: '1rem'}}>
                                            <Form.TextArea
                                                placeholder='Tell us more'
                                                onChange={e => this.setState({
                                                    textArea: e.target.value
                                                })}
                                                value={this.state.textArea}
                                            />
                                            <Button onClick={this.callUploader} floated='left'>
                                                Add File
                                            </Button>
                                            <span style={{lineHeight: 2.5}}>
                                                { file ? file.name : '' }
                                            </span>
                                            {
                                                file
                                                    ?
                                                    <Icon
                                                        className='iconDeleteFile'
                                                        name='delete'
                                                        color='red'
                                                        onClick={this.deleteFile}
                                                    />
                                                    : null
                                            }
                                            <Button onClick={this.sendData} floated={'right'}>
                                                SEND
                                            </Button>
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