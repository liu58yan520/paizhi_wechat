<style>
.home{
    width:100%;
    padding-bottom: 50px;
    overflow: hidden;
    
}
.home h3{
    background: #F4F4F4;
    padding: 10px 0;
    margin: 0;
    text-align: left;
    text-indent: 18px;
}
.index_card{
    position: relative;
    text-align: left;
    margin: 15px 0 0 0;
}
.index_card::after{
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    position: absolute;
    bottom: -5px;
    background: #eee;
}
.index_card::before{
    content: '';
    display: block;
    height: 116%;
    width: 1px;
    position: absolute;
    left: 46%;
    top: -13%;
    background: #eee;
}
.index_card h4{
    font-size: 18px;
    color: #249FF4;
    margin-bottom: 3px;
}
.index_card  p{
    font-size: 13px;
    color: #999;
}

.index_card div:nth-child(2){
    position: absolute;
    right: 0;
    top: 0;
    width:50%;
}
.index_card div:nth-child(2)::after{
    content: '';
    display: block;
    height: 1px;
    width: 120%;
    position: absolute;
    bottom: -38%;
    right: -12%;
    background: #eee;

}
.index_card div:nth-child(3){
    position: absolute;
    right: 0;
    bottom: 8px;
    width:50%;
}
.index_card div:nth-child(1) img{
    width: auto;
    height: 18vw;;
    margin: 15px 0 0 17%;

}
.index_card div:nth-child(2) img{
    position: absolute;
    top: -5px;
    right: 8%;
    width:25%;
}
.index_card div:nth-child(3) img{
    position: absolute;
    top: -1px;
    right: 8%;
    width:25%;   
}
.index_card>div:first-child h4,.index_card>div:first-child p{
    text-indent: 20px;  
}
.index_card>div>a{
    display: block;
}
#kefu{
    position: fixed;
    bottom: 20%;
    right: 5%;
    background: #e5e5e5;
    color: #999;
    font-size: 3.5vw;
    height: 30px;
    padding-left: 2vw;
    line-height: 30px;
    border-radius: 15px;;
}
#kefu img{
    height: 100%;
    width: auto;
    margin-left: 1vw;
    float: right;
}

</style>
<template>
    <div class="home">
        <van-swipe :autoplay="3000">
            <van-swipe-item><img src="static/banner1.png" alt=""></van-swipe-item>
        </van-swipe>
        <h3>申请新专利</h3>
        <div class="index_card">
            <div>
            <router-link :to="{name:'apply_before',params:{type:1} }">
                <h4>外观设计</h4>
                <p>300元起</p>
                <img src="static/style.png">
            </router-link>
            </div>
            <div>
                <h4>发明创造</h4>
                <p>4500元起</p>
                <img src="static/creation.png" alt="">
            </div>
            <div>
                <h4>实用新型</h4>
                <p>1600元起</p>
                <img src="static/newtype.png" alt="">
            </div>
        </div>
       <div id="kefu">联系客服 <img src="static/kefu.png" alt=""></div>
    </div>
</template>
<script>
import { Swipe, SwipeItem } from 'vant';
export default {
    components:{
        'van-swipe-item':SwipeItem,
        'van-swipe':Swipe
    },
    created(){
        document.title="派智知识产权平台"
    }
    
}
</script>
