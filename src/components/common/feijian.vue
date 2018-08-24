<style>

</style>
<template>
    <div class="feijian">
        <van-field label="备案人名称"  placeholder="请输入用户名" />
        <van-field label="证件号码"  placeholder="输入18位身份证号码" />
        <button :disabled=" !from.name || !from.card ">查询</button>
    </div>
</template>
<script>
import { Field } from 'vant';
export default {
    data(){
        return {
            from:{}
        }
    },
    components:{
        "van-field":Field
    }
}
</script>
