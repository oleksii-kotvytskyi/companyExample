import { connect } from 'react-redux';
import {
  changeUIWidth,
  changeUILanguage,
  changeUIContent } from '../../actions/index';
import App from '../../App';

const mapStateToProps = state => ({
  width: state ? state.ui.width : '0',
  language: state.ui.language,
  contentHeader: state.content.header,
  contentIntro: state.content.intro,
  contentAbout: state.content.about,
  contentWeDo: state.content.wedo,
  contentJobs: state.content.jobs,
  contentFooter: state.content.footer,
});

const mapDispatchToProps = dispatch => ({
  setUIWidth: (arg) => dispatch(changeUIWidth(arg)),
  setUILanguage: (arg) => dispatch(changeUILanguage(arg)),
  setUIContent: (arg) => dispatch(changeUIContent(arg)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
