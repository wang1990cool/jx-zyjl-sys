<template>
  <div class="mod-config">
    <el-form :inline="true" :model="dataForm" @keyup.enter.native="getDataList()">
      <!--<el-form-item>-->
        <!--<el-input v-model="dataForm.projectId" placeholder="项目编号" clearable></el-input>-->
      <!--</el-form-item>-->

      <el-form-item>
        <el-input v-model="dataForm.projectName" placeholder="项目名称" clearable></el-input>
      </el-form-item>

      <el-form-item>
        <el-button @click="getDataList()" icon="el-icon-zoom-in" type="primary" plain >查询</el-button>
        <el-button @click="getDataAllList()" icon="el-icon-zoom-out" type="primary" plain >取消</el-button>
      </el-form-item>
    </el-form>

    <!--<el-form >-->
      <!--<el-form-item style="margin-bottom: 5px">-->
        <!--<el-button v-if="isAuth('train:project:save')" size="small" type="primary" @click="addOrUpdateHandle()">审核</el-button>-->
        <!--<el-button v-if="isAuth('train:project:delete')" size="small" type="danger" @click="deleteHandle()" :disabled="dataListSelections.length <= 0">批量删除</el-button>-->
      <!--</el-form-item>-->
    <!--</el-form>-->
    <el-table
      :data="dataList"
      border
      v-loading="dataListLoading"
      @selection-change="selectionChangeHandle"
      style="width: 100%;">
      <el-table-column
        type="selection"
        header-align="center"
        align="center"
        width="50">
      </el-table-column>

      <!--<el-table-column-->
        <!--prop="id"-->
        <!--header-align="center"-->
        <!--align="center"-->
        <!--label="ID">-->
      <!--</el-table-column>-->

      <!--<el-table-column-->
        <!--prop="projectId"-->
        <!--header-align="center"-->
        <!--align="center"-->
        <!--label="项目编号">-->
      <!--</el-table-column>-->
      <el-table-column
        prop="projectName"
        header-align="center"
        align="center"
        label="项目名称">
      </el-table-column>
      <el-table-column
        prop="projectBudget"
        header-align="center"
        align="center"
        label="项目预算">
      </el-table-column>

      <!--<el-table-column-->
        <!--prop="applicantId"-->
        <!--header-align="center"-->
        <!--align="center"-->
        <!--width="100"-->
        <!--label="申请人工号">-->
      <!--</el-table-column>-->
      <el-table-column
        prop="applicantName"
        header-align="center"
        align="center"
        width="100"
        label="申请人姓名">
      </el-table-column>
      <el-table-column
        prop="applicantDept"
        header-align="center"
        align="center"
        width="140"
        label="申请人部门">
      </el-table-column>

      <!--<el-table-column-->
        <!--prop="applicantId"-->
        <!--header-align="center"-->
        <!--align="center"-->
        <!--width="100"-->
        <!--label="申请人工号">-->
      <!--</el-table-column>-->
      <!--<el-table-column-->
        <!--prop="applicantName"-->
        <!--header-align="center"-->
        <!--align="center"-->
        <!--width="100"-->
        <!--label="申请人姓名">-->
      <!--</el-table-column>-->
      <!--<el-table-column-->
        <!--prop="applicantDept"-->
        <!--header-align="center"-->
        <!--align="center"-->
        <!--width="140"-->
        <!--label="申请人部门">-->
      <!--</el-table-column>-->
      <!--<el-table-column-->
        <!--prop="auditorId"-->
        <!--header-align="center"-->
        <!--align="center"-->
        <!--label="审核人工号">-->
      <!--</el-table-column>-->
      <!--<el-table-column-->
        <!--prop="auditorName"-->
        <!--header-align="center"-->
        <!--align="center"-->
        <!--label="审核人姓名">-->
      <!--</el-table-column>-->
      <!--<el-table-column-->
        <!--prop="auditTime"-->
        <!--header-align="center"-->
        <!--align="center"-->
        <!--label="审核时间"-->
        <!--:formatter="dateFormat"-->
      <!--&gt;-->
      <!--</el-table-column>-->
      <el-table-column
        prop="statusCode"
        header-align="center"
        align="center"
        width="100"
        label="状态">
        <template slot-scope="scope">
          <!--<el-tag v-if="scope.row.statusCode === '1'" size="small" type="danger">草稿状态</el-tag>-->
          <el-tag v-if="scope.row.statusCode === '2'" size="small" type="success">待中心审核</el-tag>
          <el-tag v-if="scope.row.statusCode === '3'" size="small" type="primary">审核通过</el-tag>
          <el-tag v-if="scope.row.statusCode === '4'" size="small" type="danger">课程已填写</el-tag>
          <el-tag v-if="scope.row.statusCode === '5'" size="small" type="info">项目结束</el-tag>
        </template>
      </el-table-column>

      <el-table-column
        fixed="right"
        header-align="center"
        align="center"
        width="160"
        label="操作">
        <template slot-scope="scope">
          <el-button v-if="scope.row.statusCode === '2'" type="text" size="small" @click="auditHandle(scope.row.id)">审核</el-button>
          <el-button v-if="scope.row.statusCode !== '2'" type="text" size="small" @click="printHandle(scope.row.id)">打印</el-button>
          <el-button type="text" size="small" @click="detailHandle(scope.row.id)">详情</el-button>
          <el-button v-if="scope.row.statusCode === '4' || scope.row.statusCode === '5'" type="text" size="small" @click="trainProgramDetailHandle(scope.row.id, scope.row.projectId)">课程详情</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="sizeChangeHandle"
      @current-change="currentChangeHandle"
      :current-page="pageIndex"
      :page-sizes="[10, 20, 50, 100]"
      :page-size="pageSize"udit
      :total="totalPage"
      layout="total, sizes, prev, pager, next, jumper">
    </el-pagination>
    <!-- 弹窗, 新增 / 修改 -->
    <add-or-update v-if="addOrUpdateVisible" ref="addOrUpdate" @refreshDataList="getDataList"></add-or-update>
    <train-program-detail-list v-if="detailVisible" ref="trainProgramDetailList"></train-program-detail-list>
    <project-audit v-if="projectAuditVisible" ref="projectAudit" @refreshDataList="getDataList"></project-audit>
  </div>
