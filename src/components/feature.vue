<template>
    <div class="feature">
        <div class="feature-title">
            <div class="feature-content">
                <p class="foverlay" v-for="(item, index) in data.title" :key="item+index">{{ "Task " + (index+1).toString() +": " + item[0].toUpperCase() + item.substr(1)}}</p>
            </div>
        </div>
        <img :src="require('../assets/feature/'+data.img)">
        <div class="content">{{data.desc[0].toUpperCase() + data.desc.slice(1)}}  </div>
    </div>
</template>

<script>
    export default {
        name: "feature",
        props: {
            data: {
                type: Object,
                default: () =>{
                    return{
                        title: ['Akina'],
                        img: 'https://cdn.zhebk.cn/usr/themes/Akina//images/feature/feature1.jpg',
                        href: 'https://zhebk.cn/Web/Akina.html',
                        desc:"",
                    }
                }
            }
        }
    }
</script>

<style scoped lang="less">
    .feature {
        width: inherit;
        position: relative;
        img {
            height: 240px;
            width: 384px;
            object-fit: cover;
            border-radius: 5px;
            opacity: 1;
        }

        .feature-title {
            position: absolute;
            z-index: 2;
            height: 240px;
            width: 384px;
            text-align: center;
            // line-height: 240px;
            background: #BBE2DB;
            // background-color: red;
            font-size: 16px;
            opacity: 0;
            border-radius: 5px;

            -moz-transition: opacity .4s ease-out;
            -o-transition: opacity .4s ease-out;
            -webkit-transition: opacity .4s ease-out;
            transition: opacity .4s ease-out;
        }
    }
    .feature:hover{
        .feature-title{
            opacity: 1;
        }
    }
    .content{
        text-align: center;
        height: 80px;
        line-height: 80px;
        font-weight: bold;
    }
    .feature-title{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .foverlay{
        line-height: 30px;
        text-align: left;
    }

    @media (max-width: 490px){
        .feature{
            img {
                height: calc(80% / 1.6);
                width: 80%;
            }
        }
    }

</style>