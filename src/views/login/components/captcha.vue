<template>
  <div>
    <div class="captcha-container">
      <canvas ref="captchaCanvas" width="200" height="50"></canvas>
      <el-button class="button" @click="handleClick" ></el-button>
    </div>
  </div>
</template>
<script>
export default{
  name:'Captcha',
  props(){

  },
  data(){
    return {
      captchaText:'',
      isClicked:false
    }
  },
  computed:{
    textColor(){
      return this.isClicked ? 'purple' : 'blue'; // 根据状态返回颜色
    }
  },
  mounted(){
    this.generateCaptcha();
  },
  methods:{
    handleClick(){
      this.isClicked=true;
      this.generateCaptcha();
    },
    generateCaptcha(){
      const canvas = this.$refs.captchaCanvas;
      const ctx = canvas.getContext('2d');
      const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      this.captchaText = '';
      
      // 生成随机验证码
      for (let i = 0; i < 6; i++) {
        this.captchaText += chars.charAt(Math.floor(Math.random() * chars.length));
      }

      // 清空画布
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 设置背景色
      ctx.fillStyle = '#f0f0f0';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      console.log(canvas.width)
      console.log(canvas.height)
      // 添加一些干扰线
      for (let i = 0; i < 5; i++) {
        ctx.strokeStyle = this.getRandomColor();
        ctx.beginPath();
        let tempWidth=Math.random() * canvas.width;
        let tempHeigt=Math.random() * canvas.height
        console.log(tempWidth)
        console.log(tempHeigt)
        ctx.moveTo(tempWidth,tempHeigt );
        ctx.lineTo(Math.random() * canvas.width, Math.random() * canvas.height);
        ctx.stroke();
      }
      console.log(this.captchaText)
      // 绘制验证码字符
      for (let i = 0; i < this.captchaText.length; i++) {
        ctx.font = `${this.getRandomFontSize()}px Arial`;
        ctx.fillStyle = this.getRandomColor();
        ctx.save();
        
        // 随机旋转字符
        ctx.translate(30 * i + 20, canvas.height / 2 + Math.random() * 10 - 5);
        ctx.rotate((Math.random() - 0.5) * Math.PI / 6); // 随机旋转 -30° 到 30°
        ctx.fillText(this.captchaText[i], 0, 0);
        ctx.restore();
      }
    },
    getRandomColor() {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    },
    getRandomFontSize() {
      return Math.floor(Math.random() * 10) + 20; // 随机字体大小 20px 到 30px
    },

}
}
</script>

<style scoped>
.captcha-container {
  position: relative; /* 设置容器为相对定位 */
  display: inline-block; /* 使容器适应内容 */
}
.text1{
  text-decoration: underline;
  cursor:pointer ;
  color:blue;
}
.text2{
  text-decoration: underline;
  cursor:pointer ;
  color:purple
}
.button{
  position: absolute; 
  bottom: 10px; 
  right: -10px;
  background-image: url('../../../assets/img/refresh.png'); 
  background-color: transparent; 
  background-size: contain; 
  background-repeat: no-repeat;
  color: white; 
  border: none; 
  width: 20px;
  height: 20px; 
  text-align: center;
  display: inline-flex; 
  align-items: center; 
  justify-content: center; 
}
.button:hover {
  opacity: 0.5; 
  background-color: transparent; 
}
</style>