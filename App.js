import './App.css';
import {useState,useEffect} from 'react';
function App() {

  let bike={
        name:null,
        model:null,
        cc:null,
        mileage:null,
        price:null,
        imageURL:null
  };

  
  let [bikes,setbikes] = useState([])

  let[createmargin,setcreatemargin] = useState(-30);

  useEffect(()=>{

    let localData=localStorage.getItem("bikes");

    if(localData == null)
    {
      localStorage.setItem("bike",JSON.stringify([]));
    }
    else{
      setbikes(JSON.parse(localData))
    }  


    bike={};


  },[])

  function createbike(){
    let tempArray=[...bikes,bike];
    setbikes(tempArray);

    localStorage.setItem("bikes",JSON.stringify(tempArray));

    setcreatemargin(-30);
  }


  function deletebikes(index){
    let tempArray = [...bikes];
    tempArray.splice(index,1);
    setbikes(tempArray);
    localStorage.setItem("bikes",JSON.stringify(tempArray));

  }

  function updatepage(){
    setcreatemargin(0);
  }
  
  return (
    <div className="App">


      <div className="createform" style={{marginLeft:createmargin+"%"}}>
        <h1 className="section-title">Add Bike</h1>

        <input className="user-input" type="text" onChange={(e)=>{
          bike.name=e.target.value;
        }} placeholder="Enter Name" />

        <input type="text" onChange={(e)=>{
          bike.model=e.target.value;
        }} placeholder="Enter Model"/>

        <input type="text" onChange={(e)=>{
          bike.cc=e.target.value;
        }}placeholder="Enter CC"/>

        <input type="text" onChange={(e)=>{
          bike.mileage=e.target.value;
        }} placeholder="Enter Mileage"/>

        <input type="text" onChange={(e)=>{
          bike.price=e.target.value;
        }} placeholder="Enter Price"/>

        <input type="text" onChange={(e)=>{
          bike.imageURL=e.target.value;
        }} placeholder="Enter ImageURL"/>

        <button className="btncreate" onClick={()=>{
          createbike();                   
        }}  >Create</button>
      </div>

      <div className="updateform" style={{marginLeft:createmargin+"%"}}>
      <h1 className="section-title">Update Bike</h1>

      <input className="user-input" type="text" onChange={(e)=>{
          bike.name=e.target.value;
        }} placeholder="Enter Name" />

        <input type="text" onChange={(e)=>{
          bike.model=e.target.value;
        }} placeholder="Enter Model"/>

        <input type="text" onChange={(e)=>{
          bike.cc=e.target.value;
        }}placeholder="Enter CC"/>

        <input type="text" onChange={(e)=>{
          bike.mileage=e.target.value;
        }} placeholder="Enter Mileage"/>

        <input type="text" onChange={(e)=>{
          bike.price=e.target.value;
        }} placeholder="Enter Price"/>

        <input type="text" onChange={(e)=>{
          bike.imageURL=e.target.value;
        }} placeholder="Enter ImageURL"/>

        <button className="btncreate" onClick={()=>{
          createbike();                   
        }}  >Create</button>

      </div>

      <div className="header">
        <h1 className="pagetitle">BIKES</h1>
        
        <button className="btn" onClick={()=>{
          setcreatemargin(0);
        }}>Add Bikes</button>
      </div>

      <div className="display" onClick={()=>{
        setcreatemargin(-30);
      }}>


        {
          bikes.map((bikes,index)=>{
            return(
            <div key={index} className="bikes">
              <div className="bikes_img">
                <img className="imgedit"src={bikes.imageURL}/>
              </div>
              <div className="bikesdetails">
                <div className="title">
                  <h2>{bikes.name}</h2>
                  <h3>{bikes.model}</h3>
                </div>

                <div className="powers">

                  <p className="cc">CC : {bikes.cc}</p>
                  <p className="mileage">Mileage : {bikes.mileage}</p>
                  <p className="price">Price : {bikes.price}</p>


                </div>
              </div> 

              <div className="actions">

              <i className="fa-solid fa-file-pen update" onClick={()=>{
                updatepage();
              }}></i>
              <i className="fa-solid fa-trash-can delete" onClick={()=>{
                deletebikes(index);
              }}></i>
            </div>
        </div>
            )
          })
        }
        
      </div>
    </div>
  );
}

export default App;
