import { useState } from 'react';
import { auth, googleAuth } from '../config/firebase';
import { Form, Input, Button, message } from 'antd';
import { signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth';
import { Link } from 'react-router-dom';

const UserAuth = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const signInWithGoogle = async () => {
        try {
            await signInWithPopup(auth, googleAuth);
        } catch (error) {
            console.log(error);
        }
    };

    const signInWithEmail = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className='flex flex-col h-screen items-center justify-center text-center'>
            <h1 className='text-4xl font-bold mb-8'>Community Knights</h1>
            <Form name='login' onFinish={signInWithEmail}>
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
                    <Input.Password placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
                </Form.Item>
                <Form.Item>
                    <Button type='default' htmlType='submit' onClick={signInWithEmail}>
                        Log in
                    </Button>
                </Form.Item>
                <Form.Item>
                    <Button type='default' onClick={signInWithGoogle}>
                        Log in with Google
                    </Button>
                </Form.Item>
                <Form.Item>
                    <span>Don't have an account? </span>
                    <Link to='/signup' className='underline hover:underline'>Sign up</Link>
                </Form.Item>
            </Form>
        </div>
    )
}

export default UserAuth
