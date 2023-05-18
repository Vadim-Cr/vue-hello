const { createApp } = Vue;

createApp({
    data () {
        return {
            message: "Hello Vue",
            mie_classi: "red p-5"
        };
    }
}).mount("#title");

createApp({
  data() {
    return {
      image: 'https://unsplash.it/600/300?image=171'
    };
  }
}).mount("#my_image");