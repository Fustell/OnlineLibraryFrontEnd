import { FormEvent, useState } from "react";
import { useAppDispatch } from "../../../store";
import { loginUser } from "../../../store/auth/actionCreators";


const Login = () => {
    const dispatch = useAppDispatch();

    const [username,setUsername] = useState("roman");
    const [password,setPassword] = useState("12345qwerty");


    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        dispatch(loginUser({username,password}));
    }

    return (<div>
        <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="usename">Login</label>
            <input type="text" name="usename" onChange={e => setUsername(e.target.value)} value="roman"/>
        </div>
        <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" onChange={e => setPassword(e.target.value)} value="12345qwerty" />
        </div>
        <button>Submit</button>
        </form>
    </div>);
};

export default Login;