<script>
import cContain from "@/components/cContain.vue";
import cTitle from "@/components/ui-components/cTitle.vue";
import cSelect from "@/components/ui-components/cSelect.vue";
import cButton from "@/components/ui-components/cButton.vue";
import cInput from "@/components/ui-components/cInput.vue";
import useLocalStorage from "@/actions/useLocalStorage.js";
import getCategories from "@/actions/getCategories.js";

export default {
  name: "HomePage",
  components: {
    cTitle,
    cContain,
    cSelect,
    cButton,
    cInput,
  },
  data() {
    return {
      playerName: "",
      category: null,
      difficulty: null,
      showError: false,
    };
  },
  computed: {
    categories() {
      return useLocalStorage.getCategories();
    },
    difficulties() {
      return useLocalStorage.getDifficulties();
    },
  },
  methods: {
    isValidForm() {
      this.showError =
        this.playerName.length <= 0 ||
        String(this.category).length <= 0 ||
        this.difficulty.length <= 0;
      return !this.showError;
    },
    startGame() {
      if (!this.isValidForm()) return;

      useLocalStorage.setGameConfig({
        playerName: this.playerName,
        category: this.category,
        difficulty: this.difficulty,
      });

      this.$router.push("/question");
    },
  },
  async mounted() {
    await getCategories();
  },
};
</script>

<template>
  <c-contain>
    <c-title title="TRIVIA GAME" />
    <c-input @input="playerName = $event" />
    <c-select
      title="Selecciona la categoría"
      @change="category = $event"
      :data="categories"
    />
    <c-select
      title="Selecciona la dificultad"
      @change="difficulty = $event"
      :data="difficulties"
    />
    <c-button text="Empezar" @click="startGame" />

    <div>
      <p v-if="showError" class="text-red-400 text-xs text-left">
        Por favor completa todos los campos 😊
      </p>
    </div>
  </c-contain>
</template>
