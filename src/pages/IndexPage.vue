<template>
  <div class="q-pa-md">
    <div class="row">
      <div class="col-12 col-md-4" v-for="tmp in videos" :key="tmp">
        <div class="image-container q-pa-sm">
          <q-img :src="tmp.url" spinner-color="primary" spinner-size="82px" />
          <div class="playBtn">
            <q-btn
              @click="handleWatchClick(tmp.playID)"
              :to="`/playback/${tmp.playID}`"
              flat
              round
              icon="play_circle_filled"
              color="white"
              size="40px"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  setup() {
    const handleWatchClick = (playID) => {
      localStorage.setItem('lastQueue', `/playback/${playID}`);
    };
    return {
      handleWatchClick,
      videos: [
        {
          title: 'Video 1',
          url: 'https://www.imgacademy.com/sites/default/files/styles/scale_1700w/public/2022-07/img-homepage-meta_0.jpg?itok=LMirU0Ik',
          playID: '175334265SHUVOBROTO',
        },
        {
          title: 'Video 2',
          url: 'https://www.imgacademy.com/sites/default/files/styles/scale_1700w/public/2022-07/img-homepage-meta_0.jpg?itok=LMirU0Ik',
          playID: '57564545453443SHUVOBROTO',
        },
        {
          title: 'Video 3',
          url: 'https://www.imgacademy.com/sites/default/files/styles/scale_1700w/public/2022-07/img-homepage-meta_0.jpg?itok=LMirU0Ik',
          playID: '76756545SHUVOBROTO',
        },
        {
          title: 'Video 4',
          url: 'https://www.imgacademy.com/sites/default/files/styles/scale_1700w/public/2022-07/img-homepage-meta_0.jpg?itok=LMirU0Ik',
          playID: '287867565SHUVOBROTO',
        },
        {
          title: 'Video 5',
          url: 'https://www.imgacademy.com/sites/default/files/styles/scale_1700w/public/2022-07/img-homepage-meta_0.jpg?itok=LMirU0Ik',
          playID: '4645454565656SHUVOBROTO',
        },
        {
          title: 'Video 6',
          url: 'https://www.imgacademy.com/sites/default/files/styles/scale_1700w/public/2022-07/img-homepage-meta_0.jpg?itok=LMirU0Ik',
          playID: '0897867564545SHUVOBROTO',
        },
        {
          title: 'Video 7',
          url: 'https://www.imgacademy.com/sites/default/files/styles/scale_1700w/public/2022-07/img-homepage-meta_0.jpg?itok=LMirU0Ik',
          playID: '3535465766SHUVOBROTO',
        },
        {
          title: 'Video 8',
          url: 'https://www.imgacademy.com/sites/default/files/styles/scale_1700w/public/2022-07/img-homepage-meta_0.jpg?itok=LMirU0Ik',
          playID: '6756564545SHUVOBROTO',
        },
        {
          title: 'Video 9',
          url: 'https://www.imgacademy.com/sites/default/files/styles/scale_1700w/public/2022-07/img-homepage-meta_0.jpg?itok=LMirU0Ik',
          playID: '08978675645SHUVOBROTO',
        },
        {
          title: 'Video 10',
          url: 'https://www.imgacademy.com/sites/default/files/styles/scale_1700w/public/2022-07/img-homepage-meta_0.jpg?itok=LMirU0Ik',
          playID: '56564534546SHUVOBROTO',
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.image-container {
  position: relative;
}

.playBtn {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
  z-index: 2;
}
</style>
