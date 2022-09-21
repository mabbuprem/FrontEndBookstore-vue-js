<template>
    <div class="home">
  <ConfirmOrder></ConfirmOrder>
  
  </div>
  </template>
  
  <script>
  
import ConfirmOrder from '@/components/ConfirmOrder.vue';
  // @ is an alias to /src
  export default {
    name: 'GetNote',
    components: {
        ConfirmOrder
}
  }
  </script>