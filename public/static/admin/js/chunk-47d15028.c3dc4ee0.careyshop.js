(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-47d15028"],{"4dd0c":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("cs-container",[a("page-header",{ref:"header",attrs:{slot:"header",loading:t.loading,"platform-table":t.platformTable},on:{submit:t.handleSubmit},slot:"header"}),a("page-main",{attrs:{loading:t.loading,"table-data":t.table,"platform-table":t.platformTable},on:{sort:t.handleSort,refresh:t.handleRefresh}}),a("page-footer",{attrs:{slot:"footer",loading:t.loading,current:t.page.current,size:t.page.size,total:t.page.total},on:{change:t.handlePaginationChange},slot:"footer"})],1)},r=[],o=(a("d3b7"),a("3ca3"),a("ddb0"),a("5530")),i=a("3766"),s=a("b27e"),d={name:"system-storage-style",components:{PageHeader:function(){return a.e("chunk-2d21d8bd").then(a.bind(null,"d281"))},PageMain:function(){return a.e("chunk-6be06272").then(a.bind(null,"d10f"))},PageFooter:function(){return a.e("chunk-2d225417").then(a.bind(null,"e42d"))}},data:function(){return{loading:!1,table:[],platformTable:[],page:{current:1,size:0,total:0},order:{order_type:void 0,order_field:void 0}}},mounted:function(){var t=this;Promise.all([Object(i["a"])("system_info",["platform"]),this.$store.dispatch("careyshop/db/databasePage",{user:!0})]).then((function(e){t.platformTable=e[0].data?e[0].data.platform.value:[],t.page.size=e[1].get("size").value()||25})).then((function(){t.handleSubmit()}))},methods:{handleRefresh:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];e&&(!(this.page.current-1)||this.page.current--),this.$nextTick((function(){t.$refs.header.handleFormSubmit()}))},handlePaginationChange:function(t){var e=this;this.page=t,this.$nextTick((function(){e.$refs.header.handleFormSubmit()}))},handleSort:function(t){var e=this;this.order=t,this.$nextTick((function(){e.$refs.header.handleFormSubmit()}))},handleSubmit:function(t){var e=this,a=arguments.length>1&&void 0!==arguments[1]&&arguments[1];a&&(this.page.current=1),this.loading=!0,Object(s["c"])(Object(o["a"])(Object(o["a"])(Object(o["a"])({},t),this.order),{},{page_no:this.page.current,page_size:this.page.size})).then((function(t){e.table=t.data.items||[],e.page.total=t.data.total_result})).finally((function(){e.loading=!1}))}}},l=d,u=a("2877"),c=Object(u["a"])(l,n,r,!1,null,null,null);e["default"]=c.exports},b27e:function(t,e,a){"use strict";a.d(e,"a",(function(){return i})),a.d(e,"d",(function(){return s})),a.d(e,"c",(function(){return d})),a.d(e,"b",(function(){return l})),a.d(e,"e",(function(){return u}));var n=a("5530"),r=a("bc07"),o="/v1/storage_style";function i(t){return Object(r["a"])({url:o,method:"post",data:Object(n["a"])({method:"add.storage.style.item"},t)})}function s(t){return Object(r["a"])({url:o,method:"post",data:Object(n["a"])({method:"set.storage.style.item"},t)})}function d(t){return Object(r["a"])({url:o,method:"post",data:Object(n["a"])({method:"get.storage.style.list"},t)})}function l(t){return Object(r["a"])({url:o,method:"post",data:{method:"del.storage.style.list",storage_style_id:t}})}function u(t,e){return Object(r["a"])({url:o,method:"post",data:{method:"set.storage.style.status",storage_style_id:t,status:e}})}}}]);