<style>
    .button_nav{
        position: fixed;
        bottom: 0;
        width: 100%;
        text-align: center;
        display: flex;
        justify-content: space-around;
        padding: 3px 0;
        border-top: 1px solid #eee;
        font-size: 3vw;
        color: #aaa;
    }
    .button_nav svg{
        width:8vw;
        display: block;
        margin: auto;
    }
    .button_nav div{
        width:100%;
        padding: 0 0;
    }

</style>
<template>
    <div class="index">
        <div class="main">
            <router-view/>
        </div>
        <div class="button_nav">
            <div @click="nav('home')">
<svg viewBox="0 0 56 56">
 <g id="外观设计界面" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="首页" transform="translate(-100.000000, -1250.000000)">
            <g id="TAB" transform="translate(0.000000, 1246.000000)">
                <g id="Bars/Tabbar/_Resources/Inactive" transform="translate(80.000000, 0.000000)">
                    <rect id="Rectangle-2" x="0" y="0" width="96" height="88"></rect>
                    <g id="icon" transform="translate(20.000000, 4.000000)">
                        <rect id="Rectangle-2" x="0" y="0" width="56" height="56"></rect>
                        <g id="1" transform="translate(12.000000, 11.000000)" :stroke=" nav_ment=='home'?'#01C0FF':'#ccc'" stroke-width="2.5">
                            <polygon stroke-linecap="round" points="-2.33831072e-15 33.1428571 5.07530526e-16 13.7530053 16 0 32 13.7530053 32 33.1428571"></polygon>
                            <path d="M9.14285714,26.2857143 L22.8571429,26.2857143" id="Path-6"></path>
                        </g>
                    </g>
                </g>
            </g>
        </g>
    </g>
</svg>
                <span :style="{color:nav_ment=='home'?'#01C0FF':'#ccc'}">首页</span></div>
            <div @click="nav('patent')">
<svg viewBox="0 0 56 56">
    <g id="外观设计界面" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="首页" transform="translate(-347.000000, -1253.000000)">
            <g id="TAB" transform="translate(0.000000, 1246.000000)">
                <rect id="home_bar_patent" fill-rule="nonzero" x="347" y="7" width="56" height="56"></rect>
                <g id="专利" transform="translate(358.000000, 16.000000)" :stroke=" nav_ment=='patent'?'#01C0FF':'#ccc'">
                    <path d="M21.1410253,1.25 L1.25,1.25 L1.25,36.75 L32.75,36.75 L32.75,11.8206787 L21.1410253,1.25 Z" id="Combined-Shape"  stroke-width="2.5"></path>
                    <polyline id="Path-3" :stroke=" nav_ment=='patent'?'#01C0FF':'#ccc'" stroke-width="2.5" points="20.4325228 1.02486581 20.4325228 11.9851951 33.0423437 11.9851951"></polyline>
                    <rect id="Rectangle-6" :fill=" nav_ment=='patent'?'#01C0FF':'#ccc'" x="7" y="10" width="8" height="2.5"></rect>
                    <rect id="Rectangle-6-Copy" :fill=" nav_ment=='patent'?'#01C0FF':'#ccc'" x="7" y="19" width="20" height="2.5"></rect>
                    <rect id="Rectangle-6-Copy-3" :fill=" nav_ment=='patent'?'#01C0FF':'#ccc'" x="7" y="28" width="20" height="2.5"></rect>
                </g>
            </g>
            <text id="专利" font-family="PingFangSC-Regular, PingFang SC" font-size="18" font-weight="normal" fill="#AAAAAA">
                <tspan x="357" y="1325">专利</tspan>
            </text>
        </g>
    </g>
</svg>
                <span :style="{color:nav_ment=='patent'?'#01C0FF':'#ccc'}">专利</span></div>
            <div @click="nav('me')">
<svg viewBox="0 0 56 56">
    <g id="外观设计界面" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="首页" transform="translate(-594.000000, -1250.000000)">
            <g id="TAB" transform="translate(0.000000, 1246.000000)">
                <g id="Bars/Tabbar/_Resources/Inactive" transform="translate(574.000000, 0.000000)">
                    <rect id="Rectangle-2-Copy-4" x="0" y="0" width="96" height="88"></rect>
                    <g id="icon" transform="translate(20.000000, 4.000000)">
                        <g id="info" transform="translate(12.000000, 10.000000)" :stroke=" nav_ment=='me'?'#01C0FF':'#ccc'" stroke-width="2.5">
                            <circle id="Oval-2" cx="16" cy="14.8571429" r="14.8571429"></circle>
                            <path d="M0,36.5714286 L32,36.5714286" id="Path-6"></path>
                        </g>
                        <rect id="Rectangle-2-Copy-4" x="0" y="0" width="56" height="56"></rect>
                    </g>
                </g>
            </g>
        </g>
    </g>
</svg>
            <span :style="{color:nav_ment=='me'?'#01C0FF':'#ccc'}">我的</span></div>
        </div>
    </div>

</template>
<script>
export default {
    data(){
        return {
            nav_ment:"home"
        }
    },
    methods:{
        nav:function(str){
            this.nav_ment=str
            this.$router.push({path:'/'+str})
        }
    },
    created(){
        document.title="派智知识产权平台"
         this.nav('home')
    }
}
</script>
