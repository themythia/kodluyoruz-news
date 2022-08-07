import { parseFeed } from 'htmlparser2';

function request(url, method = 'GET') {
  if (url === 'https://api.openweathermap.org/data/2.5/') {
    const key = '62767d215061ee27d2529f249d91cb50';
    const query = `${url}weather?q=Ankara&appid=${key}`;

    return new Promise(async (resolve, reject) => {
      const options = {
        method,
      };

      const response = await fetch(url, options);

      //islem başarılı ise
      if (response.ok) {
        resolve(response);
        //işlem hatalı ise
      } else {
        reject(response);
      }
    })
      .then((data) => {
        return data.text();
      })

      .then((test) => parseFeed(test).items);
  } else if (url !== '') {
    return new Promise(async (resolve, reject) => {
      const options = {
        method,
      };
      const response = await fetch(url, options);

      //islem başarılı ise
      if (response.ok) {
        console.log(response);
        resolve(response);
        //işlem hatalı ise
      } else {
        reject(response);
      }
    })
      .then((data) => {
        return data.text();
      })
      .then((test) => {
        return parseFeed(test).items;
      });
  } else {
    console.log(
      'Lütfen getPost ile çekilecek olan verinin rss kategorisini yazınız.'
    );
    return '';
  }
}

export const get = (url) => request(url);
