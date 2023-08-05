import { ref } from "vue";

export default {
  setup() {
    const name = ref("keyvan");
    return {
      name,
    };
  },
};
