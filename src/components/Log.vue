<template>
  <tr>
    <td>{{ log.created }}</td>
    <td>{{ log.level }}</td>
    <td>{{ log.scope }}</td>
    <td>{{ log.user_id }}</td>
    <td>{{ log.message }}</td>
    <td>{{ log.context | json }}</td>
  </tr>
</template>

<script type="text/babel">
  export default {
    props: {
      log: Object
    }
  }

</script>