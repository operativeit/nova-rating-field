<template>
    <star-rating
            :id="field.name"
            :name="field.name"
            :rating="parseFloat(value) || 0"
            :increment="increment"
            :max-rating="max"
            :show-rating="showRating"
            :read-only="true"

            :star-size="field['star-size']"
            :inactive-color="field['inactive-color']"
            :active-color="field['active-color']"
            :border-color="field['border-color']"
            :border-width="field['border-width']"
            :padding="field['padding']"
            :rounded-corners="field['rounded-corners']"
            :inline="field['inline']"
            :glow="field['glow']"
            :glow-color="field['glow-color']"
            :text-class="field['text-class']"
    />
</template>

<script>
import StarRating from 'vue-star-rating'
import StarRatingMixins from '../mixins/StarRating.js'

export default {
  components: { StarRating },
  props: ['resourceName', 'field'],
  mixins: [ StarRatingMixins ],
  data: () => ({
      value: 0,
  }),
  computed: {
    fieldValue() {
      return this.field.displayedAs || this.field.value
    },
  }
}
</script>
