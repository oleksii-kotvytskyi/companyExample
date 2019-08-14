import React, { Component } from 'react';
import { Header, Icon, Container, Image, TransitionablePortal,Segment } from 'semantic-ui-react';
import './Main.css';

const objectInf = {
    photo1: {
        src: 'https://seeklogo.com/images/F/flat-man-icon-logo-A0FEC16B6D-seeklogo.com.png',
        FullName: 'Aleksey Kotvitsky',
        roll: 'React Developer'
    },

    photo2: {
        src: 'https://icon-library.net/images/woman-icon/woman-icon-8.jpg',
        FullName: 'Oksana Palamarchuk ',
        roll: 'Business Analytic'
    },
    photo3: {
        src: 'https://seeklogo.com/images/F/flat-man-icon-logo-A0FEC16B6D-seeklogo.com.png',
        FullName: 'Oleg Werdffelynir',
        roll: 'Full Stack Developer'
    }
};


export class AboutAs extends Component {

    render() {
        return (
            <div className='containerAboutUs'>
                <Header as='h2' icon textAlign='center'>
                    <Icon name='users' circular color='green'/>
                    <Header.Content>About Us</Header.Content>
                </Header>
                <Container className='wrapperAboutUs'>
                    <Container text>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aspernatur assumenda consequatur
                        corporis cumque distinctio doloremque doloribus esse excepturi fugiat id impedit iusto, magni
                        quidem sequi similique vel vitae. A adipisci aliquam aspernatur atque cum, dicta dolor dolore
                        enim excepturi exercitationem facilis ipsa laborum magnam magni molestias nam nesciunt nihil
                        odit porro provident quae quo repellendus rerum sed ullam voluptatibus, voluptatum. Adipisci
                        aliquam at dolore, esse maxime mollitia omnis quam repudiandae sed similique soluta unde velit.
                        Accusamus accusantium adipisci asperiores blanditiis consectetur culpa dolorem doloremque
                        dolores doloribus excepturi facilis harum hic impedit laboriosam maxime modi nesciunt officia
                        optio pariatur quibusdam recusandae, repellendus reprehenderit, repudiandae saepe sapiente
                        soluta suscipit vel vero voluptatibus voluptatum. Doloremque expedita in reiciendis! Alias
                        assumenda beatae, commodi consequuntur debitis doloribus ducimus error esse eum fuga in iure,
                        labore magnam nam nemo, nihil nisi nulla odio officia omnis perspiciatis repellat repellendus
                        reprehenderit suscipit velit. Ad aut deleniti deserunt dicta dolores ea ex harum in inventore,
                        laborum magni nemo nisi nobis placeat provident quaerat repudiandae! Ab adipisci alias aperiam
                        aspernatur dicta dolorem doloribus ducimus fugit iure laudantium minus nostrum odit possimus,
                        praesentium provident quam quod reiciendis saepe suscipit veritatis vitae voluptas voluptatem.
                        Blanditiis fugit ipsam neque officiis saepe totam.
                    </Container>
                    {Array(3).fill(0).map((el, idx) => (
                        <TransitionablePortal
                            closeOnTriggerClick
                            openOnTriggerClick
                            trigger={
                                <Image
                                    src={objectInf['photo'+(idx+1)].src}
                                    circular
                                    className={`wrapperAboutUs_photo photo${[idx+1]}`}
                                />
                            }
                        >

                            <Segment style={{ left: '30%', position: 'relative', top: '-50%', zIndex: 1000, width: '30%', textAlign: 'center', backgroundColor: 'rgba(0,0,0,0.7)', color: 'white' }}>
                                <Header>{objectInf['photo'+(idx+1)].FullName}</Header>
                                <p>{objectInf['photo'+(idx+1)].roll}</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet architecto at beatae blanditiis dignissimos eos error, eveniet incidunt laboriosam minima nam, nihil obcaecati odio odit praesentium quibusdam similique ut vel.</p>
                            </Segment>
                        </TransitionablePortal>
                    ))}


                    {/*<Image*/}
                    {/*    src='https://icon-library.net/images/woman-icon/woman-icon-8.jpg'*/}
                    {/*    circular*/}
                    {/*    className='wrapperAboutUs_photo photo2'*/}
                    {/*/>*/}
                    {/*<Image*/}
                    {/*    src='https://seeklogo.com/images/F/flat-man-icon-logo-A0FEC16B6D-seeklogo.com.png'*/}
                    {/*    circular*/}
                    {/*    className='wrapperAboutUs_photo photo3'*/}
                    {/*    // tooltip={imageObj.photo3}*/}
                    {/*/>*/}
                </Container>
            </div>
        );
    }
}