(function(t){function e(e){for(var a,o,c=e[0],r=e[1],l=e[2],u=0,d=[];u<c.length;u++)o=c[u],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&d.push(n[o][0]),n[o]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a]);h&&h(e);while(d.length)d.shift()();return s.push.apply(s,l||[]),i()}function i(){for(var t,e=0;e<s.length;e++){for(var i=s[e],a=!0,c=1;c<i.length;c++){var r=i[c];0!==n[r]&&(a=!1)}a&&(s.splice(e--,1),t=o(o.s=i[0]))}return t}var a={},n={app:0},s=[];function o(e){if(a[e])return a[e].exports;var i=a[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=t,o.c=a,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(i,a,function(e){return t[e]}.bind(null,a));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],r=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var h=r;s.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"0e0a":function(t,e,i){"use strict";i("fcb3")},"182d":function(t,e,i){},"196c":function(t,e,i){},"266f":function(t,e,i){"use strict";i("8fd7")},2736:function(t,e,i){"use strict";i("92e7")},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var a=i("7a23"),n=(i("b0c0"),{class:"fixed-menu-wrap"}),s={class:"container"};function o(t,e,i,o,c,r){var l=Object(a["p"])("Home"),h=Object(a["p"])("About"),u=Object(a["p"])("Project"),d=Object(a["q"])("scroll-to");return Object(a["k"])(),Object(a["c"])(a["a"],null,[Object(a["d"])("div",{class:Object(a["i"])(["stickyMenu",[{"MenuTrans-in":this.$store.state.transFlag},{"MenuTrans-out":this.$store.state.displayFlag}]])},[Object(a["d"])("ul",n,[(Object(a["k"])(!0),Object(a["c"])(a["a"],null,Object(a["o"])(this.$store.state.menu,(function(t){return Object(a["k"])(),Object(a["c"])("li",{key:t},[Object(a["t"])((Object(a["k"])(),Object(a["c"])("button",{class:Object(a["i"])({"toggle-in":t.flag})},[Object(a["f"])(Object(a["r"])(t.name),1)],2)),[[d,"#".concat(t.name)]])])})),128))])],2),Object(a["d"])("div",s,[Object(a["d"])("div",null,[Object(a["g"])(l,{id:"Home"}),Object(a["g"])(h),Object(a["g"])(u)])])],64)}var c=i("5530"),r=function(t){return Object(a["m"])("data-v-7e48be13"),t=t(),Object(a["l"])(),t},l={class:"topContainer"},h={class:"side-bar"},u=r((function(){return Object(a["d"])("div",{class:"profile-wrap"},[Object(a["d"])("div",{class:"profile-Img"})],-1)})),d={class:"menu-wrap"},b={class:"view"};function g(t,e,i,n,s,o){var c=this,r=Object(a["p"])("Sheep"),g=Object(a["q"])("scroll-to");return Object(a["k"])(),Object(a["c"])("div",l,[Object(a["d"])("div",h,[u,Object(a["d"])("div",d,[Object(a["d"])("ul",null,[(Object(a["k"])(!0),Object(a["c"])(a["a"],null,Object(a["o"])(this.$store.state.menu,(function(t){return Object(a["k"])(),Object(a["c"])("li",{key:t,class:Object(a["i"])([{"li-out":c.$store.state.transFlag},{"li-in":c.$store.state.displayFlag}])},[Object(a["t"])((Object(a["k"])(),Object(a["c"])("button",{class:Object(a["i"])({"home-toggle-in":t.flag})},[Object(a["f"])(Object(a["r"])(t.name),1)],2)),[[g,"#".concat(t.name)]])],2)})),128))])])]),Object(a["d"])("div",b,[Object(a["g"])(r)])])}var p=i("5502"),f=function(t){return Object(a["m"])("data-v-2119ed80"),t=t(),Object(a["l"])(),t},v={id:"sheep-container",class:"sheep-container"},m=f((function(){return Object(a["d"])("span",null,"안녕하세요",-1)})),j=f((function(){return Object(a["d"])("br",null,null,-1)})),O=f((function(){return Object(a["d"])("span",{id:"hello"},"반갑습니다!",-1)})),y=[m,j,O];function w(t,e,i,n,s,o){return Object(a["k"])(),Object(a["c"])("div",v,y)}var k=i("d4ec"),x=i("bee2"),M=(i("a434"),i("cb29"),function(){function t(e,i,a){Object(k["a"])(this,t),this.color=e,this.speed=i,this.total=a}return Object(x["a"])(t,[{key:"resize",value:function(t,e){this.stageWidth=t,this.stageHeight=e,this.points=[],this.gap=Math.ceil(this.stageWidth/(this.total-2));for(var i=0;i<this.total;i++)this.points[i]={x:i*this.gap,y:this.getY()}}},{key:"draw",value:function(t){t.fillStyle=this.color,t.beginPath();var e=this.points[0],i=e,a=[];e.x+=this.speed,e.x>-this.gap?this.points.unshift({x:-2*this.gap,y:this.getY()}):e.x>this.stageWidth+this.gap&&this.points.splice(-1),t.moveTo(e.x,e.y);for(var n=e.x,s=e.y,o=1;o<this.points.length;o++){e=this.points[o],e.x+=this.speed;var c=(i.x+e.x)/2,r=(i.y+e.y)/2;t.quadraticCurveTo(i.x,i.y,c,r),a.push({x1:n,y1:s,x2:i.x,y2:i.y,x3:c,y3:r}),i=e,n=c,s=r}return t.lineTo(i.x,i.y),t.lineTo(this.stageWidth,this.stageHeight),t.lineTo(this.points[0].x,this.stageHeight),t.fill(),a}},{key:"getY",value:function(){var t=this.stageHeight/8,e=this.stageHeight-t;return t+Math.random()*e}}]),t}()),S=function(){function t(e,i){Object(k["a"])(this,t),this.img=e,this.totalFrame=8,this.curFrame=0,this.imgWidth=360,this.imgHeight=300,this.sheepWidth=180,this.sheepHeight=150,this.sheepWidthHalf=this.sheepWidth/2,this.x=i+this.sheepWidth,this.y=0,this.speed=2*Math.random()+1,this.fps=24,this.fpsTime=1e3/this.fps}return Object(x["a"])(t,[{key:"draw",value:function(t,e,i){this.time||(this.time=e);var a=e-this.time;a>this.fpsTime&&(this.time=e,this.curFrame+=1,this.curFrame==this.totalFrame&&(this.curFrame=0)),this.animate(t,i)}},{key:"animate",value:function(t,e){this.x-=this.speed;var i=this.getY(this.x,e);this.y=i.y,t.save(),t.translate(this.x,this.y),t.fillStyle="#000000",t.rotate(i.rotation),t.drawImage(this.img,this.imgWidth*this.curFrame,0,this.imgWidth,this.imgHeight,-this.sheepWidthHalf,20-this.sheepHeight,this.sheepWidth,this.sheepHeight),t.restore()}},{key:"getY",value:function(t,e){for(var i=1;i<e.length;i++)if(t>=e[i].x1&&t<=e[i].x3)return this.getY2(t,e[i]);return{y:0,rotation:0}}},{key:"getY2",value:function(t,e){for(var i=200,a=this.getPointOnQuad(e.x1,e.y1,e.x2,e.y2,e.x3,e.y3,0),n=a.x,s=1;s<i;s++){var o=s/i;if(a=this.getPointOnQuad(e.x1,e.y1,e.x2,e.y2,e.x3,e.y3,o),t>=n&&t<=a.x)return a;n=a.x}return a}},{key:"getQuadValue",value:function(t,e,i,a){return(1-a)*(1-a)*t+2*(1-a)*a*e+a*a*i}},{key:"getPointOnQuad",value:function(t,e,i,a,n,s,o){var c=this.quadTangent(t,i,n,o),r=this.quadTangent(e,a,s,o),l=-Math.atan2(c,r)+90*Math.PI/180;return{x:this.getQuadValue(t,i,n,o),y:this.getQuadValue(e,a,s,o),rotation:l}}},{key:"quadTangent",value:function(t,e,i,a){return 2*(1-a)*(e-t)+2*(i-e)*a}}]),t}(),P=function(){function t(){var e=this;Object(k["a"])(this,t),this.img=new Image,this.img.onload=function(){e.loaded()},this.img.src="juwon_sheep.png",this.items=[],this.cur=0,this.isLoaded=!1}return Object(x["a"])(t,[{key:"resize",value:function(t,e){this.stageWidth=t,this.stageHeight=e}},{key:"loaded",value:function(){this.isLoaded=!0,this.addSheep()}},{key:"addSheep",value:function(){this.items.push(new S(this.img,this.stageWidth))}},{key:"draw",value:function(t,e,i){if(this.isLoaded){this.cur+=1,this.cur>200&&(this.cur=0,this.addSheep());for(var a=this.items.length-1;a>=0;a--){var n=this.items[a];n.x<-n.width?this.items.splice(a,1):n.draw(t,e,i)}}}}]),t}(),C=function(){function t(){Object(k["a"])(this,t),this.radius=200,this.total=30,this.gap=1/this.total,this.originPos=[],this.pos=[];for(var e=0;e<this.total;e++){var i=this.getCirclePoint(this.radius,this.gap*e);this.originPos[e]=i,this.pos[e]=i}this.fps=30,this.fpsTime=1e3/this.fps}return Object(x["a"])(t,[{key:"resize",value:function(t,e){this.stageWidth=t,this.stageHeight=e,this.x=this.stageWidth-this.radius-140,this.y=this.radius+150}},{key:"draw",value:function(t,e){this.time||(this.time=e);var i=e-this.time;i>this.fpsTime&&(this.time=e,this.updatePoints()),t.fillStyle="#ffb200",t.beginPath();var a=this.pos[0];t.moveTo(a.x+this.x,a.y+this.y);for(var n=1;n<this.total;n++){var s=this.pos[n];t.lineTo(s.x+this.x,s.y+this.y)}t.fill()}},{key:"updatePoints",value:function(){for(var t=1;t<this.total;t++){var e=this.originPos[t];this.pos[t]={x:e.x+this.ranInt(5),y:e.y+this.ranInt(5)}}}},{key:"ranInt",value:function(t){return Math.random()*t}},{key:"getCirclePoint",value:function(t,e){var i=2*Math.PI*e;return{x:Math.cos(i)*t,y:Math.sin(i)*t}}}]),t}(),T=function(){function t(){Object(k["a"])(this,t),this.canvas=document.createElement("canvas"),this.ctx=this.canvas.getContext("2d"),this.canvas.style.width="100%",this.canvas.style.height="99%";var e=document.getElementById("sheep-container");e.appendChild(this.canvas),this.sun=new C,this.hills=[new M("#ff6347",1.5,13),new M("#ff59c2",2.3,10),new M("#ff4674",3,7)],this.SheepController=new P("juwon_sheep.png"),e.addEventListener("resize",this.resize.bind(this),!1),this.resize(),requestAnimationFrame(this.animate.bind(this))}return Object(x["a"])(t,[{key:"resize",value:function(){this.stageWidth=document.getElementById("sheep-container").clientWidth,this.stageHeight=document.getElementById("sheep-container").clientHeight,this.canvas.width=2*this.stageWidth,this.canvas.height=2*this.stageHeight,this.ctx.scale(2,2),this.sun.resize(this.stageWidth,this.stageHeight);for(var t=0;t<this.hills.length;t++)this.hills[t].resize(this.stageWidth,this.stageHeight);this.SheepController.resize(this.stageWidth,this.stageHeight)}},{key:"animate",value:function(t){var e;requestAnimationFrame(this.animate.bind(this)),this.ctx.clearRect(0,0,this.stageWidth,this.stageHeight),this.sun.draw(this.ctx,t);for(var i=0;i<this.hills.length;i++)e=this.hills[i].draw(this.ctx);this.SheepController.draw(this.ctx,t,e)}}]),t}();window.onload=function(){new T};var F={components:{},computed:Object(c["a"])({},Object(p["c"])({skillImg:function(t){return t.skillImg}}))},H=(i("e340"),i("6b0d")),I=i.n(H);const W=I()(F,[["render",w],["__scopeId","data-v-2119ed80"]]);var _=W,J={components:{Sheep:_},methods:Object(c["a"])(Object(c["a"])({},Object(p["b"])({changeView:"changeView"})),{},{sendEle:function(t){this.changeView(t)}})};i("2736");const B=I()(J,[["render",g],["__scopeId","data-v-7e48be13"]]);var E=B,A={class:"about-container"},Y=Object(a["e"])('<div id="About" class="about-me" data-v-70a221b0><div class="description" data-v-70a221b0><span data-v-70a221b0>함께 달리고 싶은 열정, 윤주원입니다.</span><ul class="description-ul" data-v-70a221b0><li data-v-70a221b0>안녕하세요! 신입 개발자 윤주원입니다.</li><li data-v-70a221b0>C언어를 배우고 대덕인재개발원을 수료하며<br data-v-70a221b0><br data-v-70a221b0> 개발자의 꿈을 가진, 지금은 개발에 푹 빠져 있습니다.</li><li data-v-70a221b0>무엇보다 꾸준함의 가치를 알기에 <br data-v-70a221b0><br data-v-70a221b0>1일 1커밋 운동과 기술 블로그 운영을 하고 있습니다.</li><li data-v-70a221b0>체력 증진 목적의 운동도 꾸준히 하고 있습니다.</li><li data-v-70a221b0>Clean Code와 학습에 대한 고민을 생활화합니다.</li><li data-v-70a221b0>운동과 커피, 그리고 협동 프로젝트에 관심이 많습니다.</li></ul><span class="description-list" data-v-70a221b0> Contact </span><ul class="description-ul" data-v-70a221b0><li data-v-70a221b0>Email | eooll4@naver.com</li><hr data-v-70a221b0><li data-v-70a221b0>Github | <a href="https://github.com/Juwon-Yun" target="_blank" data-v-70a221b0>https://github.com/Juwon-Yun</a></li><br data-v-70a221b0><li data-v-70a221b0>Blog | <a href="https://juwon-yun.tistory.com/" target="_blank" data-v-70a221b0>https://juwon-yun.tistory.com/</a></li><br data-v-70a221b0><li data-v-70a221b0>Kanboo PMS | <a href="http://kanboo.site/" target="_blank" data-v-70a221b0>http://kanboo.site/</a></li><hr data-v-70a221b0></ul></div><div class="my-skills" data-v-70a221b0><span class="description-list" data-v-70a221b0>Skills</span><ul class="description-ul" data-v-70a221b0><li data-v-70a221b0>Language | Java, JavaScript, HTML, CSS</li><li data-v-70a221b0>FrontEnd | Vue.Js, JQuery, Socket.io</li><li data-v-70a221b0>BackEnd | Spring(Boot), JPA, MyBatis, IBatis, Node.Js</li></ul></div></div>',1),V=[Y];function q(t,e,i,n,s,o){return Object(a["k"])(),Object(a["c"])("div",A,V)}var z={computed:Object(c["a"])({},Object(p["c"])({skills:function(t){return t.skills}}))};i("0e0a");const L=I()(z,[["render",q],["__scopeId","data-v-70a221b0"]]);var G=L,Q={class:"project-container"},$={id:"Projects",class:"projects"},D=["onClick","onMouseover","onMouseout"],R={class:"project-wrap"},K={class:"title-category-wrap"},N={class:"project-title"},U={class:"project-category"},X={class:"project-wrap-ul"};function Z(t,e,i,n,s,o){return Object(a["k"])(),Object(a["c"])("div",Q,[Object(a["d"])("div",$,[Object(a["d"])("ul",null,[(Object(a["k"])(!0),Object(a["c"])(a["a"],null,Object(a["o"])(t.projects,(function(e,i){return Object(a["k"])(),Object(a["c"])("li",{key:i,onClick:function(e){return t.moveToGithub(i)},onMouseover:function(e){return t.setClass(i)},onMouseout:function(e){return t.removeClass(i)}},[Object(a["d"])("div",R,[Object(a["d"])("div",K,[Object(a["d"])("span",N,Object(a["r"])(e.name),1),Object(a["d"])("span",U,Object(a["r"])(e.category),1)]),Object(a["d"])("div",{class:"project-img",style:Object(a["j"])({backgroundImage:e.img})},null,4),Object(a["d"])("ul",X,[(Object(a["k"])(!0),Object(a["c"])(a["a"],null,Object(a["o"])(e.usedSkill,(function(t){return Object(a["k"])(),Object(a["c"])("li",{class:"project-wrap-skill",key:t},Object(a["r"])(t),1)})),128))])])],40,D)})),128))])])])}var tt={computed:Object(c["a"])({},Object(p["c"])({projects:function(t){return t.projects},projectInFlag:function(t){return t.projectInFlag}})),methods:Object(c["a"])({},Object(p["b"])({setClass:"setClass",removeClass:"removeClass",moveToGithub:"moveToGithub"}))};i("266f");const et=I()(tt,[["render",Z],["__scopeId","data-v-c1bdc6e0"]]);var it=et,at={name:"App",components:{Home:E,About:G,Project:it},data:function(){return{lastScrollPosition:0,scrollValue:0}},mounted:function(){this.mountFunction()},unmounted:function(){window.scrollTo(0,0)},methods:Object(c["a"])(Object(c["a"])({},Object(p["b"])({changeView:"changeView",onScroll:"onScroll",toggleMenuFlag:"toggleMenuFlag"})),{},{mountFunction:function(){this.lastScrollPosition=window.pageYOffset,window.addEventListener("scroll",this.onScroll),window.addEventListener("scroll",this.toogleBtn)},toogleBtn:function(){var t=document.documentElement.scrollTop,e=Math.ceil(t/document.body.scrollHeight*100);e>=0&&e<=25?this.toggleMenuFlag(0):e>=26&&e<=50?this.toggleMenuFlag(1):e>=51&&e<=74?this.toggleMenuFlag(2):e>=75&&this.toggleMenuFlag(3)}})};i("92df");const nt=I()(at,[["render",o],["__scopeId","data-v-f58e6ce8"]]);var st=nt,ot=i("7375"),ct=i.n(ot),rt=Object(p["a"])({state:function(){return{menu:[{name:"Home",flag:!0},{name:"About",flag:!1},{name:"Projects",flag:!1}],skills:[{name:"Java"},{name:"JPA"},{name:"MyBatis"},{name:"Vue.Js"},{name:"JQuery"},{name:"JavaScript (ES6+)"},{name:"Spring Boot"}],projects:[{name:"Kanboo",img:'url("/img/kanbooMain.0ab1a834.png")',category:"PMS",usedSkill:{front:"Vue.Js",back:"Spring Boot",JDBC:"JPA",DB:"MariaDB"}},{name:"GMP",img:"url(/img/GMP.9d8fd07d.png)",category:"ERP",usedSkill:{front:"JSP",JDBC:"MyBatis",DB:"Oracle"}}],skillImg:[{name:"vue",img:""},{name:"boot",img:""},{name:"jpa",img:""},{name:"node",img:""},{name:"js",img:""}],displayFlag:!0,transFlag:!1,projectInFlag:!1,menuToggle:!0,inContact:!0,outContact:!1}},mutations:{changeView:function(t,e){switch(e.target.innerHTML){case"Home":window.scrollTo(0,0,{behavior:"smooth"});break;case"About":window.scrollTo(0,950,{behavior:"smooth"});break;case"Project":window.scrollTo(0,1905,{behavior:"smooth"});break;case"Contact":window.scrollTo(0,2860,{behavior:"smooth"});break}},toggleMenuFlag:function(t,e){for(var i=0;i<t.menu.length;i++)e===i?t.menu[e].flag=!0:t.menu[i].flag=!1},toggleMenuIcon:function(t){t.menuToggle=!t.menuToggle,t.inContact=!t.inContact,t.outContact=!t.outContact},onScroll:function(t){window.pageYOffset>530&&(t.displayFlag=!1,t.transFlag=!0),window.pageYOffset<530&&(t.displayFlag=!0,t.transFlag=!1)},setClass:function(t,e){var i=document.querySelectorAll(".projects > ul > li");i[e].firstElementChild.removeAttribute("class","project-wrap"),i[e].firstElementChild.setAttribute("class","project-wrap-in")},removeClass:function(t,e){var i=document.querySelectorAll(".projects > ul > li");i[e].firstElementChild.removeAttribute("class","project-wrap-in"),i[e].firstElementChild.setAttribute("class","project-wrap")},moveToGithub:function(t,e){var i=document.createElement("a");0==e?i.href="https://github.com/Juwon-Yun/kanboo_site":1==e&&(i.href="https://github.com/Juwon-Yun/GMP"),i.target="_blank",i.click()}},actions:{}}),lt=rt,ht=i("bc3a"),ut=i.n(ht),dt=i("f13c"),bt=i.n(dt);ut.a.defaults.baseURL="http://localhost:8885";var gt=Object(a["b"])(st);gt.config.globalProperties.axios=ut.a,gt.use(lt).use(ct.a).use(bt.a).mount("#app")},7375:function(t,e){},"8fd7":function(t,e,i){},"92df":function(t,e,i){"use strict";i("196c")},"92e7":function(t,e,i){},e340:function(t,e,i){"use strict";i("182d")},fcb3:function(t,e,i){}});
//# sourceMappingURL=app.1e4d4b64.js.map