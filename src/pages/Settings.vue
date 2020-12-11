<template>
  <main class="column is-10">
    <div class="box">
      <div class="">
        <h1 class="title is-3 mb-5">Settings</h1>
        <section class="settings pt-0">
          <h2 class="title is-5 mb-2">Appearance</h2>
          <div class="buttons">
            <p class="subtitle is-6 ml-2 is-size-8">
              Change the color scheme<b-switch
                class="ml-6"
                v-model="lightMode"
                passive-type="is-dark"
                type="is-warning"
              >
                {{ lightMode ? 'Light Mode' : 'Dark Mode' }}</b-switch
              >
            </p>
          </div>
        </section>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data () {
    return {
      lightMode: true
    }
  }
}
</script>
