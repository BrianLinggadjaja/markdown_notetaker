<template>
  <main class="column is-10 hero is-fullheight-with-navbar is-primary">
    <div class="hero-body">
      <div class="container">
        <h1>Unkown Page</h1>
        <p class="mb-4">Click the return button to go back to safety</p>

        <router-link :to="{ name: 'FileExplorer' }">
          <button class="button is-accent is-rounded mb-6">Return</button>
        </router-link>
      </div>
    </div>
  </main>
</template>
