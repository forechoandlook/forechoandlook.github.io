<template>
    <div class="about">
        <div class="site-content">
            <div class="content-warp">
                <div class="about-site about-info">
                    <section-title>About</section-title>
                    <div class="info-card">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor repellat odio itaque iure accusamus inventore a esse, voluptate iste doloremque rerum, nihil earum nam totam quos quod cum? Sint, veniam! </p>
                    </div>
                </div> 

                <div class="about-me about-info">
                    <section-title id="Guestbook">Advisoring Committee</section-title>



                    <div class="friend-list animate" style="display: flex; margin: 10px 0 0 0; flex-wrap: wrap;">
                        <div v-for="(key,index) in [0,1,2,3,4,5,6,7]" :key="index"  class="friend-item" >
                            <div style="display: flex; ">
                                <div >
                                    <!-- 这里我想直接替换成变量不知道行不行 -->
                                    <img id="personimg" :src="require('../assets/bing2.png')" height="110px" width="110px"> 
                                </div>
                                <div style="margin: auto 15px">
                                    <a target="_blank" href="http://baidu.com">
                                    <div class="site-name"> name </div>
                                    <div class="site-detail" style="word-wrap:break-word">desc</div></a>
                                </div>
                            </div>
                        </div>
                    </div>
                        
                </div>


                <div class="about-me about-info">
                    <section-title id="Guestbook">Team Member</section-title>
                    <div class="friend-list animate" style="display: flex; margin: 10px 0 0 0; flex-wrap: wrap;">
                        <div v-for="(key,index) in [0,1,2,3,4,5,6,7]" :key="index"  class="friend-item" >
                            <div style="display: flex; ">
                                <div >
                                    <img id="personimg" :src="require('../assets/bing2.png')" height="110px" width="110px"> 
                                </div>
                                <div style="margin: auto 15px">
                                    <a target="_blank" href="http://baidu.com">
                                    <div class="site-name"> name </div>
                                    <div class="site-detail" style="word-wrap:break-word">desc</div></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    </div>
</template>
<script>
    import sectionTitle from '@/components/section-title'
    import {getTime,getTimeInterval} from '@/utils'
    // import Quote from "@/components/quote";
    // import {fetchFriend} from '../api'
    export default {
        name: "About",
        data() {
            return {
                list: []
            }
        },
        components: {
            // Quote,
            sectionTitle
        },
        methods: {},
        mounted() {
        }
    }
</script>
<style scoped lang="less">
    .about {
        padding-top: 40px;
    }

    .content-warp {
        margin-top: 80px;

        .about-info {
            margin: 30px 0;

            span {
                color: red;
                margin-right: 10px;
            }

            .info-card {
                min-height: 100px;
                padding: 20px;
                border-radius: 3px;
                margin: 30px 0 50px 0;
                box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
                p{
                    line-height: 1.7rem;
                }
            }
        }
        .contactForm{
            width: 100%;
            padding: 20px;
            .form-item{
                align-items: center;
                display: flex;
                &:not(:last-child){
                    margin-bottom: 20px;
                }
                label{
                  width: 80px;
                }
                .v{
                    min-height: 40px;
                    line-height: 20px;
                    border-radius: 3px;
                    padding: 2px 10px;
                    outline:none;
                    border: 1px solid #8fd0cc;
                    width: 100%;
                    resize: vertical;
                }
                button{
                    width: 100px;
                    height: 40px;
                    border-radius: 3px;
                    outline:0;
                    border-style: none;
                    cursor: pointer;
                    background-color: #409eff;
                    color: white;
                    &:hover{
                        opacity: 0.8;
                    }
                }
            }
        }
    }

    .friend-list{
        width: 100%;
        // overflow:hidden;
        .friend-item{
            display: inline-block;
            // width: 300px;
            width: 300px;
            /*height: 100px;*/
            // margin: 0 5% 10px 0;
            margin: 20px 20px;
            padding: 10px 10px;
            // background-color: #ff6d6d;
            border: 1px solid #ECECEC;
            border-radius: 3px;
            &:hover{
                box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
            }
            .site-name,.site-detail{
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                padding-bottom: 10px;
                line-height: 1.5rem;
            }
            .site-name{
                color: #8fd0cc;
                border-bottom: 1px dotted #ECECEC;
            }
            .site-detail{
                font-size: 13px;
                padding-top: 10px;
            }
        }
    }
    /*******/
    @media (max-width: 600px){
        .friend-list{
            .friend-item{
                display: block;
                width: 90%;
                margin: 0 auto 20px auto;
                &:nth-of-type(2n){
                    margin-right: auto;
                }
                &:nth-of-type(3n){
                    margin-right: auto;
                }
            }
        }
    }


    /*******/
    @media (max-width: 800px) {
        .content-warp {
            margin-top: 0;
        }
    }
    #personimg {
        border-radius: 50%;
    }
</style>
