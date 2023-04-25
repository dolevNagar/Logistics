import { useState } from 'react';
import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Index from './component/Index';
import SignIn from './component/SignIn';
import SignUp from './component/SignUp';
import Welcome from './component/Welcome';
import Manager from './component/Manager';

function App() {
  const [flag, setFlag] = useState(false);
  const [worker, setWorker] = useState([]);
  const [user, setUser] = useState([]);
  const [product, setProduct] = useState([
    {
      id: 11122,
      product: 'green',
      forklift: false,
      place: false,
    },
    {
      id: 22554,
      product: 'green',
      forklift: false,
      place: false,
    },
    {
      id: 666998,
      product: 'blue',
      forklift: true,
      place: false,
    },
    {
      id: 78544,
      product: 'red',
      forklift: false,
      place: false,
    },
    {
      id: 69875,
      product: 'red',
      forklift: false,
      place: false,
    },
  ]);

  const show = () => {
    if (flag === false) {
      return (
        <SignIn worker={worker} setFlag={setFlag} setUser={setUser} user={user} />
      );
    } else {
      return (
        <Welcome user={user} setUser={setUser} product={product} setFlag={setFlag} worker={worker} />
      );
    }
  };

  return (
    <div className="container">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/signin" element={show()} />
          <Route path="/signup" element={<SignUp setWorker={setWorker} worker={worker} />} />
          <Route path="/manager" element={<Manager worker={worker} setFlag={setFlag} setUser={setUser} />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
