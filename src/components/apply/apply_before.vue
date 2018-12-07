<style>
    .apply_before figure{
        box-shadow: 0 0 6px 2px #ddd;
        padding: 3vw;
        width:94%;
        box-sizing: border-box;
        margin:5vw auto;
        border-radius: 5px;
    }
    .apply_before figure img{
        width:26vw;
        margin-left: 2vw;
        float: left;
    }
    .apply_before figure figcaption{
        text-align: left;
        
    }
    .apply_before figure figcaption ul{
        list-style-type: none;
        margin-left: 33vw;
        
    }
    .apply_before figure figcaption ul li{
        padding: 2px 0;
        line-height: 2.3ch;
    }
    .apply_before figure figcaption  h4{
        display: block;
        text-align: left;
    }

    .apply_before .download{
        position: relative;
    }
    .apply_before figure figcaption button{
        border:0;
        background: #FFB01D;
        color: #fff;
        padding: 8px 35px;
        border-radius: 5px;
        /* position: absolute;
        right: 0;
        top: 20%; */
        line-height: 130%;
        margin: 5px 0 0 5%;
    }
    .apply_before figure:nth-child(3){
        margin-bottom: 0;
    }


</style>
<template>
<!-- 申请的步骤1 展示所需资料 -->
    <div class="apply_before">  
        <figure>
    　　　　<img src='static/ready_basis.png'>
    　　　　<figcaption>
                <ul style="margin-top:1%;">
                    <h4>基础资料所需：</h4>
                    <li>1.名称及其用途</li>
                    <li>2.照片 (主、俯、仰、左、右、后、立体图6个角度的照片)</li>
                    <li>3.其他外观设计说明</li>
                   
                </ul>
    　　　　</figcaption>
            <div class="clear"></div>
　　　  </figure>
        <figure>
    　　　　<img src='static/ready_personnel.png'>
    　　　　<figcaption>
                <ul style="margin-top:3%;">
                    <h4>申请人员资料所需：</h4>
                    <li>1.申请人资料</li>
                    <li>2.设计人资料</li>
                    <li>3.费减备案</li>
                </ul>
    　　　　</figcaption>
            <div class="clear"></div>
　　　  </figure>
        <figure>
            
    　　　　<img src='static/ready_ prove.png'>
        　　　　<figcaption class="download">
                    <ul style="margin-top:3.5%;">
                        <h4>代理证明所需：</h4>
                        <li >1.专利委托书</li>
                        <li>2.请下载打印盖章后准备拍照上传</li>
                    </ul>
                    <router-link to="book_case">
                        <button ref='download'>下载打印委托书</button>
                    </router-link>
        　　　　</figcaption>
                <div class="clear"></div>
            
　　　  </figure>
  
        <button ref='btn' class="fm_btn" @click=" before_sub ">我准备好了,开始申请</button>
    </div>
</template>
<script>
export default {
    methods:{
        before_sub(){
            this.$refs.btn.style.background='#208BD2'
            this.$router.push({name:'add_product'})
        },

    }
}
</script>

