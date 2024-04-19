import React, {useEffect} from 'react';
import instance from './network/fetch';
import {useSelector, useDispatch} from 'react-redux';
import {replaceTab, updateQC, updateBA, receiveER, updateDT} from './redux/slices/exRate';

function App() {
  const {currs, quote_currs, base_curr, quote_curr, base_amount, ex_rate, date}=useSelector((state) => state.exRate);
  const dispatch = useDispatch();
  console.log(`통화: ${currs}, \n가격 통화 모음: ${quote_currs}, \n기준 통화. 금액: ${base_curr} ${base_amount},  가격 통화: ${quote_curr}, \n환율=> ${ex_rate}`);
  
  useEffect(() => {
    const fetchData = async () => {
        try {
            const data = await instance(quote_curr, base_curr, base_amount);
            console.log("result data", data);
            console.log("환율: ", data.result, " 기준일: ", data.date);
            dispatch(receiveER(data.result));
            dispatch(updateDT(data.date));
          } catch (error) {
            console.error("error", error);
        }
    };
    fetchData();
}, [dispatch, base_curr, quote_curr, base_amount]);

  return (
    <div style={{backgroundColor:"LightGray", fontSize: "20px", display:"flex"}}>
      <div style={{backgroundColor:"white", border:"5px solid", margin: "8% auto"}}>
        
        <div style={{display:"flex", alignItems: "center"}}> 
          <input style={{flex:1, margin:"50px", border:"3px solid", width:"100%", height:"50px", fontWeight: "bold", fontSize: "20px", textAlign: "center"}}
          type="number" onChange={e => {
            e.target.value = e.target.value>=1000 ? 1000 : e.target.value;
            dispatch(updateBA(e.target.value))}}>
          </input>
          
          <select style={{flex:1, margin:"50px", border:"3px solid", height:"50px", fontWeight: "bold", fontSize: "20px"}}
          onChange={e => dispatch(replaceTab(e.target.value))}>
            {currs.map((item, index) => <option key={index}>{item}</option>)}
          </select>
        </div>

        <div style={{margin:"50px", marginTop:"0px", border:"3px solid"}}>
          <div style={{ display: "flex", width: "100%" }}>
          
            {quote_currs.map((item, index) => (
              <div style={{ border:"1.5px solid", flex:1, textAlign: "center"}} key={index} onClick={() => dispatch(updateQC(item))}>
                {item}
              </div>
            ))}
          </div>

          <div style={{borderTop: "0px", margin:"50px"}}>
            <p style={{fontWeight: "bold", fontSize: "30px"}}>{quote_curr} {ex_rate}</p>
            <p>기준일 : </p>{date}  
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
