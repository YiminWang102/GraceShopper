import Navbar from '../components/Navbar';
import { connect } from 'react-redux';
import { logout } from '../reducer/user';

const mapStateToProps = (state) => {
  return {
    loggedIn: !!state.user.id,
    isUserAdmin: !!state.user.isAdmin,
    cartId: state.user.cartId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logOut: () => {
      console.log('logging out');
      dispatch(logout());
    }
  }
}

const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar);

export default NavbarContainer;
