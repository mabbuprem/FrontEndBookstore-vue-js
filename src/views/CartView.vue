<template>
    <div class="home">
  <Mycart></Mycart>
  
  </div>
  </template>
  
  <script>
  
import Mycart from '@/components/Mycart.vue';
  // @ is an alias to /src
  export default {
    name: 'GetNote',
    components: {
        Mycart
}
  }
  </script>