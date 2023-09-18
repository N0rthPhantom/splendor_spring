<script setup>

import {ref, reactive} from "vue";

const activeBtn = ref("create_game");

const create_game_data = reactive({
  game_name: '',
  nick_name: '',
})
const join_game_data = reactive({
  game_name: '',
  nick_name: '',
})

function opTabOver(tabName) {
  console.log(tabName);
  activeBtn.value = tabName;
}

function create_game_func() {

}

function join_game_func() {

}

</script>

<template>
  <el-container>
    <el-header>
      <div class="wrapper">
        Splendor 璀璨宝石
      </div>
    </el-header>

    <el-main>
      <el-container>
        <el-col :span="4"></el-col>
        <el-col :span="16">
          <el-card id="main" class="box-card">

            <el-container>
              <el-main id="banner">
                <!--      <img src="@assets/img/banner.webp?url" alt="">-->
              </el-main>
              <el-aside id="game_creator" width="320px">
                <h1>璀璨宝石</h1>
                <h1>Splendor</h1>
                <el-tabs type="border-card">
                  <el-tab-pane label="创建新游戏">
                    <el-form :model="create_game_data">
                      <el-form-item label="新游戏名">
                        <el-input v-model="create_game_data.game_id" placeholder="仅支持字母数字下划线"/>
                      </el-form-item>
                      <el-form-item label="您的昵称">
                        <el-input v-model="create_game_data.nick_name"/>
                      </el-form-item>
                      <el-form-item>
                        <el-button type="primary" @click="create_game_func">创建</el-button>
                      </el-form-item>
                    </el-form>
                  </el-tab-pane>
                  <el-tab-pane label="加入游戏">
                    <el-form :model="join_game_data">
                      <el-form-item label="游戏ID">
                        <el-input v-model="join_game_data.game_id" placeholder="请输入好友向您分享的游戏ID"/>
                      </el-form-item>
                      <el-form-item label="您的昵称">
                        <el-input v-model="join_game_data.nick_name"/>
                      </el-form-item>
                      <el-form-item>
                        <el-button type="primary" @click="join_game_func">加入</el-button>
                      </el-form-item>
                    </el-form>
                  </el-tab-pane>
                </el-tabs>
              </el-aside>
            </el-container>

          </el-card>

        </el-col>
        <el-col :span="4"></el-col>


      </el-container>
    </el-main>

    <el-footer>CopyRight@2023 NorthPhantom.</el-footer>
  </el-container>
</template>

<style scoped>

.el-header {
 padding: 0;
}

.el-header .wrapper {
  background-color: rgba(216, 225, 232, 0.99);
  height: 45px;
  line-height: 45px;
  font-size: 16px;
  text-align: center;
  font-weight: bold;
  color: darkgray;
}

.el-footer{
  text-align: center;
}

#main #banner {
  background: url("@assets/img/banner.jpeg?url") center;
  background-size: cover;
}

#main h1 {
  font-size: 32px;
  text-align: center;
  font-weight: bold;
  line-height: 48px;
}

#main #game_creator{
  margin-left: 20px;
}

#main .el-tabs{
  margin-top: 32px;
}

@media (min-width: 1000px) {
  header {

  }

  header .wrapper {

  }
}
</style>
