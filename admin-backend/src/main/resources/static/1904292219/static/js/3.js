webpackJsonp([3,9],{a4pM:function(e,t,a){(e.exports=a("acE3")(!1)).push([e.i,"\n.avatar-uploader .el-upload {\n  border: 1px dashed #d9d9d9;\n  border-radius: 6px;\n  cursor: pointer;\n  position: relative;\n  overflow: hidden;\n}\n.avatar-uploader .el-upload:hover {\n  border-color: #409EFF;\n}\n.avatar-uploader-icon {\n  font-size: 28px;\n  color: #8c939d;\n  width: 178px;\n  height: 178px;\n  line-height: 178px;\n  text-align: center;\n}\n.avatar {\n  width: 178px;\n  height: 178px;\n  display: block;\n}\n",""])},b5pY:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("zoW+"),i=a("W+Jt"),r={data:function(){return{dataForm:{},dataList:[],pageIndex:1,pageSize:10,totalPage:0,dataListLoading:!1,dataListSelections:[],addOrUpdateVisible:!1,zszpVisible:!1}},components:{AddOrUpdate:n.default,Zszp:i.default},activated:function(){this.getDataList()},methods:{getDataList:function(){var e=this;this.dataListLoading=!0,this.$http({url:this.$http.adornUrl("/zsgl/zxsh/list"),method:"get",params:this.$http.adornParams({page:this.pageIndex,limit:this.pageSize})}).then(function(t){var a=t.data;a&&0===a.code?(e.dataList=a.page.list,e.totalPage=a.page.totalCount):(e.dataList=[],e.totalPage=0),e.dataListLoading=!1})},sizeChangeHandle:function(e){this.pageSize=e,this.pageIndex=1,this.getDataList()},currentChangeHandle:function(e){this.pageIndex=e,this.getDataList()},selectionChangeHandle:function(e){this.dataListSelections=e},zszpHandle:function(e){var t=this;this.zszpVisible=!0,this.$nextTick(function(){t.$refs.zszp.init(e)})},addOrUpdateHandle:function(e){var t=this;this.addOrUpdateVisible=!0,this.$nextTick(function(){t.$refs.addOrUpdate.init(e)})},deleteHandle:function(e){var t=this,a=e?[e]:this.dataListSelections.map(function(e){return e.id});this.$confirm("确定对[id="+a.join(",")+"]进行["+(e?"删除":"批量删除")+"]操作?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.$http({url:t.$http.adornUrl("/zsgl/zxsh/delete"),method:"post",data:t.$http.adornData(a,!1)}).then(function(e){var a=e.data;a&&0===a.code?t.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){t.getDataList()}}):t.$message.error(a.msg)})})}}},s={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"mod-config"},[a("el-form",{attrs:{inline:!0,model:e.dataForm},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.getDataList()}}},[a("el-form-item",[e.isAuth("zsgl:zxsh:audit")?a("el-button",{attrs:{type:"danger",disabled:e.dataListSelections.length<=0},on:{click:function(t){e.deleteHandle()}}},[e._v("批量审核通过")]):e._e()],1)],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.dataListLoading,expression:"dataListLoading"}],staticStyle:{width:"100%"},attrs:{data:e.dataList,border:""},on:{"selection-change":e.selectionChangeHandle}},[a("el-table-column",{attrs:{type:"selection","header-align":"center",align:"center",width:"50"}}),e._v(" "),e._e(),e._v(" "),a("el-table-column",{attrs:{type:"index",width:"50",label:"序号"}}),e._v(" "),a("el-table-column",{attrs:{prop:"xsxh","header-align":"center",align:"center",label:"学号"}}),e._v(" "),a("el-table-column",{attrs:{prop:"xsxm","header-align":"center",align:"center",label:"姓名"}}),e._v(" "),a("el-table-column",{attrs:{prop:"szbj","header-align":"center",align:"center",label:"所在班级"}}),e._v(" "),a("el-table-column",{attrs:{prop:"sfzh","header-align":"center",align:"center",label:"身份证号"}}),e._v(" "),a("el-table-column",{attrs:{prop:"telephone","header-align":"center",align:"center",label:"电话"}}),e._v(" "),a("el-table-column",{attrs:{prop:"zsmc","header-align":"center",align:"center",label:"证书名称"}}),e._v(" "),a("el-table-column",{attrs:{"header-align":"center",align:"center",width:"80",label:"证书照片"},scopedSlots:e._u([{key:"default",fn:function(t){return[e.isAuth("zsgl:wdzs:info")?a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){e.zszpHandle(t.row.id)}}},[e._v("查看证书 ")]):e._e()]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"createTime","header-align":"center",align:"center",label:"创建时间"}}),e._v(" "),a("el-table-column",{attrs:{fixed:"right","header-align":"center",align:"center",width:"150",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[e.isAuth("zsgl:zxsh:audit")?a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){e.addOrUpdateHandle(t.row.id)}}},[e._v("审核")]):e._e(),e._v(" "),e.isAuth("zsgl:zxsh:delete")?a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){e.deleteHandle(t.row.id)}}},[e._v("删除")]):e._e()]}}])})],1),e._v(" "),a("el-pagination",{attrs:{"current-page":e.pageIndex,"page-sizes":[10,20,50,100],"page-size":e.pageSize,total:e.totalPage,layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":e.sizeChangeHandle,"current-change":e.currentChangeHandle}}),e._v(" "),e.addOrUpdateVisible?a("add-or-update",{ref:"addOrUpdate",on:{refreshDataList:e.getDataList}}):e._e(),e._v(" "),e.zszpVisible?a("zszp",{ref:"zszp",on:{refreshDataList:e.getDataList}}):e._e()],1)},staticRenderFns:[]},l=a("46Yf")(r,s,!1,null,null,null);t.default=l.exports},puPW:function(e,t,a){var n=a("a4pM");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a("XkoO")("1d6aa255",n,!0)},"zoW+":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={data:function(){return{uploadUrl:this.$http.adornUrl("/upload?token="+this.$cookie.get("token")),visible:!1,dataForm:{id:0,sfzh:"",telephone:"",zsmc:"",shbm:"6",bjshyj:"",hzrq:"",zszp:"",zppath:""},imageUrl:"",dataRule:{sfzh:[{required:!0,message:"身份证号不能为空",trigger:"blur"}],telephone:[{required:!0,message:"电话不能为空",trigger:"blur"}],zsmc:[{required:!0,message:"证书名称不能为空",trigger:"blur"}],hzrq:[{required:!0,message:"获证日期不能为空",trigger:"blur"}]}}},methods:{init:function(e){var t=this;this.dataForm.id=e||0,this.visible=!0,this.imageUrl="",this.$nextTick(function(){t.$refs.dataForm.resetFields(),t.dataForm.id&&t.$http({url:t.$http.adornUrl("/zsgl/zxsh/info/"+t.dataForm.id),method:"get",params:t.$http.adornParams()}).then(function(e){var a=e.data;a&&0===a.code&&(t.dataForm.sfzh=a.xsZsxxb.sfzh,t.dataForm.telephone=a.xsZsxxb.telephone,t.dataForm.zsmc=a.xsZsxxb.zsmc,t.dataForm.hzrq=a.xsZsxxb.hzrq,t.imageUrl="data:image/png;base64,"+a.xsZsxxb.zszp,t.dataForm.zppath=a.xsZsxxb.zppath)})})},handleBeforeUpload:function(e){"image/png"!==e.type&&"image/gif"!==e.type&&"image/jpg"!==e.type&&"image/jpeg"!==e.type&&this.$notify.warning({title:"警告",message:"请上传格式为image/png, image/gif, image/jpg, image/jpeg的图片"}),e.size/1024/1024/2>2&&this.$notify.warning({title:"警告",message:"图片大小必须小于2M"})},handleExceed:function(e,t){},handleRemove:function(e,t){},handlePictureCardPreview:function(e){this.imageUrl=e.url},uploadFile:function(){this.$refs.upload.submit()},handleAvatarSuccess:function(e,t){this.imageUrl=URL.createObjectURL(t.raw),console.log(t.raw),this.dataForm.zppath=e.filename,console.log(e.filename)},beforeAvatarUpload:function(e){var t="image/png"===e.type||"image/gif"===e.type||"image/jpg"===e.type||"image/jpeg"===e.type,a=e.size/1024/1024<2;return t||this.$message.error("上传图片只能是 JPG 格式!"),a||this.$message.error("上传图片大小不能超过 2MB!"),t&&a},dataFormSubmit:function(){var e=this;this.$refs.dataForm.validate(function(t){t&&e.$http({url:e.$http.adornUrl("/zsgl/zxsh/audit"),method:"post",data:e.$http.adornData({id:e.dataForm.id||void 0,ztm:e.dataForm.shbm,bjshyj:e.dataForm.bjshyj})}).then(function(t){var a=t.data;a&&0===a.code?e.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){e.visible=!1,e.$emit("refreshDataList")}}):e.$message.error(a.msg)})})}}},i={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{title:"审核","close-on-click-modal":!1,visible:e.visible},on:{"update:visible":function(t){e.visible=t}}},[a("el-form",{ref:"dataForm",attrs:{model:e.dataForm,rules:e.dataRule,"label-width":"80px"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.dataFormSubmit()}}},[a("el-form-item",{attrs:{label:"证书名称",prop:"zsmc"}},[a("el-input",{attrs:{placeholder:"证书名称",disabled:"true"},model:{value:e.dataForm.zsmc,callback:function(t){e.$set(e.dataForm,"zsmc",t)},expression:"dataForm.zsmc"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"获证日期",prop:"hzrq"}},[a("el-input",{attrs:{placeholder:"证书名称",disabled:"true"},model:{value:e.dataForm.hzrq,callback:function(t){e.$set(e.dataForm,"hzrq",t)},expression:"dataForm.hzrq"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"证书照片",prop:"zszp"}},[e._e(),e._v(" "),a("el-upload",{staticClass:"avatar-uploader",attrs:{disabled:!0,action:e.uploadUrl,"show-file-list":!1,"on-success":e.handleAvatarSuccess,"before-upload":e.beforeAvatarUpload}},[e.imageUrl?a("img",{staticClass:"avatar",attrs:{src:e.imageUrl}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),e._v(" "),a("el-form-item",{attrs:{label:"审核意见",prop:"shbm"}},[a("el-radio",{attrs:{label:"6"},model:{value:e.dataForm.shbm,callback:function(t){e.$set(e.dataForm,"shbm",t)},expression:"dataForm.shbm"}},[e._v("通过")]),e._v(" "),a("el-radio",{attrs:{label:"5"},model:{value:e.dataForm.shbm,callback:function(t){e.$set(e.dataForm,"shbm",t)},expression:"dataForm.shbm"}},[e._v("驳回")])],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.visible=!1}}},[e._v("取消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dataFormSubmit()}}},[e._v("确定")])],1)],1)},staticRenderFns:[]};var r=a("46Yf")(n,i,!1,function(e){a("puPW")},null,null);t.default=r.exports}});