import Navbar from '../components/Navbar';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    loggedIn: !!state.user.id,
    isUserAdmin: !!state.user.isAdmin,
    cartId: state.user.cartId 
  };
};

const NavbarContainer = connect(
  mapStateToProps
)(Navbar);

export default NavbarContainer;
