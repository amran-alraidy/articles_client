function Login() {

    return (
        <div className="flex justify-center items-center">
            <form  className="flex flex-col border border-blue-400 rounded w-1/2 justify-center items-center p-4 gap-3">
                <h1 className="">Welcome Back</h1>
                <input className="border border-blue-500 w-full p-2 rounded" type="email" placeholder="Enter your email.." />
                <input className="border border-blue-500 w-full p-2 rounded" type="password" placeholder="Enter your password.." />
                <button className="w-full bg-blue-700 text-white p-2 rounded">Login</button>
            </form>
        </div>


    );
}
export default Login;