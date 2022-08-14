<template>
    <div class="about">
        <div class="site-content">
            <div class="content-warp">
                <div class="about-site about-info">
                    <section-title>About</section-title>
                    <div class="info-card">
                        <p>The OmicsML team is an interdisciplinary team that includes computer scientists, biologists, and statisticians. Its mission is to design and apply advanced machine learning or deep learning techniques on cutting-edge single-cell genomics data to unlock the mechanism of diseases.</p>
                    </div>
                </div> 

                <div class="about-me about-info">
                    <section-title id="Guestbook">Advisoring Committee</section-title>

                    <div class="friend-list animate" style="display: grid; margin: 10px 0 0 0; flex-wrap: wrap;">
                        <div v-for="(key,index) in professor" :key="index"  class="friend-item" >
                            <div style="display: flex; ">
                                <div >
                                    <img id="personimg" :src="require('../assets/team/'+key.img)" height="140px"  > 
                                </div>
                                <div style="margin: auto 15px">
                                    <a target="_blank" :href=key.link>
                                    <div class="site-name"> {{key.name}} </div>
                                    <div class="site-detail" style="word-wrap:break-word">{{key.desc}}</div></a>
                                </div>
                            </div>
                        </div>
                    </div>
                        
                </div>


                <div class="about-me about-info">
                    <section-title id="Guestbook">Team Member</section-title>
                    <div class="friend-list animate" style="display: grid; margin: 10px 0 0 0; flex-wrap: wrap;">
                        <div v-for="(key,index) in team" :key="index"  class="friend-item" >
                            <div style="display: flex; ">
                                <div >
                                    <img id="personimg" :src="require('../assets/team/'+key.img)" height="140px"  > 
                                </div>
                                <div style="margin: auto 15px">
                                    <a target="_blank" :href=key.link>
                                    <div class="site-name"> {{key.name}} </div>
                                    <div class="site-detail" style="word-wrap:break-word">{{key.desc}}</div></a>
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
    const {professor, team} = require("../utils/data")
    export default {
        name: "About",
        data() {
            return {
                professor: professor,
                team: team
            }
        },
        components: {
            // Quote,
            sectionTitle
        },
    }
</script>
<style scoped lang="less">
    .about {
        padding-top: 40px;
        width: 80%;
        margin: 80px auto;
    }

    .content-warp {

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

    }

    .friend-list{
        width: 100%;
        justify-content: space-between;
        grid-template-columns: repeat(auto-fill, 350px);
        grid-gap: 10px;
        .friend-item{
            display: block;
            width: 350px;
            margin: 20px 0px;
            padding: 10px 10px;
            // background-color: #ff6d6d;
            border: 1px solid #ECECEC;
            border-radius: 5px;
            &:hover{
                box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
            }
            .site-name,.site-detail{
                overflow: hidden;
                text-overflow: ellipsis;
                padding-bottom: 10px;
                // line-height: 1.5rem;
            }
            .site-name{
                font-size: 20px;
                color: red;
                border-bottom: 1px dotted #ECECEC;
            }
            .site-detail{
                font-size: 17px;
                padding-top: 10px;
            }
        }

    }
    /*******/
    @media (max-width: 900px){
        .content-warp {
            margin-top: 0;
        }
        .friend-list{
            width: 100%;
            grid-template-columns: repeat(auto-fill, 100%);
            .friend-item{
                width: 100%;
                margin: 0 auto 20px auto;
            }

        }

    }

    #personimg {
        border-radius: 10%;
    }
</style>
