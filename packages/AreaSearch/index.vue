<template>
  <auto-complete
    id="area-search"
    :items="areas"
    :filter="filterFunction"
    :getItemName="getItemName"
    resultItemLineStyle="single"
    placeholder="Search by postcode, suburb, Local Government Area or Region..."
    :initialValue="initialValue"
    :showIcon="true"
    :getIcon="() => 'map_marker'"
    @item-selected="selectArea"
  />
</template>
<script>

import { AutoComplete } from '@dpc-sdp/myvic-autocomplete'
import { getAreas } from './utils/getAreas'

/**
 * AreaSearch is a component for looking up different kinds of areas using an autocomplete search
 */
export default {
  components: {
    AutoComplete
  },
  props: {
    initialValue: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      areas: [],
      filterFunction: (items, query) => items.filter(
        x => x.name.toLowerCase().includes(query.toLowerCase()) || x.postcode.includes(query)
      ),
      getItemName: ({ name, postcode }) => postcode.length ? `${name}, ${postcode}` : name
    }
  },
  created: async function () {
    this.areas = await getAreas()
  },
  methods: {
    selectArea (id, item) {
      this.$emit('item-selected', id, item)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~@dpc-sdp/myvic-global/styles/global";

  .myvic-areasearch {
    display: relative;
  }
</style>
