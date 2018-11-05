<template>
  <b-switch
    v-model='val'
    type="is-info"
  >
    Info
  </b-switch>
</template>

<script>
export default {
  data: () => ({
    val: true
  })
}
</script>
