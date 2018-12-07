<style>
    .add_product .txt{
        padding-bottom: 100px;
    }
    .add_product .van-tabs__wrap{
        width:60%;
        margin: auto;
    }
    .add_product .pro_tabs>div::after{
        content: none;
    }
    .add_product .van-tabs__nav--card .van-tab.van-tab--active{
        background-color: #ccc !important;
    }
    .add_product .van-tabs__nav--card .van-tab{
        color:#999999 !important;
        border:0  !important;
    }
    .add_product .van-tab.van-tab--active{
        color: #fff !important;
    }
    .add_product .van-tabs__nav--card{
        border:1px solid  #ccc !important;
    }
    .add_product .pic_box{
        text-align: center;
        width:90%;
        margin: auto;
        color: #999999;
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
    }
    .add_product  .pic_box .case_pic{
        margin: 20px 3% 20px 0;
        width:22%;
    }
    .add_product .pic_box .case_pic img{
        height: 20vw;
        box-sizing: border-box;
        border:1px solid #aaa;
    }
    .add_product .pic_box .case_pic p{
        margin-top: 5px;
    }
    .add_product .diy_case_pic{
        width:100%;
        height: 100%;
        position: fixed;
        z-index: 999;
        background: #000;
    }
    .add_product .diy_case_pic .case_pic{
        width:100%;
        height: 100vw;
        position: absolute;
        right: 0;left: 0;top: 0;bottom: 0;
        margin: auto;
    }
    .add_product .van-uploader{
        position: absolute;
        bottom: 15px;
        left: 0;right: 0;
    }

    .add_product .switch{
        padding: 10px 15px;
    }
    .add_product .switch p{
        padding-top:8px;
        display: block;
        float: left;
        margin-right: 32px;
    }
    .add_product .switch p:nth-child(2){
        color: #999;
        padding: 8px 0 0 0;
        box-sizing: border-box;
    }
    .add_product .van-switch{
        float: right;
    }
    .add_product .bottom{
        clear: both;
        position: relative;
    }
    .add_product .bottom::before{
        content: "";
        width:100%;
        height: 1px;
        background: #eee;
        position:absolute;
        top: 3%;

    }

    .add_product .fm_btn{
        margin-top: 15px;
        position: initial;
    }
   .add_product .upload_pro::after{
       content: none;
   }
    /* .add_product .van-field:last-child::after{
        position: absolute;
        display: block;
        content: "";
        background: #eee;
        bottom: 0;
        width:90%;
        margin: auto;
        left: 0;right: 0;
        height: 1px;
        transform: translateX(0);
    } */
    .add_product h3{
         padding: 10px 15px;
    }
    .add_product .components>div{
        clear: both;
        position: relative;
    }
    .add_product .components>div::before{
        content: " ";
        position: absolute;
        width:90%;
        top: 0;
        height: 1px;
        left: 0;right: 0;
        margin: auto;
        background: #eee;
    }
    .add_product .van-field__control:disabled{
         color: #555;
     }
    .add_product .explain{
         border-bottom: 1px solid #eee;
         width:94%;
         margin: auto;
         padding:10px 0;
     }
    .add_case_item{
        clear: both;
        padding: 10px 16px;
        border-top: 1px solid #eee;
        border-bottom: 1px solid #eee;
    }
    .add_case_item>i{
        float: right;
    }
    .add_product .components .item h3 i{
        float: right;
        margin-right: 3%;
    }
    .add_product .diy_case_pic .close{
        position:fixed;
        top: 20px;
        right: 20px;
        color: #fff;
        font-size: 30px;
    }
</style>

