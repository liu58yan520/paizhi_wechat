<style>
    .pay{
         padding-bottom: 100px
    }
    .pay .cost{
        width:90%;
        margin: auto;
    }
    .pay h4{
        padding: 10px 0;
        width:calc(100% - 38px);
        margin: auto;
        border-bottom: 1px solid #eee;
    }
    .pay h5{
        padding: 6px 0;
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
        text-align: right;
    }
    .pay .count em{
        font-style:normal;
        margin-right: 30px;
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

</style>
<template>
    <div class="pay">
        <reply/>
        <hr>

        <h4>费用支付</h4>
        <div class="cost">
            <van-collapse  v-model="cost_active">
                <van-collapse-item>
                    <div slot="title">代缴行政收费 <span class="money" style="padding-right:3px">￥<b>{{official_fee_count}}</b></span></div>
                    <h5 v-for="(v,i) in cost.official_fee" :key="i" v-if="v.price!=0"> {{v.name}} <span class="money">￥<b>{{v.price}}</b></span> </h5>
                </van-collapse-item>
            </van-collapse>
            <div class="srcvice" v-if="cost.service_fee && cost.service_fee.length>0">
                服务费<span class="money">￥<b>{{cost.service_fee[0].price}}</b></span>
            </div>
            <div class="count">
               <em>费用合计</em> <span class="money">￥<b>{{cost.total}}</b></span>
            </div>
        </div>  
        <div class="btn_bottom">
            <button class="fm_btn" @click="pay">保存并支付</button>
        </div>
    </div>
</template>
<script>
import { Collapse, CollapseItem  } from 'vant';
import {cal_case_money,design_add_case,create_wxpay_order,jssdk} from '@/assets/api'
import  {mapState } from 'vuex';
import wx from "weixin-js-sdk"
import vConsole  from 'vconsole'
export default {
    data(){
        return {
            official_fee_count:0,
            cost_active:[],
            cost:{}
        }
    },
    components:{
        "van-collapse":Collapse,
        "van-collapse-item":CollapseItem,
    },
    methods:{
        pay(){
            let fm=this.fm
            fm.total=this.cost.total
            design_add_case(fm).then(res=>{
                if(res){
                    return create_wxpay_order({
                        money:fm.total,
                        case_id:res.data.data.case_id,
                        inner:0,
                    })
                }
                
            }).then(res=>{
                if(res){
                    wx.ready(function(){
                        wx.chooseWXPay( {
                            ...res.data.data.config,
                            success: function (res) {
                                console.log(res);
                            }
                        });  
                    })
                       
                }
            })
            
        }
    },
    computed:mapState(['fm']),
    created(){
        var log= new vConsole ()
        cal_case_money({
            type:'外观设计',
            reduction_fee_type:this.fm.reduction_fee_type,
            is_uncertain_name:0,
            special_field:'',
            has_guarantee_fee:0,
            is_urgent:0,
            urgent_days:0,
            is_pass_on:1,
            is_speed_up:0,
            is_protect:0,
            facilitator_vip:1,
            is_inner:0
        }).then(res=>{
            if(res){
                this.cost=res.data
                res.data.official_fee.forEach(el=>{
                    this.official_fee_count+=el.price
                })
            }
                
        })
        jssdk({list:'chooseWXPay',url:window.location.href})
        .then(res=>{
            if(res){
                let config={}
                config.debug=false
                config.appId=res.data.data.config.appId
                config.nonceStr=res.data.data.config.nonceStr
                config.signature=res.data.data.config.signature
                config.timestamp=res.data.data.config.timestamp
                config.jsApiList=['chooseWXPay']
                wx.config(config)
                wx.error(res=>{
                    this.$toast.fail('平台数据异常');
                });  
            }
        })
            
    }


}
</script>
