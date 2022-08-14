<template>
    <div class="banner">
        <div class="count" v-for="(item,index) in data" :key="index">

            <div class="number"> <p>{{item.num}}</p> </div>
            <div class="production"> <p>{{item.production}}</p> </div>
            <div class="desc"> <p>{{item.desc}}</p> </div>

        </div>
    </div>
</template>

<script>

const {bannerdata} = require("../utils/data.js")

export default {
    name: "banner-count",
    data(){
        return {
            data:bannerdata
        }
    }
}
</script>

<style>
.banner {
    width: 100%;
    background-color: #5b9bd5;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    align-items: center;
}
.count {
    width: 300px;
    height: 250px;
    color: white;
    text-align: center;
}

.number {
    margin: 20px 0;
    font-size: 50px;
    font-weight: bolder;
}

.production {
    font-size: 20px;
    margin: 10px;
    font-weight: bold;
}

.desc {
    /* width: 80px; */
    /* word-break:break-all; */
}

</style>