import { FormEvent, useState } from "react";


const Login = () => {

    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
    }

    return <div>
        <form onSubmit={handleSubmit}></form>
        <div>
            <label htmlFor="usename"></label>
            <input type="text" name="usename" onChange={e => setUsername(e.target.value)}/>
        </div>
        <div>
            <label htmlFor="password"></label>
            <input type="password" name="password" onChange={e => setPassword(e.target.value)} />
        </div>
        <button>Submit</button>
    </div>;
};

export default Login;