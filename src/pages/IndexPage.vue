<template>
  <div class="q-pa-md">
    <div class="row">
      <div class="col-12 col-md-4" v-for="tmp in videos" :key="tmp">
        <div class="q-pa-sm">
          <q-img :src="tmp.url" spinner-color="primary" spinner-size="82px">
            <q-btn
              flat
              round
              icon="play_circle_filled"
              color="white"
              size="40px"
            />
          </q-img>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  setup() {
    return {
      videos: [
        {
          title: 'Video 1',
          url: 'https://www.imgacademy.com/sites/default/files/styles/scale_1700w/public/2022-07/img-homepage-meta_0.jpg?itok=LMirU0Ik',
        },
        {
          title: 'Video 2',
          url: 'https://www.imgacademy.com/sites/default/files/styles/scale_1700w/public/2022-07/img-homepage-meta_0.jpg?itok=LMirU0Ik',
        },
        {
          title: 'Video 3',
          url: 'https://www.imgacademy.com/sites/default/files/styles/scale_1700w/public/2022-07/img-homepage-meta_0.jpg?itok=LMirU0Ik',
        },
        {
          title: 'Video 4',
          url: 'https://www.imgacademy.com/sites/default/files/styles/scale_1700w/public/2022-07/img-homepage-meta_0.jpg?itok=LMirU0Ik',
        },
        {
          title: 'Video 5',
          url: 'https://www.imgacademy.com/sites/default/files/styles/scale_1700w/public/2022-07/img-homepage-meta_0.jpg?itok=LMirU0Ik',
        },
        {
          title: 'Video 6',
          url: 'https://www.imgacademy.com/sites/default/files/styles/scale_1700w/public/2022-07/img-homepage-meta_0.jpg?itok=LMirU0Ik',
        },
        {
          title: 'Video 7',
          url: 'https://www.imgacademy.com/sites/default/files/styles/scale_1700w/public/2022-07/img-homepage-meta_0.jpg?itok=LMirU0Ik',
        },
        {
          title: 'Video 8',
          url: 'https://www.imgacademy.com/sites/default/files/styles/scale_1700w/public/2022-07/img-homepage-meta_0.jpg?itok=LMirU0Ik',
        },
        {
          title: 'Video 9',
          url: 'https://www.imgacademy.com/sites/default/files/styles/scale_1700w/public/2022-07/img-homepage-meta_0.jpg?itok=LMirU0Ik',
        },
        {
          title: 'Video 10',
          url: 'https://www.imgacademy.com/sites/default/files/styles/scale_1700w/public/2022-07/img-homepage-meta_0.jpg?itok=LMirU0Ik',
        },
      ],
    };
  },
};
</script>

<style scoped>
.play-icon {
  font-size: 5em;
  color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
}
</style>
