(self.webpackChunksola=self.webpackChunksola||[]).push([[134],{6162:function(e,t,a){"use strict";var r=a(4836);t.Z=void 0;var i,n=r(a(6115)),l=r(a(7867)),s=r(a(7071)),o=r(a(434)),d=r(a(7294)),c=r(a(5697)),f=["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"],u=function(e){var t=(0,o.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=S([].concat(t.fluid))),t.fixed&&(t.fixed=S([].concat(t.fixed))),t},m=function(e){var t=e.media;return!!t&&(v&&!!window.matchMedia(t).matches)},p=function(e){var t=e.fluid,a=e.fixed,r=g(t||a||[]);return r&&r.src},g=function(e){if(v&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(m);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},h=Object.create({}),b=function(e){var t=u(e),a=p(t);return h[a]||!1},x="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,v="undefined"!=typeof window,y=v&&window.IntersectionObserver,E=new WeakMap;function w(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},r&&d.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),a&&d.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function S(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function N(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function C(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function L(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var k=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(E.has(e.target)){var t=E.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),E.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),E.set(e,t)),function(){a.unobserve(e),E.delete(e)}},O=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',l=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",o=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?L(e,!0):"")+L(e)})).join("")+"<img "+d+l+s+a+r+t+n+i+o+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},R=d.default.forwardRef((function(e,t){var a=e.src,r=e.imageVariants,i=e.generateSources,n=e.spreadProps,l=e.ariaHidden,s=d.default.createElement(I,(0,o.default)({ref:t,src:a},n,{ariaHidden:l}));return r.length>1?d.default.createElement("picture",null,i(r),s):s})),I=d.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,l=e.onLoad,c=e.onError,u=e.loading,m=e.draggable,p=e.ariaHidden,g=(0,s.default)(e,f);return d.default.createElement("img",(0,o.default)({"aria-hidden":p,sizes:a,srcSet:r,src:i},g,{onLoad:l,onError:c,ref:t,loading:u,draggable:m,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));I.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var z=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=v&&b(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!x&&y&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||v&&(x||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn,isHydrated:!1},a.imageRef=d.default.createRef(),a.placeholderRef=t.placeholderRef||d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,l.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.setState({isHydrated:v}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:b(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=k(e,(function(){var e=b(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),(a=p(t))&&(h[a]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,l=e.imgStyle,s=void 0===l?{}:l,c=e.placeholderStyle,f=void 0===c?{}:c,m=e.placeholderClassName,p=e.fluid,h=e.fixed,b=e.backgroundColor,x=e.durationFadeIn,v=e.Tag,y=e.itemProp,E=e.loading,S=e.draggable,L=p||h;if(!L)return null;var k=!1===this.state.fadeIn||this.state.imgLoaded,z=!0===this.state.fadeIn&&!this.state.imgCached,j=(0,o.default)({opacity:k?1:0,transition:z?"opacity "+x+"ms":"none"},s),V="boolean"==typeof b?"lightgray":b,H={transitionDelay:x+"ms"},W=(0,o.default)({opacity:this.state.imgLoaded?0:1},z&&H,s,f),P={title:t,alt:this.state.isVisible?"":a,style:W,className:m,itemProp:y},T=this.state.isHydrated?g(L):L[0];if(p)return d.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden",maxWidth:T.maxWidth?T.maxWidth+"px":null,maxHeight:T.maxHeight?T.maxHeight+"px":null},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(T.srcSet)},d.default.createElement(v,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/T.aspectRatio+"%"}}),V&&d.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:V,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},z&&H)}),T.base64&&d.default.createElement(R,{ariaHidden:!0,ref:this.placeholderRef,src:T.base64,spreadProps:P,imageVariants:L,generateSources:C}),T.tracedSVG&&d.default.createElement(R,{ariaHidden:!0,ref:this.placeholderRef,src:T.tracedSVG,spreadProps:P,imageVariants:L,generateSources:N}),this.state.isVisible&&d.default.createElement("picture",null,w(L),d.default.createElement(I,{alt:a,title:t,sizes:T.sizes,src:T.src,crossOrigin:this.props.crossOrigin,srcSet:T.srcSet,style:j,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:E,draggable:S})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:O((0,o.default)({alt:a,title:t,loading:E},T,{imageVariants:L}))}}));if(h){var G=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:T.width,height:T.height},n);return"inherit"===n.display&&delete G.display,d.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:G,ref:this.handleRef,key:"fixed-"+JSON.stringify(T.srcSet)},V&&d.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:V,width:T.width,opacity:this.state.imgLoaded?0:1,height:T.height},z&&H)}),T.base64&&d.default.createElement(R,{ariaHidden:!0,ref:this.placeholderRef,src:T.base64,spreadProps:P,imageVariants:L,generateSources:C}),T.tracedSVG&&d.default.createElement(R,{ariaHidden:!0,ref:this.placeholderRef,src:T.tracedSVG,spreadProps:P,imageVariants:L,generateSources:N}),this.state.isVisible&&d.default.createElement("picture",null,w(L),d.default.createElement(I,{alt:a,title:t,width:T.width,height:T.height,sizes:T.sizes,src:T.src,crossOrigin:this.props.crossOrigin,srcSet:T.srcSet,style:j,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:E,draggable:S})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:O((0,o.default)({alt:a,title:t,loading:E},T,{imageVariants:L}))}}))}return null},t}(d.default.Component);z.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var j=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),V=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string,maxWidth:c.default.number,maxHeight:c.default.number});function H(e){return function(t,a,r){var i;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+r+"`, but their values are both `undefined`.");c.default.checkPropTypes(((i={})[a]=e,i),t,"prop",r)}}z.propTypes={resolutions:j,sizes:V,fixed:H(c.default.oneOfType([j,c.default.arrayOf(j)])),fluid:H(c.default.oneOfType([V,c.default.arrayOf(V)])),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var W=z;t.Z=W},1908:function(e,t,a){"use strict";var r=a(7294),i=a(4854),n=a(6162);t.Z=function(){const e=(new Date).getFullYear(),t=(0,i.useStaticQuery)("3855629200").allFile.edges.find((e=>e.node.relativePath.includes("swimming.jpg")));return t?r.createElement("section",{className:"footer bg-white"},r.createElement("div",{className:"footer-inner w-full-h-full px-20 py-20"},r.createElement("div",{className:"mid-section px-16 md:px-30 gap-5 py-4 flex justify-center items-center flex-col lg:flex-row "},r.createElement("div",{className:"right-container flex-1 lg:w-1/4 flex justify-center items-center relative"},r.createElement(n.Z,{fixed:t.node.childImageSharp.fixed,alt:"Swimming",className:"hero-right border-4 border-orange-500 p-1 rounded-full"}),r.createElement("svg",{id:"sw-js-blob-svg",viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg",version:"1.1",style:{position:"absolute",width:"100px",height:"100px",top:0,left:0,zIndex:1,transform:"rotate(180deg)"}},r.createElement("defs",null,r.createElement("linearGradient",{id:"sw-gradient",x1:"0",x2:"1",y1:"1",y2:"0"},r.createElement("stop",{id:"stop1",stopColor:"rgba(248, 117, 55, 1)",offset:"0%"}),r.createElement("stop",{id:"stop2",stopColor:"rgba(251, 168, 31, 1)",offset:"100%"}))),r.createElement("path",{fill:"url(#sw-gradient)",d:"M25.3,-29.9C30.4,-25.9,30.5,-15.6,32.4,-5.6C34.3,4.4,37.9,14.2,35.1,21.4C32.3,28.7,23.1,33.3,14.2,34.7C5.3,36.1,-3.2,34.1,-11.4,31.2C-19.6,28.2,-27.5,24.4,-33.1,17.7C-38.7,11,-41.9,1.5,-40.8,-7.7C-39.8,-16.8,-34.4,-25.7,-26.9,-29.3C-19.4,-32.9,-9.7,-31.2,0.2,-31.4C10.1,-31.7,20.2,-33.9,25.3,-29.9Z",width:"100%",height:"100%",transform:"translate(50 50)",strokeWidth:"0",style:{transition:"all 0.3s ease 0s;"}})),r.createElement("svg",{id:"sw-js-blob-svg",viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg",version:"1.1",style:{position:"absolute",width:"100px",height:"100px",bottom:0,right:0,zIndex:1}},r.createElement("defs",null,r.createElement("linearGradient",{id:"sw-gradient",x1:"0",x2:"1",y1:"1",y2:"0"},r.createElement("stop",{id:"stop1",stopColor:"rgba(248, 117, 55, 1)",offset:"0%"}),r.createElement("stop",{id:"stop2",stopColor:"rgba(251, 168, 31, 1)",offset:"100%"}))),r.createElement("path",{fill:"url(#sw-gradient)",d:"M25.3,-29.9C30.4,-25.9,30.5,-15.6,32.4,-5.6C34.3,4.4,37.9,14.2,35.1,21.4C32.3,28.7,23.1,33.3,14.2,34.7C5.3,36.1,-3.2,34.1,-11.4,31.2C-19.6,28.2,-27.5,24.4,-33.1,17.7C-38.7,11,-41.9,1.5,-40.8,-7.7C-39.8,-16.8,-34.4,-25.7,-26.9,-29.3C-19.4,-32.9,-9.7,-31.2,0.2,-31.4C10.1,-31.7,20.2,-33.9,25.3,-29.9Z",width:"100%",height:"100%",transform:"translate(50 50)",strokeWidth:"0",style:{transition:"all 0.3s ease 0s;"}}))),r.createElement("div",{className:"left-container bg-dark flex-1 lg:w-3/4 flex justify-end flex-col py-10"},r.createElement("h1",{className:"text-lg font-medium text-gray-500 uppercase"},r.createElement("div",{className:"line mb-2 bg-gray-400 mr-2"})," Contact us"),r.createElement("h1",{className:"font-bold text-4xl text-gray-700 "},"Want to join our programme?"),r.createElement("h1",{className:"text-2xl md:text-3xl w-3/3 px-0 md:px-0 text-start pt-2 text-gray-700 "},r.createElement("span",{className:"text-red-600"},"Get in touch")," with us. ",r.createElement("span",{className:"results-oriented"})),r.createElement("div",{className:"flex flex-col justify-center items-start gap-5 py-5 text-lg text-gray-700"},r.createElement("div",{className:"flex-1 flex flex-row gap-3"},r.createElement("box-icon",{type:"solid",name:"phone",color:"#bc4110"}),r.createElement("p",null,r.createElement("a",{href:"tel:+254 795402998",className:"hover:text-green-600 transition duration-300 ease-in-out"},"+254 795402998"))),r.createElement("div",{className:"flex-1 flex flex-row gap-3"},r.createElement("box-icon",{name:"gmail",type:"logo",color:"#bc4110"}),r.createElement("p",null,r.createElement("a",{href:"mailto:info@theschooloflifeart.com",className:"hover:text-green-600 transition duration-300 ease-in-out"},"info@theschooloflife.com"))),r.createElement("div",{className:"flex-1 flex flex-row gap-3"},r.createElement("box-icon",{name:"world",type:"solid",color:"#bc4110"}),r.createElement("p",null,"P.O BOX 29498 GPO zipcode-00100, Raphta Road Westlands, Nairobi Kenya")))))),r.createElement("div",{className:"w-full text-center pt-4 pb-1 font-medium text-lg"},"™ The School Of Life Art, ",e," "),r.createElement("div",{className:"w-full text-center pb-2 text-slate-600 text-sm"},"Developed and maintained by ",r.createElement("a",{target:"_blank noopener noreferrer",href:"https://linkedin.com/in/muriithigakuru"},r.createElement("span",{className:"text-[#bc4110] font-semibold text-md"},"Antony Gakuru")))):r.createElement("div",null,"Image not found")}},7831:function(e,t,a){"use strict";a.d(t,{Z:function(){return l}});var r=a(7294),i=a.p+"static/logo-3b6d83174268b24eca6b778b733de74c.png",n=a(4854);var l=()=>{const{0:e,1:t}=(0,r.useState)(!1);return r.createElement("nav",{className:"bg-white flex items-center justify-between gap-3 px-4 py-2 md:py-2 md:px-36 shadow top-0  w-full z-50"},r.createElement(n.Link,{to:"/"},r.createElement("img",{src:i,alt:"school of life art logo",className:"h-[90px] w-50 py-2"})),r.createElement("div",{className:"nav-list middleNav hidden md:block"},r.createElement("ul",{className:"flex flex-col md:flex-row gap-4 md:gap-16 items-center justify-center md:py-0 py-8 font-medium md:text-md text-gray-700"},r.createElement("li",{className:"nav-li active no-underline capitalize hover:text-orange-700"},r.createElement(n.Link,{to:"/",className:"nav-li active:text-orange-500"},"Home")),r.createElement("li",{className:"no-underline capitalize hover:text-orange-700"},r.createElement(n.Link,{to:"/about",className:"nav-li active:text-orange-500"},"About")),r.createElement("li",{className:"no-underline capitalize hover:text-orange-700 hover:rounded-full"},r.createElement(n.Link,{to:"/whatWeOffer",className:"nav-li active:text-orange-500 text-nowrap"},"What we offer")))),r.createElement("div",{className:"flex justify-center items-center flex-row-reverse"},r.createElement("div",{className:"md:hidden"},r.createElement("button",{onClick:()=>{t(!e)},className:"text-white focus:outline-none"},e?r.createElement("box-icon",{name:"x"}):r.createElement("box-icon",{name:"menu-alt-right"}))),r.createElement("div",{className:"md:hidden "+(e?"block":"hidden")},r.createElement("ul",{className:"flex flex-col justify-center items-center mt-4"},r.createElement("li",null,r.createElement(n.Link,{to:"/",className:"active block py-2 px-4 text-orange-500 hover:bg-orange-500 hover:text-white"},"Home")),r.createElement("li",null,r.createElement(n.Link,{to:"/about",className:"block py-2 px-4 text-orange-500 hover:bg-orange-500 hover:text-white"},"About")),r.createElement("li",null,r.createElement(n.Link,{to:"/whatWeOffer",className:"block py-2 px-4 text-orange-500 hover:bg-orange-500 hover:text-white"},"What we offer"))))),r.createElement("button",{className:"hidden md:block bg-orange-500 hover:bg-orange-700 text-nowrap sm:text-md text-white py-2 px-4 rounded-full capitalize font-semibold transition duration-300 ease-in-out"},"Get Started"))}},434:function(e){function t(){return e.exports=t=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},e.exports.__esModule=!0,e.exports.default=e.exports,t.apply(this,arguments)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},7071:function(e){e.exports=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i},e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=991ecb3d495eda10c9daff790f1d50fa54dd945f-3e9902755ea1d4e8ba6c.js.map