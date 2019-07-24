import React, { Component } from 'react'
// import history from '../../components/history'
import { connect } from "react-redux";

class Login extends Component {
    render() {
        return (
            <div>
                <h1 style={{ cursor: 'pointer' }} onClick={() => this.props.history.push('/dashboard')}>Login</h1>
            </div>
        )
    }
}

const mapStateToProps = () => ({
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Login); 