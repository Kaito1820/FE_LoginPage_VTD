import { useState } from "react";
import axios from "axios";

function LoginPage(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log("hello")
        try {
            await axios.post("http://localhost:8080/login", {
                email: email,
                password: password,
            })
            .then((res) => {
                console.log(res.data);

                alert(`
                
                        Name: ${res.data.name} 
                        Email: ${res.data.email}
                    `);
            }, 
            fail => {
                console.error(fail); // Error!
            });
        }
        catch (err) {
            alert(err);
        }
    }

    return (
        <>
            <div className="d-flex flex-column justify-content-center align-items-center vh-100">
                
                    <h1>Login Page</h1>
                    <form onSubmit={handleSubmit} className="w-25
                                h-50
                                p-25
                                d-flex flex-column 
                                justify-content-center 
                                align-items-center
                                border
                                rounded">
                        <div className="mb-3" >
                            <label htmlFor="exampleInputEmail1" className="form-label"><b>Email address</b></label>
                            <input 
                                type="email" 
                                className="form-control" 
                                id="exampleInputEmail1" 
                                aria-describedby="emailHelp" 
                                value={email} onChange={(e) => {setEmail(e.target.value)}}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label"><b>Password</b></label>
                            <input 
                                type="password" 
                                className="form-control" 
                                id="exampleInputPassword1" 
                                value={password} 
                                onChange={(e) => {setPassword(e.target.value)}}/>
                        </div>
                        <button type="submit" className="btn btn-primary">Login</button>
                    </form>
                
            </div>
            
        </>
    );
}

export default LoginPage;