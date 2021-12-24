<template>
  <div ref="shadowRoot">
    <slot v-if="status === 'loading'" name="loading" />
    <span v-else-if="status === 'success'">success</span>
    <slot v-else name="error" />
  </div>
</template>

<script>
export default {
  name: 'MFLoader',
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      status: 'loading',
      elementMount: null,
      localMFStorageLinks: [],
    }
  },
  mounted() {
    // this.initMFStorageLinks()
    // this.initElementMount();
    // this.initObserver();

    import('mf_mntg/initMntgApp')
        .then((initMntgApp) => {
          initMntgApp.default(this.$refs.shadowRoot, '/demo/')

          this.status = 'success';
        })
        .catch(e => {
          console.error('Error load MF');
          console.error(e);
          this.status = 'error';
        });
  },
  watch: {
    localMFStorageLinks: 'onChangeLocalMFStorageLinks'
  },
  methods: {
    initMFStorageLinks() {
      if (!window.MFStorageLinks) {
        window.MFStorageLinks = {
          ads: [],
        }
      } else {
        const ads = window.MFStorageLinks.ads || [];
        ads.forEach(item => this.localMFStorageLinks.push(item));
      }
    },
    initElementMount() {
      const { shadowRoot } = this.$refs;
      shadowRoot.attachShadow({mode: 'open'});
      shadowRoot.shadowRoot.innerHTML = '<div></div>';
      this.elementMount = shadowRoot.shadowRoot.querySelector('div');
    },
    initObserver() {
      const head = document.querySelector('head')
      const config = {
        childList: true,
      };
      const observer = new MutationObserver((mutationsList) => {
        mutationsList.forEach(mutation => {
          mutation.addedNodes.forEach(node => {
            const { appFrom } = node.dataset;
            if (appFrom === 'ads') {
              window.MFStorageLinks.ads.push(node.href);
              this.elementMount.before(node);
              console.log(node.href);
            }
          });
        })
      });
      observer.observe(head, config);
    },
    onChangeLocalMFStorageLinks(newArr) {
      newArr.forEach(item => {
        const link = document.createElement('link');
        link.type = 'text/css';
        link.rel= 'stylesheet';
        link.href = item;
        this.elementMount.before(link);
      })
    }
  }
}
</script>

<style scoped>

</style>
