(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[85],{7633:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-no-ssr",[n("transition",{attrs:{appear:"","enter-active-class":"animated bounceInDown","leave-active-class":"animated bounceOutDown"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.needToRefreshCalendar,expression:"needToRefreshCalendar"}],staticClass:"q-pa-sm bg-white cursor-pointer text-center text-primary",on:{click:e.refresh}},[e._v("\n      "+e._s(e.$t("appointment_message_need_to_refresh"))+"\n    ")])]),n("q-page",{staticClass:"row items-stretch",attrs:{padding:""}},[n("schedule-placeholder",{attrs:{"need-to-show-appointments":!0,"company-id":e.companyId}}),e.companyId&&e.locationId?n("appointment-confirmation",{attrs:{"company-id":e.companyId}}):e._e()],1)],1)},c=[],a=(n("8e6e"),n("8a81"),n("ac6a"),n("cadf"),n("06db"),n("456d"),n("9523")),i=n.n(a),o=(n("96cf"),n("c973")),s=n.n(o),p=(n("c5f6"),n("2f62")),h=n("a48e"),u=n("83f8");function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){i()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var l={name:"AppointmentDetails",components:{schedulePlaceholder:h["a"],appointmentConfirmation:u["a"]},props:{companyId:{type:[Number,String],required:!0},locationId:{type:[Number,String],required:!0}},mounted:function(){var e=s()(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.fetch();case 2:this.trackUserAction({actionName:"openSchedulePage"});case 3:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),computed:m({},Object(p["c"])("companySettings",["companySettings"]),{},Object(p["c"])("appointment",["needToRefreshCalendar"]),{isNotFetched:function(){return!0}}),methods:m({},Object(p["b"])("auth",["trackUserAction"]),{},Object(p["b"])("client",["fetchClientList"]),{},Object(p["b"])("companySettings",["fetchCompanySettings"]),{},Object(p["b"])("companyService",["fetchCompanyServiceList"]),{},Object(p["d"])("scheduleAppointment",["selectLocation","changeSlotsMode","changeScheduleGrid","needRefresh"]),{fetch:function(){var e=s()(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.fetchCompanySettings({variables:{companyId:this.companyId}});case 2:return e.next=4,this.fetchClientList({variables:{companyId:this.companyId}});case 4:return this.changeSlotsMode(this.companySettings),this.changeScheduleGrid(this.companySettings),this.selectLocation({id:+this.locationId}),e.next=9,this.fetchCompanyServiceList({variables:{companyId:this.companyId}});case 9:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),refresh:function(){this.needRefresh(!0)}})},f=l,y=n("42e1"),b=Object(y["a"])(f,r,c,!1,null,null,null);t["default"]=b.exports}}]);