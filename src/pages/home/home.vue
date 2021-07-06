<template>
  <div class="page-container">
    <div>
      <el-radio-group v-model="displayWay">
        <el-radio-button label="list">列表</el-radio-button>
        <el-radio-button label="card">卡片</el-radio-button>
      </el-radio-group>
    </div>
    <el-row class="flex-align-center">
      <el-col :span="12">
        <h3>软件包管理功能</h3>
      </el-col>
      <el-col
        :span="12"
        style="text-align: right;"
      >
        <el-button
          class="el-icon-plus"
          type="primary"
          @click="handleOpenDialog"
        >
          <span style="margin-left: 8px">新建</span>
        </el-button>
      </el-col>
    </el-row>
    <div v-show="displayWay=='list'">
      <ul class="page-content">
        <li
          @click="handleOpenDialog"
          class="page-content-list"
          v-for="item in datalist"
          :key="item.id"
        >
          <img
            src="@/assets/13.png"
            class="page-content-list-img"
            alt=""
          >
          <div class="page-content-list-info">
            <div class="page-content-list-info-name">{{item.softName}}</div>
            <div class="flex-align-center">
              <div class="page-content-list-info-user flex-align-center">
                <img src="@/assets/user.svg" /> <span>{{item.userName}}</span>
              </div>
              <div class="page-content-list-info-time flex-align-center">
                <!-- <i
                  class="el-icon-time"
                  style="margin-right: 8px;"
                ></i>  -->
                <span>{{item.updateTime}}</span>
              </div>
            </div>
            <el-tooltip
              effect="dark"
              :content="item.desc"
              placement="bottom"
            >
              <div class="page-content-list-info-desc flex-align-center txt-hidden">
                <img src="@/assets/desc.svg" />
                <span>{{item.desc}}</span>
              </div>
            </el-tooltip>
          </div>
          <div class="page-content-list-right">
            <div class="id-code">标识码: {{item.idCode}}</div>
            <div class="download">
              <div>{{item.downLoadNum}}</div>
              <div class="download-num">下载次数</div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div v-show="displayWay == 'card'">
      <ul class="card-content">
        <li
          @mouseover="$set(item,'hover',true)"
          @mouseout="$set(item,'hover',false)"
          @click="handleOpenDialog"
          class="card-content-list"
          v-for="item in datalist"
          :key="item.id"
        >
          <div
            v-show="item.hover"
            class="card-content-list-right"
          >
            <div class="id-code">标识码: {{item.idCode}}</div>
          </div>
          <img
            class="card-cover"
            src="@/assets/13.png"
            alt=""
          >
          <el-row>
            <el-col :span="24">
              <div class="card-content-list-info">
                <div class="card-content-list-info-name">{{item.softName}}</div>
                <div class="card-content-list-info-download flex-align-center">
                  <img src="@/assets/download.svg" /> <span>{{item.downLoadNum}}</span> <span class="count-txt">下载次数</span>
                </div>
                <div class="flex-align-center">
                  <div class="card-content-list-info-user flex-align-center">
                    <img src="@/assets/user.svg" /> <span>{{item.userName}}</span>
                  </div>
                  <div class="card-content-list-info-time flex-align-center">
                    <!-- <i
                  class="el-icon-time"
                  style="margin-right: 8px;"
                ></i>  -->
                    <span>{{item.updateTime}}</span>
                  </div>
                </div>
                <el-tooltip
                  effect="dark"
                  :content="item.desc"
                  placement="bottom"
                >
                  <div class="card-content-list-info-desc flex-align-center txt-hidden">
                    <img src="@/assets/desc.svg" />
                    <span>{{item.desc}}</span>
                  </div>
                </el-tooltip>
              </div>
            </el-col>
          </el-row>
        </li>
      </ul>
    </div>
    <el-dialog
      title="新建软件包"
      :visible.sync="dialogVisible"
      width="45%"
      :before-close="handleClose"
      :close-on-click-modal="false"
    >
      <el-form
        ref="form"
        :rules="rules"
        :model="form"
        label-width="100px"
      >
        <el-row>
          <el-col :span="12">
            <el-form-item
              label="软件名称"
              prop="name"
            >
              <el-input
                placeholder="请输入软件名称"
                v-model="form.name"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item
              label="软件标识码"
              prop="idCode"
            >
              <el-input
                placeholder="请输入软件标识码"
                v-model="form.idCode"
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item
              label="软件类型"
              prop="type"
            >
              <el-select
                clearable
                style="width: 100%"
                v-model="form.type"
                placeholder="请选择软件类型"
              >
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </el-form-item>

          </el-col>
          <el-col :span="12">
            <el-form-item
              label="软件路径"
              prop="url"
            >
              <el-input
                placeholder="请输入软件路径"
                v-model="form.url"
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item
              label="软件封面"
              prop="cover"
            >
              <el-input
                placeholder="请输入软件封面"
                v-model="form.cover"
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item
              label="软件描述"
              prop="desc"
            >
              <el-input
                placeholder="请输入软件描述"
                type="textarea"
                :rows="4"
                resize="none"
                v-model="form.desc"
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>

      <div slot="footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button
          type="primary"
          @click="handleSubmit"
        >确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      datalist: [],
      displayWay: "list",
      dialogVisible: false,
      form: {
        name: "",
        idCode: "",
        type: "",
        url: "",
        cover: "",
        desc: "",
      },
      rules: {
        name: [{ required: true, message: "请输入软件名称", trigger: "blur" }],
        idCode: [
          { required: true, message: "请输入软件标识码", trigger: "blur" },
        ],
        type: [
          { required: true, message: "请选择软件类型", trigger: "change" },
        ],
        url: [
          {
            required: true,
            message: "请输入软件路径",
            trigger: "blur",
          },
        ],
        cover: [
          {
            required: true,
            message: "请输入软件封面",
            trigger: "blur",
          },
        ],
        desc: [
          {
            required: true,
            message: "请输入软件描述",
            trigger: "blur",
          },
        ],
      },
      options: [
        {
          value: "1",
          label: "办公软件",
        },
        {
          value: "2",
          label: "教育软件",
        },
      ],
    };
  },
  methods: {
    handleOpenDialog() {
      this.dialogVisible = true;
      this.$refs["form"].resetFields();
    },
    handleSubmit() {
      this.$refs["form"].validate((valid) => {
        if (valid) {
          alert("submit!");
          this.dialogVisible = false;
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    handleClose(done) {
      done();
    },
  },
  created() {
    for (let index = 0; index < 15; index++) {
      this.datalist.push({
        id: index,
        softName: "工时统计办公软件",
        userName: "张三",
        updateTime: "2021-07-05",
        desc: "这是一款集出勤打卡、调休请假、填报工时、工时统计等多功能的软件",
        idCode: "A2331333",
        downLoadNum: "100",
      });
    }
  },
};
</script>

<style lang="scss" scoped>
.page-container {
  background-color: #f7f7f8;
  padding: 20px;
}
.flex-align-center {
  display: flex;
  align-items: center;
}

.txt-hidden {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1; /* 限制在一个块元素显示的文本的行数 */
  -webkit-box-orient: vertical; /* 垂直排列 */
  word-break: break-all; /* 内容自动换行 */
  height: 21px;
}

.download {
  text-align: right;
  margin-right: 10px;
  margin-top: 8px;
  &-num {
    color: #666;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    &::before {
      content: "";
      display: inline-block;
      width: 16px;
      height: 16px;
      background: url(../../assets/download.svg) no-repeat;
      background-size: 100% 100%;
    }
  }
}
// 列表展示
.page-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  &-list {
    position: relative;
    display: flex;
    align-items: center;
    padding: 20px;
    background-color: #fff;
    border-radius: 5px;
    margin-bottom: 10px;
    width: 900px;

    &-img {
      width: 240px;
      height: 120px;
      border-radius: 5px;
    }

    &-info {
      display: flex;
      flex-direction: column;
      margin-left: 20px;

      img {
        width: 16px;
        height: 16px;
        margin-right: 8px;
      }

      &-user {
        color: #222;
        margin-bottom: 8px;
      }

      &-name {
        font-size: 16px;
        font-weight: bold;
        margin-bottom: 38px;
      }

      &-time {
        color: #999;
        margin-bottom: 8px;
        margin-left: 8px;
      }

      &-desc {
        color: #666;
        width: 400px;
      }
    }
    &-right {
      position: absolute;
      right: 0;
      top: 0;
      .id-code {
        background-image: linear-gradient(to right, #b8ad8c, #cfc7ad, #b8ad8c);
        color: #fff;
        text-align: center;
        padding: 5px 10px;
        border-radius: 0px 5px 0px 0px;
        font-size: 14px;
      }
    }
  }
}

// 卡片展示
.card-content {
  display: grid;
  grid-template-columns: repeat(5, 20%);
  .count-txt {
    font-size: 14px;
    color: #999;
    margin-left: 8px;
  }
  &-list {
    position: relative;
    box-sizing: border-box;
    background-color: #fff;
    border-radius: 5px;
    width: 95%;
    margin-bottom: 5%;
    height: 300px;
    transition: 0.3s linear;
    &:hover {
      transform: translateY(-10px);
    }
    .card-cover {
      border-radius: 5px 5px 0 0;
      width: 100%;
      height: 50%;
    }
    &-info {
      display: flex;
      flex-direction: column;
      padding: 10px;

      img {
        width: 16px;
        height: 16px;
        margin-right: 8px;
      }

      &-user {
        color: #222;
        margin-bottom: 8px;
      }
      &-download {
        color: #666;
        margin-bottom: 8px;
      }
      &-name {
        font-size: 16px;
        font-weight: bold;
        margin-bottom: 20px;
      }

      &-time {
        color: #999;
        margin-bottom: 8px;
        margin-left: 8px;
      }

      &-desc {
        color: #666;
      }
    }
    &-right {
      position: absolute;
      right: 0;
      top: 0;
      .id-code {
        background-image: linear-gradient(to right, #b8ad8c, #cfc7ad, #b8ad8c);
        color: #fff;
        text-align: center;
        padding: 5px 10px;
        border-radius: 0px 5px 0px 0px;
        font-size: 14px;
      }
    }
  }
}
</style>