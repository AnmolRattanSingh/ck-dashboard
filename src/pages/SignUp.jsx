import { useState } from 'react';
import { auth, googleAuth } from '../config/firebase';
import { Form, Input, Button, message } from 'antd';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Link, redirect } from 'react-router-dom';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signUpUser = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);   
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className='flex flex-col h-screen items-center justify-center text-center'>
            <h1 className='text-4xl font-bold mb-8'>Community Knights</h1>
            <Form name='login' onFinish={signUpUser}>
                <Form.Item
                    name='email'
                    rules={[{ required: true, message: 'Please input your email!' }]}
                >
                    <Input placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
                </Form.Item>
                <Form.Item
                    name='password'
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password placeholder='Password' onChange={(e) => setPassword(e.target.value)}/>
                </Form.Item>
                <Form.Item>
                    <Button type='default' onClick={signUpUser}>
                        Sign Up
                    </Button>
                </Form.Item>
                <Form.Item>
                    <Link to='/userauth' className='underline hover:underline'>Back</Link>
                </Form.Item>
            </Form>
        </div>
    )
}

export default SignUp
