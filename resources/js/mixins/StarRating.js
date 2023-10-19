export default {
        mounted() {
            this.value = parseFloat(this.field.value) || 0
        },

        computed: {
            increment() {
                return parseFloat(this.field.increment);
            },
            max() {
                return parseInt(this.field.max);
            },
            min() {
                return parseFloat(this.field.min);
            },
            max() {
                return parseInt(this.field.max);
            },
            showRating() {
                return !!this.field.showRating;
            }
        },

        methods: {

            setRating(rating) {
                console.log('nova-rating-field:', rating, this.value)
                this.value = parseFloat(rating);
            },
            /**
             * Update the field's internal value.
             */
            handleChange(value) {
                this.value = value
            }
       },

}
