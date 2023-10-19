<template>
  <PanelItem :index="index" :field="field">
       <template #value>
            <star-rating
                    :read-only="true"

                    :id="field.name"
                    :name="field.name"
                    :rating="parseFloat(value) || 0"
                    :increment="increment"
                    :max-rating="max"
                    :show-rating="showRating"

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
  </PanelItem>
</template>

<script>
import StarRating from 'vue-star-rating'
import StarRatingMixins from '../mixins/StarRating.js'

export default {
  components: { StarRating },
  props: ['index', 'resource', 'resourceName', 'resourceId', 'field'],
  mixins: [ StarRatingMixins ],
  data: () => ({
      value: 0,
  }),
  methods: {
      /**
       * Fill the given FormData object with the field's internal value.
       */
       fill(formData) {
           console.log('nova-rating-field:', this.value)
           formData.append(this.field.attribute, this.value || 0)
       },
  }
}
</script>
