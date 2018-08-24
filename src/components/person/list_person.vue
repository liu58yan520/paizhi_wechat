<style>
.list_person{
    width:100%;
    height: 100%;
    overflow: hidden;
    font-size: 14px;
}
    .list_person .list li{
        position: relative;
        padding-bottom: 3vw;
        font-size: 14px;
    }
    .list_person .list ul{
        padding: 0;
        margin: 0;
    }
    .list_person .list li span{
        font-size: 14px;
        color: #999;
    }
    .list_person .list li .index{
        display: block;
        float: left;
        width:5vw;
        height: 5vw;
        line-height: 5.5vw;
        margin: 3.5vw 3vw 3vw 3vw;
        background: #24A1F5;
        border-radius: 50%;
        color: #fff;
        text-align: center;
        text-decoration: none;
    }
    .list_person .list li h4{
        font-size: 4.2vw;
    }
    .list_person .list li .add{
        float: right;
        margin: 0 3% 0 0;
        font-size: 5vw;
    }
    .list_person .list li p{
        font-size: 3.2vw;
        color: #999;
        margin-top: 2vw;
    }
    .list_person .list li>a{
        display: inline;
    }
    .list_person .list li .icon{
        position: absolute;
        width:8vw;
        font-style: normal;
        font-size:22px;
        top:35%;
        right:1px;
        color:#ccc;
    }
    .list_person .list li:last-child{
        border:0;
    }
    .list_person .contact{
        padding: 10px 16px;
        font-size: 14px;
        color: #333;
    }
    .list_person .contact span{
        font-size: 14px;
        color: #999;
    }
    .list_person .contact_num{
        width:80%;
        margin: auto;
        display: block;
        padding: 20px 0 0;
        line-height: 150%;
        font-size: 14px;
        position: relative;
    }
    .list_person .contact_num input{
        float: right;
        width:70%;
        font-size: 14px;
        margin-top: -2px;
        border:0;
    }
    .list_person .contact_num::after,.list_person .contact_num::before{
        content: '';
        display: block;
        position: absolute;
        height: 1px;
        background: #eee;
    }
    .list_person .contact_num::before{
        width:140%;
        left: -20%;
        top: 10%;;
    }
    .list_person .contact_num::after{
        width:140%;
        left: -20%;
        bottom: -20%;
        /* top: 7%;; */
    }
    .list_person .fm_btn{
        position: initial;
        margin-top: 25%;
    }
    .list_person .tishi{
        padding: 6px 0 6px 14px;
        text-align: right;
        padding-right: 30px;
        color: #999;
        background: #F5F5F5;
        line-height:200%;
    }
  .list_person .list li span:first-child,.list_person .contact span:first-child{
        width:80px;
        float: left;
        color: #333;
    } 
     /*  .list_person .list li span:nth-child(2),.list_person .contact span:nth-child(2){
        text-indent: 10px;
        display: block;
        width:280px;
    } */
</style>
<template>
    <div class="list_person">
        <div class="main">
            <reply></reply>
            <hr>
            <div class="list ">
                <ul>
                    <li> <span>产品申请人</span> <span>( 拥有专利者 )</span>  
                       <router-link :to="{name:'select_person',query:{type:'apply'}}">
                           <van-icon class="add" name="add-o" color="#24A1F5"/>
                        </router-link>
                    </li>
                    <li v-for="(v,i) in select_apply_man" :key="i">
                        <i class="index">{{i+1}}</i>
                        <h4>{{v.name}}</h4>
                        <p>{{v.card}}</p>
                        <van-icon name="close" class="icon"  @click="$store.commit('rm_select_data',{name:'apply',index:i})"/>
                    </li>
                </ul>
            </div>
            <hr>
            <div class="list ">
                <ul>
                    <li> <span>产品设计人</span><span>( 拥有署名权 )</span>
                        <router-link :to="{name:'select_person',query:{type:'design'}}">
                            <van-icon class="add" name="add-o" color="#24A1F5"/>
                        </router-link>
                    </li>
                    <li v-for="(v,i) in select_design_man" :key="i">
                        <i class="index">{{i+1}}</i>
                        <h4>{{v.name}}</h4>
                        <p>{{v.card}}</p>
                        <van-icon name="close" class="icon" @click="$store.commit('rm_select_data',{name:'design',index:i})"/>
                    </li>
                </ul>
            </div>
            <div class="tishi">点击 “&nbsp;<van-icon name="add-o" color="#24A1F5"  />&nbsp;” 添加申请人/设计人</div>
            <h4 class="contact"><span>联系人</span><span>( 请输入专利联系人号码 )</span></h4>
            <label class="contact_num">+86<input type="number" minlength="11" maxlength="11" v-model="contact"> </label>
        </div>
        <button class="fm_btn" :disabled='select_design_man.length==0 || select_apply_man.length==0 || test_tel' >  <router-link :to="{name:'pay'}">  下一步 </router-link></button>
    </div>
</template>
<script>
import store from "@/vuex/store"
import  {mapState } from 'vuex';
export default {
    data(){
        return {
            contact:''
        }
    },
    computed:{
        ...mapState(["select_design_man",'select_apply_man']),
        test_tel(){
            return !(/^[1][3,4,5,7,8][0-9]{9}$/.test(this.contact))
        }
    },
    created(){
        this.$store.commit('set_person_init',true)
    },
    store
}
</script>
