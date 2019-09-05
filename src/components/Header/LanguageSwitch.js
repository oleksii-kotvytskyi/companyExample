import {Dropdown} from "semantic-ui-react";
import React from "react";
import updateContent from '../../actions/updateContent';
import Translate from '../../translate';
const options = [
    { key: 1, text: 'UA' },
    { key: 2, text: 'EN' },
];


export default class LanguageSwitch extends React.Component {
    changeLang = (lang) => {
        const { setUILanguage, setUIContent } = this.props;
        setUILanguage(lang);
        updateContent(lang, setUIContent);
    };

    render() {
        return (
            <Dropdown text={Translate.__('Language')}  item style={{width: '120px'}} >
                <Dropdown.Menu>
                    { options.map(el => (
                        <Dropdown.Item
                            key={el.key}
                            style={{textAlign: 'center'}}
                            value={el.text}
                            onClick={
                                () => this.changeLang(el.text.toLowerCase())
                            }
                        >
                            {el.text}
                        </Dropdown.Item>
                    ))}
                </Dropdown.Menu>
            </Dropdown>
        )
    }
}
