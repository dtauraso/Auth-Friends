import React from 'react';

import { axiosWithAuth } from '../utils/axiosWithAuth'
import Loader from 'react-loader-spinner'
class Login extends React.Component {

    state = {
        credentials: {
            username: '',
            password: ''
        },
        isFetching: false
    }

    handleChange = e => {
        this.setState({
            credentials : {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        })
    }
    login = e => {
        e.preventDefault();
        this.setState({
            isFetching: true
        })
        axiosWithAuth()
            .post('/login', this.state.credentials)
            .then(res => {
                localStorage.setItem('token', res.data.payload)

                this.props.history.push('/addNewFriend')
            })
            .catch(err => console.log(err))
    }
    render() {

        return (
            <div>
                <form onSubmit={this.login}>
                    <input
                        type="text"
                        name="username"
                        value={this.state.credentials.username}
                        onChange={this.handleChange}

                    />
                    <input
                        type="password"
                        name="password"
                        value={this.state.credentials.password}
                        onChange={this.handleChange}

                    />
                    <button>Log in</button>
                    {this.state.isFetching && 
                        <Loader
                        type="Puff"
                        color="#00BFFF"
                        height={100}
                        width={100}
                        //  timeout={3000} //3 secs
            
                    /> 
                    }
                </form>
            </div>

        )
    }
}

export default Login;