const fetchCurrencies = async () => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const apiUrl = 'https://api.currencyscoop.com/v1';

  const fetchAPI = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data.response.rates;
    } catch (e) {
      console.warn(e);
    }
  };

  const getPreviousDay = (date = new Date()) => {
    const previous = new Date(date.getTime());
    previous.setDate(date.getDate() - 1);
    return previous.toISOString().split('T')[0];
  };

  const fetchEverything = await Promise.all([
    fetchAPI(`${apiUrl}/latest/?base=USD&api_key=${apiKey}`),
    fetchAPI(
      `${apiUrl}/historical/?base=USD&date=${getPreviousDay()}&api_key=${apiKey}`
    ),
  ]);
  return {
    current: fetchEverything[0],
    prev: fetchEverything[1],
  };
};
export default fetchCurrencies;
