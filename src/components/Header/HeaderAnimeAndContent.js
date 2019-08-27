import styled  from 'styled-components';
import React, {Component} from 'react';
import  anime  from '../../animated_text_fill.png';

const HeaderMainContent = styled.div `
    font: 400 1.3rem "Neuton";
    background: rgba(9,13,0 , 0.15); /*251, 189, 8*/
    text-align: center;
    height: ${props => props.isDesktop ? 80 : 100}vh;
   
`;
const AnimationContainer = styled.div`
     position: relative;
     height: 50vh;
`;
const AnimationPart = styled.p`
    position: absolute;
    top: 30%;
    width: ${props => props.isDesktop ? 400 : 300}px;
    text-transform: uppercase;
    letter-spacing: .6rem;
    display: inline-block;
    border: double rgba(255, 255, 255, 0.75);
    border-width: 4px 0;
    padding: 1.5rem 0;
    transform: translate(-50%, 0%);
`;
const AnimationText = styled.span`
    font: 700 ${props => props.isDesktop ? '5rem' : '4rem'} "Oswald", sans-serif;
    letter-spacing: 0;
    padding: .25rem 0 .325rem;
    display: block;
    margin: 0 auto;
    text-shadow: 0 0 80px rgba(255, 255, 255, 0.5);
    background: url(${anime}) repeat-y;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: aitf 80s linear infinite ;
    -webkit-animation: aitf 80s linear infinite ;
    -webkit-transform: translate3d(0, 0, 0);
    -webkit-backface-visibility: hidden;
     @keyframes aitf {   
        0% {
            background-position: 0% 50%;
        }
        100% {
            background-position: 100% 50%;
        }
    }
`;
const AnimateDescription = styled.p`
    width: 60%;
    margin: 0 auto;
`;


export class HeaderAnimeAndContent extends Component {
    render() {
        const { width } = this.props;
        const isDesktop = width > 550;
        return(
            <HeaderMainContent isDesktop={isDesktop}>
                <AnimationContainer>
                    <AnimationPart isDesktop={isDesktop}>
                        Pre Text
                        <AnimationText isDesktop={isDesktop}>
                            Sunlight
                        </AnimationText>
                        Lorem ipsum dolor sit amet.
                    </AnimationPart>
                </AnimationContainer>
                <AnimateDescription>
                    Cum deserunt dolorum id illum in magni necessitatibus nisi tenetur. Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Adipisci assumenda illum magni, quaerat quas quia quo rerum sapiente
                    tempore voluptatem! Consectetur dolorum id illum in magni necessitatibus nisi tenetur.
                </AnimateDescription>
            </HeaderMainContent>
        )
    }
}

