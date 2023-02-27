import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export type MapState = {
  loading: boolean,
  error: boolean,
  coordinates: {
    lat: number,
    long: number
  }
}

const initialState: MapState = {
  loading: false,
  error: false,
  coordinates: { lat: 0, long: 0 }
}

const mapSlice = createSlice({
  name: 'mapSlice',
  initialState: initialState,
  reducers: {
    setCoordinates: (state, action: PayloadAction<any>) => {
      const { lat, lng } = action.payload
      state.coordinates = {
        lat: lat,
        long: lng
      }
    }
  }
})

export const { setCoordinates } = mapSlice.actions

export default mapSlice.reducer