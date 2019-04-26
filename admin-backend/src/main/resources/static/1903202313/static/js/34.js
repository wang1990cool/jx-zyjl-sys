webpackJsonp([34],{Itvf:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("pnfl"),r=a("uFP8"),i={data:function(){return{dataForm:{year:"",studentNum:"",studentName:"",courseName:"",order:"year desc, studentNum asc"},dataList:[],pageIndex:1,pageSize:10,totalPage:0,dataListLoading:!1,dataListSelections:[],addOrUpdateVisible:!1,scoreImportVisible:!1}},components:{AddOrUpdate:n.default,ScoreImport:r.default},activated:function(){this.getDataList()},methods:{getDataList:function(){var t=this;this.dataListLoading=!0,this.$http({url:this.$http.adornUrl("/train/score/list"),method:"get",params:this.$http.adornParams({page:this.pageIndex,limit:this.pageSize,order:this.dataForm.order,year:this.dataForm.year,studentNum:this.dataForm.studentNum,studentName:this.dataForm.studentName,courseName:this.dataForm.courseName})}).then(function(e){var a=e.data;a&&0===a.code?(t.dataList=a.page.list,t.totalPage=a.page.totalCount):(t.dataList=[],t.totalPage=0),t.dataListLoading=!1})},getDataAllList:function(){this.dataForm.year="",this.dataForm.studentNum="",this.dataForm.studentName="",this.dataForm.courseName="",this.dataForm.order="year desc, studentNum asc",this.getDataList()},sizeChangeHandle:function(t){this.pageSize=t,this.pageIndex=1,this.getDataList()},currentChangeHandle:function(t){this.pageIndex=t,this.getDataList()},sortChangeHandle:function(t){this.setOrder(t),this.getDataList()},setOrder:function(t){var e="ascending"==t.order?"ASC":"DESC",a=t.prop;this.order=a+" "+e},selectionChangeHandle:function(t){this.dataListSelections=t},addOrUpdateHandle:function(t){var e=this;this.addOrUpdateVisible=!0,this.$nextTick(function(){e.$refs.addOrUpdate.init(t)})},importHandle:function(){var t=this;this.scoreImportVisible=!0,this.$nextTick(function(){t.$refs.scoreImport.init()})},deleteHandle:function(t){var e=this,a=t?[t]:this.dataListSelections.map(function(t){return t.id});this.$confirm("确定对[id="+a.join(",")+"]进行["+(t?"删除":"批量删除")+"]操作?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.$http({url:e.$http.adornUrl("/train/score/delete"),method:"post",data:e.$http.adornData(a,!1)}).then(function(t){var a=t.data;a&&0===a.code?e.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){e.getDataList()}}):e.$message.error(a.msg)})})}}},o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mod-config"},[a("el-form",{attrs:{inline:!0,model:t.dataForm},nativeOn:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.getDataList()}}},[a("el-form-item",[a("el-input",{attrs:{placeholder:"年份",clearable:""},model:{value:t.dataForm.year,callback:function(e){t.$set(t.dataForm,"year",e)},expression:"dataForm.year"}})],1),t._v(" "),a("el-form-item",[a("el-input",{attrs:{placeholder:"学号",clearable:""},model:{value:t.dataForm.studentNum,callback:function(e){t.$set(t.dataForm,"studentNum",e)},expression:"dataForm.studentNum"}})],1),t._v(" "),a("el-form-item",[a("el-input",{attrs:{placeholder:"学生姓名",clearable:""},model:{value:t.dataForm.studentName,callback:function(e){t.$set(t.dataForm,"studentName",e)},expression:"dataForm.studentName"}})],1),t._v(" "),a("el-form-item",[a("el-input",{attrs:{placeholder:"课程名",clearable:""},model:{value:t.dataForm.courseName,callback:function(e){t.$set(t.dataForm,"courseName",e)},expression:"dataForm.courseName"}})],1),t._v(" "),a("el-form-item",[a("el-button",{attrs:{icon:"el-icon-zoom-in",type:"primary",plain:""},on:{click:function(e){t.getDataList()}}},[t._v("查询")]),t._v(" "),a("el-button",{attrs:{icon:"el-icon-zoom-out",type:"primary",plain:""},on:{click:function(e){t.getDataAllList()}}},[t._v("取消")])],1)],1),t._v(" "),a("el-form",[a("el-form-item",{staticStyle:{"margin-bottom":"5px"}},[t.isAuth("train:score:save")?a("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(e){t.addOrUpdateHandle()}}},[t._v("新增")]):t._e(),t._v(" "),a("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(e){t.importHandle()}}},[t._v("导入")]),t._v(" "),t.isAuth("train:score:delete")?a("el-button",{attrs:{size:"small",type:"danger",disabled:t.dataListSelections.length<=0},on:{click:function(e){t.deleteHandle()}}},[t._v("批量删除")]):t._e()],1)],1),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.dataListLoading,expression:"dataListLoading"}],staticStyle:{width:"100%"},attrs:{data:t.dataList,border:""},on:{"selection-change":t.selectionChangeHandle,"sort-change":t.sortChangeHandle}},[a("el-table-column",{attrs:{type:"selection","header-align":"center",align:"center",width:"50"}}),t._v(" "),a("el-table-column",{attrs:{prop:"year","header-align":"center",align:"center",width:"100",sortable:"",label:"年份"}}),t._v(" "),a("el-table-column",{attrs:{prop:"studentNum","header-align":"center",align:"center",width:"120",sortable:"",label:"学号"}}),t._v(" "),a("el-table-column",{attrs:{prop:"studentName","header-align":"center",align:"center",width:"120",label:"学生姓名"}}),t._v(" "),a("el-table-column",{attrs:{prop:"courseNum","header-align":"center",align:"center",sortable:"",label:"课程号"}}),t._v(" "),a("el-table-column",{attrs:{prop:"courseName","header-align":"center",align:"center",sortable:"",label:"课程名"}}),t._v(" "),a("el-table-column",{attrs:{prop:"studentScore","header-align":"center",align:"center",label:"学生成绩"}}),t._v(" "),a("el-table-column",{attrs:{fixed:"right","header-align":"center",align:"center",width:"150",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){t.addOrUpdateHandle(e.row.id)}}},[t._v("修改")]),t._v(" "),a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){t.deleteHandle(e.row.id)}}},[t._v("删除")])]}}])})],1),t._v(" "),a("el-pagination",{attrs:{"current-page":t.pageIndex,"page-sizes":[10,20,50,100],"page-size":t.pageSize,total:t.totalPage,layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":t.sizeChangeHandle,"current-change":t.currentChangeHandle}}),t._v(" "),t.scoreImportVisible?a("score-import",{ref:"scoreImport",on:{refreshDataList:t.getDataList}}):t._e()],1)},staticRenderFns:[]},s=a("46Yf")(i,o,!1,null,null,null);e.default=s.exports}});