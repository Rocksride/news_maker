<template >
    <div class='notification-bar'>
      <transition-group name="list" tag="div">
        <Notification 
          v-for='notification in notifications'
          :key='notification.id'
          :notification='notification'
        ></Notification>
      </transition-group>
    </div>
</template>

<script>
  import Notification from './Notification.vue'
  import { mapState } from 'vuex'
  export default {
    computed: mapState({
      notifications: state => state.notification.notifications
    }),
    components: {
      Notification
    }
  }
</script>

<style lang="scss">

.notification-bar {
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100vw;
  height: auto;
}

.list-leave-active {
  @include show;
  position: absolute !important;
}
.list-enter, .list-leave-to {
  @include hide;
}

</style>