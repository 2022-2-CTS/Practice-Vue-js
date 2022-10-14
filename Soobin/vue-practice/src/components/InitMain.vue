

<template>
  <div id="app">
    <b>My First Web App</b>
  <div class="num" v-for="count in 4" :key="count">
      <button @click="handle_toggle" type="button">
      <h1>메모{{count}}</h1>
      <p><b>내용{{count}}</b></p>
      </button>
  </div>

     

  </div>
</template>


<script>
  export default {
  methods:{
    handle_toggle: function(){ 
      this.$router.push("/detail");
    }
}
}
</script>

<style>
  .button{
    margin-left : 15px;
  }
</style>


