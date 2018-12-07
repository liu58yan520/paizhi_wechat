<style>
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

        <div class="pic_case" >
            <img src="static/view_weituoshu.png">
            <van-uploader :after-read="onUpload_case" >
                <button id='case_pic_btn'>我知道了</button>
            </van-uploader>
        </div>
    </div>
</template>
<script>
import {pubUpdate} from '@/assets/api'
import  {mapMutations } from 'vuex';
import { Uploader } from 'vant';
export default {
    data(){
        return {

        }
    },
    components:{
        "van-uploader":Uploader
    },  
    methods:{
         ...mapMutations(['set_var']),
        onUpload_case(data){
            let formData = new FormData();
            formData.append("file", data.file);
            formData.append("dir", 'images');
            pubUpdate(formData)
            .then(res=>{
                if(res){
                    this.set_var({var_name:'fm',set_type:'obj',data:{ agreement_file_id:res.data.data.id } })
                    this.$router.push({name:'list_person',params:{ agreement_file_path : res.data.data.path}})
                }
            })
        }
    }
}
</script>
