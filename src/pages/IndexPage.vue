<template>
  <div class="q-pa-md">
    <div class="row">
      <div class="col-12 col-md-4" v-for="tmp in videos" :key="tmp">
        <div class="image-container q-pa-sm">
          <q-img
            :src="tmp.videBanner"
            spinner-color="primary"
            spinner-size="82px"
          />
          <div class="playBtn">
            <q-btn
              @click="handleWatchClick(tmp)"
              :to="`/playback/${tmp.playID}`"
              flat
              round
              icon="play_circle_filled"
              color="white"
              size="40px"
            />
          </div>
        </div>
        <div class="text-bold">{{ tmp.videoTitle }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  setup() {
    const handleWatchClick = (tmp) => {
      localStorage.setItem('lastQueue', JSON.stringify(tmp));
    };
    return {
      handleWatchClick,
      videos: [
        {
          videoTitle: 'Central Cee x Dave - Sprinter [Music Video]',
          videoURL: 'https://www.youtube.com/embed/pSY3i5XHHXo',
          title: 'Video 1',
          videBanner:
            'https://www.imgacademy.com/sites/default/files/styles/scale_1700w/public/2022-07/img-homepage-meta_0.jpg?itok=LMirU0Ik',
          playID: '175334265SHUVOBROTO',
        },
        {
          videoTitle: 'Krillz - Boujee (Official Music Video)',
          videoURL: 'https://www.youtube.com/embed/sd8C7z_MAdY',
          title: 'Video 2',
          videBanner:
            'https://www.imgacademy.com/sites/default/files/styles/scale_1700w/public/2022-07/img-homepage-meta_0.jpg?itok=LMirU0Ik',
          playID: '57564545453443SHUVOBROTO',
        },
        {
          videoTitle: 'Krillz - Not In The Mood (Official Music Video)',
          videoURL: 'https://www.youtube.com/embed/TcF3lBrVvDE',
          title: 'Video 3',
          videBanner:
            'https://www.imgacademy.com/sites/default/files/styles/scale_1700w/public/2022-07/img-homepage-meta_0.jpg?itok=LMirU0Ik',
          playID: '76756545SHUVOBROTO',
        },
        {
          videoTitle: 'Idhe Idhe | Hi Nanna',
          videoURL: 'https://www.youtube.com/embed/tK4qSZHc9dk',
          title: 'Video 4',
          videBanner:
            'https://www.imgacademy.com/sites/default/files/styles/scale_1700w/public/2022-07/img-homepage-meta_0.jpg?itok=LMirU0Ik',
          playID: '287867565SHUVOBROTO',
        },
        {
          videoTitle: 'Samayama Song | Hi Nanna ',
          videoURL: 'https://www.youtube.com/embed/Zz1M1iVEkwM',
          title: 'Video 5',
          videBanner:
            'https://www.imgacademy.com/sites/default/files/styles/scale_1700w/public/2022-07/img-homepage-meta_0.jpg?itok=LMirU0Ik',
          playID: '4645454565656SHUVOBROTO',
        },
        {
          videoTitle: 'Soniyo - Sonu Nigam',
          videoURL: 'https://www.youtube.com/embed/hbGqSc9-zo8',
          title: 'Video 6',
          videBanner:
            'https://www.imgacademy.com/sites/default/files/styles/scale_1700w/public/2022-07/img-homepage-meta_0.jpg?itok=LMirU0Ik',
          playID: '0897867564545SHUVOBROTO',
        },
        {
          videoTitle: 'Laal Peeli Akhiyaan (Song) ',
          videoURL: 'https://www.youtube.com/embed/tThJdNt-_5I',
          title: 'Video 7',
          videBanner:
            'https://www.imgacademy.com/sites/default/files/styles/scale_1700w/public/2022-07/img-homepage-meta_0.jpg?itok=LMirU0Ik',
          playID: '3535465766SHUVOBROTO',
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
