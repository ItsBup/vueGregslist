<template>
  <div class="component">
    THE JOBS PAGE

  </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, ref, onMounted } from 'vue';
import { jobService } from '../services/JobService';

export default {
  setup(){
    onMounted(()=>{
      getJobs()
    })


    async function getJobs(){
      try {
        await jobService.getJobs()
      } catch (error) {
        Pop.error(error)
      }
    }
  return {
    cars: computed(()=> AppState.jobs),
    account: computed(()=> AppState.account),
    activeCar: computed(()=> AppState.activeJob)
    }
  },
};
</script>


<style lang="scss" scoped>

</style>
