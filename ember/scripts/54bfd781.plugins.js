!function(a){function b(){var a=document.createElement("input"),b="onpaste";return a.setAttribute(b,""),"function"==typeof a[b]?"paste":"input"}var c,d=b()+".mask",e=navigator.userAgent,f=/iphone/i.test(e),g=/android/i.test(e);a.mask={definitions:{9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},dataName:"rawMaskFn",placeholder:"_"},a.fn.extend({caret:function(a,b){var c;if(0!==this.length&&!this.is(":hidden"))return"number"==typeof a?(b="number"==typeof b?b:a,this.each(function(){this.setSelectionRange?this.setSelectionRange(a,b):this.createTextRange&&(c=this.createTextRange(),c.collapse(!0),c.moveEnd("character",b),c.moveStart("character",a),c.select())})):(this[0].setSelectionRange?(a=this[0].selectionStart,b=this[0].selectionEnd):document.selection&&document.selection.createRange&&(c=document.selection.createRange(),a=0-c.duplicate().moveStart("character",-1e5),b=a+c.text.length),{begin:a,end:b})},unmask:function(){return this.trigger("unmask")},mask:function(b,e){var h,i,j,k,l,m;return!b&&this.length>0?(h=a(this[0]),h.data(a.mask.dataName)()):(e=a.extend({placeholder:a.mask.placeholder,completed:null},e),i=a.mask.definitions,j=[],k=m=b.length,l=null,a.each(b.split(""),function(a,b){"?"==b?(m--,k=a):i[b]?(j.push(new RegExp(i[b])),null===l&&(l=j.length-1)):j.push(null)}),this.trigger("unmask").each(function(){function h(a){for(;++a<m&&!j[a];);return a}function n(a){for(;--a>=0&&!j[a];);return a}function o(a,b){var c,d;if(!(0>a)){for(c=a,d=h(b);m>c;c++)if(j[c]){if(!(m>d&&j[c].test(w[d])))break;w[c]=w[d],w[d]=e.placeholder,d=h(d)}t(),v.caret(Math.max(l,a))}}function p(a){var b,c,d,f;for(b=a,c=e.placeholder;m>b;b++)if(j[b]){if(d=h(b),f=w[b],w[b]=c,!(m>d&&j[d].test(f)))break;c=f}}function q(a){var b,c,d,e=a.which;8===e||46===e||f&&127===e?(b=v.caret(),c=b.begin,d=b.end,d-c===0&&(c=46!==e?n(c):d=h(c-1),d=46===e?h(d):d),s(c,d),o(c,d-1),a.preventDefault()):27==e&&(v.val(x),v.caret(0,u()),a.preventDefault())}function r(b){var c,d,f,i=b.which,k=v.caret();b.ctrlKey||b.altKey||b.metaKey||32>i||i&&(k.end-k.begin!==0&&(s(k.begin,k.end),o(k.begin,k.end-1)),c=h(k.begin-1),m>c&&(d=String.fromCharCode(i),j[c].test(d)&&(p(c),w[c]=d,t(),f=h(c),g?setTimeout(a.proxy(a.fn.caret,v,f),0):v.caret(f),e.completed&&f>=m&&e.completed.call(v))),b.preventDefault())}function s(a,b){var c;for(c=a;b>c&&m>c;c++)j[c]&&(w[c]=e.placeholder)}function t(){v.val(w.join(""))}function u(a){var b,c,d=v.val(),f=-1;for(b=0,pos=0;m>b;b++)if(j[b]){for(w[b]=e.placeholder;pos++<d.length;)if(c=d.charAt(pos-1),j[b].test(c)){w[b]=c,f=b;break}if(pos>d.length)break}else w[b]===d.charAt(pos)&&b!==k&&(pos++,f=b);return a?t():k>f+1?(v.val(""),s(0,m)):(t(),v.val(v.val().substring(0,f+1))),k?b:l}var v=a(this),w=a.map(b.split(""),function(a){return"?"!=a?i[a]?e.placeholder:a:void 0}),x=v.val();v.data(a.mask.dataName,function(){return a.map(w,function(a,b){return j[b]&&a!=e.placeholder?a:null}).join("")}),v.attr("readonly")||v.one("unmask",function(){v.unbind(".mask").removeData(a.mask.dataName)}).bind("focus.mask",function(){clearTimeout(c);var a;x=v.val(),a=u(),c=setTimeout(function(){t(),a==b.length?v.caret(0,a):v.caret(a)},10)}).bind("blur.mask",function(){u(),v.val()!=x&&v.change()}).bind("keydown.mask",q).bind("keypress.mask",r).bind(d,function(){setTimeout(function(){var a=u(!0);v.caret(a),e.completed&&a==v.val().length&&e.completed.call(v)},0)}),u()}))}})}(jQuery),function(a){function b(b){void 0==window.DOMParser&&window.ActiveXObject&&(DOMParser=function(){},DOMParser.prototype.parseFromString=function(a){var b=new ActiveXObject("Microsoft.XMLDOM");return b.async="false",b.loadXML(a),b});try{var c=(new DOMParser).parseFromString(b,"text/xml");if(!a.isXMLDoc(c))throw new Error("Unable to parse XML");var d=a("parsererror",c);if(1==d.length)throw new Error("Error: "+a(c).text());return c}catch(e){var f=void 0==e.name?e:e.name+": "+e.message;return void a(document).trigger("xmlParseError",[f])}}function c(b,d){var e=!0;return"string"==typeof d?a.isFunction(b.test)?b.test(d):b==d:(a.each(b,function(f){return void 0===d[f]?e=!1:void("object"==typeof d[f]&&null!==d[f]?(e&&a.isArray(d[f])&&(e=a.isArray(b[f])&&d[f].length===b[f].length),e=e&&c(b[f],d[f])):e=b[f]&&a.isFunction(b[f].test)?e&&b[f].test(d[f]):e&&b[f]==d[f])}),e)}function d(b,c){return b[c]===a.mockjaxSettings[c]}function e(b,d){if(a.isFunction(b))return b(d);if(a.isFunction(b.url.test)){if(!b.url.test(d.url))return null}else{var e=b.url.indexOf("*");if(b.url!==d.url&&-1===e||!new RegExp(b.url.replace(/[-[\]{}()+?.,\\^$|#\s]/g,"\\$&").replace(/\*/g,".+")).test(d.url))return null}return!b.data||d.data&&c(b.data,d.data)?b&&b.type&&b.type.toLowerCase()!=d.type.toLowerCase()?null:b:null}function f(b){if(a.isArray(b)){var c=b[0],d=b[1];return"number"==typeof c&&"number"==typeof d?Math.floor(Math.random()*(d-c))+c:null}return"number"==typeof b?b:null}function g(c,e,g){var h=function(d){return function(){return function(){this.status=c.status,this.statusText=c.statusText,this.readyState=1;var f=function(){this.readyState=4;var d;"json"==e.dataType&&"object"==typeof c.responseText?this.responseText=JSON.stringify(c.responseText):"xml"==e.dataType?"string"==typeof c.responseXML?(this.responseXML=b(c.responseXML),this.responseText=c.responseXML):this.responseXML=c.responseXML:"object"==typeof c.responseText&&null!==c.responseText?(c.contentType="application/json",this.responseText=JSON.stringify(c.responseText)):this.responseText=c.responseText,("number"==typeof c.status||"string"==typeof c.status)&&(this.status=c.status),"string"==typeof c.statusText&&(this.statusText=c.statusText),d=this.onreadystatechange||this.onload,a.isFunction(d)?(c.isTimeout&&(this.status=-1),d.call(this,c.isTimeout?"timeout":void 0)):c.isTimeout&&(this.status=-1)};if(a.isFunction(c.response)){if(2===c.response.length)return void c.response(g,function(){f.call(d)});c.response(g)}f.call(d)}.apply(d)}}(this);c.proxy?q({global:!1,url:c.proxy,type:c.proxyType,data:c.data,dataType:"script"===e.dataType?"text/plain":e.dataType,complete:function(a){c.responseXML=a.responseXML,c.responseText=a.responseText,d(c,"status")&&(c.status=a.status),d(c,"statusText")&&(c.statusText=a.statusText),this.responseTimer=setTimeout(h,f(c.responseTime)||0)}}):e.async===!1?h():this.responseTimer=setTimeout(h,f(c.responseTime)||50)}function h(b,c,d,e){return b=a.extend(!0,{},a.mockjaxSettings,b),"undefined"==typeof b.headers&&(b.headers={}),"undefined"==typeof c.headers&&(c.headers={}),b.contentType&&(b.headers["content-type"]=b.contentType),{status:b.status,statusText:b.statusText,readyState:1,open:function(){},send:function(){e.fired=!0,g.call(this,b,c,d)},abort:function(){clearTimeout(this.responseTimer)},setRequestHeader:function(a,b){c.headers[a]=b},getResponseHeader:function(a){return b.headers&&b.headers[a]?b.headers[a]:"last-modified"==a.toLowerCase()?b.lastModified||(new Date).toString():"etag"==a.toLowerCase()?b.etag||"":"content-type"==a.toLowerCase()?b.contentType||"text/plain":void 0},getAllResponseHeaders:function(){var c="";return b.contentType&&(b.headers["Content-Type"]=b.contentType),a.each(b.headers,function(a,b){c+=a+": "+b+"\n"}),c}}}function i(a,b,c){if(j(a),a.dataType="json",a.data&&u.test(a.data)||u.test(a.url)){l(a,b,c);var d=/^(\w+:)?\/\/([^\/?#]+)/,e=d.exec(a.url),f=e&&(e[1]&&e[1]!==location.protocol||e[2]!==location.host);if(a.dataType="script","GET"===a.type.toUpperCase()&&f){var g=k(a,b,c);return g?g:!0}}return null}function j(a){"GET"===a.type.toUpperCase()?u.test(a.url)||(a.url+=(/\?/.test(a.url)?"&":"?")+(a.jsonp||"callback")+"=?"):a.data&&u.test(a.data)||(a.data=(a.data?a.data+"&":"")+(a.jsonp||"callback")+"=?")}function k(b,c,d){var e=d&&d.context||b,g=null;return c.response&&a.isFunction(c.response)?c.response(d):a.globalEval("object"==typeof c.responseText?"("+JSON.stringify(c.responseText)+")":"("+c.responseText+")"),setTimeout(function(){m(b,e,c),n(b,e,c)},f(c.responseTime)||0),a.Deferred&&(g=new a.Deferred,"object"==typeof c.responseText?g.resolveWith(e,[c.responseText]):g.resolveWith(e,[a.parseJSON(c.responseText)])),g}function l(a,b,c){var d=c&&c.context||a,e=a.jsonpCallback||"jsonp"+v++;a.data&&(a.data=(a.data+"").replace(u,"="+e+"$1")),a.url=a.url.replace(u,"="+e+"$1"),window[e]=window[e]||function(c){data=c,m(a,d,b),n(a,d,b),window[e]=void 0;try{delete window[e]}catch(f){}head&&head.removeChild(script)}}function m(b,c,d){b.success&&b.success.call(c,d.responseText||"",status,{}),b.global&&(b.context?a(b.context):a.event).trigger("ajaxSuccess",[{},b])}function n(b,c){b.complete&&b.complete.call(c,{},status),b.global&&(b.context?a(b.context):a.event).trigger("ajaxComplete",[{},b]),b.global&&!--a.active&&a.event.trigger("ajaxStop")}function o(b,c){var d,f,g,j;"object"==typeof b?(c=b,b=void 0):(c=c||{},c.url=b),f=a.extend(!0,{},a.ajaxSettings,c),j=function(b,d){var e=c[b.toLowerCase()];return function(){a.isFunction(e)&&e.apply(this,[].slice.call(arguments)),d["onAfter"+b]()}};for(var k=0;k<r.length;k++)if(r[k]&&(g=e(r[k],f)))return s.push(f),a.mockjaxSettings.log(g,f),f.dataType&&"JSONP"===f.dataType.toUpperCase()&&(d=i(f,g,c))?d:(g.cache=f.cache,g.timeout=f.timeout,g.global=f.global,g.isTimeout&&(g.responseTime>1?c.timeout=g.responseTime-1:(g.responseTime=2,c.timeout=1),g.isTimeout=!1),a.isFunction(g.onAfterSuccess)&&(c.success=j("Success",g)),a.isFunction(g.onAfterError)&&(c.error=j("Error",g)),a.isFunction(g.onAfterComplete)&&(c.complete=j("Complete",g)),p(g,c),function(b,c,e,f){d=q.call(a,a.extend(!0,{},e,{xhr:function(){return h(b,c,e,f)}}))}(g,f,c,r[k]),d);if(t.push(c),a.mockjaxSettings.throwUnmocked===!0)throw new Error("AJAX not mocked: "+c.url);return q.apply(a,[c])}function p(a,b){if(a.url instanceof RegExp&&a.hasOwnProperty("urlParams")){var c=a.url.exec(b.url);if(1!==c.length){c.shift();var d=0,e=c.length,f=a.urlParams.length,g=Math.min(e,f),h={};for(d;g>d;d++){var i=a.urlParams[d];h[i]=c[d]}b.urlParams=h}}}var q=a.ajax,r=[],s=[],t=[],u=/=\?(&|$)/,v=(new Date).getTime();a.extend({ajax:o}),a.mockjaxSettings={log:function(b,c){if(b.logging!==!1&&("undefined"!=typeof b.logging||a.mockjaxSettings.logging!==!1)&&window.console&&console.log){var d="MOCK "+c.type.toUpperCase()+": "+c.url,e=a.extend({},c);if("function"==typeof console.log)console.log(d,e);else try{console.log(d+" "+JSON.stringify(e))}catch(f){console.log(d)}}},logging:!0,status:200,statusText:"OK",responseTime:500,isTimeout:!1,throwUnmocked:!1,contentType:"text/plain",response:"",responseText:"",responseXML:"",proxy:"",proxyType:"GET",lastModified:null,etag:"",headers:{etag:"IJF@H#@923uf8023hFO@I#H#","content-type":"text/plain"}},a.mockjax=function(a){var b=r.length;return r[b]=a,b},a.mockjax.clear=function(a){1==arguments.length?r[a]=null:r=[],s=[],t=[]},a.mockjaxClear=function(){window.console&&window.console.warn&&window.console.warn("DEPRECATED: The $.mockjaxClear() method has been deprecated in 1.6.0. Please use $.mockjax.clear() as the older function will be removed soon!"),a.mockjax.clear()},a.mockjax.handler=function(a){return 1==arguments.length?r[a]:void 0},a.mockjax.mockedAjaxCalls=function(){return s},a.mockjax.unfiredHandlers=function(){for(var a=[],b=0,c=r.length;c>b;b++){var d=r[b];null===d||d.fired||a.push(d)}return a},a.mockjax.unmockedAjaxCalls=function(){return t}}(jQuery);