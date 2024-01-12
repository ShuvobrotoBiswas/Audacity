<template>
  <div class="video-container">
    <div class="q-pa-md">
      <q-video :ratio="16 / 9" :src="videoURL" autoplay />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      videoURL: '',
    };
  },
  mounted() {
    this.playLastQueuedVideo();
  },
  methods: {
    playLastQueuedVideo() {
      const lastQueue = localStorage.getItem('lastQueue');
      if (lastQueue) {
        const tmp = JSON.parse(lastQueue);
        this.videoURL = tmp.videoURL;
      } else {
        this.videoURL = 'https://www.youtube.com/embed/k3_tw44QsZQ?rel=0';
      }
    },
  },
};
</script>

<style scoped>
.video-container {
  max-width: 800px;
  margin: 50px auto;
}
</style>
