<template>
  <el-dialog
    :title="title"
    :close-on-click-modal="false"
    :visible.sync="visible">

    <el-form :model="dataForm" :rules="dataRule" size="mini" ref="dataForm" @keyup.enter.native="dataFormSubmit()" label-width="130px">

        <!--<el-form-item label="培训编号" prop="projectId" :disabled="isDetail">-->
          <!--<el-input v-model="dataForm.projectId" placeholder="项目编号" ></el-input>-->
        <!--</el-form-item>-->

        <el-form-item label="培训名称" prop="projectName">
          <el-input v-model="dataForm.projectName" placeholder="项目名称"></el-input>
        </el-form-item>


        <el-form-item label="预算金额" prop="projectBudget">
          <!--<el-input-number placeholder="项目预算" v-model="dataForm.projectBudget" controls-position="right"  ></el-input-number>-->
          <el-input v-model="dataForm.projectBudget" placeholder="项目预算"></el-input>
        </el-form-item>
        <el-form-item label="培训课时" prop="trainClassHour">
          <el-input v-model="dataForm.trainClassHour" placeholder="培训课时"></el-input>
        </el-form-item>
        <el-form-item label="培训目标" prop="trainTarget">
          <el-input type="textarea" v-model="dataForm.trainTarget" placeholder="培训目标"></el-input>
        </el-form-item>
        <el-form-item label="课时分配" prop="classHourAllocation">
          <el-input type="textarea" v-model="dataForm.classHourAllocation" placeholder="课时分配"></el-input>
        </el-form-item>
        <el-form-item label="培训要求" prop="trainRequire">
          <el-input type="textarea" v-model="dataForm.trainRequire" placeholder="培训要求"></el-input>
        </el-form-item>

        <!--<el-form-item label="培养方案" prop="trainingPlan">-->
          <!--<el-input  type="textarea" v-model="dataForm.trainingPlan" placeholder="培养方案"></el-input>-->
        <!--</el-form-item>-->



        <el-form-item label="申请人工号" prop="applicantId"  v-if="false">
          <el-input v-model="dataForm.applicantId" placeholder="申请人工号"></el-input>
        </el-form-item>
        <el-form-item label="申请人姓名" prop="applicantName" v-if="false">
          <el-input v-model="dataForm.applicantName" placeholder="申请人姓名"></el-input>
        </el-form-item>
        <el-form-item label="申请人所在部门" prop="applicantDept" v-if="false">
          <el-input v-model="dataForm.applicantDept" placeholder="申请人所在部门"></el-input>
        </el-form-item>

        <el-form-item label="院系审核人id" prop="academyAuditorId"  v-if="false">
          <el-input v-model="dataForm.academyAuditorId" placeholder="院系审核人id"></el-input>
        </el-form-item>
        <el-form-item label="院系审核人姓名" prop="academyAuditorName" v-if="false">
          <el-input v-model="dataForm.academyAuditorName" placeholder="院系审核人姓名"></el-input>
        </el-form-item>
        <el-form-item label="院系审核时间" prop="academyAuditTime" v-if="false">
          <el-input v-model="dataForm.academyAuditTime" placeholder="院系审核时间"></el-input>
        </el-form-item>
        <el-form-item label="院系审核意见" prop="academyAuditOption" v-if="dataForm.statusCode != ''&& dataForm.statusCode != '1'">
          <el-input type="textarea" v-model="dataForm.academyAuditOption" placeholder="院系审核意见"></el-input>
        </el-form-item>

        <el-form-item label="中心审核意见" prop="auditOption" v-if="dataForm.statusCode != '1' && dataForm.statusCode != ''">
          <el-input  type="textarea" v-model="dataForm.auditOption" placeholder="中心审核意见"></el-input>
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

        <el-form-item label="状态码" prop="statusCode" v-if="false">
          <el-input v-model="dataForm.statusCode" placeholder="状态码"></el-input>
        </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="visible = false">取消</el-button>
          <el-button type="primary" @click="dataFormSubmit()" v-if="!isDetail">确定</el-button>
        </span>
      </el-dialog>
</template>

<script>
  export default {
    data () {
      // let projectIdRule =  (rule, value, callback) => {
      //   if (value === '') {
      //     callback(new Error('培训编号不能为空'))
      //   } else {
      //     this.$http({
      //       url: this.$http.adornUrl(`/train/project/checkProjectIdIsExists/${value}`),
      //       method: 'get',
      //       params: this.$http.adornParams()
      //     }).then(({data}) => {
      //         if (data && data.code !== 0) {
      //            callback(new Error('培训编号已存在'));
      //         } else {
      //           callback();
      //         }
      //     })
      //   }
      // };

      let projectBudgetRule = (rule, value, callback) => {
        let regExp = /^\d+(\.\d+)?$/;
        if (regExp.test(value) === false) {
          callback(new Error('请输入数字'));
        } else {
          callback();
        }
      };

      return {
        visible: false,
        isDetail: false,
        title: '',
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
          academyAuditorId: '',
          academyAuditorName: '',
          academyAuditTime: '',
          academyAuditOption: '',
          status: '',
          statusCode: '',
          trainClassHour: '',
          trainTarget: '',
          classHourAllocation: '',
          trainRequire: ''
        },
        dataRule: {
          // projectId: [
          //   { required: true, validator: projectIdRule, trigger: 'blur' }
          // ],
          projectName: [
            { required: true, message: '培训名称不能为空', trigger: 'blur' }
          ],
          projectBudget: [
            { required: true, validator: projectBudgetRule, trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      init (id, isDetail) {
        this.isDetail = isDetail;
        this.dataForm.id = id || 0
        if (isDetail) {
          this.title = '详情'
        } else {
          this.title = !this.dataForm.id ? '新增' : '修改'
        }
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
                // this.dataForm.projectId = data.trainProject.projectId
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
                this.dataForm.status = data.trainProject.status
                this.dataForm.statusCode = data.trainProject.statusCode
                this.dataForm.trainClassHour = data.trainProject.trainClassHour
                this.dataForm.trainTarget = data.trainProject.trainTarget
                this.dataForm.classHourAllocation = data.trainProject.classHourAllocation
                this.dataForm.trainRequire = data.trainProject.trainRequire
                this.dataForm.academyAuditOption = data.trainProject.academyAuditOption
                this.dataForm.academyAuditTime = data.trainProject.academyAuditTime
                this.dataForm.academyAuditorId = data.trainProject.academyAuditorId
                this.dataForm.academyAuditorName = data.trainProject.academyAuditorName
              }
            })
          }
        })
      },
      // 表单提交
      dataFormSubmit () {
        this.$refs['dataForm'].validate((valid) => {
          if (valid) {
            this.$http({
              url: this.$http.adornUrl(`/train/project/${!this.dataForm.id ? 'save' : 'update'}`),
              method: 'post',
              data: this.$http.adornData({
                'id': this.dataForm.id || undefined,
                // 'projectId': this.dataForm.projectId,
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
                'status': "草稿状态",
                'statusCode': "1",
                'trainClassHour': this.dataForm.trainClassHour,
                'trainTarget': this.dataForm.trainTarget,
                'classHourAllocation': this.dataForm.classHourAllocation,
                'trainRequire': this.dataForm.trainRequire
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
