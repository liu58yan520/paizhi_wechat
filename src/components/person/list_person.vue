<style scoped>
.list_person{
    width:100%;
    height: 100%;
    overflow: hidden;
    padding-bottom: 60px;
}
    .list_person .list li{
        position: relative;
        padding-bottom: 3vw;
    }
    .list_person .list ul{
        padding: 0;
        margin: 0;
    }
    .list_person .list li span{
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
    
    .list_person .list li .add{
        float: right;
        margin: 0 3% 0 0;
        font-size: 20px;
    }
    .list_person .list li p{
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
        top:17px;
        right:1px;
        color:#ccc;
    }
    .list_person .list li:last-child{
        border:0;
    }
    #dialog .box{
        background: #fff;
        z-index: 9999;
    }
    .select_fj{
        margin-top: 5px;
        line-height: 30px;
        display: flex;
        justify-content: space-between;
    }
     .select_fj h6{
        font-size: 14px;
        padding-left: 10px;
     }
    .select_fj button{
        border:1px solid #ccc;
        background: #fff;
        color: #666;
    }
    .list_person .van-button{
        height: auto;
        line-height: 30px;
    }
    #dialog .box{
        height: 300px;
    }
    #dialog .btns{
        display: flex;
        justify-content: space-around;
        width:90%;
        margin: 20px auto;
        position:absolute;
        left: 0;right: 0;
        bottom: 0;
    }
    #dialog p,#dialog h3{
        width:90%;
        margin: auto;
    }
    #dialog span{
        color:red;
    }
    #dialog p{
        font-size: 12px;
        color: #999;
        line-height: 30px;
    }
    #dialog .btns button{
        width:100px;
    }
    #dialog .btns button:first-child{
        background: #ddd;
        color: #999;
    }
    #book {
        text-align:center;
    }
    #book img{
        width:40%;
        margin: 20px auto;
    }
    #book .btns{
        display: flex;
        justify-content: space-around;
    }
    #book button{
        margin: 20px auto;
        width:150px;
    }

    .tech_tel input{
        padding: 10px 0;
        line-height: 35px;
        width:60%;
        text-indent: 10px;
        font-size: 16px;
    }
    .tech_tel::before{
        content: "+86";
        font-size: 16px;
        padding-left: 15%;
    }
    .tech_tel::after{
        content: "";
        display: block;
        width:100%;
        height: 1px;
        background: #eee;
    }
</style>
<template>
    <div class="list_person">
        <reply></reply>
        <hr>
        <div class="apply_person" v-if="!tabs">
            <div class="main">
                <div class="list ">
                    <ul>
                        <li> 产品申请人 <span>( 拥有专利者 )</span>  
                        <router-link :to="{name:'select_person',query:{type:'apply'}}">
                            <van-icon class="add" name="add-o" color="#24A1F5"/>
                            </router-link>
                        </li>
                        <li v-for="(v,i) in select_apply_man" :key="i">
                            <i class="index">{{i+1}}</i>
                            <h4>{{v.name}}</h4>
                            <p>{{v.no}}</p>
                            <van-icon name="close" class="icon"  @click="rm_select_data({name:'apply',index:i})"/>
                            <div class="select_fj">
                                <h6>是否费减</h6>
                                <div class="btn"> 
                                    {{v.reduction_fee_status==1?'是':v.reduction_fee_status==0?'否':'未知'}}
                                    <Button v-show="!v.reduction_fee_status" @click="cha_fj(i,v.name,v.no)" :loading="v.loading" >查询</Button>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <hr>
            </div>
            <div class="daiban" @click.stop="dialog=true">
                <van-switch-cell v-model="reduction_fee_proxy" title="申请待办费减辅助"/>
            </div>
            <hr>
            <div id="book">
                <h2 class="box_title">专利委托书</h2>
                <img :src="agreement_file_path">
                <p>专利代理委托书</p>
                <div class="fm_btns">
                    <button><router-link to="book_list">上传</router-link></button>
                    <button><router-link to="book_case">下载专利委托书模板</router-link></button>
                </div>
            </div>
        </div>
        <div class="design_person" v-else>
            <div class="main">
                <div class="list ">
                    <ul>
                        <li> 产品设计人 <span>( 拥有署名权 )</span>  
                        <router-link :to="{name:'select_person',query:{type:'design'}}">
                            <van-icon class="add" name="add-o" color="#24A1F5"/>
                            </router-link>
                        </li>
                        <li v-for="(v,i) in select_design_man" :key="i">
                            <i class="index">{{i+1}}</i>
                            <h4>{{v.name}}</h4>
                            <p>{{v.no}}</p>
                            <van-icon name="close" class="icon"  @click="rm_select_data({name:'design',index:i})"/>
                        </li>
                    </ul>
                </div>
                <hr>
            </div>
            <h2 class="box_title">联系人 <span>( 输入专利联系人号码 )</span></h2>
            <div class="tech_tel">
                <input type="number" v-model="tech_tel" oninput="if(value.length>11)value=value.slice(0,11)">
            </div>
            
        </div>
        <button class="fm_btn" :disabled=' btn_disabled ' @click="submit"> 下一步</button>
        <div id="dialog" v-show="dialog">
            <div class="box">
                <h2 class="title">申请平台代办费减</h2>
                <h3 style="font-size:14px;">申请平台待办费减，请确认所有申请人符合以下条件</h3>
                <p>1.申请人是个人；月收入低于3500元（年4.2万元）</p>
                <p>2.申请人是企业；<span>年纳税所得额</span>（非增值税，非所得税）不超过30万</p>
                <p>否则将因费减不合格导致专利申请<span>失败</span></p>
                <div class="btns">
                    <button @click="reduction_fee_proxy=false,dialog=false">不符合条件</button>
                    <button @click="reduction_fee_proxy=true,dialog=false">确认代办</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { Button,SwitchCell } from 'vant';
