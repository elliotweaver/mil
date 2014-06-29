// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

/*!
 * jQuery.ScrollTo
 * Copyright (c) 2007-2014 Ariel Flesler - aflesler<a>gmail<d>com | http://flesler.blogspot.com
 * Licensed under MIT
 * http://flesler.blogspot.com/2007/10/jqueryscrollto.html
 * @projectDescription Easy element scrolling using jQuery.
 * @author Ariel Flesler
 * @version 1.4.12
 */
(function(e){if(typeof define==="function"&&define.amd){define(["jquery"],e)}else{e(jQuery)}})(function(e){function n(t){return e.isFunction(t)||typeof t=="object"?t:{top:t,left:t}}var t=e.scrollTo=function(t,n,r){return e(window).scrollTo(t,n,r)};t.defaults={axis:"xy",duration:parseFloat(e.fn.jquery)>=1.3?0:1,limit:true};t.window=function(t){return e(window)._scrollable()};e.fn._scrollable=function(){return this.map(function(){var t=this,n=!t.nodeName||e.inArray(t.nodeName.toLowerCase(),["iframe","#document","html","body"])!=-1;if(!n)return t;var r=(t.contentWindow||t).document||t.ownerDocument||t;return/webkit/i.test(navigator.userAgent)||r.compatMode=="BackCompat"?r.body:r.documentElement})};e.fn.scrollTo=function(r,i,s){if(typeof i=="object"){s=i;i=0}if(typeof s=="function")s={onAfter:s};if(r=="max")r=9e9;s=e.extend({},t.defaults,s);i=i||s.duration;s.queue=s.queue&&s.axis.length>1;if(s.queue)i/=2;s.offset=n(s.offset);s.over=n(s.over);return this._scrollable().each(function(){function p(e){u.animate(l,i,s.easing,e&&function(){e.call(this,a,s)})}if(r==null)return;var o=this,u=e(o),a=r,f,l={},c=u.is("html,body");switch(typeof a){case"number":case"string":if(/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(a)){a=n(a);break}a=c?e(a):e(a,this);if(!a.length)return;case"object":if(a.is||a.style)f=(a=e(a)).offset()}var h=e.isFunction(s.offset)&&s.offset(o,a)||s.offset;e.each(s.axis.split(""),function(e,n){var r=n=="x"?"Left":"Top",i=r.toLowerCase(),d="scroll"+r,v=o[d],m=t.max(o,n);if(f){l[d]=f[i]+(c?0:v-u.offset()[i]);if(s.margin){l[d]-=parseInt(a.css("margin"+r))||0;l[d]-=parseInt(a.css("border"+r+"Width"))||0}l[d]+=h[i]||0;if(s.over[i])l[d]+=a[n=="x"?"width":"height"]()*s.over[i]}else{var g=a[i];l[d]=g.slice&&g.slice(-1)=="%"?parseFloat(g)/100*m:g}if(s.limit&&/^\d+$/.test(l[d]))l[d]=l[d]<=0?0:Math.min(l[d],m);if(!e&&s.queue){if(v!=l[d])p(s.onAfterFirst);delete l[d]}});p(s.onAfter);}).end()};t.max=function(t,n){var r=n=="x"?"Width":"Height",i="scroll"+r;if(!e(t).is("html,body"))return t[i]-e(t)[r.toLowerCase()]();var s="client"+r,o=t.ownerDocument.documentElement,u=t.ownerDocument.body;return Math.max(o[i],u[i])-Math.min(o[s],u[s])};return t})

/**
 * Copyright (c) 2007-2014 Ariel Flesler - aflesler<a>gmail<d>com | http://flesler.blogspot.com
 * Licensed under MIT
 * @author Ariel Flesler
 * @version 1.3.5
 */
;(function(a){if(typeof define==='function'&&define.amd){define(['jquery'],a)}else{a(jQuery)}}(function($){var g=location.href.replace(/#.*/,'');var h=$.localScroll=function(a){$('body').localScroll(a)};h.defaults={duration:1000,axis:'y',event:'click',stop:true,target:window};$.fn.localScroll=function(a){a=$.extend({},h.defaults,a);if(a.hash&&location.hash){if(a.target)window.scrollTo(0,0);scroll(0,location,a)}return a.lazy?this.on(a.event,'a,area',function(e){if(filter.call(this)){scroll(e,this,a)}}):this.find('a,area').filter(filter).bind(a.event,function(e){scroll(e,this,a)}).end().end();function filter(){return!!this.href&&!!this.hash&&this.href.replace(this.hash,'')==g&&(!a.filter||$(this).is(a.filter))}};h.hash=function(){};function scroll(e,a,b){var c=a.hash.slice(1),elem=document.getElementById(c)||document.getElementsByName(c)[0];if(!elem)return;if(e)e.preventDefault();var d=$(b.target);if(b.lock&&d.is(':animated')||b.onBefore&&b.onBefore(e,elem,d)===false)return;if(b.stop)d._scrollable().stop(true);if(b.hash){var f=elem.id===c?'id':'name',$a=$('<a> </a>').attr(f,c).css({position:'absolute',top:$(window).scrollTop(),left:$(window).scrollLeft()});elem[f]='';$('body').prepend($a);location.hash=a.hash;$a.remove();elem[f]=c}d.scrollTo(elem,b).trigger('notify.serialScroll',[elem])};return h}));