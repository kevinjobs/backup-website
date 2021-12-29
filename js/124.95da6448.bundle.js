(self.webpackChunkkevinjobs=self.webpackChunkkevinjobs||[]).push([[124],{124:(e,o,r)=>{"use strict";r.r(o),r.d(o,{default:()=>y});var t=r(7294),l=r(9163),a=r(137),c=r(7484),i=r.n(c),s=(r(7984),r(107));const d=l.ZP.div`
  display: flex;
  justify-content: center;
  background-color: #f5f5f5;
  align-items: center;
  padding: 28px 0 0 28px;
  border-radius: 8px;
`;function n(e){const{width:o=400,height:r=300}=e,l=t.useRef(),c=i()(),n=c.subtract(1,"day"),b=c.subtract(2,"day"),y=c.subtract(3,"day"),h=c.subtract(4,"day"),m=c.subtract(5,"day"),S=e=>e.format("YYYY-MM-DD"),p=[S(c.subtract(6,"day")),S(m),S(h),S(y),S(b),S(n),S(c)];return t.useEffect((()=>{s.V.get(`/logs/visit-data?dates=${JSON.stringify(p)}`).then((e=>{const o=e.data.data.map((e=>e.totals)),r={renderer:"svg",title:{text:"一周访问量",subtext:"访问后端API的次数",left:"center",right:"center"},tooltip:{trigger:"axis",axisPointer:{type:"cross"}},xAxis:{type:"category",data:p.map((e=>i()(e).format("MM-DD")))},yAxis:{type:"value"},series:[{data:o,type:"line",smooth:!0}]};a.init(l.current,"shine").setOption(r)})).catch((e=>window.alert(e.response.data.msg)))}),[]),t.createElement(d,{style:{width:o}},t.createElement("canvas",{id:"ip-chart",width:o,height:r,ref:l,style:{display:"block",userSelect:"none",padding:0,margin:"0 auto",borderWidth:0}}))}const b=l.ZP.div``;function y(){return t.createElement(b,{className:"admin-home-container"},t.createElement(n,null))}},7218:(e,o,r)=>{"use strict";r.d(o,{V:()=>l});var t=r(9669);const l=r.n(t)().create();let a;a="http://api.kevinjobs.com:5000/v2",l.defaults.baseURL="http://api.kevinjobs.com:5000/v2",l.interceptors.request.use((e=>(e.data=JSON.stringify(e.data),e.headers={"content-type":"application/json",Authorization:`Bearer ${localStorage.getItem("token")}`},e)))},107:(e,o,r)=>{"use strict";r.d(o,{V:()=>t.V});var t=r(7218)},7984:function(e,o,r){var t,l,a;l=[o,r(137)],void 0===(a="function"==typeof(t=function(e,o){var r;o?o.registerTheme("shine",{color:["#c12e34","#e6b600","#0098d9","#2b821d","#005eaa","#339ca8","#cda819","#32a487"],backgroundColor:"rgba(0,0,0,0)",textStyle:{},title:{textStyle:{color:"#333333"},subtextStyle:{color:"#aaaaaa"}},line:{itemStyle:{borderWidth:1},lineStyle:{width:2},symbolSize:4,symbol:"emptyCircle",smooth:!1},radar:{itemStyle:{borderWidth:1},lineStyle:{width:2},symbolSize:4,symbol:"emptyCircle",smooth:!1},bar:{itemStyle:{barBorderWidth:0,barBorderColor:"#ccc"}},pie:{itemStyle:{borderWidth:0,borderColor:"#ccc"}},scatter:{itemStyle:{borderWidth:0,borderColor:"#ccc"}},boxplot:{itemStyle:{borderWidth:0,borderColor:"#ccc"}},parallel:{itemStyle:{borderWidth:0,borderColor:"#ccc"}},sankey:{itemStyle:{borderWidth:0,borderColor:"#ccc"}},funnel:{itemStyle:{borderWidth:0,borderColor:"#ccc"}},gauge:{itemStyle:{borderWidth:0,borderColor:"#ccc"}},candlestick:{itemStyle:{color:"#c12e34",color0:"#2b821d",borderColor:"#c12e34",borderColor0:"#2b821d",borderWidth:1}},graph:{itemStyle:{borderWidth:0,borderColor:"#ccc"},lineStyle:{width:1,color:"#aaaaaa"},symbolSize:4,symbol:"emptyCircle",smooth:!1,color:["#c12e34","#e6b600","#0098d9","#2b821d","#005eaa","#339ca8","#cda819","#32a487"],label:{color:"#eeeeee"}},map:{itemStyle:{areaColor:"#ddd",borderColor:"#eee",borderWidth:.5},label:{color:"#c12e34"},emphasis:{itemStyle:{areaColor:"#e6b600",borderColor:"#ddd",borderWidth:1},label:{color:"#c12e34"}}},geo:{itemStyle:{areaColor:"#ddd",borderColor:"#eee",borderWidth:.5},label:{color:"#c12e34"},emphasis:{itemStyle:{areaColor:"#e6b600",borderColor:"#ddd",borderWidth:1},label:{color:"#c12e34"}}},categoryAxis:{axisLine:{show:!0,lineStyle:{color:"#333"}},axisTick:{show:!0,lineStyle:{color:"#333"}},axisLabel:{show:!0,color:"#333"},splitLine:{show:!1,lineStyle:{color:["#ccc"]}},splitArea:{show:!1,areaStyle:{color:["rgba(250,250,250,0.3)","rgba(200,200,200,0.3)"]}}},valueAxis:{axisLine:{show:!0,lineStyle:{color:"#333"}},axisTick:{show:!0,lineStyle:{color:"#333"}},axisLabel:{show:!0,color:"#333"},splitLine:{show:!0,lineStyle:{color:["#ccc"]}},splitArea:{show:!1,areaStyle:{color:["rgba(250,250,250,0.3)","rgba(200,200,200,0.3)"]}}},logAxis:{axisLine:{show:!0,lineStyle:{color:"#333"}},axisTick:{show:!0,lineStyle:{color:"#333"}},axisLabel:{show:!0,color:"#333"},splitLine:{show:!0,lineStyle:{color:["#ccc"]}},splitArea:{show:!1,areaStyle:{color:["rgba(250,250,250,0.3)","rgba(200,200,200,0.3)"]}}},timeAxis:{axisLine:{show:!0,lineStyle:{color:"#333"}},axisTick:{show:!0,lineStyle:{color:"#333"}},axisLabel:{show:!0,color:"#333"},splitLine:{show:!0,lineStyle:{color:["#ccc"]}},splitArea:{show:!1,areaStyle:{color:["rgba(250,250,250,0.3)","rgba(200,200,200,0.3)"]}}},toolbox:{iconStyle:{borderColor:"#06467c"},emphasis:{iconStyle:{borderColor:"#4187c2"}}},legend:{textStyle:{color:"#333333"}},tooltip:{axisPointer:{lineStyle:{color:"#cccccc",width:1},crossStyle:{color:"#cccccc",width:1}}},timeline:{lineStyle:{color:"#005eaa",width:1},itemStyle:{color:"#005eaa",borderWidth:1},controlStyle:{color:"#005eaa",borderColor:"#005eaa",borderWidth:.5},checkpointStyle:{color:"#005eaa",borderColor:"#316bc2"},label:{color:"#005eaa"},emphasis:{itemStyle:{color:"#005eaa"},controlStyle:{color:"#005eaa",borderColor:"#005eaa",borderWidth:.5},label:{color:"#005eaa"}}},visualMap:{color:["#1790cf","#a2d4e6"]},dataZoom:{backgroundColor:"rgba(47,69,84,0)",dataBackgroundColor:"rgba(47,69,84,0.3)",fillerColor:"rgba(167,183,204,0.4)",handleColor:"#a7b7cc",handleSize:"100%",textStyle:{color:"#333333"}},markPoint:{label:{color:"#eeeeee"},emphasis:{label:{color:"#eeeeee"}}}}):(r="ECharts is not Loaded","undefined"!=typeof console&&console&&console.error&&console.error(r))})?t.apply(o,l):t)||(e.exports=a)}}]);