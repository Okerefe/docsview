import Vue from 'vue';
import VueSmoothScroll from 'vue2-smooth-scroll'
import DocView from './DocView.vue';

Vue.use(VueSmoothScroll, {
    duration: 400,
    updateHistory: false,
})

const app = new Vue({
    el: '#root',
    components: {
        'doc-view': DocView,
    },

    data() {
        return {
        }
    },

    computed: {
    },

    methods: {
    },

    mounted() {
    }
});
