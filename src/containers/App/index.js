import { connect } from 'react-redux';
import { changeUIWidth } from '../../actions/index';
import App from '../../App';

const mapStateToProps = state => ({ width: state ? state.ui.width : '0' });
const mapDispatchToProps = dispatch => ({ changeUIWidth: (arg) => dispatch(changeUIWidth(arg)) });

export default connect(mapStateToProps, mapDispatchToProps)(App);
