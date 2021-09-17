<template>
<div class="item2">
  <span class="font">
    <a href="#">学术动态</a>
  </span>
  <div class="dataBox" v-for="(item,index) in boxs " :key="index">
   <div class="date"  >
      <span>{{item.day}}</span>
     <div class="data-foot">
       <span>{{item.year}}</span>
     </div>
   </div>
    <div class="msg">
      <span>主题:  {{item.title}}</span>
      <span>演讲者:    {{item.sponsor}}</span>
      <span >日期:   {{item.date}}</span>
      <span>地点:    {{item.place}}</span>

      </div>
  </div>

</div>
</template>

<script>
export default {
  name: "item2",
  data(){
    return{
    boxs:[{
      day:'05',
      year:'2021.07',
      title:'系统推进新文化...',
      sponsor:'郁建兴',
      date:'2021年7月9日(星期五)',
      place:'综合楼第一会议室'
    },{
      day:'24',
      year:'2021.05',
      title:'系统推进新文化...',
      sponsor:'郁建兴',
      date:'2021年7月9日(星期五)',
      place:'综合楼第一会议室'
    },{
      day:'17',
      year:'2021.05',
      title:'系统推进新文化...',
      sponsor:'郁建兴',
      date:'2021年7月9日(星期五)',
      place:'综合楼第一会议室'
    }
    ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .item2{
    position: relative;
    top: 10px;
    .font{
    position: relative;
    font-size: 18px;
    a{
      text-decoration: none;
      color: black;
    }
    }

    .dataBox{
     display: grid;
      grid-template-columns:8fr 13fr;
      margin-bottom:20px ;
      margin-top:8px ;

      .date{
        width: 60px;
        height: 65px;
        margin: 6px 12px;
        background-color: #7D0000;
        color: white;
        font-size: 20px;
        align-items: center;
        span{
          margin: 0 18px;
        }

        .data-foot{
          width: 60px;
          position: relative;
          top: 6px;
          height: 34px;background-color: lightgrey;
          font-size: 15px;
          span{
            position: relative;
            right: 14px;
            top: 5px;
            color: #7D0000;

          }
        }
      }
    .msg{
      display: flex;
      flex-direction: column;
      margin-top: 3px;
      font-size: 12px;
      color: gray;
    }
    }
    }

</style>

