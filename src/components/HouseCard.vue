<template>
    <div class="house-card border border-primary rounded shadow">
      <img :src="house.imgUrl" class="img-fluid rounded-top" :alt="`picture of a house`">
      <div class="p-1">
        <p class="fw-bold text-center"> {{ house.bedrooms }} {{ house.bathrooms }} {{ house.levels }}</p>
        <p>{{ house.description }}</p>
        <div class="text-success text-end"><b>${{ house.price }}</b></div>
        <button @click="deleteHouse(house.id)" v-if="account.id == house.creatorId" class="btn btn-danger delete-button" title="delete house"><i class="mdi mdi-delete-forever"></i></button>
        <button @click="setActiveHouse()" v-if="account.id == house.creatorId" data-bs-toggle="modal" data-bs-target="#edit-house-modal" class="btn btn-warning edit-button"><i class="mdi mdi-pen"></i></button>
      </div>
    </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, ref, onMounted } from 'vue';
import { House } from '../models/Houses';
import Pop from '../utils/Pop.js';
import { houseService } from '../services/HouseService.js';
export default {
  props: {house: {type: House, required: true}},
  setup(props){
  return {
    account: computed(()=> AppState.account),
    async deleteHouse(houseId){
      try {
        if(await Pop.confirm('WARNING this action cannot be undone')){
          await houseService.deleteHouse(houseId)
          Pop.success('your house has been deleted from existence')
        }
      } catch (error) {
        Pop.error(error)
      }
    },
    setActiveHouse(){
      houseService.setActiveHouse(props.house.id)
    }
  }
  }
};
</script>


<style lang="scss" scoped>
.house-card{
  position: relative;
  img{
    width: 100%;
    height: 25vh;
    object-fit: cover;
    object-position: center;
  }
  .delete-button{
    position: absolute;
    right: 0px;
    top: 0px
  }
}
</style>
