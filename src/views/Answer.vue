<template>
  <div class="answer">
    <div class="user">
      <img src="@/assets/img/defAvatar.png" alt="">
      <span>2121121</span>
    </div>
    <div class="physicalStrength">1 / 3</div>
    <ul class="fragment">
      <!-- <li v-for="item in 2" v-show="isShow" :key="item" @click="handleFragment(item)"></li> -->
      <li v-show="isShow1" @click="handleFragment(0)"></li>
      <li v-show="isShow2" @click="handleFragment(1)"></li>
    </ul>
    <img src="@/assets/img/ranking.png" class="ranking" @click="ranking" alt/>
    <ul class="icon">
      <li v-for="(item, index) in iconList" :key="index">
        <img :src="item" @click="handleIcon(index)" alt>
      </li>
    </ul>
    <h3 class="info">
      晚8:30-10:30 <span>5次奖励翻倍机会</span>
    </h3>
    <div class="makeMoney">
      <img src="@/assets/img/makeMoney.png" alt="">
      <div></div>
      <div></div>
    </div>
    <progress value="50" max="100"></progress>
    <PopAchieve v-show="isShow" :isShow.sync="isShow" @updateShow="updateShow"></PopAchieve>
  </div>
</template>

<script>
import PopAchieve from '@/components/PopAchieve.vue'
export default {
  data () {
    return {
      iconList: [
        require('@/assets/img/btn-challenge1.png'),
        require('@/assets/img/btn-achievement.png'),
        require('@/assets/img/btn-chest.png'),
        require('@/assets/img/btn-surpriseReward.png')
      ],
      isShow: false,
      isShow1: 1,
      isShow2: 1
    }
  },
  components: { PopAchieve },
  methods: {
    handleFragment (item) {
      console.log(item)
      if (item) {
        this.isShow2 = 0
      } else {
        this.isShow1 = 0
      }
    },
    ranking () {
      console.log('排名')
    },
    handleIcon (index) {
      // switch (index) {
      //   case 0:
      //     console.log('挑战赛')
      //     this.handleChallenge()
      //     break
      //   case 1:
      //     console.log('成就')
      //     break
      //   case 2:
      //     console.log('宝箱')
      //     break
      //   default:
      //     console.log('奖励')
      //     break
      // }
      const arr = ['handleChallenge', 'handleAchieve', 'handleTreasure', 'handleReward']
      this[arr[index]]()
    },
    handleChallenge () {
      console.log('挑战')
    },
    handleAchieve () {
      this.isShow = true
    },
    handleTreasure () {
      console.log('宝箱')
    },
    handleReward () {
      console.log('奖励')
    },
    updateShow (data) {
      this.isShow = data
    }
  }
}
</script>

<style lang="less" scoped>
  @import '~@/assets/less/answer.less';
</style>
