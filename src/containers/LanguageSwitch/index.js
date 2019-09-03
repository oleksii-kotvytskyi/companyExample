import {Dropdown} from "semantic-ui-react";
import { connect } from 'react-redux';
import React from "react";
import {changeUIContent, changeUILanguage, changeUIWidth} from '../../actions/index';
import  LanguageSwitch  from '../../components/Header/LanguageSwitch';

const mapStateToProps = state => ({
    language: state.ui.language,
});

const mapDispatchToProps = dispatch => ({
    setUILanguage: (arg) => dispatch(changeUILanguage(arg)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LanguageSwitch);