</template>

<script>
  import projectAudit from './projectAudit-audit'
  import trainProgramDetailList from './projectTrainProgram-detail-list'
  import AddOrUpdate from './project-add-or-update'
  let moment = require('moment');

  export default {
    data () {
      return {
        dataForm: {
          key: ''
        },
        dataList: [],
        pageIndex: 1,
        pageSize: 10,
        totalPage: 0,
        dataListLoading: false,
        dataListSelections: [],
        projectAuditVisible: false,
        order:'statusCode desc',
        detailVisible: false,
        addOrUpdateVisible: false,
      }
    },
    components: {
      // AddOrUpdate
      projectAudit,
      trainProgramDetailList,
      AddOrUpdate
    },
    activated () {
      this.getDataList()
    },
    methods: {
      // 获取数据列表
      getDataList () {
        this.dataListLoading = true
        this.$http({
          url: this.$http.adornUrl('/train/projectAudit/projectList'),
          method: 'get',
          params: this.$http.adornParams({
            'page': this.pageIndex,
            'limit': this.pageSize,
            'order': this.order,
            // 'projectId': this.dataForm.projectId,
            'projectName': this.dataForm.projectName
          })
        }).then(({data}) => {
          if (data && data.code === 0) {
            this.dataList = data.page.list
            this.totalPage = data.page.totalCount
          } else {
            this.dataList = []
            this.totalPage = 0
          }
          this.dataListLoading = false
        })
      },

      getDataAllList () {
        // this.dataForm.projectId = '';
        this.dataForm.projectName = '';
        this.getDataList();
      },
      // 每页数
      sizeChangeHandle (val) {
        this.pageSize = val
        this.pageIndex = 1
        this.getDataList()
      },
      // 当前页
      currentChangeHandle (val) {
        this.pageIndex = val
        this.getDataList()
      },
      // 多选
      selectionChangeHandle (val) {
        this.dataListSelections = val
      },
      // 新增 / 修改
      auditHandle (id) {
        this.projectAuditVisible = true
        this.$nextTick(() => {
          this.$refs.projectAudit.init(id)
        })
      },

      printHandle (id) {
        this.$http({
          url: this.$http.adornUrl(`/train/projectAudit/print/${id}?token=${this.$cookie.get('token')}`),
          method: 'post',
          responseType:'arraybuffer'
        })
          .then(({data}) => {
            if (data) {
              let blob = new Blob([data], {
                type: 'application/pdf;charset-UTF-8'
              });
              let objectUrl = URL.createObjectURL(blob);
              let downEle = document.createElement("a");
              let fname = '审批表.pdf';
              downEle.href = objectUrl;
              downEle.setAttribute("download", fname);
              document.body.appendChild(downEle);
              downEle.click();
            }
          })
      },

      trainProgramDetailHandle (id, projectId) {
        this.detailVisible = true;
        this.$nextTick(() => {
          this.$refs.trainProgramDetailList.init(id, projectId)
        })
      },
      detailHandle (id) {
        this.addOrUpdateVisible = true;
        this.$nextTick(() => {
          this.$refs.addOrUpdate.init(id, true)
        })
      },

      dateFormat: function(row, column) {
        var date = row[column.property];
        if (date == undefined) {
          return "";
        }
        return moment(date).format('YYYY-MM-DD');
      }
    }
  }
</script>
