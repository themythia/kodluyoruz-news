import { get } from './request';
//https://www.ntv.com.tr/dunya.rss
export const getPosts = (categoryName) =>
  categoryName === 'turkiye'
    ? get(
        'https://pacific-caverns-96128.herokuapp.com/https://www.ntv.com.tr/turkiye.rss'
      )
    : categoryName === 'dunya'
    ? get(
        'https://pacific-caverns-96128.herokuapp.com/https://www.ntv.com.tr/dunya.rss'
      )
    : get('');
