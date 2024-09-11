"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3923],{3923:(v,l,r)=>{r.r(l),r.d(l,{ArchivesPage:()=>P});var a=r(177),p=r(4341),i=r(5985),n=r(3953);function _(o,c){if(1&o){const e=n.RV6();n.j41(0,"ion-segment-button",9),n.bIt("click",function(){const t=n.eBV(e).$implicit,g=n.XpG();return n.Njj(g.changeSegment(t.field))}),n.j41(1,"ion-label"),n.EFF(2),n.k0s()()}if(2&o){const e=c.$implicit,s=n.XpG();n.AVh("selected",e.field===s.selectedCategory),n.Y8G("value",e.field),n.R7$(2),n.JRh(e.field)}}function d(o,c){if(1&o&&(n.j41(0,"ion-col",11)(1,"ion-card")(2,"ion-card-header")(3,"ion-card-title"),n.EFF(4),n.k0s()(),n.j41(5,"ion-card-content"),n.nrm(6,"ion-icon",12),n.j41(7,"div"),n.EFF(8),n.k0s()()()()),2&o){const e=c.$implicit;n.R7$(4),n.JRh(e.post),n.R7$(2),n.Y8G("name",e.icon),n.R7$(2),n.SpI("",e.opps," opportunities available")}}function f(o,c){if(1&o&&(n.j41(0,"ion-row"),n.DNE(1,d,9,3,"ion-col",10),n.k0s()),2&o){const e=n.XpG();n.R7$(),n.Y8G("ngForOf",e.designJobs)}}function m(o,c){if(1&o&&(n.j41(0,"ion-col",11)(1,"ion-card")(2,"ion-card-header")(3,"ion-card-title"),n.EFF(4),n.k0s()(),n.j41(5,"ion-card-content"),n.nrm(6,"ion-icon",12),n.j41(7,"div"),n.EFF(8),n.k0s()()()()),2&o){const e=c.$implicit;n.R7$(4),n.JRh(e.post),n.R7$(2),n.Y8G("name",e.icon),n.R7$(2),n.SpI("",e.opps," opportunities available")}}function b(o,c){if(1&o&&(n.j41(0,"ion-row"),n.DNE(1,m,9,3,"ion-col",10),n.k0s()),2&o){const e=n.XpG();n.R7$(),n.Y8G("ngForOf",e.marketingJobs)}}function u(o,c){if(1&o&&(n.j41(0,"ion-col",11)(1,"ion-card")(2,"ion-card-header")(3,"ion-card-title"),n.EFF(4),n.k0s()(),n.j41(5,"ion-card-content"),n.nrm(6,"ion-icon",12),n.j41(7,"div"),n.EFF(8),n.k0s()()()()),2&o){const e=c.$implicit;n.R7$(4),n.JRh(e.post),n.R7$(2),n.Y8G("name",e.icon),n.R7$(2),n.SpI("",e.opps," opportunities available")}}function h(o,c){if(1&o&&(n.j41(0,"ion-row"),n.DNE(1,u,9,3,"ion-col",10),n.k0s()),2&o){const e=n.XpG();n.R7$(),n.Y8G("ngForOf",e.financeJobs)}}let P=(()=>{var o;class c{constructor(){this.selectedCategory="all",this.topics=[],this.reorderedTopics=[],this.designJobs=[],this.marketingJobs=[],this.financeJobs=[]}ngOnInit(){this.initializeData()}reorderTopics(){if("all"===this.selectedCategory)this.reorderedTopics=[{field:"Design"},{field:"Marketing"},{field:"Finance"},{field:"All"}];else{const s=this.topics.find(t=>t.field===this.selectedCategory);this.reorderedTopics=[...this.topics.filter(t=>"All"!==t.field&&t.field!==this.selectedCategory),{field:"All"},s]}}initializeData(){this.topics=[{field:"Design"},{field:"Marketing"},{field:"Finance"}],this.designJobs=[{icon:"color-palette-outline",post:"Web design job opportunities",bgcolor:"tertiary",bgPic:"../../../assets/topics/webDesign.png"},{icon:"brush-outline",post:"Graphic design job opportunities",bgcolor:"tertiary",bgPic:"../../../assets/topics/graphicDesign.png"},{icon:"ribbon-outline",post:"Logo design job opportunities",bgcolor:"tertiary",bgPic:"../../../assets/topics/logoDesign.png"}],this.marketingJobs=[{icon:"megaphone-outline",post:"Advertising job opportunities",bgcolor:"danger",bgPic:"../../../assets/topics/advertising.png"},{icon:"videocam-outline",post:"Content creation job opportunities",bgcolor:"danger",bgPic:"../../../assets/topics/contentCreation.png"},{icon:"logo-twitter",post:"Tweeting job opportunities",bgcolor:"danger",bgPic:"../../../assets/topics/tweeting.png"}],this.financeJobs=[{icon:"cash-outline",post:"Investment opportunities",bgcolor:"success",bgPic:"../../../assets/topics/investment.png"},{icon:"trending-up-outline",post:"Finance advice job opportunities",bgcolor:"success",bgPic:""}]}changeSegment(s){this.selectedCategory=s.detail.value}}return(o=c).\u0275fac=function(s){return new(s||o)},o.\u0275cmp=n.VBU({type:o,selectors:[["app-archives"]],standalone:!0,features:[n.aNF],decls:17,vars:6,consts:[[3,"fullscreen"],[1,"total-jobs-container"],[1,"total-jobs-number"],[1,"explore-now"],[1,"segments"],["mode","ios",3,"ionChange","value"],["value","all"],[3,"value","selected","click",4,"ngFor","ngForOf"],[4,"ngIf"],[3,"click","value"],["size","12",4,"ngFor","ngForOf"],["size","12"],[3,"name"]],template:function(s,t){1&s&&(n.j41(0,"ion-content",0)(1,"ion-title",1)(2,"h2"),n.EFF(3,"Total Jobs"),n.k0s(),n.j41(4,"div",2),n.EFF(5,"7,702"),n.k0s(),n.j41(6,"ion-button",3),n.EFF(7,"Explore Now"),n.k0s()(),n.j41(8,"ion-row",4)(9,"ion-segment",5),n.bIt("ionChange",function(C){return t.changeSegment(C)}),n.j41(10,"ion-segment-button",6)(11,"ion-label"),n.EFF(12,"All"),n.k0s()(),n.DNE(13,_,3,4,"ion-segment-button",7),n.k0s()(),n.DNE(14,f,2,1,"ion-row",8)(15,b,2,1,"ion-row",8)(16,h,2,1,"ion-row",8),n.k0s()),2&s&&(n.Y8G("fullscreen",!0),n.R7$(9),n.Y8G("value",t.selectedCategory),n.R7$(4),n.Y8G("ngForOf",t.topics),n.R7$(),n.Y8G("ngIf","all"===t.selectedCategory||"Design"===t.selectedCategory),n.R7$(),n.Y8G("ngIf","all"===t.selectedCategory||"Marketing"===t.selectedCategory),n.R7$(),n.Y8G("ngIf","all"===t.selectedCategory||"Finance"===t.selectedCategory))},dependencies:[i.Jm,i.he,i.eP,i.Gp,i.tN,i.iq,i.I9,i.hU,i.b_,i.ME,i.ln,i.W9,i.BC,a.MD,a.Sq,a.bT,p.YN],styles:["ion-content[_ngcontent-%COMP%]{--background: var(--ion-color-light-shade);display:flex;flex-direction:column;align-items:center}ion-content[_ngcontent-%COMP%]   .total-jobs-container[_ngcontent-%COMP%]{text-align:center;margin-top:20px}ion-content[_ngcontent-%COMP%]   .total-jobs-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0}ion-content[_ngcontent-%COMP%]   .total-jobs-container[_ngcontent-%COMP%]   .total-jobs-number[_ngcontent-%COMP%]{font-size:1.5rem;font-weight:700;color:var(--ion-color-primary)}ion-content[_ngcontent-%COMP%]   .total-jobs-container[_ngcontent-%COMP%]   .explore-now[_ngcontent-%COMP%]{--background: var(--ion-color-primary);--color: #fff;margin-top:10px}ion-content[_ngcontent-%COMP%]   ion-row.segments[_ngcontent-%COMP%]{margin:1rem 0;display:flex;justify-content:center;align-items:center}ion-content[_ngcontent-%COMP%]   ion-row.segments[_ngcontent-%COMP%]   ion-segment[_ngcontent-%COMP%]{--background: transparent;display:flex;justify-content:center}ion-content[_ngcontent-%COMP%]   ion-row.segments[_ngcontent-%COMP%]   ion-segment[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%]{margin:10px;--background: #fff;--border-color: transparent;--indicator-color: var(--ion-color-primary);--color: var(--ion-color-primary);--color-checked: var(--ion-color-light);--border-radius: .4rem;width:100px;height:100px;clip-path:polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%);box-shadow:0 0 10px #0000001a;display:flex;align-items:center;justify-content:center;text-align:center;transition:background-color .3s}ion-content[_ngcontent-%COMP%]   ion-row.segments[_ngcontent-%COMP%]   ion-segment[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{font-size:.8rem;font-weight:500}ion-content[_ngcontent-%COMP%]   ion-row.segments[_ngcontent-%COMP%]   ion-segment[_ngcontent-%COMP%]   ion-segment-button.selected[_ngcontent-%COMP%]{background-color:var(--ion-color-secondary);color:var(--ion-color-light)}ion-card[_ngcontent-%COMP%]{margin:10px}.logo[_ngcontent-%COMP%]{display:flex;align-items:center}.text[_ngcontent-%COMP%]{font-size:24px;font-weight:700}.dot[_ngcontent-%COMP%]{color:#fff;font-size:24px;font-weight:700;position:relative;left:-10px;z-index:1}.box-container[_ngcontent-%COMP%]{position:relative;margin-left:-10px}.box[_ngcontent-%COMP%]{font-size:24px;font-weight:700;border:2px solid black;padding:0 5px;background-color:#000;color:#fff;z-index:0}"]}),c})()}}]);