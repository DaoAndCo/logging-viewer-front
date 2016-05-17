<template>
  <div class="logFilters">
    <label v-for="scope in scopes">
      <input type="checkbox" :checked="this.filters.scopes.indexOf(scope) !== -1">
      {{ scope }}
    </label>
  </div>
</template>

<script type="text/babel">
  export default {
    props: {
      filters: Object,
      scopes: Array
    }
  }

</script>