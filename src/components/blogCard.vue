<template>
    <div>
        <b-card :title="data.title" tag="article">
            <b-card-img :src="data.image" top></b-card-img>
            <b-card-text>
                {{ data.paragraph | shorten }}
            </b-card-text>
            <b-link :to="`blog/${data.id}`" 
                >Read More</b-link
            >
        </b-card>
    </div>
</template>
<script>
export default {
    props: {
        data: {
            id: null
        }
    },
    filters: {
        shorten: function(v) {
            return v.substring(0, 220) + ".....";
        }
    }
};
</script>
<style lang="scss" scoped>
img {
    width: 100%;
    height: 150px;
}
</style>
