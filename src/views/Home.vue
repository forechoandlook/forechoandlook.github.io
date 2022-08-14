<template>
    <div class="home">
        <banner isHome="true"></banner>
        <div class="site-content animate">
            <!--焦点图-->
            <div class="top-feature" >
                <section-title>
                    <div style="display: flex;">Features</div>
                </section-title>
                <div class="feature-content">
                    <div class="feature-item" v-for="item in features" :key="item.title[0]">
                        <Feature :data="item"></Feature>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import Banner from '@/components/banner'
    import Feature from '@/components/feature'
    import sectionTitle from '../components/section-title.vue'
    const {feature} = require("../utils/data")

    export default {
        name: 'Home',
        props: ['cate', 'words'],
        data() {
            return {
                features: feature,
                postList: [],
                currPage: 1,
                hasNextPage: false
            }
        },
        components: {
            Banner,
            Feature,
            sectionTitle,
        },
    }
</script>
<style scoped lang="less">
    .site-content {
        max-width: 80%;
        margin: 0 auto;
        .notify {
            margin: 60px 0;
            border-radius: 3px;
            & > div {
                padding: 20px;
            }
        }


        .search-result {
            padding: 15px 20px;
            text-align: center;
            font-size: 20px;
            font-weight: 400;
            border: 1px dashed #ddd;
            color: #828282;
        }
    }


    .top-feature {
        width: 100%;
        height: auto;
        margin-top: 30px;

        .feature-content {
            margin-top: 10px;
            display: flex;
            justify-content: space-between;
            position: relative;
            flex-wrap: wrap;
        }
    }

    .site-main {
        padding-top: 80px;

        &.search {
            padding-top: 0;
        }
    }

    .more{
        margin: 50px 0;
        .more-btn{
            width: 100px;
            height: 40px;
            line-height: 40px;
            text-align: center;
            color: #ADADAD;
            border: 1px solid #ADADAD;
            border-radius: 20px;
            margin: 0 auto;
            cursor: pointer;
            &:hover{
                color: #8fd0cc;
                border: 1px dashed #8fd0cc;
            }
        }
    }

    /******/
    @media (max-width: 980px) {


        .site-main {
            padding-top: 40px;
        }

        .site-content {
            .notify {
                margin: 30px 0 0 0;
            }

            .search-result {
                margin-bottom: 20px;
                font-size: 16px;
            }
        }

        .top-feature{
            .feature-content{
                        margin-top: 10px;
                        display: flex;
                        justify-content: center;
                        position: relative;
                        flex-wrap: wrap;
                    }
        }
    }


</style>
