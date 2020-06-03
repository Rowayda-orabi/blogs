<template>
    <div v-if="specific">
        <div v-for="specific in specific" :key="specific.id">
            <div class="mainHeader">
                <AppHeader>{{ specific.title }}</AppHeader>
                <b-button class="maincolor" type="button" to="/">back</b-button>
            </div>
            <b-card tag="article">
                <b-card-img :src="specific.image" top></b-card-img>
                <b-card-text>
                    {{ specific.paragraph }}
                </b-card-text>
            </b-card>
        </div>
    </div>
</template>
<script>
import AppHeader from "../components/AppHeader";
export default {
    data: function() {
        return {
            blog: null
        };
    },
    computed: {
        specific() {
            return this.$store.state.specific;
        }
    },
    components: {
        AppHeader
    }
};
</script>
<style lang="scss" scoped>
.mainHeader {
    position: relative;
}
.maincolor {
    border-color: #fff;
    position: absolute;
    top: 0;
    left: 0;
}
</style>
