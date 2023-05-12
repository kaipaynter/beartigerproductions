"use strict";(self.webpackChunkbeartigerproductions=self.webpackChunkbeartigerproductions||[]).push([[678],{8032:function(e,t,a){a.d(t,{L:function(){return p},M:function(){return j},P:function(){return y},S:function(){return z},_:function(){return s},a:function(){return n},b:function(){return c},g:function(){return m},h:function(){return l}});var r=a(7294),i=(a(2369),a(5697)),A=a.n(i);function n(){return n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},n.apply(this,arguments)}function s(e,t){if(null==e)return{};var a,r,i={},A=Object.keys(e);for(r=0;r<A.length;r++)t.indexOf(a=A[r])>=0||(i[a]=e[a]);return i}const l=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function o(e,t,a){const r={};let i="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(i="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:i,"data-gatsby-image-wrapper":"",style:r}}function c(e,t,a,r,i){return void 0===i&&(i={}),n({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:n({},i,{opacity:t?1:0})})}function m(e,t,a,r,i,A,s,l){const o={};A&&(o.backgroundColor=A,"fixed"===a?(o.width=r,o.height=i,o.backgroundColor=A,o.position="relative"):("constrained"===a||"fullWidth"===a)&&(o.position="absolute",o.top=0,o.left=0,o.bottom=0,o.right=0)),s&&(o.objectFit=s),l&&(o.objectPosition=l);const c=n({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:n({opacity:t?0:1,transition:"opacity 500ms linear"},o)});return c}const d=["children"],u=function(e){let{layout:t,width:a,height:i}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:i/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+i+"'%20width='"+a+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},p=function(e){let{children:t}=e,a=s(e,d);return r.createElement(r.Fragment,null,r.createElement(u,n({},a)),t,null)},h=["src","srcSet","loading","alt","shouldLoad"],g=["fallback","sources","shouldLoad"],E=function(e){let{src:t,srcSet:a,loading:i,alt:A="",shouldLoad:l}=e,o=s(e,h);return r.createElement("img",n({},o,{decoding:"async",loading:i,src:l?t:void 0,"data-src":l?void 0:t,srcSet:l?a:void 0,"data-srcset":l?void 0:a,alt:A}))},f=function(e){let{fallback:t,sources:a=[],shouldLoad:i=!0}=e,A=s(e,g);const l=A.sizes||(null==t?void 0:t.sizes),o=r.createElement(E,n({},A,t,{sizes:l,shouldLoad:i}));return a.length?r.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:A}=e;return r.createElement("source",{key:t+"-"+A+"-"+a,type:A,media:t,srcSet:i?a:void 0,"data-srcset":i?void 0:a,sizes:l})})),o):o};var b;E.propTypes={src:i.string.isRequired,alt:i.string.isRequired,sizes:i.string,srcSet:i.string,shouldLoad:i.bool},f.displayName="Picture",f.propTypes={alt:i.string.isRequired,shouldLoad:i.bool,fallback:i.exact({src:i.string.isRequired,srcSet:i.string,sizes:i.string}),sources:i.arrayOf(i.oneOfType([i.exact({media:i.string.isRequired,type:i.string,sizes:i.string,srcSet:i.string.isRequired}),i.exact({media:i.string,type:i.string.isRequired,sizes:i.string,srcSet:i.string.isRequired})]))};const w=["fallback"],y=function(e){let{fallback:t}=e,a=s(e,w);return t?r.createElement(f,n({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",n({},a))};y.displayName="Placeholder",y.propTypes={fallback:i.string,sources:null==(b=f.propTypes)?void 0:b.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};const j=function(e){return r.createElement(r.Fragment,null,r.createElement(f,n({},e)),r.createElement("noscript",null,r.createElement(f,n({},e,{shouldLoad:!0}))))};j.displayName="MainImage",j.propTypes=f.propTypes;const N=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],v=["style","className"],C=e=>e.replace(/\n/g,""),B=function(e,t,a){for(var r=arguments.length,i=new Array(r>3?r-3:0),n=3;n<r;n++)i[n-3]=arguments[n];return e.alt||""===e.alt?A().string.apply(A(),[e,t,a].concat(i)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},Q={image:A().object.isRequired,alt:B},x=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],S=["style","className"],k=new Set;let T,R;const I=function(e){let{as:t="div",image:i,style:A,backgroundColor:c,className:m,class:d,onStartLoad:u,onLoad:p,onError:h}=e,g=s(e,x);const{width:E,height:f,layout:b}=i,w=o(E,f,b),{style:y,className:j}=w,N=s(w,S),v=(0,r.useRef)(),C=(0,r.useMemo)((()=>JSON.stringify(i.images)),[i.images]);d&&(m=d);const B=function(e,t,a){let r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height=\''+a+"'%20width='"+t+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(b,E,f);return(0,r.useEffect)((()=>{T||(T=a.e(731).then(a.bind(a,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return R=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=v.current.querySelector("[data-gatsby-image-ssr]");if(e&&l())return e.complete?(null==u||u({wasCached:!0}),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==u||u({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void k.add(C);if(R&&k.has(C))return;let t,r;return T.then((e=>{let{renderImageToString:a,swapPlaceholderImage:s}=e;v.current&&(v.current.innerHTML=a(n({isLoading:!0,isLoaded:k.has(C),image:i},g)),k.has(C)||(t=requestAnimationFrame((()=>{v.current&&(r=s(v.current,C,k,A,u,p,h))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[i]),(0,r.useLayoutEffect)((()=>{k.has(C)&&R&&(v.current.innerHTML=R(n({isLoading:k.has(C),isLoaded:k.has(C),image:i},g)),null==u||u({wasCached:!0}),null==p||p({wasCached:!0}))}),[i]),(0,r.createElement)(t,n({},N,{style:n({},y,A,{backgroundColor:c}),className:j+(m?" "+m:""),ref:v,dangerouslySetInnerHTML:{__html:B},suppressHydrationWarning:!0}))},Y=(0,r.memo)((function(e){return e.image?(0,r.createElement)(I,e):null}));Y.propTypes=Q,Y.displayName="GatsbyImage";const D=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function O(e){return function(t){let{src:a,__imageData:i,__error:A}=t,l=s(t,D);return A&&console.warn(A),i?r.createElement(e,n({image:i},l)):(console.warn("Image not loaded",a),null)}}const L=O((function(e){let{as:t="div",className:a,class:i,style:A,image:l,loading:d="lazy",imgClassName:u,imgStyle:h,backgroundColor:g,objectFit:E,objectPosition:f}=e,b=s(e,N);if(!l)return console.warn("[gatsby-plugin-image] Missing image prop"),null;i&&(a=i),h=n({objectFit:E,objectPosition:f,backgroundColor:g},h);const{width:w,height:B,layout:Q,images:x,placeholder:S,backgroundColor:k}=l,T=o(w,B,Q),{style:R,className:I}=T,Y=s(T,v),D={fallback:void 0,sources:[]};return x.fallback&&(D.fallback=n({},x.fallback,{srcSet:x.fallback.srcSet?C(x.fallback.srcSet):void 0})),x.sources&&(D.sources=x.sources.map((e=>n({},e,{srcSet:C(e.srcSet)})))),r.createElement(t,n({},Y,{style:n({},R,A,{backgroundColor:g}),className:I+(a?" "+a:"")}),r.createElement(p,{layout:Q,width:w,height:B},r.createElement(y,n({},m(S,!1,Q,w,B,k,E,f))),r.createElement(j,n({"data-gatsby-image-ssr":"",className:u},b,c("eager"===d,!1,D,d,h)))))})),F=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),i=2;i<a;i++)r[i-2]=arguments[i];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?A().number.apply(A(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},M=new Set(["fixed","fullWidth","constrained"]),P={src:A().string.isRequired,alt:B,width:F,height:F,sizes:A().string,layout:e=>{if(void 0!==e.layout&&!M.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}};L.displayName="StaticImage",L.propTypes=P;const z=O(Y);z.displayName="StaticImage",z.propTypes=P},2369:function(e){const t=/[\p{Lu}]/u,a=/[\p{Ll}]/u,r=/^[\p{Lu}](?![\p{Lu}])/gu,i=/([\p{Alpha}\p{N}_]|$)/u,A=/[_.\- ]+/,n=new RegExp("^"+A.source),s=new RegExp(A.source+i.source,"gu"),l=new RegExp("\\d+"+i.source,"gu"),o=(e,i)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(i={pascalCase:!1,preserveConsecutiveUppercase:!1,...i},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const A=!1===i.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(i.locale),o=!1===i.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(i.locale);if(1===e.length)return i.pascalCase?o(e):A(e);return e!==A(e)&&(e=((e,r,i)=>{let A=!1,n=!1,s=!1;for(let l=0;l<e.length;l++){const o=e[l];A&&t.test(o)?(e=e.slice(0,l)+"-"+e.slice(l),A=!1,s=n,n=!0,l++):n&&s&&a.test(o)?(e=e.slice(0,l-1)+"-"+e.slice(l-1),s=n,n=!1,A=!0):(A=r(o)===o&&i(o)!==o,s=n,n=i(o)===o&&r(o)!==o)}return e})(e,A,o)),e=e.replace(n,""),e=i.preserveConsecutiveUppercase?((e,t)=>(r.lastIndex=0,e.replace(r,(e=>t(e)))))(e,A):A(e),i.pascalCase&&(e=o(e.charAt(0))+e.slice(1)),((e,t)=>(s.lastIndex=0,l.lastIndex=0,e.replace(s,((e,a)=>t(a))).replace(l,(e=>t(e)))))(e,o)};e.exports=o,e.exports.default=o},5068:function(e,t,a){a.r(t),a.d(t,{default:function(){return p}});var r=a(7326),i=a(4578),A=a(7294),n=a(6234),s=a.p+"static/transparent_white-8d72b1ea25524ea3c046afa55b160f01.png";var l=e=>A.createElement("header",{id:"header",style:e.timeout?{display:"none"}:{}},A.createElement("div",{className:"logo"},A.createElement("img",{className:"logo",src:s,alt:"Logo"})),A.createElement("div",{className:"content"},A.createElement("div",{className:"inner"},A.createElement("p",null,"Founded in 2015, BearTiger Productions is an artist-driven production company that develops and produces music, film, theatre, television, radio, and digital content. BearTiger Productions has a dedicated team of professionals from across the world giving it an international flair and buzzing energy…Someplace, somewhere it’s 7 am!",A.createElement("br",null),A.createElement("br",null),"From American writers and producers to Australian and South African execs, the team prides itself on giving you something a little different from the “norm”.",A.createElement("br",null),A.createElement("br",null),"BearTiger Productions is adventurous, promising, and real.",A.createElement("p",{className:"hidden"},"We atBearTiger Productions, are part of Radio Commercial Production, TV Production, Music Video Production, and Film Production companies in Los Angeles (USA) and Australia.")))),A.createElement("nav",null,A.createElement("ul",null,A.createElement("li",null,A.createElement("button",{onClick:()=>{e.onOpenArticle("missionstatement")}},"Mission Statement")),A.createElement("li",null,A.createElement("button",{onClick:()=>{e.onOpenArticle("thecrew")}},"The Americas")),A.createElement("li",null,A.createElement("button",{onClick:()=>{e.onOpenArticle("projects")}},"Projects")),A.createElement("li",null,A.createElement("button",{onClick:()=>{e.onOpenArticle("contact")}},"Contact"))))),o=a(8032),c=a(4854);let m=function(e){function t(){return e.apply(this,arguments)||this}return(0,i.Z)(t,e),t.prototype.render=function(){let e=A.createElement("div",{className:"close",onClick:()=>{this.props.onCloseArticle()}});return A.createElement("div",{ref:this.props.setWrapperRef,id:"main",style:this.props.timeout?{display:"flex"}:{display:"none"}},A.createElement("article",{id:"missionstatement",className:("missionstatement"===this.props.article?"active":"")+" "+(this.props.articleTimeout?"timeout":""),style:{display:"none"}},A.createElement("h2",{className:"major"},"Mission Statement"),A.createElement("span",{className:"image main"},A.createElement(o.S,{src:"../images/mission2.jpg",alt:"Mission",placeholder:"blurred",__imageData:a(8731)})),A.createElement("p",null,"BearTiger Productions is committed to cultivating diverse, fresh, and relatable content. Using a range of mediums for its creative expression, their aim is to tell the greatest story and share it across the globe, to not only entertain but inspire.",A.createElement("br",null),A.createElement("br",null),"Working with talent who range from well-known to unknown, seasoned to the novice but mostly, creatives who are on the cutting edge of their craft. They are impassioned storytellers, who unapologetically bring a truthful reflection of the world around them, give a platform to the voices who have yet to be heard, and dare to dream whilst doing it."),e),A.createElement("article",{id:"thecrew",className:("thecrew"===this.props.article?"active":"")+" "+(this.props.articleTimeout?"timeout":""),style:{display:"none"}},A.createElement("h2",{className:"major"},"The Americas"),A.createElement(c.Link,{to:"https://theamericas.beartigerproductions.com/",target:"_blank",rel:"noreferrer"},A.createElement("span",{className:"image main"},A.createElement(o.S,{src:"https://shorturl.at/uCIKS",alt:"The Americas",placeholder:"blurred",__imageData:a(3331)}))),e),A.createElement("article",{id:"projects",className:("projects"===this.props.article?"active":"")+" "+(this.props.articleTimeout?"timeout":""),style:{display:"none"}},A.createElement("h2",{className:"major"},"Projects"),A.createElement("span",{className:"image main"},A.createElement(o.S,{src:"../images/projectspic.jpg",alt:"Projects",placeholder:"blurred",__imageData:a(7594)})),A.createElement("p",null,"Stay up-to-date on what we’re doing...."),A.createElement("p",null,"To submit to The Americas or for further information, please submit directly through the ",A.createElement("strong",null,A.createElement("a",{href:"https://theamericas.beartigerproductions.com/",target:"_blank",rel:"noopener noreferrer"},"website"))," or use the contact form."),A.createElement("ul",{className:"icons"},A.createElement("li",null,A.createElement("a",{href:"https://twitter.com/BearTigerInfo",className:"icon fa-twitter",target:"_blank",rel:"noopener noreferrer"},A.createElement("span",{className:"label"},"Twitter"))),A.createElement("li",null,A.createElement("a",{href:"https://www.facebook.com/beartigerproductions",className:"icon fa-facebook",target:"_blank",rel:"noopener noreferrer"},A.createElement("span",{className:"label"},"Facebook"))),A.createElement("li",null,A.createElement("a",{href:"https://www.instagram.com/beartiger.productions",className:"icon fa-instagram",target:"_blank",rel:"noopener noreferrer"},A.createElement("span",{className:"label"},"Instagram"))),A.createElement("li",null,A.createElement("a",{href:"https://www.youtube.com/channel/UCezckIi_wKkArCT_lKOjDcg",className:"icon fa-youtube",target:"_blank",rel:"noopener noreferrer"},A.createElement("span",{className:"label"},"YouTube"))),A.createElement("li",null,A.createElement("a",{href:"https://www.linkedin.com/company/beartigerproductions/about",className:"icon fa-linkedin",target:"_blank",rel:"noopener noreferrer"},A.createElement("span",{className:"label"},"LinkedIn")))),e),A.createElement("article",{id:"contact",className:("contact"===this.props.article?"active":"")+" "+(this.props.articleTimeout?"timeout":""),style:{display:"none"}},A.createElement("h2",{className:"major"},"Contact"),A.createElement("form",{method:"post",action:"https://formspree.io/f/xjvpjdvb"},A.createElement("div",{className:"field half first"},A.createElement("label",{htmlFor:"name"},"Name"),A.createElement("input",{type:"text",name:"name",id:"name"})),A.createElement("div",{className:"field half"},A.createElement("label",{htmlFor:"email"},"Email"),A.createElement("input",{type:"text",name:"_replyto",id:"email"})),A.createElement("div",{className:"field"},A.createElement("label",{htmlFor:"message"},"Message"),A.createElement("textarea",{name:"message",id:"message",rows:"4"})),A.createElement("div",{class:"g-recaptcha","data-sitekey":"6LemoxQiAAAAABBTmQBzw2WD13L3RACKV6RuGcjS"}),A.createElement("ul",{className:"actions"},A.createElement("li",null,A.createElement("input",{type:"submit",value:"Send Message",className:"special"})),A.createElement("li",null,A.createElement("input",{type:"reset",value:"Reset"})))),A.createElement("ul",{className:"icons"},A.createElement("li",null,A.createElement("a",{href:"https://twitter.com/BearTigerInfo",className:"icon fa-twitter"},A.createElement("span",{className:"label"},"Twitter"))),A.createElement("li",null,A.createElement("a",{href:"https://www.facebook.com/beartigerproductions",className:"icon fa-facebook"},A.createElement("span",{className:"label"},"Facebook"))),A.createElement("li",null,A.createElement("a",{href:"https://www.instagram.com/beartiger.productions",className:"icon fa-instagram"},A.createElement("span",{className:"label"},"Instagram")))),A.createElement("h3",null,"Locations"),A.createElement("div",null,"Sydney, Australia",A.createElement("br",null),"2130"),A.createElement("br",null),A.createElement("div",null,"Los Angeles, CA",A.createElement("br",null),"90002"),e))},t}(A.Component);var d=m;var u=e=>A.createElement("footer",{id:"footer",style:e.timeout?{display:"none"}:{}},A.createElement("p",{className:"copyright"},"© 2021 - Design: ",A.createElement("a",{href:"https://html5up.net"},"HTML5 UP"),". Built with: ",A.createElement("a",{href:"https://www.gatsbyjs.org/"},"Gatsby.js")));var p=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={isArticleVisible:!1,timeout:!1,articleTimeout:!1,article:"",loading:"is-loading"},a.handleOpenArticle=a.handleOpenArticle.bind((0,r.Z)(a)),a.handleCloseArticle=a.handleCloseArticle.bind((0,r.Z)(a)),a.setWrapperRef=a.setWrapperRef.bind((0,r.Z)(a)),a.handleClickOutside=a.handleClickOutside.bind((0,r.Z)(a)),a}(0,i.Z)(t,e);var a=t.prototype;return a.componentDidMount=function(){this.timeoutId=setTimeout((()=>{this.setState({loading:""})}),100),document.addEventListener("mousedown",this.handleClickOutside)},a.componentWillUnmount=function(){this.timeoutId&&clearTimeout(this.timeoutId),document.removeEventListener("mousedown",this.handleClickOutside)},a.setWrapperRef=function(e){this.wrapperRef=e},a.handleOpenArticle=function(e){this.setState({isArticleVisible:!this.state.isArticleVisible,article:e}),setTimeout((()=>{this.setState({timeout:!this.state.timeout})}),325),setTimeout((()=>{this.setState({articleTimeout:!this.state.articleTimeout})}),350)},a.handleCloseArticle=function(){this.setState({articleTimeout:!this.state.articleTimeout}),setTimeout((()=>{this.setState({timeout:!this.state.timeout})}),325),setTimeout((()=>{this.setState({isArticleVisible:!this.state.isArticleVisible,article:""})}),350)},a.handleClickOutside=function(e){this.wrapperRef&&!this.wrapperRef.contains(e.target)&&this.state.isArticleVisible&&this.handleCloseArticle()},a.render=function(){return A.createElement(n.Z,{location:this.props.location},A.createElement("div",{className:"body "+this.state.loading+" "+(this.state.isArticleVisible?"is-article-visible":"")},A.createElement("div",{id:"wrapper"},A.createElement(l,{onOpenArticle:this.handleOpenArticle,timeout:this.state.timeout}),A.createElement(d,{isArticleVisible:this.state.isArticleVisible,timeout:this.state.timeout,articleTimeout:this.state.articleTimeout,article:this.state.article,onCloseArticle:this.handleCloseArticle,setWrapperRef:this.setWrapperRef}),A.createElement(u,{timeout:this.state.timeout})),A.createElement("div",{id:"bg"})))},t}(A.Component)},7594:function(e){e.exports=JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAMFAv/EABYBAQEBAAAAAAAAAAAAAAAAAAIAAf/aAAwDAQACEAMQAAABY+bsKmSDb//EABkQAAMBAQEAAAAAAAAAAAAAAAECAxIAEf/aAAgBAQABBQK1smF1YBz1E00Z+Uaro3//xAAXEQEAAwAAAAAAAAAAAAAAAAAAARES/9oACAEDAQE/Acyp/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAEREv/aAAgBAgEBPwHSpUf/xAAcEAADAAEFAAAAAAAAAAAAAAAAARECEiEiMUH/2gAIAQEABj8C4y0xWqs7Q9/RRjxUP//EABsQAQADAQADAAAAAAAAAAAAAAEAESExQVFh/9oACAEBAAE/IUb2XeETFE2zYy6DfM0CxEXBrZdREKHyf//aAAwDAQACAAMAAAAQHC//xAAWEQEBAQAAAAAAAAAAAAAAAAARAAH/2gAIAQMBAT8Q0Elf/8QAFxEAAwEAAAAAAAAAAAAAAAAAARARIf/aAAgBAgEBPxAYKj//xAAcEAEAAwEAAwEAAAAAAAAAAAABABEhMUFxgbH/2gAIAQEAAT8QHAE1hAoq+bXYsZ9PJDmdbE5BOD7xcIuOPgnuOzJ13+z/2Q=="},"images":{"fallback":{"src":"/static/f77869b4b9187b23ce53d24f6a1e1f06/c592e/projectspic.jpg","srcSet":"/static/f77869b4b9187b23ce53d24f6a1e1f06/e60ed/projectspic.jpg 1296w,\\n/static/f77869b4b9187b23ce53d24f6a1e1f06/0fc69/projectspic.jpg 2592w,\\n/static/f77869b4b9187b23ce53d24f6a1e1f06/c592e/projectspic.jpg 5184w","sizes":"(min-width: 5184px) 5184px, 100vw"},"sources":[{"srcSet":"/static/f77869b4b9187b23ce53d24f6a1e1f06/95765/projectspic.webp 1296w,\\n/static/f77869b4b9187b23ce53d24f6a1e1f06/aee1a/projectspic.webp 2592w,\\n/static/f77869b4b9187b23ce53d24f6a1e1f06/7fe34/projectspic.webp 5184w","type":"image/webp","sizes":"(min-width: 5184px) 5184px, 100vw"}]},"width":5184,"height":3456}')},8731:function(e){e.exports=JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAEDAv/EABUBAQEAAAAAAAAAAAAAAAAAAAAC/9oADAMBAAIQAxAAAAFRjq5mMP/EABoQAAIDAQEAAAAAAAAAAAAAAAECAAMhEjH/2gAIAQEAAQUCFixnQwttfvAlw3//xAAWEQEBAQAAAAAAAAAAAAAAAAAAARH/2gAIAQMBAT8Bta//xAAXEQEAAwAAAAAAAAAAAAAAAAAAAQIR/9oACAECAQE/AYqx/8QAGRAAAwADAAAAAAAAAAAAAAAAAAECESFx/9oACAEBAAY/AqqkJ4NFIonh/8QAGRABAAMBAQAAAAAAAAAAAAAAAQARITFB/9oACAEBAAE/IXIF15FfZxm7FQO6yIA7mX5AuMs8n//aAAwDAQACAAMAAAAQpN//xAAXEQADAQAAAAAAAAAAAAAAAAAAAREh/9oACAEDAQE/EEzCD//EABcRAAMBAAAAAAAAAAAAAAAAAAEQESH/2gAIAQIBAT8QNdT/xAAdEAEAAgICAwAAAAAAAAAAAAABABEhMUFRYYGh/9oACAEBAAE/ED2q8O2jwzmiVZWO0g7nhUEthQ3v11GdzCF6uSMILpBtyX8n/9k="},"images":{"fallback":{"src":"/static/b88268e671d4fccc57be14280f640270/57807/mission2.jpg","srcSet":"/static/b88268e671d4fccc57be14280f640270/9184f/mission2.jpg 984w,\\n/static/b88268e671d4fccc57be14280f640270/61706/mission2.jpg 1968w,\\n/static/b88268e671d4fccc57be14280f640270/57807/mission2.jpg 3936w","sizes":"(min-width: 3936px) 3936px, 100vw"},"sources":[{"srcSet":"/static/b88268e671d4fccc57be14280f640270/fce7a/mission2.webp 984w,\\n/static/b88268e671d4fccc57be14280f640270/78336/mission2.webp 1968w,\\n/static/b88268e671d4fccc57be14280f640270/f68ea/mission2.webp 3936w","type":"image/webp","sizes":"(min-width: 3936px) 3936px, 100vw"}]},"width":3936,"height":2624}')},3331:function(e){e.exports=JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAPABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAIEA//EABUBAQEAAAAAAAAAAAAAAAAAAAID/9oADAMBAAIQAxAAAAHJomlWglCv/8QAGBABAQADAAAAAAAAAAAAAAAAABEQEjL/2gAIAQEAAQUCxGzhX//EABURAQEAAAAAAAAAAAAAAAAAABAR/9oACAEDAQE/Aaf/xAAVEQEBAAAAAAAAAAAAAAAAAAAAEf/aAAgBAgEBPwGI/8QAFxABAAMAAAAAAAAAAAAAAAAAEAARMf/aAAgBAQAGPwIyU//EABoQAAMBAQEBAAAAAAAAAAAAAAABESFRMYH/2gAIAQEAAT8hiXEN3i+DTgW425R1bFuG/HD/2gAMAwEAAgADAAAAEDMv/8QAFhEAAwAAAAAAAAAAAAAAAAAAAAER/9oACAEDAQE/EG1Kf//EABYRAAMAAAAAAAAAAAAAAAAAAAABEf/aAAgBAgEBPxBLCz//xAAcEAEAAgIDAQAAAAAAAAAAAAABABEhQTFRYZH/2gAIAQEAAT8QEiGyqth6+wCYDbZzxHKFqWTQIWO5sQdK4+T/2Q=="},"images":{"fallback":{"src":"/static/53a392d000a0cb5aa2b18d42176420c3/75f1c/uCIKS.jpg","srcSet":"/static/53a392d000a0cb5aa2b18d42176420c3/90a5b/uCIKS.jpg 602w,\\n/static/53a392d000a0cb5aa2b18d42176420c3/6da07/uCIKS.jpg 1203w,\\n/static/53a392d000a0cb5aa2b18d42176420c3/75f1c/uCIKS.jpg 2406w","sizes":"(min-width: 2406px) 2406px, 100vw"},"sources":[{"srcSet":"/static/53a392d000a0cb5aa2b18d42176420c3/b77e5/uCIKS.webp 602w,\\n/static/53a392d000a0cb5aa2b18d42176420c3/dbbcf/uCIKS.webp 1203w,\\n/static/53a392d000a0cb5aa2b18d42176420c3/82584/uCIKS.webp 2406w","type":"image/webp","sizes":"(min-width: 2406px) 2406px, 100vw"}]},"width":2406,"height":1804}')}}]);
//# sourceMappingURL=component---src-pages-index-js-ee5d414292a6b834f51b.js.map