import axios from 'axios';

const fetchCitiesWithPrefix = async (cityPrefix: string) => {
  try {
    const config = {
      headers: {
        'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com',
        'x-rapidapi-key': 'ee956e7c5cmsh5e3b7e808aa5cabp1ff173jsn42bf13ae0abc',
      },
    };
    const res = await axios.get(
      `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=${cityPrefix}&types=CITY&sort=name&offset=0&limit=10`,
      config
    );
    return res.data.data;
  } catch (err) {
    console.log('Error fetching cities', err);
  }
};

export const CityService = {
  fetchCitiesWithPrefix,
};
