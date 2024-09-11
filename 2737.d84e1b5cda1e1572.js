"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2737],{2737:(R,m,l)=>{l.r(m),l.d(m,{HomePage:()=>T});var c=l(177),s=l(5985),d=l(5079),p=l(5873),b=l(617),n=l(3953);let u=(()=>{var o;class r{constructor(e){this.datePipe=e,(0,d.a)({bookmark:p.Fc8})}ngOnInit(){}getRemainingDays(e){const i=new Date(e),a=new Date;if(isNaN(i.getTime()))return"Undefined";const g=i.getTime()-a.getTime();return g<0?`Expired on ${this.datePipe.transform(i,"dd/MM/yyyy")}`:`${Math.ceil(g/864e5)} Days Left`}}return(o=r).\u0275fac=function(e){return new(e||o)(n.rXU(c.vh))},o.\u0275cmp=n.VBU({type:o,selectors:[["app-jobs"]],inputs:{job:"job"},standalone:!0,features:[n.aNF],decls:23,vars:8,consts:[["lines","none"],["color","primary",1,"ion-margin-bottom","job-item"],["color","light"],["slot","end","fill","clear","color","medium"],["name","bookmark"],["color","primary",1,"job-item"],["slot","start"],["loading","lazy",3,"src","alt"],[1,"company"],["color","medium"],["slot","end"]],template:function(e,i){1&e&&(n.j41(0,"ion-card")(1,"ion-list",0)(2,"ion-item",1)(3,"ion-label"),n.EFF(4),n.j41(5,"p"),n.EFF(6),n.j41(7,"ion-chip",2),n.EFF(8),n.k0s()()(),n.j41(9,"ion-button",3),n.nrm(10,"ion-icon",4),n.k0s()(),n.j41(11,"ion-item",5)(12,"ion-thumbnail",6),n.nrm(13,"img",7),n.k0s(),n.j41(14,"ion-label",8),n.EFF(15),n.j41(16,"p")(17,"ion-text",9),n.EFF(18),n.k0s()()(),n.j41(19,"ion-label",10)(20,"p")(21,"ion-text",9),n.EFF(22),n.k0s()()()()()()),2&e&&(n.R7$(4),n.SpI(" ",null==i.job?null:i.job.post," "),n.R7$(2),n.SpI(" ",null==i.job?null:i.job.salary," "),n.R7$(2),n.SpI(" ",null==i.job?null:i.job.job_type," "),n.R7$(5),n.Y8G("src","assets/imgs/"+(null==i.job?null:i.job.logo_dark),n.B4B)("alt",null==i.job?null:i.job.company),n.R7$(2),n.SpI(" ",null==i.job?null:i.job.company," "),n.R7$(3),n.SpI(" ",null==i.job?null:i.job.region," "),n.R7$(4),n.SpI(" ",i.getRemainingDays(null==i.job?null:i.job.expires_on)," "))},dependencies:[s.b_,s.uz,s.he,s.ZB,s.Jm,s.iq,s.Zx,s.IO,s.nf],styles:["ion-card[_ngcontent-%COMP%]{background-color:var(--ion-color-primary);margin:1.5vh;border-radius:15px;cursor:pointer}ion-card[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]{background:transparent;margin-top:1vh;margin-bottom:1vh}ion-card[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{font-size:.95rem;font-weight:700}ion-card[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:.65rem;margin-top:5px;font-weight:500}ion-card[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   ion-chip[_ngcontent-%COMP%]{min-height:0;font-size:.65rem;border-radius:8px;font-weight:500;padding:4px 8px;margin-left:10px}ion-card[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{align-self:start;margin-top:1.5vh}ion-card[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-thumbnail[_ngcontent-%COMP%]{height:3vh;width:3vh;background-color:var(--ion-color-light);--border-radius: 5px;display:flex;align-items:center;justify-content:center}ion-card[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-thumbnail[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:80%;width:80%}ion-card[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label.company[_ngcontent-%COMP%]{font-size:.8rem;font-weight:500}ion-card[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label.company[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-top:3px}ion-card[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label.company[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   ion-text[_ngcontent-%COMP%]{font-size:.65rem}ion-card[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-text[_ngcontent-%COMP%]{font-size:.5rem;font-weight:700}.job-item[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}@media (max-width: 640px){.job-item[_ngcontent-%COMP%]{flex-direction:column;align-items:flex-start}}@media (min-width: 641px) and (max-width: 1023px){.job-item[_ngcontent-%COMP%]{flex-direction:row;align-items:center}}@media (min-width: 1024px){.job-item[_ngcontent-%COMP%]{flex-direction:row;align-items:center}}"]}),r})();var _=l(6766),f=l(1626),P=l(9570);const C=(o,r)=>r.id,h=o=>["/","tabs","job",o],O=o=>["./",o];function M(o,r){if(1&o&&(n.j41(0,"swiper-slide"),n.nrm(1,"app-jobs",27),n.k0s()),2&o){const t=r.$implicit;n.R7$(),n.Y8G("job",t)("routerLink",n.eq3(2,h,t.id))}}function y(o,r){if(1&o&&(n.j41(0,"ion-list",9)(1,"div")(2,"swiper-container",26),n.Z7z(3,M,2,4,"swiper-slide",null,C),n.k0s()()()),2&o){const t=n.XpG();n.R7$(2),n.Y8G("modules",t.swiperModules)("slidesPerView",t.slidesPerView)("keyboard",!0)("centerSlides",!0),n.R7$(),n.Dyx(t.jobs)}}function k(o,r){if(1&o&&(n.j41(0,"ion-col",31)(1,"ion-item",32)(2,"ion-thumbnail",33),n.nrm(3,"img",34),n.k0s(),n.j41(4,"ion-label",35),n.EFF(5),n.j41(6,"p"),n.EFF(7),n.nrm(8,"span",36),n.EFF(9),n.k0s()(),n.j41(10,"ion-text",37),n.EFF(11," 4d Left "),n.k0s()()()),2&o){const t=r.$implicit;n.R7$(),n.Y8G("routerLink",n.eq3(5,h,t.id)),n.R7$(2),n.Y8G("src","assets/imgs/"+(null==t?null:t.logo_light),n.B4B),n.R7$(2),n.SpI(" ",null==t?null:t.post," "),n.R7$(2),n.SpI(" ",null==t?null:t.company," "),n.R7$(2),n.SpI(" ",null==t?null:t.type," ")}}function j(o,r){if(1&o&&(n.j41(0,"ion-list",10)(1,"ion-list-header",28)(2,"ion-label"),n.EFF(3," Recent Jobs "),n.k0s(),n.j41(4,"ion-button",29)(5,"ion-text"),n.EFF(6," Show all "),n.k0s()()(),n.j41(7,"ion-grid")(8,"ion-row"),n.DNE(9,k,12,7,"ion-col",30),n.k0s()()()),2&o){const t=n.XpG();n.R7$(9),n.Y8G("ngForOf",t.recent)}}function F(o,r){if(1&o&&(n.j41(0,"ion-segment-button",38)(1,"ion-label"),n.EFF(2),n.k0s()()),2&o){const t=r.$implicit;n.Y8G("value",t.field),n.R7$(2),n.JRh(t.field)}}function v(o,r){if(1&o&&(n.j41(0,"ion-col",41)(1,"ion-card",42)(2,"ion-row",43)(3,"ion-card-title"),n.EFF(4),n.k0s(),n.j41(5,"ion-badge"),n.EFF(6),n.k0s()(),n.j41(7,"ion-card-content")(8,"ion-text")(9,"p"),n.EFF(10),n.k0s()(),n.j41(11,"div",44),n.nrm(12,"img",45),n.k0s()()()()),2&o){let t;const e=r.$implicit,i=n.XpG(3);n.R7$(),n.Y8G("routerLink",n.eq3(10,O,i.getJobTitle(e))),n.R7$(3),n.JRh(i.getJobTitle(e)),n.R7$(),n.xc7("--background","var(--ion-color-"+e[i.getJobTitle(e)].bgcolor+")"),n.R7$(),n.SpI(" ",e[i.getJobTitle(e)].opps," "),n.R7$(4),n.JRh(e[i.getJobTitle(e)].post),n.R7$(2),n.Aen("background: no-repeat center center/cover"),n.Y8G("src",null==(t=e[i.getJobTitle(e)])?null:t.bgPic,n.B4B)("alt",i.getJobTitle(e))}}function w(o,r){if(1&o&&(n.qex(0),n.DNE(1,v,13,12,"ion-col",40),n.bVm()),2&o){const t=n.XpG().$implicit;n.R7$(),n.Y8G("ngForOf",t.jobs)}}function x(o,r){if(1&o&&(n.qex(0),n.DNE(1,w,2,1,"ng-container",39),n.bVm()),2&o){const t=r.$implicit,e=n.XpG();n.R7$(),n.Y8G("ngIf","all"===e.selectedCategory||t.field===e.selectedCategory)}}function $(o,r){if(1&o&&(n.j41(0,"ion-item",51)(1,"p"),n.EFF(2),n.k0s()()),2&o){const t=n.XpG().$implicit;n.R7$(2),n.JRh(t.answer)}}function z(o,r){if(1&o){const t=n.RV6();n.qex(0),n.j41(1,"ion-item",46),n.bIt("click",function(){const i=n.eBV(t).$implicit,a=n.XpG();return n.Njj(a.toggleFaq(i))}),n.nrm(2,"ion-icon",47),n.j41(3,"ion-label",48),n.EFF(4),n.k0s(),n.nrm(5,"ion-icon",49),n.k0s(),n.DNE(6,$,3,1,"ion-item",50),n.bVm()}if(2&o){const t=r.$implicit;n.R7$(4),n.JRh(t.question),n.R7$(),n.Y8G("name",t.open?"chevron-up-circle":"chevron-down"),n.R7$(),n.Y8G("ngIf",t.open)}}let T=(()=>{var o;class r{constructor(e){this.jobService=e,this.selectedCategory="all",this.swiperModules=[b.Jl],this.slidesPerView=3,this.popular=[],this.recent=[],this.topics=[],this.faqs=[],this.jobs=[],(0,d.a)({options:p.fFW,helpCircleOutline:p.W2C})}ngOnInit(){this.getscreenWidth(),this.loadJobs(),this.initializeData()}getscreenWidth(){this.screenWidth=window.innerWidth,this.screenWidth>=320&&this.screenWidth<=480?this.slidesPerView=1.1:this.screenWidth>480&&this.screenWidth<=992?this.slidesPerView=2.5:this.screenWidth>992&&this.screenWidth<=1200&&(this.slidesPerView=3)}getJobTitle(e){return Object.keys(e)[0]}changeSegment(e){this.selectedCategory=e.detail.value}getCardBackground(e){return e&&e[this.getJobTitle(e)]&&e[this.getJobTitle(e)].bgPic?"url('../../../../assets/topics/"+e[this.getJobTitle(e)].bgPic+"') no-repeat center center/contain":"linear-gradient(15deg, #13547a 0%, #80d0c7 100%)"}toggleFaq(e){e.open=!e.open}loadJobs(){this.jobService.getJobs().subscribe(e=>{this.jobs=e},e=>{console.error(`Error fetching jobs${e}`)})}initializeData(){this.popular=[{id:1,company:"Technyks LLC",region:"New Delhi",expires_on:"30/11/23",post:"Senior UX Designer",job_type:"Full Time",salary:"$40-90k/year",logo_dark:"ct_dark.png",logo_light:"ct_light.png"},{id:2,company:"Uber Technologies",region:"Bangalore",expires_on:"07/12/23",post:"Full-Stack Developer",job_type:"Full Time",salary:"$30-80k/year",logo_dark:"uber_dark.png",logo_light:"uber_light.png"},{id:3,company:"LinkedIn Corp.",region:"Mumbai",expires_on:"15/12/23",post:"Lead UX Designer",job_type:"Full Time",salary:"$30-70k/year",logo_dark:"linkedin_dark.png",logo_light:"linkedin_light.png"},{id:4,company:"Arkansas State University",region:"Remote in Jonesboro, AR",expires_on:"",post:"Admissions Analyst",job_type:"Full time (29-40 Hrs)",salary:"",logo_dark:"companylogo_dark.png",logo_light:"companylogo_light.png"},{id:5,company:"ABB",region:"Hybrid work in Jonesboro, AR",expires_on:"",post:"Machine Operator 2nd shift Carlon",job_type:"Full time (29-40 Hrs)",salary:"",logo_dark:"companylogo_dark.png",logo_light:"companylogo_light.png"}],this.recent=[{id:5,company:"ABB",location:"Hybrid work in Jonesboro, AR",expires_on:"",post:"Machine Operator 2nd shift Carlon",type:"Full time (29-40 Hrs)",salary:"",logo_dark:"companylogo_dark.png",logo_light:"companylogo_light.png"},{id:4,company:"TikTok",location:"New Delhi",expires_on:"30/11/23",post:"Senior UX Designer",type:"Full Time",salary:"$40-90k/year",logo_dark:"tiktok_dark.png",logo_light:"tiktok_light.png"},{id:2,company:"Uber Technologies",location:"Bangalore",expires_on:"07/12/23",post:"Full-Stack Developer",type:"Full Time",salary:"$30-80k/year",logo_dark:"uber_dark.png",logo_light:"uber_light.png"},{id:3,company:"LinkedIn Corp.",location:"Mumbai",expires_on:"15/12/23",post:"Lead UX Designer",type:"Full Time",salary:"$30-70k/year",logo_dark:"linkedin_dark.png",logo_light:"linkedin_light.png"}],this.topics=[{field:"Design",jobs:[{"Web Design":{opps:14,post:"Web design job opportunities",bgcolor:"tertiary",bgPic:"../../../assets/topics/webDesign.png"}},{"Graphics Design":{opps:75,post:"Graphic design job opportunities",bgcolor:"tertiary",bgPic:"../../../assets/topics/graphicDesign.png"}},{"Logo Design":{opps:100,post:"Logo design job opportunities",bgcolor:"tertiary",bgPic:"../../../assets/topics/logoDesign.png"}}]},{field:"Marketing",jobs:[{Advertising:{opps:30,post:"Advertising job opportunities",bgcolor:"danger",bgPic:"../../../assets/topics/advertising.png"}},{"Video Content":{opps:65,post:"Content creation job opportunities",bgcolor:"danger",bgPic:"../../../assets/topics/contentCreation.png"}},{"Viral Tweet":{opps:100,post:"Tweeting job opportunities",bgcolor:"danger",bgPic:"../../../assets/topics/tweeting.png"}}]},{field:"Finance",jobs:[{Investment:{opps:30,post:"Investment opportunities",bgcolor:"success",bgPic:"../../../assets/topics/investment.png"}},{Finance:{opps:75,post:"Finance advice job opportunities",bgcolor:"success",bgPic:""}}]}],this.faqs=[{question:"What is Topic Listing?",answer:"Topic Listing is a free Bootstrap 5 CSS template. You are not allowed to redistribute this template on any other template collection website without our permission. Please contact TemplateMo for more detail. Thank you.",open:!1},{question:"How to find a topic?",answer:"You can find a topic by using the search bar or browsing through the categories.",open:!1},{question:"Does it need to be paid?",answer:"No, Topic Listing is a free template. You can use it without any cost.",open:!1}]}}return(o=r).\u0275fac=function(e){return new(e||o)(n.rXU(P.L))},o.\u0275cmp=n.VBU({type:o,selectors:[["app-home"]],hostBindings:function(e,i){1&e&&n.bIt("resize",function(){return i.getscreenWidth()},!1,n.tSv)},standalone:!0,features:[n.aNF],decls:43,vars:7,consts:[["color","light",3,"fullscreen"],[1,"tagline"],["color","light"],[1,"text-center"],["size","10",1,"srch"],["placeholder","Search For Jobs",1,"srchBar"],["size","2"],["mode","ios",1,"filter"],["name","options"],["lines","none",1,"popular"],["lines","none",1,"ion-margin-bottom","recentJobs"],["lines","none",1,"section-title-wrap"],[1,"section-title"],[1,"segments"],["mode","ios",3,"ionChange","value"],["value","all"],[3,"value",4,"ngFor","ngForOf"],[1,"scrollable-container"],[1,"ion-align-items-center","ion-justify-content-evenly"],[4,"ngFor","ngForOf"],[1,"title"],[1,"faq-container"],["size-md","4","size-lg","4","size-sm","12","size-xs","12",1,"faq-header"],["src","assets/imgs/faq_graphic.jpg","alt","FAQ Graphic",1,"faq-image"],["size-md","8","size-lg","8","size-sm","12","size-xs","12"],["lines","none",1,"list"],["loop","true",3,"modules","slidesPerView","keyboard","centerSlides"],[3,"job","routerLink"],[1,"ion-margin-bottom"],["fill","clear","size","small","color","medium"],["size","12","size-md","6","size-lg","4",4,"ngFor","ngForOf"],["size","12","size-md","6","size-lg","4"],[1,"ion-margin-bottom","clickable-item",3,"routerLink"],["slot","start"],[3,"src"],[1,"recent"],[1,"dot"],["slot","end","color","dark"],[3,"value"],[4,"ngIf"],["size-md","4","size-lg","4","size-sm","6","size-xs","10","size-xl","3","class","ion-no-padding",4,"ngFor","ngForOf"],["size-md","4","size-lg","4","size-sm","6","size-xs","10","size-xl","3",1,"ion-no-padding"],[2,"height","20rem",3,"routerLink"],[1,"ion-justify-content-between","ion-padding"],[1,"image-wrapper"],["loading","lazy",3,"src","alt"],["lines","none",1,"faq-item",3,"click"],["slot","start","name","help-circle-outline","color","danger"],[1,"faq-question"],["slot","end","color","secondary",3,"name"],["class","ion-no-border",4,"ngIf"],[1,"ion-no-border"]],template:function(e,i){1&e&&(n.j41(0,"ion-content",0)(1,"ion-row",1)(2,"ion-col")(3,"ion-label")(4,"ion-text",2)(5,"h1",3),n.EFF(6,"Discover. Learn. Grow"),n.k0s()(),n.j41(7,"p")(8,"ion-text")(9,"h6",3),n.EFF(10,"Find "),n.j41(11,"span"),n.EFF(12,"Your Creative"),n.k0s(),n.EFF(13," Job"),n.k0s()()()()(),n.j41(14,"ion-col",4),n.nrm(15,"ion-searchbar",5),n.k0s(),n.j41(16,"ion-col",6)(17,"ion-button",7),n.nrm(18,"ion-icon",8),n.k0s()()(),n.DNE(19,y,5,4,"ion-list",9)(20,j,10,1,"ion-list",10),n.j41(21,"ion-list",11)(22,"ion-chip",12),n.EFF(23,"Browse Topics"),n.k0s()(),n.j41(24,"ion-row",13)(25,"ion-segment",14),n.bIt("ionChange",function(g){return i.changeSegment(g)}),n.j41(26,"ion-segment-button",15)(27,"ion-label"),n.EFF(28,"All"),n.k0s()(),n.DNE(29,F,3,2,"ion-segment-button",16),n.k0s()(),n.j41(30,"div",17)(31,"ion-grid")(32,"ion-row",18),n.DNE(33,x,2,1,"ng-container",19),n.k0s()()(),n.j41(34,"ion-text",20)(35,"h2"),n.EFF(36,"Frequently Asked Questions"),n.k0s()(),n.j41(37,"ion-row",21)(38,"ion-col",22),n.nrm(39,"img",23),n.k0s(),n.j41(40,"ion-col",24)(41,"ion-list",25),n.DNE(42,z,7,3,"ng-container",19),n.k0s()()()()),2&e&&(n.Y8G("fullscreen",!0),n.R7$(19),n.vxM(i.jobs.length>0?19:-1),n.R7$(),n.vxM(i.recent.length>0?20:-1),n.R7$(5),n.Y8G("value",i.selectedCategory),n.R7$(4),n.Y8G("ngForOf",i.topics),n.R7$(4),n.Y8G("ngForOf",i.topics),n.R7$(9),n.Y8G("ngForOf",i.faqs))},dependencies:[c.MD,c.Sq,c.bT,s.AF,s.nf,s.S1,s.Jm,s.he,s.hU,s.ln,s.IO,s.iq,s.W9,s.Zx,u,_.iI,_.Wk,f.q1],styles:['ion-toolbar[_ngcontent-%COMP%]{--padding:auto;height:8vh}ion-toolbar[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:8vh;width:8vh}ion-card[_ngcontent-%COMP%]{cursor:pointer}ion-card[_ngcontent-%COMP%]:hover   .overlay[_ngcontent-%COMP%]{opacity:1}ion-card[_ngcontent-%COMP%]   .image-wrapper[_ngcontent-%COMP%]{position:relative;width:100%;padding-top:100%;overflow:hidden}ion-card[_ngcontent-%COMP%]   .image-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{position:absolute;top:0;bottom:0;left:0;width:100%;height:65%;object-fit:cover;transition:transform .2s}.tagline[_ngcontent-%COMP%]{background:linear-gradient(15deg,#13547a,#80d0c7);text-align:center}.tagline[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:4rem;font-weight:700}.tagline[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{color:var(--primary-color);font-size:1.2rem;font-weight:500}.tagline[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:var(--ion-color-primary);font-weight:700}.tagline[_ngcontent-%COMP%]   .srch[_ngcontent-%COMP%]   ion-searchbar[_ngcontent-%COMP%]{--background: #ffffffbd;--background-blend-mode: overlay;--border-radius: .8rem}ion-list[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%]{padding-right:1vh}ion-list[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{font-size:1.1rem}ion-list[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]   ion-text[_ngcontent-%COMP%]{font-size:.7rem}ion-list[_ngcontent-%COMP%]   ion-thumbnail[_ngcontent-%COMP%]{height:4vh;width:4vh;background-color:var(--ion-color-dark);border-radius:5px;display:flex;align-items:center;justify-content:center}ion-list[_ngcontent-%COMP%]   ion-thumbnail[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:80%;width:80%}ion-list[_ngcontent-%COMP%]   ion-label.recent[_ngcontent-%COMP%]{font-size:.95rem;font-weight:700}ion-list[_ngcontent-%COMP%]   ion-label.recent[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-top:5px;font-size:.65rem;font-weight:600}ion-list[_ngcontent-%COMP%]   ion-text[slot=end][_ngcontent-%COMP%]{font-size:.65rem;font-weight:500;align-self:end;margin-bottom:2.2vh}ion-list.recentJobs[_ngcontent-%COMP%]{border-radius:0 0 .8rem .8rem;background:var(--ion-color-secondary)}ion-list.recentJobs[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{margin-left:1.5vh;margin-right:1.5vh;border-radius:10px}ion-list.recentJobs[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{margin-top:1.5vh;margin-bottom:1.5vh}span.dot[_ngcontent-%COMP%]{margin:0 2px 2px;height:.2rem;width:.2rem;background-color:#696969;display:inline-block}ion-row.segments[_ngcontent-%COMP%]{margin:.2rem .6rem}ion-row.segments[_ngcontent-%COMP%]   ion-segment[_ngcontent-%COMP%]{--background: var(--ion-color-light-shade)}ion-row.segments[_ngcontent-%COMP%]   ion-segment[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%]{margin:10px;--background: #fff;--border-color: transparent;--indicator-color: var(--ion-color-primary);--color: var(--ion-color-primary);--color-checked: var(--ion-color-light);--border-radius: .4rem}ion-row.segments[_ngcontent-%COMP%]   ion-segment[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{font-size:.8rem;font-weight:500}.scrollable-container[_ngcontent-%COMP%]{max-height:22.2rem;overflow-y:auto}.faq-section[_ngcontent-%COMP%]{padding:16px}.faq-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{text-align:center;margin-bottom:20px}.faq-section[_ngcontent-%COMP%]   .answer[_ngcontent-%COMP%]{padding:16px;background-color:#f9f9f9}.faq-section[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]{margin-bottom:10px}.faq-container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-items:center;justify-content:center}.title[_ngcontent-%COMP%]{text-align:center;font-weight:bolder;font-size:larger}.faq-item[_ngcontent-%COMP%]{--min-height: 4rem;--ion-item-background: #f9f9f9;border-radius:2rem;margin:.4rem}ion-list.popular[_ngcontent-%COMP%]{background:var(--ion-color-secondary)}ion-list.section-title-wrap[_ngcontent-%COMP%]:after{content:"";background:var(--ion-color-light-shade)}ion-list.section-title-wrap[_ngcontent-%COMP%]   ion-chip.section-title[_ngcontent-%COMP%]{border:solid 2px var(--ion-color-light-shade)}']}),r})()}}]);