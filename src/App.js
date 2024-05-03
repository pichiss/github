import {Route,Routes,Link} from 'react-router-dom';
import {useEffect,useState} from 'react'
import axios from 'axios'
import './App.css';
import Write from './pages/write';
import List from './pages/list';
import Item from './pages/item';
import NotiEdit from './pages/notiEdit';


function App() {
  const [notiData,setNotiData] = useState([]);
  const getDatas = ()=>{
    axios.get('https://jsonplaceholder.typicode.com/comments').then(
      (res)=>{
        const datas = res.data.slice(0,10).map((data)=>{
              return{
                notiId : data.id,
                notiTit : data.name,
                notiName : data.email,
                notitext : data.body
              }
            })
            setNotiData(datas)
      })
  }
  
  // async()=>{
  //   const res = await fetch('https://jsonplaceholder.typicode.com/comments')
  //   .then((res)=>res.json())
  //   const datas = res.slice(0,10).map((data)=>{
  //     return{
  //       notiId : data.id,
  //       notiName : data.email,
  //       notitext : data.body
  //     }
  //   })
  //   setNotiData(datas)
  // }
  useEffect(()=>{
    getDatas()
  },[])

  function notiCreate(notiTit,notiName,notiText){
    // console.log(notiTit,notiName,notiText)
    axios.post('https://jsonplaceholder.typicode.com/comments',{notiTit,notiName,notiText}).then(
      (res)=>{console.log(res.data)})
  }
  return (
    <div className="App">
      <header>
        <ul>
          <li><Link to='/write'>작성</Link></li>
          <li><Link to='/list'>리스트</Link></li>
        </ul>
      </header>
      <main>
        <Routes>
          <Route path='/write'element={<Write notiCreate={notiCreate} />}></Route>
          <Route path='/List'element={<List notiData={notiData} />} />
          <Route path='/List/:id' element={<Item notiData={notiData} />}></Route>
          <Route path='/edit/:id' element={<NotiEdit notiData={notiData} />}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
