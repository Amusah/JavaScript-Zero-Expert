var e,t,r,n,i,o,a,s,c,u,l,d,p,f,h,g,v,m,y,b=globalThis;function _(e){return e&&e.__esModule?e.default:e}var w={},k={},E=function(e){return e&&e.Math===Math&&e};k=E("object"==typeof globalThis&&globalThis)||E("object"==typeof window&&window)||E("object"==typeof self&&self)||E("object"==typeof b&&b)||E("object"==typeof k&&k)||function(){return this}()||Function("return this")();var S={},$={};S=!($=function(e){try{return!!e()}catch(e){return!0}})(function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]});var j={},O={};O=!$(function(){var e=(function(){}).bind();return"function"!=typeof e||e.hasOwnProperty("prototype")});var F=Function.prototype.call;j=O?F.bind(F):function(){return F.apply(F,arguments)};var L={}.propertyIsEnumerable,M=Object.getOwnPropertyDescriptor;o=M&&!L.call({1:2},1)?function(e){var t=M(this,e);return!!t&&t.enumerable}:L;var P={};P=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}};var x={},T={},q={},I=Function.prototype,H=I.call,N=O&&I.bind.bind(H,H),C={},A=(q=O?N:function(e){return function(){return H.apply(e,arguments)}})({}.toString),R=q("".slice);C=function(e){return R(A(e),8,-1)};var z=Object,W=q("".split);T=$(function(){return!z("z").propertyIsEnumerable(0)})?function(e){return"String"===C(e)?W(e,""):z(e)}:z;var D={},G={};G=function(e){return null==e};var U=TypeError;D=function(e){if(G(e))throw new U("Can't call method on "+e);return e},x=function(e){return T(D(e))};var B={},J={},Y={},Q={},V="object"==typeof document&&document.all;Q=void 0===V&&void 0!==V?function(e){return"function"==typeof e||e===V}:function(e){return"function"==typeof e},Y=function(e){return"object"==typeof e?null!==e:Q(e)};var K={},X={};X=function(e,t){var r;return arguments.length<2?(r=k[e],Q(r)?r:void 0):k[e]&&k[e][t]};var Z={};Z=q({}.isPrototypeOf);var ee={},et={},er={},en={};en="undefined"!=typeof navigator&&String(navigator.userAgent)||"";var ei=k.process,eo=k.Deno,ea=ei&&ei.versions||eo&&eo.version,es=ea&&ea.v8;es&&(s=(a=es.split("."))[0]>0&&a[0]<4?1:+(a[0]+a[1])),!s&&en&&(!(a=en.match(/Edge\/(\d+)/))||a[1]>=74)&&(a=en.match(/Chrome\/(\d+)/))&&(s=+a[1]),er=s;var ec=k.String;ee=(et=!!Object.getOwnPropertySymbols&&!$(function(){var e=Symbol("symbol detection");return!ec(e)||!(Object(e) instanceof Symbol)||!Symbol.sham&&er&&er<41}))&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var eu=Object;K=ee?function(e){return"symbol"==typeof e}:function(e){var t=X("Symbol");return Q(t)&&Z(t.prototype,eu(e))};var el={},ed={},ep={},ef=String;ep=function(e){try{return ef(e)}catch(e){return"Object"}};var eh=TypeError;ed=function(e){if(Q(e))return e;throw new eh(ep(e)+" is not a function")},el=function(e,t){var r=e[t];return G(r)?void 0:ed(r)};var eg={},ev=TypeError;eg=function(e,t){var r,n;if("string"===t&&Q(r=e.toString)&&!Y(n=j(r,e))||Q(r=e.valueOf)&&!Y(n=j(r,e))||"string"!==t&&Q(r=e.toString)&&!Y(n=j(r,e)))return n;throw new ev("Can't convert object to primitive value")};var em={},ey={};ey=!1;var eb={},e_={},ew=Object.defineProperty;e_=function(e,t){try{ew(k,e,{value:t,configurable:!0,writable:!0})}catch(r){k[e]=t}return t};var ek="__core-js_shared__";eb=k[ek]||e_(ek,{}),(em=function(e,t){return eb[e]||(eb[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.35.0",mode:ey?"pure":"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.35.0/LICENSE",source:"https://github.com/zloirock/core-js"});var eE={},eS={},e$=Object;eS=function(e){return e$(D(e))};var ej=q({}.hasOwnProperty);eE=Object.hasOwn||function(e,t){return ej(eS(e),t)};var eO={},eF=0,eL=Math.random(),eM=q(1..toString);eO=function(e){return"Symbol("+(void 0===e?"":e)+")_"+eM(++eF+eL,36)};var eP=k.Symbol,ex=em("wks"),eT=ee?eP.for||eP:eP&&eP.withoutSetter||eO,eq=TypeError,eI=(eE(ex,e="toPrimitive")||(ex[e]=et&&eE(eP,e)?eP[e]:eT("Symbol."+e)),ex[e]);J=function(e,t){if(!Y(e)||K(e))return e;var r,n=el(e,eI);if(n){if(void 0===t&&(t="default"),r=j(n,e,t),!Y(r)||K(r))return r;throw new eq("Can't convert object to primitive value")}return void 0===t&&(t="number"),eg(e,t)},B=function(e){var t=J(e,"string");return K(t)?t:t+""};var eH={},eN={},eC=k.document,eA=Y(eC)&&Y(eC.createElement);eN=function(e){return eA?eC.createElement(e):{}},eH=!S&&!$(function(){return 7!==Object.defineProperty(eN("div"),"a",{get:function(){return 7}}).a});var eR=Object.getOwnPropertyDescriptor;i=S?eR:function(e,t){if(e=x(e),t=B(t),eH)try{return eR(e,t)}catch(e){}if(eE(e,t))return P(!j(o,e,t),e[t])};var ez={},eW={};eW=S&&$(function(){return 42!==Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype});var eD={},eG=String,eU=TypeError;eD=function(e){if(Y(e))return e;throw new eU(eG(e)+" is not an object")};var eB=TypeError,eJ=Object.defineProperty,eY=Object.getOwnPropertyDescriptor,eQ="enumerable",eV="configurable",eK="writable";c=S?eW?function(e,t,r){if(eD(e),t=B(t),eD(r),"function"==typeof e&&"prototype"===t&&"value"in r&&eK in r&&!r[eK]){var n=eY(e,t);n&&n[eK]&&(e[t]=r.value,r={configurable:eV in r?r[eV]:n[eV],enumerable:eQ in r?r[eQ]:n[eQ],writable:!1})}return eJ(e,t,r)}:eJ:function(e,t,r){if(eD(e),t=B(t),eD(r),eH)try{return eJ(e,t,r)}catch(e){}if("get"in r||"set"in r)throw new eB("Accessors not supported");return"value"in r&&(e[t]=r.value),e},ez=S?function(e,t,r){return c(e,t,P(1,r))}:function(e,t,r){return e[t]=r,e};var eX={},eZ={},e0=Function.prototype,e1=S&&Object.getOwnPropertyDescriptor,e2=eE(e0,"name")&&(!S||S&&e1(e0,"name").configurable),e4={},e3=q(Function.toString);Q(eb.inspectSource)||(eb.inspectSource=function(e){return e3(e)}),e4=eb.inspectSource;var e7={},e8={},e9=k.WeakMap;e8=Q(e9)&&/native code/.test(String(e9));var e5={},e6=em("keys");e5=function(e){return e6[e]||(e6[e]=eO(e))};var te={};te={};var tt="Object already initialized",tr=k.TypeError,tn=k.WeakMap;if(e8||eb.state){var ti=eb.state||(eb.state=new tn);ti.get=ti.get,ti.has=ti.has,ti.set=ti.set,u=function(e,t){if(ti.has(e))throw new tr(tt);return t.facade=e,ti.set(e,t),t},l=function(e){return ti.get(e)||{}},d=function(e){return ti.has(e)}}else{var to=e5("state");te[to]=!0,u=function(e,t){if(eE(e,to))throw new tr(tt);return t.facade=e,ez(e,to,t),t},l=function(e){return eE(e,to)?e[to]:{}},d=function(e){return eE(e,to)}}var ta=(e7={set:u,get:l,has:d,enforce:function(e){return d(e)?l(e):u(e,{})},getterFor:function(e){return function(t){var r;if(!Y(t)||(r=l(t)).type!==e)throw new tr("Incompatible receiver, "+e+" required");return r}}}).enforce,ts=e7.get,tc=String,tu=Object.defineProperty,tl=q("".slice),tp=q("".replace),tf=q([].join),th=S&&!$(function(){return 8!==tu(function(){},"length",{value:8}).length}),tg=String(String).split("String"),tv=eZ=function(e,t,r){"Symbol("===tl(tc(t),0,7)&&(t="["+tp(tc(t),/^Symbol\(([^)]*)\)/,"$1")+"]"),r&&r.getter&&(t="get "+t),r&&r.setter&&(t="set "+t),(!eE(e,"name")||e2&&e.name!==t)&&(S?tu(e,"name",{value:t,configurable:!0}):e.name=t),th&&r&&eE(r,"arity")&&e.length!==r.arity&&tu(e,"length",{value:r.arity});try{r&&eE(r,"constructor")&&r.constructor?S&&tu(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var n=ta(e);return eE(n,"source")||(n.source=tf(tg,"string"==typeof t?t:"")),e};Function.prototype.toString=tv(function(){return Q(this)&&ts(this).source||e4(this)},"toString"),eX=function(e,t,r,n){n||(n={});var i=n.enumerable,o=void 0!==n.name?n.name:t;if(Q(r)&&eZ(r,o,n),n.global)i?e[t]=r:e_(t,r);else{try{n.unsafe?e[t]&&(i=!0):delete e[t]}catch(e){}i?e[t]=r:c(e,t,{value:r,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return e};var tm={},ty={},tb={},t_={},tw={},tk={},tE=Math.ceil,tS=Math.floor;tk=Math.trunc||function(e){var t=+e;return(t>0?tS:tE)(t)},tw=function(e){var t=+e;return t!=t||0===t?0:tk(t)};var t$=Math.max,tj=Math.min;t_=function(e,t){var r=tw(e);return r<0?t$(r+t,0):tj(r,t)};var tO={},tF={},tL=Math.min;tF=function(e){return e>0?tL(tw(e),9007199254740991):0},tO=function(e){return tF(e.length)};var tM=function(e){return function(t,r,n){var i,o=x(t),a=tO(o),s=t_(n,a);if(e&&r!=r){for(;a>s;)if((i=o[s++])!=i)return!0}else for(;a>s;s++)if((e||s in o)&&o[s]===r)return e||s||0;return!e&&-1}},tP={includes:tM(!0),indexOf:tM(!1)}.indexOf,tx=q([].push);tb=function(e,t){var r,n=x(e),i=0,o=[];for(r in n)!eE(te,r)&&eE(n,r)&&tx(o,r);for(;t.length>i;)eE(n,r=t[i++])&&(~tP(o,r)||tx(o,r));return o};var tT=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");p=Object.getOwnPropertyNames||function(e){return tb(e,tT)},f=Object.getOwnPropertySymbols;var tq=q([].concat);ty=X("Reflect","ownKeys")||function(e){var t=p(eD(e));return f?tq(t,f(e)):t},tm=function(e,t,r){for(var n=ty(t),o=0;o<n.length;o++){var a=n[o];eE(e,a)||r&&eE(r,a)||c(e,a,i(t,a))}};var tI={},tH=/#|\.prototype\./,tN=function(e,t){var r=tA[tC(e)];return r===tz||r!==tR&&(Q(t)?$(t):!!t)},tC=tN.normalize=function(e){return String(e).replace(tH,".").toLowerCase()},tA=tN.data={},tR=tN.NATIVE="N",tz=tN.POLYFILL="P";tI=tN,w=function(e,t){var r,n,o,a,s,c=e.target,u=e.global,l=e.stat;if(r=u?k:l?k[c]||e_(c,{}):(k[c]||{}).prototype)for(n in t){if(a=t[n],o=e.dontCallGetSet?(s=i(r,n))&&s.value:r[n],!tI(u?n:c+(l?".":"#")+n,e.forced)&&void 0!==o){if(typeof a==typeof o)continue;tm(a,o)}(e.sham||o&&o.sham)&&ez(a,"sham",!0),eX(r,n,a,e)}};var tW={},tD={},tG=Function.prototype,tU=tG.apply,tB=tG.call;tD="object"==typeof Reflect&&Reflect.apply||(O?tB.bind(tU):function(){return tB.apply(tU,arguments)});var tJ={},tY={},tQ=(tY=function(e){if("Function"===C(e))return q(e)})(tY.bind);tJ=function(e,t){return ed(e),void 0===t?e:O?tQ(e,t):function(){return e.apply(t,arguments)}};var tV={};tV=X("document","documentElement");var tK={};tK=q([].slice);var tX={},tZ=TypeError;tX=function(e,t){if(e<t)throw new tZ("Not enough arguments");return e};var t0={};t0=/(?:ipad|iphone|ipod).*applewebkit/i.test(en);var t1={};t1="process"===C(k.process);var t2=k.setImmediate,t4=k.clearImmediate,t3=k.process,t7=k.Dispatch,t8=k.Function,t9=k.MessageChannel,t5=k.String,t6=0,re={},rt="onreadystatechange";$(function(){h=k.location});var rr=function(e){if(eE(re,e)){var t=re[e];delete re[e],t()}},rn=function(e){return function(){rr(e)}},ri=function(e){rr(e.data)},ro=function(e){k.postMessage(t5(e),h.protocol+"//"+h.host)};t2&&t4||(t2=function(e){tX(arguments.length,1);var t=Q(e)?e:t8(e),r=tK(arguments,1);return re[++t6]=function(){tD(t,void 0,r)},g(t6),t6},t4=function(e){delete re[e]},t1?g=function(e){t3.nextTick(rn(e))}:t7&&t7.now?g=function(e){t7.now(rn(e))}:t9&&!t0?(m=(v=new t9).port2,v.port1.onmessage=ri,g=tJ(m.postMessage,m)):k.addEventListener&&Q(k.postMessage)&&!k.importScripts&&h&&"file:"!==h.protocol&&!$(ro)?(g=ro,k.addEventListener("message",ri,!1)):g=rt in eN("script")?function(e){tV.appendChild(eN("script"))[rt]=function(){tV.removeChild(this),rr(e)}}:function(e){setTimeout(rn(e),0)});var ra=(tW={set:t2,clear:t4}).clear;w({global:!0,bind:!0,enumerable:!0,forced:k.clearImmediate!==ra},{clearImmediate:ra});var rs=tW.set,rc={},ru={};ru="function"==typeof Bun&&Bun&&"string"==typeof Bun.version;var rl=k.Function,rd=/MSIE .\./.test(en)||ru&&((t=k.Bun.version.split(".")).length<3||"0"===t[0]&&(t[1]<3||"3"===t[1]&&"0"===t[2]));rc=function(e,t){var r=t?2:1;return rd?function(n,i){var o=tX(arguments.length,1)>r,a=Q(n)?n:rl(n),s=o?tK(arguments,r):[],c=o?function(){tD(a,this,s)}:a;return t?e(c,i):e(c)}:e};var rp=k.setImmediate?rc(rs,!1):rs;w({global:!0,bind:!0,enumerable:!0,forced:k.setImmediate!==rp},{setImmediate:rp});const rf="https://forkify-api.herokuapp.com/api/v2/recipes/",rh="7f924c3b-d414-4268-88b6-0b18ec740315",rg=async function(e,t){try{let r=t?fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}):fetch(e),n=await Promise.race([r,new Promise(function(e,t){setTimeout(function(){t(Error("Request took too long! Timeout after 10 second"))},1e4)})]),i=await n.json();if(!n.ok)throw Error(`${i.message} (${n.status})`);return i}catch(e){throw e}},rv={recipe:{},search:{query:"",results:[],resultsPerPage:10,page:1},bookmarks:[]},rm=function(e){let{recipe:t}=e.data;return{id:t.id,title:t.title,publisher:t.publisher,sourceUrl:t.source_url,image:t.image_url,servings:t.servings,cookingTime:t.cooking_time,ingredients:t.ingredients,...t.key&&{key:t.key}}},ry=async function(e){try{let t=await rg(`${rf}${e}?key=${rh}`);rv.recipe=rm(t),rv.bookmarks.some(t=>t.id===e)?rv.recipe.bookmarked=!0:rv.recipe.bookmarked=!1,console.log(rv.recipe)}catch(e){throw console.log(`${e} \u{274C}`),e}},rb=async function(e){try{rv.search.query=e;let t=await rg(`${rf}?search=${e}&key=${rh}`);console.log(t);let{recipes:r}=t.data;rv.search.results=r.map(e=>({id:e.id,title:e.title,publisher:e.publisher,image:e.image_url,...e.key&&{key:e.key}})),rv.search.page=1}catch(e){throw console.log(`${e} \u{274C}`),e}},r_=function(e=rv.search.page){rv.search.page=e;let t=(e-1)*rv.search.resultsPerPage,r=e*rv.search.resultsPerPage;return rv.search.results.slice(t,r)},rw=function(e){rv.recipe.ingredients.forEach(t=>{t.quantity=t.quantity*e/rv.recipe.servings}),rv.recipe.servings=e},rk=function(){localStorage.setItem("bookmarks",JSON.stringify(rv.bookmarks))},rE=function(e){rv.bookmarks.push(e),e.id===rv.recipe.id&&(rv.recipe.bookmarked=!0),rk()},rS=function(e){let t=rv.bookmarks.findIndex(t=>t.id===e);rv.bookmarks.splice(t,1),e===rv.recipe.id&&(rv.recipe.bookmarked=!1),rk()};!function(){let e=localStorage.getItem("bookmarks");e&&(rv.bookmarks=JSON.parse(e))}();const r$=async function(e){try{let t=Object.entries(e).filter(e=>e[0].startsWith("ingredient")&&""!==e[1]).map(e=>{let t=e[1].split(",").map(e=>e.trim());if(3!==t.length)throw Error("Wrong ingredient format! Please use the correct format :)");let[r,n,i]=t;return{quantity:r?+r:null,unit:n,description:i}}),r={title:e.title,source_url:e.sourceUrl,image_url:e.image,publisher:e.publisher,cooking_time:+e.cookingTime,servings:+e.servings,ingredients:t},n=await rg(`${rf}?key=${rh}`,r);rv.recipe=rm(n),rE(rv.recipe)}catch(e){throw e}};var rj={};rj=new URL("icons.c14567a0.svg",import.meta.url).toString();class rO{_data;render(e,t=!0){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;let r=this._generateMarkup();if(!t)return r;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}update(e){this._data=e;let t=this._generateMarkup(),r=Array.from(document.createRange().createContextualFragment(t).querySelectorAll("*")),n=Array.from(this._parentElement.querySelectorAll("*"));r.forEach((e,t)=>{let r=n[t];e.isEqualNode(r)||e.firstChild?.nodeValue.trim()===""||(r.textContent=e.textContent),e.isEqualNode(r)||Array.from(e.attributes).forEach(e=>r.setAttribute(e.name,e.value))})}_clear(){this._parentElement.replaceChildren()}renderSpinner(){let e=`
      <div class="spinner">
        <svg>
          <use href="${_(rj)}#icon-loader"></use>
        </svg>
      </div>
    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)}renderError(e=this._errorMessage){let t=`
      <div class="error">
        <div>
          <svg>
            <use href="${_(rj)}#icon-alert-triangle"></use>
          </svg>
        </div>
        <p>${e}</p>
      </div>
    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}renderSuccess(e=this._successMessage){let t=`
      <div class="message">
        <div>
          <svg>
            <use href="${_(rj)}#icon-smile"></use>
          </svg>
        </div>
        <p>${e}</p>
      </div>
    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}}(Fraction=function(e,t){if(void 0!==e&&t)"number"==typeof e&&"number"==typeof t?(this.numerator=e,this.denominator=t):"string"==typeof e&&"string"==typeof t&&(this.numerator=parseInt(e),this.denominator=parseInt(t));else if(void 0===t){if("number"==typeof(num=e))this.numerator=num,this.denominator=1;else if("string"==typeof num){var r,n,i=num.split(" ");if(i[0]&&(r=i[0]),i[1]&&(n=i[1]),r%1==0&&n&&n.match("/"))return new Fraction(r).add(new Fraction(n));if(!r||n)return;if("string"==typeof r&&r.match("/")){var o=r.split("/");this.numerator=o[0],this.denominator=o[1]}else{if("string"==typeof r&&r.match("."))return new Fraction(parseFloat(r));this.numerator=parseInt(r),this.denominator=1}}}this.normalize()}).prototype.clone=function(){return new Fraction(this.numerator,this.denominator)},Fraction.prototype.toString=function(){if("NaN"===this.denominator)return"NaN";var e=this.numerator/this.denominator>0?Math.floor(this.numerator/this.denominator):Math.ceil(this.numerator/this.denominator),t=this.numerator%this.denominator,r=this.denominator,n=[];return 0!=e&&n.push(e),0!=t&&n.push((0===e?t:Math.abs(t))+"/"+r),n.length>0?n.join(" "):0},Fraction.prototype.rescale=function(e){return this.numerator*=e,this.denominator*=e,this},Fraction.prototype.add=function(e){var t=this.clone();return e=e instanceof Fraction?e.clone():new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator+=e.numerator,t.normalize()},Fraction.prototype.subtract=function(e){var t=this.clone();return e=e instanceof Fraction?e.clone():new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator-=e.numerator,t.normalize()},Fraction.prototype.multiply=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.numerator,t.denominator*=e.denominator;else{if("number"!=typeof e)return t.multiply(new Fraction(e));t.numerator*=e}return t.normalize()},Fraction.prototype.divide=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.denominator,t.denominator*=e.numerator;else{if("number"!=typeof e)return t.divide(new Fraction(e));t.denominator*=e}return t.normalize()},Fraction.prototype.equals=function(e){e instanceof Fraction||(e=new Fraction(e));var t=this.clone().normalize(),e=e.clone().normalize();return t.numerator===e.numerator&&t.denominator===e.denominator},Fraction.prototype.normalize=(r=function(e){return"number"==typeof e&&(e>0&&e%1>0&&e%1<1||e<0&&e%-1<0&&e%-1>-1)},n=function(e,t){if(!t)return Math.round(e);var r=Math.pow(10,t);return Math.round(e*r)/r},function(){if(r(this.denominator)){var e=n(this.denominator,9),t=Math.pow(10,e.toString().split(".")[1].length);this.denominator=Math.round(this.denominator*t),this.numerator*=t}if(r(this.numerator)){var e=n(this.numerator,9),t=Math.pow(10,e.toString().split(".")[1].length);this.numerator=Math.round(this.numerator*t),this.denominator*=t}var i=Fraction.gcf(this.numerator,this.denominator);return this.numerator/=i,this.denominator/=i,(this.numerator<0&&this.denominator<0||this.numerator>0&&this.denominator<0)&&(this.numerator*=-1,this.denominator*=-1),this}),Fraction.gcf=function(e,t){var r=[],n=Fraction.primeFactors(e),i=Fraction.primeFactors(t);return(n.forEach(function(e){var t=i.indexOf(e);t>=0&&(r.push(e),i.splice(t,1))}),0===r.length)?1:function(){var e,t=r[0];for(e=1;e<r.length;e++)t*=r[e];return t}()},Fraction.primeFactors=function(e){for(var t=Math.abs(e),r=[],n=2;n*n<=t;)t%n==0?(r.push(n),t/=n):n++;return 1!=t&&r.push(t),r},y=Fraction;class rF extends rO{_parentElement=document.querySelector(".recipe");_errorMessage="Recipe not found. Please try anoter one!";_successMessage="";addHandlerRender(e){["hashchange","load"].forEach(t=>window.addEventListener(t,e))}addHandlerUpdateServings(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--update-servings");if(!r)return;let n=+r.dataset.updateTo;n>0&&e(n)})}addHandlerAddBookmark(e){this._parentElement.addEventListener("click",function(t){t.target.closest(".btn--bookmark")&&e()})}_generateMarkup(){return`
      <figure class="recipe__fig">
          <img src="${this._data.image}" alt="${this._data.title}" class="recipe__img" />
          <h1 class="recipe__title">
            <span>${this._data.title}</span>
          </h1>
      </figure>

      <div class="recipe__details">
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${_(rj)}#icon-clock"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
            <span class="recipe__info-text">minutes</span>
          </div>
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${_(rj)}#icon-users"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
            <span class="recipe__info-text">servings</span>

            <div class="recipe__info-buttons">
              <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings-1}">
                <svg>
                  <use href="${_(rj)}#icon-minus-circle"></use>
                </svg>
              </button>
              <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings+1}">
                <svg>
                  <use href="${_(rj)}#icon-plus-circle"></use>
                </svg>
              </button>
            </div>
          </div>

          <div class="recipe__user-generated ${this._data.key?"":"hidden"}">
            <svg>
              <use href="${_(rj)}#icon-user"></use>
            </svg>
          </div>
          <button class="btn--round btn--bookmark">
            <svg class="">
              <use href="${_(rj)}#icon-bookmark${this._data.bookmarked?"-fill":""}"></use>
            </svg>
          </button>
        </div>

        <div class="recipe__ingredients">
          <h2 class="heading--2">Recipe ingredients</h2>
          <ul class="recipe__ingredient-list">
          ${this._data.ingredients.map(this._generateMarkupIngredient).join("")}
          </ul>
        </div>

        <div class="recipe__directions">
          <h2 class="heading--2">How to cook it</h2>
          <p class="recipe__directions-text">
            This recipe was carefully designed and tested by
            <span class="recipe__publisher">${this._data.publisher}</span>. Please check out
            directions at their website.
          </p>
          <a
            class="btn--small recipe__btn"
            href="${this._data.sourceUrl}"
            target="_blank"
          >
            <span>Directions</span>
            <svg class="search__icon">
              <use href="${_(rj)}#icon-arrow-right"></use>
            </svg>
          </a>
        </div>
    `}_generateMarkupIngredient(e){return`
      <li class="recipe__ingredient">
        <svg class="recipe__icon">
          <use href="${_(rj)}#icon-check"></use>
        </svg>
        <div class="recipe__quantity">${e.quantity?new y(e.quantity).toString():""}</div>
        <div class="recipe__description">
          <span class="recipe__unit">${e.unit}</span>
          ${e.description}
        </div>
      </li>
    `}}var rL=new rF;class rM{_parentElement=document.querySelector(".search");getQuery(){let e=this._parentElement.querySelector(".search__field").value;return this._clearInput(),e}_clearInput(){this._parentElement.querySelector(".search__field").value=""}addHandlerSearch(e){this._parentElement.addEventListener("submit",t=>{t.preventDefault(),e()})}}var rP=new rM,rx=new class extends rO{_parentElement="";_generateMarkup(e){let t=window.location.hash.slice(1);return`
      <li class="preview">
        <a class="preview__link ${this._data.id===t?"preview__link--active":""}" href="#${this._data.id}">
          <figure class="preview__fig">
            <img src="${this._data.image}" alt="${this._data.title}<"/>
          </figure>
          <div class="preview__data">
            <h4 class="preview__title">${this._data.title}</h4>
            <p class="preview__publisher">${this._data.publisher}</p>
            <div class="preview__user-generated ${this._data.key?"":"hidden"}">
            <svg>
              <use href="${_(rj)}#icon-user"></use>
            </svg>
          </div>
          </div>
        </a>
      </li>
    `}};class rT extends rO{_parentElement=document.querySelector(".results");_errorMessage="No recipes found for your query! Please try again :)";_successMessage="";_generateMarkup(){return console.log(this._data),this._data.map(e=>rx.render(e,!1)).join(" ")}}var rq=new rT;class rI extends rO{_parentElement=document.querySelector(".pagination");addHandlerClick(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--inline");r&&e(+r.dataset.goto)})}_generateMarkup(){let e=this._data.page,t=Math.ceil(this._data.results.length/this._data.resultsPerPage);return 1===e&&t>1?`
       <button data-goto="${e+1}" class="btn--inline pagination__btn--next">
          <span>Page ${e+1}</span>
          <svg class="search__icon">
            <use href="${_(rj)}#icon-arrow-right"></use>
          </svg>
        </button> 
      `:e===t&&t>1?`
        <button data-goto="${e-1}" class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
            <use href="${_(rj)}#icon-arrow-left"></use>
          </svg>
          <span>Page ${e-1}</span>
        </button> 
      `:e<t?`
        <button data-goto="${e-1}" class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
            <use href="${_(rj)}#icon-arrow-left"></use>
          </svg>
          <span>Page ${e-1}</span>
        </button> 
        <button data-goto="${e+1}" class="btn--inline pagination__btn--next">
          <span>Page ${e+1}</span>
          <svg class="search__icon">
            <use href="${_(rj)}#icon-arrow-right"></use>
          </svg>
        </button> 
      `:""}}var rH=new rI;class rN extends rO{_parentElement=document.querySelector(".bookmarks__list");_errorMessage="No bookmarks yet. Find a nice recipe and bookmark it :)";_successMessage="";addHandlerRender(e){window.addEventListener("load",e)}_generateMarkup(){return this._data.map(e=>rx.render(e,!1)).join(" ")}}var rC=new rN;class rA extends rO{_parentElement=document.querySelector(".upload");_successMessage="Recipe uploaded successfully :)";_window=document.querySelector(".add-recipe-window");_overlay=document.querySelector(".overlay");_btnOpen=document.querySelector(".nav__btn--add-recipe");_btnClose=document.querySelector(".btn--close-modal");constructor(){super(),this._addHandlerShowWindow(),this._addHandlerHideWindow()}_toggleWindow(){this._overlay.classList.toggle("hidden"),this._window.classList.toggle("hidden")}_addHandlerShowWindow(){this._btnOpen.addEventListener("click",this._toggleWindow.bind(this))}_addHandlerHideWindow(){this._btnClose.addEventListener("click",this._toggleWindow.bind(this)),this._overlay.addEventListener("click",this._toggleWindow.bind(this))}_addHandlerUpload(e){this._parentElement.addEventListener("submit",function(t){t.preventDefault(),e(Object.fromEntries([...new FormData(this)]))})}_generateMarkup(){}}var rR=new rA,rz=function(e){var t,r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function l(e,r,n,o){var a,s,c=Object.create((r&&r.prototype instanceof v?r:v).prototype);return i(c,"_invoke",{value:(a=new O(o||[]),s=p,function(r,i){if(s===f)throw Error("Generator is already running");if(s===h){if("throw"===r)throw i;return{value:t,done:!0}}for(a.method=r,a.arg=i;;){var o=a.delegate;if(o){var c=function e(r,n){var i=n.method,o=r.iterator[i];if(o===t)return n.delegate=null,"throw"===i&&r.iterator.return&&(n.method="return",n.arg=t,e(r,n),"throw"===n.method)||"return"!==i&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+i+"' method")),g;var a=d(o,r.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,g;var s=a.arg;return s?s.done?(n[r.resultName]=s.value,n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,g):s:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,g)}(o,a);if(c){if(c===g)continue;return c}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if(s===p)throw s=h,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);s=f;var u=d(e,n,a);if("normal"===u.type){if(s=a.done?h:"suspendedYield",u.arg===g)continue;return{value:u.arg,done:a.done}}"throw"===u.type&&(s=h,a.method="throw",a.arg=u.arg)}})}),c}function d(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var p="suspendedStart",f="executing",h="completed",g={};function v(){}function m(){}function y(){}var b={};u(b,a,function(){return this});var _=Object.getPrototypeOf,w=_&&_(_(F([])));w&&w!==r&&n.call(w,a)&&(b=w);var k=y.prototype=v.prototype=Object.create(b);function E(e){["next","throw","return"].forEach(function(t){u(e,t,function(e){return this._invoke(t,e)})})}function S(e,t){var r;i(this,"_invoke",{value:function(i,o){function a(){return new t(function(r,a){!function r(i,o,a,s){var c=d(e[i],e,o);if("throw"===c.type)s(c.arg);else{var u=c.arg,l=u.value;return l&&"object"==typeof l&&n.call(l,"__await")?t.resolve(l.__await).then(function(e){r("next",e,a,s)},function(e){r("throw",e,a,s)}):t.resolve(l).then(function(e){u.value=e,a(u)},function(e){return r("throw",e,a,s)})}}(i,o,r,a)})}return r=r?r.then(a,a):a()}})}function $(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach($,this),this.reset(!0)}function F(e){if(null!=e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function r(){for(;++i<e.length;)if(n.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return o.next=o}}throw TypeError(typeof e+" is not iterable")}return m.prototype=y,i(k,"constructor",{value:y,configurable:!0}),i(y,"constructor",{value:m,configurable:!0}),m.displayName=u(y,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,u(e,c,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},E(S.prototype),u(S.prototype,s,function(){return this}),e.AsyncIterator=S,e.async=function(t,r,n,i,o){void 0===o&&(o=Promise);var a=new S(l(t,r,n,i),o);return e.isGeneratorFunction(r)?a:a.next().then(function(e){return e.done?e.value:a.next()})},E(k),u(k,c,"Generator"),u(k,a,function(){return this}),u(k,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=F,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(j),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function i(n,i){return s.type="throw",s.arg=e,r.next=n,i&&(r.method="next",r.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else if(u){if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return(a.type=e,a.arg=t,o)?(this.method="next",this.next=o.finallyLoc,g):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),j(r),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;j(r)}return i}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:F(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}({});try{regeneratorRuntime=rz}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=rz:Function("r","regeneratorRuntime = r")(rz)}const rW=async function(){try{let e=window.location.hash.slice(1);if(!e)return;rL.renderSpinner(),rq.update(r_()),rC.update(rv.bookmarks),await ry(e),rL.render(rv.recipe)}catch(e){rL.renderError()}},rD=async function(){try{rq.renderSpinner();let e=rP.getQuery();if(!e)return;await rb(e),rq.render(r_()),rH.render(rv.search)}catch(e){console.error(e)}},rG=async function(e){try{rR.renderSpinner(),await r$(e),console.log(rv.recipe),rL.render(rv.recipe),rR.renderSuccess(),rC.render(rv.bookmarks),window.history.pushState(null,"",`#${rv.recipe.id}`),setTimeout(function(){rR._toggleWindow()},2500)}catch(e){console.error(e),rR.renderError(e.message)}};rC.addHandlerRender(function(){rC.render(rv.bookmarks)}),rL.addHandlerRender(rW),rL.addHandlerUpdateServings(function(e){rw(e),rL.update(rv.recipe)}),rL.addHandlerAddBookmark(function(){rv.recipe.bookmarked?rS(rv.recipe.id):rE(rv.recipe),rL.update(rv.recipe),rC.render(rv.bookmarks)}),rP.addHandlerSearch(rD),rH.addHandlerClick(function(e){rq.render(r_(e)),rH.render(rv.search)}),rR._addHandlerUpload(rG);
//# sourceMappingURL=index.53009cca.js.map
