"use strict";(self.webpackChunkbeartigerproductions=self.webpackChunkbeartigerproductions||[]).push([[678],{8032:function(e,t,a){a.d(t,{L:function(){return p},M:function(){return v},P:function(){return y},S:function(){return _},_:function(){return l},a:function(){return s},b:function(){return A},g:function(){return m},h:function(){return o}});var r=a(7294),i=(a(2369),a(5697)),n=a.n(i);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},s.apply(this,arguments)}function l(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)t.indexOf(a=n[r])>=0||(i[a]=e[a]);return i}const o=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function c(e,t,a){const r={};let i="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(i="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:i,"data-gatsby-image-wrapper":"",style:r}}function A(e,t,a,r,i){return void 0===i&&(i={}),s({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:s({},i,{opacity:t?1:0})})}function m(e,t,a,r,i,n,l,o){const c={};n&&(c.backgroundColor=n,"fixed"===a?(c.width=r,c.height=i,c.backgroundColor=n,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),l&&(c.objectFit=l),o&&(c.objectPosition=o);const A=s({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:s({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return A}const d=["children"],u=function(e){let{layout:t,width:a,height:i}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:i/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+i+"'%20width='"+a+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},p=function(e){let{children:t}=e,a=l(e,d);return r.createElement(r.Fragment,null,r.createElement(u,s({},a)),t,null)},h=["src","srcSet","loading","alt","shouldLoad"],g=["fallback","sources","shouldLoad"],f=function(e){let{src:t,srcSet:a,loading:i,alt:n="",shouldLoad:o}=e,c=l(e,h);return r.createElement("img",s({},c,{decoding:"async",loading:i,src:o?t:void 0,"data-src":o?void 0:t,srcSet:o?a:void 0,"data-srcset":o?void 0:a,alt:n}))},E=function(e){let{fallback:t,sources:a=[],shouldLoad:i=!0}=e,n=l(e,g);const o=n.sizes||(null==t?void 0:t.sizes),c=r.createElement(f,s({},n,t,{sizes:o,shouldLoad:i}));return a.length?r.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:n}=e;return r.createElement("source",{key:t+"-"+n+"-"+a,type:n,media:t,srcSet:i?a:void 0,"data-srcset":i?void 0:a,sizes:o})})),c):c};var b;f.propTypes={src:i.string.isRequired,alt:i.string.isRequired,sizes:i.string,srcSet:i.string,shouldLoad:i.bool},E.displayName="Picture",E.propTypes={alt:i.string.isRequired,shouldLoad:i.bool,fallback:i.exact({src:i.string.isRequired,srcSet:i.string,sizes:i.string}),sources:i.arrayOf(i.oneOfType([i.exact({media:i.string.isRequired,type:i.string,sizes:i.string,srcSet:i.string.isRequired}),i.exact({media:i.string,type:i.string.isRequired,sizes:i.string,srcSet:i.string.isRequired})]))};const w=["fallback"],y=function(e){let{fallback:t}=e,a=l(e,w);return t?r.createElement(E,s({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",s({},a))};y.displayName="Placeholder",y.propTypes={fallback:i.string,sources:null==(b=E.propTypes)?void 0:b.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};const v=function(e){return r.createElement(r.Fragment,null,r.createElement(E,s({},e)),r.createElement("noscript",null,r.createElement(E,s({},e,{shouldLoad:!0}))))};v.displayName="MainImage",v.propTypes=E.propTypes;const N=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],C=["style","className"],j=e=>e.replace(/\n/g,""),k=function(e,t,a){for(var r=arguments.length,i=new Array(r>3?r-3:0),s=3;s<r;s++)i[s-3]=arguments[s];return e.alt||""===e.alt?n().string.apply(n(),[e,t,a].concat(i)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},x={image:n().object.isRequired,alt:k},S=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],T=["style","className"],B=new Set;let Q,R;const I=function(e){let{as:t="div",image:i,style:n,backgroundColor:A,className:m,class:d,onStartLoad:u,onLoad:p,onError:h}=e,g=l(e,S);const{width:f,height:E,layout:b}=i,w=c(f,E,b),{style:y,className:v}=w,N=l(w,T),C=(0,r.useRef)(),j=(0,r.useMemo)((()=>JSON.stringify(i.images)),[i.images]);d&&(m=d);const k=function(e,t,a){let r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height=\''+a+"'%20width='"+t+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(b,f,E);return(0,r.useEffect)((()=>{Q||(Q=a.e(731).then(a.bind(a,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return R=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=C.current.querySelector("[data-gatsby-image-ssr]");if(e&&o())return e.complete?(null==u||u({wasCached:!0}),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==u||u({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void B.add(j);if(R&&B.has(j))return;let t,r;return Q.then((e=>{let{renderImageToString:a,swapPlaceholderImage:l}=e;C.current&&(C.current.innerHTML=a(s({isLoading:!0,isLoaded:B.has(j),image:i},g)),B.has(j)||(t=requestAnimationFrame((()=>{C.current&&(r=l(C.current,j,B,n,u,p,h))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[i]),(0,r.useLayoutEffect)((()=>{B.has(j)&&R&&(C.current.innerHTML=R(s({isLoading:B.has(j),isLoaded:B.has(j),image:i},g)),null==u||u({wasCached:!0}),null==p||p({wasCached:!0}))}),[i]),(0,r.createElement)(t,s({},N,{style:s({},y,n,{backgroundColor:A}),className:v+(m?" "+m:""),ref:C,dangerouslySetInnerHTML:{__html:k},suppressHydrationWarning:!0}))},O=(0,r.memo)((function(e){return e.image?(0,r.createElement)(I,e):null}));O.propTypes=x,O.displayName="GatsbyImage";const Y=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function L(e){return function(t){let{src:a,__imageData:i,__error:n}=t,o=l(t,Y);return n&&console.warn(n),i?r.createElement(e,s({image:i},o)):(console.warn("Image not loaded",a),null)}}const D=L((function(e){let{as:t="div",className:a,class:i,style:n,image:o,loading:d="lazy",imgClassName:u,imgStyle:h,backgroundColor:g,objectFit:f,objectPosition:E}=e,b=l(e,N);if(!o)return console.warn("[gatsby-plugin-image] Missing image prop"),null;i&&(a=i),h=s({objectFit:f,objectPosition:E,backgroundColor:g},h);const{width:w,height:k,layout:x,images:S,placeholder:T,backgroundColor:B}=o,Q=c(w,k,x),{style:R,className:I}=Q,O=l(Q,C),Y={fallback:void 0,sources:[]};return S.fallback&&(Y.fallback=s({},S.fallback,{srcSet:S.fallback.srcSet?j(S.fallback.srcSet):void 0})),S.sources&&(Y.sources=S.sources.map((e=>s({},e,{srcSet:j(e.srcSet)})))),r.createElement(t,s({},O,{style:s({},R,n,{backgroundColor:g}),className:I+(a?" "+a:"")}),r.createElement(p,{layout:x,width:w,height:k},r.createElement(y,s({},m(T,!1,x,w,k,B,f,E))),r.createElement(v,s({"data-gatsby-image-ssr":"",className:u},b,A("eager"===d,!1,Y,d,h)))))})),F=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),i=2;i<a;i++)r[i-2]=arguments[i];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?n().number.apply(n(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},M=new Set(["fixed","fullWidth","constrained"]),P={src:n().string.isRequired,alt:k,width:F,height:F,sizes:n().string,layout:e=>{if(void 0!==e.layout&&!M.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}};D.displayName="StaticImage",D.propTypes=P;const _=L(O);_.displayName="StaticImage",_.propTypes=P},2369:function(e){const t=/[\p{Lu}]/u,a=/[\p{Ll}]/u,r=/^[\p{Lu}](?![\p{Lu}])/gu,i=/([\p{Alpha}\p{N}_]|$)/u,n=/[_.\- ]+/,s=new RegExp("^"+n.source),l=new RegExp(n.source+i.source,"gu"),o=new RegExp("\\d+"+i.source,"gu"),c=(e,i)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(i={pascalCase:!1,preserveConsecutiveUppercase:!1,...i},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const n=!1===i.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(i.locale),c=!1===i.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(i.locale);if(1===e.length)return i.pascalCase?c(e):n(e);return e!==n(e)&&(e=((e,r,i)=>{let n=!1,s=!1,l=!1;for(let o=0;o<e.length;o++){const c=e[o];n&&t.test(c)?(e=e.slice(0,o)+"-"+e.slice(o),n=!1,l=s,s=!0,o++):s&&l&&a.test(c)?(e=e.slice(0,o-1)+"-"+e.slice(o-1),l=s,s=!1,n=!0):(n=r(c)===c&&i(c)!==c,l=s,s=i(c)===c&&r(c)!==c)}return e})(e,n,c)),e=e.replace(s,""),e=i.preserveConsecutiveUppercase?((e,t)=>(r.lastIndex=0,e.replace(r,(e=>t(e)))))(e,n):n(e),i.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(l.lastIndex=0,o.lastIndex=0,e.replace(l,((e,a)=>t(a))).replace(o,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},5068:function(e,t,a){a.r(t),a.d(t,{default:function(){return p}});var r=a(7326),i=a(4578),n=a(7294),s=a(6234),l=a.p+"static/transparent_white-8d72b1ea25524ea3c046afa55b160f01.png";var o=e=>n.createElement("header",{id:"header",style:e.timeout?{display:"none"}:{}},n.createElement("div",{className:"logo"},n.createElement("img",{className:"logo",src:l,alt:"Logo"})),n.createElement("div",{className:"content"},n.createElement("div",{className:"inner"},n.createElement("p",null,"Founded in 2015, BearTiger Productions is an artist-driven production company that develops and produces music, film, theatre, television, radio, and digital content. BearTiger Productions has a dedicated team of professionals from across the world giving it an international flair and buzzing energy…Someplace, somewhere it’s 7 am!",n.createElement("br",null),n.createElement("br",null),"From American writers and producers to Australian and South African execs, the team prides itself on giving you something a little different from the “norm”.",n.createElement("br",null),n.createElement("br",null),"BearTiger Productions is adventurous, promising, and real.",n.createElement("p",{className:"hidden"},"We atBearTiger Productions, are part of Radio Commercial Production, TV Production, Music Video Production, and Film Production companies in Los Angeles (USA) and Australia.")))),n.createElement("nav",null,n.createElement("ul",null,n.createElement("li",null,n.createElement("button",{onClick:()=>{e.onOpenArticle("missionstatement")}},"Mission Statement")),n.createElement("li",null,n.createElement("button",{onClick:()=>{e.onOpenArticle("thecrew")}},"The Americas")),n.createElement("li",null,n.createElement("button",{onClick:()=>{e.onOpenArticle("projects")}},"Projects")),n.createElement("li",null,n.createElement("button",{onClick:()=>{e.onOpenArticle("contact")}},"Contact"))))),c=a(8032),A=a(4854);let m=function(e){function t(){return e.apply(this,arguments)||this}return(0,i.Z)(t,e),t.prototype.render=function(){let e=n.createElement("div",{className:"close",onClick:()=>{this.props.onCloseArticle()}});return n.createElement("div",{ref:this.props.setWrapperRef,id:"main",style:this.props.timeout?{display:"flex"}:{display:"none"}},n.createElement("article",{id:"missionstatement",className:("missionstatement"===this.props.article?"active":"")+" "+(this.props.articleTimeout?"timeout":""),style:{display:"none"}},n.createElement("h2",{className:"major"},"Mission Statement"),n.createElement("span",{className:"image main"},n.createElement(c.S,{src:"../images/mission2.jpg",alt:"Mission",placeholder:"blurred",__imageData:a(8731)})),n.createElement("p",null,"BearTiger Productions is committed to cultivating diverse, fresh, and relatable content. Using a range of mediums for its creative expression, their aim is to tell the greatest story and share it across the globe, to not only entertain but inspire.",n.createElement("br",null),n.createElement("br",null),"Working with talent who range from well-known to unknown, seasoned to the novice but mostly, creatives who are on the cutting edge of their craft. They are impassioned storytellers, who unapologetically bring a truthful reflection of the world around them, give a platform to the voices who have yet to be heard, and dare to dream whilst doing it."),e),n.createElement("article",{id:"thecrew",className:("thecrew"===this.props.article?"active":"")+" "+(this.props.articleTimeout?"timeout":""),style:{display:"none"}},n.createElement("h2",{className:"major"},"The Americas"),n.createElement(A.Link,{to:"https://theamericas.beartigerproductions.com/",target:"_blank",rel:"noreferrer"},n.createElement("span",{className:"image main"},n.createElement(c.S,{src:"../images/theamericas.webp",alt:"The Americas",placeholder:"blurred",__imageData:a(1275)}))),e),n.createElement("article",{id:"projects",className:("projects"===this.props.article?"active":"")+" "+(this.props.articleTimeout?"timeout":""),style:{display:"none"}},n.createElement("h2",{className:"major"},"Projects"),n.createElement("span",{className:"image main"},n.createElement(c.S,{src:"../images/projectspic.jpg",alt:"Projects",placeholder:"blurred",__imageData:a(7594)})),n.createElement("p",null,"Stay up-to-date on what we’re doing...."),n.createElement("p",null,"To submit to The Americas or for further information, please submit directly through the ",n.createElement("strong",null,n.createElement("a",{href:"https://theamericas.beartigerproductions.com/",target:"_blank",rel:"noopener noreferrer"},"website"))," or use the contact form."),n.createElement("ul",{className:"icons"},n.createElement("li",null,n.createElement("a",{href:"https://twitter.com/BearTigerInfo",className:"icon fa-twitter",target:"_blank",rel:"noopener noreferrer"},n.createElement("span",{className:"label"},"Twitter"))),n.createElement("li",null,n.createElement("a",{href:"https://www.facebook.com/beartigerproductions",className:"icon fa-facebook",target:"_blank",rel:"noopener noreferrer"},n.createElement("span",{className:"label"},"Facebook"))),n.createElement("li",null,n.createElement("a",{href:"https://www.instagram.com/beartiger.productions",className:"icon fa-instagram",target:"_blank",rel:"noopener noreferrer"},n.createElement("span",{className:"label"},"Instagram"))),n.createElement("li",null,n.createElement("a",{href:"https://www.youtube.com/channel/UCezckIi_wKkArCT_lKOjDcg",className:"icon fa-youtube",target:"_blank",rel:"noopener noreferrer"},n.createElement("span",{className:"label"},"YouTube"))),n.createElement("li",null,n.createElement("a",{href:"https://www.linkedin.com/company/beartigerproductions/about",className:"icon fa-linkedin",target:"_blank",rel:"noopener noreferrer"},n.createElement("span",{className:"label"},"LinkedIn")))),e),n.createElement("article",{id:"contact",className:("contact"===this.props.article?"active":"")+" "+(this.props.articleTimeout?"timeout":""),style:{display:"none"}},n.createElement("h2",{className:"major"},"Contact"),n.createElement("form",{method:"post",action:"https://formspree.io/f/xjvpjdvb"},n.createElement("div",{className:"field half first"},n.createElement("label",{htmlFor:"name"},"Name"),n.createElement("input",{type:"text",name:"name",id:"name"})),n.createElement("div",{className:"field half"},n.createElement("label",{htmlFor:"email"},"Email"),n.createElement("input",{type:"text",name:"_replyto",id:"email"})),n.createElement("div",{className:"field"},n.createElement("label",{htmlFor:"message"},"Message"),n.createElement("textarea",{name:"message",id:"message",rows:"4"})),n.createElement("div",{class:"g-recaptcha","data-sitekey":"6LemoxQiAAAAABBTmQBzw2WD13L3RACKV6RuGcjS"}),n.createElement("ul",{className:"actions"},n.createElement("li",null,n.createElement("input",{type:"submit",value:"Send Message",className:"special"})),n.createElement("li",null,n.createElement("input",{type:"reset",value:"Reset"})))),n.createElement("ul",{className:"icons"},n.createElement("li",null,n.createElement("a",{href:"https://twitter.com/BearTigerInfo",className:"icon fa-twitter"},n.createElement("span",{className:"label"},"Twitter"))),n.createElement("li",null,n.createElement("a",{href:"https://www.facebook.com/beartigerproductions",className:"icon fa-facebook"},n.createElement("span",{className:"label"},"Facebook"))),n.createElement("li",null,n.createElement("a",{href:"https://www.instagram.com/beartiger.productions",className:"icon fa-instagram"},n.createElement("span",{className:"label"},"Instagram")))),n.createElement("h3",null,"Locations"),n.createElement("div",null,"Sydney, Australia",n.createElement("br",null),"2130"),n.createElement("br",null),n.createElement("div",null,"Los Angeles, CA",n.createElement("br",null),"90002"),e))},t}(n.Component);var d=m;var u=e=>n.createElement("footer",{id:"footer",style:e.timeout?{display:"none"}:{}},n.createElement("p",{className:"copyright"},"© 2021 - Kai Paynter"));var p=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={isArticleVisible:!1,timeout:!1,articleTimeout:!1,article:"",loading:"is-loading"},a.handleOpenArticle=a.handleOpenArticle.bind((0,r.Z)(a)),a.handleCloseArticle=a.handleCloseArticle.bind((0,r.Z)(a)),a.setWrapperRef=a.setWrapperRef.bind((0,r.Z)(a)),a.handleClickOutside=a.handleClickOutside.bind((0,r.Z)(a)),a}(0,i.Z)(t,e);var a=t.prototype;return a.componentDidMount=function(){this.timeoutId=setTimeout((()=>{this.setState({loading:""})}),100),document.addEventListener("mousedown",this.handleClickOutside)},a.componentWillUnmount=function(){this.timeoutId&&clearTimeout(this.timeoutId),document.removeEventListener("mousedown",this.handleClickOutside)},a.setWrapperRef=function(e){this.wrapperRef=e},a.handleOpenArticle=function(e){this.setState({isArticleVisible:!this.state.isArticleVisible,article:e}),setTimeout((()=>{this.setState({timeout:!this.state.timeout})}),325),setTimeout((()=>{this.setState({articleTimeout:!this.state.articleTimeout})}),350)},a.handleCloseArticle=function(){this.setState({articleTimeout:!this.state.articleTimeout}),setTimeout((()=>{this.setState({timeout:!this.state.timeout})}),325),setTimeout((()=>{this.setState({isArticleVisible:!this.state.isArticleVisible,article:""})}),350)},a.handleClickOutside=function(e){this.wrapperRef&&!this.wrapperRef.contains(e.target)&&this.state.isArticleVisible&&this.handleCloseArticle()},a.render=function(){return n.createElement(s.Z,{location:this.props.location},n.createElement("div",{className:"body "+this.state.loading+" "+(this.state.isArticleVisible?"is-article-visible":"")},n.createElement("div",{id:"wrapper"},n.createElement(o,{onOpenArticle:this.handleOpenArticle,timeout:this.state.timeout}),n.createElement(d,{isArticleVisible:this.state.isArticleVisible,timeout:this.state.timeout,articleTimeout:this.state.articleTimeout,article:this.state.article,onCloseArticle:this.handleCloseArticle,setWrapperRef:this.setWrapperRef}),n.createElement(u,{timeout:this.state.timeout})),n.createElement("div",{id:"bg"})))},t}(n.Component)},7594:function(e){e.exports=JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAMFAv/EABYBAQEBAAAAAAAAAAAAAAAAAAIAAf/aAAwDAQACEAMQAAABY+bsKmSDb//EABkQAAMBAQEAAAAAAAAAAAAAAAECAxIAEf/aAAgBAQABBQK1smF1YBz1E00Z+Uaro3//xAAXEQEAAwAAAAAAAAAAAAAAAAAAARES/9oACAEDAQE/Acyp/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAEREv/aAAgBAgEBPwHSpUf/xAAcEAADAAEFAAAAAAAAAAAAAAAAARECEiEiMUH/2gAIAQEABj8C4y0xWqs7Q9/RRjxUP//EABsQAQADAQADAAAAAAAAAAAAAAEAESExQVFh/9oACAEBAAE/IUb2XeETFE2zYy6DfM0CxEXBrZdREKHyf//aAAwDAQACAAMAAAAQHC//xAAWEQEBAQAAAAAAAAAAAAAAAAARAAH/2gAIAQMBAT8Q0Elf/8QAFxEAAwEAAAAAAAAAAAAAAAAAARARIf/aAAgBAgEBPxAYKj//xAAcEAEAAwEAAwEAAAAAAAAAAAABABEhMUFxgbH/2gAIAQEAAT8QHAE1hAoq+bXYsZ9PJDmdbE5BOD7xcIuOPgnuOzJ13+z/2Q=="},"images":{"fallback":{"src":"/static/f77869b4b9187b23ce53d24f6a1e1f06/c592e/projectspic.jpg","srcSet":"/static/f77869b4b9187b23ce53d24f6a1e1f06/e60ed/projectspic.jpg 1296w,\\n/static/f77869b4b9187b23ce53d24f6a1e1f06/0fc69/projectspic.jpg 2592w,\\n/static/f77869b4b9187b23ce53d24f6a1e1f06/c592e/projectspic.jpg 5184w","sizes":"(min-width: 5184px) 5184px, 100vw"},"sources":[{"srcSet":"/static/f77869b4b9187b23ce53d24f6a1e1f06/95765/projectspic.webp 1296w,\\n/static/f77869b4b9187b23ce53d24f6a1e1f06/aee1a/projectspic.webp 2592w,\\n/static/f77869b4b9187b23ce53d24f6a1e1f06/7fe34/projectspic.webp 5184w","type":"image/webp","sizes":"(min-width: 5184px) 5184px, 100vw"}]},"width":5184,"height":3456}')},8731:function(e){e.exports=JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAEDAv/EABUBAQEAAAAAAAAAAAAAAAAAAAAC/9oADAMBAAIQAxAAAAFRjq5mMP/EABoQAAIDAQEAAAAAAAAAAAAAAAECAAMhEjH/2gAIAQEAAQUCFixnQwttfvAlw3//xAAWEQEBAQAAAAAAAAAAAAAAAAAAARH/2gAIAQMBAT8Bta//xAAXEQEAAwAAAAAAAAAAAAAAAAAAAQIR/9oACAECAQE/AYqx/8QAGRAAAwADAAAAAAAAAAAAAAAAAAECESFx/9oACAEBAAY/AqqkJ4NFIonh/8QAGRABAAMBAQAAAAAAAAAAAAAAAQARITFB/9oACAEBAAE/IXIF15FfZxm7FQO6yIA7mX5AuMs8n//aAAwDAQACAAMAAAAQpN//xAAXEQADAQAAAAAAAAAAAAAAAAAAAREh/9oACAEDAQE/EEzCD//EABcRAAMBAAAAAAAAAAAAAAAAAAEQESH/2gAIAQIBAT8QNdT/xAAdEAEAAgICAwAAAAAAAAAAAAABABEhMUFRYYGh/9oACAEBAAE/ED2q8O2jwzmiVZWO0g7nhUEthQ3v11GdzCF6uSMILpBtyX8n/9k="},"images":{"fallback":{"src":"/static/b88268e671d4fccc57be14280f640270/57807/mission2.jpg","srcSet":"/static/b88268e671d4fccc57be14280f640270/9184f/mission2.jpg 984w,\\n/static/b88268e671d4fccc57be14280f640270/61706/mission2.jpg 1968w,\\n/static/b88268e671d4fccc57be14280f640270/57807/mission2.jpg 3936w","sizes":"(min-width: 3936px) 3936px, 100vw"},"sources":[{"srcSet":"/static/b88268e671d4fccc57be14280f640270/fce7a/mission2.webp 984w,\\n/static/b88268e671d4fccc57be14280f640270/78336/mission2.webp 1968w,\\n/static/b88268e671d4fccc57be14280f640270/f68ea/mission2.webp 3936w","type":"image/webp","sizes":"(min-width: 3936px) 3936px, 100vw"}]},"width":3936,"height":2624}')},1275:function(e){e.exports=JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/webp;base64,UklGRoYAAABXRUJQVlA4IHoAAAAwBACdASoUAA8APtFUo0uoJKMhsAgBABoJZgCdMoRwACTUopn8+7zSuxAA/iWjKuH9skoT71vl2VOfbCd/d+7TAMc4CCefCvcRv7l+X8BTpeF4SkebvYn7OqD7Ecax2hoNt5E7rFD3TAI3y7OgrCMYB5w/xcZOiyAAAA=="},"images":{"fallback":{"src":"/static/c99055a24e785731bcd1af8ac4c09931/dbbcf/theamericas.webp","srcSet":"/static/c99055a24e785731bcd1af8ac4c09931/fe584/theamericas.webp 301w,\\n/static/c99055a24e785731bcd1af8ac4c09931/b77e5/theamericas.webp 602w,\\n/static/c99055a24e785731bcd1af8ac4c09931/dbbcf/theamericas.webp 1203w","sizes":"(min-width: 1203px) 1203px, 100vw"},"sources":[]},"width":1203,"height":902}')}}]);
//# sourceMappingURL=component---src-pages-index-js-4990b9f381c61de7e6ba.js.map