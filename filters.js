import Vue from "vue";

Vue.filter("reversing", function(v) {
    return v
        .split("")
        .reverse()
        .join("");
});

Vue.filter("shorten", function(v, strlength) {
    return v.substring(0, strlength) + ".....";
});
