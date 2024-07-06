import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";


const Register = () => {
    const {register,handleSubmit,formState:{errors}}=useForm()
    const onSubmit=(data)=>{
        console.log(data)
    }
    return (
        <div style={{display:'flex',justifyContent:'center'}}>
            <div style={{width:'70%',margin:'30px'}}>
                <h1 style={{textAlign:'center'}}>Register</h1>
                <form onSubmit={handleSubmit(onSubmit)} style={{padding:'30px 0px 0px 20%'}}>
                    <div style={{display:'block' ,width:'70%'}}>
                        <label htmlFor="username">Username</label><br />
                        <input {...register("username",{required:true})} style={{width:'100%'}} type="text" name="username" id="username" />
                        {errors.username&&<span style={{color:'red'}}>please provide your name</span>}
                    </div>
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
                            errors.password&&<span style={{color:"red"}}>provide a strong password</span>
                        }
                    </div>
                    <Button type="submit" sx={{width:'70%'}} variant="contained">SignUp</Button>
                </form>
                <h5 style={{textAlign:'center'}}>Already have an account? Please.......<Link to='/login'>Login</Link></h5>
            </div>
        </div>
    );
};

export default Register;