import { get } from './request';

export const getPosts = () =>
  get(
    'https://pacific-caverns-96128.herokuapp.com/https://www.ntv.com.tr/otomobil.rss'
  );
export const getPostDetail = () => get('');
