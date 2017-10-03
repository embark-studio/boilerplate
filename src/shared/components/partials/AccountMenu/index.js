import { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Avatar, Button } from 'shared/components/elements'
import { SIGN_OUT } from 'constants/actionTypes'
import { StyleSheet, css } from 'aphrodite'
import theme from 'theme'
import avatar from 'images/avatar.png'
import classes from './style.scss'

const styles = StyleSheet.create({
  menu: {
    color: theme.color.white,
  },
})

class UserHeader extends Component {
  constructor(props) {
    super(props)

    this.state = { open: false }
  }
  toggleMenu() {
    this.setState({ open: !this.state.open })
  }
  renderMenu() {
    return 
  }
  render() {
    const { user } = this.props

    return (
      <div className={classes.menuCtn}>
        <Avatar
          onClick={() => this.toggleMenu()}
          margin="0 20px"
          padding="5px"
          size="50px"
          src={user && user.photoURL || avatar}
        />

        {this.state.open ? (
          <ul className={`${classes.menuDropdown} ${css(styles.menu)}`}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/profile">Secret Profile</Link></li>
            <li><Link to="/signup">Sign Up Landing Page</Link></li>
            <li><Link to="/signup/create-account/step-1">SignUp-Step-1</Link></li>
            <li>
              <Link to="/">
                <Button
                  onClick={() => store.dispatch({ type: SIGN_OUT_REQUESTED, user: null })}
                >
                  Sign Out
                </Button>
              </Link>
            </li>
          </ul>
        ) : (
          <ul></ul>
        )}
      </div>
    )
  }
}

UserHeader.propTypes = {
  user: PropTypes.object,
}

const mapStateToProps = (state) => {
  return { user: state.shared.user }
}

export default connect(mapStateToProps)(UserHeader)
