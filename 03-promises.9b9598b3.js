function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},t.parcelRequired7c6=i);var r=i("7Y9D8");const l=document.querySelector(".form");function s(t,n){new Promise(((e,o)=>{const i=Math.random()>.3;setTimeout((()=>{i?e({position:t,delay:n}):o({position:t,delay:n})}),n)})).then((({position:t,delay:n})=>{e(r).Notify.success(`✅ Fulfilled promise ${t} in ${n}ms`)})).catch((({position:t,delay:n})=>{e(r).Notify.failure(`❌ Rejected promise ${t} in ${n}ms`)}))}l.addEventListener("submit",(e=>{e.preventDefault();const t=parseInt(l.elements.delay.value),n=parseInt(l.elements.step.value),o=parseInt(l.elements.amount.value);let i=t;for(let e=1;e<=o;e++)s(e,i),i+=n}));
//# sourceMappingURL=03-promises.9b9598b3.js.map