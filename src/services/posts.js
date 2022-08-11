import { get } from './request';
//https://www.ntv.com.tr/dunya.rss
export const getPosts = async (categoryName) => {
  if (categoryName === 'turkiye') {
    return await get(
      'https://pacific-caverns-96128.herokuapp.com/https://www.ntv.com.tr/turkiye.rss'
    );
  } else if (categoryName === 'dunya') {
    return await get(
      'https://pacific-caverns-96128.herokuapp.com/https://www.ntv.com.tr/dunya.rss'
    );
  } else if (categoryName === 'weather') {
    //aylık
    //https://api.openweathermap.org/data/2.5/forecast?lat=41.09307&lon=28.80203&appid=62767d215061ee27d2529f249d91cb50

    //güncel
    //https://api.openweathermap.org/data/2.5/weather?lat=41.015137&lon=28.979530&appid=62767d215061ee27d2529f249d91cb50
    const cities = {
      Ankara:
        'https://api.openweathermap.org/data/2.5/weather?lat=39.925533&lon=32.866287&appid=62767d215061ee27d2529f249d91cb50&units=metric',
      Istanbul:
        'https://api.openweathermap.org/data/2.5/weather?lat=41.015137&lon=28.979530&appid=62767d215061ee27d2529f249d91cb50&units=metric',
      Izmir:
        'https://api.openweathermap.org/data/2.5/weather?lat=38.423733&lon=27.142826&appid=62767d215061ee27d2529f249d91cb50&units=metric',
      Bursa:
        'https://api.openweathermap.org/data/2.5/weather?lat=40.193298&lon=29.074202&appid=62767d215061ee27d2529f249d91cb50&units=metric',
      Antalya:
        'https://api.openweathermap.org/data/2.5/weather?lat=36.884804&lon=30.704044&appid=62767d215061ee27d2529f249d91cb50&units=metric',
    };
    return await get(cities);
  }
};
