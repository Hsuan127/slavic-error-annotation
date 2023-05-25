(()=>{"use strict";var t={6663:(t,e,r)=>{r(6992),r(8674),r(9601),r(7727);var n=r(5010),s=r(3396);function i(t,e,r,n,i,o){var a=(0,s.up)("HelloWorld");return(0,s.wg)(),(0,s.j4)(a,{msg:"Welcome to Your Vue.js App"})}var o=r(7139);const a=r.p+"img/fi-rr-search.17d17a94.svg",c=r.p+"img/fi-sr-disk.02ec2648.svg",l=r.p+"img/fi-sr-comment-check.294596f1.svg",u=r.p+"img/fi-sr-caret-circle-left.c57f1274.svg",d=r.p+"img/fi-sr-caret-circle-right.10a983c5.svg";var h=function(t){return(0,s.dD)("data-v-ce276a32"),t=t(),(0,s.Cn)(),t},p=(0,s.uE)('<head data-v-ce276a32><link rel="stylesheet" href="https://cdn.datatables.net/1.12.1/css/jquery.dataTables.min.css" data-v-ce276a32><link rel="stylesheet" href="https://cdn.datatables.net/buttons/2.1.0/css/buttons.dataTables.min.css" data-v-ce276a32><link href="https://fonts.googleapis.com/css2?family=News+Cycle&amp;display=swap" rel="stylesheet" data-v-ce276a32><link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" data-v-ce276a32><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" data-v-ce276a32><link rel="preconnect" href="https://fonts.googleapis.com" data-v-ce276a32><link rel="stylesheet" type="text/css" href="style.css" data-v-ce276a32><link rel="icon" href="logo.png" data-v-ce276a32></head>',1),f=(0,s.uE)('<header data-v-ce276a32><div class="inner" data-v-ce276a32><div class="logo" data-v-ce276a32><div data-v-ce276a32><img src="logo.png" alt="logo" data-v-ce276a32></div></div><nav data-v-ce276a32><li data-v-ce276a32><span data-v-ce276a32>LEARNER CORPUS OF SLAVIC LANGUAGES (RUSSIAN)</span></li><li data-v-ce276a32><span data-v-ce276a32><a href="http://lcsl.nccu.edu.tw/" data-v-ce276a32><i class="fas fa-home" data-v-ce276a32></i> Home</a></span></li><li data-v-ce276a32><span data-v-ce276a32><a href="http://lcsl.nccu.edu.tw:3838/sample-apps/searchCorpus/Russian.Rmd#section-search" data-v-ce276a32><i class="fas fa-search" data-v-ce276a32></i> Search</a></span></li><li data-v-ce276a32><span data-v-ce276a32><a href="http://lcsl.nccu.edu.tw:3838/sample-apps/searchCorpus/Russian.Rmd#section-advanced-filter" data-v-ce276a32><i class="fas fa-filter" data-v-ce276a32></i> Advanced Filter</a></span></li><li data-v-ce276a32><span data-v-ce276a32><a href="http://lcsl.nccu.edu.tw:8080/search/" data-v-ce276a32><i class="fab fa-searchengin" data-v-ce276a32></i> Lexical/Grammatical Search</a></span></li><li data-v-ce276a32><span data-v-ce276a32><a href="" data-v-ce276a32><i class="fab error-anno" data-v-ce276a32></i> Error Annotation</a></span></li></nav></div></header>',1),v={class:"main-content"},m={id:"toolbar"},g={id:"label_show"},_=h((function(){return(0,s._)("img",{src:a,class:"pic"},null,-1)})),w=[_],x=h((function(){return(0,s._)("img",{src:c,class:"pic"},null,-1)})),b=[x],y=h((function(){return(0,s._)("img",{src:l,class:"pic"},null,-1)})),C=[y],E=h((function(){return(0,s._)("img",{src:u,class:"pic"},null,-1)})),k=[E],S=h((function(){return(0,s._)("img",{src:d,class:"pic"},null,-1)})),R=[S],T={id:"selectArea"},P={key:0},L=["innerHTML"],D={key:1,class:"errordetails"},O={class:"card flex justify-content-center"},I=h((function(){return(0,s._)("i",{class:"material-icons",style:{color:"white"}},"check",-1)})),A=[I],V={class:"popup-content"},z=h((function(){return(0,s._)("h3",null,"Revised Content",-1)})),Z=["innerHTML"],F={class:"popbutton-container"},B={class:"button-container"},M={class:"error-header"},j=h((function(){return(0,s._)("p",null,"Errors  ",-1)})),U={class:"errorcounts"},H={class:"errorlist",id:"el",ref:"errorList"},N={class:"errorname"},G={key:0},W={class:"errorcontent"},Y={class:"originalword"},q={class:"fixedword"},$=["onClick"],K=h((function(){return(0,s._)("footer",{class:"bottomBar"},[(0,s._)("b",null,"NCCU LCSL © 2023.")],-1)}));function X(t,e,r,i,a,c){var l=this,u=(0,s.up)("CascadeSelect");return(0,s.wg)(),(0,s.iD)(s.HY,null,[p,(0,s._)("body",null,[f,(0,s._)("div",null,[(0,s._)("div",v,[(0,s._)("div",m,[(0,s._)("label",g,(0,o.zw)(a.doc_name),1),(0,s.wy)((0,s._)("textarea",{id:"label_input",rows:"1","onUpdate:modelValue":e[0]||(e[0]=function(t){return a.doc_name_input=t}),onkeydown:"if(event.keyCode == 13) return false;"},null,512),[[n.nr,a.doc_name_input]]),(0,s._)("button",{id:"searchButton",onClick:e[1]||(e[1]=function(t){return c.mySearchLabel()}),class:"topbutton"},w),(0,s._)("button",{id:"saveButton",onClick:e[2]||(e[2]=function(t){return c.openPopup()}),class:"topbutton"},b),1===a.editOrOK?((0,s.wg)(),(0,s.iD)("button",{key:0,onClick:e[3]||(e[3]=function(e){return t.transContent()}),class:"topbutton"},C)):(0,s.kq)("",!0),(0,s._)("button",{onClick:e[4]||(e[4]=function(t){return c.getRowData(0)}),class:"topbutton"},k),(0,s._)("button",{onClick:e[5]||(e[5]=function(t){return c.getRowData(1)}),class:"topbutton"},R)]),(0,s._)("div",T,[1===a.view?((0,s.wg)(),(0,s.iD)("label",{key:0,class:"content",id:"cont",onMouseup:e[6]||(e[6]=function(){return c.getSelection&&c.getSelection.apply(c,arguments)})},[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(a.splittedParagraph,(function(t,e){return(0,s.wg)(),(0,s.iD)("span",{key:e},[0===t[1]?((0,s.wg)(),(0,s.iD)("span",P,(0,o.zw)(t[0]),1)):((0,s.wg)(),(0,s.iD)("span",{key:1,class:"error_span",innerHTML:t[0]},null,8,L))])})),128))],32)):(0,s.kq)("",!0),1===a.view?((0,s.wg)(),(0,s.iD)("div",D,[(0,s._)("div",O,[(0,s.Wm)(u,{modelValue:a.selectedError,"onUpdate:modelValue":e[7]||(e[7]=function(t){return a.selectedError=t}),options:c.filteredErrorType,optionLabel:"displayLabel",optionGroupLabel:"label",optionGroupChildren:["items",""],placeholder:"Select an Error Type",style:{"min-width":"14rem"}},null,8,["modelValue","options"])]),(0,s.wy)((0,s._)("input",{placeholder:"corrected version","onUpdate:modelValue":e[8]||(e[8]=function(t){return a.fixedword=t}),class:"errorcorrectbox",ref:"fixedInput"},null,512),[[n.nr,a.fixedword]]),(0,s._)("button",{onClick:e[9]||(e[9]=function(t){return c.newError()}),class:"errorbutton"},A)])):(0,s.kq)("",!0),a.showPopup?((0,s.wg)(),(0,s.iD)("div",{key:2,class:"popup",onClick:e[12]||(e[12]=(0,n.iM)((function(t){return c.cancelPopup()}),["self"]))},[(0,s._)("div",V,[z,(0,s._)("p",{innerHTML:a.updatedText},null,8,Z),(0,s._)("div",F,[(0,s._)("button",{onClick:e[10]||(e[10]=function(t){return c.cancelPopup()})},"cancel"),(0,s._)("button",{onClick:e[11]||(e[11]=function(t){return c.saveContent()})},"confirm to save")])])])):(0,s.kq)("",!0),(0,s._)("div",B,[(0,s._)("button",{onClick:e[13]||(e[13]=function(t){return c.createErrorCSV()}),class:"export"},"Export Error List"),(0,s._)("button",{onClick:e[14]||(e[14]=function(t){c.exportCSV(l.csv_revision,"revision.csv","text/csv;charset=utf-8;")}),class:"export"},"Export Revisions")])])]),(0,s._)("div",M,[j,(0,s._)("label",U,(0,o.zw)(this.errors.length),1)]),(0,s._)("div",H,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(c.filteredErrors,(function(t,e){return(0,s.wg)(),(0,s.iD)("div",{class:"errorbox",key:e},[(0,s._)("span",{class:"errortype",style:(0,o.j5)({color:a.errordict[t.errorType]})},"●",4),(0,s.Uk)(),(0,s._)("span",N,[(0,s.Uk)((0,o.zw)(t.errorType)+" ",1),t.subErrorType?((0,s.wg)(),(0,s.iD)("span",G,"-")):(0,s.kq)("",!0),(0,s.Uk)(" "+(0,o.zw)(t.subErrorType),1)]),(0,s._)("p",W,[(0,s._)("span",Y,(0,o.zw)(t.oriContent),1),(0,s.Uk)(" -> "),(0,s._)("span",q,(0,o.zw)(t.revisedContent),1)]),(0,s._)("span",{class:"delete",onClick:function(t){return c.deleteError(e)}},"X",8,$)])})),128))],512)]),K])],64)}var J=r(124),Q=r(5082),tt=r(6347),et=r(6084),rt=r(8534),nt=(r(2772),r(9753),r(6699),r(2023),r(7658),r(561),r(3210),r(2707),r(7042),r(6647),r(3710),r(1539),r(9714),r(4916),r(7601),r(9720),r(9600),r(1249),r(5306),r(8757),r(8783),r(3948),r(285),r(1637),r(2564),r(7327),r(2222),r(3087)),st=r(2833),it=function(){function t(e,r,n,s,i,o,a,c,l){(0,nt.Z)(this,t),this.absolutePosition=e,this.oriContent=r,this.revisedContent=n,this.errorType=s,this.subErrorType=i,this.start=o,this.end=a,this.multipleErrorCount=c,this.isLast=l}return(0,st.Z)(t,[{key:"getAbsolutePosition",value:function(){return this.absolutePosition}},{key:"getOriginalContent",value:function(){return this.oriContent}},{key:"getRevisedContent",value:function(){return this.revisedContent}},{key:"getErrorType",value:function(){return this.errorType}}]),t}(),ot=r(6026),at=r.n(ot);const ct=r.p+"static/data/data_Russian.881b2e5d.csv",lt=r.p+"static/data/data_Czech.677235a4.csv";var ut=r(2661),dt="",ht={x1:0,x2:0,y1:0,y2:0},pt=new Range,ft={"Spelling Error":"#FE5F55","Syntax Error":"#59B3D9","Morphological Error":"#659157","Lexical Error":"#84569F","Pronunciation Error":"#EEC643","Punctuation Error":"#de177a","Stylistic Error":"#FAA00F","Logical Error":"#4F3824","Factual Error":"#2A4494"},vt={},mt=0,gt=0;function _t(t){return wt.apply(this,arguments)}function wt(){return wt=(0,rt.Z)((0,J.Z)().mark((function t(e){var r,n;return(0,J.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=new Promise((function(t,r){at().parse(e,{download:!0,header:!0,dynamicTyping:!0,complete:function(e){t(e)},error:function(t){r(t)}})})),t.next=3,r;case 3:return n=t.sent,t.abrupt("return",n.data);case 5:case"end":return t.stop()}}),t)}))),wt.apply(this,arguments)}function xt(){return bt.apply(this,arguments)}function bt(){return bt=(0,rt.Z)((0,J.Z)().mark((function t(){return(0,J.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.loadCSVfile(ct);case 2:return this.RusData=t.sent,this.RusID=this.RusData.map((function(t){return t.id})),t.next=6,this.loadCSVfile(lt);case 6:this.CzeData=t.sent,this.CzeID=this.CzeData.map((function(t){return t.id})),this.rawContent=this.RusData[0].text,this.doc_name=this.RusData[0].id,this.splitParagraphByErrors();case 11:case"end":return t.stop()}}),t,this)}))),bt.apply(this,arguments)}function yt(t){if(vt[this.doc_name]=this.errors,"R"===this.doc_name[0]){if(0===t){if(!(this.currentRowIndex>0))return;this.currentRowIndex--}else{if(!(this.currentRowIndex<this.RusData.length))return;this.currentRowIndex++}this.rawContent=this.RusData[this.currentRowIndex].text,this.doc_name=this.RusData[this.currentRowIndex].id,this.doc_name in vt?this.errors=vt[this.doc_name]:this.errors=[],this.splitParagraphByErrors()}else{if(0===t){if(!(this.currentRowIndex>0))return;this.currentRowIndex--}else{if(!(this.currentRowIndex<this.CzeData.length))return;this.currentRowIndex++}this.rawContent=this.CzeData[this.currentRowIndex].text,this.doc_name=this.CzeData[this.currentRowIndex].id,this.doc_name in vt?this.errors=vt[this.doc_name]:this.errors=[],this.splitParagraphByErrors()}}function Ct(){if("R"===this.doc_name_input[0]){if(-1===this.RusID.indexOf(this.doc_name_input))return alert("no such document"),void(this.doc_name_input="");vt[this.doc_name]=this.errors,this.doc_name=this.doc_name_input,this.doc_name in vt?this.errors=vt[this.doc_name]:this.errors=[],this.rawContent=this.RusData[this.RusID.indexOf(this.doc_name)].text,this.doc_name_input="",this.currentRowIndex=this.RusID.indexOf(this.doc_name),this.splitParagraphByErrors()}else{if("C"!==this.doc_name_input[0])return alert("no such document"),void(this.doc_name_input="");if(-1===this.CzeID.indexOf(this.doc_name_input))return alert("no such document"),void(this.doc_name_input="");vt[this.doc_name]=this.errors,this.doc_name=this.doc_name_input,this.doc_name in vt?this.errors=vt[this.doc_name]:this.errors=[],this.rawContent=this.CzeData[this.CzeID.indexOf(this.doc_name)].text,this.doc_name_input="",this.currentRowIndex=this.CzeID.indexOf(this.doc_name),this.splitParagraphByErrors()}}function Et(t,e){return e.group&&e.group.items&&Array.isArray(e.group.items)&&0===e.group.items.length?e.group.label.toLowerCase().includes(t.toLowerCase()):e.subname.toLowerCase().includes(t.toLowerCase())}function kt(){vt[this.doc_name]=this.errors,this.showPopup=!1,this.csv_revision.push([this.doc_name,this.rawContent,this.updatedTextforCSV])}function St(t){if(!0===this.errors[t].isLast){var e=t-1;while(e>=0){if(this.errors[e].start,this.errors[e].end===(this.errors[t].start,this.errors[t].end)){this.errors[e].isLast=!0;break}e-=1}}else{e=t+1;while(e<this.errors.length)this.errors[e].start,this.errors[e].end===(this.errors[t].start,this.errors[t].end)&&!1===this.errors[t].isLast&&(this.errors[e].multipleErrorCount-=1),e+=1}this.filteredErrors.splice(t,1),this.errors.splice(t,1),this.splitParagraphByErrors()}function Rt(){if(this.multipleErrorCount=1,""===this.selectedError||""===this.fixedword||""===this.selectedText)alert("missing value");else{for(var t in this.errors)gt===(this.errors[t].start,this.errors[t].end)&&(this.errors[t].isLast=!1,this.multipleErrorCount+=1);var e="",r="";if(this.selectedError){var n=this.selectedError.displayLabel.split("-");if(e=n[0].trim(),"No subcategories available"!=this.selectedError.subname){var s=this.selectedError.displayLabel.split("-");r=s[1].trim()}}var i=new it(ht,dt,this.fixedword,e,r,mt,gt,this.multipleErrorCount,!0);this.filteredErrors.push(i),this.errors.push(i),vt[this.doc_name]=this.errors,this.scrollToBottom(),this.menuX=ht.x1,this.menuY=ht.y1,this.isMenuVisible=!0,this.fixedword="",this.selectedError=null,this.selectSubError=null,this.splitParagraphByErrors()}}function Tt(){this.splittedParagraph=[[this.rawContent,0]]}function Pt(){var t=0;this.splittedParagraph=[];var e=this.errors.sort((function(t,e){return t.start-e.start})),r=0;while(r<e.length){var n=e[r].start,s=e[r].end;if(!1===e[r].isLast){var i=this.rawContent.slice(n,s);if(i='<span style="text-decoration: underline; text-decoration-thickness: 2px; text-underline-offset:4px; text-decoration-color: '+ft[e[r].errorType]+'">'+i+"</span>",n>t){var o=this.rawContent.slice(t,n);this.splittedParagraph.push([o,0])}while(!1===e[r+1].isLast)i='<span style="text-decoration: underline; text-decoration-thickness: 2px; text-underline-offset:'+4*e[r+1].multipleErrorCount+"px; text-decoration-color: "+ft[e[r+1].errorType]+'">'+i+"</span>",r+=1;i='<span style="text-decoration: underline; text-decoration-thickness: 2px; text-underline-offset:'+4*e[r+1].multipleErrorCount+"px; text-decoration-color: "+ft[e[r+1].errorType]+'">'+i+"</span>",this.splittedParagraph.push([i,1]),r+=1,t=s}else{if(n>t){var a=this.rawContent.slice(t,n);this.splittedParagraph.push([a,0])}i=this.rawContent.slice(n,s),i='<span style="text-decoration: underline; text-decoration-thickness: 2px; text-underline-offset:4px; text-decoration-color: '+ft[e[r].errorType]+'">'+i+"</span>",this.splittedParagraph.push([i,1]),t=s}r+=1}if(t<this.rawContent.length){var c=this.rawContent.slice(t);this.splittedParagraph.push([c,0])}return this.splittedParagraph}function Lt(){var t=this;this.$nextTick((function(){var e=t.$refs.errorList;e.scrollTop=e.scrollHeight}))}function Dt(){this.showPopup=!0,this.updatedText="",this.updatedTextforCSV="";var t=0,e=[];for(e in this.splittedParagraph)if(0===this.splittedParagraph[e][1])this.updatedText+=this.splittedParagraph[e][0]+" ",this.updatedTextforCSV+=this.splittedParagraph[e][0]+" ";else{while(!1===this.errors[t].isLast)t+=1;this.updatedText+='<span style="text-decoration: underline; text-decoration-thickness: 2px; text-underline-offset: 4px; line-height: 1.5em; text-decoration-color: '+ft[this.errors[t].errorType]+'">'+this.errors[t].revisedContent+"</span>",this.updatedTextforCSV+=this.errors[t].revisedContent,t+=1}}function Ot(){var t=this;this.$nextTick((function(){t.$refs.fixedInput.focus()}))}function It(){this.showPopup=!1}function At(t){while(t.startOffset>0&&Vt(t.toString()[0])&&!zt(t.toString()[0]))t.setStart(t.startContainer,t.startOffset-1);while(t.startOffset>0&&(" "===t.toString()[0]||zt(t.toString()[0])))t.setStart(t.startContainer,t.startOffset+1);while(t.endOffset<t.endContainer.length&&Vt(t.toString()[t.toString().length-1])&&!zt(t.toString()[t.toString().length-1]))t.setEnd(t.endContainer,t.endOffset+1);while(t.endOffset>0&&(" "===t.toString()[t.toString().length-1]||zt(t.toString()[t.toString().length-1])))t.setEnd(t.endContainer,t.endOffset-1);return t}function Vt(t){return/[a-zA-Z0-9_а-яА-ЯěščřžýáíéĚŠČŘŽÝÁÍÉ]/.test(t)}function zt(t){return/[.,/#!$%^&*;:{}=_`~()-]/g.test(t)}function Zt(){this.removeAllError();var t=window.getSelection();pt=new Range,pt=t.getRangeAt(0);var e=pt.getClientRects();if(!e.length)return null;var r=e[0],n=e[e.length-1];ht={x1:r.left,y1:r.top,x2:n.right,y2:n.bottom},At(pt),mt=pt.startOffset,gt=pt.endOffset,dt=t.toString()}function Ft(){for(var t=0,e=Object.entries(vt);t<e.length;t++){var r,n=(0,et.Z)(e[t],2),s=n[0],i=n[1],o=(0,tt.Z)(i);try{for(o.s();!(r=o.n()).done;){var a=r.value;this.csv_error.push([s,a.errorType,a.subErrorType,a.oriContent,a.revisedContent,a.isLast])}}catch(c){o.e(c)}finally{o.f()}}Mt(this.csv_error,"error.csv","text/csv;charset=utf-8;"),this.csv_error=[["id","error_type","error_subtype","error_original","error_fixed","is_last"]]}function Bt(t){return t.map((function(t){return t.map(String).map((function(t){return t.replaceAll('"','""')})).map((function(t){return'"'.concat(t,'"')})).join(",")})).join("\r\n")}function Mt(t,e,r){var n=Bt(t),s=new Blob([n],{type:r}),i=URL.createObjectURL(s),o=document.createElement("a");o.href=i,o.setAttribute("download",e),o.click()}const jt={name:"HelloWorld",props:{msg:String},components:{CascadeSelect:ut.Z},data:function(){return{rawContent:"",view:1,editOrOK:0,isOri:!1,tempContent:"",selectedError:null,selectSubError:null,errorType:[{label:"Spelling Error",code:"SP",items:[]},{label:"Syntax Error",code:"SY",items:[{subname:"Tense"},{subname:"Aspect"},{subname:"Mode"},{subname:"Case"},{subname:"Word Order"},{subname:"Passive"},{subname:"Reflexive"},{subname:"Others"}]},{label:"Morphological Error",code:"ME",items:[{subname:"Gender"},{subname:"Number"},{subname:"Inflection"},{subname:"Others"}]},{label:"Lexical Error",code:"LE",items:[]},{label:"Pronunciation Error",code:"PR",items:[]},{label:"Punctuation Error",code:"PE",items:[]},{label:"Stylistic Error",code:"ST",items:[]},{label:"Logical Error",code:"LG",items:[]},{label:"Factual Error",code:"FE",items:[]}],multipleErrorCount:1,isSubMenuVisible:!1,menuX:0,menuY:0,isMenuVisible:!1,fixedword:"",errors:[],errordict:{"Spelling Error":"#FE5F55","Syntax Error":"#59B3D9","Morphological Error":"#659157","Lexical Error":"#84569F","Pronunciation Error":"#EEC643","Punctuation Error":"#de177a","Stylistic Error":"#FAA00F","Logical Error":"#4F3824","Factual Error":"#2A4494"},RusData:[],CzeData:[],RusID:[],CzeID:[],doc_name:"",doc_name_input:"",currentRowIndex:0,csv_error:[["id","error_type","error_subtype","error_original","error_fixed","is_last"]],updatedText:"",updatedTextforCSV:"",showPopup:!1,csv_revision:[["id","original_content","revised_content"]],splittedParagraph:[]}},watch:{selectedError:function(t){var e=this;t&&setTimeout((function(){e.$refs.fixedInput.focus()}),100)}},mounted:function(){this.preprocessText()},computed:{filteredErrors:function(){return this.errors.filter((function(t){return!t.deleted}))},filteredErrorType:function(){return this.errorType.map((function(t){return 0===t.items.length?(0,Q.Z)((0,Q.Z)({},t),{},{items:[{subname:"No subcategories available",displayLabel:t.label}]}):(0,Q.Z)((0,Q.Z)({},t),{},{items:t.items.map((function(e){return(0,Q.Z)((0,Q.Z)({},e),{},{displayLabel:"".concat(t.label," - ").concat(e.subname)})}))})}))}},methods:{saveContent:kt,getSelection:Zt,newError:Rt,splitParagraphByErrors:Pt,expandRangeToWordBoundaries:At,loadCSVfile:_t,preprocessText:xt,mySearchLabel:Ct,getRowData:yt,createErrorCSV:Ft,exportCSV:Mt,arrayToCsv:Bt,openPopup:Dt,cancelPopup:It,focusInput:Ot,deleteError:St,scrollToBottom:Lt,removeAllError:Tt,filterCallback:Et}};var Ut=r(89);const Ht=(0,Ut.Z)(jt,[["render",X],["__scopeId","data-v-ce276a32"]]),Nt=Ht,Gt={name:"App",components:{HelloWorld:Nt}},Wt=(0,Ut.Z)(Gt,[["render",i]]),Yt=Wt;var qt=r(3852);(0,n.ri)(Yt).use(qt.ZP).mount("#app")}},e={};function r(n){var s=e[n];if(void 0!==s)return s.exports;var i=e[n]={exports:{}};return t[n].call(i.exports,i,i.exports,r),i.exports}r.m=t,(()=>{var t=[];r.O=(e,n,s,i)=>{if(!n){var o=1/0;for(u=0;u<t.length;u++){for(var[n,s,i]=t[u],a=!0,c=0;c<n.length;c++)(!1&i||o>=i)&&Object.keys(r.O).every((t=>r.O[t](n[c])))?n.splice(c--,1):(a=!1,i<o&&(o=i));if(a){t.splice(u--,1);var l=s();void 0!==l&&(e=l)}}return e}i=i||0;for(var u=t.length;u>0&&t[u-1][2]>i;u--)t[u]=t[u-1];t[u]=[n,s,i]}})(),(()=>{r.n=t=>{var e=t&&t.__esModule?()=>t["default"]:()=>t;return r.d(e,{a:e}),e}})(),(()=>{r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}})(),(()=>{r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()})(),(()=>{r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e)})(),(()=>{r.p="/slavic-error-annotation/"})(),(()=>{var t={143:0};r.O.j=e=>0===t[e];var e=(e,n)=>{var s,i,[o,a,c]=n,l=0;if(o.some((e=>0!==t[e]))){for(s in a)r.o(a,s)&&(r.m[s]=a[s]);if(c)var u=c(r)}for(e&&e(n);l<o.length;l++)i=o[l],r.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return r.O(u)},n=self["webpackChunkslavic_error_annotation"]=self["webpackChunkslavic_error_annotation"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))})();var n=r.O(void 0,[998],(()=>r(6663)));n=r.O(n)})();
//# sourceMappingURL=app.89ec5b6d.js.map