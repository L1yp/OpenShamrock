import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{r as c,o as u,c as p,b as i,w as a,a as t,d as e,e as o}from"./app-edf8b1e7.js";const h={},b=o('<h2 id="at-某人" tabindex="-1"><a class="header-anchor" href="#at-某人" aria-hidden="true">#</a> AT 某人</h2><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h3><div class="hint-container tip"><p class="hint-container-title">提示</p><p>当 <code>qq</code> 字段为 <code>&quot;0&quot;</code>或<code>&quot;all&quot;</code> 时, 表示 AT 全体成员。</p></div><table><thead><tr><th>字段</th><th>类型</th><th>收</th><th>发</th><th>必填</th><th>说明</th></tr></thead><tbody><tr><td>qq</td><td>string</td><td>✓</td><td>✓</td><td>否</td><td>QQ 号</td></tr></tbody></table><div class="hint-container warning"><p class="hint-container-title">注意</p><p>将在未来实现 <code>qq</code> 字段为 <code>online</code> 和 <code>admin</code> 时的功能。</p></div>',5),v=t("div",{class:"language-text line-numbers-mode","data-ext":"text"},[t("pre",{class:"language-text"},[t("code",null,`[CQ:at,qq=123456]
`)]),t("div",{class:"line-numbers","aria-hidden":"true"},[t("div",{class:"line-number"})])],-1),m=t("div",{class:"language-json line-numbers-mode","data-ext":"json"},[t("pre",{class:"language-json"},[t("code",null,[t("span",{class:"token punctuation"},"{"),e(`
  `),t("span",{class:"token property"},'"type"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"at"'),t("span",{class:"token punctuation"},","),e(`
  `),t("span",{class:"token property"},'"data"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token punctuation"},"{"),e(`
    `),t("span",{class:"token property"},'"qq"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"123456"'),e(`
  `),t("span",{class:"token punctuation"},"}"),e(`
`),t("span",{class:"token punctuation"},"}"),e(`
`)])]),t("div",{class:"line-numbers","aria-hidden":"true"},[t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"})])],-1),k=o('<h2 id="表情" tabindex="-1"><a class="header-anchor" href="#表情" aria-hidden="true">#</a> 表情</h2><h3 id="参数-1" tabindex="-1"><a class="header-anchor" href="#参数-1" aria-hidden="true">#</a> 参数</h3><table><thead><tr><th>字段</th><th>类型</th><th>收</th><th>发</th><th>必填</th><th>说明</th></tr></thead><tbody><tr><td>id</td><td>int</td><td>✓</td><td>✓</td><td>是</td><td>表情 ID</td></tr><tr><td>big</td><td>bool</td><td>✓</td><td>X</td><td>否</td><td>是否是大表情</td></tr></tbody></table>',3),_={class:"hint-container tip"},g=t("p",{class:"hint-container-title"},"提示",-1),x={href:"https://github.com/richardchien/coolq-http-api/wiki/%E8%A1%A8%E6%83%85-CQ-%E7%A0%81-ID-%E8%A1%A8",target:"_blank",rel:"noopener noreferrer"},y=t("div",{class:"language-text line-numbers-mode","data-ext":"text"},[t("pre",{class:"language-text"},[t("code",null,`[CQ:face,id=351,big=true]
`)]),t("div",{class:"line-numbers","aria-hidden":"true"},[t("div",{class:"line-number"})])],-1),A=t("div",{class:"language-json line-numbers-mode","data-ext":"json"},[t("pre",{class:"language-json"},[t("code",null,[t("span",{class:"token punctuation"},"{"),e(`
  `),t("span",{class:"token property"},'"type"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"face"'),t("span",{class:"token punctuation"},","),e(`
  `),t("span",{class:"token property"},'"data"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token punctuation"},"{"),e(`
    `),t("span",{class:"token property"},'"id"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token number"},"351"),t("span",{class:"token punctuation"},","),e(`
    `),t("span",{class:"token property"},'"big"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token boolean"},"true"),e(`
  `),t("span",{class:"token punctuation"},"}"),e(`
`),t("span",{class:"token punctuation"},"}"),e(`
`)])]),t("div",{class:"line-numbers","aria-hidden":"true"},[t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"})])],-1),f=o('<h2 id="弹射表情" tabindex="-1"><a class="header-anchor" href="#弹射表情" aria-hidden="true">#</a> 弹射表情</h2><h3 id="参数-2" tabindex="-1"><a class="header-anchor" href="#参数-2" aria-hidden="true">#</a> 参数</h3><table><thead><tr><th>字段</th><th>类型</th><th>收</th><th>发</th><th>必填</th><th>说明</th></tr></thead><tbody><tr><td>id</td><td>int</td><td>✓</td><td>✓</td><td>是</td><td>表情 ID</td></tr><tr><td>count</td><td>int</td><td>✓</td><td>√</td><td>是</td><td>数量</td></tr></tbody></table>',3),q={class:"hint-container tip"},C=t("p",{class:"hint-container-title"},"提示",-1),Q={href:"https://github.com/richardchien/coolq-http-api/wiki/%E8%A1%A8%E6%83%85-CQ-%E7%A0%81-ID-%E8%A1%A8",target:"_blank",rel:"noopener noreferrer"},j=t("div",{class:"language-text line-numbers-mode","data-ext":"text"},[t("pre",{class:"language-text"},[t("code",null,`[CQ:bubble_face,id=351,count=114514]
`)]),t("div",{class:"line-numbers","aria-hidden":"true"},[t("div",{class:"line-number"})])],-1),E=t("div",{class:"language-json line-numbers-mode","data-ext":"json"},[t("pre",{class:"language-json"},[t("code",null,[t("span",{class:"token punctuation"},"{"),e(`
  `),t("span",{class:"token property"},'"type"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"bubble_face"'),t("span",{class:"token punctuation"},","),e(`
  `),t("span",{class:"token property"},'"data"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token punctuation"},"{"),e(`
    `),t("span",{class:"token property"},'"id"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token number"},"351"),t("span",{class:"token punctuation"},","),e(`
    `),t("span",{class:"token property"},'"count"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token number"},"114514"),e(`
  `),t("span",{class:"token punctuation"},"}"),e(`
`),t("span",{class:"token punctuation"},"}"),e(`
`)])]),t("div",{class:"line-numbers","aria-hidden":"true"},[t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"})])],-1),I=o('<h2 id="回复" tabindex="-1"><a class="header-anchor" href="#回复" aria-hidden="true">#</a> 回复</h2><h3 id="参数-3" tabindex="-1"><a class="header-anchor" href="#参数-3" aria-hidden="true">#</a> 参数</h3><table><thead><tr><th>字段</th><th>类型</th><th>收</th><th>发</th><th>必填</th><th>说明</th></tr></thead><tbody><tr><td>id</td><td>int</td><td>✓</td><td>✓</td><td>是</td><td>消息 ID</td></tr></tbody></table>',3),D=t("div",{class:"language-text line-numbers-mode","data-ext":"text"},[t("pre",{class:"language-text"},[t("code",null,`[CQ:reply,id=1]
`)]),t("div",{class:"line-numbers","aria-hidden":"true"},[t("div",{class:"line-number"})])],-1),w=t("div",{class:"language-json line-numbers-mode","data-ext":"json"},[t("pre",{class:"language-json"},[t("code",null,[t("span",{class:"token punctuation"},"{"),e(`
  `),t("span",{class:"token property"},'"type"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token string"},'"reply"'),t("span",{class:"token punctuation"},","),e(`
  `),t("span",{class:"token property"},'"data"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token punctuation"},"{"),e(`
    `),t("span",{class:"token property"},'"id"'),t("span",{class:"token operator"},":"),e(),t("span",{class:"token number"},"1"),e(`
  `),t("span",{class:"token punctuation"},"}"),e(`
`),t("span",{class:"token punctuation"},"}"),e(`
`)])]),t("div",{class:"line-numbers","aria-hidden":"true"},[t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"})])],-1);function T(N,V){const d=c("Tabs"),l=c("ExternalLinkIcon");return u(),p("div",null,[b,i(d,{id:"62",data:[{id:"CQ 码"},{id:"消息段"}]},{title0:a(({value:n,isActive:s})=>[e("CQ 码")]),title1:a(({value:n,isActive:s})=>[e("消息段")]),tab0:a(({value:n,isActive:s})=>[v]),tab1:a(({value:n,isActive:s})=>[m]),_:1}),k,t("div",_,[g,t("p",null,[e("表情 ID 可以在 "),t("a",x,[e("这里"),i(l)]),e(" 查看。")])]),i(d,{id:"147",data:[{id:"CQ 码"},{id:"消息段"}]},{title0:a(({value:n,isActive:s})=>[e("CQ 码")]),title1:a(({value:n,isActive:s})=>[e("消息段")]),tab0:a(({value:n,isActive:s})=>[y]),tab1:a(({value:n,isActive:s})=>[A]),_:1}),f,t("div",q,[C,t("p",null,[e("表情 ID 可以在 "),t("a",Q,[e("这里"),i(l)]),e(" 查看。")])]),i(d,{id:"232",data:[{id:"CQ 码"},{id:"消息段"}]},{title0:a(({value:n,isActive:s})=>[e("CQ 码")]),title1:a(({value:n,isActive:s})=>[e("消息段")]),tab0:a(({value:n,isActive:s})=>[j]),tab1:a(({value:n,isActive:s})=>[E]),_:1}),I,i(d,{id:"292",data:[{id:"CQ 码"},{id:"消息段"}]},{title0:a(({value:n,isActive:s})=>[e("CQ 码")]),title1:a(({value:n,isActive:s})=>[e("消息段")]),tab0:a(({value:n,isActive:s})=>[D]),tab1:a(({value:n,isActive:s})=>[w]),_:1})])}const S=r(h,[["render",T],["__file","normal.html.vue"]]);export{S as default};
