<template>
  <div class="achieve">
    <div class="pop">
      <div class="main">
        <ul>
          <li v-for="(item, index) in achieveList" :key="index" :class="{ active:item.status }">
            <img src="@/assets/img/completed.png" class="completed" v-show="item.status" alt/>
            <div class="top">
              <div class="number">LV.{{ index+1 }} <span>{{ item.num }}</span></div>
              <div class="coin">+{{ item.coin }}</div>
            </div>
            <div class="bottom">{{ item.rule }}</div>
          </li>
        </ul>
      </div>
      <img src="@/assets/img/popClose.png" class="close" @click="close" alt="">
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      achieveList: [
        {
          num: '初出茅庐',
          coin: 50,
          status: 1,
          rule: '啊哈哈哈哈哈哈哈哈sadfiosjgfosa赛哦对方能死啊的功能山东偶是带哦能解决大方士大夫'
        },
        {
          num: '小试牛刀',
          coin: 50,
          status: 1,
          rule: '拜拜拜拜拜拜靶标必败靶标比'
        },
        {
          num: '初出茅庐',
          coin: 50,
          status: 0,
          rule: '黑恶黑额黑黑黑黑黑黑和'
        },
        {
          num: '初出茅庐',
          coin: 50,
          status: 0,
          rule: '黑恶黑额黑黑黑黑黑黑和'
        }
      ]
    }
  },
  methods: {
    close () {
      this.$emit('updateShow', false)
      // this.$emit('update:isShow', false)
    }
  }
}
</script>

<style lang="less" scoped>
.achieve {
  position: fixed;
  width: 100%;
  min-height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1;
}
.pop {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 660px;
  height: 854px;
  border-radius: 10px;
  background-color: #fff;
  padding: 30px;
  .main {
    width: 600px;
    height: 796px;
    overflow: auto;
    ul {
      width: 100%;
      li {
        position: relative;
        height: 232px;
        margin-bottom: 20px;
        border-radius: 10px;
        background-color: rgba(234, 234, 234, 1);
        opacity: .7;
        .top {
          position: relative;
          height: 103px;
          border-bottom: 2px dashed rgba(182, 89, 120, .3);
          .number {
            position: absolute;
            top: 50%;
            left: 0;
            transform: translateY(-50%);
            width: 211px;
            height: 53px;
            line-height: 53px;
            background: url('~@/assets/img/label-gray.png') no-repeat center center;
            background-size: contain;
            padding-left: 15px;
            font-size: 24px;
            color: #fff;
            span {
              font-size: 30px;
              font-weight: bold;
            }
          }
          .coin {
            position: absolute;
            top: 50%;
            right: 50px;
            height: 103px;
            line-height: 103px;
            transform: translateY(-50%);
            background: url('~@/assets/img/cion4.png') no-repeat left center;
            background-size: 51px 51px;
            padding-left: 60px;
            font-size: 28px;
            font-weight: bold;
            color: rgba(86, 53, 56, 1);
          }
        }
        .bottom {
          padding: 26px;
          font-size: 30px;
          font-weight: 500;
          color: rgba(86, 53, 56, 1);
          text-align: justify;
        }
        .completed {
          position: absolute;
          top: 43px;
          right: 200px;
          width: 125px;
          height: 127px;
        }
      }
      .active {
        background-color: rgba(253, 237, 233, 1);
        opacity: 1;
        .top {
          border-bottom: 2px dashed rgba(182, 89, 120, .5);
          .number {
            background: url('~@/assets/img/label-red.png') no-repeat center center;
          }
        }
      }
      li:last-child {
        margin-bottom: 0;
      }
    }
  }
  .close {
    position: absolute;
    top: 5px;
    right: 10px;
    width: 61px;
    height: 61px;
  }
}

</style>
