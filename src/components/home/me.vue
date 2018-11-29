<style>
    .me .top{
        width:100%;
        height: 24vh;
        background: url("/static/bg_head.png");
        background-size: contain;
        color: #fff;
        text-align: center;
    }
    .me .top .user{
        position: absolute;
        left: 0; right: 0;
        top: 5%;
        margin: auto;
    }

    .me .top .user img{
        width:15vw;
        margin: auto;
        border-radius: 50%;
        margin-bottom: 2vw;
        background: #fff;
        padding: 2px;
    }
    .me .list li:nth-child(3){
        border-bottom: 0;
    }
    .me .list li>a{
        display: block;
    }
</style>
<template>
    <div class="me">
        <div class="top">
            <div class="user">
                <img src="static/face.jpg">
                <p>哈士</p>
            </div>
        </div>
        <hr>
        <div class="list">
            <ul>
                <li><router-link :to="{name:'select_person',query:{type:'apply'}}">申请人管理</router-link></li>
                <li><router-link :to="{name:'select_person',query:{type:'design'}}">设计人管理</router-link></li>
                <li><router-link :to="{name:'book_list'}">委托书管理</router-link></li>
                <hr>
                <li><a href="http://fj.pizhigu.com/index/index/query_cost_reduction?from=singlemessage&isappinstalled=0">费减备案查询</a></li>
            </ul>
        </div>
    </div>
</template>
<script>
import store from "@/vuex/store"
export default {
    created(){
        document.title="我的"
        this.$store.commit('set_person_init',false)
    },store
}
</script>

