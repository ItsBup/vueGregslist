import { Profile} from './Profile.js'


export class House{
  constructor(data){
    this.id = data.id
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.levels = data.levels
    this.price = data.price
    this.imgUrl = data.imgUrl
    this.description = data.description
    this.year = data.year
    this.creatorId = data.creatorId
    this.creator = new Profile(data.creator)
    this.createdAt = new Date(data.createdAt)
    this.updatedAt = new Date(data.updatedAt)
  }


}
