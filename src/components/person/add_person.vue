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
        float: left;
        margin: 2px 30px 0  0;
    }
     .add_person .public p{
         float: right;
         color: #999;
         margin-top: 5px;
     }
     .add_person .van-cell-group::after{
         content: none;
     }
     .add_person .case{
         padding: 10px 0;
         width:93%;
         margin: auto;
         border-bottom: 1px solid #eee;
     }
     .add_person .case>span{
         float: left;
         width:90px;
         color: #333;
     }

</style>
<template>
    <div class="add_person">
        <form :model='formdata'>
            <van-cell-group>

                <div class="case" v-if="$route.query.type=='apply'" @click="show=true,type_model=true">
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
                    v-model="formdata.no"
                    label="证件号码"
                    :placeholder="$route.query.type=='apply'?'输入社会统一信用代码或身份证号码':'请输入身份证号码'"
                />
                <div class="case" v-if="$route.query.type=='design'" @click="show=true,nationality_model=true">
                    <van-icon name="arrow" style="float:right;margin-top:3px" />
                    <span>国籍</span>
                    <p :style ="{'color':formdata.nationality?'#333':'#999' }" >{{formdata.nationality?formdata.nationality:'请选择国籍'}}</p>
                    <div class="clear"></div>
                </div>
                <div class="case" v-if="$route.query.type=='apply'" @click="city_show=true">
                    <span>申请地址</span>
                    <p :style ="{'color':formdata.city?'#333':'#999' }" >{{formdata.city_name?formdata.city_name:'所在地区'}}</p>
                    <div class="clear"></div>
                </div>
                <van-field
                    v-if="$route.query.type=='apply'"
                    v-model="formdata.address"
                    type="textarea"
                    placeholder="详细地址：门牌号、小区等"
                    rows="2"
                    autosize
                    style="padding-left:102px;"
                />
                <van-popup v-model="city_show" overlay style="width:100%;">
                    <van-area :area-list="city" @cancel="city_show=false" @confirm="city_select" :value="formdata.city_code"/>
                </van-popup>
                
                <div class="public" v-if="$route.query.type=='design'">
                    <h4>公布姓名</h4>
                    <van-switch v-model="formdata.public" size="22px" />
                    <p> <span v-show="!formdata.public">不</span>公布姓名</p>
                </div>
                <button class="fm_btn" @click.prevent="fm_submit(formdata)" :disabled='!check_empty' > 保存 </button>
            </van-cell-group>
        </form>
        <div class="picker_bg" ref="picker_bg" v-show="show">
            <van-picker
                v-show="nationality_model"
                show-toolbar
                title="国籍"
                :columns="nationality"
                @confirm="onNationality"
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
import {add_applicant,add_designer} from "@/assets/api"
import  {mapState } from 'vuex';
import city from "@/city"
export default {
    data(){
        return{
            show:false,
            city_show:false,
            nationality_model:false,
            type_model:false,
            nationality: ['中国(CH)', '宁波', '温州', '嘉兴', '湖州'],
            type_data:['学校','科研机构','企业','事业单位','个人'],
            city:city,
            formdata:{
                reduction_fee_status:0,
                agreement_file_id:0,
            }
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
         onNationality( value) {
            this.$set(this.formdata,"nationality",value)
            this.show=false
            this.nationality_model=false
        },
        onType(value){
            this.$set(this.formdata,"type",value)
            this.show=false
            this.type_model=false
        },
        fm_submit(data){
            this.$store.commit('add_all_data',{name:this.$route.query.type,data:data})
            if(this.$route.query.type=='apply'){
                add_applicant(data).then(res=>{
                    if(res){
                        this.$toast('添加申请人成功')
                        this.$router.back()
                    }
                })
            }else{
                add_designer(data).then(res=>{
                    if(res){
                        this.$toast('添加设计人成功')
                        this.$router.back()
                    }
                })
            }
           
        },
        city_select(data){   //地址选择
           this.formdata.province   =data[0].code
           this.formdata.city       =data[1].code
           this.formdata.country    =data[2].code
           this.formdata.city_name=data[0].name+' '+data[1].name+' '+data[2].name
           this.city_show=false
        }

    },
    computed:{
        ...mapState(["all_apply_man",'all_design_man']),
        check_empty(){
            if(this.$route.query.type=='apply'){
                if(this.formdata.type && this.formdata.name && this.formdata.no && this.formdata.city && this.formdata.address)
                    return true
            }else{
                if(this.formdata.name && this.formdata.no && this.formdata.nationality)
                    return true
            }
        }
    },
    created(){
        document.title=this.$route.query.type=='apply'? "添加申请人":"添加设计人"
        let person_index=this.$route.query.person_index
        if(person_index>-1){
           this.formdata= this.$route.query.type?this.all_apply_man[person_index]:this.all_design_man[person_index]
           this.formdata.city_code=this.formdata.province+' '+this.formdata.city+' '+this.formdata.country
        }
    }
}
</script>

