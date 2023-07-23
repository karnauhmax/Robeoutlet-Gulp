import credentials from "../components/_credentials";

const fetchData = async (url) => {
  try {
    const response = await fetch(url, {
      headers: {
        "Authorization": credentials.rendered
      }
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error(`HTTP status ${response.status}`);
    }
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export default fetchData;
