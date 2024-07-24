import { Button } from "@mui/material";
import { useStoreActions} from "easy-peasy";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";


const Login= () => {
    const [error,setError]=useState(null)
    const navigate=useNavigate()
    const {loginUser,forgotPassword}=useStoreActions(action=>action.user)
    const {register,handleSubmit,formState:{errors}}=useForm()
    const onSubmit=async(data)=>{
        try{
            await loginUser(data)
            navigate('/user details')
        }catch(e){
            console.error('Login Failed',e)
            setError('Login Failed')
        }
    }
    return (
        <div style={{display:'flex',justifyContent:'center'}}>
            <div style={{width:'70%',margin:'30px'}}>
                <h1 style={{textAlign:'center'}}>Login</h1>
                <form onSubmit={handleSubmit(onSubmit)} style={{padding:'30px 0px 0px 20%'}}>
                    <div style={{display:'block',width:'70%'}}>
                        <label htmlFor="email">Email</label><br />
                        <input {...register("email",{required:true,})} style={{width:'100%'}} type="email" name="email" id="email" />
                        {
                            errors.email&&<span style={{color:'red'}}>provide your email</span>
                        }
                    </div>
                    <div style={{display:'block',width:'70%',marginBottom:'20px'}}>
                        <label htmlFor="passord">Password</label><br />
                        <input {...register("password",{required:true})} style={{width:'100%'}} type="password" name="password" id="password" />
                        {
                            errors.password&&<span style={{color:"red"}}>provide your password</span>
                        }
                    </div>
                    <Button type="submit" sx={{width:'70%'}} variant="contained">Login</Button>
                </form> 
                {
                    error&&<h5 style={{color:'red',textAlign:'center'}}>Login Failed...<span style={{color:'green'}}>Invalid identifier or password</span></h5>
                }
                <h5 style={{textAlign:'center'}}>Already have an account? Please.......<Link to='/Register'>Register</Link></h5>
            </div>
        </div>
    );
};

export default Login;