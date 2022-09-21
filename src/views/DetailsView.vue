<template>
    <div class="home">
  <BookDetail></BookDetail>
  
  </div>
  </template>
  
  <script>
  
import BookDetail from '@/components/BookDetail.vue';
  // @ is an alias to /src
  export default {
    name: 'GetNote',
    components: {
    BookDetail
}
  }
  </script>