import axios from 'axios'

const api = 'http://localhost:3000'

export default {
    data() {
        return {
            limit: []
        }
    },
    methods: {
        hashtagInfinite(state) {
            axios.get(api + '/hashtag', {
                params: {
                    page: this.page,
                },
            })
                .then(({data}) => {
                    if (data.hits.length) {
                        this.page += 1;
                        this.list = this.list.concat(data.hits);
                        state.loaded();
                    } else {
                        state.complete();
                    }
                })
        },
        myqasInfinite(state) {
            axios.get(api + '/main', {
                params: {
                    page: this.page,
                },
            })
                .then(({data}) => {
                    if (data.hits.length) {
                        this.page += 1;
                        this.list = this.list.concat(data.hits);
                        state.loaded();
                    } else {
                        state.complete();
                    }
                })
        },
        starsInfinite(state) {
            axios.get(api + '/stars', {
                params: {
                    page: this.page,
                },
            })
                .then(({data}) => {
                    if (data.hits.length) {
                        this.page += 1;
                        this.list = this.list.concat(data.hits);
                        state.loaded();
                    } else {
                        state.complete();
                    }
                })
        }
    }
}