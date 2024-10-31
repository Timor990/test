<template>
  <div>
    <img src="../../assets/img/background.gif" class="background"/>
    <el-card class="el-card">
      <h2>登录系统</h2>
      <el-form :model="form" :rules="rules" label-width="100">
        <el-form-item class="login-form" label="账户名称" prop="accountName">
          <el-input v-model="form.accountName" placeholder="请输入账户名称"></el-input>
        </el-form-item>
        <el-form-item class="login-form" label="账户密码" prop="accountPassword">
          <el-input v-model="form.accountPassword" placeholder="请输入账户密码"></el-input>
        </el-form-item>
        <el-form-item class="login-form" label="验证码" prop="captchaTextInput">
          <el-input v-model="form.captchaTextInput" placeholder="请输入验证码"></el-input>  
        <captcha ref="captcha"/>          
        </el-form-item>
      <el-button type="primary" @click="handleLogin">登录</el-button>
      </el-form>
      <div class="link-container">
        <span>忘记密码</span>
        <span>注册账号</span>
        <span>意见反馈</span>
      </div>
    </el-card>
  </div>
</template>

<script>
import captcha from "./components/captcha.vue";
export default{
  name:'Login',
  components:{captcha},
  data(){
    return {
      isShow:true,
      form:{
        accountName:'',
        accountPassword:'',
        captchaTextInput:'',
      },
      rules:{
        accountName:[{required:true,message:'账户名不能为空',trigger:'blur'}],
        accountPassword:[{required:true,message:'账户密码不能为空',trigger:'blur'}],
        captchaTextInput:[{required:true,message:'验证码不能为空',trigger:'blur'}]
      }
    }
  },
  methods:{
    log(){
      console.log(this.$refs.captcha.captchaText)
      console.log(this.form.captchaTextInput)
      console.log(this.form.accountName)
    },
    handleLogin(){
      this.$router.push({name:'Home'});
      console.log(this.$router.getRoutes());      
    }
  }
}
</script>

<style>
.link-container {
  display: flex; /* 使用 flexbox 布局 */
  justify-content: center;
}

.link-container span {
  cursor: pointer; 
  font-size: 12px; 
  margin: 10px; 
  text-decoration: underline;
}
.link-container span:hover{
  color:blue
}
.el-card{
  width:30%;
  height: 70%;
  margin:auto
}
.background{
  position: absolute;
  top: 0;
  left: 0;
  width:100%;
  height:100%;
  object-fit: cover;
  z-index: -1;
}
.login-form{
  width:85%;
}
</style>