<template>
    <div class="add_product"> 
        <div class="diy_case_pic" v-show="case_pic_show">
            <div class="close" @click="case_pic_show=false"><van-icon name="close" /></div>
            <img :src=" 'static/case_'+case_pic_name+'.jpg' " class="case_pic">
            <van-uploader :after-read="onUpload_case" >
                <button id='case_pic_btn'>我知道了</button>
            </van-uploader>
        </div>
        <!-- 添加产品外观设计 -->
        <reply></reply>
        <hr>
        <form :model='formItem'>
            <van-cell-group>
                <van-field
                    v-model="formItem.name"
                    label="产品名称"
                    placeholder="请输入您的产品名称"
                />

                <van-field
                    v-model="formItem.desp"
                    type="textarea"
                    label="产品用途"
                    placeholder="如：本外观设计产品用于室外照明"
                />
                <van-field
                    v-model="formItem.key_points"
                    label="设计要点"
                    placeholder="如：照明"
                />
            </van-cell-group>
        <hr>
        <div class="update_img">
            <van-cell-group class="txt">
             <van-field
                class="upload_pro"
                value="(实物图、照片、线稿图三选一)"
                label="上传产品"
                disabled
            />
            <van-tabs v-model="active" class="pro_tabs" type="card">
                
                <van-tab class="pro_tabs_item" >
                    <div slot="title" >单一产品</div>
                    <div class="pic_box" >
                        <div class="case_pic" @click="upload_case('主视图',0)">
                            <img :src="formItem.alonePics['主视图']?formItem.alonePics['主视图']:'static/add_pic.svg'">
                            <p>主视图</p>
                            <input type="hidden" :value="formItem.alonePics['主视图']">
                        </div>
                        <div class="case_pic" @click="upload_case('后视图',0)">
                            <img :src="formItem.alonePics['后视图']?formItem.alonePics['后视图']:'static/add_pic.svg'">
                            <p>后视图</p>
                            <input type="hidden" :value="formItem.alonePics['后视图']">
                        </div>
                        <div class="case_pic" @click="upload_case('俯视图',0)">
                            <img :src="formItem.alonePics['俯视图']?formItem.alonePics['俯视图']:'static/add_pic.svg'">
                            <p>俯视图</p>
                            <input type="hidden" :value="formItem.alonePics['俯视图']">
                        </div>
                        <div class="case_pic" @click="upload_case('仰视图',0)">
                            <img :src="formItem.alonePics['仰视图']?formItem.alonePics['仰视图']:'static/add_pic.svg'">
                            <p>仰视图</p>
                            <input type="hidden" :value="formItem.alonePics['仰视图']">
                        </div>
                        <div class="case_pic" @click="upload_case('左视图',0)">
                            <img :src="formItem.alonePics['左视图']?formItem.alonePics['左视图']:'static/add_pic.svg'">
                            <p>左视图</p>
                            <input type="hidden" :value="formItem.alonePics['左视图']">
                        </div>
                        <div class="case_pic" @click="upload_case('右视图',0)">
                            <img :src="formItem.alonePics['右视图']?formItem.alonePics['右视图']:'static/add_pic.svg'">
                            <p>右视图</p>
                            <input type="hidden" :value="formItem.alonePics['右视图']">
                        </div>
                        <div class="case_pic" @click="upload_case('立体图',0)">
                            <img :src="formItem.alonePics['立体图']?formItem.alonePics['立体图']:'static/add_pic.svg'">
                            <p>立体图</p>
                            <input type="hidden" :value="formItem.alonePics['立体图']">
                        </div>
                    </div>
                </van-tab>


                <van-tab class="pro_tabs_item">
                    <div slot="title">套装产品</div>
                    <div class="completePics">
                        <div class="Whole">
                            <h3>整体照片</h3>
                            <div class="pic_box" >
                                <div class="case_pic" @click="upload_case('主视图',1)">
                                    <img :src="formItem.Whole['主视图']?formItem.Whole['主视图']:'static/add_pic.svg'">
                                    <p>主视图</p>
                                    <input type="hidden" :value="formItem.Whole['主视图']">
                                </div>
                                <div class="case_pic" @click="upload_case('后视图',1)">
                                    <img :src="formItem.Whole['后视图']?formItem.Whole['后视图']:'static/add_pic.svg'">
                                    <p>后视图</p>
                                    <input type="hidden" :value="formItem.Whole['后视图']">
                                </div>
                                <div class="case_pic" @click="upload_case('俯视图',1)">
                                    <img :src="formItem.Whole['俯视图']?formItem.Whole['俯视图']:'static/add_pic.svg'">
                                    <p>俯视图</p>
                                    <input type="hidden" :value="formItem.Whole['俯视图']">
                                </div>
                                <div class="case_pic" @click="upload_case('仰视图',1)">
                                    <img :src="formItem.Whole['仰视图']?formItem.Whole['仰视图']:'static/add_pic.svg'">
                                    <p>仰视图</p>
                                    <input type="hidden" :value="formItem.Whole['仰视图']">
                                </div>
                                <div class="case_pic" @click="upload_case('左视图',1)">
                                    <img :src="formItem.Whole['左视图']?formItem.Whole['左视图']:'static/add_pic.svg'">
                                    <p>左视图</p>
                                    <input type="hidden" :value="formItem.Whole['左视图']">
                                </div>
                                <div class="case_pic" @click="upload_case('右视图',1)">
                                    <img :src="formItem.Whole['右视图']?formItem.Whole['右视图']:'static/add_pic.svg'">
                                    <p>右视图</p>
                                    <input type="hidden" :value="formItem.Whole['右视图']">
                                </div>
                                <div class="case_pic" @click="upload_case('立体图',1)">
                                    <img :src="formItem.Whole['立体图']?formItem.Whole['立体图']:'static/add_pic.svg'">
                                    <p>立体图</p>
                                    <input type="hidden" :value="formItem.Whole['立体图']">
                                </div>
                            </div>
                        </div>
                        <div class="components" ref="components">
                            <div class="item" v-for="(v,i) in formItem.components" :key='i' >
                                 <h3>组件套装 {{i+1}}  <van-icon name="close" color='#999' @click="rm_item_pics(i)" v-if="i!=0"/></h3>
                                <!-- <h3>组件套装 {{i+1 | str_china}}  <van-icon name="close" color='#999' @click="rm_item_pics(i)" v-if="i!=0"/></h3> -->
                                <div class="pic_box" >
                                    <div class="case_pic" @click="upload_case('主视图',2,i)">
                                        <img :src="formItem.components[i]['主视图']?formItem.components[i]['主视图']:'static/add_pic.svg'">
                                        <p>主视图</p>
                                        <input type="hidden" :value="formItem.components[i]['主视图']">
                                    </div>
                                    <div class="case_pic" @click="upload_case('后视图',2,i)">
                                        <img :src="formItem.components[i]['后视图']?formItem.components[i]['后视图']:'static/add_pic.svg'">
                                        <p>后视图</p>
                                        <input type="hidden" :value="formItem.components[i]['后视图']">
                                    </div>
                                    <div class="case_pic" @click="upload_case('俯视图',2,i)">
                                        <img :src="formItem.components[i]['俯视图']?formItem.components[i]['俯视图']:'static/add_pic.svg'">
                                        <p>俯视图</p>
                                        <input type="hidden" :value="formItem.components[i]['俯视图']">
                                    </div>
                                    <div class="case_pic" @click="upload_case('仰视图',2,i)">
                                        <img :src="formItem.components[i]['仰视图']?formItem.components[i]['仰视图']:'static/add_pic.svg'">
                                        <p>仰视图</p>
                                        <input type="hidden" :value="formItem.components[i]['仰视图']">
                                    </div>
                                    <div class="case_pic" @click="upload_case('左视图',2,i)">
                                        <img :src="formItem.components[i]['左视图']?formItem.components[i]['左视图']:'static/add_pic.svg'">
                                        <p>左视图</p>
                                        <input type="hidden" :value="formItem.components[i]['左视图']">
                                    </div>
                                    <div class="case_pic" @click="upload_case('右视图',2,i)">
                                        <img :src="formItem.components[i]['右视图']?formItem.components[i]['右视图']:'static/add_pic.svg'">
                                        <p>右视图</p>
                                        <input type="hidden" :value="formItem.components[i]['右视图']">
                                    </div>
                                    <div class="case_pic" @click="upload_case('立体图',2,i)">
                                        <img :src="formItem.components[i]['立体图']?formItem.components[i]['立体图']:'static/add_pic.svg'">
                                        <p>立体图</p>
                                        <input type="hidden" :value="formItem.components[i]['立体图']">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h4 class="add_case_item" @click="add_case_item">添加套装组件<van-icon name="add-o" style="font-size:20px;color:#24A1F5" /></h4>
                  
                    </div>

                </van-tab>
            </van-tabs>
            <div class="bottom">
                <div class="switch"><p>色彩保护 </p><p>包含产品的色彩</p><van-switch v-model="formItem.is_color_protection" size="25px" style="margin-top:3px"/><div class="clear"></div></div> 
                <hr>
                <van-field
                    v-model="formItem.explain"
                    label="其他情况说明"
                    type="textarea"
                    placeholder="如有其他内容需要补充说明，请在此处填写"
                    class="explain"
                    rows="3"
                    border
                    :autosize="{maxHeight: 100, minHeight: 50}"
                />
            </div>

            <button class="fm_btn" @click.prevent="handleSubmit(formItem)" :disabled="chenk_empty" >提交</button>
            </van-cell-group>
        </div>
            
        </form>
        
    </div>
