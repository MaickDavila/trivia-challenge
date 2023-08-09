<script>
export default {
  name: "cButton",
  props: {
    text: {
      type: String,
      default: "Click Me!",
    },
    outline: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<template>
  <button
    @click="$emit('click')"
    class="w-full shadow shadow-blue-400 p-2 rounded-lg bg-blue-800"
    :class="[
      outline
        ? 'bg-transparent text-blue-800 border border-blue-800'
        : 'text-white hover:bg-blue-900',
    ]"
  >
    {{ text }}
  </button>
</template>
