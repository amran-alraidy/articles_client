import { useState } from "react";

function Register() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="flex justify-center items-center">
            <form  className="flex flex-col border border-blue-400 rounded w-1/2 justify-center items-center p-4 gap-3">
                <h1 className="">Create Your Account</h1>
                <input className="border border-blue-500 w-full p-2 rounded" type="text" placeholder="Enter your name.." value={name} onChange={(e)=>setName(e.target.value)}/>
                <input className="border border-blue-500 w-full p-2 rounded" type="email" placeholder="Enter your email.." value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <input className="border border-blue-500 w-full p-2 rounded" type="password" placeholder="Enter your password.." value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <button className="w-full bg-blue-700 text-white p-2 rounded">Register</button>
                <p>Hi</p>
            </form>
        </div>


    );
}
export default Register;