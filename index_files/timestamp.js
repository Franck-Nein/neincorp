var __wbTs=(function(){function e(f){if(typeof f=="number"){f=f.toString()}return[f.slice(-14,-10),f.slice(-10,-8),f.slice(-8,-6),f.slice(-6,-4),f.slice(-4,-2),f.slice(-2)]}var a=["January","February","March","April","May","June","July","August","September","October","November","December"];var d=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];var c={Y:function(f){return f.getUTCFullYear()},m:function(f){return f.getUTCMonth()+1},b:function(f){return d[f.getUTCMonth()]},B:function(f){return a[f.getUTCMonth()]},d:function(f){return f.getUTCDate()},H:function(f){return("0"+f.getUTCHours()).slice(-2)},M:function(f){return("0"+f.getUTCMinutes()).slice(-2)},S:function(f){return("0"+f.getUTCSeconds()).slice(-2)},"%":function(){return"%"}};function b(f){var g=e(f);return new Date(Date.UTC(g[0],g[1]-1,g[2],g[3],g[4],g[5]))}return{timestamp2datetime:b,getMonthName:function(f){return a[f]},format:function(g,f){return f.replace(/%./g,function(i){var h=c[i[1]];return h?h(b(g)):i})}}})();
