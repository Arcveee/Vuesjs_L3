<script setup>
import { provide } from 'vue'
import { boCreerCommandeStore, boCommandeKey } from './store/boCommandeStore'
import ListePlats from './components/ListePlats.vue'
import ResumeCommande from './components/ResumeCommande.vue'

const boStore = boCreerCommandeStore()
provide(boCommandeKey, boStore)
</script>

<template>
  <div class="app">
    <header>
      <h1>Restaurant — Gestion des commandes</h1>
    </header>
    <main>
      <ListePlats />
      <ResumeCommande />
    </main>
  </div>
</template>

<style scoped>
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

header {
  padding: 16px 24px;
  background: #333;
  color: #fff;
}

header h1 {
  margin: 0;
  font-size: 1.4rem;
}

main {
  display: flex;
  flex: 1;
}
</style>
