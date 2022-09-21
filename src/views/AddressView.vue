<template>
    <div class="home">
  <AddressUI></AddressUI>
  
  </div>
  </template>
  
  <script>
  
import AddressUI from '@/components/AddressDetails.vue';
  // @ is an alias to /src
  export default {
    name: 'GetNote',
    components: {
        AddressUI
}
  }
  </script>