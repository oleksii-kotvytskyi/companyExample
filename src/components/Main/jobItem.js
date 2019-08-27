import React, { Component, createRef } from 'react';
import {Header, Container, Grid, Divider, Button, Ref, Transition, Input} from 'semantic-ui-react';



import { Icon, Modal } from 'semantic-ui-react'

// const ModalBasicExample = (props) => (
//     <Modal trigger={<Button circular={true} >SEND CV</Button>} basic size='small'>
//         <Header icon='email' content='Send your CV' />
//         <Modal.Content>
//
//             <p>
//                 Your inbox is getting full, would you like us to enable automatic archiving of old messages?
//             </p>
//         </Modal.Content>
//         <Modal.Actions>
//             {/*onClick={this.close}*/}
//             <Button basic color='red' inverted onClick={() => {}} >
//                 <Icon name='remove' /> No
//             </Button>
//             <Button color='green' inverted>
//                 <Icon name='checkmark' /> Yes
//             </Button>
//         </Modal.Actions>
//     </Modal>
// )

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
    };

    callUploader = () => {
        const ui = document.createElement('input');
        ui.type = 'file';
        ui.dispatchEvent(new MouseEvent('click'));
        ui.addEventListener('change', () => {
            let data = new FormData();
            data.append('file', ui.files[0]);
            data.append('roll', this.props.roll);

            fetch('/data', {
                method: 'POST',
                body: data
            }).then(el => console.log(el))
        });
    };

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

{/*                                <form action="" style={{marginLeft: '1rem'}} onSubmit={this.handleSubmit}>
                                    <input type="file" name={`${roll}_CV`} onClick={this.addBtn}/>
                                    <Button style={this.state.addFile ? {display: 'inline-block'} : {display: 'none'}}>Send CV</Button>
                                </form>*/}

                                <div className="">
                                    <Button circular={true} onClick={this.callUploader}>SEND CV</Button>
                                </div>

                            </div>
                        </Transition>
                    </Grid.Column>
                </Ref>
            </Grid.Row>
        )
    }

}