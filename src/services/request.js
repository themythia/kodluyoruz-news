import { parseFeed } from 'htmlparser2';

function request(url, method = 'GET') {
  if (url !== '') {
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
  } else {
    console.log(
      'Lütfen getPost ile çekilecek olan verinin rss kategorisini yazınız.'
    );
    return '';
  }
}

export const get = (url) => request(url);
