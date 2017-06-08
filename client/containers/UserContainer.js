import {connect} from 'react-redux';
import User from '../components/User';

const mapStateToProps = (state) => {
  return {
    currentUser: state.user
  }
}

export default connect(mapStateToProps)(User)
