<script>
import home from "@/components/pages/home/homeIndex.vue";
import useLocalStorage from "@/actions/useLocalStorage";
export default {
  name: "HomePage",
  components: { home },
  mounted() {
    useLocalStorage.clearAll();
  },
};
</script>

<template>
  <home />
</template>
