import axios from 'axios';
const URL_API = 'https://my-json-server.typicode.com/AlvaroArratia/static-api'

export const fetchAssets = () => {
  return axios.get(`${URL_API}/assets`)
}

export const fetchStations = (params) => {
  return axios.get(`${URL_API}/stations`, { params })
}

export const fetchChargers = (params) => {
  return axios.get(`${URL_API}/chargers`, { params })
}

export const getCharger = (id) => {
  return axios.get(`${URL_API}/chargers/${id}`)
}

export const fetchConnectors = (params) => {
  return axios.get(`${URL_API}/connectors`, { params })
}
