import React from 'react';

function App() {
  return (
    <div style={{backgroundColor:"LightGray", fontSize: "20px", display:"flex"}}>
      <div style={{backgroundColor:"white", border:"5px solid", margin: "8% auto"}}>
        <div style={{display:"flex", alignItems: "center"}}> 
          <input style={{flex:1, margin:"50px", border:"3px solid", width:"100%", height:"50px", fontWeight: "bold", fontSize: "20px", textAlign: "center"}}></input>
          <select style={{flex:1, margin:"50px", border:"3px solid", height:"50px", fontWeight: "bold", fontSize: "20px"}}>
            <option >옵션</option>
          </select>
        </div>
        <div style={{margin:"50px", marginTop:"0px", border:"3px solid"}}>
          <div style={{ display: "flex", width: "100%" }}>
            <div style={{ border:"1.5px solid", flex:1, textAlign: "center"}}>탭1</div>
            <div style={{ border:"1.5px solid", flex:1, textAlign: "center" }}>탭2</div>
          </div>
          <div style={{borderTop: "0px", margin:"50px"}}>
            <p style={{fontWeight: "bold", fontSize: "30px"}}>환율</p>기준일</div>
          </div>
      </div>
    </div>
  );
}

export default App;
