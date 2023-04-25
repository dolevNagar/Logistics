import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function SignIn(props) {
    const nav = useNavigate();
    const [id, setId] = useState('');

    const enterworker = () => {
        if (id == 99999){
            nav('/manager');
            return;
        }
        if (!(props.worker.find(worker => worker.id == id))) {
            alert(`Worker ${id} Do Not Exist`);
            return;
        }
        else{
            props.setUser(props.worker.find(worker => worker.id == id));
            props.worker.find(worker => worker.id == id).logInCounter++;
            props.setFlag(true);
        }
    }
    return (
        <div style={{textAlign: 'center'}}>
            <h1>log In</h1>
            <label className="label">NO.</label>
            <input className="input" type="number" onChange={(e) => setId(e.target.value)} /><br />
            <label id='idLBL' style={{ color: 'red' }}> </label>
            <br />
            <button onClick={enterworker} style={{ backgroundColor: 'blue', color: 'white', fontSize: '50px', borderRadius: '20px' }}>Enter</button>
            <br />
            <br />
            <Link to={'/'}><button style={{ backgroundColor: 'blue', color: 'white', fontSize: '50px', borderRadius: '20px' }}>Back</button></Link>
        </div>
    )
}
