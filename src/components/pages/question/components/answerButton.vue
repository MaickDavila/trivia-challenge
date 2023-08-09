<script>
export default {
  name: "answerButton",
  props: {
    answer: {
      type: String,
      required: true,
    },
    selected: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<template>
  <button
    @click="$emit('selectAnswer', answer)"
    class="w-full rounded-full px-5 border p-2 text-left text-blue-800 truncate"
    :class="selected ? 'bg-blue-800 text-white' : 'bg-white '"
  >
    <span v-html="answer"></span>
  </button>
</template>