import {cha_fj} from '@/assets/api'
import  {mapState,mapMutations } from 'vuex';
export default {
    data(){
        return {
            tech_tel:'',
            tabs:false,
            dialog:false,
            reduction_fee_type:'无',
            agreement_file_path:'',
            reduction_fee_proxy:false
        }
    },
    components:{
        Button,
        "van-switch-cell":SwitchCell
    },
    computed:{
        ...mapState(['select_apply_man','select_design_man','fm']),
        btn_disabled(){
            if(this.tabs)
                return !this.select_design_man.length || !this.tech_tel ||+this.tech_tel.length!=11
            else 
                return !this.select_apply_man.length || !this.$route.params.agreement_file_path
        }
    },
    methods:{
        ...mapMutations(['set_var','rm_select_data']),
        submit(){
            if(!this.tabs){
                this.tabs=true
                return 
            }
            let check=true
            if(this.reduction_fee_proxy){
                this.reduction_fee_type=this.select_apply_man.length>1?'多人':'单人'
            }else{
                for (const el of this.select_apply_man) {
                    if(!el.reduction_fee_status){
                        check=false
                        break
                    }
                }
            }
            if(check){
                this.reduction_fee_type=this.select_apply_man.length>1?'多人':'单人'
            }
            let data={
                reduction_fee_type:this.reduction_fee_type,
                applicant:JSON.stringify(this.select_apply_man),
                designer:JSON.stringify(this.select_design_man),
                tech_tel:this.tech_tel,
                reduction_fee_proxy:+this.reduction_fee_proxy
            }
            this.set_var({var_name:'fm',set_type:'obj',data})
            this.$router.push('pay')
        },
        cha_fj(index,name,no){
            this.$set(this.select_apply_man[index],'loading',true) 
            cha_fj({beianrmc:name,zhengjianhm:no,})
            .then(res=>{
                this.$set(this.select_apply_man[index],'loading',false) 
                if(res){ 

                    this.$set(this.select_apply_man[index],'reduction_fee_status',+(res.data.data.verify===true))
                }else{
                    this.$set(this.select_apply_man[index],'reduction_fee_status',-1)
                }
            })
        }
    },
    watch:{
        tech_tel(){
            if(this.tech_tel&&this.tech_tel.length==11){
                this.set_var({var_name:'fm',set_type:'obj',data:{tech_tel:this.tech_tel}})
            }
        }
    },
    created(){
        this.set_var({var_name:'person_init',data:true})
        this.tech_tel=this.fm.tech_tel
        this.tabs=this.$route.params.tabs
        if(this.$route.params.agreement_file_path)
            this.agreement_file_path=this.host+'/'+this.$route.params.agreement_file_path
        else 
            this.agreement_file_path='static/add_patent_attorney.svg'
    }
    
}
</script>
