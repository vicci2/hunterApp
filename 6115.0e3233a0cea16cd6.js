"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6115],{9570:(p,O,c)=>{c.d(O,{L:()=>n});var b=c(467),t=c(4262),d=c(3953),u=c(1626);let n=(()=>{var g;class M{constructor(e,l){this.firestore=e,this.http=l,this.apiUrl="http://localhost:8000"}setDocument(e,l){var s=this;return(0,b.A)(function*(){try{yield(0,t.BN)((0,t.H9)(s.firestore,e),l)}catch(h){throw console.error("Error writing document:",h),h}})()}getDocById(e){var l=this;return(0,b.A)(function*(){try{const s=(0,t.H9)(l.firestore,e);return yield(0,t.x7)(s)}catch(s){throw console.error("Error reading document:",s),s}})()}createJob(e){var l=this;return(0,b.A)(function*(){try{const s=(0,t.H9)(l.firestore,`jobs/${e.id}`);yield(0,t.BN)(s,e),console.log("Job successfully created!")}catch(s){throw console.error("Error creating job: ",s),s}})()}getJobs(){return this.http.get(`${this.apiUrl}/jobs/`)}getJobById(e){return this.http.get(`${this.apiUrl}/jobs/${e}`)}updateJob(e,l){return this.http.put(`${this.apiUrl}/jobs/${e}`,l,{headers:{"Content-Type":"application/json"}})}deleteJob(e){return this.http.delete(`${this.apiUrl}/jobs/${e}`)}saveBookmark(e,l){return this.http.post(`${this.apiUrl}/jobs/${e}/bookmark`,{bookmarked:l})}getBookmarkStatus(e){return this.http.get(`${this.apiUrl}/jobs/${e}/bookmark`)}}return(g=M).\u0275fac=function(e){return new(e||g)(d.KVO(t._7),d.KVO(u.Qq))},g.\u0275prov=d.jDH({token:g,factory:g.\u0275fac,providedIn:"root"}),M})()},6115:(p,O,c)=>{c.r(O),c.d(O,{JobDetailPage:()=>f});var b=c(177),t=c(5985),d=c(5079),u=c(5873),n=c(3953),g=c(6766),M=c(9570);function C(i,_){if(1&i&&(n.qex(0),n.j41(1,"ion-text",7),n.EFF(2),n.k0s(),n.bVm()),2&i){const r=n.XpG(2);n.R7$(2),n.JRh(null==r.job?null:r.job.qualifications)}}function e(i,_){if(1&i&&(n.qex(0),n.j41(1,"ion-text",7),n.EFF(2),n.k0s(),n.bVm()),2&i){const r=n.XpG(2);n.R7$(2),n.JRh(r.job.aboutJob)}}function l(i,_){if(1&i&&(n.qex(0),n.j41(1,"ion-row",20)(2,"ion-col",21)(3,"ion-label"),n.EFF(4,"Qualifications"),n.k0s()(),n.DNE(5,C,3,1,"ng-container",13),n.k0s(),n.j41(6,"ion-row",20)(7,"ion-col",21)(8,"ion-label"),n.EFF(9,"About the Job"),n.k0s()(),n.DNE(10,e,3,1,"ng-container",13),n.k0s(),n.bVm()),2&i){const r=n.XpG();n.R7$(5),n.Y8G("ngIf",(null==r.job||null==r.job.qualifications?null:r.job.qualifications.length)>0),n.R7$(5),n.Y8G("ngIf",(null==r.job||null==r.job.aboutJob?null:r.job.aboutJob.length)>0)}}function s(i,_){if(1&i&&(n.qex(0),n.j41(1,"ion-row",20)(2,"ion-col",21)(3,"ion-label"),n.EFF(4),n.k0s()(),n.j41(5,"ul")(6,"li")(7,"ion-text",7),n.EFF(8,"Company Identity"),n.k0s()()()(),n.j41(9,"ion-row",20)(10,"ion-col",21)(11,"ion-label"),n.EFF(12,"About Us"),n.k0s()(),n.j41(13,"ul")(14,"li")(15,"ion-text",7),n.EFF(16,"Contact info, location info & any other relevant info"),n.k0s()()()(),n.bVm()),2&i){const r=n.XpG();n.R7$(4),n.JRh(null==r.job?null:r.job.company)}}function h(i,_){1&i&&(n.qex(0),n.j41(1,"p",22),n.EFF(2,"A Work In Progress"),n.k0s(),n.bVm())}let f=(()=>{var i;class _{constructor(a,o){this.route=a,this.jobService=o,this.job={},this.jobs=[],this.segment_value="description",this.bookmark=!1,(0,d.a)({bookmark:u.Fc8,bookmarkOutline:u.dm8,star:u.d49,starOutline:u.zV})}ngOnInit(){this.loadJobs()}changeSegment(a){console.log(a),this.segment_value=a.detail.value}toggleBookmark(){this.bookmark=!this.bookmark}loadJobs(){this.jobService.getJobs().subscribe(a=>{this.jobs=a;const o=this.route.snapshot.paramMap.get("id"),m=this.jobs.find(P=>P.id==o);m&&(this.job=m,console.log("Job",this.job))})}getRemainingDays(){var a;const o=new Date(null===(a=this.job)||void 0===a?void 0:a.expires_on),m=new Date;if(isNaN(o.getTime()))return"Undefined";const P=o.getTime()-m.getTime();return P<0?`Expired on ${o.toLocaleDateString()}`:`${Math.ceil(P/864e5)} Days Left`}}return(i=_).\u0275fac=function(a){return new(a||i)(n.rXU(g.nX),n.rXU(M.L))},i.\u0275cmp=n.VBU({type:i,selectors:[["app-job-detail"]],standalone:!0,features:[n.aNF],decls:48,vars:15,consts:[["color","secondary",3,"fullscreen"],["slot","start"],[1,"menu"],["mode","md","defaultHref","/tabs/home"],["lines","none"],[3,"src"],[1,"company"],["color","medium"],["slot","end"],["mode","ios",3,"ionChange","value"],["value","description"],["value","company"],["value","reviews"],[4,"ngIf"],["size","2"],["color","light",3,"click"],[3,"name"],["size","10"],["expand","block"],["color","light"],[1,"ion-margin-bottom","desc"],["size","12"],[1,"ion-text","ion-text-center"]],template:function(a,o){1&a&&(n.j41(0,"ion-content",0)(1,"ion-header")(2,"ion-toolbar")(3,"ion-buttons",1)(4,"ion-thumbnail",2),n.nrm(5,"ion-back-button",3),n.k0s()()()(),n.j41(6,"ion-list",4)(7,"ion-item")(8,"ion-label"),n.EFF(9),n.j41(10,"p"),n.EFF(11),n.j41(12,"ion-chip"),n.EFF(13),n.k0s()()()(),n.j41(14,"ion-item")(15,"ion-thumbnail",1),n.nrm(16,"img",5),n.k0s(),n.j41(17,"ion-label",6),n.EFF(18),n.j41(19,"p")(20,"ion-text",7),n.EFF(21),n.k0s()()(),n.j41(22,"ion-text",8),n.EFF(23),n.k0s()()(),n.j41(24,"ion-row")(25,"ion-segment",9),n.bIt("ionChange",function(P){return o.changeSegment(P)}),n.j41(26,"ion-segment-button",10)(27,"ion-label"),n.EFF(28,"Description"),n.k0s()(),n.j41(29,"ion-segment-button",11)(30,"ion-label"),n.EFF(31,"Company"),n.k0s()(),n.j41(32,"ion-segment-button",12)(33,"ion-label"),n.EFF(34,"Reviews"),n.k0s()()()(),n.DNE(35,l,11,2,"ng-container",13)(36,s,17,1,"ng-container",13)(37,h,3,0,"ng-container",13),n.k0s(),n.j41(38,"ion-footer")(39,"ion-toolbar")(40,"ion-row")(41,"ion-col",14)(42,"ion-button",15),n.bIt("click",function(){return o.toggleBookmark()}),n.nrm(43,"ion-icon",16),n.k0s()(),n.j41(44,"ion-col",17)(45,"ion-button",18)(46,"ion-text",19),n.EFF(47,"Apply Now"),n.k0s()()()()()()),2&a&&(n.Y8G("fullscreen",!0),n.R7$(2),n.xc7("--background","url('../../../../assets/imgs/"+(null==o.job?null:o.job.image)+"') no-repeat center center/cover"),n.R7$(7),n.SpI(" ",null==o.job?null:o.job.post," "),n.R7$(2),n.SpI(" ",null==o.job?null:o.job.salary," "),n.R7$(2),n.SpI(" ",null==o.job?null:o.job.job_type," "),n.R7$(3),n.Y8G("src","assets/imgs/"+(null==o.job?null:o.job.logo_light),n.B4B),n.R7$(2),n.SpI(" ",null==o.job?null:o.job.company," "),n.R7$(3),n.SpI(" ",null==o.job?null:o.job.region," "),n.R7$(2),n.SpI(" ",o.getRemainingDays()," "),n.R7$(2),n.Y8G("value",o.segment_value),n.R7$(10),n.Y8G("ngIf","description"===o.segment_value),n.R7$(),n.Y8G("ngIf","company"===o.segment_value),n.R7$(),n.Y8G("ngIf","reviews"===o.segment_value),n.R7$(6),n.Y8G("name",o.bookmark?"bookmark":"bookmark-outline"))},dependencies:[t.iq,t.Jm,t.M0,t.hU,t.eP,t.Gp,t.ln,t.IO,t.ZB,t.he,t.uz,t.nf,t.el,t.QW,t.W9,t.ai,t.eU,t.Zx,b.MD,b.bT],styles:["ion-content[_ngcontent-%COMP%]   ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{height:30vh}ion-content[_ngcontent-%COMP%]   ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-buttons[_ngcontent-%COMP%]{margin:2vh 1.5vh}ion-content[_ngcontent-%COMP%]   ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-buttons[_ngcontent-%COMP%]   ion-thumbnail[_ngcontent-%COMP%]{border:1px solid var(--ion-color-medium);--border-radius: .5rem;display:flex;align-items:center;justify-content:center}ion-content[_ngcontent-%COMP%]   ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-buttons[_ngcontent-%COMP%]   ion-thumbnail[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{--indicator-color: var(--ion-color-light-contrast);font-size:5rem}ion-content[_ngcontent-%COMP%]   ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-buttons[_ngcontent-%COMP%]   ion-back-button[_ngcontent-%COMP%]{--color: var(--ion-color-medium);--color-hover: var(--ion-color-secondary)}ion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]{background:linear-gradient(5deg,#13547a,#80d0c7);border-radius:0 0 1rem 1rem;padding:1.5vh}ion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{--background:none}ion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{font-size:1.7rem;font-weight:800}ion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:.65rem;margin-top:5px;font-weight:500}ion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   ion-chip[_ngcontent-%COMP%]{font-size:.65rem;border-radius:8px;font-weight:500;min-height:0;padding:4px 8px;margin-left:10px}ion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-thumbnail[_ngcontent-%COMP%]{height:4vh;width:4vh;background-color:var(--ion-color-dark);--border-radius: .2rem;display:flex;align-items:center;justify-content:center}ion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-thumbnail[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:80%;width:80%}ion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label.company[_ngcontent-%COMP%]{font-size:.8rem;font-weight:500}ion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label.company[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-top:3px}ion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label.company[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   ion-text[_ngcontent-%COMP%]{font-size:.65rem}ion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-text[_ngcontent-%COMP%]{font-size:.65rem;font-weight:500}ion-content[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]{margin:1.5vh}ion-content[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-segment[_ngcontent-%COMP%]{--background: var(--ion-color-light)}ion-content[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-segment[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%]{margin:10px;--background: #fff;--border-color: var(--ion-color-light);--indicator-color: var(--ion-color-primary);--color: var(--ion-color-primary);--color-checked: var(--ion-color-light);--border-radius: 1rem}ion-content[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-segment[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{font-size:.8rem;font-weight:500}ion-content[_ngcontent-%COMP%]   ion-row.desc[_ngcontent-%COMP%]{background-color:var(--ion-color-light);color:var(--ion-color-secondary);border-radius:.4rem;padding:.5rem 1rem}ion-content[_ngcontent-%COMP%]   ion-row.desc[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{font-size:.95rem;font-weight:800}ion-content[_ngcontent-%COMP%]   ion-row.desc[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{padding-left:.4rem}ion-content[_ngcontent-%COMP%]   ion-row.desc[_ngcontent-%COMP%]   ion-text[_ngcontent-%COMP%]{font-size:.7rem;font-weight:700}ion-footer[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{--background: linear-gradient(5deg, #13547a 0%, #80d0c7 100%)}.section-label[_ngcontent-%COMP%]{font-weight:700;font-size:1.2em;margin-bottom:10px}.ratings-placeholder[_ngcontent-%COMP%]{display:flex;align-items:center}.ratings-placeholder[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:gold;margin-right:5px}"]}),_})()}}]);