<script setup>
import { ref, computed, inject } from 'vue'
import { boCommandeKey } from '../store/boCommandeStore'

const boStore = inject(boCommandeKey)
const { boAjouter } = boStore

const boPlats = [
  { boId: 1, boNom: 'Burger Classic', boPrix: 3500, boCategorie: 'Fast-food' },
  { boId: 2, boNom: 'Pizza Margherita', boPrix: 4500, boCategorie: 'Fast-food' },
  { boId: 3, boNom: 'Thieboudienne', boPrix: 5000, boCategorie: 'Africain' },
  { boId: 4, boNom: 'Yassa Poulet', boPrix: 4500, boCategorie: 'Africain' },
  { boId: 5, boNom: 'Coca-Cola', boPrix: 1000, boCategorie: 'Boisson' },
  { boId: 6, boNom: 'Bissap', boPrix: 800, boCategorie: 'Boisson' },
  { boId: 7, boNom: 'Tiramisu', boPrix: 2000, boCategorie: 'Dessert' },
  { boId: 8, boNom: 'Mousse Chocolat', boPrix: 1800, boCategorie: 'Dessert' }
]

const boCategories = ['Tous', 'Fast-food', 'Africain', 'Boisson', 'Dessert']

const boCategorieActive = ref('Tous')

const boFiltrerParCategorie = computed(() => {
  if (boCategorieActive.value === 'Tous') {
    return boPlats
  }
  return boPlats.filter((boPlat) => boPlat.boCategorie === boCategorieActive.value)
})
</script>

<template>
  <section class="liste-plats">
    <h2>Menu</h2>
    <div class="filtres">
      <button
        v-for="boCategorie in boCategories"
        :key="boCategorie"
        :class="{ actif: boCategorieActive === boCategorie }"
        @click="boCategorieActive = boCategorie"
      >
        {{ boCategorie }}
      </button>
    </div>
    <div class="cartes">
      <div v-for="boPlat in boFiltrerParCategorie" :key="boPlat.boId" class="carte">
        <h3>{{ boPlat.boNom }}</h3>
        <p class="prix">{{ boPlat.boPrix.toLocaleString('fr-FR') }} FCFA</p>
        <p class="categorie">{{ boPlat.boCategorie }}</p>
        <button class="btn-ajouter" @click="boAjouter(boPlat)">Ajouter</button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.liste-plats {
  flex: 1;
  padding: 16px;
}

h2 {
  margin: 0 0 16px;
}

.filtres {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 16px;
}

.filtres button {
  padding: 6px 12px;
  border: 1px solid #ccc;
  background: #fff;
  cursor: pointer;
  border-radius: 4px;
}

.filtres button.actif {
  background: #333;
  color: #fff;
  border-color: #333;
}

.cartes {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 12px;
}

.carte {
  border: 1px solid #ddd;
  border-radius: 6px;
  padding: 12px;
}

.carte h3 {
  margin: 0 0 8px;
  font-size: 1rem;
}

.prix {
  font-weight: bold;
  margin: 0 0 4px;
}

.categorie {
  color: #666;
  font-size: 0.85rem;
  margin: 0 0 12px;
}

.btn-ajouter {
  width: 100%;
  padding: 8px;
  background: #2563eb;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
}

.btn-ajouter:hover {
  background: #1d4ed8;
}
</style>
