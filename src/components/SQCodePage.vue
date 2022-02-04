<template>
    <div class="sqcode-page">
        <app-bar title="商丘疫情防控码"/>
        <img src="../assets/banner.jpg" />
        <div class="page-content">
            <div class="time">{{date}}</div>
            <img src="../assets/sqr.jpg" class="qr-code">
            <div class="tip">谢谢配合 请通行!</div>
            <div class="close-tip">请点击左上方的×退出页面</div>
        </div>
    </div>
</template>

<script>
import AppBar from './AppBar.vue'

export default {
    components: {
        AppBar
    },

    data() {
        const date = new Date()
        const m = (date.getMonth() + 1).toString().padStart(2, '0')
        const d = date.getDate().toString().padStart(2, '0')
        const h = date.getHours().toString().padStart(2, '0')
        const min = date.getMinutes().toString().padStart(2, '0')
        const s = date.getSeconds().toString().padStart(2, '0')
        return {
            date: `2022-${m}-${d} ${h}:${min}:${s}`
        }
    },

    mounted() {
        document.title = '商丘疫情防控码'
    }
}
</script>

<style lang="less" scoped>
.page-content {
    display: flex;
    flex-direction: column;
    align-items: center;

    .time {
        color: black;
        font-size: 28px;
        line-height: 2;
    }

    .qr-code {
        width: 70%;
    }

    .tip {
        color: rgb(59, 122, 41);
        font-size: 26px;
        margin-top: 20px;
        line-height: 1.5;
    }

    .close-tip {
        font-size: 16px;
        color: rgb(211, 61, 45);
    }
}
</style>