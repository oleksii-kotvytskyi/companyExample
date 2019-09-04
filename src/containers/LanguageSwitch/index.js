import { connect } from 'react-redux';
import { changeUIContent, changeUILanguage } from '../../actions/index';
import  LanguageSwitch  from '../../components/Header/LanguageSwitch';

const mapStateToProps = state => ({
    language: state.ui.language,
});

const mapDispatchToProps = dispatch => ({
    setUILanguage: (arg) => dispatch(changeUILanguage(arg)),
    setUIContent: (arg) => dispatch(changeUIContent(arg))
});

export default connect(mapStateToProps, mapDispatchToProps)(LanguageSwitch);
