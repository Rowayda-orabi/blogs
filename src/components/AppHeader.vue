<template>
    <b-container class="apphead">
        <b-row>
            <b-col>
                <h1 class="text-center"><slot></slot></h1>
            </b-col>
        </b-row>
    </b-container>
</template>
<script>
export default {
};
</script>
<style lang="scss" scoped>
.apphead {
    padding: 50px;
    position: relative;
    background-image: url("../assets/header/header-bg.jpg");
    background-size: cover;
    &::before {
        content: "";
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        opacity: 0.9;
        background: linear-gradient(-45deg, #330033 0%, #333366 100%);
    }
    h1 {
        color: #fff;
        position: relative;
        font-weight: 100;
        font-size: 60px;
    }
}
</style>
