<template>
  <el-dialog
    :title="'审核'"
    :close-on-click-modal="false"
    :visible.sync="visible">

    <el-form :model="dataForm" :rules="dataRule" size="mini" ref="dataForm" @keyup.enter.native="dataFormSubmit()" label-width="130px">

        <el-form-item label="项目编号" prop="projectId" v-if="false">
          <el-input v-model="dataForm.projectId" placeholder="项目编号"></el-input>
        </el-form-item>

        <el-form-item label="项目名称" prop="projectName" v-if="false">
          <el-input v-model="dataForm.projectName" placeholder="项目名称"></el-input>
        </el-form-item>


        <el-form-item label="项目预算" prop="projectBudget" v-if="false">
          <el-input v-model="dataForm.projectBudget" placeholder="项目预算"></el-input>
        </el-form-item>

        <el-form-item label="培养方案" prop="trainingPlan" v-if="false">
          <el-input  type="textarea" v-model="dataForm.trainingPlan" placeholder="培养方案"></el-input>
        </el-form-item>

        <el-form-item label="是否同意" >
          <el-radio-group v-model="dataForm.statusCode" @change="changeStatusHandler">
            <el-radio label="3">同意</el-radio>
            <el-radio label="9">不同意</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item label="审核意见" prop="auditOption">
          <el-input  type="textarea" v-model="dataForm.auditOption" placeholder="审核意见"></el-input>
        </el-form-item>

        <el-form-item label="申请人工号" prop="applicantId"  v-if="false">
          <el-input v-model="dataForm.applicantId" placeholder="申请人工号"></el-input>
        </el-form-item>
        <el-form-item label="申请人姓名" prop="applicantName" v-if="false">
          <el-input v-model="dataForm.applicantName" placeholder="申请人姓名"></el-input>
        </el-form-item>
        <el-form-item label="申请人所在部门" prop="applicantDept" v-if="false">
          <el-input v-model="dataForm.applicantDept" placeholder="申请人所在部门"></el-input>
        </el-form-item>
        <el-form-item label="审核人id" prop="auditorId" v-if="false">
          <el-input v-model="dataForm.auditorId" placeholder="审核人id"></el-input>
        </el-form-item>
        <el-form-item label="审核人姓名" prop="auditorName" v-if="false">
          <el-input v-model="dataForm.auditorName" placeholder="审核人姓名"></el-input>
        </el-form-item>
        <el-form-item label="审核时间" prop="auditTime" v-if="false">
          <el-input v-model="dataForm.auditTime" placeholder="审核时间"></el-input>
        </el-form-item>
        <el-form-item label="状态" prop="status" v-if="false">
          <el-input v-model="dataForm.status" placeholder="状态"></el-input>
        </el-form-item>
        <!--<el-form-item label="状态码" prop="statusCode" v-if="false">-->
          <!--<el-input v-model="dataForm.statusCode" placeholder="状态码"></el-input>-->
        <!--</el-form-item>-->
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="visible = false">取消</el-button>
          <el-button type="primary" @click="dataFormSubmit()">确定</el-button>
        </span>
      </el-dialog>
</template>

<script>
  export default {
    data () {
      let valCarSel = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请选择证件'));
        }
      };
      return {
        visible: false,
        dataForm: {
          id: 0,
          projectId: '',
          projectName: '',
          projectBudget: '',
          trainingPlan: '',
          auditOption: '',
          applicantId: '',
          applicantName: '',
          applicantDept: '',
          auditorId: '',
          auditorName: '',
          auditTime: '',
          status: '3',
          statusCode: '审核通过'
        },
        dataRule: {
          status: [
            { required: true, validator: valCarSel, trigger: 'change' }
          ]
        }
      }
    },
    methods: {
      init (id) {
        this.dataForm.id = id || 0
        this.visible = true
        this.$nextTick(() => {
          this.$refs['dataForm'].resetFields()
          if (this.dataForm.id) {
            this.$http({
              url: this.$http.adornUrl(`/train/project/info/${this.dataForm.id}`),
              method: 'get',
              params: this.$http.adornParams()
            }).then(({data}) => {
              if (data && data.code === 0) {
                this.dataForm.projectId = data.trainProject.projectId
                this.dataForm.projectName = data.trainProject.projectName
                this.dataForm.projectBudget = data.trainProject.projectBudget
                this.dataForm.trainingPlan = data.trainProject.trainingPlan
                this.dataForm.auditOption = data.trainProject.auditOption
                this.dataForm.applicantId = data.trainProject.applicantId
                this.dataForm.applicantName = data.trainProject.applicantName
                this.dataForm.applicantDept = data.trainProject.applicantDept
                this.dataForm.auditorId = data.trainProject.auditorId
                this.dataForm.auditorName = data.trainProject.auditorName
                this.dataForm.auditTime = data.trainProject.auditTime
                this.dataForm.status = '审核通过'
                this.dataForm.statusCode = '3'
              }
            })
          }
        })
      },

      changeStatusHandler (value) {
        if (value === '3') {
          this.dataForm.status = '审核通过'
        } else {
          this.dataForm.status = '审核未通过'
        }
      },
      // 表单提交
      dataFormSubmit () {
        this.$refs['dataForm'].validate((valid) => {
          if (valid) {
            this.$http({
              url: this.$http.adornUrl('/train/projectAudit/audit'),
              method: 'post',
              data: this.$http.adornData({
                'id': this.dataForm.id || undefined,
                'projectId': this.dataForm.projectId,
                'projectName': this.dataForm.projectName,
                'projectBudget': this.dataForm.projectBudget,
                'trainingPlan': this.dataForm.trainingPlan,
                'auditOption': this.dataForm.auditOption,
                'applicantId': this.dataForm.applicantId,
                'applicantName': this.dataForm.applicantName,
                'applicantDept': this.dataForm.applicantDept,
                'auditorId': this.dataForm.auditorId,
                'auditorName': this.dataForm.auditorName,
                'auditTime': this.dataForm.auditTime,
                'status': this.dataForm.status,
                'statusCode': this.dataForm.statusCode
              })
            }).then(({data}) => {
              if (data && data.code === 0) {
                this.$message({
                  message: '操作成功',
                  type: 'success',
                  duration: 1500,
                  onClose: () => {
                    this.visible = false
                    this.$emit('refreshDataList')
                  }
                })
              } else {
                this.$message.error(data.msg)
              }
            })
          }
        })
      }
    }
  }
</script>
