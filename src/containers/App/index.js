import { connect } from 'react-redux';
import { changeUIWidth } from '../../actions/index';
import App from '../../App';


const mapStateToProps = (state) => ({
    width: state.ui.width,
});

const mapDispatchToProps = (dispatch) => {
    return {
        changeUIWidth: (arg) => dispatch(changeUIWidth(arg)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
