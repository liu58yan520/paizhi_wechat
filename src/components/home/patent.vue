<style>
    figure,figcaption{
        padding: 0;
        margin: 0;
    }
    .patent .top ul{
        border-radius: 5px;
        width:90%;
        margin: 3vw auto;
        padding: 1vw 0;
        display: block;
        color: #24A1F5;
        overflow: hidden;
    }

    .patent .top ul li{
        float: left;
        width:25%;
        padding: 1.6vw 0;
        border:2px solid #24A1F5;
        border-left: none;
        box-sizing: border-box;
        text-align: center;
    }
    .patent .top ul li:first-child{
         border-left:2px solid #24A1F5;
    }
    .patent .top ul li.active{
        background: #24A1F5;
        color: #fff;
    }
    .patent .list li{
        width:100%;
        border-top: 1px solid #eee;
        clear: both;
        padding: 0;
        border-bottom: 0;
    }
    .patent .list figure{
        width:90%;
        margin: auto;
        padding: 10px 0;
    }
    .patent .list figure img{
        width:13vw;
        float: left;
    }
    .patent .list figure .text{
        margin-left: 3vw;
        float: left;
        margin-bottom: 2vw;
        width:62%;
        overflow: hidden;
    }
    .patent .list figure .text h4{
        font-size: 3.9vw;
        padding-bottom: 1vw;
        white-space:nowrap; 
        text-overflow:ellipsis;
        overflow:hidden; 
    }
    .patent .list figure .text p{
        text-align: left;
        color: #999;
        font-size: 3vw;
        line-height: 5vw;
    }
    .patent .list figure .res{
        float: right;
        margin-top: 5%;
        font-size: 3.8vw;
    }

</style>
<template>
    <div class="patent">
       <div class="top">
           <ul>
               <li :class=" ment==0?'active':''" @click="ment=0">全部</li>
               <li :class=" ment==1?'active':''" @click="ment=1">外观设计</li>
               <li :class=" ment==2?'active':''" @click="ment=2">发明</li>
               <li :class=" ment==3?'active':''" @click="ment=3">实用新型</li>
           </ul>
       </div>
       <ul class="list">
           <li  v-for="(v,i) in data_list" :key="i" v-if="!ment||ment==v.type">
                <router-link :to="{name:'order',params:{type:v.id}}">
                    <figure>
                    　　<img src='static/ico_style.png'>
                    　　<figcaption class="text">
                    　　　　 <h4>{{v.title}}</h4>
                            <p>申请人：{{v.man}}</p>
                            <p>申请日期：{{v.apply_date}}</p>
                    　　</figcaption>
                        <p class="res" :style="{color:v.res==1?'#FF9600':'#24A1F5'}">{{v.res | guolv_pay}}</p>
                　　　</figure>
                </router-link>
           </li>
       </ul>
    </div>
</template>
<script>
export default {
    data(){
        return {
            ment:0,
            data_list:[
                {
                    id:2,
                    type:1,
                    title:'一种不规则形状的包装盒子rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr',
                    man:'江苏大通科技有限公司',
                    apply_date:'2018-6-25 12:12',
                    res:1
                },
                {
                    id:3,
                    type:1,
                    title:'一种不规则形状的包装盒子',
                    man:'江苏大通科技有限公司',
                    apply_date:'2018-6-25 12:12',
                    res:2
                },
                {
                    id:5,
                    type:1,
                    title:'一种不规则形状的包装盒子',
                    man:'江苏大通科技有限公司',
                    apply_date:'2018-6-25 12:12',
                    res:3
                }
            ]
        }
    },
    filters:{
　　　　　　guolv_pay:function(value){
　　　　　　　　if(value==1) return '待支付'
              else if(value==2) return '审核中'
              else if(value==3) return '审核完成'
　　　　　　}
　　　},
    created(){
        document.title="专利列表"
    }
}
</script>

