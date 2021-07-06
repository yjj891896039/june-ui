<template>
  <div class="page-container">
    <el-row class="flex-align-center">
      <el-col :span="12">
        <h3>软件包管理</h3>
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
          <span style="margin-left: 8px">添加app</span>
        </el-button>
      </el-col>
    </el-row>
    <div>
      <ul class="page-content">
        <li
          v-for="item in datalist"
          :key="item.id"
        >
          <el-row>
            <el-col
              :span="24"
              class="form-list-item"
            >
              <label class="form-list-label">软件名称:</label>
              <div class="form-list-value">{{item.softName}}</div>
            </el-col>
            <el-col
              :span="24"
              class="form-list-item"
            >
              <label class="form-list-label">进程ID:</label>
              <div class="form-list-value">{{item.processId}}</div>
            </el-col>
            <el-col
              :span="24"
              class="form-list-item"
            >
              <label class="form-list-label">软件包名称:</label>
              <div class="form-list-value">{{item.softPackageName}}</div>
            </el-col>
            <el-col
              :span="24"
              class="form-list-item"
            >
              <label class="form-list-label">启动时间:</label>
              <div class="form-list-value">{{item.startTime}}</div>
            </el-col>
            <el-col
              :span="24"
              class="form-list-item"
              style="margin-bottom: 30px;"
            >
              <label class="form-list-label">状态:</label>
              <div
                class="form-list-value"
                v-if="item.status == '1'"
              >正在运行</div>
              <div
                class="form-list-value"
                v-if="item.status == '2'"
              >未启动</div>
              <div
                class="form-list-value"
                v-if="item.status == '3'"
              >下载失败</div>
              <div
                class="form-list-value"
                v-if="item.status == '4'"
              >
                <el-progress
                  :text-inside="true"
                  :stroke-width="24"
                  :format="formatPerTxt"
                  :percentage="item.per"
                  status="success"
                ></el-progress>
              </div>
            </el-col>
            <el-col
              :span="24"
              style="justify-content: center；margin-bottom: 0"
              class="form-list-item"
            >
              <el-button
                type="primary"
                class="el-icon-refresh-left"
                size="medium"
              >
                <span class="btn-txt">重启</span>
              </el-button>
              <el-button
                type="warning"
                class="el-icon-close"
                size="medium"
              >
                <span class="btn-txt">关闭</span>
              </el-button>
              <el-button
                type="danger"
                class="el-icon-folder-remove"
                size="medium"
              >
                <span class="btn-txt">移除</span>
              </el-button>
            </el-col>
          </el-row>
        </li>
      </ul>
    </div>
    <el-dialog
      title="添加APP"
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
          <el-col :span="10">
            <el-form-item
              label="软件编码"
              prop="code"
            >
              <el-input
                placeholder="请输入软件编码"
                v-model="form.code"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="14">
            <el-form-item
              label="软件类型"
              prop="type"
            >
              <el-select
                style="width: 55%;margin-right: 10px;"
                clearable
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
              <el-button type="primary" class="el-icon-search">查询</el-button>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="10">
            <el-form-item
              label="选择软件"
              prop="software"
            >
              <el-select
                clearable
                style="width: 100%"
                v-model="form.software"
                placeholder="请选择软件"
              >
                <el-option
                  v-for="item in options2"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button
          style="margin-left: 10px"
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
      dialogVisible: false,
      datalist: [],
      rules:{
        code: [{ required: true, message: "请输入软件编码", trigger: "blur" }],
        type: [
          { required: true, message: "请选择软件类型", trigger: "change" },
        ],
        software: [
          { required: true, message: "请选择软件", trigger: "change" },
        ],
      },
      form: {
        code: '',
        type: '',
        software: ''
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
      options2: [
        {
          value: "1",
          label: "办公软件1",
        },
        {
          value: "2",
          label: "教育软件1",
        },
      ],
    };
  },
  methods: {
    handleClose(done) {
      done();
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
    formatPerTxt(num) {
      return num === 100 ? "已完成" : `正在下载${num}%`;
    },
    handleOpenDialog() {
      this.dialogVisible = true;
      this.$refs["form"].resetFields();
    },
  },
  created() {
    for (let index = 0; index <= 5; index++) {
      let status = "";
      if (index == 0) {
        status = "1";
      } else if (index == 1) {
        status = "2";
      } else if (index == 2) {
        status = "3";
      } else {
        status = "4";
      }

      this.datalist.push({
        id: index,
        softName: "104采集App",
        processId: "11234",
        softPackageName: "collect104",
        startTime: "2021-07-03 10:00:00",
        status: status,
        per: index * 20,
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
.page-content {
  display: grid;
  grid-template-columns: repeat(4,25%);
  li {
    position: relative;
    box-sizing: border-box;
    background-color: #fff;
    border-radius: 5px;
    width: 98%;
    margin-bottom: 2%;
    padding: 20px;
    &::after {
      content: "";
      position: absolute;
      right: 10px;
      top: 10px;
      display: inline-block;
      width: 16px;
      height: 16px;
      background: url(../../assets/floder.svg) no-repeat;
      background-size: 100% 100%;
    }
  }
}
.form-list-item {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}
.form-list-label {
  width: 100px;
  color: #666;
}
.form-list-value {
  margin-left: 10px;
  flex: 1;
}
.btn-txt {
  margin-left: 5px;
}
/deep/.el-button + .el-button {
  margin-left: 25px;
}
</style>