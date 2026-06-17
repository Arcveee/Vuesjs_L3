import { reactive, computed } from 'vue'

export const boCommandeKey = Symbol('boCommande')

export function boCreerCommandeStore() {
  const boState = reactive({
    boLignes: []
  })

  const boLignes = computed(() => boState.boLignes)

  const boTotal = computed(() => {
    return boState.boLignes.reduce((boAcc, boLigne) => {
      return boAcc + boLigne.boPrix * boLigne.boQuantite
    }, 0)
  })

  function boAjouter(boPlat) {
    const boExistant = boState.boLignes.find((boLigne) => boLigne.boId === boPlat.boId)
    if (boExistant) {
      boExistant.boQuantite++
    } else {
      boState.boLignes.push({
        boId: boPlat.boId,
        boNom: boPlat.boNom,
        boPrix: boPlat.boPrix,
        boCategorie: boPlat.boCategorie,
        boQuantite: 1
      })
    }
  }

  function boRetirer(boId) {
    const boIndex = boState.boLignes.findIndex((boLigne) => boLigne.boId === boId)
    if (boIndex !== -1) {
      boState.boLignes.splice(boIndex, 1)
    }
  }

  function boViderCommande() {
    boState.boLignes = []
  }

  return {
    boLignes,
    boTotal,
    boAjouter,
    boRetirer,
    boViderCommande
  }
}
