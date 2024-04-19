const instance = async (to, from, amount, requestOptions) => {
    requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: {
            apikey: process.env.REACT_APP_API_KEY
        }
    };
    try {
        const response = await fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=${amount}`, requestOptions);
        const result = await response.json();
        console.log("result", result);
        return result;
    } catch (error) {
        console.error('error', error);
    }
}
  
export default instance;