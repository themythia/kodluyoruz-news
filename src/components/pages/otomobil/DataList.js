import axios from 'axios';
import { parseFeed } from 'htmlparser2';
import { CORS_PROXY } from '../../..';

const dataList = async () => {
  const response = await axios.get(
    CORS_PROXY + 'https://www.ntv.com.tr/otomobil.rss'
  );

  // xmli parçalamak için parsefeed metodu kullanıldı.
  const parseData = parseFeed(response.data);
  // parse ettiğimiz verinin itemlarına ulaşmak için kullanıyoruz.

  return parseData.items;
};
export default dataList;
