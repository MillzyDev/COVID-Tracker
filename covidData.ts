import axios from "axios";

const endpoint = "https://api.coronavirus.data.gov.uk/v1/data?filters=areaType=overview&structure={%22date%22:%22date%22,%22newCases%22:%22newCasesByPublishDate%22,%22newDeaths%22:%22newDeaths28DaysByPublishDate%22}";

async function getCovidData() {
    const covidData = await axios.get(endpoint);
    //console.log(covidData.data);
    return covidData.data; 
}

export { getCovidData };