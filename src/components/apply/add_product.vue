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
    }
    .add_product  .pic_box .case_pic{
        width:20vw;
        float: left;
        margin:10px 0 10px 2vw;
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
</style>

<template>
    <div class="add_product"> 
        <div class="diy_case_pic" v-show="case_pic_show">
            <img :src=" 'static/case_'+case_pic_name+'.jpg' " class="case_pic">
            <van-uploader :after-read="onUpload_case">
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
                    v-model="formItem.use"
                    type="textarea"
                    label="产品用途"
                    placeholder="如：本外观设计产品用于室外照明"
                />
                <van-field
                    v-model="formItem.design"
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
                        <div class="case_pic" @click="upload_case('main')">
                            <img :src="formItem.alonePics.main?formItem.alonePics.main:'static/add_pic.svg'">
                            <p>主视图</p>
                            <input type="hidden" :value="formItem.alonePics.main">
                        </div>
                        <div class="case_pic" @click="upload_case('after')">
                            <img :src="formItem.alonePics.after?formItem.alonePics.after:'static/add_pic.svg'">
                            <p>后视图</p>
                            <input type="hidden" :value="formItem.alonePics.after">
                        </div>
                        <div class="case_pic" @click="upload_case('up')">
                            <img :src="formItem.alonePics.up?formItem.alonePics.up:'static/add_pic.svg'">
                            <p>俯视图</p>
                            <input type="hidden" :value="formItem.alonePics.up">
                        </div>
                        <div class="case_pic" @click="upload_case('down')">
                            <img :src="formItem.alonePics.down?formItem.alonePics.down:'static/add_pic.svg'">
                            <p>仰视图</p>
                            <input type="hidden" :value="formItem.alonePics.down">
                        </div>
                        <div class="case_pic" @click="upload_case('left')">
                            <img :src="formItem.alonePics.left?formItem.alonePics.left:'static/add_pic.svg'">
                            <p>左视图</p>
                            <input type="hidden" :value="formItem.alonePics.left">
                        </div>
                        <div class="case_pic" @click="upload_case('right')">
                            <img :src="formItem.alonePics.right?formItem.alonePics.right:'static/add_pic.svg'">
                            <p>右视图</p>
                            <input type="hidden" :value="formItem.alonePics.right">
                        </div>
                        <div class="case_pic" @click="upload_case('_3d')">
                            <img :src="formItem.alonePics._3d?formItem.alonePics._3d:'static/add_pic.svg'">
                            <p>立体图</p>
                            <input type="hidden" :value="formItem.alonePics._3d">
                        </div>
                    </div>
                </van-tab>


                <van-tab class="pro_tabs_item">
                    <div slot="title">套装产品</div>
                    <div class="completePics">
                        <div class="Whole">
                            <h3>整体照片</h3>
                            <div class="pic_box" >
                                <div class="case_pic" @click="upload_case('main',true)">
                                    <img :src="formItem.Whole.main?formItem.Whole.main:'static/add_pic.svg'">
                                    <p>主视图</p>
                                    <input type="hidden" :value="formItem.Whole.main">
                                </div>
                                <div class="case_pic" @click="upload_case('after',true)">
                                    <img :src="formItem.Whole.after?formItem.Whole.after:'static/add_pic.svg'">
                                    <p>后视图</p>
                                    <input type="hidden" :value="formItem.Whole.after">
                                </div>
                                <div class="case_pic" @click="upload_case('up',true)">
                                    <img :src="formItem.Whole.up?formItem.Whole.up:'static/add_pic.svg'">
                                    <p>俯视图</p>
                                    <input type="hidden" :value="formItem.Whole.up">
                                </div>
                                <div class="case_pic" @click="upload_case('down',true)">
                                    <img :src="formItem.Whole.down?formItem.Whole.down:'static/add_pic.svg'">
                                    <p>仰视图</p>
                                    <input type="hidden" :value="formItem.Whole.down">
                                </div>
                                <div class="case_pic" @click="upload_case('left',true)">
                                    <img :src="formItem.Whole.left?formItem.Whole.left:'static/add_pic.svg'">
                                    <p>左视图</p>
                                    <input type="hidden" :value="formItem.Whole.left">
                                </div>
                                <div class="case_pic" @click="upload_case('right',true)">
                                    <img :src="formItem.Whole.right?formItem.Whole.right:'static/add_pic.svg'">
                                    <p>右视图</p>
                                    <input type="hidden" :value="formItem.Whole.right">
                                </div>
                                <div class="case_pic" @click="upload_case('_3d',true)">
                                    <img :src="formItem.Whole._3d?formItem.Whole._3d:'static/add_pic.svg'">
                                    <p>立体图</p>
                                    <input type="hidden" :value="formItem.Whole._3d">
                                </div>
                            </div>
                        </div>
                        <div class="components" ref="components">
                            <div class="item" v-for="(v,i) in formItem.components" :key='i' >
                                <h3>组件套装 {{i+1 | str_china}}  <van-icon name="close" color='#999' @click="rm_item_pics(i)" v-if="i!=0"/></h3>
                                <div class="pic_box" >
                                    <div class="case_pic" @click="upload_case('main',false,i)">
                                        <img :src="formItem.components[i].main?formItem.components[i].main:'static/add_pic.svg'">
                                        <p>主视图</p>
                                        <input type="hidden" :value="formItem.components[i].main">
                                    </div>
                                    <div class="case_pic" @click="upload_case('after',false,i)">
                                        <img :src="formItem.components[i].after?formItem.components[i].after:'static/add_pic.svg'">
                                        <p>后视图</p>
                                        <input type="hidden" :value="formItem.components[i].after">
                                    </div>
                                    <div class="case_pic" @click="upload_case('up',false,i)">
                                        <img :src="formItem.components[i].up?formItem.components[i].up:'static/add_pic.svg'">
                                        <p>俯视图</p>
                                        <input type="hidden" :value="formItem.components[i].up">
                                    </div>
                                    <div class="case_pic" @click="upload_case('down',false,i)">
                                        <img :src="formItem.components[i].down?formItem.components[i].down:'static/add_pic.svg'">
                                        <p>仰视图</p>
                                        <input type="hidden" :value="formItem.components[i].down">
                                    </div>
                                    <div class="case_pic" @click="upload_case('left',false,i)">
                                        <img :src="formItem.components[i].left?formItem.components[i].left:'static/add_pic.svg'">
                                        <p>左视图</p>
                                        <input type="hidden" :value="formItem.components[i].left">
                                    </div>
                                    <div class="case_pic" @click="upload_case('right',false,i)">
                                        <img :src="formItem.components[i].right?formItem.components[i].right:'static/add_pic.svg'">
                                        <p>右视图</p>
                                        <input type="hidden" :value="formItem.components[i].right">
                                    </div>
                                    <div class="case_pic" @click="upload_case('_3d',false,i)">
                                        <img :src="formItem.components[i]._3d?formItem.components[i]._3d:'static/add_pic.svg'">
                                        <p>立体图</p>
                                        <input type="hidden" :value="formItem.components[i]._3d">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h4 class="add_case_item" @click="add_case_item">添加套装组件<van-icon name="add-o" style="font-size:20px;color:#24A1F5" /></h4>
                  
                    </div>

                </van-tab>
            </van-tabs>
            <div class="bottom">
                <div class="switch"><p>色彩保护 </p><p>包含产品的色彩</p><van-switch v-model="formItem.color" size="25px" style="margin-top:3px"/><div class="clear"></div></div> 
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
export default {
    data(){
        return {
            formItem:{
                name:'',
                use:'',
                design:'',
                alonePics:{},
                Whole:{},
                color:false,
                components:[
                    {
                    main:'',
                    after:'',
                    up:'',
                    down:'',
                    left:'',
                    right:'',
                    _3d:'',
                    }
                ],
            },
            active:0,
            case_pic_show:false,
            case_pic_name:'main',
            is_Whole:false,
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
            let chnNumChar = ["零","一","二","三","四","五","六","七","八","九"];
            let chnUnitSection = ["","万","亿","万亿","亿亿"];
            let chnUnitChar = ["","十","百","千"];
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
        handleSubmit(data){
            data.type=this.active?'components':'alonePics'
             this.$router.push({  name:'list_person'});
        },
        upload_case(item,is_Whole,i){ //点击方格
            this.case_pic_name=item;
            this.is_Whole=is_Whole
            this.case_pic_show=true
            this.components_index=i
        },
        onUpload_case(data){  //点击按钮
            if(!this.active )
                this.formItem.alonePics[this.case_pic_name]=data.content
            else if(this.is_Whole)
                this.formItem.Whole[this.case_pic_name]=data.content
            else
                this.formItem.components[this.components_index][this.case_pic_name]=data.content
            this.case_pic_show=false
        },
        add_case_item(){
            let tmp={
                    main:'',
                    after:'',
                    up:'',
                    down:'',
                    left:'',
                    right:'',
                    _3d:''
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
