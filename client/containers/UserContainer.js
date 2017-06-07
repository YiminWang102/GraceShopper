import {connect} from 'react-redux'

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser
  }
}

connect(mapStateToProps)(User)
