import React from "react";
import App from "./App";
function Home() {
//     const [farmer,setFarmer]=useState([])

//   useEffect(() => {
//     fetch("http://localhost:9292/")
//     .then(response => response.json())
//     .then((data) => {
//       setFarmer(data)
    
//     })
//   }, [])
  
  return (
    <div className="row">
      <div className="col m-2">
        <div className='card' style={{width : 25 + 'rem'}} > 
            <img src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHEU-x-qLPVFyqxnCX3NsO4zr8GOG908Ldk1_PDwsDyw&s" className="card-img-top" 
            />
            <img src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHEU-x-qLPVFyqxnCX3NsO4zr8GOG908Ldk1_PDwsDyw&s" className="card-img-top" 
            />
            <img src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHEU-x-qLPVFyqxnCX3NsO4zr8GOG908Ldk1_PDwsDyw&s" className="card-img-top" 
            />
            <img src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHEU-x-qLPVFyqxnCX3NsO4zr8GOG908Ldk1_PDwsDyw&s" className="card-img-top" 
            />
            {/* Model: &nbsp;{modelTitle}<br></br>
            ReleaseYear: &nbsp;{modelReleaseYear}<br></br>
            Description: &nbsp;{modelDescription}<br></br>
            City:   &nbsp;{modelCity} */}
            {/* <button className="remove" onClick={(e) =>handleDeleteClick(models.id)}> <span role="img" aria-label="delete">
              
            </span>Delete</button> */}
        </div>
        </div>
        </div>

  )
}

export default Home