import {Dropdown} from "semantic-ui-react";
import React from "react";
import updateContent from '../../actions/updateContent';
const options = [
    { key: 1, text: 'UA' },
    { key: 2, text: 'EN' },
];


export default class LanguageSwitch extends React.Component{
    state = {
        textLang: ''
    }

    changeLang = (lang) => {
        const { setUILanguage, setUIContent } = this.props;
        setUILanguage(lang);
        updateContent(lang, setUIContent);
        this.setState({textLang: lang == "EN" ? 'Language' : 'Мова'})
    };

    render() {
        const { textLang } = this.state;
        return (
            <Dropdown text={textLang ? textLang : 'Language'}  item style={{width: '120px', textAlign: 'right'}} >
                <Dropdown.Menu>
                    {options.map(el => (
                        <Dropdown.Item
                            key={el.key}
                            style={{textAlign: 'center'}}
                            value={el.text}
                            onClick={() => this.changeLang(el.text)} >
                            {el.text}
                        </Dropdown.Item>
                    ))}
                </Dropdown.Menu>
            </Dropdown>
        )
    }

}
