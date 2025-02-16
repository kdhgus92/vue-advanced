<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
import ListItem from "../components/ListItem.vue";
// import { mapGetters } from "vuex";
// import { mapState } from "vuex";

export default {
  components: {
    ListItem,
  },
  // computed: {
  //   ...mapGetters(["fetchedAsk"]),
  // ...mapState({
  //   fetchedAsk: state => state.ask
  // })
  // },
};
</script>
