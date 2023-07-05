import axios from 'axios';

const BASE_URL = 'https://localhost:9098/swagger-ui.html'; // Replace with your actual API base URL

const CountryService = {
  getListOfCountries: async () => {
    const response = await axios.get(`${BASE_URL}/countries`);
    return response.data;
  },

  getCountryById: async (countryId) => {
    const response = await axios.get(`${BASE_URL}/countries/${countryId}`);
    return response.data;
  },
};

export default CountryService;