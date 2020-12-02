<template>
  <main class="column is-10 hero is-fullheight-with-navbar is-background">
    <div class="hero-body">
      <div class="container">
        <h1>Unkown Page</h1>
        <p class="mb-4">Click the return button to go back to safety</p>
        <b-button tag="router-link" :to="{ name: 'FileExplorer' }" type="is-accent" class="is-rounded">
          Return
        </b-button>
      </div>
    </div>
  </main>
</template>
