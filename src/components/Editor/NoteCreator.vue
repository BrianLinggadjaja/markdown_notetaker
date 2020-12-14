<template>
  <button @click="test()" class="button is-primary">Hello</button>
</template>

<script>
export default {
  methods: {
    test: function () {
      console.log('test')
    }
  }
}
</script>
