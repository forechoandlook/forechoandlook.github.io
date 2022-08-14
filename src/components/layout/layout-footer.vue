<template>
    <div id="layout-footer">
        <div class="end">
            <div>DANCE@2022</div>
            <div>© DANCE@2022 Team</div>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped lang="less">
    #layout-footer{
        width: 80%;
        background-color: #cf5c5e;
        margin: 20px auto;
        text-align: center;
        vertical-align: middle;
    }
    .end {
        display: flex;
        color: #fff;
        justify-content: space-between;
        align-content: center;
        div {
            height: 100px;
            text-align: center;
            line-height: 100px;
            margin: 0 20px;
            } 
    }
</style>