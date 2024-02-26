import{_ as h}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as l,c as u,a as t,d as e,b as a,w as n,e as i}from"./app-edf8b1e7.js";const p={},_={class:"hint-container warning"},b=t("p",{class:"hint-container-title"},"注意",-1),m=i('<h2 id="合并转发" tabindex="-1"><a class="header-anchor" href="#合并转发" aria-hidden="true">#</a> 合并转发</h2><table><thead><tr><th>字段</th><th>类型</th><th>收</th><th>发</th><th>必填</th><th>说明</th></tr></thead><tbody><tr><td>id</td><td>string</td><td>✓</td><td>✓</td><td>是</td><td>合并转发resid</td></tr></tbody></table><h2 id="合并转发-节点" tabindex="-1"><a class="header-anchor" href="#合并转发-节点" aria-hidden="true">#</a> 合并转发(节点)</h2><table><thead><tr><th>字段</th><th>类型</th><th>收</th><th>发</th><th>必填</th><th>说明</th></tr></thead><tbody><tr><td>id</td><td><code>int64</code> or <code>string</code></td><td>✓</td><td>✓</td><td>是</td><td>消息ID</td></tr></tbody></table>',4),v={id:"xml-消息",tabindex:"-1"},g=t("a",{class:"header-anchor",href:"#xml-消息","aria-hidden":"true"},"#",-1),x=i('<h2 id="json-消息" tabindex="-1"><a class="header-anchor" href="#json-消息" aria-hidden="true">#</a> JSON 消息</h2><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h3><table><thead><tr><th>字段</th><th>类型</th><th>收</th><th>发</th><th>必填</th><th>说明</th></tr></thead><tbody><tr><td>data</td><td>string</td><td>✓</td><td>✓</td><td>是</td><td>JSON 数据</td></tr></tbody></table>',3),k=t("div",{class:"language-text line-numbers-mode","data-ext":"text"},[t("pre",{class:"language-text"},[t("code",null,`[CQ:json,data={"app":"com.tencent.structmsg","config":{"autosize":true,"ctime":1621234567,"forward":true,"token":"shamrock"},"desc":"这是一条 JSON 消息"...}]
`)]),t("div",{class:"line-numbers","aria-hidden":"true"},[t("div",{class:"line-number"})])],-1),f=t("div",{class:"language-json line-numbers-mode","data-ext":"json"},[t("pre",{class:"language-json"},[t("code",null,[t("span",{class:"token punctuation"},"{"),e(`
  `),t("span",{class:"token property"},'"type"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"json"'),t("span",{class:"token punctuation"},","),e(`
  `),t("span",{class:"token property"},'"data"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token punctuation"},"{"),e(`
    `),t("span",{class:"token property"},'"data"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"{\\"app\\":\\"com.tencent.structmsg\\",\\"config\\":{\\"autosize\\":true,\\"ctime\\":1621234567,\\"forward\\":true,\\"token\\":\\"shamrock\\"},\\"desc\\":\\"这是一条 JSON 消息\\"...}"'),e(`
  `),t("span",{class:"token punctuation"},"}"),e(`
`),t("span",{class:"token punctuation"},"}"),e(`
`)])]),t("div",{class:"line-numbers","aria-hidden":"true"},[t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"})])],-1),y={id:"文本转语音",tabindex:"-1"},N=t("a",{class:"header-anchor",href:"#文本转语音","aria-hidden":"true"},"#",-1);function j(S,w){const s=o("Badge"),c=o("Tabs");return l(),u("div",null,[t("div",_,[b,t("p",null,[e("对于 Shamrock 未实现的消息类型，会在标题添加标记 "),a(s,{text:"未实现",type:"danger",vertical:"baseline"})])]),m,t("h2",v,[g,e(" XML 消息 "),a(s,{text:"未实现",type:"danger"})]),x,a(c,{id:"158",data:[{id:"CQ 码"},{id:"消息段"}]},{title0:n(({value:d,isActive:r})=>[e("CQ 码")]),title1:n(({value:d,isActive:r})=>[e("消息段")]),tab0:n(({value:d,isActive:r})=>[k]),tab1:n(({value:d,isActive:r})=>[f]),_:1}),t("h2",y,[N,e(" 文本转语音 "),a(s,{text:"未实现",type:"danger"})])])}const A=h(p,[["render",j],["__file","advanced.html.vue"]]);export{A as default};
