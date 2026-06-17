<script setup>
import { inject } from 'vue'
import { boCommandeKey } from '../store/boCommandeStore'

const boStore = inject(boCommandeKey)
const { boLignes, boTotal, boRetirer, boViderCommande } = boStore

function boCalculerSousTotal(boLigne) {
  return boLigne.boPrix * boLigne.boQuantite
}
</script>

<template>
  <section class="resume-commande">
    <h2>Commande</h2>
    <p v-if="boLignes.length === 0" class="vide">Aucun plat commandé.</p>
    <ul v-else class="lignes">
      <li v-for="boLigne in boLignes" :key="boLigne.boId" class="ligne">
        <div class="info">
          <span class="nom">{{ boLigne.boNom }}</span>
          <span class="quantite">x{{ boLigne.boQuantite }}</span>
        </div>
        <div class="actions">
          <span class="sous-total">{{ boCalculerSousTotal(boLigne).toLocaleString('fr-FR') }} FCFA</span>
          <button @click="boRetirer(boLigne.boId)">Retirer</button>
        </div>
      </li>
    </ul>
    <div v-if="boLignes.length > 0" class="footer">
      <p class="total">Total : {{ boTotal.toLocaleString('fr-FR') }} FCFA</p>
      <button class="vider" @click="boViderCommande">Vider la commande</button>
    </div>
  </section>
</template>

<style scoped>
.resume-commande {
  width: 320px;
  padding: 16px;
  border-left: 1px solid #ddd;
}

h2 {
  margin: 0 0 16px;
}

.vide {
  color: #888;
}

.lignes {
  list-style: none;
  padding: 0;
  margin: 0;
}

.ligne {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #eee;
}

.info {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.nom {
  font-weight: 500;
}

.quantite {
  font-size: 0.85rem;
  color: #666;
}

.actions {
  display: flex;
  align-items: center;
  gap: 8px;
}

.sous-total {
  font-weight: bold;
}

.actions button {
  padding: 4px 8px;
  background: #c33;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.85rem;
}

.actions button:hover {
  background: #a22;
}

.footer {
  margin-top: 16px;
}

.total {
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0 0 12px;
}

.vider {
  width: 100%;
  padding: 10px;
  background: #666;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.vider:hover {
  background: #444;
}
</style>
