import Navbar from '../components/Navbar';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    cartId: state.user.cartId
  };
};

const NavbarContainer = connect(
  mapStateToProps
)(Navbar);

export default NavbarContainer;
