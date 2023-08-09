<script>
import question from "@/components/pages/question/questionIndex.vue";
import useLocalStorage from "@/actions/useLocalStorage";

export default {
  name: "QuestionPage",
  components: {
    question,
  },
  mounted() {
    useLocalStorage.clearCorrectAnswers();
  },
};
</script>

<template>
  <question />
</template>
