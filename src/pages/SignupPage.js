import Navbar2 from '../components/Navbar2'
import React, { useState, useEffect, Component }  from 'react';
import axios from 'axios';
// import { Button } from 'flowbite-react';
import {Redirect} from 'react-router-dom';

// WORKING
class SignupPage extends Component  {
    constructor(props)  {
        super(props)

        this.state = {
            username: '',
            email: '', 
            password: '', 
            password2: ''
        }
    }

    handleEmailChange = (e) => {
        this.setState({
            email: e.target.value
        })
    }

    handlePassChange = (e) => {
        this.setState({
            password: e.target.value
        })
    }

    handlePass2Change = (e) => {
        this.setState({
            password2: e.target.value
        })
    }

    handleUsernameChange = (e) => {
        this.setState({
            username: e.target.value
        })
    }

    // WORKING DO NOT TOUCH
    handleSubmit = async (e) => {
        e.preventDefault();
        const user = {
            username: this.state.username, 
            email: this.state.email, 
            password: this.state.password,
            password2: this.state.password2
        };
        const customConfig = {
            headers: {
            'Content-Type': 'application/json'
            }
        };
        
        console.log(user);
        await axios.post('http://127.0.0.1:8000/api/register/', user, customConfig).then(
            res => {
                console.log(res);
                console.log(res.data);
            }
        ).catch(error => {
            // handle error
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.error('Response data:', error.response.data);
                console.error('Response status:', error.response.status);
                console.error('Response headers:', error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                console.error('Request:', error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.error('Error:', error.message);
            }
            console.error('Config:', error.config);
        }).then(() => {
            <Redirect to='/'/>
        })
    }

    render() {
        return (
            <section className="bg-gray-50 dark:bg-gray-900">
                <Navbar2/>
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                        <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo"/>
                        Flowbite    
                    </a>
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Create account
                            </h1>
                            <form className="space-y-4 md:space-y-6" onSubmit={this.handleSubmit}>
                                <div>
                                    <label for="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Username</label>
                                    <input type="username" name="username" value={this.state.username} onChange={this.handleUsernameChange} id="username" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="username_@.123" required=""/>
                                </div>
                                <div>
                                    <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                    <input type="email" name="email" value={this.state.email} onChange={this.handleEmailChange} id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""/>
                                </div>
                                <div>
                                    <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input type="password" name="password" value={this.state.password} onChange={this.handlePassChange} id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                                </div>
                                <div>
                                    <label for="password2" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm Password</label>
                                    <input type="password2" name="password2" value={this.state.password2} onChange={this.handlePass2Change} id="password2" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label for="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                                    </div>
                                </div>
                                {/* <Button type='button' onClick={this.handleSubmit} href='/login' className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create</Button> */}
                                <button href="/login" type="input" className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</button>
                                {/* <input type='submit' className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"/> */}
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Already have an account? <a href="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
      )
    }
}


export default SignupPage