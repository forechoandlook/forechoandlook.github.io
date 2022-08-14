<template>
    <div id="banner" :class="{'home-banner':isHome}">
        <div class="banner-img" style="display: flex; flex-wrap: wrap;justify-content: space-between;">
                <div class="desc" >
                    <div class="focusinfo">
                        <p>DANCE is a PyTorch-based deep learning toolbox designed for single cell analysis. It has two functions. It firstly can help developers develop their own deep learning models more easily and efficiently for analyzing single-cell data at scale. What's more, it acts as a benchmark platform to reproduce different computational models for tasks in single cell analysis.</p>
                        <p>It includes three modules at present:</p>
                        <ul>
                            <li>1. Single-modality analysis</li>
                            <li>2. Single-cell multimodal omics</li>
                            <li>3. Spatially resolved transcriptomics</li>
                        </ul>
                        <p>Several tasks are defined under each module. For each task, several models are supported across different datasets.</p>
                        <p>Our goal is to build up a deep learning community for single cell analysis and provide GNN based architecture for users for further development in single cell analysis.</p>
                    </div>
                    <div class="header-info">
                        <p>$ pip install dance</p>
                    </div>
                </div>
                <div class="frameimg" >
                    <img :src="require('../assets/framework.png')" height="500px" >
                </div>
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

    }
</script>

<style scoped lang="less">
    #banner {
        margin: 150px auto 100px auto;
        max-width: 80%;
        color: black;
    }
    .focusinfo{
        line-height: 35px;
    }
    .banner-img {
        align-items: center;
    }
    .desc{
        width: 500px;
        min-height: 300px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .header-info {
        background-color: rgba(243, 220, 220, 0.7);
        height: 30px;
        line-height: 30px;
        color: black;
    }
    @media (max-width: 960px){
        #banner {height: 400px;}
        .desc {width: 100%;margin: 10%;}
        .frameimg {
            width: 100%;
            display: flex;
            justify-content: center;
            }
    }
</style>
