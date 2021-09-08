Vue.config.devtools = true;
const app = new Vue({
  el: "#root",
  data: {
    contenPhoto: 0,
    images: [
      "img/image1.jpg",
      "img/image2.jpg",
      "img/image3.jpg",
      "img/image4.jpg",
    ],
  },
  methods: {
    prev() {
      this.contenPhoto--;
      if (this.contenPhoto < 0) this.contenPhoto = this.images.length - 1;
    },
    next() {
      this.contenPhoto++;
      if (this.contenPhoto == this.images.length) this.contenPhoto = 0;
    },
  },
  mounted() {
    setInterval(() => {
      this.next();
    }, 3000);
  },
});
