import bus from '../utils/bus.js';
// Mixin
export default {
  created() {
    bus.$emit('start:spinner');
    setTimeout(() => {
      this.$store
        .dispatch('FETCH_LIST', this.$route.name)
        .then(() => {
          console.log('fetched');
          bus.$emit('end:spinner');
        })
        .catch(error => {
          console.log(error);
        });
    }, 3000);
  },
  // 재사용할 컴포넌트 옵션  & 로직
};

// HOC
// export default function create()~
