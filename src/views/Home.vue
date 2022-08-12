<template>
    <div class="home">
        <banner isHome="true"></banner>
    </div>
</template>

<script>
    import Banner from '@/components/banner'
    import Feature from '@/components/feature'
    import sectionTitle from '../components/section-title.vue'
    import smallIco from '../components/small-ico.vue'

    export default {
        name: 'Home',
        props: ['cate', 'words'],
        data() {
            return {
                features: [],
                postList: [],
                currPage: 1,
                hasNextPage: false
            }
        },
        components: {
            Banner,
            Feature,
            sectionTitle,
            // Post,
            smallIco,
            // Quote
        },
    }
</script>
<style scoped lang="less">

</style>
