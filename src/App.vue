<template>
    <div class="container">
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    data: function() {
        return {};
    }
};
</script>
<style lang="scss">
$mainColor:#330033;
.maincolor {
    background-color:$mainColor !important;
}
</style>