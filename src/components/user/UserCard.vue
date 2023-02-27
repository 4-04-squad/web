<template>
    <div :class="`user-card grid ${full}`">
       <div :class="`column user-card__avatar ${size}`">
            <img :src="user.avatar" :alt="user.pseudo" />
            <div :class="`user-card__status ${user.status}`"></div>
       </div>
       <div class="column user-card__details">
            <h3>{{ user.pseudo }} <span>{{ info }}</span></h3>
            <p>{{ preview }}</p>
       </div>
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'UserCard',
    props: {
        user: {
            type: Object,
            required: true
        },
        full: {
            type: String,
            default: 'full-card',
        },
        size: {
            type: String,
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
    }
})

</script>

<style lang="scss" scoped>
.user-card {
    &.full-card {
        grid-template-columns: 1fr 2fr;
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