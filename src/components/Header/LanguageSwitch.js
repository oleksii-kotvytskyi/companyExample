import {Dropdown} from "semantic-ui-react";
import React from "react";
const options = [
    { key: 1, text: 'UA' },
    { key: 2, text: 'EN' },
];


export default class LanguageSwitch extends React.Component {

    render() {
        return (
            <Dropdown text={'Language'}  item style={{width: '120px'}} >
                <Dropdown.Menu>
                    { options.map(el => (
                        <Dropdown.Item
                            key={el.key}
                            style={{textAlign: 'center'}}
                            value={el.text}
                        >
                            {el.text}
                        </Dropdown.Item>
                    ))}
                </Dropdown.Menu>
            </Dropdown>
        )
    }
}
