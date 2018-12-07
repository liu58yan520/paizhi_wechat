<style scoped>
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
                        <p>{{v.no}}</p>
                    </div>
                    <router-link :to="{name:'add_person',query:{type:$route.query.type,person_index:i}}">
                    <img src="static/information_edit.svg">
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="btns">
            <button :style="{'width':person_init?'45%':'80%'}"><router-link :to="{name:'add_person',query:{type:this.$route.query.type}}">新增</router-link></button>
            <button @click="fm_sub" v-if="person_init">确认</button>
        </div> 
    </div>
</template>
<script>
import {applicant,designer} from '@/assets/api'
import  {mapState,mapMutations} from 'vuex';
export default {
    data(){
        return {
            all_data:[],
            type:'',
            select_data:new Set()
        }
    },
    
    computed:mapState(['all_apply_man',"all_design_man",'person_init','select_design_man']),
    methods:{
        ...mapMutations(['set_select_data']),
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
            this.set_select_data({name:this.$route.query.type=='apply'?'apply':'design',data:Array.from( this.select_data)})
            if(this.$route.query.type=='design')
                this.$router.push({name:'list_person',params:{ tabs:true}})
            else 
                this.$router.back()
        }

    },
    mounted(){
        
        if(this.$route.query.type=="apply"){
            document.title="申请人管理"
            if(this.all_apply_man.length)
                this.all_data=this.all_apply_man
            else {
                applicant().then(res=>{
                    this.all_data=res.data.data.list
                    this.$store.commit('add_all_data',{name:this.$route.query.type,data:res.data.data.list})
                })
            }
                
            
        }else{
            document.title="设计人管理"
            if(this.all_design_man.length)
                this.all_data=this.all_design_man
            else {
                designer().then(res=>{
                    this.all_data=res.data.data.list
                    this.$store.commit('add_all_data',{name:this.$route.query.type,data:res.data.data.list})
                })
            }
                
        }
        

    }
}
</script>
