import React,{useState, useEffect} from 'react';
import './App.css';
import Axios from 'axios'
import axios from 'axios';

function App() {

const[keyList, setKeyList] = useState([])
const [file, setFile] = useState()
const [data, setData] = useState([])

useEffect(()=>{
  Axios.get('api/get').then((response)=>{
    setKeyList(response.data.Contents)
  })
},[])


async function postImage({actualFile}) {
  const formData = new FormData();
  formData.append("actualFile", actualFile)
  const result = await axios.post('api/insert/', formData, { headers: {'Content-Type': 'multipart/form-data'}})
  return result.data
}


const downloadKey = (Key) =>{
   Axios.get(`api/download/${Key}`)
  
    .then((response) =>{
        
        const urltoS3 = response.data
        console.log(urltoS3)
        const link = document.createElement('a')
        link.href = urltoS3
        document.body.appendChild(link)
        console.log("link is")
        console.log(link)
        link.click()
    
  });
}


const deleteKey = (Key) =>{
  Axios.get(`api/delete/${Key}`)
 
   .then((response) =>{
     console.log(response.data)
       
 });
}


const viewFile = (Key) =>{
  Axios.get(`api/view/${Key}`)
    .then((response) =>{
      console.log(response.data)
    });

}

const submit = async event => {
  event.preventDefault()
  const result = await postImage({actualFile: file})
  setData([result.actualFile, ...data])
}
const fileSelected = event => {
  const file = event.target.files[0]
  setFile(file)
}
  return (
    <div className="App">
     <h1>FILE APPLICATION</h1>
     <div className="form">
       
     <form onSubmit={submit}>
        <input onChange={fileSelected} type="file" ></input>
        
        <button type="submit">Submit</button>
      </form>

      {keyList.map((val)=> {
        
        
        return(
        <div>
        <h1>FileName: {val.Key} </h1>
        <button onClick={() =>{downloadKey(val.Key)} }>Download</button> 
        <button onClick={()=>{deleteKey(val.Key)}}>Delete</button>
        <button onClick={()=>{viewFile(val.Key)}}>View</button>
        </div> 
        )
        
      })}
      

      </div>

    </div>

  );
}

export default App;