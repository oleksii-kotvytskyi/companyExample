import { connect } from 'react-redux';
import {
  changeUIWidth,
  changeUILanguage,
  changeUIContent } from '../../actions/index';
import App from '../../App';

const mapStateToProps = (state) => {
  console.log("STATE: ", state);
  return  state.content  ? {
    width: state.ui ? state.ui.width : '0',
    language: state.ui ? state.ui.language : 'en',
    contentHeader: state.content.header,
    contentIntro: state.content.intro,
    contentAbout: state.content.about,
    contentWeDo: state.content.wedo,
    contentJobs: state.content.jobs,
    contentFooter: state.content.footer,
  } : {};
};

const mapDispatchToProps = dispatch => {
  return {
    setUIWidth: (arg) => dispatch(changeUIWidth(arg)),
    setUILanguage: (arg) => dispatch(changeUILanguage(arg)),
    setUIContent: (arg) => dispatch(changeUIContent(arg)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
