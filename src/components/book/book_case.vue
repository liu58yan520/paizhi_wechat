<style>
    .book_case{
        position: relative;
    }
    .book_case .p1{
        width:60px;
        display: block;
        margin: auto;
        position:absolute;
        top:27%;
        z-index: 4001;
        left:0;right:0;
    }
    .book_case .p2{
        width:160px;
        display: block;
        margin: auto;
        position:absolute;
        bottom:20.3%;
        z-index: 4002;
        right:26%;
    }
    .book_case #bg{
        width:100%;
        height: 100%;
        position:fixed;
        z-index: 2000;
        background: rgba(0,0,0,0.7);
    }
</style>
<template>
    <div class="book_case" @click="show=false">
        <div id="bg" v-show="show"></div>
        <img src="static/book.jpg">
        <img src="static/finger.png" class="p1" v-show="show">
        <img src="static/seal.png" class="p2" v-show="show">
        
    </div>
</template>
<script>
export default {
    data(){
        return{
            show:true
        }
    }
}
</script>

