<template>
  <RouterLink
    :class="`user user-${size}`"
    :to="isCurrentUser() ? { name: 'profile' } : { name: 'user', params: { pseudo: user.pseudo } }"
 >
    <div :class="`user-card grid ${full}-card`">
      <div :class="`column user-card__avatar ${size}`">
        <img :src="user.avatar" :alt="user.pseudo" />
        <div
          :class="`user-card__status ${user.status.toLocaleLowerCase()}`"
        ></div>
      </div>
      <div class="column user-card__details">
        <h3>{{ user.pseudo }}</h3>
        <p v-if="info.length">{{ info }}</p>
        <p v-if="preview.length">{{ preview }}</p>
      </div>
    </div>
  </RouterLink>
</template>

<script lang="ts">
import { RouterLink } from "vue-router";
import type { UserInterface } from "@/interfaces/user.interface";
import { defineComponent } from "vue";
import type { PropType } from "vue";
import { useUserStore } from "@/stores/user";

type Size = "medium" | "small" | "large";
type CardSize = "full" | "half";

export default defineComponent({
  name: "UserCard",
  components: {
    RouterLink,
  },
  props: {
    user: {
      type: Object as () => UserInterface,
      default: null,
    },
    full: {
      type: String as PropType<CardSize>,
      default: "full",
    },
    size: {
      type: String as PropType<Size>,
      default: "medium",
    },
    info: {
      type: String,
      default: "",
    },
    preview: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    // check if current user is the same as the user in the card
    const userStore = useUserStore();
    const isCurrentUser = () => {
      return props.user.pseudo === userStore.user?.pseudo ? true : false;
    };
    return {
      isCurrentUser,
    };
  },
});
</script>

<style lang="scss" scoped>
.user-card {
  &.full-card {
    grid-template-columns: 1fr 2fr;
    align-items: center;
  }

  &.half-card {
    grid-template-columns: 1fr;

    .user-card__details {
      display: none;
    }
  }

  &__avatar {
    width: 50px;
    height: 50px;
    overflow: hidden;
    position: relative;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 50%;
    }

    &.small {
      width: 30px;
      height: 30px;
    }

    &.medium {
      width: 50px;
      height: 50px;
    }

    &.large {
      width: 100px;
      height: 100px;
    }
  }

  &__status {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: grey;
    border: 2px solid var(--secondary-color);

    &.offline {
      background-color: var(--danger-color);
    }

    &.playing {
      background-color: var(--primary-color);
    }

    &.online {
      background-color: var(--success-color);
    }
  }
}
</style>
