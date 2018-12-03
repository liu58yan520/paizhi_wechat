<style scoped>
    .button_nav{
        position: fixed;
        bottom: 0;
        width: 100%;
        text-align: center;
        display: flex;
        justify-content: space-around;
        padding: 3px 0;
        border-top: 1px solid #eee;
        color: #aaa;
    }
    .button_nav svg{
        width:8vw;
        display: block;
        margin: auto;
    }
    .button_nav div{
        width:100%;
        padding: 0 0;
    }
    #dialog{
        position:fixed;
        height: 100%;
        width: 100vh;
        background: rgba(0,0,0,.5);
        left: 0;
        top:0
    }
    #dialog .box{
        position:fixed;
        width:90%;
        height: 300px;
        left: 0;right: 0;
        top:0;bottom: 0;
        margin: auto;
        padding: 5px 0;
        background: #fff;
        border-radius: 6px;
    }
    #dialog .box .title{
        text-align: center;
        font-size: 16px;
        color: #333;
        line-height: 45px;
        margin-bottom: 10px;
        font-weight: 700;
    }
    #dialog .box button{
        width:80%;
        margin: auto;
        display: block;
        position:absolute;
        bottom: 20px;
        left: 0;right: 0;
    }
    #dialog .box input{
        font-size: 14px;
        border-radius: 3px;
        display: block;
        width:80%;
        margin: 0 auto 30px;
        border:1px solid #BDBBBB;
        line-height: 30px;
        text-indent: 50px;
        clear: both;
    }
    #dialog .box input.name{
        background: url(/static/name.svg) no-repeat 10px center ;
        background-size: 30px 30px;
    }
    #dialog .box input.tel{
        background: url(/static/tel.svg) no-repeat 10px center ;
        background-size: 30px 30px;
    }
    #dialog .box input.dun{
        width:40%;
        margin-left: 10%;
        float: left;
        background: url(/static/dun.svg) no-repeat 10px center ;
        background-size: 30px 30px;
    }
    #dialog .box .getcode{
        position:initial;
        border-radius: 20px;
        margin-right: 10%;
        width:30%;
        font-size: 12px;
        float: right;
    }
</style>
<template>
    <div class="index">
        <div class="main">
            <router-view/>
        </div>
        <div class="button_nav">
            <div @click="nav('home')">
<svg viewBox="0 0 56 56">
 <g id="外观设计界面" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="首页" transform="translate(-100.000000, -1250.000000)">
            <g id="TAB" transform="translate(0.000000, 1246.000000)">
                <g id="Bars/Tabbar/_Resources/Inactive" transform="translate(80.000000, 0.000000)">
                    <rect id="Rectangle-2" x="0" y="0" width="96" height="88"></rect>
                    <g id="icon" transform="translate(20.000000, 4.000000)">
                        <rect id="Rectangle-2" x="0" y="0" width="56" height="56"></rect>
                        <g id="1" transform="translate(12.000000, 11.000000)" :stroke=" nav_ment=='home'?'#01C0FF':'#ccc'" stroke-width="2.5">
                            <polygon stroke-linecap="round" points="-2.33831072e-15 33.1428571 5.07530526e-16 13.7530053 16 0 32 13.7530053 32 33.1428571"></polygon>
                            <path d="M9.14285714,26.2857143 L22.8571429,26.2857143" id="Path-6"></path>
                        </g>
                    </g>
                </g>
            </g>
        </g>
    </g>
</svg>
                <span :style="{color:nav_ment=='home'?'#01C0FF':'#ccc'}">首页</span></div>
            <div @click="nav('patent')">
<svg viewBox="0 0 56 56">
    <g id="外观设计界面" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="首页" transform="translate(-347.000000, -1253.000000)">
            <g id="TAB" transform="translate(0.000000, 1246.000000)">
                <rect id="home_bar_patent" fill-rule="nonzero" x="347" y="7" width="56" height="56"></rect>
                <g id="专利" transform="translate(358.000000, 16.000000)" :stroke=" nav_ment=='patent'?'#01C0FF':'#ccc'">
                    <path d="M21.1410253,1.25 L1.25,1.25 L1.25,36.75 L32.75,36.75 L32.75,11.8206787 L21.1410253,1.25 Z" id="Combined-Shape"  stroke-width="2.5"></path>
                    <polyline id="Path-3" :stroke=" nav_ment=='patent'?'#01C0FF':'#ccc'" stroke-width="2.5" points="20.4325228 1.02486581 20.4325228 11.9851951 33.0423437 11.9851951"></polyline>
                    <rect id="Rectangle-6" :fill=" nav_ment=='patent'?'#01C0FF':'#ccc'" x="7" y="10" width="8" height="2.5"></rect>
                    <rect id="Rectangle-6-Copy" :fill=" nav_ment=='patent'?'#01C0FF':'#ccc'" x="7" y="19" width="20" height="2.5"></rect>
                    <rect id="Rectangle-6-Copy-3" :fill=" nav_ment=='patent'?'#01C0FF':'#ccc'" x="7" y="28" width="20" height="2.5"></rect>
                </g>
            </g>
            <text id="专利" font-family="PingFangSC-Regular, PingFang SC" font-size="18" font-weight="normal" fill="#AAAAAA">
                <tspan x="357" y="1325">专利</tspan>
            </text>
        </g>
    </g>
