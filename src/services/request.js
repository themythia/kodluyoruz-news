import axios from 'axios';
import { parseFeed } from 'htmlparser2';

async function getRequest(url) {
  if (typeof url === 'object') {
    const dataIstanbul = await axios.get(url['Istanbul']);
    const tempIstanbul = dataIstanbul.data;
    const dataAnkara = await axios.get(url['Ankara']);
    const tempAnkara = dataAnkara.data;
    const dataIzmir = await axios.get(url['Izmir']);
    const tempIzmir = dataIzmir.data;
    const dataBursa = await axios.get(url['Bursa']);
    const tempBursa = dataBursa.data;
    const dataAntalya = await axios.get(url['Antalya']);
    const tempAntalya = dataAntalya.data;
    const newArray = [
      tempIstanbul,
      tempAnkara,
      tempIzmir,
      tempBursa,
      tempAntalya,
    ];
    return newArray;
  } else if (url !== '') {
    const data = await axios.get(url);
    const query = parseFeed(data.data).items;
    return query;
  } else {
    console.log("Lütfen çağırmak istediğiniz api'ı yazınız");
  }
}

export const get = (url) => getRequest(url);
