<template>
    
    <div class="demos">
        <div class="site-content">
            <div class="content-warp">
                <div class="about-site about-info">
                    <section-title>Notes</section-title>
                    <div class="info-card">
                        <p>This page will direct users to an interactive interface, which is a SaaS based service. End users can upload their own data to website and select interested tasks and corresponding deep learning models to perform. The results would be visualized on the website. The whole process is done through clicking on buttons without any coding skills.
    The interactive interface is under development. Stay tuned!
    </p>
                    </div>
                </div>
            </div>
        </div>
    </div>


</template>


<script>
    import sectionTitle from '../components/section-title.vue';
    export default {
        name: "demos",
        components: {sectionTitle}
    }

</script>

<style scoped lang="less">

    .demos {
        padding-top: 40px;
    }


    .content-warp {
        margin-top: 100px;

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

        }
    }


</style>