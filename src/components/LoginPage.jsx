import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import { useUserContext } from '../context'
import Form from './Form';

export default function LoginPage({ }) {
    const { setUser } = useUserContext();
    const [error, setError] = useState('');
    const navigate = useNavigate();
    return (
        <div className='container mt-3'>
            <h2>Login</h2>
            {error && (
                <h3 className='text-danger'>{error}</h3>
            )}
            <Form
                onSubmit={async data => {
                    try {
                        const res = await axios.post('/login', data);
                        setUser(res.data);
                        setError('');
                        navigate('/')
                    } catch (err) {
                        if (axios.isAxiosError(err)) {
                            setError(err.response.data.error)
                        } else {
                            setError('Unexpected error')
                        }
                    }
                }}
            >
                <Form.Input required name='email' label='Email' type='email' />
                <Form.Input required name='password' label='Password' type='password' />
                <button type='submit' className='btn btn-primary form-control'>Login</button>
            </Form>
        </div>
    )
}
