import axios from "axios";
import React, {useState} from "react";
import { toast } from "react-toastify";
import usePortStore from "../../store/port-store";
import {useNavigate} from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
    const actionLogin = usePortStore((state)=>state.actionLogin)
    const admin = usePortStore((state)=>state.admin)
    console.log('user form zustand',admin)
    
    const [form, setForm] = useState({
        email:"",
        password:"",
    })
    const handleOnChange =(e)=>{
        setForm({
            ...form,
            [e.target.name]:e.target.value
        })
    }
    const handleSubmit = async (e) =>{
        e.preventDefault()
        try{
            const res = await actionLogin(form)
            const role = res.data.payload.role
            console.log('role',role)
            roleRedirect(role)
            toast.success('Welcome')
        } catch(err){
            console.log(err)
            const errMsg = err.response?.data?.message
            toast.error(errMsg)
        }
     
    }

    const roleRedirect =(role)=>{
        if(role==='admin'){
            navigate('/admin')
        }
    }
    return (
        <div>
            Login
            <form onSubmit={handleSubmit}>
                Email
                <input className="border" 
                onChange={handleOnChange}
                    name='email'
                    type='email'
                />
                Password
                <input className="border" 
                onChange={handleOnChange}
                    name='password'
                    type='text'
                />
                <button className="bg-blue-400 rounded-md">Login</button>
               
            </form>
        </div>
        
    );
};

export default Login;