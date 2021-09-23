const loadCountries = () => {
    fetch('https://restcountries.com/v2/all')
        .then(res => res.json())
        .then(data => displayCountries(data));
}

const displayCountries = countries => {
    console.log(countries[0]);
    const container = document.getElementById('countries');
    const countryHTML = countries.map(country => getCountryHTML(country));
    // console.log(countryHTML);
    // container.innerHTML = countryHTML[0];
    // container.innerHTML = countryHTML;

    container.innerHTML = countryHTML.join(' ');
    console.log(countryHTML[0]);
}

const getCountryHTML = country => {
    return `
    <div class="country">
    <h2>${country.name}</h2>
    <h4>Capital: ${country.capital}</h4>
    <img src ="${country.flags[0]}"
    </div>
   
    `
}

loadCountries();