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
        padding-bottom: 1vw;
        white-space:nowrap; 
        text-overflow:ellipsis;
        overflow:hidden; 
    }
    .patent .list figure .text p{
        text-align: left;
        color: #999;
        line-height: 5vw;
    }
    .patent .list figure .res{
        float: right;
        margin-top: 5%;
    }

</style>
<template>
    <div class="patent">
       <!-- <div class="top">
           <ul>
               <li :class=" ment==0?'active':''" @click="ment=0">全部</li>
               <li :class=" ment==1?'active':''" @click="ment=1">外观设计</li>
               <li :class=" ment==2?'active':''" @click="ment=2">发明</li>
               <li :class=" ment==3?'active':''" @click="ment=3">实用新型</li>
           </ul>
       </div> -->
       <ul class="list">
           <van-list
             v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="getList"
           >
           <li  v-for="(v,i) in data_list" :key="i" >
                <router-link :to="{name:'order',params:{type:v.id}}">
                    <figure>
                    　　<img src='static/ico_style.png'>
                    　　<figcaption class="text">
                    　　　　 <h4 class="txt_overflow">{{v.name}}</h4>
                            <p class="txt_overflow">申请人：{{v.applicant_text}}</p>
                            <p>申请日期：{{v.patent_apply_time.substr(0,10)}}</p>
                    　　</figcaption>
                        <p class="res" style="color:#24A1F5">{{v.prepay_annual_fee_status}}</p>
                　　　</figure>
                </router-link>
           </li>
           <div class="clear"></div>
           </van-list>
       </ul>
    </div>
</template>
<script>
import { List } from 'vant';
import {mycase} from '@/assets/api'
export default {
    data(){
        return {
            data_list:[],
            loading: false,
            finished: false,
            page:1,
            is_zoo:false
        }
    },
    components:{
        "van-list":List
    },
    methods:{
        getList(){
            mycase({page:this.page++,type:'外观设计'}).then(res=>{
                if(res){
                    this.data_list=res.data.data.list
                    if(res.data.data.list.length<=this.data_list.length) {
                        this.finished=true
                    }
                        
                }
                 this.loading=false   
                
            })
        }
    },

    created(){
        this.getList()
    }
}
</script>

