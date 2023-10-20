import React, {useState, useEffect} from 'react';
// import FetchApi from './conponents/FetchApi';
// import {list} from './data';
import Loading from './conponents/Loading';
import Error from './conponents/Error';
import PageNotFound from './conponents/PageNotFound';


function App() {


  const API= 'https://nikhilpal2312.github.io/Json/Api.json';

  const [loading, setLoading] =useState(true);
  const [error, setError] =useState(false);
  const [user, setUser] =useState([]);
  const [disable, setDisable] =useState(false);
  
  const cYear = new Date().getFullYear();
  const cMonth = new Date().getMonth();

  const getData=()=>{
    fetch(API)
    .then((response)=>{
      if(response.ok){
        setLoading(false)
        return response.json();
      }else{
        setLoading(false)
        setError(true)
        throw Error('User not found');
      }
    })
    .then((userData)=> {
      setLoading(false);
      setUser(userData)
    })
    .catch((error)=> console.log(error))
    
  }
  
  
  useEffect(()=>{
    getData();
  },[])

 const  TodayBirthday = () =>{
    let currentMonth= user.filter((birthday)=>birthday.month === cMonth)
    // console.log(currentMonth);
    setUser(currentMonth)
  }
  const reset=()=>{
    getData();
    setDisable(false);
  }

  const clear = ()=>{
    setUser([]);
    setDisable(true);
  }

  if(loading){
    return <Loading/>
  }
  
  if(error){
    return <Error/>
  }

  return (
    <>
    <div className='container mt-3'>
    <div className='row'>
      <div className='col-xl-6 offset-xl-3 text-center bg-white py-4 border-bottom font-weight-bold'>
        <h1 className='text-success'>{user.length} Birthday Founds</h1>
      </div>
    </div>

    <div className='scrollbar col-xl-6 offset-xl-3 bg-white py-2'>
      
       { user.length === 0 ? <PageNotFound/> :
        user.map((data)=>{
          // console.log(data);
          const{id, name, email, gender, day, month, year,phone} = data;
          return(
            <>
            <div className='row py-4 border-bottom' key={id}>
             <div className='col'>
          <h6 className='text-success'>{name}</h6>
          <div>
            <span className='text-muted'>{day}-</span>
            <span className='text-muted'>{month}-</span>
            <span className='text-muted'>{year}</span>
          </div>
          <p>I am {cYear-year} Year old</p>
        </div>
        <div className='col'>
          <p className='text-muted mb-0'>{email}</p>
          <p className='text-muted mb-0'>{phone}</p>
          <p className='text-muted mb-0'>{gender}</p>
        </div>
        </div>
            </>
          )
        })
       }
      
    </div>

    
    <div className='col-12 offset-xl-3 bg-white py-4 text-center m-auto fixed'>
     <button className='btn btn-success mr-3' disabled={disable} onClick={TodayBirthday}>Today's Birthday</button>
     <button className='btn btn-success mr-3' onClick={reset}>Get All Birthday</button>
     <button className='btn btn-success' disabled={disable} onClick={clear}>Clear</button>
    </div>


    </div>
    </>
  );
}

export default App;
