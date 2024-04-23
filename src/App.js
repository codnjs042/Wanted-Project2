import React, {useEffect} from 'react';
import instance from './network/fetch';
import {useSelector, useDispatch} from 'react-redux';
import {replaceTab, updateQC, updateBA, receiveER, updateDT} from './redux/slices/exRate';
import { StyledBody, StyledCard, StyledInput, StyledSelect, StyledTab } from './styles/styled-components';

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
    <StyledBody>
      <StyledCard>
        <div>
          <StyledInput type="number" onChange={e => {
            e.target.value = e.target.value>=1000 ? 1000 : e.target.value;
            dispatch(updateBA(e.target.value))}}></StyledInput>
          <StyledSelect onChange={e => dispatch(replaceTab(e.target.value))}>
            {currs.map((item, index) => <option key={index}>{item}</option>)}</StyledSelect>
        </div>
        <StyledTab>
          <div id="tab"> 
          {quote_currs.map((item, index) => (
            <div key={index} onClick={() => dispatch(updateQC(item))}>
              {item}
            </div>
          ))}
          </div>
          <div id="rslt">
            <p id="curr">{quote_curr} {ex_rate}</p>
            기준일 : <br/>
            {date}
          </div>
        </StyledTab>
      </StyledCard>
    </StyledBody>
  );
}

export default App;
