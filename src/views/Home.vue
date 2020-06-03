<template>
    <div>
        <AppHeader>Blog</AppHeader>
        <div v-if="blogsCard">
            <b-card-group>
                <b-card
                    class="col-md-4 col-12 my-3"
                    is="blogCard"
                    v-for="blog in blogsCard"
                    :key="blog.id"
                    :data="blog"
                >
                </b-card>
            </b-card-group>
            <b-button @click="more()">more</b-button>
        </div>
    </div>
</template>

<script>
import AppHeader from "../components/AppHeader";
import blogCard from "../components/blogCard";
export default {
    data: function() {
        return {
            blogs: null,
            pageNumber: 1,
            totalCount: null
        };
    },
    name: "Home",
    components: {
        AppHeader,
        blogCard
    },
    mounted() {
        //for firebase
        this.$store.dispatch("getBlogs");
    },
    computed: {
        blogsCard() {
            return this.$store.state.blogsCard;
        }
    },
    methods: {
        more() {
            return this.$store.dispatch("Paginate");
        },
    }
};
</script>
<style lang="scss" scoped></style>
