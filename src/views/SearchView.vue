<template>
    <div class="home">
      <SearchResult></SearchResult>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  //import Dashboard from "@/components/DashboardBar.vue";
  
import SearchResult from "@/components/SearchResult";
  export default {
    name: "DashBoard",
  
    components: {
    
        SearchResult
},
  };
  </script>