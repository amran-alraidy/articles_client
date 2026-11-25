import axios from "axios";
import { useEffect, useState } from "react";

function Register() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsloading] = useState(true);
    const [isError, setIsError] = useState(null);

    async function SendData(e) {
        e.preventDefault();

        if (name === "" || email === "" || password === "") {
            setIsError("Please fill all fields");
            return;
        }

        if (password.length < 6) {
            setIsError("The password should be more than 6 characters");
            return;
        }

        try {
            setIsloading(true);
            const response = await axios.post("http://127.0.0.1:8000/api/signup",{
                name:name,
                email:email,
                password:password
            });
            console.log(response);
        } catch (err) {
            setIsError("There is an Error unexpected");
        } finally {
            setIsloading(false);
        }



    }








    return (
        <div className="flex justify-center items-center">
            <form onSubmit={SendData} className="flex flex-col border border-blue-400 rounded w-1/2 justify-center items-center p-4 gap-3">
                <h1 className="">Create Your Account</h1>
                <input className="border border-blue-500 w-full p-2 rounded" type="text" placeholder="Enter your name.." value={name} onChange={(e) => setName(e.target.value)} />
                <input className="border border-blue-500 w-full p-2 rounded" type="email" placeholder="Enter your email.." value={email} onChange={(e) => setEmail(e.target.value)} />
                <input className="border border-blue-500 w-full p-2 rounded" type="password" placeholder="Enter your password.." value={password} onChange={(e) => setPassword(e.target.value)} />
                <button className="w-full bg-blue-700 text-white p-2 rounded">Register</button>
                {isError && <p className="text-red-600">{isError}</p>}
            </form>
        </div>


    );
}
export default Register;