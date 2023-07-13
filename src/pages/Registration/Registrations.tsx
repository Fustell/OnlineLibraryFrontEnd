import { FormEvent, useState } from "react";
import { useAppDispatch } from "../../store";
import { registerUser } from "../../store/auth/actionCreators";

const Registration = () => {
    
    const dispatch = useAppDispatch();

    const [username,setUsername] = useState("");
    const [email,SetEmail] = useState("");
    const [password,setPassword] = useState("");


    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        dispatch(registerUser({username,email,password}));
    }

    return (<div className="container-lg rounded mt-5 mb-5" style={{display:"flex", justifyContent:"center"}}> 
        <div className="col-4 ">
        <form onSubmit={handleSubmit}>
        <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={e => SetEmail(e.target.value)}/>
        </div>
        <div className="form-group">
            <label htmlFor="exampleInputPassword1">Username</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="username" onChange={e => setUsername(e.target.value)}/>
        </div>
        <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </div>
    </div>);

}

export default Registration;