</svg>
                <span :style="{color:nav_ment=='patent'?'#01C0FF':'#ccc'}">专利</span></div>
            <div @click="nav('me')">
            <svg viewBox="0 0 56 56">
                <g id="外观设计界面" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="首页" transform="translate(-594.000000, -1250.000000)">
                        <g id="TAB" transform="translate(0.000000, 1246.000000)">
                            <g id="Bars/Tabbar/_Resources/Inactive" transform="translate(574.000000, 0.000000)">
                                <rect id="Rectangle-2-Copy-4" x="0" y="0" width="96" height="88"></rect>
                                <g id="icon" transform="translate(20.000000, 4.000000)">
                                    <g id="info" transform="translate(12.000000, 10.000000)" :stroke=" nav_ment=='me'?'#01C0FF':'#ccc'" stroke-width="2.5">
                                        <circle id="Oval-2" cx="16" cy="14.8571429" r="14.8571429"></circle>
                                        <path d="M0,36.5714286 L32,36.5714286" id="Path-6"></path>
                                    </g>
                                    <rect id="Rectangle-2-Copy-4" x="0" y="0" width="56" height="56"></rect>
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </svg>
            <span :style="{color:nav_ment=='me'?'#01C0FF':'#ccc'}">我的</span></div>
        </div>
        <div id="dialog" v-if="userinfo_model">
            <div class="box">
                <h3 class="title">完善资料</h3>
                <input class="name" type="text" v-model="user.name"     placeholder="请输入姓名" >
                <input class="tel"  type="text" v-model="user.tel"      placeholder="请输入电话号码">
                <div>
                    <input class="dun"  type="text" v-model="user.verify"   placeholder="请输入验证码">
                    <button :style="{background:validate_txt=='获取验证码'?'#24A1F5':'#999'}" class="getcode" @click="getCode">{{validate_txt}}</button>
                </div>
            <button @click="bind_wx" >保存</button>
            </div>
        </div>

    </div>

</template>
<script>
import { Field } from 'vant';
import  {mapState } from 'vuex';
import {sendSMS,wechat_bind,userinfo_wechat,applicant,designer} from "@/assets/api"
export default {
    data(){
        return {
            validate_txt:'获取验证码',
            userinfo_model:false,
            nav_ment:"home",
            user:{}
            
        }
    },
    computed:mapState(["all_design_man",'all_apply_man']),
    components:{
        'van-field':Field,
    },
    methods:{
        nav:function(str){
            this.nav_ment=str
            this.$router.push({path:'/'+str})
        },
        GetUrlParam(paraName) {
            var url = document.location.toString();
            var arrObj = url.split("?");
            if (arrObj.length > 1) {
            　　var arrPara = arrObj[1].split("&");
            　　var arr;
            　　for (var i = 0; i < arrPara.length; i++) {
            　　　　arr = arrPara[i].split("=");

            　　　　if (arr != null && arr[0] == paraName) {
            　　　　　　return arr[1];
            　　　　}
            　　}
            　　return "";
            }
            else 
            return "";
            
　　　　},
        getCode(){
            if(!isNaN(this.validate_txt)||this.user.tel.length!=11)  return 
            this.validate_txt=60
            sendSMS({tel:this.user.tel,sence:'bind'})
            .then(res=>{
                if(res){
                    let msg_status=setInterval(()=>{
                    if(this.validate_txt<2){
                        this.validate_txt='获取验证码'
                        clearInterval(msg_status)
                    }else 
                        this.validate_txt--
                    },1000)
                }else{
                    this.validate_txt='获取验证码'
                }
            })
        },
        bind_wx(){
            wechat_bind(this.user)
            .then(res=>{
                if(res.data.data.client || res.data.data.wxuser){
                    this.userinfo_model=false 
                    localStorage.setItem('client_id',res.data.data.client.id)
                    localStorage.setItem('face',res.data.data.wxuser.headimgurl)
                    localStorage.setItem('nicename',res.data.data.wxuser.nicename)
                }
                
            })
        }
    },
    created(){
        let openid= localStorage.getItem('openid') || this.GetUrlParam('openid') 
        openid='oCIz-0oog8ir8KfZteW82j156rTE'
        if(openid){
            let str_num=openid.indexOf('#')
            if(str_num>-1)
                openid=openid.substr(0,str_num)
                if( !localStorage.getItem('client_id') ){
                    userinfo_wechat().then(res=>{
                        if(res.data.data.info && res.data.data.wxuser ){
                            localStorage.setItem('client_id',res.data.data.info.id)
                            localStorage.setItem('face',res.data.data.wxuser.headimgurl)
                            localStorage.setItem('nicename',res.data.data.wxuser.nickname)
                        }else{
                            this.userinfo_model=true
                        }
                    })
                }
                localStorage.setItem('openid',openid)
        }else{
            self.location="http://test.pizhigu.com/index/php/pizhi/client/wechat_auth?redirect_url="+window.location.href
        }
        applicant().then(res=>{
            if(res)
                 this.$store.commit('add_all_data',{name:'apply',data:res.data.data.list })
            })
        designer().then(res=>{
            if(res)
                this.$store.commit('add_all_data',{name:'design',data:res.data.data.list })
        })
        this.nav('home')
    }
}
</script>
