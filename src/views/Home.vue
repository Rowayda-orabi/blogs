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
            <div class="text-center">
                <b-button @click="more()" size="lg" v-if="blogLength<3">more</b-button>
                <!-- to hide button when all cards show -->
            </div>
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
            blogLength:null,
            //size :null
        };
    },
    name: "Home",
    components: {
        AppHeader,
        blogCard
    },
    mounted() {
        this.$store.dispatch("getBlogs");
        //this.size =this.$store.state.size ;
    },
    computed: {
        blogsCard() {
            return this.$store.state.blogsCard;
        }
    },
    methods: {
        more() {
            return this.$store.dispatch("Paginate"),
            this.blogLength =this.$store.state.blogsCard.length
        },
    }
};
</script>
<style lang="scss" scoped></style>
