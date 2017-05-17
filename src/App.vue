<template>
  <div id="app">
    <header></header>
    <div class="tab">
      I am Tab!
    </div>

    <div class="content">
      I am Content!
    </div>
  </div>
</template>

<script>
  import header from './components/header/header'

  export default {
    components: {
      header: header
    }
  }

</script>

<style>

</style>
