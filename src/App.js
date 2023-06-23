import ironhackersImg from "./assets/ironhackers.avif"
import './App.css';

import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { Route, Routes, NavLink, Link } from 'react-router-dom';

import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import ApartmentsList from "./components/ApartmentsList";
import ApartmentDetails from './components/ApartmentDetails';
import CreateApartment from './components/CreateApartment'

function App() {

 const [apartmentsArr, setApartmentsArr] = useState(null)


  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/apartments`)
      .then((response) => {
        setApartmentsArr(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const renderListOfApartments = () => {
    if (apartmentsArr === null) {
      return <p>Loading...</p>;
    } else {
      return apartmentsArr.map((apartmentObj) => (
        <div key={apartmentObj._id}>
          {apartmentObj.title}
        </div>
      ));
    }
  };
    

  return (
    <div className="App">
      {/* <h1>Welcome</h1>
      <img src={ironhackersImg} alt="ironhackers" /> */}
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/apartments">Apartments</NavLink>
        <NavLink to="/create">Create</NavLink>
      </nav>

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/apartments' element={<ApartmentsList callbackToApartmentList={renderListOfApartments}/>} />
        <Route path="/apartments/:apartmentId" element={<ApartmentDetails />} />
        <Route path='/create' element={<CreateApartment/>} />
      </Routes>
    </div>
  );
}

export default App;
