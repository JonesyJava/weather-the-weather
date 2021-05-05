import axios from 'axios'

const options = {
  method: 'GET',
  url: 'https://community-open-weather-map.p.rapidapi.com/find',
  params: {
    q: 'Boise',
    cnt: '1',
    mode: 'HTML',
    lon: '116.2023',
    type: 'link, accurate',
    lat: '43.615',
    units: 'imperial, metric'
  },
  headers: {
    'x-rapidapi-key': 'd25f56589cmsh8c56c7bbd057284p1aa4ebjsn4f066fc8c964',
    'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com'
  }
}

axios.request(options).then(function (response) {
  console.log(response.data)
}).catch(function (error) {
  console.error(error)
})
