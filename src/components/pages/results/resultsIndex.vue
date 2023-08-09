<script>
import useLocalStorage from "@/actions/useLocalStorage";
import cContain from "@/components/cContain.vue";
import cButton from "@/components/ui-components/cButton.vue";

export default {
  name: "resultsIndex",
  components: {
    cContain,
    cButton,
  },
  computed: {
    getPlayerName() {
      return useLocalStorage.getGameConfig().playerName;
    },
    getCategory() {
      return useLocalStorage.getCategoryById(
        useLocalStorage.getGameConfig().category
      );
    },
    getCountCorrectAnswers() {
      return useLocalStorage.getCountCorrectAnswers();
    },
    getCorrectAnswers() {
      return useLocalStorage.getCorrectAnswers();
    },
    getIncorrectAnswers() {
      return useLocalStorage.getIncorrectAnswers();
    },
  },
};
</script>

<template>
  <c-contain class="pt-20 pb-5">
    <div class="w-full flex items-center justify-center">
      <img src="@/assets/trofeo.svg" class="w-40" />
    </div>

    <div class="flex flex-col gap-3 text-white">
      <strong class="text-2xl"
        >{{
          getCorrectAnswers.length === 0
            ? "Suerte para la proxima"
            : "Felicitaciones"
        }}
        {{ getPlayerName }}</strong
      >
      <span
        >Hiciste <b>{{ getCountCorrectAnswers }}</b> puntos en la categoría:
        <b class="text-gray-300">{{ getCategory.name }}</b>
      </span>
    </div>

    <div class="flex flex-col gap-5">
      <div class="bg-green-50 p-3 rounded-lg">
        <span class="text-lg font-semibold"
          >Respuestas Acertadas: {{ getCorrectAnswers.length }}</span
        >
        <ul class="flex flex-col gap-3 text-left">
          <li
            v-for="item in getCorrectAnswers"
            :key="item.id"
            class="flex flex-col"
          >
            <span v-html="item.question"></span>
            <div class="bg-orange-100 px-4 p-2 rounded-lg">
              ✅
              <span class="text-gray-400" v-html="item.correct_answer"></span>
            </div>
          </li>
        </ul>
      </div>

      <div class="bg-gray-50 p-3 rounded-lg">
        <span class="text-lg font-semibold"
          >Respuestas Fallidas: {{ getIncorrectAnswers.length }}</span
        >
        <ul class="flex flex-col gap-3 text-left">
          <li
            v-for="item in getIncorrectAnswers"
            :key="item.id"
            class="flex flex-col"
          >
            <span v-html="item.question"></span>
            <div class="bg-orange-100 px-4 p-2 rounded-lg">
              ❌
              <span class="text-gray-400" v-html="item.correct_answer"></span>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <div class="flex gap-5">
      <c-button text="Volver a jugar" @click="$router.push('/')" />
      <c-button text="Compartir" outline />
    </div>
  </c-contain>
</template>
