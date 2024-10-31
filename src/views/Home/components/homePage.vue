<template>
  <div>
    <div class="page-container">
      <el-menu class="custom-menu" mode="horizontal" @select="handleSelectTopMenu">
        <el-menu-item>
          <img class="menu-image" src='../../../assets/img/buya/icon/buya1.png' alt="Menu Icon"/>
        </el-menu-item>
        <el-menu-item index="0">首页</el-menu-item>
        <el-menu-item index="1">视频</el-menu-item>
        <el-menu-item index="2">游戏</el-menu-item>
        <el-menu-item index="2">游戏</el-menu-item>
        <el-menu-item>
          <el-input v-model="serchText" style="width: 150px" placeholder="搜索">
            <template #append>
            <el-button class="el-icon-search" @click="searchContent"></el-button>
            </template>
          </el-input>
        </el-menu-item>
      </el-menu>
      <el-menu class="right-menu" mode="horizontal" @select="handleSelect">
        <el-menu-item index="3">登录</el-menu-item>
        <el-menu-item index="4">注册</el-menu-item>
        <el-menu-item index="5">注册</el-menu-item>
      </el-menu>
    </div>
    <div style="width: 100%; height: 80%;">
      <el-carousel style="width:100%; height: 100%;" :interval="4000" arrow="always">
        <el-carousel-item style="width:100%; height: 100%;" v-for="(image, index) in images" :key="index">
          <img :src="image" alt="趣事图片" class="carousel-image" />
        </el-carousel-item>
      </el-carousel>
      <h3>今日趣事</h3>
    </div>
    <div class="message-container">
      <span style="height:300px">
        <el-menu  class="left-side-menu" @select="handleSelectMessageMenu">
          <el-menu-item index="0">国家大事</el-menu-item>
          <el-menu-item index="1">留言板</el-menu-item>
        </el-menu>
      </span>
      <span v-if="messagePageIndex==='0'" style="width:80%; height:300px">
        <el-card style="width:100%;height: 300px;">
          <span>今日猪事</span>
          <div style="font-size: medium;color:chocolate;text-align: left">
            <li style="margin-right: 0;">aaaasadfakfjlksdfjlks</li>
            <li>adfvdvdfadfafsdfbgbrr</li>
            <li>djfwefndsvndjndkljdlk</li>
          </div>
        </el-card>
      </span>
      <span v-if="messagePageIndex==='1'" style="width:80%; height:300px">
        <el-card style="width:100%;height: 300px;">
          <h3>今日留言</h3>
        </el-card>
      </span>
    </div>
  </div>
  
</template>

<script>
export default{
  name:'homePage',
  data(){
    return{
      serchText:'',
      images:this.loadBuyaImages(),
      newMessage:'',
      messages:[],
    messagePageIndex:'0',

    }
  },
  computed:{

  },
  methods:{
    handleSelectTopMenu(index){
      if(index==='0'){
        this.$router.push({ name: 'Home' });        
      }else if(index==='1'){
        this.$router.push({ name: 'Video' });      
      }else if(index==='2'){
        this.$router.push({name:'Game'});
      }else if(index==='3'){
        this.$router.push({name:'Login'});
      }
    },
    handleSelectMessageMenu(index){
      console.log(this.messagePageIndex)
      this.messagePageIndex=index;
      console.log(this.messagePageIndex)

    },
    searchContent(){},
    loadBuyaImages(){
      const images=[];
      const requireContext=require.context('../../../assets/img/buya/carousel', false, /\.(png|jpe?g|gif|svg)$/);
      requireContext.keys().forEach((fileName) => {
        images.push(requireContext(fileName));
      });
      return images;
    },
    addMessage(){
      
    }
  }
}
</script>

<style scoped>
.page-container{
  max-height: 600px;
  width: 100%;
  height: 100%;
  display: flex; /* 使用 flexbox 布局 */
  justify-content: space-between; /* 在主轴上分配空间 */
  align-items: center; /* 垂直居中对齐 */
}
.message-container{
  display: flex;
  flex:1;
  height: 300px;
}
.left-side-menu{
  background-color: rgb(135, 175, 137);
  width:100px;
  height: 300px;
}
.custom-menu{
  top:0px;
  font-size: 20px;
  width: 80%;
  margin-left: 0;
}
.right-menu{
  width: 20%;
  display: flex; /* 使用 flexbox 布局 */
  justify-content: flex-end; /* 右对齐菜单项 */
}
.menu-image {
  width: 100%; /* 使图片宽度自适应 */
  height: auto; /* 高度自动，保持宽高比 */
  max-width: 40px; /* 设置最大宽度，您可以根据需要调整 */
  max-height: 40px; /* 设置最大高度，您可以根据需要调整 */
}
.el-icon-search{
  background: url('../../../assets/img/Search.png');
  background-size:cover ;
}
.carousel-image{
  max-width: 100%; /* 最大宽度为100% */
  max-height: 100%; /* 最大高度为600px */
  object-fit: cover; /* 保持宽高比，裁剪多余部分 */
}
.message-input-board{
  background-color:aqua;
  height: 100%; /* 设置输入框高度 */
  margin-left: 10px; 
}
</style>