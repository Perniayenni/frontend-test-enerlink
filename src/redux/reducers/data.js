import { createReducer } from '@reduxjs/toolkit'
import { fetchAssets, fetchStations, fetchChargers, fetchConnectors, getCharger } from '../actions/data'

const INITIAL_STATE = {
  assets: [],
  stations: [],
  chargers: [],
  connectors: [],
  charger: {}
}

export const breedsReducer = createReducer(INITIAL_STATE, (builder) =>
  builder
    .addCase(fetchAssets.fulfilled, (state, {payload}) => {
      state.assets = payload
    })
    .addCase(fetchStations.fulfilled, (state, {payload}) => {
      state.stations = payload
    })
    .addCase(fetchChargers.fulfilled, (state, {payload}) => {
      state.chargers = payload
    })
    .addCase(fetchConnectors.fulfilled, (state, {payload}) => {
      state.connectors = payload
    })
    .addCase(getCharger.fulfilled, (state, {payload}) => {
      state.charger = payload
    })
)

export default breedsReducer
