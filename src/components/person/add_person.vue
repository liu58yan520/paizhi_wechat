<style>
    .add_person .picker_bg{
        position: fixed;
        top: 0;
        height: 100%;
        background: #fff;
        width:100%;
        z-index: 10;
    }
    .add_person .public{
        padding: 10px 14px;
        border-bottom: 1px solid #eee;
    }
    .add_person .public h4{
        font-size: 15px;
        float: left;
        margin: 2px 30px 0  0;
    }
     .add_person .public p{
         float: right;
         color: #999;
         font-size: 13px;
         margin-top: 5px;
     }
     .add_person .van-cell-group::after{
         content: none;
     }
     .add_person .case{
         padding: 10px 0;
         width:93%;
         font-size: 14px;
         margin: auto;
         border-bottom: 1px solid #eee;
     }
     .add_person .case>span{
         float: left;
         width:90px;
         color: #333;
         font-size: 14px;
     }

</style>
<template>
    <div class="add_person">
        <form :model='formdata'>
            <van-cell-group>

                <div class="case" v-if="type" @click="show=true,type_model=true">
                    <van-icon name="arrow" style="float:right;margin-top:3px;color:#999;" />
                    <span>申请人类型</span>
                    <p :style ="{'color':formdata.type?'#333':'#999' }" >{{formdata.type?formdata.type:'请选择类型'}}</p>
                    <div class="clear"></div>
                </div>
                <van-field
                    v-model="formdata.name"
                    label="姓名"
                    placeholder="请输入姓名"
                />
                <van-field
                    v-model="formdata.card"
                    label="证件号码"
                    :placeholder="type?'输入社会统一信用代码或身份证号码':'请输入身份证号码'"
                />
                <div class="case" v-if="!type" @click="show=true,country_model=true">
                    <van-icon name="arrow" style="float:right;margin-top:3px" />
                    <span>国籍</span>
                    <p :style ="{'color':formdata.country?'#333':'#999' }" >{{formdata.country?formdata.country:'请选择国籍'}}</p>
                    <div class="clear"></div>
                </div>
                <div class="case" v-if="type" @click="city_show=true">
                    <span>申请地址</span>
                    <p :style ="{'color':formdata.city?'#333':'#999' }" >{{formdata.city?formdata.city:'所在地区'}}</p>
                    <div class="clear"></div>
                </div>
                <van-field
                    v-if="type"
                    v-model="formdata.address"
                    type="textarea"
                    placeholder="详细地址：门牌号、小区等"
                    rows="2"
                    autosize
                    style="padding-left:102px;"
                />
                <van-popup v-model="city_show" overlay style="width:100%;">
                    <van-area :area-list="city" @cancel="city_show=false" @confirm="city_select"/>
                </van-popup>
                
                <div class="public" v-if="!type">
                    <h4>公布姓名</h4>
                    <van-switch v-model="formdata.public" size="22px" />
                    <p> <span v-show="!formdata.public">不</span>公布姓名</p>
                </div>
                <button class="fm_btn" @click.prevent="fm_submit(formdata)" :disabled='!check_empty' > 保存 </button>
            </van-cell-group>
        </form>
        <div class="picker_bg" ref="picker_bg" v-show="show">
            <van-picker
                v-show="country_model"
                show-toolbar
                title="国籍"
                :columns="country"
                @confirm="onCountry"
            />

            <van-picker
                v-show="type_model"
                show-toolbar
                title="类型"
                :columns="type_data"
                @confirm="onType"
            />
        </div>

    </div>
</template>
<script>
import { Field,Picker,Switch,Area,Popup } from 'vant';
import store from "@/vuex/store"
import city from "@/city"
export default {
    data(){
        return{
            show:false,
            city_show:false,
            country_model:false,
            type_model:false,
            type:1,
            country: ['中国(CH)', '宁波', '温州', '嘉兴', '湖州'],
            type_data:['学校','科研机构','企业','事业单位','个人'],
            city:city,
            formdata:{  }
        }
    },
    components:{
        'van-field':Field,
        'van-picker':Picker,
        "van-switch":Switch,
        "van-area":Area,
        "van-popup":Popup
    },

    methods:{
         onCountry( value) {
            // this.formdata.country=value
            this.$set(this.formdata,"country",value)
            this.show=false
            this.country_model=false
        },
        onType(value){
            this.$set(this.formdata,"type",value)
            this.show=false
            this.type_model=false
        },
        fm_submit(data){
            let name=this.type?"apply":'design'
            this.$store.commit('add_all_data',{name:name,data:data})
            this.$router.go(-1)
        },
        city_select(data){
           this.$set(this.formdata,"city",data[0].name+'  '+data[1].name+'  '+data[2].name)
           this.city_show=false
        }

    },
    computed:{
        check_empty(){
            if(this.type){
                if(this.formdata.type && this.formdata.name && this.formdata.card && this.formdata.city && this.formdata.address)
                    return true
            }else{
                if(this.formdata.name && this.formdata.card && this.formdata.country)
                    return true
            }
        }
    },
    created(){
        if(this.$route.params.type!==0 && this.$route.params.type!==1)
            this.$router.push({name:'list_person'})
        this.type=this.$route.params.type
        document.title=this.type? "添加申请人":"添加设计人"
        
    },store
}
</script>

