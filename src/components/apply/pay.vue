<style>
    .pay{
         padding-bottom: 100px
    }
    .pay .weitu_case{
        width:30vw;
        margin: 10vw auto 0;
    }
    .pay h3{
        text-align: center;
        font-size: 4vw;
        padding: 2vw 0 3vw;
        background: transparent;
    }
    .pay .btns{
        width:75%;
        margin: auto;
        position: initial;
        display: flex;
        justify-content: space-between;
        padding-bottom: 20px;
        border-top: 0;
    }
    .pay .btns button{
        border:0;
        color: #fff;
        background: #24A1F5;
        width:45%;
        border-radius: 5px;
        padding: 6px 0;
        font-size: 4vw;
    }
    .pay .feijian{
        padding: 10px 16px;
        font-size: 14px;
    }
    .pay .feijian p{
        float: left;
    }
    .pay .cost{
        width:90%;
        margin: auto;
    }
    .pay h4{
        padding: 10px 0;
        font-size: 14px;
        width:calc(100% - 38px);
        margin: auto;
        border-bottom: 1px solid #eee;
    }
    .pay h5{
        padding: 6px 0;
        font-size: 12px;
    }
    .pay .money{
        float: right;
        margin-right: 15px;
    }
    .pay .money b{
        font-weight: normal;
    }
 
    .pay .van-collapse::after,.pay .van-collapse-item__title::after{
        content: none;
    }
    .pay .van-collapse-item__content{
        padding: 0 0 10px 0;
        width:90%;
        margin: auto;
        
    }
    .pay .srcvice{
        box-sizing: border-box;
        width:90%;
        margin: auto;
        font-size: 14px;
        padding: 10px 0;
        position: relative;
    }
    .pay .srcvice::before{
        content: '';
        display: block;
        width:110%;
        left: -5%;
        height: 1px;
        background: #eee;
        position:absolute;
        top: 0;
    }
    .pay .srcvice::after{
        content: '';
        display: block;
        width:110%;
        left: -5%;
        height: 1px;
        background: #eee;
        position:absolute;
        bottom: 0;
    }

    .pay .van-cell__right-icon{
        position: absolute;
        width: 100px;
        height: 100px;
        right: -80px;
        top: 20%;
    }
    .pay .count{
        padding: 10px 0; 
        width:90%;
        margin: auto;
        font-size: 14px;
        text-align: right;
    }
    .pay .count em{
        font-style:normal;
        margin-right: 30px;
        font-size: 15px;

    }
    .pay .btn_bottom .fm_btn{
        position: initial;
        margin: 2vw auto 0;
    }
    .pay>.btn_bottom{
        border-top:1px solid #eee;
        position: fixed;
        padding: 6px 0;
        bottom: 0;
        width:100%;
        background: #fff;
    }
    .pic_case{
        position: fixed;
        width:100%;
        height: 100%;
        top: 0;
        background: #333;
        z-index: 101;
        overflow: hidden;
    }
    .van-uploader{
        position: absolute;
        bottom: 15px;
        left: 0;right: 0;
    }
</style>
<template>
    <div class="pay">
        <reply/>
        <hr>
        <img :src="upload_case_img" class="weitu_case" @click="upload_case_alert=true">
        <h3>专利代理委托书</h3>
        <div class="btns">
            <button @click="upload_case_alert=true">上传</button>
            <button><router-link :to="{name:'book_list',params:{select:true}}">去列表选择</router-link></button>
        </div>
        <hr>
        <div class="feijian">
            <p>已有费减备案</p>
            <van-switch v-model="feijian" style="float:right" size="20px" @change.once=" feijian_alert "/>
            <div class="clear"></div>
        </div>
        <hr>
        <h4>费用支付</h4>
        <div class="cost">
            <van-collapse  v-model="cost_active">
                <van-collapse-item>
                    <div slot="title">代缴行政收费（<span v-show="!feijian">未</span>费减）  <span class="money" style="padding-right:3px">￥<b>{{count_pay}}</b></span></div>
                    <h5 v-for="(v,k) in cost.other" :key="k" v-if="v.money!=0"> {{v.name}} <span class="money">￥<b>{{v.money}}</b></span> </h5>
                </van-collapse-item>
            </van-collapse>
            <div class="srcvice">
                服务费<span class="money">￥<b>600</b></span>
            </div>
            <div class="count">
               <em>费用合计</em> <span class="money">￥<b>{{cost.service+count_pay }}</b></span>
            </div>
        </div>  
        <div class="btn_bottom">
            <button class="fm_btn">保存并支付</button>
        </div>
        
        <div class="pic_case" v-show="upload_case_alert">
            <img src="static/view_weituoshu.png" alt="">
            <van-uploader :after-read="onUpload_case" >
                <button id='case_pic_btn'>我知道了</button>
            </van-uploader>
        </div>
    </div>
</template>
<script>
import store from "@/vuex/store"
import { Switch,Collapse, CollapseItem,Uploader,Dialog  } from 'vant';
export default {
    data(){
        return {
            feijian:true,
            cost_active:[],
            upload_case_img:'static/add_patent_attorney.png',
            upload_case_alert:false,
            cost:{
                service:600,
                other:{
                    patent:{ name:'申请费',money:0},
                    year:{ name:'年费',money:0},
                }
            }
        }
    },
    components:{
        "van-switch":Switch,
        "van-collapse":Collapse,
        "van-collapse-item":CollapseItem,
        "van-uploader":Uploader
    },
    methods:{
        onUpload_case(data){
            this.upload_case_img=data.content
            this.upload_case_alert=false
        },
        feijian_alert(){
            Dialog.alert({
                title:'费减说明',
                message: '申请人年收入4.2万或企业年纳税所得额低于30万，享受部分行政收费减免。',
                confirmButtonText:"我知道了"
            });
        }
    },
    computed:{
        count_pay:function(){
            let pay=0;
            let obj=this.cost.other
            if(this.feijian)
                obj.patent.money=this.$store.state.select_apply_man.length>1?75:150;
            else 
                obj.patent.money=500
            for (const k in this.cost.other) {
                pay+=obj[k].money
            }
             return pay
        }

    },store
}
</script>
