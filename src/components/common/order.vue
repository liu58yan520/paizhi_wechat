<style>
.order{
    padding-bottom: 100px;
}
.order .top{
    background: #24A1F5;
    padding: 60px 0;
    text-align: center;
    line-height: 150%;
    color: #fff
}

.order .step {
    width:90%;
    margin: auto;
    padding: 15px 0;
    text-align: center;
    color: #999;
    line-height: 50px;
    display: flex;
    justify-content: space-between;
}
.order .step p{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border:1px solid #999;
    box-sizing: border-box;
    position: relative;
    box-sizing: border-box;
}
.order .step p:nth-child(2),.order .step p:nth-child(3){
    line-height: 18px;
    padding-top: 6px;
}
.order .step p::after{
    content: "";
    width:90%;
    display: block;
    position: absolute;
    right: -100%;
    top: 50%;
    height: 1px;
    background: #999;
}
.order .step p.active{
    color: #24A1F5;
    border-color: #24A1F5;
}
.order .step p.active::after{
    background: #24A1F5;
}
.order .step p:last-child::after{
    content: none;
}
.order .tabs{
    margin: 20px auto 0;
}
.order .van-tabs__nav--card .van-tab.van-tab--active{
        background-color: #ccc !important;
}
.order .van-tabs__nav--card .van-tab{
    color:#999999 !important;
    border-right:1px solid #ccc;
}
.order .van-tab.van-tab--active{
    color: #fff !important;
}
.order .van-tabs__nav--card{
    border:1px solid  #ccc !important;
}
.order .text_list {
    margin: 20px auto 0 ;
}
.order .text_list li{
    padding: 14px 0;
    display: flex;
    width:92%;
    margin: auto;
    justify-content:space-between;
    color: #999;
    border-bottom: 1px solid #eee;
}
.order .text_list h4{
    width:40%;
    color: #333;
}

.order .cost{
    width: 92%;
    margin: auto;
    border-bottom: 1px solid #eee;
}
.order .cost h5,.order .cost .service{
    margin: auto;
    padding: 14px 0;
}
.order .cost .service{
    position: relative;
    width:93%;
}
.order .cost .service::before{
    content: "";
    top: 0;
    position:absolute;
    width:110%;
    height: 1px;
    left: -5%;
    background: #eee;
}
.order .cost span{
    float: right;
}
.order .cost b{
    font-weight: normal;
}
.order .van-collapse::after{
    content: none;
}
.order .van-cell{
    padding: 12px 0;
}
.order .van-collapse-item__content{
    padding: 0;
    width:92%;
    margin: auto;
}
.order .wait_pay .title{
    text-indent: 4%;
    margin: auto;
    padding: 10px 0 0 0;
}
.order .wait_pay h4{
    width:96%;
    color: red;
    padding: 10px 0 4px;
}
.order .wait_pay .van-collapse-item__title{
    padding: 8px 0;
}
.order .wait_pay .van-collapse-item__title::after{
    content: none;
}
.order .wait_pay .van-cell__right-icon{
    padding-top: 11px;
}
.order .color_baohu{
    border-bottom: 1px solid #eee;
    position: relative;
}
.order .color_baohu::before{
    content: "";
    width:92%;
    height: 1px;
    background: #eee;
    margin: auto;
    display: block;
    position: absolute;
    top: 0;
}
.order .tishi{
    margin: 10px 0;
    padding: 9px 0;
    background: #FFAE19;
    color: #fff;
    text-indent: 3%;
}
.btn_bg{
    background: #fff;
    position:fixed;
    padding:10px 0;
    bottom: 0;
    width:100%;
    border-top: 1px solid #eee;
}
.btn_bg button{
    background: #24A1F5;
    color: #fff;
    border-radius: 5px;
    border:0;
    margin: auto;
    width:88%;
    padding: 2vw 0; 
    display: block;
}
.order h6{
    padding: 10px 16px;
}
.order .pics{
    text-align: center;
}
.order .pics .pic{
    width:20%;
    float: left;
    margin:0 0 15px 4%;
}
.order .pics p{
    margin-top: 5px;
}
.order .pics img{
    box-sizing: border-box;
    border:1px solid #aaa;
}
.order .dan_pro{
    margin-top: 10px;
    border-top:1px solid #eee;
}

.order .man .list_man li{
    width:92%;
    margin: auto;
    display: flex;
    border-top: 1px solid #eee;
    padding: 10px 0;
}
.order .man .list_man li i{
    float: left;
    width:20px;
    height: 20px;
    background: #24A1F5;
    text-align: center;
    line-height: 22px;
    color: #fff;
    border-radius: 50%;
    margin: 13px 20px 0 0 ;
    font-style: normal;
}

