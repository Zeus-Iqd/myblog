(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{263:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return h});var n=a(21),r=a.n(n),i=a(0),o=a.n(i),c=a(273),l=a.n(c),p=a(300),s=a(348),m=a(347),u=a(269),f=a.n(u),g=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.allMarkdownRemark.edges;return o.a.createElement(p.a,{location:this.props.location},o.a.createElement("div",{className:"index-container"},o.a.createElement(l.a,null,o.a.createElement("title",null,f.a.siteTitle),o.a.createElement("link",{rel:"canonical",href:""+f.a.siteUrl})),o.a.createElement(m.a,{postEdges:e}),o.a.createElement(s.a,{postEdges:e})))},t}(o.a.Component);t.default=g;var h="1014838814"},299:function(e,t,a){var n,r,i;i=function(){return function(){return function(e){var t=[];if(e[0].match(/^[^/:]+:\/*$/)&&e.length>1){var a=e.shift();e[0]=a+e[0]}e[0].match(/^file:\/\/\//)?e[0]=e[0].replace(/^([^/:]+):\/*/,"$1:///"):e[0]=e[0].replace(/^([^/:]+):\/*/,"$1://");for(var n=0;n<e.length;n++){var r=e[n];if("string"!=typeof r)throw new TypeError("Url must be a string. Received "+r);""!==r&&(n>0&&(r=r.replace(/^[\/]+/,"")),r=n<e.length-1?r.replace(/[\/]+$/,""):r.replace(/[\/]+$/,"/"),t.push(r))}var i=t.join("/"),o=(i=i.replace(/\/(\?|&|#[^!])/g,"$1")).split("?");return o.shift()+(o.length>0?"?":"")+o.join("&")}("object"==typeof arguments[0]?arguments[0]:[].slice.call(arguments))}},void 0!==e&&e.exports?e.exports=i():void 0===(r="function"==typeof(n=i)?n.call(t,a,t,e):n)||(e.exports=r)},347:function(e,t,a){"use strict";var n=a(21),r=a.n(n),i=a(0),o=a.n(i),c=a(273),l=a.n(c),p=a(299),s=a.n(p),m=a(269),u=a.n(m),f=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e,t,a,n,r=this.props,i=r.postNode,c=r.postPath,p=r.postSEO;if(p){var m=i.frontmatter;e=m.title,t=m.description?m.description:i.excerpt,a=m.cover,n=s()(u.a.siteUrl,u.a.pathPrefix,c)}else e=u.a.siteTitle,t=u.a.siteDescription,a=u.a.siteLogo;a=s()(u.a.siteUrl,u.a.pathPrefix,a);var f=s()(u.a.siteUrl,u.a.pathPrefix),g=[{"@context":"http://schema.org","@type":"WebSite",url:f,name:e,alternateName:u.a.siteTitleAlt?u.a.siteTitleAlt:""}];return p&&g.push([{"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":n,name:e,image:a}}]},{"@context":"http://schema.org","@type":"BlogPosting",url:f,name:e,alternateName:u.a.siteTitleAlt?u.a.siteTitleAlt:"",headline:e,image:{"@type":"ImageObject",url:a},description:t}]),o.a.createElement(l.a,null,o.a.createElement("meta",{name:"description",content:t}),o.a.createElement("meta",{name:"image",content:a}),o.a.createElement("script",{type:"application/ld+json"},JSON.stringify(g)),o.a.createElement("meta",{property:"og:url",content:p?n:f}),p?o.a.createElement("meta",{property:"og:type",content:"article"}):null,o.a.createElement("meta",{property:"og:title",content:e}),o.a.createElement("meta",{property:"og:description",content:t}),o.a.createElement("meta",{property:"og:image",content:a}),o.a.createElement("meta",{property:"fb:app_id",content:u.a.siteFBAppID?u.a.siteFBAppID:""}),o.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),o.a.createElement("meta",{name:"twitter:creator",content:u.a.userTwitter?u.a.userTwitter:""}),o.a.createElement("meta",{name:"twitter:title",content:e}),o.a.createElement("meta",{name:"twitter:description",content:t}),o.a.createElement("meta",{name:"twitter:image",content:a}))},t}(i.Component);t.a=f}}]);
//# sourceMappingURL=component---src-pages-index-jsx-f49c21bef62732c7f1d8.js.map