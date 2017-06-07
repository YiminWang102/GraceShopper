import Navbar from '../components/Navbar';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {

  };
};

const NavbarContainer = connect(
  mapStateToProps
)(Navbar);

export default NavbarContainer;
