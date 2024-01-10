import { api } from "./AxiosService.js"
import {AppState} from '../AppState.js'
import { House } from "../models/Houses.js"

class HouseService {

  async getHouses() {
    const response = await api.get('api/houses')
    AppState.houses = response.data.map(house => new House(house))
  }

  async createHouse(houseData){
    const response = await api.post('api/houses', houseData)
    AppState.houses.push(new House(response.data))
  }

  async updateHouse(updateHouse){
    const response = await api.put(`api/houses/${updateHouse.id}`, updateHouse)
    const indexToUpdate = AppState.houses.findIndex(house => house.id == updateHouse.id)
    AppState.houses.splice(indexToUpdate, 1, new House(response.data))
  }

  async deleteHouse(houseId){
    const response = await api.delete(`api/houses/${houseId}`)
    const indexToRemove = AppState.cars.findIndex(house => house.id == houseId)
    AppState.houses.splice(indexToRemove,1)
  }

  setActiveHouse(houseId){
    const selectedHouse = AppState.houses.find(house => house.id == houseId)
    AppState.activeHouse = selectedHouse
  }

}

export const houseService = new HouseService()
