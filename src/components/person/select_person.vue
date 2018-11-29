<style>
    .select_person{
        padding-bottom: 100px;
    }
    .select_person li{
        display: flex;
        justify-content: flex-start
    }
    .select_person li i{
        width:20px;
        height:20px;
        border-radius: 50%;
        border:1px solid #ccc;
        margin:12px 20px 0 0;
        color: #fff;
        text-align: center;
        line-height: 22px;
        font-style: normal;
    }
    .select_person li i.active{
        background: #24A1F5;
        border-color: #24A1F5;
    }
    .select_person li .center{
        flex:1;
    }

    .select_person li .center h4{
        line-height: 150%;
        background: transparent;
    }
    .select_person li .center p{
        color: #999;
        line-height: 130%;
    }
    .select_person li img{
        width:30px;
    }
    .btns{
        position: fixed;
        bottom: 0;
        width:100%;
        display: flex;
        justify-content: space-around;
        border-top: 1px solid #ccc;
        padding: 10px 0;
        background: #fff;
    }
    .btns button{
        display: block;
        border-radius: 6px;
        border:0;
        width:45%;
        color: #fff;
        background: #ddd;
    }
    .btns button:last-child{
        background: #24A1F5;
    }
</style>
<template>
    <div class="select_person">
        <div class="list">
            <ul ref="list">
                <li v-for="(v,i) in all_data" :key="i">
                    <i @click="select(i)"></i>
                    <div class="center" @click="select(i)">
                        <h4>{{v.name}}</h4>
                        <p>{{v.card}}</p>
                    </div>
                    <router-link :to="{name:'add_person',params:{type:type,person_index:i}}">
                    <img src="static/information_edit.svg">
                    </router-link>
                </li>
            </ul>
            
        </div>
        <div class="btns">
            <button :style="{'width':$store.state.person_init?'45%':'80%'}"><router-link :to="{name:'add_person',params:{type:this.type}}">新增</router-link></button>
            <button @click="fm_sub" v-if="$store.state.person_init">确认</button>
        </div>
    </div>
</template>
<script>
import store from "@/vuex/store"
import  {mapState } from 'vuex';
export default {
    data(){
        return {
            all_data:null,
            type:'',
            select_data:new Set()
        }
    },
    computed:mapState(["all_design_man",'all_apply_man']),
    methods:{
        select(index){
            let node=this.$refs.list.getElementsByTagName('i')[index]
            if( node.className.indexOf('active') ==-1){
                node.classList.add("active")
                this.select_data.add(index)
                 node.innerText=this.select_data.size
            }
            else{
                let par_node=this.$refs.list.getElementsByTagName('i');
                node.classList.remove("active")
                this.select_data.delete(index)
            }
        },
        fm_sub(){
            if(this.type)
                this.$store.commit('set_select_data',{name:'apply',data:Array.from( this.select_data)})
            else
                this.$store.commit('set_select_data',{name:'design',data:Array.from( this.select_data)})
            this.$router.go(-1)
        }

    },
    mounted(){
        if(this.$route.query.type=="apply"){
            this.type=1
            document.title="申请人管理"
            this.all_data=this.all_apply_man
        }else{
            this.type=0
            document.title="设计人管理"
            this.all_data=this.all_design_man
        }

    },store
}
</script>
