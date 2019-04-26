webpackJsonp([18,30],{ZLy3:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={data:function(){return{dataForm:{szbj:""},dataList:[],pageIndex:1,pageSize:10,totalPage:0,dataListLoading:!1,dataListSelections:[],addOrUpdateVisible:!1}},components:{AddOrUpdate:a("ecPc").default},activated:function(){this.getDataList()},methods:{exportDataList:function(){var e=this;this.$http({url:this.$http.adornUrl("/zsgl/zscx/export"),method:"post",responseType:"arraybuffer",params:this.$http.adornParams({szbj:this.dataForm.szbj})}).then(function(t){var a=t.data;if(a){var r=new Blob([a],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8"}),s=document.createElement("a"),o=window.URL.createObjectURL(r);s.href=o;s.download="学生证书信息表.xlsx",document.body.appendChild(s),s.click(),document.body.removeChild(s),window.URL.revokeObjectURL(o),e.getDataList()}})},getDataList:function(){var e=this;this.dataListLoading=!0,this.$http({url:this.$http.adornUrl("/zsgl/zscx/list"),method:"get",params:this.$http.adornParams({page:this.pageIndex,limit:this.pageSize,szbj:this.dataForm.szbj})}).then(function(t){var a=t.data;a&&0===a.code?(e.dataList=a.page.list,e.totalPage=a.page.totalCount):(e.dataList=[],e.totalPage=0),e.dataListLoading=!1})},sizeChangeHandle:function(e){this.pageSize=e,this.pageIndex=1,this.getDataList()},currentChangeHandle:function(e){this.pageIndex=e,this.getDataList()},selectionChangeHandle:function(e){this.dataListSelections=e},addOrUpdateHandle:function(e){var t=this;this.addOrUpdateVisible=!0,this.$nextTick(function(){t.$refs.addOrUpdate.init(e)})},deleteHandle:function(e){var t=this,a=e?[e]:this.dataListSelections.map(function(e){return e.id});this.$confirm("确定对[id="+a.join(",")+"]进行["+(e?"删除":"批量删除")+"]操作?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.$http({url:t.$http.adornUrl("/zsgl/zscx/delete"),method:"post",data:t.$http.adornData(a,!1)}).then(function(e){var a=e.data;a&&0===a.code?t.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){t.getDataList()}}):t.$message.error(a.msg)})})}}},s={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"mod-config"},[a("el-form",{attrs:{inline:!0,model:e.dataForm},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.getDataList()}}},[a("el-form-item",[a("el-input",{attrs:{placeholder:"所在班级",clearable:""},model:{value:e.dataForm.szbj,callback:function(t){e.$set(e.dataForm,"szbj",t)},expression:"dataForm.szbj"}})],1),e._v(" "),a("el-form-item",[a("el-button",{on:{click:function(t){e.getDataList()}}},[e._v("查询")]),e._v(" "),a("el-button",{on:{click:function(t){e.exportDataList()}}},[e._v("导出")]),e._v(" "),e.isAuth("zsgl:zscx:save")?a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.addOrUpdateHandle()}}},[e._v("新增")]):e._e(),e._v(" "),e.isAuth("zsgl:zscx:delete")?a("el-button",{attrs:{type:"danger",disabled:e.dataListSelections.length<=0},on:{click:function(t){e.deleteHandle()}}},[e._v("批量删除")]):e._e()],1)],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.dataListLoading,expression:"dataListLoading"}],staticStyle:{width:"100%"},attrs:{data:e.dataList,border:""},on:{"selection-change":e.selectionChangeHandle}},[a("el-table-column",{attrs:{type:"selection","header-align":"center",align:"center",width:"50"}}),e._v(" "),a("el-table-column",{attrs:{type:"index",width:"50",label:"序号"}}),e._v(" "),a("el-table-column",{attrs:{prop:"xsxh","header-align":"center",align:"center",label:"学号"}}),e._v(" "),a("el-table-column",{attrs:{prop:"xsxm","header-align":"center",align:"center",label:"姓名"}}),e._v(" "),a("el-table-column",{attrs:{prop:"szbj","header-align":"center",align:"center",label:"所在班级"}}),e._v(" "),e._e(),e._v(" "),e._e(),e._v(" "),a("el-table-column",{attrs:{prop:"zsmc","header-align":"center",align:"center",label:"证书名称"}}),e._v(" "),a("el-table-column",{attrs:{prop:"zt","header-align":"center",align:"center",label:"状态"}}),e._v(" "),a("el-table-column",{attrs:{prop:"createTime","header-align":"center",align:"center",label:"创建时间"}})],1),e._v(" "),a("el-pagination",{attrs:{"current-page":e.pageIndex,"page-sizes":[10,20,50,100],"page-size":e.pageSize,total:e.totalPage,layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":e.sizeChangeHandle,"current-change":e.currentChangeHandle}}),e._v(" "),e.addOrUpdateVisible?a("add-or-update",{ref:"addOrUpdate",on:{refreshDataList:e.getDataList}}):e._e()],1)},staticRenderFns:[]},o=a("46Yf")(r,s,!1,null,null,null);t.default=o.exports},ecPc:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={data:function(){return{visible:!1,dataForm:{id:0,xsxh:"",xsxm:"",szbj:"",sfzh:"",telephone:"",zsmc:"",hzrq:"",zszp:"",bjshyj:"",ztm:"",zt:"",createTime:""},dataRule:{xsxh:[{required:!0,message:"学号不能为空",trigger:"blur"}],xsxm:[{required:!0,message:"姓名不能为空",trigger:"blur"}],szbj:[{required:!0,message:"所在班级不能为空",trigger:"blur"}],sfzh:[{required:!0,message:"身份证号不能为空",trigger:"blur"}],telephone:[{required:!0,message:"电话不能为空",trigger:"blur"}],zsmc:[{required:!0,message:"证书名称不能为空",trigger:"blur"}],hzrq:[{required:!0,message:"获证日期不能为空",trigger:"blur"}],zszp:[{required:!0,message:"证书照片不能为空",trigger:"blur"}],bjshyj:[{required:!0,message:"班级审核意见不能为空",trigger:"blur"}],ztm:[{required:!0,message:"状态码不能为空",trigger:"blur"}],zt:[{required:!0,message:"状态不能为空",trigger:"blur"}],createTime:[{required:!0,message:"创建时间不能为空",trigger:"blur"}]}}},methods:{init:function(e){var t=this;this.dataForm.id=e||0,this.visible=!0,this.$nextTick(function(){t.$refs.dataForm.resetFields(),t.dataForm.id&&t.$http({url:t.$http.adornUrl("/zsgl/zscx/info/"+t.dataForm.id),method:"get",params:t.$http.adornParams()}).then(function(e){var a=e.data;a&&0===a.code&&(t.dataForm.xsxh=a.zscx.xsxh,t.dataForm.xsxm=a.zscx.xsxm,t.dataForm.szbj=a.zscx.szbj,t.dataForm.sfzh=a.zscx.sfzh,t.dataForm.telephone=a.zscx.telephone,t.dataForm.zsmc=a.zscx.zsmc,t.dataForm.hzrq=a.zscx.hzrq,t.dataForm.zszp=a.zscx.zszp,t.dataForm.bjshyj=a.zscx.bjshyj,t.dataForm.ztm=a.zscx.ztm,t.dataForm.zt=a.zscx.zt,t.dataForm.createTime=a.zscx.createTime)})})},dataFormSubmit:function(){var e=this;this.$refs.dataForm.validate(function(t){t&&e.$http({url:e.$http.adornUrl("/zsgl/zscx/"+(e.dataForm.id?"update":"save")),method:"post",data:e.$http.adornData({id:e.dataForm.id||void 0,xsxh:e.dataForm.xsxh,xsxm:e.dataForm.xsxm,szbj:e.dataForm.szbj,sfzh:e.dataForm.sfzh,telephone:e.dataForm.telephone,zsmc:e.dataForm.zsmc,hzrq:e.dataForm.hzrq,zszp:e.dataForm.zszp,bjshyj:e.dataForm.bjshyj,ztm:e.dataForm.ztm,zt:e.dataForm.zt,createTime:e.dataForm.createTime})}).then(function(t){var a=t.data;a&&0===a.code?e.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){e.visible=!1,e.$emit("refreshDataList")}}):e.$message.error(a.msg)})})}}},s={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{title:e.dataForm.id?"修改":"新增","close-on-click-modal":!1,visible:e.visible},on:{"update:visible":function(t){e.visible=t}}},[a("el-form",{ref:"dataForm",attrs:{model:e.dataForm,rules:e.dataRule,"label-width":"80px"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.dataFormSubmit()}}},[e._e(),e._v(" "),a("el-form-item",{attrs:{label:"姓名",prop:"xsxm"}},[a("el-input",{attrs:{placeholder:"姓名"},model:{value:e.dataForm.xsxm,callback:function(t){e.$set(e.dataForm,"xsxm",t)},expression:"dataForm.xsxm"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"所在班级",prop:"szbj"}},[a("el-input",{attrs:{placeholder:"所在班级"},model:{value:e.dataForm.szbj,callback:function(t){e.$set(e.dataForm,"szbj",t)},expression:"dataForm.szbj"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"身份证号",prop:"sfzh"}},[a("el-input",{attrs:{placeholder:"身份证号"},model:{value:e.dataForm.sfzh,callback:function(t){e.$set(e.dataForm,"sfzh",t)},expression:"dataForm.sfzh"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"电话",prop:"telephone"}},[a("el-input",{attrs:{placeholder:"电话"},model:{value:e.dataForm.telephone,callback:function(t){e.$set(e.dataForm,"telephone",t)},expression:"dataForm.telephone"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"证书名称",prop:"zsmc"}},[a("el-input",{attrs:{placeholder:"证书名称"},model:{value:e.dataForm.zsmc,callback:function(t){e.$set(e.dataForm,"zsmc",t)},expression:"dataForm.zsmc"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"获证日期",prop:"hzrq"}},[a("el-input",{attrs:{placeholder:"获证日期"},model:{value:e.dataForm.hzrq,callback:function(t){e.$set(e.dataForm,"hzrq",t)},expression:"dataForm.hzrq"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"证书照片",prop:"zszp"}},[a("el-input",{attrs:{placeholder:"证书照片"},model:{value:e.dataForm.zszp,callback:function(t){e.$set(e.dataForm,"zszp",t)},expression:"dataForm.zszp"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"班级审核意见",prop:"bjshyj"}},[a("el-input",{attrs:{placeholder:"班级审核意见"},model:{value:e.dataForm.bjshyj,callback:function(t){e.$set(e.dataForm,"bjshyj",t)},expression:"dataForm.bjshyj"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"状态码",prop:"ztm"}},[a("el-input",{attrs:{placeholder:"状态码"},model:{value:e.dataForm.ztm,callback:function(t){e.$set(e.dataForm,"ztm",t)},expression:"dataForm.ztm"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"状态",prop:"zt"}},[a("el-input",{attrs:{placeholder:"状态"},model:{value:e.dataForm.zt,callback:function(t){e.$set(e.dataForm,"zt",t)},expression:"dataForm.zt"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"创建时间",prop:"createTime"}},[a("el-input",{attrs:{placeholder:"创建时间"},model:{value:e.dataForm.createTime,callback:function(t){e.$set(e.dataForm,"createTime",t)},expression:"dataForm.createTime"}})],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.visible=!1}}},[e._v("取消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dataFormSubmit()}}},[e._v("确定")])],1)],1)},staticRenderFns:[]},o=a("46Yf")(r,s,!1,null,null,null);t.default=o.exports}});