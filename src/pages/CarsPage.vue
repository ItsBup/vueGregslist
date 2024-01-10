<template>
  <div class="container-fluid">

    <!-- NOTE to v-if on empty objects, you can check for properties inside of the objects instead of the object itself -->
    <ModalWrapper modalId="create-car-modal" modalSize="fullscreen">
      <div>Create A Car</div>
      <CarForm v-if="account.id"/>
    </ModalWrapper>

    <section class="row">
      <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#create-car-modal">Create a car</button>
    </section>

    <section class="row my-2">

      <div v-for="car in cars" class="col-4 mb-3">
        <!-- {{ car.make }} -->
        <CarCard :car="car"/>
      </div>

    </section>

<!-- THE CARS PAGE
    {{ cars }} -->

    <ModalWrapper modalId="edit-car-modal">
      <div>Edit Car</div>
      <CarForm :editCarData="activeCar"/>
    </ModalWrapper>
  </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, ref, onMounted } from 'vue';
import Pop from '../utils/Pop.js';
import { carsService } from '../services/CarsService.js';
import CarCard from '../components/CarCard.vue'
import CarForm from '../components/CarForm.vue';
import ModalWrapper from '../components/ModalWrapper.vue';
export default {
  setup(){
    onMounted(()=>{
      getCars()
    })


    async function getCars(){
      try {
        await carsService.getCars()
      } catch (error) {
        Pop.error(error)
      }
    }
  return {
    cars: computed(()=> AppState.cars),
    account: computed(()=> AppState.account),
    activeCar: computed(()=> AppState.activeCar)
    }
  },
  components: { CarCard, CarForm, ModalWrapper }
};
</script>


<style lang="scss" scoped>

</style>
