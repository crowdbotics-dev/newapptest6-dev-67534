import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const get_pets_id_read = createAsyncThunk(
  "get_OnePets/get_pets_id_read",
  async payload => {
    const response = await apiService.get_pets_id_read(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const get_OnePetsSlice = createSlice({
  name: "get_OnePets",
  initialState,
  reducers: {},
  extraReducers: {
    [get_pets_id_read.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [get_pets_id_read.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [get_pets_id_read.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default { get_pets_id_read, slice: get_OnePetsSlice }
