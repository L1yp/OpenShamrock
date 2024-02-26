import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o,c as n,a as t,d as e,b as a,e as h}from"./app-edf8b1e7.js";const c={},s={class:"hint-container warning"},l=t("p",{class:"hint-container-title"},"注意",-1),b=h('<h2 id="获取图片" tabindex="-1"><a class="header-anchor" href="#获取图片" aria-hidden="true">#</a> 获取图片</h2><p>该接口用于获取图片，只能获取已缓存的图片。</p><h3 id="api-端点" tabindex="-1"><a class="header-anchor" href="#api-端点" aria-hidden="true">#</a> API 端点</h3><p><code>/get_image</code></p><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h3><table><thead><tr><th>字段</th><th>类型</th><th>必须</th><th>说明</th></tr></thead><tbody><tr><td>file</td><td>string</td><td>是</td><td>文件 MD5</td></tr></tbody></table><h3 id="响应" tabindex="-1"><a class="header-anchor" href="#响应" aria-hidden="true">#</a> 响应</h3><table><thead><tr><th>字段</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>size</td><td>int64</td><td>文件大小</td></tr><tr><td>url</td><td>string</td><td>文件 URL</td></tr><tr><td>filename</td><td>string</td><td>文件 名称</td></tr></tbody></table>',8),p={id:"检查是否可以发送图片",tabindex:"-1"},_=t("a",{class:"header-anchor",href:"#检查是否可以发送图片","aria-hidden":"true"},"#",-1),f=h('<p>该接口用于检查是否可以发送图片。</p><h3 id="api-端点-1" tabindex="-1"><a class="header-anchor" href="#api-端点-1" aria-hidden="true">#</a> API 端点</h3><p><code>/can_send_image</code></p><h3 id="参数-1" tabindex="-1"><a class="header-anchor" href="#参数-1" aria-hidden="true">#</a> 参数</h3><div class="hint-container tip"><p class="hint-container-title">提示</p><p>该 API 无需参数</p></div><h3 id="响应-1" tabindex="-1"><a class="header-anchor" href="#响应-1" aria-hidden="true">#</a> 响应</h3><table><thead><tr><th>字段名</th><th>数据类型</th><th>说明</th></tr></thead><tbody><tr><td>yes</td><td>boolean</td><td>是或否</td></tr></tbody></table>',7),x={id:"图片-ocr",tabindex:"-1"},u=t("a",{class:"header-anchor",href:"#图片-ocr","aria-hidden":"true"},"#",-1),g=h('<p>该接口用于图片 OCR。</p><h3 id="api-端点-2" tabindex="-1"><a class="header-anchor" href="#api-端点-2" aria-hidden="true">#</a> API 端点</h3><p><code>/ocr_image</code></p><h3 id="参数-2" tabindex="-1"><a class="header-anchor" href="#参数-2" aria-hidden="true">#</a> 参数</h3><table><thead><tr><th>字段</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>image</td><td>string</td><td>图片ID</td></tr></tbody></table><h3 id="响应-2" tabindex="-1"><a class="header-anchor" href="#响应-2" aria-hidden="true">#</a> 响应</h3><table><thead><tr><th>字段</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>texts</td><td>List&lt;<a href="#textdetection">TextDetection</a>&gt;</td><td>OCR结果</td></tr><tr><td>language</td><td>string</td><td>语言</td></tr></tbody></table><h4 id="textdetection" tabindex="-1"><a class="header-anchor" href="#textdetection" aria-hidden="true">#</a> TextDetection</h4><table><thead><tr><th>字段</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>text</td><td>string</td><td>文本</td></tr><tr><td>confidence</td><td>int32</td><td>置信度</td></tr><tr><td>coordinates</td><td>vector2[]</td><td>二维数组表示的坐标</td></tr></tbody></table><h2 id="获取语音" tabindex="-1"><a class="header-anchor" href="#获取语音" aria-hidden="true">#</a> 获取语音</h2><p>该接口用于获取语音。</p><h3 id="api-端点-3" tabindex="-1"><a class="header-anchor" href="#api-端点-3" aria-hidden="true">#</a> API 端点</h3><p><code>/get_record</code></p><h3 id="参数-3" tabindex="-1"><a class="header-anchor" href="#参数-3" aria-hidden="true">#</a> 参数</h3><table><thead><tr><th>字段</th><th>类型</th><th>必须</th><th>说明</th></tr></thead><tbody><tr><td>file</td><td>string</td><td>是</td><td>文件 MD5</td></tr><tr><td>out_format</td><td>string</td><td>是</td><td>输出格式</td></tr></tbody></table><h3 id="响应-3" tabindex="-1"><a class="header-anchor" href="#响应-3" aria-hidden="true">#</a> 响应</h3><table><thead><tr><th>字段</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>file</td><td>string</td><td>文件路径</td></tr><tr><td>url</td><td>string</td><td>文件 URL</td></tr></tbody></table>',17),y={id:"检查是否可以发送语音",tabindex:"-1"},m=t("a",{class:"header-anchor",href:"#检查是否可以发送语音","aria-hidden":"true"},"#",-1),A=h('<p>该接口用于检查是否可以发送语音。</p><h3 id="api-端点-4" tabindex="-1"><a class="header-anchor" href="#api-端点-4" aria-hidden="true">#</a> API 端点</h3><p><code>/can_send_record</code></p><h3 id="参数-4" tabindex="-1"><a class="header-anchor" href="#参数-4" aria-hidden="true">#</a> 参数</h3><div class="hint-container tip"><p class="hint-container-title">提示</p><p>该 API 无需参数</p></div><h3 id="响应-4" tabindex="-1"><a class="header-anchor" href="#响应-4" aria-hidden="true">#</a> 响应</h3><table><thead><tr><th>字段名</th><th>数据类型</th><th>说明</th></tr></thead><tbody><tr><td><code>yes</code></td><td>boolean</td><td>是或否</td></tr></tbody></table><h3 id="api-端点-5" tabindex="-1"><a class="header-anchor" href="#api-端点-5" aria-hidden="true">#</a> API 端点</h3><p><code>/get_record</code></p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>要使用此接口, 通常需要安装 ffmpeg, 请参考 OneBot 实现的相关说明。</p></div><h3 id="参数-5" tabindex="-1"><a class="header-anchor" href="#参数-5" aria-hidden="true">#</a> 参数</h3><table><thead><tr><th>字段名</th><th>数据类型</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>file</td><td>string</td><td>-</td><td>收到的语音文件名（消息段的 <code>file</code> 参数）, 如 <code>0B38145AA44505000B38145AA4450500.silk</code></td></tr><tr><td>out_format</td><td>string</td><td>-</td><td>要转换到的格式, 目前支持 <code>mp3</code>、<code>amr</code>、<code>wma</code>、<code>m4a</code>、<code>spx</code>、<code>ogg</code>、<code>wav</code>、<code>flac</code></td></tr></tbody></table><h3 id="响应-5" tabindex="-1"><a class="header-anchor" href="#响应-5" aria-hidden="true">#</a> 响应</h3><table><thead><tr><th>字段名</th><th>数据类型</th><th>说明</th></tr></thead><tbody><tr><td>file</td><td>string</td><td>转换后的语音文件路径, 如 <code>/home/somebody/cqhttp/data/record/0B38145AA44505000B38145AA4450500.mp3</code></td></tr></tbody></table>',14),v={id:"获取文件",tabindex:"-1"},B=t("a",{class:"header-anchor",href:"#获取文件","aria-hidden":"true"},"#",-1),I=t("p",null,"该接口用于获取文件。",-1),P={id:"获取视频",tabindex:"-1"},D=t("a",{class:"header-anchor",href:"#获取视频","aria-hidden":"true"},"#",-1),R=t("p",null,"该接口用于获取视频。",-1),k={id:"获取缩略图",tabindex:"-1"},C=t("a",{class:"header-anchor",href:"#获取缩略图","aria-hidden":"true"},"#",-1),N=t("p",null,"该接口用于获取缩略图。",-1);function O(V,w){const d=i("Badge");return o(),n("div",null,[t("div",s,[l,t("p",null,[e("对于 Shamrock 尚未实现的 API，会在标题添加标记 "),a(d,{text:"未实现",type:"danger",vertical:"baseline"})])]),b,t("h2",p,[_,e(" 检查是否可以发送图片 "),a(d,{text:"未实现",type:"danger"})]),f,t("h2",x,[u,e(" 图片 OCR "),a(d,{text:"未实现",type:"danger"})]),g,t("h2",y,[m,e(" 检查是否可以发送语音 "),a(d,{text:"未实现",type:"danger"})]),A,t("h2",v,[B,e(" 获取文件 "),a(d,{text:"未实现",type:"danger"})]),I,t("h2",P,[D,e(" 获取视频 "),a(d,{text:"未实现",type:"danger"})]),R,t("h2",k,[C,e(" 获取缩略图 "),a(d,{text:"未实现",type:"danger"})]),N])}const M=r(c,[["render",O],["__file","resources.html.vue"]]);export{M as default};
