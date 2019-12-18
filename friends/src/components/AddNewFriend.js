import React from 'react';

import { axiosWithAuth } from '../utils/axiosWithAuth'

class AddNewFriend extends React.Component {

    state = {
        newFriend : {
            name: '',
            age: '',
            email: '',
            id: ''
        },
        friends: []

        // isFetching: false
    }

    addNewFriend = e => {
        e.preventDefault();

        axiosWithAuth()
            .post('/friends', this.state.newFriend)
            .then(res => {
                console.log(res)
                this.setState({
                    newFriend : {
                        name: '',
                        age: '',
                        email: '',
                        id: ''
                    }
                })
                // this.props.history.push('/addNewFriend')
            })
            .catch(err => {
                console.log(err)
            })
            axiosWithAuth()
                    .get('/friends')
                    .then(res => {
                        console.log(res)
                        // thought this would make react update
                        // infinite loop?
                        this.setState({
                            ...this.state,
                            friends: res.data
                        })
                    })
                    .catch(err => {
                        console.log(err)
                    })
    }
    updateFriend = e => {
        e.preventDefault()
        axiosWithAuth()
            .put(`/friends/${this.state.newFriend.id}`, this.state.newFriend)
            .then(res => {
                console.log(res)
                this.setState({
                    newFriend : {
                        name: '',
                        age: '',
                        email: '',
                        id: ''
                    }
                })
                // this.props.history.push('/addNewFriend')
            })
            .catch(err => {
                console.log(err)
            })
            axiosWithAuth()
            .get('/friends')
            .then(res => {
                console.log(res)
                // thought this would make react update
                // infinite loop?
                this.setState({
                    ...this.state,
                    friends: res.data
                })
            })
            .catch(err => {
                console.log(err)
            })
    }
    handleChange = e => {
        // console.log(e, e.target.name)
        this.setState({
            newFriend : {
                ...this.state.newFriend,
                [e.target.name]: e.target.value
            }
        })
    }

    handleAgeChange = e => {
        this.setState({
            newFriend : {
                ...this.state.newFriend,

                [e.target.name]: parseInt(e.target.value)
            }
        })
    }

    componentDidMount = () => {

        console.log("here")
        axiosWithAuth()
            .get('/friends')
            .then(res => {
                console.log(res)
                // thought this would make react update
                this.setState({
                    ...this.state,
                    friends: res.data
                })
            })
            .catch(err => {
                console.log(err)
            })
    }
    // newFunction = () => {

    // }
    // componentDidUpdate = (prevProps) => {

    //     // Typical usage (don't forget to compare props):
    //     console.log(prevProps)
    //     if(prevProps.friends) {
    //         console.log(this.state.friends.length, prevProps.friends)

    //         if(this.state.friends.length !== prevProps.friends.length) {
    //             // this.fetchData(this.props.userID);
    //             axiosWithAuth()
    //                 .get('/friends')
    //                 .then(res => {
    //                     console.log(res)
    //                     // thought this would make react update
    //                     // infinite loop?
    //                     this.setState({
    //                         ...this.state,
    //                         friends: res.data
    //                     })
    //                 })
    //                 .catch(err => {
    //                     console.log(err)
    //                 })
    //         }
    //     }
        
        
    // }
    render() {

        return (


            <div>
                <div>
                {this.state.friends.map((friend, i ) => (
                    <p key={i}>{friend.name}</p>
                ))}
                </div>
                <form >
                        <input
                            type="text"
                            name="name"
                            value={this.state.newFriend.name}
                            onChange={this.handleChange}

                        />
                        <input
                            type="text"
                            name="age"
                            value={this.state.newFriend.age}
                            onChange={this.handleAgeChange}

                        />
                        <input
                            type="text"
                            name="email"
                            value={this.state.newFriend.email}
                            onChange={this.handleChange}

                        />
                        <input
                            type="text"
                            name="id"
                            value={this.state.newFriend.id}
                            onChange={this.handleAgeChange}

                        />
                        <button onClick={this.addNewFriend}>Add</button>
                        <button onClick={this.updateFriend}>UpdateFriend</button>

                    </form>
            </div>
            
        )
    }
    


}
export default AddNewFriend;