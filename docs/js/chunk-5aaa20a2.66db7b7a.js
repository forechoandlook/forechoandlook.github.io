(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5aaa20a2"],{"18c8":function(e,t,n){"use strict";var i=n("f25f"),a=n.n(i);a.a},"1d42":function(e,t,n){},"1efc":function(e,t,n){"use strict";var i=n("b1fe"),a=n.n(i);a.a},"25a9":function(e,t,n){"use strict";n.r(t),n.d(t,"professor",(function(){return i})),n.d(t,"team",(function(){return a})),n.d(t,"feature",(function(){return s})),n.d(t,"bannerdata",(function(){return r}));var i=[{name:"Jiliang Tang",desc:"Foundation Professor-Michigan State University",img:"Jiliang_Tang.png",link:"https://www.cse.msu.edu/~tangjili/"},{name:"Yuying Xie",desc:"Associate Professor-Michigan State University",img:"Yuying_Xie.png",link:"https://cmse.msu.edu/directory/faculty/yuying-xie/"},{name:"Yu Leo Lei",desc:"Associate Professor-University of Michigan",img:"Yu_Leo_Lei.png",link:"https://www.dent.umich.edu/directory/leiyuleo"},{name:"Jinfei Ni",desc:"Assistant Professor-Fudan University",img:"Jinfei_Ni.png",link:"http://itbr.fudan.edu.cn/info/1379/2322.html"}],a=[{name:"Jiayuan Ding",desc:"Michigan State University",img:"Jiayuan_Ding.png",link:"https://jiayuanding100.github.io/Jiayuan_Ding/"},{name:"Wei Jin",desc:"Michigan State University",img:"Wei_Jin.png",link:"http://cse.msu.edu/~jinwei2/"},{name:"Hongzhi Wen",desc:"Michigan State University",img:"Hongzhi_Wen.png",link:"https://www.cse.msu.edu/~wenhongz/"},{name:"Remy Liu",desc:"Michigan State University",img:"Remy_Liu.png",link:"https://github.com/RemyLau"},{name:"Yixin Wang",desc:"Stanford University",img:"Yixin_Wang.png",link:"https://www.yyixinwang.com/"},{name:"Wenzhuo Tang",desc:"Michigan State University",img:"Wenzhuo_Tang.png",link:"https://stt.natsci.msu.edu/directory/tas-doctoral/wenzhou-tang/"},{name:"Dylan Molho",desc:"Michigan State University",img:"Dylan_Molho.png",link:"/"},{name:"Julian Venegas",desc:"Michigan State University",img:"Julian_Venegas.png",link:"https://impacts.natsci.msu.edu/trainees/julian-venegas/"},{name:"Runze Su",desc:"Michigan State University",img:"Runze_Su.png",link:"https://cmse.msu.edu/directory/graduate-students/runze-su/"},{name:"Zhaoheng Li",desc:"University of Washington",img:"Zhaoheng_Li.png",link:"https://www.linkedin.com/in/zhaoheng-li-771470204/"},{name:"Wangyang Zuo",desc:"Zhejiang University of Technology",img:"Wangyang_Zuo.png",link:"https://github.com/forechoandlook"},{name:"Arash Yunesi",desc:"Michigan State University",img:"Arash_Yunesi.png",link:"https://pa.msu.edu/profile/bahramian/"}],s=[{id:1,title:["Clustering","Imputation","Cell type Annotation"],img:"1.png",desc:"Single-modality Analysis"},{id:2,title:["Multimodality Prediction","Multimodality Matching","Joint Embedding"],img:"2.png",desc:"Single-cell Multimodal Omics"},{id:3,title:["Spatial domain","Cell type deconvolution"],img:"3.png",desc:"Spatially Resolved Transcriptomics"}],r=[{num:3,production:"Modules",desc:"Single-modality Analysis, Single-cell Multimodal Omics, Spatially Resolved Transcriptomics"},{num:8,production:"Tasks",desc:"Clustering, Imputation, Cell type Annotation, Multimodality Prediction, Multimodality Matching, Joint Embedding, Spatial domain, Cell type deconvolut"},{num:32,production:"Models",desc:"Including open-source, edge in SDK, and MLOps platform"},{num:"21+",production:"Dataset",desc:"Including open-source, edge in SDK, and MLOps platform"}]},"433a":function(e,t,n){e.exports=n.p+"img/2.9f3a8e6f.png"},"61ff":function(e,t,n){"use strict";var i=n("b349"),a=n.n(i);a.a},"70db":function(e,t,n){e.exports=n.p+"img/framework.0685939c.png"},"745f":function(e,t,n){var i={"./1.png":"b115","./2.png":"433a","./3.png":"dcd6"};function a(e){var t=s(e);return n(t)}function s(e){if(!n.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}a.keys=function(){return Object.keys(i)},a.resolve=s,e.exports=a,a.id="745f"},9877:function(e,t,n){"use strict";var i=n("fe26"),a=n.n(i);a.a},b115:function(e,t,n){e.exports=n.p+"img/1.a6c893a1.png"},b1fe:function(e,t,n){},b349:function(e,t,n){},bb51:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("banner",{attrs:{isHome:"true"}}),n("bannerCount"),n("div",{staticClass:"site-content animate"},[n("div",{staticClass:"top-feature"},[n("section-title",[n("div",{staticStyle:{display:"flex"}},[e._v("Features")])]),n("div",{staticClass:"feature-content"},e._l(e.features,(function(e){return n("div",{key:e.title[0],staticClass:"feature-item"},[n("Feature",{attrs:{data:e}})],1)})),0)],1)])],1)},a=[],s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{class:{"home-banner":e.isHome},attrs:{id:"banner"}},[i("div",{staticClass:"banner-img",staticStyle:{display:"flex","flex-wrap":"wrap","justify-content":"space-between"}},[e._m(0),i("div",{staticClass:"frameimg"},[i("img",{attrs:{src:n("70db"),width:"700px"}})])])])},r=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"desc"},[n("div",{staticClass:"focusinfo"},[n("p",[n("span",{staticClass:"attention"},[e._v("DANCE")]),e._v(" is a PyTorch-based deep learning toolbox designed for single cell analysis. It has two functions. It firstly can help developers develop their own deep learning models more easily and efficiently for analyzing single-cell data at scale. What's more, it acts as a benchmark platform to reproduce different computational models for tasks in single cell analysis.")]),n("p",[e._v("It includes three modules at present:")]),n("ul",[n("li",[e._v("1. Single-modality analysis")]),n("li",[e._v("2. Single-cell multimodal omics")]),n("li",[e._v("3. Spatially resolved transcriptomics")])]),n("p",[e._v("Several tasks are defined under each module. For each task, several models are supported across different datasets.")]),n("p",[e._v("Our goal is to build up a deep learning community for single cell analysis and provide GNN based architecture for users for further development in single cell analysis.")])]),n("div",{staticClass:"header-info"},[n("p",[e._v("$ pip install dance")])])])}],c={name:"banner",data:function(){return{websiteInfo:{},socials:[]}},props:{isHome:{type:[Boolean,String],default:!1}}},o=c,l=(n("9877"),n("2877")),u=Object(l["a"])(o,s,r,!1,null,"17cfec62",null),d=u.exports,p=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"feature"},[i("div",{staticClass:"feature-title"},[i("div",{staticClass:"feature-content"},e._l(e.data.title,(function(t,n){return i("p",{key:t+n,staticClass:"foverlay"},[e._v(e._s("Task "+(n+1).toString()+": "+t[0].toUpperCase()+t.substr(1)))])})),0)]),i("img",{attrs:{src:n("745f")("./"+e.data.img)}}),i("div",{staticClass:"content"},[e._v(e._s(e.data.desc[0].toUpperCase()+e.data.desc.slice(1))+" ")])])},g=[],m={name:"feature",props:{data:{type:Object,default:function(){return{title:["Akina"],img:"https://cdn.zhebk.cn/usr/themes/Akina//images/feature/feature1.jpg",href:"https://zhebk.cn/Web/Akina.html",desc:""}}}}},f=m,h=(n("1efc"),Object(l["a"])(f,p,g,!1,null,"0b3c6b40",null)),v=h.exports,y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"banner"},e._l(e.data,(function(t,i){return n("div",{key:i,staticClass:"count"},[n("div",{staticClass:"number"},[n("p",[e._v(e._s(t.num))])]),n("div",{staticClass:"production"},[n("p",[e._v(e._s(t.production))])]),n("div",{staticClass:"desc"},[n("p",[e._v(e._s(t.desc))])])])})),0)},_=[],b=n("25a9"),k=b.bannerdata,w={name:"banner-count",data:function(){return{data:k}}},C=w,S=(n("18c8"),Object(l["a"])(C,y,_,!1,null,null,null)),M=S.exports,x=n("fdba"),U=n("25a9"),J=U.feature,O={name:"Home",props:["cate","words"],data:function(){return{features:J,postList:[],currPage:1,hasNextPage:!1}},components:{Banner:d,Feature:v,sectionTitle:x["a"],bannerCount:M}},j=O,z=(n("d4c6"),Object(l["a"])(j,i,a,!1,null,"32a17d5f",null));t["default"]=z.exports},d4c6:function(e,t,n){"use strict";var i=n("1d42"),a=n.n(i);a.a},dcd6:function(e,t,n){e.exports=n.p+"img/3.027c1b91.png"},f25f:function(e,t,n){},fdba:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h1",{staticClass:"section-title"},[e._t("default")],2)},a=[],s={name:"section-title"},r=s,c=(n("61ff"),n("2877")),o=Object(c["a"])(r,i,a,!1,null,"0e704d10",null);t["a"]=o.exports},fe26:function(e,t,n){}}]);
//# sourceMappingURL=chunk-5aaa20a2.66db7b7a.js.map