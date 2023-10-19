import IndexField from './components/IndexField'
import DetailField from './components/DetailField'
import FormField from './components/FormField'

Nova.booting((app, store) => {
  app.component('index-nova-rating-field', IndexField)
  app.component('detail-nova-rating-field', DetailField)
  app.component('form-nova-rating-field', FormField)

  app.mixin({
     mounted() {
       console.log('nova-rating-field:','mounted')
     }
  })
})
