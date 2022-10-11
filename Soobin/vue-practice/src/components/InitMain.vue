<template>
  <div>
    
    <button class="button" v-on:click="likecnt++">khkh</button> 
    <span>ÁÁ¾Æ¿ä : {{likecnt}}</span>
    <button class="button" @click="dislikecnt++">½È¾î¿ä</button> 
    <span>½È¾î¿ä : {{dislikecnt}}</span>
  </div>
</template>



<script>
  export default {
    name: 'InitMain',
    props: {
      msg: String
    }
  }
  </script>

<style>
  .button{
    margin-left : 15px;
  }
</style>