.order .man .list_man li p{
    color: #999;
    margin-top: 5px;
}
.order .cost>h4{
    position: relative;
}
.order .cost>h4::after{
    content: "";
    width:105%;
    display: block;
    position: absolute;
    bottom: -0;
    left: 0;
    height: 1px;
    background: #eee;
}
</style>
<template>
    <div class="order">
        <div class="top">
            <h4>{{order.title}}</h4>
            <p>案件编号：{{order.id}}</p>
        </div>
        <div class="step" v-if="order.pay">
            <p>审核中</p>
            <p class="active">提交<br>国知局</p>
            <p>等待<br>授权</p>
            <p >已授权</p>
        </div>
        <hr v-if="order.pay">
        <div class="tishi" v-if="!order.pay">
            该项专利申请还未完成付款，点击去付款  >>>
        </div>
        <div class="cost wait_pay" v-if="!order.pay">
            <h4>待支付费用 <span>￥<b>{{count_pay}}</b></span></h4>
            <van-collapse  v-model="cost_active">
                <van-collapse-item>
                    <div slot="title" class="title">代缴行政收费（<span v-show="!order.feijian">未</span>费减）  <span class="money">￥<b>123</b></span></div>
                    <h5 v-for="(v,k) in order.cost.other" :key="k" v-if="v.money!=0"> {{v.name}} <span class="money">￥<b>{{v.money}}</b></span> </h5>
                </van-collapse-item>
            </van-collapse>
            <div class="service">
                服务费<span class="money">￥<b>600</b></span>
            </div>
        </div> 
        <van-tabs v-model="tabs" class="tabs" type="card">
            <van-tab>
                <div slot="title" >基本资料</div>
                <ul class="text_list">
                    <li>
                        <h4>产品用途</h4>
                        <p>如果你无法简洁的表达你的想法，那只说明你还不够了解它。</p>
                    </li>
                    <li>
                        <h4>设计要点</h4>
                        <p>如果你无法简洁的表达你的想法，那只说明你还不够了解它。</p>
                    </li>
                    <li>
                        <h4>其他情况说明</h4>
                        <p>如果你无法简洁的表达你的想法，那只说明你还不够了解它。</p>
                    </li>
                    <li><h4>查看代理委托书</h4>
                    <van-icon name="arrow" />
                    </li>
                </ul>
                <div class="cost" v-if="order.pay">
                    <van-collapse  v-model="cost_active">
                        <van-collapse-item>
                            <div slot="title">已支付费用 <span>￥<b>{{count_pay}}</b></span></div>
                            <h5>代缴行政收费（<span v-show="!order.feijian">未</span>费减）  <span class="money">￥<b>123</b></span></h5>
                            <h5 v-for="(v,k) in order.cost.other" :key="k" v-if="v.money!=0"> {{v.name}} <span class="money">￥<b>{{v.money}}</b></span> </h5>
                        </van-collapse-item>
                        <div class="service">
                            服务费<span class="money">￥<b>600</b></span>
                        </div>
                    </van-collapse>
                </div> 
            </van-tab>
            <van-tab>
                <div slot="title" >照片资料</div>
                    <div class="dan_pro" v-if="order.components.length>0">
                        <h6>产品照片</h6>
                        <div class="pics">
                            <div class="pic" v-for="(v,i) in 7" :key="i">
                                <img src="static/add_pic.svg" alt="">
                                <p>主视图</p>
                            </div>
                            <div class="clear"></div>
                        </div>
                    </div>
                    <h6 class="color_baohu">色彩保护 <van-switch v-model="order.color" size="20px" disabled style="font-size: 20px; float: right;" /></h6>
            </van-tab>
            <van-tab>
                <div slot="title" >人员资料</div>
                <div class="man">
                    <h6>产品申请人</h6>
                    <ul class="list_man">
                        <li v-for="(v,i) in order.apply" :key="i">
                            <i>{{i+1}}</i>
                            <div class="center">
                                <h4>{{v.name}}</h4>
                                <p>{{v.card}}</p>
                            </div>
                        </li>
                    </ul>
                    <hr>
                    <h6>产品设计人</h6>
                    <ul class="list_man">
                        <li v-for="(v,i) in order.design" :key="i">
                            <i>{{i+1}}</i>
                            <div class="center">
                                <h4>{{v.name}}</h4>
                                <p>{{v.card}}</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </van-tab>
        </van-tabs>
        <div class="btn_bg" v-if="!order.pay">
            <button>立即付款</button>
        </div>
    </div>
</template>
<script>
import { Tab, Tabs,Collapse, CollapseItem,Switch  } from 'vant';
export default {
    data(){
        return {
            tabs:0,
            cost_active: [0],
            order:{
                id:123456,
                type:2,
                title:'一种不规则形状的包装盒子',
                color:true,
                pay:true,
                feijian:true,
                cost:{
                    service:600,
                    other:{
                        patent:{ name:'申请费',money:30},
                        year:{ name:'年费',money:60},
                    }
                },
                components:[
                    {
                        main:'',
                        after:'',
                        up:'',
                        down:'',
                        left:'',
                        right:'',
                        _3d:'',
                    },{
                        main:'',
                        after:'',
                        up:'',
                        down:'',
                        left:'',
                        right:'',
                        _3d:'',
                    },
                ],
                apply:[
                    {
                        name:'镇江麻绳泥工大学',
                        card:'32111111111111111426'
                    },{
                        name:'镇江麻绳泥工大学',
                        card:'48464634134684684684'
                    }
                ],
                design:[
                    {
                        name:'汤姆',
                        card:'32111111111119984'
                    },
                    {
                        name:'杰瑞',
                        card:'321111111111146889'
                    }
                ]
            }
        }
    },
    computed:{
        count_pay(){
            let count=0
            for (const item in this.order.cost.other) {
                count+=this.order.cost.other[item].money
                
            }
            return count+=this.order.cost.service
        }
    },
    components:{
        'van-tabs':Tabs,
        'van-tab':Tab,
        "van-collapse":Collapse,
        "van-collapse-item":CollapseItem,
        "van-switch":Switch,
    },
    created(){
        let str;
        if(this.order.type==1)
            str='外观设计' 
        else if(this.order.type==2)
            str='实用新型'    
        else if(this.order.type==3)
            str='发明创造' 
        document.title=str+'专利详情'
    }

}
</script>

