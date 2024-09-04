type QueryParams = Record<string, string>;

async function fetchData(endpoint: string, queryParams: QueryParams = {}) {
    try {
      const url = new URL(endpoint);
      Object.keys(queryParams).forEach(key => url.searchParams.append(key, queryParams[key]));
  
      const response = await fetch(url.toString());
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  }

export default fetchData  