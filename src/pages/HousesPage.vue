<template>
  <div class="component">
    THE HOMES PAGE

  </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, ref, onMounted } from 'vue';
import { houseService } from '../services/HouseService';
export default {
  setup(){
    onMounted(()=>{
      getHouses()
    })


    async function getHouses(){
      try {
        await houseService.getHouses()
      } catch (error) {
        Pop.error(error)
      }
    }
  return {
    cars: computed(()=> AppState.houses),
    account: computed(()=> AppState.account),
    activeCar: computed(()=> AppState.activeHouse)
    }
  },
};
</script>


<style lang="scss" scoped>

</style>
