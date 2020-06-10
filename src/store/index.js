import Vue from "vue";
import Vuex from "vuex";
import * as firebase from "firebase";

Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        blogsCard: [],
        first: null,
        lastVisible: null,
        next: null,
        indx: null,
        specific: [], // to handel singleblog component
        //size: null //to handel more button
    },
    mutations: {
        updateIndex(state, indx) {
            state.indx = indx;
        },
        updateBlog(state, blogsCard) {
            state.blogsCard = blogsCard;
        },
        addBlog(state, blogsCard) {
            console.log(blogsCard);
            state.blogsCard.push(blogsCard);
        },
        updateFirst(state, first) {
            state.first = first;
        },
        updateNext(state, next) {
            state.next = next;
        },
        updateLast(state, lastVisible) {
            state.blogsCard.lastVisible = lastVisible;
        },
        updateSpecific(state, specific) {
            state.specific = specific;
        }
    },
    actions: {
        getBlogs({ commit }) {
            /*firebase
                .firestore()
                .collection("blogs")
                .get()
                .then(qs => {
                    this.state.size = qs.docs.length;
                });*/
            let first = firebase
                .firestore()
                .collection("blogs")
                .orderBy("id")
                .limit(3);
            commit("updateFirst", first);
            return first.get().then(function(documentSnapshots) {
                // Get the last visible document
                let lastVisible =
                    documentSnapshots.docs[documentSnapshots.docs.length - 3];
                commit("updateLast", lastVisible);
                let blogsCard = documentSnapshots.docs.map(queryDoc => {
                    return queryDoc.data();
                });
                commit("updateBlog", blogsCard);

                // get the next 3 blog.
                let indx = documentSnapshots.docs.length + 3;
                commit("updateIndex", indx);
            });
        },
        Paginate({ commit, state }) {
            let next = firebase
                .firestore()
                .collection("blogs")
                .orderBy("id")
                .startAt(state.lastVisible)
                .limit(state.indx);
            commit("updateNext", next);

            return next.get().then(documentSnapshots => {
                let lastVisible =
                    documentSnapshots.docs[documentSnapshots.docs.length - 3];
                commit("updateLast", lastVisible);
                let blogsCards = documentSnapshots.docs.map(queryDoc => {
                    return Object.assign({}, queryDoc.data(), {
                        id: queryDoc.id
                    });
                });
                commit("updateBlog", blogsCards);
                let indx = documentSnapshots.docs.length + 3;
                commit("updateIndex", indx);
            });
        },
        specificBlog({ commit }, blogId) {
            firebase
                .firestore()
                .collection("blogs")
                .where("id", "==", blogId)
                .get()
                .then(querysnapshot => {
                    let specific = querysnapshot.docs.map(queryDoc => {
                        return Object.assign({}, queryDoc.data(), {
                            id: queryDoc.id
                        });
                    });
                    commit("updateSpecific", specific);
                });
        }
    },
    modules: {}
});
