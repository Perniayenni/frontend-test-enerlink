import { createAsyncThunk } from '@reduxjs/toolkit'
import * as api from '../../components/api/data'

const NAMESPACE = 'DATA'

export const fetchAssets = createAsyncThunk(
  `${NAMESPACE}/fetchAssets`,
  async (params, { rejectWithValue }) => {
    try {
      const response = await api.fetchAssets()
      const { data } = response
      return data
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

export const fetchStations = createAsyncThunk(
  `${NAMESPACE}/fetchStations`,
  async (params, { rejectWithValue }) => {
    try {
      const response = await api.fetchStations(params)
      const { data } = response
      return data
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

export const fetchChargers = createAsyncThunk(
  `${NAMESPACE}/fetchChargers`,
  async (params, { rejectWithValue }) => {
    try {
      const response = await api.fetchChargers(params)
      const { data } = response
      return data
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

export const getCharger = createAsyncThunk(
  `${NAMESPACE}/getCharger`,
  async (id, { rejectWithValue }) => {
    try {
      const response = await api.getCharger(id)
      const { data } = response
      return data
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)


export const fetchConnectors = createAsyncThunk(
  `${NAMESPACE}/fetchConnectors`,
  async (params, { rejectWithValue }) => {
    try {
      const response = await api.fetchConnectors(params)
      const { data } = response
      return data
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)