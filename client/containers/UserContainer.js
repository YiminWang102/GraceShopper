import {connect} from 'react-redux';
import User from '../components/User';

const mapStateToProps = (state) => {
  return {
    viewedUser: state.viewedUser
  }
}

export default connect(mapStateToProps)(User)
