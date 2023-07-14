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

    return (<div className="container-lg rounded mt-5 mb-5" style={{display:"flex", justifyContent:"center"}}> 
        <div className="col-4 ">
        <form onSubmit={handleSubmit}>
        <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" className="form-control" id="username" placeholder="username" onChange={e => setUsername(e.target.value)}/>
        </div>
        <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" id="password" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </div>
    </div>);
};

export default Login;