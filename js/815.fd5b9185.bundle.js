(self.webpackChunkkevinjobs=self.webpackChunkkevinjobs||[]).push([[815],{7484:function(t){t.exports=function(){"use strict";var t=6e4,e=36e5,n="millisecond",i="second",r="minute",s="hour",a="day",o="week",u="month",c="quarter",l="year",h="date",d="Invalid Date",f=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,p={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},$=function(t,e,n){var i=String(t);return!i||i.length>=e?t:""+Array(e+1-i.length).join(n)+t},v={s:$,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),i=Math.floor(n/60),r=n%60;return(e<=0?"+":"-")+$(i,2,"0")+":"+$(r,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var i=12*(n.year()-e.year())+(n.month()-e.month()),r=e.clone().add(i,u),s=n-r<0,a=e.clone().add(i+(s?-1:1),u);return+(-(i+(n-r)/(s?r-a:a-r))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:u,y:l,w:o,d:a,D:h,h:s,m:r,s:i,ms:n,Q:c}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},g="en",y={};y[g]=p;var w=function(t){return t instanceof b},M=function(t,e,n){var i;if(!t)return g;if("string"==typeof t)y[t]&&(i=t),e&&(y[t]=e,i=t);else{var r=t.name;y[r]=t,i=r}return!n&&i&&(g=i),i||!n&&g},D=function(t,e){if(w(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new b(n)},S=v;S.l=M,S.i=w,S.w=function(t,e){return D(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var b=function(){function p(t){this.$L=M(t.locale,null,!0),this.parse(t)}var $=p.prototype;return $.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(S.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var i=e.match(f);if(i){var r=i[2]-1||0,s=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],r,i[3]||1,i[4]||0,i[5]||0,i[6]||0,s)):new Date(i[1],r,i[3]||1,i[4]||0,i[5]||0,i[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},$.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},$.$utils=function(){return S},$.isValid=function(){return!(this.$d.toString()===d)},$.isSame=function(t,e){var n=D(t);return this.startOf(e)<=n&&n<=this.endOf(e)},$.isAfter=function(t,e){return D(t)<this.startOf(e)},$.isBefore=function(t,e){return this.endOf(e)<D(t)},$.$g=function(t,e,n){return S.u(t)?this[e]:this.set(n,t)},$.unix=function(){return Math.floor(this.valueOf()/1e3)},$.valueOf=function(){return this.$d.getTime()},$.startOf=function(t,e){var n=this,c=!!S.u(e)||e,d=S.p(t),f=function(t,e){var i=S.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return c?i:i.endOf(a)},m=function(t,e){return S.w(n.toDate()[t].apply(n.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},p=this.$W,$=this.$M,v=this.$D,g="set"+(this.$u?"UTC":"");switch(d){case l:return c?f(1,0):f(31,11);case u:return c?f(1,$):f(0,$+1);case o:var y=this.$locale().weekStart||0,w=(p<y?p+7:p)-y;return f(c?v-w:v+(6-w),$);case a:case h:return m(g+"Hours",0);case s:return m(g+"Minutes",1);case r:return m(g+"Seconds",2);case i:return m(g+"Milliseconds",3);default:return this.clone()}},$.endOf=function(t){return this.startOf(t,!1)},$.$set=function(t,e){var o,c=S.p(t),d="set"+(this.$u?"UTC":""),f=(o={},o[a]=d+"Date",o[h]=d+"Date",o[u]=d+"Month",o[l]=d+"FullYear",o[s]=d+"Hours",o[r]=d+"Minutes",o[i]=d+"Seconds",o[n]=d+"Milliseconds",o)[c],m=c===a?this.$D+(e-this.$W):e;if(c===u||c===l){var p=this.clone().set(h,1);p.$d[f](m),p.init(),this.$d=p.set(h,Math.min(this.$D,p.daysInMonth())).$d}else f&&this.$d[f](m);return this.init(),this},$.set=function(t,e){return this.clone().$set(t,e)},$.get=function(t){return this[S.p(t)]()},$.add=function(n,c){var h,d=this;n=Number(n);var f=S.p(c),m=function(t){var e=D(d);return S.w(e.date(e.date()+Math.round(t*n)),d)};if(f===u)return this.set(u,this.$M+n);if(f===l)return this.set(l,this.$y+n);if(f===a)return m(1);if(f===o)return m(7);var p=(h={},h[r]=t,h[s]=e,h[i]=1e3,h)[f]||1,$=this.$d.getTime()+n*p;return S.w($,this)},$.subtract=function(t,e){return this.add(-1*t,e)},$.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||d;var i=t||"YYYY-MM-DDTHH:mm:ssZ",r=S.z(this),s=this.$H,a=this.$m,o=this.$M,u=n.weekdays,c=n.months,l=function(t,n,r,s){return t&&(t[n]||t(e,i))||r[n].substr(0,s)},h=function(t){return S.s(s%12||12,t,"0")},f=n.meridiem||function(t,e,n){var i=t<12?"AM":"PM";return n?i.toLowerCase():i},p={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:S.s(o+1,2,"0"),MMM:l(n.monthsShort,o,c,3),MMMM:l(c,o),D:this.$D,DD:S.s(this.$D,2,"0"),d:String(this.$W),dd:l(n.weekdaysMin,this.$W,u,2),ddd:l(n.weekdaysShort,this.$W,u,3),dddd:u[this.$W],H:String(s),HH:S.s(s,2,"0"),h:h(1),hh:h(2),a:f(s,a,!0),A:f(s,a,!1),m:String(a),mm:S.s(a,2,"0"),s:String(this.$s),ss:S.s(this.$s,2,"0"),SSS:S.s(this.$ms,3,"0"),Z:r};return i.replace(m,(function(t,e){return e||p[t]||r.replace(":","")}))},$.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},$.diff=function(n,h,d){var f,m=S.p(h),p=D(n),$=(p.utcOffset()-this.utcOffset())*t,v=this-p,g=S.m(this,p);return g=(f={},f[l]=g/12,f[u]=g,f[c]=g/3,f[o]=(v-$)/6048e5,f[a]=(v-$)/864e5,f[s]=v/e,f[r]=v/t,f[i]=v/1e3,f)[m]||v,d?g:S.a(g)},$.daysInMonth=function(){return this.endOf(u).$D},$.$locale=function(){return y[this.$L]},$.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),i=M(t,e,!0);return i&&(n.$L=i),n},$.clone=function(){return S.w(this.$d,this)},$.toDate=function(){return new Date(this.valueOf())},$.toJSON=function(){return this.isValid()?this.toISOString():null},$.toISOString=function(){return this.$d.toISOString()},$.toString=function(){return this.$d.toUTCString()},p}(),k=b.prototype;return D.prototype=k,[["$ms",n],["$s",i],["$m",r],["$H",s],["$W",a],["$M",u],["$y",l],["$D",h]].forEach((function(t){k[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),D.extend=function(t,e){return t.$i||(t(e,b,D),t.$i=!0),D},D.locale=M,D.isDayjs=w,D.unix=function(t){return D(1e3*t)},D.en=y[g],D.Ls=y,D.p={},D}()},9212:(t,e,n)=>{"use strict";n.d(e,{Zb:()=>p,W2:()=>v,h4:()=>l});var i=n(7294),r=n(9163),s=n(4203);const a=r.ZP.div`
  margin: 8px 0 16px 0;
  padding-bottom: 16px;
  border-bottom: 1px solid ${s.Z.white4};
  display: flex;
  align-items: center;
`,o=r.ZP.h3``,u=r.ZP.div``;function c(t){const{children:e}=t;return i.createElement(a,null,e)}c.Title=o,c.Add=u;const l=c,h=r.ZP.div`
  margin: 8px;
  display: inline-block;
  position: relative;
`,d=r.ZP.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,f=r.ZP.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #000;
  opacity: 0.45;
`;function m(t){const[e,n]=i.useState(!1),{width:r=300,height:s=400,p:a,onEdit:o,children:u}=t,c={position:"absolute",top:s/2,left:r/2,transform:"translate(-14px, -14px)",zIndex:999,visibility:e?"visible":"hidden",cursor:"pointer"};return i.createElement(h,{style:{width:r,height:s},onMouseEnter:t=>{t.preventDefault(),n(!0)},onMouseLeave:t=>{t.preventDefault(),n(!1)}},u,i.createElement("div",{style:c,onClick:t=>o(t,a)},i.createElement("svg",{width:"28",height:"28",viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i.createElement("rect",{width:"48",height:"48",fill:"white",fillOpacity:"0.01"}),i.createElement("path",{d:"M7 42H43",stroke:"#e4e4e4",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),i.createElement("path",{d:"M11 26.7199V34H18.3172L39 13.3081L31.6951 6L11 26.7199Z",fill:"none",stroke:"#e4e4e4",strokeWidth:"2",strokeLinejoin:"round"}))),e?i.createElement(f,null):"")}m.Img=d;const p=m,$=r.ZP.div`
  padding-bottom: 64px;
`;function v(t){const{children:e}=t;return i.createElement($,null,e)}},8815:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>m});var i=n(7294),r=n(9163),s=n(7484),a=n.n(s),o=n(107),u=n(6682),c=n(4203),l=n(9212);const h=r.ZP.div`
  padding-bottom: 64px;
`,d=r.ZP.div`
  display: flex;
  align-items: center;
  input { width: 100px !important; flex-grow: 0; }
`,f=t=>t.map((t=>{delete t.id,delete t.uid;let e=c.Z.dark;switch(t.method){case"GET":e=c.Z.green;break;case"POST":e=c.Z.orange;break;case"PUT":e=c.Z.blue;break;case"DELETE":e=c.Z.red;break;case"OPTIONS":e=c.Z.cyan;break;default:e=c.Z.dark}return t.method=i.createElement("span",{style:{color:e,fontSize:"0.8rem"}},t.method),t.ip=i.createElement("a",{href:`https://ip.tool.chinaz.com/${t.ip}`},t.ip),t})),m=function(t){const{datetime:e=a()().format("YYYY-MM-DD")}=t,[n,r]=i.useState(e),[s,c]=i.useState(null),m=t=>{return e=this,n=void 0,r=function*(){c(null),yield o.V.get(`/logs?datetime=${t}`).then((t=>c(t.data.data))).catch((t=>window.alert(t.response.data.msg)))},new((i=void 0)||(i=Promise))((function(t,s){function a(t){try{u(r.next(t))}catch(t){s(t)}}function o(t){try{u(r.throw(t))}catch(t){s(t)}}function u(e){var n;e.done?t(e.value):(n=e.value,n instanceof i?n:new i((function(t){t(n)}))).then(a,o)}u((r=r.apply(e,n||[])).next())}));var e,n,i,r};return i.useEffect((()=>{m(e)}),[]),i.createElement(h,{className:"admin-log-viewer-container"},i.createElement(l.h4,null,i.createElement(l.h4.Title,null,"Log Viewer")),i.createElement("div",null,i.createElement(d,null,i.createElement(u.II,{label:"选择日期",value:n,onChange:t=>r(t.target.value),onKeyDown:t=>{"Enter"===t.key&&(t.preventDefault(),m(n))}}),i.createElement(u.zx,{onClick:t=>{t.preventDefault(),m(n)}},"确定")),s?i.createElement(u.iA,{data:f(s),heads:[{field:"datetime",name:"日期"},{field:"ip",name:"访问IP"},{field:"method",name:"方法"},{field:"url",name:"访问页面"},{field:"status",name:"状态码"},{field:"spent",name:"耗时"},{field:"message",name:"消息"},{field:"length",name:"响应长度"}]}):i.createElement(u.gb,null)))}},7218:(t,e,n)=>{"use strict";n.d(e,{V:()=>r});var i=n(9669);const r=n.n(i)().create();let s;s="http://api.kevinjobs.com:5000/v2",r.defaults.baseURL="http://api.kevinjobs.com:5000/v2",r.interceptors.request.use((t=>(t.data=JSON.stringify(t.data),t.headers={"content-type":"application/json",Authorization:`Bearer ${localStorage.getItem("token")}`},t)))},107:(t,e,n)=>{"use strict";n.d(e,{V:()=>i.V});var i=n(7218)}}]);