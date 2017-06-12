import Navbar from '../components/Navbar';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    loggedIn: !!state.user.id,
    isUserAdmin: !!state.user.isAdmin
  };
};

const NavbarContainer = connect(
  mapStateToProps
)(Navbar);

export default NavbarContainer;
