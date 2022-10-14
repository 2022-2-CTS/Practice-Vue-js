<template>
      <div class= "container">
        <div v-if="rev == true">
          <div class="white-bg">
            <b>수정하시겠습니까?</b>
            <button type="button">
            <div class="btn" @click="goHome">OK</div>
            </button>
          </div>
        </div>

        <div class="black-bg" v-if="del == true">
          <div class="white-bg">
            <b>삭제하시겠습니까?</b>
            <button type="button">
            <div class="btn" @click="goHome">OK</div>
            </button>
          </div>
        </div>
        
      <div class="left">
        <div class="top-bar">
          <b class="Arrow" @click="goHome"> {{" < "}} </b>
          <b class="title">상세페이지</b>
        </div>
      </div>
      <div>
        <div style="height: auto; text-align: left;width: 100%; border-radius: 20px solid white; background-color: skyblue;">
          <h1>메모</h1>
        </div>
        <div style="height: auto; text-align: left;width: 100%; border-radius: 20px solid white; background-color: skyblue;">
          <p>내용</p>
        </div>
        <div class="right">
          <span class="bt1" @click="revise">
            <button type="button">
            수정
            </button>
          </span>
          <span class="bt2" @click="deletes">
            <button type="button">
            삭제
            </button>
          </span>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  
  export default {
    name: 'InitSub',
    data(){
      return{
        rev : false,
        del : false,
      }
    },
    methods:{
      goHome(){
        this.$router.push("/");
      },
      revise(){
        this.rev = true;
      },
      deletes(){
        this.del = true;
      }
    },
    components: {
    }
  }
  </script>
  
  body {
    margin : 0;
  }
  div {
    box-sizing: border-box;
  }
  .black-bg {
    width: 100%; height:100%;
    background: rgba(0,0,0,0.5);
    position: fixed; padding: 20px;
  }
  .white-bg {
    width: 100%; background: white;
    border-radius: 8px;
    padding: 20px;
  } 