function e(e,t,r,o){Object.defineProperty(e,t,{get:r,set:o,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},a=r.parcelRequire94c2;null==a&&((a=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return o[e]=r,t.call(r.exports,r,r.exports),r.exports}var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},r.parcelRequire94c2=a);var i=a.register;i("gC69E",function(t,r){e(t.exports,"register",function(){return o},function(e){return o=e});var o,n=new Map;o=function(e,t){for(var r=0;r<t.length-1;r+=2)n.set(t[r],{baseUrl:e,path:t[r+1]})}}),i("5IQP4",function(r,o){e(r.exports,"ORDERS",function(){return i}),e(r.exports,"BASKET_EMPTY",function(){return c}),e(r.exports,"ORDER_NO_PRODUCT",function(){return u}),e(r.exports,"saveCartToLocalStorage",function(){return s}),e(r.exports,"loadCartFromLocalStorage",function(){return l}),e(r.exports,"showErrorMessage",function(){return d});var n=a("9s1Hq");let i="Заказы",c="Корзина пуста",u="В заказе нет товаров";function s(e){localStorage.setItem("bag",JSON.stringify(e))}function l(){return JSON.parse(localStorage.getItem("bag"))||[]}function d(e){document.body.innerHTML=`
         <div class="container">
            <div class="link-cart">
                <a href="./index.html" class="link__wrapper">
                   <img src="${t(n)}" alt="\u{438}\u{43A}\u{43E}\u{43D}\u{43A}\u{430} \u{432}\u{435}\u{43A}\u{442}\u{43E}\u{440}\u{430}" class="img__vector" />
                      <p class="link__title">\u{421}\u{43F}\u{438}\u{441}\u{43E}\u{43A} \u{442}\u{43E}\u{432}\u{430}\u{440}\u{43E}\u{432}</p>
                </a>
            </div>
            <h2>${e}</h2>
         </div>
    `}}),i("9s1Hq",function(e,t){e.exports=new URL("ic-Vector.49399ea7.svg",import.meta.url).toString()}),i("3TeFi",function(e,t){e.exports=new URL("rating.cdb36a68.svg",import.meta.url).toString()}),a("gC69E").register(new URL("",import.meta.url).toString(),JSON.parse('["26e6O","checkout.93ed1e3f.js","k6vCI","ic-Vector.49399ea7.svg","1jQ64","rating.cdb36a68.svg","6w1Ih","Line 3.c608a812.svg","aR3v1","checkout.cd1b1d9c.js"]'));var c=a("5IQP4"),u=a("3TeFi"),s={};s=new URL("Line 3.c608a812.svg",import.meta.url).toString();var l=a("kZp87");const d=(0,a("fEUPL").initializeApp)({apiKey:"AIzaSyBQ0ay2192erVHEap3YGibJBct9cWnw1qo",authDomain:"shop-fda0b.firebaseapp.com",projectId:"shop-fda0b",storageBucket:"shop-fda0b.appspot.com",messagingSenderId:"583984113131",appId:"1:583984113131:web:81a003a19230c20e0c65ae"}),p=(0,l.getFirestore)(d),f=document.querySelector(".checkout__bag-list"),_=document.querySelector(".total-text__usd"),g=document.querySelector(".total-final__usd"),m=document.querySelector(".order__btn");async function v(){let e=(0,c.loadCartFromLocalStorage)(),t=document.querySelector(".address__name").textContent,r=document.querySelector(".address__street").textContent,o=document.querySelector(".address__city").textContent,n=document.querySelector(".address__phone").textContent,a=document.querySelector("#selectedPaymentMethod").textContent.trim(),i=e.reduce((e,t)=>e+t.price*t.quantity,0),u={items:e,createdAt:new Date().toLocaleString(),deliveryNameElement:t,deliveryStreetElement:r,deliveryCityElement:o,deliveryPhoneElement:n,paymentMethod:a,totalPrice:i,deliveryCost:6.99,finalTotalPrice:i+6.99};try{await (0,l.addDoc)((0,l.collection)(p,"orders"),u),alert("Заказ успешно размещен!"),localStorage.removeItem("bag"),window.location.href="index.html"}catch(e){console.error("Ошибка при размещении заказа: ",e)}}!function(){let e=(0,c.loadCartFromLocalStorage)(),r=0;if(e.length>0){e.forEach(e=>{let o=document.createElement("div");o.className="checkout__bag-wrapper",o.innerHTML=`
            <div class="bag__card-title" product-card-id="${e.id}">
                <div class="bag__card-img">
                    <img class="img__card-bag"
                     src="${e.imageURL}" alt="${e.model}"/>
                </div>
                <div class="bag__card-info">
                    <h4>${e.model}</h4>
                    <p class="bag__series">${e.series}</p>
                    <p class="bag__description">${e.description}</p>
                    <img class="img-rating" src="${t(u)}" alt="\u{420}\u{435}\u{439}\u{442}\u{438}\u{43D}\u{433}" />
                    <div class="bag__card-price">
                        <div class="price">
                            <div class="price__currency">
                                <p class="label">$</p>
                                <span class="price__number">${e.price.toFixed(2)} \u{445} </span>
                                <p class="counter">${e.quantity}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img src="${t(s)}" alt="\u{420}\u{430}\u{437}\u{434}\u{435}\u{43B}\u{438}\u{442}\u{435}\u{43B}\u{44C}\u{43D}\u{430}\u{44F} \u{43B}\u{438}\u{43D}\u{438}\u{44F}" />
        `,f.appendChild(o),r+=e.price*e.quantity});let o=r+6.99;_.textContent=`$ ${r.toFixed(2)}`,g.textContent=`$ ${o.toFixed(2)}`}else(0,c.showErrorMessage)(c.ORDER_NO_PRODUCT)}(),m.addEventListener("click",v);