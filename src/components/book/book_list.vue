<style>
.book_list{
    padding: 0 0 100px;
}
.book_list  button:disabled{
    background: #ccc;
}
.book_list li{
    padding: 16px 0;
    font-size: 14px;
    display: flex;
    line-height: 30px;
    width:94%;
    margin: auto;
    justify-content: space-between;
    border-bottom: 1px solid #eee;
}

.book_list li:last-child{
    border:0;
}
.book_list li i{
    font-size: 20px;
    margin: 5px 0 0 20px;
    color: #999;
}

.bg_btn{
    position:fixed;
    display: flex;
    justify-content: space-around;
    bottom: 0;
    padding: 10px 0;
    background: #fff;
    width:100%;
    border-top: 1px solid #eee;
    z-index: 1;
}
.bg_btn button{
    border:0;
    background: #24A1F5;
    color: #fff;
    width:88%;
    padding: 2.8vw 0;
    border-radius: 5px;
    display: block;
    margin: auto;
}
.book_list .add{
    width:100%;
    height: 100vh;
    overflow: hidden;
    background: #fff;
    position:fixed;
    top: 0;
    left: 0;
    z-index: 2;
}
.book_list .add .name{
    width:94%;
    margin: auto;
}
.book_list .add .van-cell{
    padding:12px 0;
    border-bottom: 1px solid #eee;
}
.book_list .add .van-cell::after{
    content: none;
}
.book_list h4{
    text-align: center;
    padding: 20px 0;
}
.book_list .pics{
    width:180px;
    display: flex;
    justify-content: space-between;
    margin: auto;
    font-size: 12px;
    color: #999;
    text-align: center;
}
.book_list .pics img{
    width:70px;
    height: 70px;
    border:1px solid #aaa;
    margin-bottom: 5px;
}
.book_list  button{
    width:88%;
    background: #24A1F5;
    border:0;
    color:#fff;
    margin: auto;
    display: block;
    padding: 2vw 0;
    border-radius: 5px;
}
.book_list .pic_case{
    position: fixed;
    width:100%;
    height: 100%;
    top: 0;
    background: #333;
    z-index: 5;
    overflow: hidden;
}

.book_list .van-uploader{
    width:100%;
    position: absolute;
    bottom: 10px;
}
</style>
<template>
    <div class="book_list">
        <ul>
            <li v-for="(v,i) in book_data" :key='i'>
                <h3 @click="select_index=i"><van-icon name="success" :color=" select&&select_index==i?'#24A1F5':'#fff' " style="margin-right:15px"/> {{v.name}} </h3>
                <div class="icons">
                    <van-icon name="password-view" @click="look_book(i)" />
                    <van-icon name="close" @click="rm_book(i)" />
                </div>
            </li>
        </ul>
        <div class="add" v-show="book_add_model">
            <div class="name">
                <van-field  label="委托书名称"  placeholder="输入你的姓名或名称" v-model="add.name"/>
                <h4>上传委托书</h4>
                <div class="pics">
                    <div class="item" @click="upload_case_model=true">
                        <img :src=" add.img?add.img:'static/add_pic.svg' " alt="">
                        <p>点击上传</p>
                    </div>
                    <div class="item">
                        <router-link to="book_case">
                            <img src="static/download_template(1).svg" alt="">
                            <p>下载模板</p>
                        </router-link>
                    </div>
                </div>
                <button :disabled=" !add.name || !add.img" @click="save_book"> 保存 </button>
            </div>

        </div>
        <div class="bg_btn">
            <button v-if="select" style="width:45%;background:#ccc" @click=" $router.push({name:'pay',params:{book_index:select_index}}) ">确认</button>
            <button :style="{'width':select ?'45%':'88%'}" @click="book_add_model=true">新增委托书</button>
        </div>

        <div class="pic_case" v-show="upload_case_model">
            <img src="static/view_weituoshu.png" alt="">
            <van-uploader :after-read="onUpload_case" >
                <button id='case_pic_btn'>我知道了</button>
            </van-uploader>
        </div>
    </div>
</template>
<script>
import store from "@/vuex/store"
import  {mapState } from 'vuex';
import { Dialog,Field,Uploader } from 'vant';
export default {
    store,
    data(){
        return {
            select:false,
            select_index:null,
            upload_case_model:false,
            book_add_model:false,
            add:{
                name:'',
                img:''
            },
        }
    },
    components:{
        "van-field":Field,
        "van-uploader":Uploader
    },  
    computed:{
        book_data:function(){
            return this.$store.state.book
        }
    },
    methods:{
        rm_book(index){
            Dialog.confirm({
                title: '删除委托书',
                message: '是否确认删除《'+this.book_data[index].name+'》的委托书'
            }).then(() => {
                this.book_data.splice(index,1)
            })
        },
        look_book(index){
            self:location='http://192.168.1.113:8080/'+this.book_data[index].img
        },
        book_add(){
            this.upload_case_model=true
        },
        onUpload_case(data){
            this.add.img=data.content;
            this.upload_case_model=false;
        },
        save_book(){
            this.$store.commit("set_book",this.add)
            this.book_add_model=false
        }
    },
    created(){
        this.select=this.$route.params.select
    }
}
</script>
