<template>
    <RouterLink :to="{ name: 'user', params: { id: user.id } }">
        <div :class="`user-card grid ${full}-card`">
            <div :class="`column user-card__avatar ${size}`">
                <img :src="user.avatar" :alt="user.pseudo" />
                <div :class="`user-card__status ${user.status.toLocaleLowerCase()}`"></div>
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
import { RouterLink } from 'vue-router'
import type { UserInterface } from '@/interfaces/user.interface'
import { defineComponent } from 'vue'
import type { PropType } from 'vue'

type Size = "medium" | "small" | "large";
type CardSize = "full" | "half";

export default defineComponent({
    name: 'UserCard',
    props: {
        user: {
            type: Object as () => UserInterface,
            default: null
        },
        full: {
            type: String as PropType<CardSize>,
            default: 'full',
        },
        size: {
            type: String as PropType<Size>,
            default: 'medium'
        },
        info: {
            type: String,
            default: ''
        },
        preview: {
            type: String,
            default: ''
        }
    },
})

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
        border: 2px solid white;

        &.offline {
            background-color: red;
        }

        &.playing {
            background-color: orange;
        }

        &.online {
            background-color: green;
        }
    }
}
</style>