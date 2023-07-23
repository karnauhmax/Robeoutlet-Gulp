import fetchData from "../functions/fetchData"

const BASE_URL = 'http://localhost:8888/Robeoutlet/'

const getAcfDataFromPage = async (pageId) => {
  const data = await fetchData(`${BASE_URL}wp-json/wp/v2/pages/${pageId}?acf_format=standard`);
  return data.acf;
}



export {getAcfDataFromPage};
