var WB_wombat_replayServer;var WB_wombat_replayPrefix;var WB_wombat_replayDatePrefix;var WB_wombat_captureDatePart;var WB_wombat_origHost;var WB_wombat_self_location;var WB_wombat_top_location;var WB_wombat_opener_location;var WB_wombat_document_domain;function jQueryREWRITTEN_BY_WAYBACK(){o=arguments}function WB_Get_Domain(c){var b=document.createElement("a");b.href=c;return b.protocol+"//"+b.hostname}function WB_StripPort(b){var a=b.match(/^http:\/\/[\w\d@.-]+:\d+/);if(a){var c=a[0].substr(0,a[0].lastIndexOf(":"));return c+b.substr(a[0].length)}return b}function WB_IsHostUrl(b){if(b.indexOf("www.")==0){return true}var a=b.match(/^[\w-]+(\.[\w-_]+)+(:\d+)(\/|$)/);if(a&&(a[0].length<64)){return true}a=b.match(/^\d+\.\d+\.\d+\.\d+(:\d+)?(\/|$)/);if(a&&(a[0].length<64)){return true}return false}function WB_RewriteUrl(b){var c="http://";var a="https://";if(!b){return b}if((typeof b)!="string"){b=b.toString()}if(b.indexOf(WB_wombat_replayServer)==0){return b}if(WB_IsRelativeUrl(b)){if(b.indexOf(WB_wombat_captureDatePart)>=0){return b}return WB_wombat_replayDatePrefix+WB_wombat_origHost+b}if(b.indexOf(c)==0){return WB_wombat_replayDatePrefix.replace("https://","http://")+b}if(b.indexOf(a)==0){return WB_wombat_replayDatePrefix.replace("http://","https://")+b}if(WB_IsHostUrl(b)){return WB_wombat_replayDatePrefix+c+b}return b}function WB_IsRelativeUrl(a){if(a){var b=(typeof a);if(b=="string"){return(a.charAt(0)=="/"||a.charAt(0)==".")}else{if(b=="object"){return(a.href&&(a.href.charAt(0)=="/"||a.charAt(0)=="."))}}}return false}function WB_UnRewriteUrl(a){return WB_ExtractOrig(a)}function WB_CopyObjectFields(b){var a={};for(prop in b){if((typeof b[prop])!="function"){a[prop]=b[prop]}}return a}function WB_ExtractOrigNoProtocol(a){var b=WB_ExtractOrig(a);if(b.slice(0,5)=="http:"){return b.slice(5)}else{if(b.slice(0,6)=="https:"){return b.slice(6)}}return b}function WB_ExtractOrig(a){if(!a){return""}a=a.toString();var b=a.indexOf("/http",1);if(b>0){return a.substr(b+1)}else{return a}}function WB_GetPath(c){var b=document.createElement("a");b.href=c;return b.pathname}function WB_ExtractOrigPathname(b){var a=WB_ExtractOrig(b);return WB_GetPath(a)}function WB_ExtractOrigPathnameAndQueryString(d){var c=WB_ExtractOrig(d);var b=document.createElement("a");b.href=c;if(WB_EndsWith(c,"?")){return b.pathname+"?"}return b.pathname+b.search}function WB_EndsWith(b,a){return b.indexOf(a,b.length-a.length)!==-1}function WB_ExtractOrigSearch(d){var c=WB_ExtractOrig(d);var b=document.createElement("a");b.href=c;return b.search}function WB_fixProtocol(a){if(!a){return""}if(location.protocol=="https:"){if(a.slice(0,5)=="http:"){a="https:"+a.slice(5)}}return a}function WB_CopyLocationObj(b){var a=WB_CopyObjectFields(b);a._origLoc=b;a._origHref=b.href;a.replace=function(c){this._origLoc.replace(WB_RewriteUrl(c))};a.assign=function(c){this._origLoc.assign(WB_RewriteUrl(c))};a.reload=function(){this._origLoc.reload()};a.href=WB_fixProtocol(WB_ExtractOrig(a._origHref));a.pathname=WB_ExtractOrigPathname(a._origHref);a.search=WB_ExtractOrigSearch(a._origHref);a.toString=function(){return this.href};a.hash=b.hash;a.lasthash=b.hash;a.lastSearch=a.search;return a}function WB_CreateElementNS(b,a){b=WB_UnRewriteUrl(b);return document.createElementNS(b,a)}function WB_wombat_updateLoc(d,a,c,b){if(d){if(WB_IsRelativeUrl(d)){if(WB_ExtractOrigPathnameAndQueryString(a)!=d){c.href=WB_RewriteUrl(d);return true}}else{if(WB_ExtractOrigNoProtocol(a)!=WB_ExtractOrigNoProtocol(d)){c.href=WB_RewriteUrl(d);return true}}}if(b){if(c.search!=b){console.log("replacing browser location.search with %s",b);c.search=b}}return false}function WB_wombat_checkLocationChange(f,c){var e=null;var b=(typeof f);var a=(c?window.top.location:window.location);if(b=="string"){e=WB_wombat_updateLoc(f,a.href,a)}else{if(b=="object"){var d=f.search!=f.lastSearch?f.search:null;e=WB_wombat_updateLoc(f.href,f._origHref,a,d)}}if(WB_wombat_self_location.hash!=WB_wombat_self_location.lasthash){window.location.hash=WB_wombat_self_location.hash}else{if(window.location.hash!=WB_wombat_self_location.hash){WB_wombat_self_location.hash=window.location.hash}}WB_wombat_self_location.lasthash=WB_wombat_self_location.hash;return e}var wombat_updating=false;function WB_wombat_checkLocations(){if(wombat_updating){return false}wombat_updating=true;var a=WB_wombat_checkLocationChange(document.WB_wombat_self_location,false);if(!a){a=WB_wombat_checkLocationChange(WB_wombat_self_location,false)}var b=null;if(document.WB_wombat_self_location!=WB_wombat_top_location){b=WB_wombat_checkLocationChange(WB_wombat_top_location,true);if(!b){if(WB_wombat_self_location!=WB_wombat_top_location){b=WB_wombat_checkLocationChange(WB_wombat_top_location,true)}}}if(a||b){return false}wombat_updating=false}function WB_wombat_Override_LocalStorage(){Object.defineProperty(window,"localStorage",new (function(){var a=[],b={};Object.defineProperty(b,"getItem",{value:function(c){return c?(this[c]?this[c]:null):null},writable:false,configurable:false,enumerable:false});Object.defineProperty(b,"key",{value:function(c){return a[c]},writable:false,configurable:false,enumerable:false});Object.defineProperty(b,"setItem",{value:function(c,d){if(!c){return}document.cookie=escape(c)+"="+escape(d)+"; expires=Tue, 19 Jan 2038 03:14:07 GMT; path=/"},writable:false,configurable:false,enumerable:false});Object.defineProperty(b,"length",{get:function(){return a.length},configurable:false,enumerable:false});Object.defineProperty(b,"removeItem",{value:function(c){if(!c){return}document.cookie=escape(c)+"=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/"},writable:false,configurable:false,enumerable:false});this.get=function(){var c;for(var g in b){c=a.indexOf(g);if(c===-1){b.setItem(g,b[g])}else{a.splice(c,1)}delete b[g]}for(a;a.length>0;a.splice(0,1)){b.removeItem(a[0])}for(var d,e,f=0,h=document.cookie.split(/\s*;\s*/);f<h.length;f++){d=h[f].split(/\s*=\s*/);if(d.length>1){b[e=unescape(d[0])]=unescape(d[1]);a.push(e)}}return b};this.configurable=false;this.enumerable=true})())}function WB_wombat_Init(b,l,f){WB_wombat_replayServer=location.protocol+"//"+location.host;try{var j=/https?:\/\/wayback\..*archive-it\.org\/([\d]+(?:-test)?)/.exec(b)[1];WB_wombat_replayPrefix=WB_wombat_replayServer+"/"+j+"/"}catch(k){WB_wombat_replayPrefix=b}WB_wombat_replayDatePrefix=WB_wombat_replayPrefix+l+"/";WB_wombat_captureDatePart="/"+l+"/";WB_wombat_origHost="http://"+f;WB_wombat_self_location=WB_CopyLocationObj(window.self.location);WB_wombat_top_location=((window.self.location!=window.top.location)?WB_CopyLocationObj(window.top.location):WB_wombat_self_location);WB_wombat_opener_location=null;try{WB_wombat_opener_location=(window.opener?WB_CopyLocationObj(window.opener.location):null)}catch(c){console.log(c)}WB_wombat_document_domain=f;document.WB_wombat_self_location=WB_wombat_self_location;var d=window.open;window.open=function(n,m,e){var p=d(n,m,e);p.WB_wombat_self_location=p.self.location;return p};var i=history.pushState;history.pushState=function(m,n,e){var p=null;if(e){p=WB_GetPath(WB_RewriteUrl(WB_GetPath(e)))+WB_ExtractOrigSearch(e)}if(m){if(m.path){m.path=WB_GetPath(WB_RewriteUrl(WB_GetPath(m.path)))+WB_ExtractOrigSearch(m.path)}}i.call(history,m,n,p)};var h=history.replaceState;history.replaceState=function(m,n,e){var p=null;if(e){p=WB_GetPath(WB_RewriteUrl(WB_GetPath(e)))+WB_ExtractOrigSearch(e)}if(m){if(m.path){m.path=WB_GetPath(WB_RewriteUrl(WB_GetPath(m.path)))+WB_ExtractOrigSearch(m.path)}}h.call(history,m,n,p)};window.originalPostMessageFunction=window.postMessage;window.WB_PostMessage_Fixup=function(p,n,m,e){p.originalPostMessageFunction.call(p,n,m,e)};window.WB_PostMessage=function(m,p,n,e){var q;if(n){q=WB_Get_Domain(WB_RewriteUrl(n))}if(window!==m){m.WB_PostMessage_Fixup(window,p,q,e)}else{window.originalPostMessageFunction.call(window,p,q,e)}};document.WB_wombat_self_location=WB_wombat_self_location;window.onunload=function(){};WB_Wombat_SetCookies(WB_wombat_self_location._origHref,location.protocol+"//"+f,b.split("/")[3],l);try{WB_wombat_Override_LocalStorage()}catch(g){console.log("WB_wombat_Override_LocalStorage error: "+g)}var a=window.XMLHttpRequest.prototype.open;window.XMLHttpRequest.prototype.open=function(){if((this.readyState==0||this.readyState==1)&&(arguments[1].indexOf(WB_wombat_replayPrefix)==0||arguments[1].indexOf("/")==0)){this.withCredentials=true}return a.apply(this,[].slice.call(arguments))}}function WB_Wombat_IsEmbedded(){return window.self!==window.top}function WB_Wombat_SetCookies(a,c,d,b){if(!WB_Wombat_IsEmbedded()){document.cookie="wayback.initiatingpage="+encodeURIComponent(a)+"; path=/"}document.cookie="wayback.archivalhost="+encodeURIComponent(c)+"; path=/";document.cookie="wayback.collectionid="+d+"; path=/";document.cookie="wayback.timestamp="+b+"; path=/"}Function.prototype.clone=function(){var b=this;if(this.__isClone){b=this.__clonedFrom}var a=function(){return b.apply(this,arguments)};for(var c in this){a[c]=this[c]}a.__isClone=true;a.__clonedFrom=b;return a};setTimeout(WB_wombat_checkLocations,100);setInterval(WB_wombat_checkLocations,500);