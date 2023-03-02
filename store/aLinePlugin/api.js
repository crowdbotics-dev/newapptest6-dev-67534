import axios from "axios"
const aLinePlugin = axios.create({
  baseURL: "https://test.com/api",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function get_pets_id_read(payload) {
  return aLinePlugin.get(`/pets/${payload.id}`)
}
export const apiService = { get_pets_id_read }
