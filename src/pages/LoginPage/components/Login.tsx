import { FormEvent, useState } from "react";
import { useAppDispatch } from "../../../store";
import { loginUser } from "../../../store/auth/actionCreators";


const Login = () => {
    const dispatch = useAppDispatch();

    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");


    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        dispatch(loginUser({username,password}));
    }

    return (<div>
        <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="usename">Login</label>
            <input type="text" name="usename" onChange={e => setUsername(e.target.value)} value=""/>
        </div>
        <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" onChange={e => setPassword(e.target.value)} value="" />
        </div>
        <button>Submit</button>
        </form>
    </div>);
};

export default Login;