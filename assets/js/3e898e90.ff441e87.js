(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[331],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=u(r),m=o,f=d["".concat(l,".").concat(m)]||d[m]||s[m]||i;return r?n.createElement(f,c(c({ref:t},p),{},{components:r})):n.createElement(f,c({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,c=new Array(i);c[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var u=2;u<i;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3611:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return c},metadata:function(){return a},toc:function(){return l},default:function(){return p}});var n=r(2122),o=r(9756),i=(r(7294),r(3905)),c={id:"docker-5",title:"Chapter 4. Working with storage and volumes"},a={unversionedId:"docker-5",id:"docker-5",isDocsHomePage:!1,title:"Chapter 4. Working with storage and volumes",description:"- \u5c0e\u8b80\u9032\u5ea6\u8868",source:"@site/docs/docker-5.md",sourceDirName:".",slug:"/docker-5",permalink:"/study-circle/docs/docker-5",editUrl:"https://github.com/NCNU-OpenSource/study-circle/edit/src/docs/docker-5.md",version:"current",frontMatter:{id:"docker-5",title:"Chapter 4. Working with storage and volumes"},sidebar:"docs",previous:{title:"Chapter 5. Single-host networking",permalink:"/study-circle/docs/docker-4"}},l=[{value:"\u4e3b\u984c/\u5206\u4eab\u8005",id:"\u4e3b\u984c\u5206\u4eab\u8005",children:[]},{value:"\u6295\u5f71\u7247",id:"\u6295\u5f71\u7247",children:[]},{value:"\u9304\u5f71\u5f71\u7247",id:"\u9304\u5f71\u5f71\u7247",children:[]},{value:"\u804a\u5929\u5ba4\u7d00\u9304",id:"\u804a\u5929\u5ba4\u7d00\u9304",children:[]}],u={toc:l};function p(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.google.com/spreadsheets/d/1xjz22UDz_vKW92dJpnGysNCtFiSCYz_wbkHD4B1EQ-0/edit#gid=1726791362"},"\u5c0e\u8b80\u9032\u5ea6\u8868")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://hackmd.io/@ncnu-opensource/linux-study-circle/"},"\u7dda\u4e0a\u5171\u7b46"))),(0,i.kt)("h2",{id:"\u4e3b\u984c\u5206\u4eab\u8005"},"\u4e3b\u984c/\u5206\u4eab\u8005"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u6642\u9593\uff1a2021-08-07"),(0,i.kt)("li",{parentName:"ul"},"\u66f8\u7c4d\uff1aDocker in Action 2nd edition"),(0,i.kt)("li",{parentName:"ul"},"\u5c0e\u8b80\u4e3b\u984c\uff1aChapter 4. Working with storage and volumes"),(0,i.kt)("li",{parentName:"ul"},"\u5c0e\u8b80\u8005\uff1a@safefly_Tsai")),(0,i.kt)("h2",{id:"\u6295\u5f71\u7247"},"\u6295\u5f71\u7247"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://hackmd.io/@ncnu-opensource/linux-study-circle/%2F%40safefly%2FSJvoYEGyt"},"https://hackmd.io/@ncnu-opensource/linux-study-circle/%2F%40safefly%2FSJvoYEGyt")),(0,i.kt)("li",{parentName:"ul"},"\u8a0e\u8ad6\u7d00\u9304\uff1a ",(0,i.kt)("a",{parentName:"li",href:"https://hackmd.io/@ncnu-opensource/linux-study-circle/%2F%40ncnu-opensource%2FSyBf5q50O"},"https://hackmd.io/@ncnu-opensource/linux-study-circle/%2F%40ncnu-opensource%2FSyBf5q50O"))),(0,i.kt)("h2",{id:"\u9304\u5f71\u5f71\u7247"},"\u9304\u5f71\u5f71\u7247"),(0,i.kt)("iframe",{width:"560",height:"315",src:"https://youtu.be/kwyIYh39vaY",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,i.kt)("h2",{id:"\u804a\u5929\u5ba4\u7d00\u9304"},"\u804a\u5929\u5ba4\u7d00\u9304"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"00:37:38.511,00:37:41.511\nJackKuo: \u6574\u7406\u5f97\u5f88\u68d2 \ud83d\udc4f\ud83d\udc4f\ud83d\udc4f\ud83d\udc4f\n\n00:38:04.347,00:38:07.347\n\u5f35\u9038\u4e8e: \u770b\u6574\u7406\u51fa\u4f86\u7684\u6587\u4ef6\u5c31\u5f88\u6e05\u695a\u4e86 \u8b9a\u8b9a~\n\n00:50:46.066,00:50:49.066\n\u5f35\u9038\u4e8e: https://docs.docker.com/develop/develop-images/multistage-build/\n\n00:51:09.068,00:51:12.068\nJackKuo: \u4f7f\u7528\u5169\u500b container \u505a\u4e8b\uff0c\u4e00\u500b compile\uff0c\u4e00\u500b\u57f7\u884c\n\n00:52:44.492,00:52:47.492\n\u5f35\u9038\u4e8e: \u9084\u53ef\u4ee5\u642d\u914d https://docs.docker.com/develop/develop-images/build_enhancements/\n\u5e73\u884c\u53bb build image\n\n00:53:34.833,00:53:37.833\nOliver Wang: squash\n\n00:54:04.419,00:54:07.419\nJackKuo: https://blog.codacy.com/five-ways-to-slim-your-docker-images/\n\n00:58:23.083,00:58:26.083\n\u6797\u54f2\u5b8f: \u4e7eXDD\n")))}p.isMDXComponent=!0}}]);