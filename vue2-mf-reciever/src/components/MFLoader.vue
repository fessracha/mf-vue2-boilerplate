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
    this.initElementMount();
    this.initMFStorageLinks()
    this.mountLocalMFStorageLinks();
    this.initObserver();

    import('mf_mntg/initMntgApp')
        .then((initMntgApp) => {
          initMntgApp.default(this.elementMount, '/demo/')

          this.status = 'success';
        })
        .catch(e => {
          console.error('Error load MF');
          console.error(e);
          this.status = 'error';
        });
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
    mountLocalMFStorageLinks() {
      this.localMFStorageLinks.forEach(item => {
        const style = document.createElement('style');
        style.dataset.vueSsrId = item.vueSsrId;
        style.innerText = item.text;
        this.elementMount.before(style);
      })
    },
    initObserver() {
      const head = document.querySelector('head')
      const config = {
        childList: true,
      };
      const observer = new MutationObserver((mutationsList) => {
        mutationsList.forEach(mutation => {
          mutation.addedNodes.forEach(node => {
            const { vueSsrId } = node.dataset;
            if (vueSsrId) {
              window.MFStorageLinks.ads.push({
                vueSsrId: vueSsrId,
                text: node.innerText,
              });
              this.elementMount.before(node);
            }
          });
        })
      });
      observer.observe(head, config);
    },
  }
}
</script>

<style scoped>

</style>
