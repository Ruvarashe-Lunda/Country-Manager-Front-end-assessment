import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CountryService from './CountryService';

const CountryDetails = () => {
  const { id } = useParams();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const countryData = await CountryService.getCountryById(id);
      setCountry(countryData);
    };

    fetchData();
  }, [id]);

  if (!country) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{country.name}</h2>
      <p>Population: {country.population}</p>
      <p>Capital: {country.capital}</p>
    </div>
  );
};


export default CountryDetails;

document.addEventListener("DOMContentLoaded", function () {
    const countriesListDiv = document.getElementById("countries-list");
    const countryDetailsDiv = document.getElementById("country-details");
    const countryInfoDiv = document.getElementById("country-info");
    const goBackButton = document.getElementById("go-back-btn");
    
    // Mock data for demonstration purposes
    const countriesData = [
      { id: 1, name: "Country 1", population: 10000000, capital: "Capital 1" },
      { id: 2, name: "Country 2", population: 20000000, capital: "Capital 2" },
      { id: 3, name: "Country 3", population: 30000000, capital: "Capital 3" }
    ];
  
    // Display the list of countries
    function displayCountries() {
      countriesListDiv.innerHTML = "";
    
      countriesData.forEach(country => {
        const countryDiv = document.createElement("div");
        countryDiv.classList.add("country");
  
        const nameElement = document.createElement("p");
        nameElement.innerText = `Name: ${country.name}`;
        countryDiv.appendChild(nameElement);
  
        const populationElement = document.createElement("p");
        populationElement.innerText = `Population: ${country.population}`;
        countryDiv.appendChild(populationElement);
  
        const capitalElement = document.createElement("p");
        capitalElement.innerText = `Capital: ${country.capital}`;
        countryDiv.appendChild(capitalElement);
  
        const viewMoreButton = document.createElement("button");
        viewMoreButton.innerText = "View More";
        viewMoreButton.addEventListener("click", function () {
          showCountryDetails(country.id);
        });
        countryDiv.appendChild(viewMoreButton);
  
        countriesListDiv.appendChild(countryDiv);
      });
    }
  
    // Display the details of a specific country by its ID
    function showCountryDetails(id) {
      const country = countriesData.find(c => c.id === id);
    
      if (country) {
        countriesListDiv.style.display = "none";
        countryDetailsDiv.style.display = "block";
    
        countryInfoDiv.innerHTML = `
          <p><strong>Name:</strong> ${country.name}</p>
          <p><strong>Population:</strong> ${country.population}</p>
          <p><strong>Capital:</strong> ${country.capital}</p>
        `;
      }
    }
  
    // Go back to the list of countries
    function goBackToList() {
      countriesListDiv.style.display = "block";
      countryDetailsDiv.style.display = "none";
    }
  
    // Add event listener to go back button
    goBackButton.addEventListener("click", goBackToList);
    
    // Initialize the UI
    displayCountries();
  });