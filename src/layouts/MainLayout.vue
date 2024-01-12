<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          <q-item clickable @click="goTohome()"> Audacity Video Zone </q-item>
        </q-toolbar-title>

        <div>Shuvobroto</div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'MainLayout',

  components: {},

  setup() {
    const $router = useRouter();
    const goTohome = () => {
      $router.push('/');
    };

    return {
      goTohome,
    };
  },
});
</script>