</template>
<script>
import { Field,Tab, Tabs,Uploader,Switch  } from 'vant';
import {pubUpdate} from '@/assets/api'
import  {mapMutations } from 'vuex';
export default {
    data(){
        return {
            formItem:{
                name:'',
                desp:'',
                key_points:'',
                alonePics:{},
                is_whole:0,  //单一为0  套件里整体为1  套装为2
                Whole:{},
                is_color_protection:false,
                attachment:[],
                suit:{
                    '套装':[],
                    "整体":[],
                },
                components:[
                    {
                    "主视图":'',
                    "后视图":'',
                    "俯视图":'',
                    "仰视图":'',
                    "左视图":'',
                    "右视图":'',
                    "立体图":'',
                    }
                ],
            },
            active:0,
            case_pic_show:false,
            case_pic_name:'主视图',
            components_index:0
         }
    },
    components:{
        // reply,
        'van-field':Field,
        'van-tabs':Tabs,
        'van-tab':Tab,
        "van-uploader":Uploader,
        'van-switch':Switch,
        

    },
    filters:{
        str_china:function(val){
            let strIns = '', chnStr = '';
            let unitPos = 0;
            let zero = true;
            let chnNumChar = ['零","一","二","三","四","五","六","七","八","九'];
            let chnUnitSection = ['","万","亿","万亿","亿亿'];
            let chnUnitChar = ['","十","百","千'];
            while(val > 0){
                var v = val % 10;
                if(v === 0){
                    if(!zero){
                        zero = true;
                        chnStr = chnNumChar[v] + chnStr;
                    }
                }else{
                    zero = false;
                    strIns = chnNumChar[v];
                    strIns += chnUnitChar[unitPos];
                    chnStr = strIns + chnStr;
                }
                unitPos++;
                val = Math.floor(val / 10);
            }
            return chnStr;
        }
        
    },
    methods:{
        ...mapMutations(['set_var']),
        dataURLtoFile(dataurl, filename) {//将base64转换为文件
            var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
            while(n--){
                u8arr[n] = bstr.charCodeAt(n);
            }
            return new File([u8arr], filename, {type:mime});
        },
        handleSubmit(data){
            let fm=JSON.parse(JSON.stringify(data))
            fm.type=this.active?'套装':'单一'
            fm.is_color_protection=+fm.is_color_protection
            delete fm.alonePics
            delete fm.Whole 
            delete fm.components
            delete fm.is_whole
            fm.suit=JSON.stringify(fm.suit)
            fm.attachment=JSON.stringify(fm.attachment)
            this.set_var({var_name:'fm',set_type:'obj',data:fm})
            this.$router.push({  name:'list_person'});
        },
        upload_case(item,is_whole,i){ //点击方格
            this.case_pic_name=item;
            this.is_whole=is_whole
            this.case_pic_show=true
            this.components_index=i
        },
        onUpload_case(data){  //点击按钮
            let formData = new FormData();
            formData.append("file", data.file);
            formData.append("dir", 'images');
            pubUpdate(formData)
            .then(res=>{
                let id=res.data.data.id
                let remark=()=>{
                    if(this.is_whole==2)
                        return '套件'+(this.components_index+1)+'-'+this.case_pic_name
                    else 
                        return this.case_pic_name
                }
                if(this.is_whole!=2 ){  
                    this.formItem.suit['整体'].push({ [this.case_pic_name]:id})
                    if(this.active)
                        this.formItem.Whole[this.case_pic_name]=data.content
                    else 
                        this.formItem.alonePics[this.case_pic_name]=data.content
                }
                else{
                    let arr=this.formItem.suit['套装'][this.components_index]
                    if(!Array.isArray(arr)) arr=[]
                    if(arr[this.case_pic_name]){
                        arr[this.case_pic_name]=id 
                    }else {
                        arr.push({[this.case_pic_name]:id})
                    }
                    this.$set(this.formItem.suit['套装'],this.components_index,arr)
                    
                    // this.$set(this.formItem.suit['套装'][this.components_index],this.case_pic_name,id)
                    this.formItem.components[this.components_index][this.case_pic_name]=data.content
                }

                this.formItem.attachment.push({
                    case_id:0,case_no:0,attachment_id:id,"type":"外观专利图","remark":remark()
                })

                this.case_pic_show=false

            })
            
            
        },
        add_case_item(){
            let tmp={
                    "主视图":'',
                    "后视图":'',
                    "俯视图":'',
                    "仰视图":'',
                    "左视图":'',
                    "右视图":'',
                    "立体图":'',
                }
            this.formItem.components.push(tmp)
        },
        rm_item_pics(index){
            this.formItem.components.splice(index,1)
        }
    },
    computed:{
        chenk_empty:function(){
            // if()
            // return true
        }
    }
  

}
</script>
