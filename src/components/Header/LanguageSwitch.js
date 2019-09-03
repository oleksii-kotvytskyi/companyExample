import {Dropdown} from "semantic-ui-react";
import React from "react";
const options = [
    { key: 1, text: 'ua' },
    { key: 2, text: 'en' },
];


export default function LanguageSwitch({ language, setUILanguage } ) {
    console.log(setUILanguage, language);


    return (
        <Dropdown text='Language' simple item>
            <Dropdown.Menu>
                {options.map(el => (
                    <Dropdown.Item
                        key={el.key}
                        style={{textAlign: 'center'}}
                        value={el.text}
                        onClick={() => {setUILanguage(el.text)}} >
                        {el.text}
                    </Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown>

    )
}
