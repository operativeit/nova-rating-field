<template>
  <DefaultField
    :field="field"
    :errors="errors"
    :show-help-text="showHelpText"
    :full-width-content="fullWidthContent"
  >
    <template #field>
            <star-rating
                    :read-only="false"
                    @update:rating ="setRating"

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
  </DefaultField>
</template>

<script>
import { FormField, HandlesValidationErrors } from 'laravel-nova'
import StarRating from 'vue-star-rating'
import StarRatingMixins from '../mixins/StarRating.js'

export default {
  components: { StarRating },
  mixins: [FormField, HandlesValidationErrors, StarRatingMixins ],
  props: ['resourceName', 'resourceId', 'field' ],
  data: () => ({
    value: 0,
  }),
  mounted() {
       console.log('nova-rating-field: mounted');
  },
  methods: {
    /**
     * Fill the given FormData object with the field's internal value.
     */
    fill(formData) {
      formData.append(this.field.attribute, this.value || 0)
    },
  }
}
</script>
