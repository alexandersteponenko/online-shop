!function(){function e(e,t,r,a){Object.defineProperty(e,t,{get:r,set:a,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},n={},i=r.parcelRequire94c2;null==i&&((i=function(e){if(e in a)return a[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return a[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},r.parcelRequire94c2=i);var c=i.register;c("gTwGg",function(t,r){e(t.exports,"register",function(){return a},function(e){return a=e});var a,n=new Map;a=function(e,t){for(var r=0;r<t.length-1;r+=2)n.set(t[r],{baseUrl:e,path:t[r+1]})}}),c("ai42B",function(t,r){e(t.exports,"getBundleURL",function(){return a},function(e){return a=e});var a,n={};a=function(e){var t=n[e];return t||(t=function(){try{throw Error()}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(e)return(""+e[2]).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}return"/"}(),n[e]=t),t}}),c("1OZqT",function(r,a){e(r.exports,"ORDERS",function(){return c}),e(r.exports,"BASKET_EMPTY",function(){return o}),e(r.exports,"ORDER_NO_PRODUCT",function(){return s}),e(r.exports,"saveCartToLocalStorage",function(){return u}),e(r.exports,"loadCartFromLocalStorage",function(){return l}),e(r.exports,"showErrorMessage",function(){return d});var n=i("99q6x");let c="Заказы",o="Корзина пуста",s="В заказе нет товаров";function u(e){localStorage.setItem("bag",JSON.stringify(e))}function l(){return JSON.parse(localStorage.getItem("bag"))||[]}function d(e){document.body.innerHTML=`
         <div class="container">
            <div class="link-cart">
                <a href="./index.html" class="link__wrapper">
                   <img src="${t(n)}" alt="\u{438}\u{43A}\u{43E}\u{43D}\u{43A}\u{430} \u{432}\u{435}\u{43A}\u{442}\u{43E}\u{440}\u{430}" class="img__vector" />
                      <p class="link__title">\u{421}\u{43F}\u{438}\u{441}\u{43E}\u{43A} \u{442}\u{43E}\u{432}\u{430}\u{440}\u{43E}\u{432}</p>
                </a>
            </div>
            <h2>${e}</h2>
         </div>
    `}}),c("99q6x",function(e,t){e.exports=i("ai42B").getBundleURL("cDVNx")+"ic-Vector.49399ea7.svg"}),i("gTwGg").register(i("ai42B").getBundleURL("cDVNx"),JSON.parse('["cDVNx","bag.73987724.js","gaBif","rating.cdb36a68.svg","hLEtC","ic-Vector.49399ea7.svg","1SKdJ","ic-minus.f7066a0b.png","3aJGF","Ic-plus.db29d6a8.svg"]'));var o=i("1OZqT"),s={};s=i("ai42B").getBundleURL("cDVNx")+"ic-minus.f7066a0b.png";var u={};u=i("ai42B").getBundleURL("cDVNx")+"Ic-plus.db29d6a8.svg";var l={};l=i("ai42B").getBundleURL("cDVNx")+"rating.cdb36a68.svg";let d=document.querySelector(".bag__list"),g=document.querySelector(".text__usd"),f=document.getElementById("goToBag"),_=document.getElementById("bagListImg"),p=0;function m(){let e=(0,o.loadCartFromLocalStorage)();d.innerHTML="",p=0,e&&e.length>0?(e.forEach(e=>{let r=document.createElement("div");r.className="bag__card-title",r.setAttribute("product-card-id",e.id),r.innerHTML=` 
            <div class="bag__card-img">
              <img class="img__card-bag" src="${e.imageURL}" alt="${e.model}" />
            </div>
            <div class="bag__card-info">
              <h4>${e.model}</h4>
              <p class="bag__series">${e.series}</p>
              <p class="bag__description">${e.description}</p>
                <img class="img-rating" src="${t(l)}" alt="" />
              <div class="bag__card-price">
                <div class="price">
                  <div class="price__currency">
                    <p class="label">$</p>
                    <span class="price__number">${e.price} \u{445} </span>
                    <p class="counter">${e.quantity}</p>
                  </div>
                </div>
                <div class="bag__counter">
                  <button class="btn__minus" data-id="${e.id}">
                    <img src="${t(s)}" alt="\u{43C}\u{438}\u{43D}\u{443}\u{441}" />
                  </button>
                  <p class="counter__number">${e.quantity}</p>
                  <button class="btn__plus" data-id="${e.id}">
                    <img src="${t(u)}" alt="\u{43F}\u{43B}\u{44E}\u{441}" />
                  </button>
                </div>
              </div>
            </div>
          `,d.appendChild(r),p+=e.price*e.quantity}),g.textContent=p.toFixed(2)):(0,o.showErrorMessage)(o.BASKET_EMPTY),_.innerHTML="",(0,o.loadCartFromLocalStorage)().forEach(e=>{let t=document.createElement("li");t.className="bag-item",t.innerHTML=`<img class="bag__img" src="${e.imageURL}" alt="${e.model}" />`,_.appendChild(t)})}f&&f.addEventListener("click",function(){!function(e){let t=(0,o.loadCartFromLocalStorage)()||[],r=t.find(t=>t.id===e.id);r?r.quantity+=1:t.push({...e,quantity:1}),(0,o.saveCartToLocalStorage)(t),m()}(product)}),d.addEventListener("click",e=>{if(e.target.closest(".btn__minus")||e.target.closest(".btn__plus")){let t=e.target.closest("button").getAttribute("data-id"),r=(0,o.loadCartFromLocalStorage)(),a=r.find(e=>e.id===t);if(e.target.closest(".btn__minus")){if(a.quantity>1)a.quantity-=1;else{let e=r.indexOf(a);r.splice(e,1)}}else e.target.closest(".btn__plus")&&(a.quantity+=1);(0,o.saveCartToLocalStorage)(r),m()}}),document.addEventListener("DOMContentLoaded",()=>{m()})}();