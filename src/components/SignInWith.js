import React, { Component } from 'react';
import { connect } from 'react-redux'

class SignInWith extends Component {
    render() {
        return ( 
            <div>
                <div data-behavior="overlay" className="overlay overlay-hugeinc this.props.modalMode ? 'open':''">
        <button data-behavior="close-overlay" type="button" className="overlay-close"><span className="glyphicon glyphicon-remove"></span></button>
        <nav>
            <h2 className="grayed-heading center">Sign in or create an account</h2>
            <ul className="omniauth-button-group">
                <li className="omniauth-button">
                    <a className="button facebook" href="https://my-medium-clone.herokuapp.com/users/auth/facebook">
                        <i className="fa fa-facebook-official"></i>Sign in with Facebook
                    </a>
                </li>

                <li className="omniauth-button google">
                    <a className="button google" href="https://my-medium-clone.herokuapp.com/users/auth/google_oauth2">
                        <i className="fa fa-google"></i>Sign in with Google
                    </a>
                </li>

                <li className="omniauth-button twitter">
                    <a className="button twitter" href="https://my-medium-clone.herokuapp.com/users/auth/twitter">
                        <i className="fa fa-twitter"></i>Sign in with Twitter
                    </a>
                </li>

                <li>
                    <a className="signin-signup-link" href="https://my-medium-clone.herokuapp.com/users/sign_in">Sign in or Sign up with email</a>
                </li>
            </ul>
        </nav>
    </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        modalMode: state.common.modalMode
    }
}

const mapDispatchToProps = dispatch => {
    return {
        toggleClose: (dispatch)=> {dispatch({type: 'TOGGLE_MODAL', modalMode: false})},
        toggleOpen: (dispatch)=> {dispatch({type: 'TOGGLE_MODAL', modalMode: true})}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignInWith);