<template >
  <div 
    ref='tr'
    role='alert'
    class='notification-item'
    :class='getType'
  >
    <h3>{{ notification.message }}</h3>
    <span 
      role='button'
      @click="removeNotification(notification)"
      class="close"
    >x</span>
  </div>
</template>

<script>
  import { mapActions, mapState } from 'vuex'
  export default {
    props: {
      notification: {
        required: true,
        type: Object
      }
    },
    created() {
      const subsrc = setTimeout(() => {
        this.removeNotification(this.notification)
      }, this.timeout)

      this.$on('hook:destroyed', () => {
        clearTimeout(subsrc)
      })
    },
    methods: mapActions(['removeNotification']),
    computed: {
      ...mapState({
        timeout: state => state.notification.timeout
      }),
      getType() {
        return {
          error: this.notification.type === "error", 
          success: this.notification.type=== "success",
          warning: this.notification.type=== "warning"
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .notification-item {
    width: 100%;
    // border: 1px solid;
    font-size: 2.4rem;
    padding: .8rem 2rem;
    font-weight: 700;
    display: flex;
    position: relative;
    @include translateTransition;


    &.translated {
      @include hide;
      transform: translateY(600%);
    }

    & .close {
      user-select: none;
      cursor: pointer;
      position: absolute;
      top: 50%;
      right: 3%;
      font-size: 2.2rem;
      transform: translate(-50%, -50%);
      padding: 3px;
      transition: all .3s ease-out;
      &:hover {
        // font-size: 2.3rem;
        color: white;
      }
    }

  }

  .error {
    @include notificationFactory(0);
  }

  .warning {
    @include notificationFactory(50);
  }

  .success {
    @include notificationFactory(200);

  }


</style>