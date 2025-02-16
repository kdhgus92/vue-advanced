// mixin
import bus from "../utils/bus.js";

export default {
  // 재사용할 컴포넌트 옵션 & 로직
  mouted() {
    bus.$emit("end:spinner");
  },
};
