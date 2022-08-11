<template>
    <div id="banner" :class="{'home-banner':isHome}">
        <div class="banner-img" style="display: flex">
            <template v-if="isHome">
                <div >
                    <div class="focusinfo">
                        <p>DANCE is a python toolkit to support deep learning models for analyzing single-cell gene expression at scale. It includes three modules at present:</p>
                        <ul>
                            <li>1. Single-modality analysis</li>
                            <li>2. Single-cell multimodal omics</li>
                            <li>3. Spatially resolved transcriptomics</li>
                        </ul>
                        <p>Our goal is to build up a deep learning community for single cell analysis and provide GNN based architecture for users for further development in single cell analysis.</p>
                    </div>
                    <div class="header-info">
                        <p>$ pip install dance</p>
                    </div>
                </div>
                <div>
                    <img :src="require('../assets/framework.png')" height="300px" width="400px">
                </div>
            </template>
        </div>
    </div>
</template>

<script>
    export default {
        name: "banner",
        data(){
            return{
                websiteInfo: {},
                socials: []
            }
        },
        props:{
            isHome:{
                type: [Boolean,String],
                default: false
            }
        },
        created(){
            this.getWebSiteInfo()
            this.getSocial()
        },
        methods:{
            getSocial(){
                this.$store.dispatch('getSocials').then(data =>{
                    this.socials = data
                })
            },
            getWebSiteInfo(){
                this.$store.dispatch('getSiteInfo').then(data =>{
                    this.websiteInfo = data
                })
            }
        }
    }
</script>

<style scoped lang="less">
    #banner {
        margin: 100px auto 0 auto;
        max-width: 800px;
        color: black;
    }
    .focusinfo {
        height: 270px;
        line-height: 25px;
    }
    .header-info {
        background-color: rgba(243, 220, 220, 0.7);
        height: 30px;
        line-height: 30px;
        color: black;
    }
    @media (max-width: 960px){
        #banner {height: 400px;}
    }
    @media (max-width: 800px){
        #banner {display: none;}
    }
</style>
