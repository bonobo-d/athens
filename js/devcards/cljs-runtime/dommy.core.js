goog.provide('dommy.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('dommy.utils');
/**
 * Returns a selector in string format.
 * Accepts string, keyword, or collection.
 */
dommy.core.selector = (function dommy$core$selector(data){
if(cljs.core.coll_QMARK_(data)){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(dommy.core.selector,data));
} else {
if(((typeof data === 'string') || ((data instanceof cljs.core.Keyword)))){
return cljs.core.name(data);
} else {
return null;
}
}
});
dommy.core.text = (function dommy$core$text(elem){
var or__4126__auto__ = elem.textContent;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return elem.innerText;
}
});
dommy.core.html = (function dommy$core$html(elem){
return elem.innerHTML;
});
dommy.core.value = (function dommy$core$value(elem){
return elem.value;
});
dommy.core.class$ = (function dommy$core$class(elem){
return elem.className;
});
dommy.core.attr = (function dommy$core$attr(elem,k){
if(cljs.core.truth_(k)){
return elem.getAttribute(dommy.utils.as_str(k));
} else {
return null;
}
});
/**
 * The computed style of `elem`, optionally specifying the key of
 * a particular style to return
 */
dommy.core.style = (function dommy$core$style(var_args){
var G__40126 = arguments.length;
switch (G__40126) {
case 1:
return dommy.core.style.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.style.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.style.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(window.getComputedStyle(elem));
}));

(dommy.core.style.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return (window.getComputedStyle(elem)[dommy.utils.as_str(k)]);
}));

(dommy.core.style.cljs$lang$maxFixedArity = 2);

dommy.core.px = (function dommy$core$px(elem,k){

var pixels = dommy.core.style.cljs$core$IFn$_invoke$arity$2(elem,k);
if(cljs.core.seq(pixels)){
return parseInt(pixels);
} else {
return null;
}
});
/**
 * Does `elem` contain `c` in its class list
 */
dommy.core.has_class_QMARK_ = (function dommy$core$has_class_QMARK_(elem,c){
var c__$1 = dommy.utils.as_str(c);
var temp__5733__auto__ = elem.classList;
if(cljs.core.truth_(temp__5733__auto__)){
var class_list = temp__5733__auto__;
return class_list.contains(c__$1);
} else {
var temp__5735__auto__ = dommy.core.class$(elem);
if(cljs.core.truth_(temp__5735__auto__)){
var class_name = temp__5735__auto__;
var temp__5735__auto____$1 = dommy.utils.class_index(class_name,c__$1);
if(cljs.core.truth_(temp__5735__auto____$1)){
var i = temp__5735__auto____$1;
return (i >= (0));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Is `elem` hidden (as associated with hide!/show!/toggle!, using display: none)
 */
dommy.core.hidden_QMARK_ = (function dommy$core$hidden_QMARK_(elem){
return (dommy.core.style.cljs$core$IFn$_invoke$arity$2(elem,new cljs.core.Keyword(null,"display","display",242065432)) === "none");
});
/**
 * Returns a map of the bounding client rect of `elem`
 * as a map with [:top :left :right :bottom :width :height]
 */
dommy.core.bounding_client_rect = (function dommy$core$bounding_client_rect(elem){
var r = elem.getBoundingClientRect();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"top","top",-1856271961),r.top,new cljs.core.Keyword(null,"bottom","bottom",-1550509018),r.bottom,new cljs.core.Keyword(null,"left","left",-399115937),r.left,new cljs.core.Keyword(null,"right","right",-452581833),r.right,new cljs.core.Keyword(null,"width","width",-384071477),r.width,new cljs.core.Keyword(null,"height","height",1025178622),r.height], null);
});
dommy.core.parent = (function dommy$core$parent(elem){
return elem.parentNode;
});
dommy.core.children = (function dommy$core$children(elem){
return elem.children;
});
/**
 * Lazy seq of the ancestors of `elem`
 */
dommy.core.ancestors = (function dommy$core$ancestors(elem){
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.iterate(dommy.core.parent,elem));
});
dommy.core.ancestor_nodes = dommy.core.ancestors;
/**
 * Returns a predicate on nodes that match `selector` at the
 * time of this `matches-pred` call (may return outdated results
 * if you fuck with the DOM)
 */
dommy.core.matches_pred = (function dommy$core$matches_pred(var_args){
var G__40128 = arguments.length;
switch (G__40128) {
case 2:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2 = (function (base,selector){
var matches = dommy.utils.__GT_Array(base.querySelectorAll(dommy.core.selector(selector)));
return (function (elem){
return (matches.indexOf(elem) >= (0));
});
}));

(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1 = (function (selector){
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(document,selector);
}));

(dommy.core.matches_pred.cljs$lang$maxFixedArity = 2);

/**
 * Closest ancestor of `elem` (up to `base`, if provided)
 * that matches `selector`
 */
dommy.core.closest = (function dommy$core$closest(var_args){
var G__40131 = arguments.length;
switch (G__40131) {
case 3:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.closest.cljs$core$IFn$_invoke$arity$3 = (function (base,elem,selector){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(base,selector),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__40129_SHARP_){
return (!((p1__40129_SHARP_ === base)));
}),dommy.core.ancestors(elem))));
}));

(dommy.core.closest.cljs$core$IFn$_invoke$arity$2 = (function (elem,selector){
return dommy.core.closest.cljs$core$IFn$_invoke$arity$3(document.body,elem,selector);
}));

(dommy.core.closest.cljs$lang$maxFixedArity = 3);

/**
 * Is `descendant` a descendant of `ancestor`?
 * (http://goo.gl/T8pgCX)
 */
dommy.core.descendant_QMARK_ = (function dommy$core$descendant_QMARK_(descendant,ancestor){
if(cljs.core.truth_(ancestor.contains)){
return ancestor.contains(descendant);
} else {
if(cljs.core.truth_(ancestor.compareDocumentPosition)){
return ((ancestor.compareDocumentPosition(descendant) & (1 << (4))) != 0);
} else {
return null;
}
}
});
/**
 * Set the textContent of `elem` to `text`, fall back to innerText
 */
dommy.core.set_text_BANG_ = (function dommy$core$set_text_BANG_(elem,text){
if((!((void 0 === elem.textContent)))){
(elem.textContent = text);
} else {
(elem.innerText = text);
}

return elem;
});
/**
 * Set the innerHTML of `elem` to `html`
 */
dommy.core.set_html_BANG_ = (function dommy$core$set_html_BANG_(elem,html){
(elem.innerHTML = html);

return elem;
});
/**
 * Set the value of `elem` to `value`
 */
dommy.core.set_value_BANG_ = (function dommy$core$set_value_BANG_(elem,value){
(elem.value = value);

return elem;
});
/**
 * Set the css class of `elem` to `elem`
 */
dommy.core.set_class_BANG_ = (function dommy$core$set_class_BANG_(elem,c){
return (elem.className = c);
});
/**
 * Set the style of `elem` using key-value pairs:
 * 
 *    (set-style! elem :display "block" :color "red")
 */
dommy.core.set_style_BANG_ = (function dommy$core$set_style_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___40584 = arguments.length;
var i__4737__auto___40585 = (0);
while(true){
if((i__4737__auto___40585 < len__4736__auto___40584)){
args__4742__auto__.push((arguments[i__4737__auto___40585]));

var G__40586 = (i__4737__auto___40585 + (1));
i__4737__auto___40585 = G__40586;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){
if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var style = elem.style;
var seq__40141_40587 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__40142_40588 = null;
var count__40143_40589 = (0);
var i__40144_40590 = (0);
while(true){
if((i__40144_40590 < count__40143_40589)){
var vec__40153_40591 = chunk__40142_40588.cljs$core$IIndexed$_nth$arity$2(null,i__40144_40590);
var k_40592 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40153_40591,(0),null);
var v_40593 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40153_40591,(1),null);
style.setProperty(dommy.utils.as_str(k_40592),v_40593);


var G__40594 = seq__40141_40587;
var G__40595 = chunk__40142_40588;
var G__40596 = count__40143_40589;
var G__40597 = (i__40144_40590 + (1));
seq__40141_40587 = G__40594;
chunk__40142_40588 = G__40595;
count__40143_40589 = G__40596;
i__40144_40590 = G__40597;
continue;
} else {
var temp__5735__auto___40598 = cljs.core.seq(seq__40141_40587);
if(temp__5735__auto___40598){
var seq__40141_40599__$1 = temp__5735__auto___40598;
if(cljs.core.chunked_seq_QMARK_(seq__40141_40599__$1)){
var c__4556__auto___40600 = cljs.core.chunk_first(seq__40141_40599__$1);
var G__40601 = cljs.core.chunk_rest(seq__40141_40599__$1);
var G__40602 = c__4556__auto___40600;
var G__40603 = cljs.core.count(c__4556__auto___40600);
var G__40604 = (0);
seq__40141_40587 = G__40601;
chunk__40142_40588 = G__40602;
count__40143_40589 = G__40603;
i__40144_40590 = G__40604;
continue;
} else {
var vec__40157_40605 = cljs.core.first(seq__40141_40599__$1);
var k_40606 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40157_40605,(0),null);
var v_40607 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40157_40605,(1),null);
style.setProperty(dommy.utils.as_str(k_40606),v_40607);


var G__40608 = cljs.core.next(seq__40141_40599__$1);
var G__40609 = null;
var G__40610 = (0);
var G__40611 = (0);
seq__40141_40587 = G__40608;
chunk__40142_40588 = G__40609;
count__40143_40589 = G__40610;
i__40144_40590 = G__40611;
continue;
}
} else {
}
}
break;
}

return elem;
}));

(dommy.core.set_style_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq40137){
var G__40138 = cljs.core.first(seq40137);
var seq40137__$1 = cljs.core.next(seq40137);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40138,seq40137__$1);
}));

/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___40612 = arguments.length;
var i__4737__auto___40613 = (0);
while(true){
if((i__4737__auto___40613 < len__4736__auto___40612)){
args__4742__auto__.push((arguments[i__4737__auto___40613]));

var G__40614 = (i__4737__auto___40613 + (1));
i__4737__auto___40613 = G__40614;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,keywords){
var style = elem.style;
var seq__40165_40615 = cljs.core.seq(keywords);
var chunk__40166_40616 = null;
var count__40167_40617 = (0);
var i__40168_40618 = (0);
while(true){
if((i__40168_40618 < count__40167_40617)){
var kw_40619 = chunk__40166_40616.cljs$core$IIndexed$_nth$arity$2(null,i__40168_40618);
style.removeProperty(dommy.utils.as_str(kw_40619));


var G__40620 = seq__40165_40615;
var G__40621 = chunk__40166_40616;
var G__40622 = count__40167_40617;
var G__40623 = (i__40168_40618 + (1));
seq__40165_40615 = G__40620;
chunk__40166_40616 = G__40621;
count__40167_40617 = G__40622;
i__40168_40618 = G__40623;
continue;
} else {
var temp__5735__auto___40624 = cljs.core.seq(seq__40165_40615);
if(temp__5735__auto___40624){
var seq__40165_40625__$1 = temp__5735__auto___40624;
if(cljs.core.chunked_seq_QMARK_(seq__40165_40625__$1)){
var c__4556__auto___40626 = cljs.core.chunk_first(seq__40165_40625__$1);
var G__40627 = cljs.core.chunk_rest(seq__40165_40625__$1);
var G__40628 = c__4556__auto___40626;
var G__40629 = cljs.core.count(c__4556__auto___40626);
var G__40630 = (0);
seq__40165_40615 = G__40627;
chunk__40166_40616 = G__40628;
count__40167_40617 = G__40629;
i__40168_40618 = G__40630;
continue;
} else {
var kw_40631 = cljs.core.first(seq__40165_40625__$1);
style.removeProperty(dommy.utils.as_str(kw_40631));


var G__40632 = cljs.core.next(seq__40165_40625__$1);
var G__40633 = null;
var G__40634 = (0);
var G__40635 = (0);
seq__40165_40615 = G__40632;
chunk__40166_40616 = G__40633;
count__40167_40617 = G__40634;
i__40168_40618 = G__40635;
continue;
}
} else {
}
}
break;
}

return elem;
}));

(dommy.core.remove_style_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq40161){
var G__40162 = cljs.core.first(seq40161);
var seq40161__$1 = cljs.core.next(seq40161);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40162,seq40161__$1);
}));

dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___40636 = arguments.length;
var i__4737__auto___40637 = (0);
while(true){
if((i__4737__auto___40637 < len__4736__auto___40636)){
args__4742__auto__.push((arguments[i__4737__auto___40637]));

var G__40638 = (i__4737__auto___40637 + (1));
i__4737__auto___40637 = G__40638;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){

if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var seq__40172_40639 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__40173_40640 = null;
var count__40174_40641 = (0);
var i__40175_40642 = (0);
while(true){
if((i__40175_40642 < count__40174_40641)){
var vec__40182_40643 = chunk__40173_40640.cljs$core$IIndexed$_nth$arity$2(null,i__40175_40642);
var k_40644 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40182_40643,(0),null);
var v_40645 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40182_40643,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_40644,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_40645),"px"].join('')], 0));


var G__40646 = seq__40172_40639;
var G__40647 = chunk__40173_40640;
var G__40648 = count__40174_40641;
var G__40649 = (i__40175_40642 + (1));
seq__40172_40639 = G__40646;
chunk__40173_40640 = G__40647;
count__40174_40641 = G__40648;
i__40175_40642 = G__40649;
continue;
} else {
var temp__5735__auto___40650 = cljs.core.seq(seq__40172_40639);
if(temp__5735__auto___40650){
var seq__40172_40651__$1 = temp__5735__auto___40650;
if(cljs.core.chunked_seq_QMARK_(seq__40172_40651__$1)){
var c__4556__auto___40652 = cljs.core.chunk_first(seq__40172_40651__$1);
var G__40653 = cljs.core.chunk_rest(seq__40172_40651__$1);
var G__40654 = c__4556__auto___40652;
var G__40655 = cljs.core.count(c__4556__auto___40652);
var G__40656 = (0);
seq__40172_40639 = G__40653;
chunk__40173_40640 = G__40654;
count__40174_40641 = G__40655;
i__40175_40642 = G__40656;
continue;
} else {
var vec__40185_40657 = cljs.core.first(seq__40172_40651__$1);
var k_40658 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40185_40657,(0),null);
var v_40659 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40185_40657,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_40658,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_40659),"px"].join('')], 0));


var G__40660 = cljs.core.next(seq__40172_40651__$1);
var G__40661 = null;
var G__40662 = (0);
var G__40663 = (0);
seq__40172_40639 = G__40660;
chunk__40173_40640 = G__40661;
count__40174_40641 = G__40662;
i__40175_40642 = G__40663;
continue;
}
} else {
}
}
break;
}

return elem;
}));

(dommy.core.set_px_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq40170){
var G__40171 = cljs.core.first(seq40170);
var seq40170__$1 = cljs.core.next(seq40170);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40171,seq40170__$1);
}));

/**
 * Sets dom attributes on and returns `elem`.
 * Attributes without values will be set to their name:
 * 
 *     (set-attr! elem :disabled)
 * 
 * With values, the function takes variadic kv pairs:
 * 
 *     (set-attr! elem :id "some-id"
 *                     :name "some-name")
 */
dommy.core.set_attr_BANG_ = (function dommy$core$set_attr_BANG_(var_args){
var G__40193 = arguments.length;
switch (G__40193) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___40665 = arguments.length;
var i__4737__auto___40666 = (0);
while(true){
if((i__4737__auto___40666 < len__4736__auto___40665)){
args_arr__4757__auto__.push((arguments[i__4737__auto___40666]));

var G__40667 = (i__4737__auto___40666 + (1));
i__4737__auto___40666 = G__40667;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((3)),(0),null));
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4758__auto__);

}
});

(dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k,dommy.utils.as_str(k));
}));

(dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,v){
var k__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_(v)){
if(cljs.core.fn_QMARK_(v)){
var G__40194 = elem;
(G__40194[k__$1] = v);

return G__40194;
} else {
var G__40195 = elem;
G__40195.setAttribute(k__$1,v);

return G__40195;
}
} else {
return null;
}
}));

(dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,v,kvs){
if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var seq__40196_40669 = cljs.core.seq(cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs)));
var chunk__40197_40670 = null;
var count__40198_40671 = (0);
var i__40199_40672 = (0);
while(true){
if((i__40199_40672 < count__40198_40671)){
var vec__40206_40674 = chunk__40197_40670.cljs$core$IIndexed$_nth$arity$2(null,i__40199_40672);
var k_40675__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40206_40674,(0),null);
var v_40676__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40206_40674,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_40675__$1,v_40676__$1);


var G__40677 = seq__40196_40669;
var G__40678 = chunk__40197_40670;
var G__40679 = count__40198_40671;
var G__40680 = (i__40199_40672 + (1));
seq__40196_40669 = G__40677;
chunk__40197_40670 = G__40678;
count__40198_40671 = G__40679;
i__40199_40672 = G__40680;
continue;
} else {
var temp__5735__auto___40681 = cljs.core.seq(seq__40196_40669);
if(temp__5735__auto___40681){
var seq__40196_40682__$1 = temp__5735__auto___40681;
if(cljs.core.chunked_seq_QMARK_(seq__40196_40682__$1)){
var c__4556__auto___40683 = cljs.core.chunk_first(seq__40196_40682__$1);
var G__40684 = cljs.core.chunk_rest(seq__40196_40682__$1);
var G__40685 = c__4556__auto___40683;
var G__40686 = cljs.core.count(c__4556__auto___40683);
var G__40687 = (0);
seq__40196_40669 = G__40684;
chunk__40197_40670 = G__40685;
count__40198_40671 = G__40686;
i__40199_40672 = G__40687;
continue;
} else {
var vec__40209_40688 = cljs.core.first(seq__40196_40682__$1);
var k_40689__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40209_40688,(0),null);
var v_40690__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40209_40688,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_40689__$1,v_40690__$1);


var G__40691 = cljs.core.next(seq__40196_40682__$1);
var G__40692 = null;
var G__40693 = (0);
var G__40694 = (0);
seq__40196_40669 = G__40691;
chunk__40197_40670 = G__40692;
count__40198_40671 = G__40693;
i__40199_40672 = G__40694;
continue;
}
} else {
}
}
break;
}

return elem;
}));

/** @this {Function} */
(dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq40189){
var G__40190 = cljs.core.first(seq40189);
var seq40189__$1 = cljs.core.next(seq40189);
var G__40191 = cljs.core.first(seq40189__$1);
var seq40189__$2 = cljs.core.next(seq40189__$1);
var G__40192 = cljs.core.first(seq40189__$2);
var seq40189__$3 = cljs.core.next(seq40189__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40190,G__40191,G__40192,seq40189__$3);
}));

(dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3));

/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var G__40216 = arguments.length;
switch (G__40216) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___40696 = arguments.length;
var i__4737__auto___40697 = (0);
while(true){
if((i__4737__auto___40697 < len__4736__auto___40696)){
args_arr__4757__auto__.push((arguments[i__4737__auto___40697]));

var G__40698 = (i__4737__auto___40697 + (1));
i__4737__auto___40697 = G__40698;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
var k_40699__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_((function (){var fexpr__40217 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null);
return (fexpr__40217.cljs$core$IFn$_invoke$arity$1 ? fexpr__40217.cljs$core$IFn$_invoke$arity$1(k_40699__$1) : fexpr__40217.call(null,k_40699__$1));
})())){
dommy.core.set_class_BANG_(elem,"");
} else {
elem.removeAttribute(k_40699__$1);
}

return elem;
}));

(dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__40218_40700 = cljs.core.seq(cljs.core.cons(k,ks));
var chunk__40219_40701 = null;
var count__40220_40702 = (0);
var i__40221_40703 = (0);
while(true){
if((i__40221_40703 < count__40220_40702)){
var k_40705__$1 = chunk__40219_40701.cljs$core$IIndexed$_nth$arity$2(null,i__40221_40703);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_40705__$1);


var G__40707 = seq__40218_40700;
var G__40708 = chunk__40219_40701;
var G__40709 = count__40220_40702;
var G__40710 = (i__40221_40703 + (1));
seq__40218_40700 = G__40707;
chunk__40219_40701 = G__40708;
count__40220_40702 = G__40709;
i__40221_40703 = G__40710;
continue;
} else {
var temp__5735__auto___40711 = cljs.core.seq(seq__40218_40700);
if(temp__5735__auto___40711){
var seq__40218_40712__$1 = temp__5735__auto___40711;
if(cljs.core.chunked_seq_QMARK_(seq__40218_40712__$1)){
var c__4556__auto___40713 = cljs.core.chunk_first(seq__40218_40712__$1);
var G__40714 = cljs.core.chunk_rest(seq__40218_40712__$1);
var G__40715 = c__4556__auto___40713;
var G__40716 = cljs.core.count(c__4556__auto___40713);
var G__40717 = (0);
seq__40218_40700 = G__40714;
chunk__40219_40701 = G__40715;
count__40220_40702 = G__40716;
i__40221_40703 = G__40717;
continue;
} else {
var k_40718__$1 = cljs.core.first(seq__40218_40712__$1);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_40718__$1);


var G__40719 = cljs.core.next(seq__40218_40712__$1);
var G__40720 = null;
var G__40721 = (0);
var G__40722 = (0);
seq__40218_40700 = G__40719;
chunk__40219_40701 = G__40720;
count__40220_40702 = G__40721;
i__40221_40703 = G__40722;
continue;
}
} else {
}
}
break;
}

return elem;
}));

/** @this {Function} */
(dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq40213){
var G__40214 = cljs.core.first(seq40213);
var seq40213__$1 = cljs.core.next(seq40213);
var G__40215 = cljs.core.first(seq40213__$1);
var seq40213__$2 = cljs.core.next(seq40213__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40214,G__40215,seq40213__$2);
}));

(dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var G__40223 = arguments.length;
switch (G__40223) {
case 2:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k,cljs.core.boolean$(dommy.core.attr(elem,k)));
}));

(dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,add_QMARK_){
if(add_QMARK_){
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k);
} else {
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k);
}
}));

(dommy.core.toggle_attr_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Add `classes` to `elem`, trying to use Element::classList, and
 * falling back to fast string parsing/manipulation
 */
dommy.core.add_class_BANG_ = (function dommy$core$add_class_BANG_(var_args){
var G__40228 = arguments.length;
switch (G__40228) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___40727 = arguments.length;
var i__4737__auto___40728 = (0);
while(true){
if((i__4737__auto___40728 < len__4736__auto___40727)){
args_arr__4757__auto__.push((arguments[i__4737__auto___40728]));

var G__40729 = (i__4737__auto___40728 + (1));
i__4737__auto___40728 = G__40729;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,classes){
var classes__$1 = clojure.string.trim(dommy.utils.as_str(classes)).split(/\s+/);
if(cljs.core.seq(classes__$1)){
var temp__5733__auto___40730 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___40730)){
var class_list_40731 = temp__5733__auto___40730;
var seq__40229_40732 = cljs.core.seq(classes__$1);
var chunk__40230_40733 = null;
var count__40231_40734 = (0);
var i__40232_40735 = (0);
while(true){
if((i__40232_40735 < count__40231_40734)){
var c_40736 = chunk__40230_40733.cljs$core$IIndexed$_nth$arity$2(null,i__40232_40735);
class_list_40731.add(c_40736);


var G__40737 = seq__40229_40732;
var G__40738 = chunk__40230_40733;
var G__40739 = count__40231_40734;
var G__40740 = (i__40232_40735 + (1));
seq__40229_40732 = G__40737;
chunk__40230_40733 = G__40738;
count__40231_40734 = G__40739;
i__40232_40735 = G__40740;
continue;
} else {
var temp__5735__auto___40741 = cljs.core.seq(seq__40229_40732);
if(temp__5735__auto___40741){
var seq__40229_40742__$1 = temp__5735__auto___40741;
if(cljs.core.chunked_seq_QMARK_(seq__40229_40742__$1)){
var c__4556__auto___40743 = cljs.core.chunk_first(seq__40229_40742__$1);
var G__40744 = cljs.core.chunk_rest(seq__40229_40742__$1);
var G__40745 = c__4556__auto___40743;
var G__40746 = cljs.core.count(c__4556__auto___40743);
var G__40747 = (0);
seq__40229_40732 = G__40744;
chunk__40230_40733 = G__40745;
count__40231_40734 = G__40746;
i__40232_40735 = G__40747;
continue;
} else {
var c_40748 = cljs.core.first(seq__40229_40742__$1);
class_list_40731.add(c_40748);


var G__40749 = cljs.core.next(seq__40229_40742__$1);
var G__40750 = null;
var G__40751 = (0);
var G__40752 = (0);
seq__40229_40732 = G__40749;
chunk__40230_40733 = G__40750;
count__40231_40734 = G__40751;
i__40232_40735 = G__40752;
continue;
}
} else {
}
}
break;
}
} else {
var seq__40233_40753 = cljs.core.seq(classes__$1);
var chunk__40234_40754 = null;
var count__40235_40755 = (0);
var i__40236_40756 = (0);
while(true){
if((i__40236_40756 < count__40235_40755)){
var c_40757 = chunk__40234_40754.cljs$core$IIndexed$_nth$arity$2(null,i__40236_40756);
var class_name_40758 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_40758,c_40757))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_40758 === ""))?c_40757:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_40758)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_40757)].join('')));
}


var G__40759 = seq__40233_40753;
var G__40760 = chunk__40234_40754;
var G__40761 = count__40235_40755;
var G__40762 = (i__40236_40756 + (1));
seq__40233_40753 = G__40759;
chunk__40234_40754 = G__40760;
count__40235_40755 = G__40761;
i__40236_40756 = G__40762;
continue;
} else {
var temp__5735__auto___40763 = cljs.core.seq(seq__40233_40753);
if(temp__5735__auto___40763){
var seq__40233_40764__$1 = temp__5735__auto___40763;
if(cljs.core.chunked_seq_QMARK_(seq__40233_40764__$1)){
var c__4556__auto___40765 = cljs.core.chunk_first(seq__40233_40764__$1);
var G__40766 = cljs.core.chunk_rest(seq__40233_40764__$1);
var G__40767 = c__4556__auto___40765;
var G__40768 = cljs.core.count(c__4556__auto___40765);
var G__40769 = (0);
seq__40233_40753 = G__40766;
chunk__40234_40754 = G__40767;
count__40235_40755 = G__40768;
i__40236_40756 = G__40769;
continue;
} else {
var c_40770 = cljs.core.first(seq__40233_40764__$1);
var class_name_40771 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_40771,c_40770))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_40771 === ""))?c_40770:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_40771)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_40770)].join('')));
}


var G__40772 = cljs.core.next(seq__40233_40764__$1);
var G__40773 = null;
var G__40774 = (0);
var G__40775 = (0);
seq__40233_40753 = G__40772;
chunk__40234_40754 = G__40773;
count__40235_40755 = G__40774;
i__40236_40756 = G__40775;
continue;
}
} else {
}
}
break;
}
}
} else {
}

return elem;
}));

(dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,classes,more_classes){
var seq__40237_40776 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));
var chunk__40238_40777 = null;
var count__40239_40778 = (0);
var i__40240_40779 = (0);
while(true){
if((i__40240_40779 < count__40239_40778)){
var c_40780 = chunk__40238_40777.cljs$core$IIndexed$_nth$arity$2(null,i__40240_40779);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_40780);


var G__40781 = seq__40237_40776;
var G__40782 = chunk__40238_40777;
var G__40783 = count__40239_40778;
var G__40784 = (i__40240_40779 + (1));
seq__40237_40776 = G__40781;
chunk__40238_40777 = G__40782;
count__40239_40778 = G__40783;
i__40240_40779 = G__40784;
continue;
} else {
var temp__5735__auto___40785 = cljs.core.seq(seq__40237_40776);
if(temp__5735__auto___40785){
var seq__40237_40786__$1 = temp__5735__auto___40785;
if(cljs.core.chunked_seq_QMARK_(seq__40237_40786__$1)){
var c__4556__auto___40787 = cljs.core.chunk_first(seq__40237_40786__$1);
var G__40788 = cljs.core.chunk_rest(seq__40237_40786__$1);
var G__40789 = c__4556__auto___40787;
var G__40790 = cljs.core.count(c__4556__auto___40787);
var G__40791 = (0);
seq__40237_40776 = G__40788;
chunk__40238_40777 = G__40789;
count__40239_40778 = G__40790;
i__40240_40779 = G__40791;
continue;
} else {
var c_40792 = cljs.core.first(seq__40237_40786__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_40792);


var G__40793 = cljs.core.next(seq__40237_40786__$1);
var G__40794 = null;
var G__40795 = (0);
var G__40796 = (0);
seq__40237_40776 = G__40793;
chunk__40238_40777 = G__40794;
count__40239_40778 = G__40795;
i__40240_40779 = G__40796;
continue;
}
} else {
}
}
break;
}

return elem;
}));

/** @this {Function} */
(dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq40225){
var G__40226 = cljs.core.first(seq40225);
var seq40225__$1 = cljs.core.next(seq40225);
var G__40227 = cljs.core.first(seq40225__$1);
var seq40225__$2 = cljs.core.next(seq40225__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40226,G__40227,seq40225__$2);
}));

(dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var G__40245 = arguments.length;
switch (G__40245) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___40798 = arguments.length;
var i__4737__auto___40799 = (0);
while(true){
if((i__4737__auto___40799 < len__4736__auto___40798)){
args_arr__4757__auto__.push((arguments[i__4737__auto___40799]));

var G__40800 = (i__4737__auto___40799 + (1));
i__4737__auto___40799 = G__40800;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str(c);
var temp__5733__auto___40801 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___40801)){
var class_list_40802 = temp__5733__auto___40801;
class_list_40802.remove(c__$1);
} else {
var class_name_40803 = dommy.core.class$(elem);
var new_class_name_40804 = dommy.utils.remove_class_str(class_name_40803,c__$1);
if((class_name_40803 === new_class_name_40804)){
} else {
dommy.core.set_class_BANG_(elem,new_class_name_40804);
}
}

return elem;
}));

(dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__40246 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(classes,class$));
var chunk__40247 = null;
var count__40248 = (0);
var i__40249 = (0);
while(true){
if((i__40249 < count__40248)){
var c = chunk__40247.cljs$core$IIndexed$_nth$arity$2(null,i__40249);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__40805 = seq__40246;
var G__40806 = chunk__40247;
var G__40807 = count__40248;
var G__40808 = (i__40249 + (1));
seq__40246 = G__40805;
chunk__40247 = G__40806;
count__40248 = G__40807;
i__40249 = G__40808;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__40246);
if(temp__5735__auto__){
var seq__40246__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40246__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__40246__$1);
var G__40809 = cljs.core.chunk_rest(seq__40246__$1);
var G__40810 = c__4556__auto__;
var G__40811 = cljs.core.count(c__4556__auto__);
var G__40812 = (0);
seq__40246 = G__40809;
chunk__40247 = G__40810;
count__40248 = G__40811;
i__40249 = G__40812;
continue;
} else {
var c = cljs.core.first(seq__40246__$1);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__40813 = cljs.core.next(seq__40246__$1);
var G__40814 = null;
var G__40815 = (0);
var G__40816 = (0);
seq__40246 = G__40813;
chunk__40247 = G__40814;
count__40248 = G__40815;
i__40249 = G__40816;
continue;
}
} else {
return null;
}
}
break;
}
}));

/** @this {Function} */
(dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq40242){
var G__40243 = cljs.core.first(seq40242);
var seq40242__$1 = cljs.core.next(seq40242);
var G__40244 = cljs.core.first(seq40242__$1);
var seq40242__$2 = cljs.core.next(seq40242__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40243,G__40244,seq40242__$2);
}));

(dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var G__40251 = arguments.length;
switch (G__40251) {
case 2:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str(c);
var temp__5733__auto___40818 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___40818)){
var class_list_40819 = temp__5733__auto___40818;
class_list_40819.toggle(c__$1);
} else {
dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3(elem,c__$1,(!(dommy.core.has_class_QMARK_(elem,c__$1))));
}

return elem;
}));

(dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,class$,add_QMARK_){
if(add_QMARK_){
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,class$);
} else {
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,class$);
}

return elem;
}));

(dommy.core.toggle_class_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Display or hide the given `elem` (using display: none).
 * Takes an optional boolean `show?`
 */
dommy.core.toggle_BANG_ = (function dommy$core$toggle_BANG_(var_args){
var G__40254 = arguments.length;
switch (G__40254) {
case 2:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,show_QMARK_){
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"display","display",242065432),((show_QMARK_)?"":"none")], 0));
}));

(dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(elem,dommy.core.hidden_QMARK_(elem));
}));

(dommy.core.toggle_BANG_.cljs$lang$maxFixedArity = 2);

dommy.core.hide_BANG_ = (function dommy$core$hide_BANG_(elem){
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(elem,false);
});
dommy.core.show_BANG_ = (function dommy$core$show_BANG_(elem){
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(elem,true);
});
dommy.core.scroll_into_view = (function dommy$core$scroll_into_view(elem,align_with_top_QMARK_){
var top = new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(dommy.core.bounding_client_rect(elem));
if((window.innerHeight < (top + elem.offsetHeight))){
return elem.scrollIntoView(align_with_top_QMARK_);
} else {
return null;
}
});
dommy.core.create_element = (function dommy$core$create_element(var_args){
var G__40258 = arguments.length;
switch (G__40258) {
case 1:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.create_element.cljs$core$IFn$_invoke$arity$1 = (function (tag){
return document.createElement(dommy.utils.as_str(tag));
}));

(dommy.core.create_element.cljs$core$IFn$_invoke$arity$2 = (function (tag_ns,tag){
return document.createElementNS(dommy.utils.as_str(tag_ns),dommy.utils.as_str(tag));
}));

(dommy.core.create_element.cljs$lang$maxFixedArity = 2);

dommy.core.create_text_node = (function dommy$core$create_text_node(text){
return document.createTextNode(text);
});
/**
 * Clears all children from `elem`
 */
dommy.core.clear_BANG_ = (function dommy$core$clear_BANG_(elem){
return dommy.core.set_html_BANG_(elem,"");
});
/**
 * Append `child` to `parent`
 */
dommy.core.append_BANG_ = (function dommy$core$append_BANG_(var_args){
var G__40263 = arguments.length;
switch (G__40263) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___40823 = arguments.length;
var i__4737__auto___40824 = (0);
while(true){
if((i__4737__auto___40824 < len__4736__auto___40823)){
args_arr__4757__auto__.push((arguments[i__4737__auto___40824]));

var G__40825 = (i__4737__auto___40824 + (1));
i__4737__auto___40824 = G__40825;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__40264 = parent;
G__40264.appendChild(child);

return G__40264;
}));

(dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__40265_40826 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__40266_40827 = null;
var count__40267_40828 = (0);
var i__40268_40829 = (0);
while(true){
if((i__40268_40829 < count__40267_40828)){
var c_40830 = chunk__40266_40827.cljs$core$IIndexed$_nth$arity$2(null,i__40268_40829);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_40830);


var G__40831 = seq__40265_40826;
var G__40832 = chunk__40266_40827;
var G__40833 = count__40267_40828;
var G__40834 = (i__40268_40829 + (1));
seq__40265_40826 = G__40831;
chunk__40266_40827 = G__40832;
count__40267_40828 = G__40833;
i__40268_40829 = G__40834;
continue;
} else {
var temp__5735__auto___40835 = cljs.core.seq(seq__40265_40826);
if(temp__5735__auto___40835){
var seq__40265_40836__$1 = temp__5735__auto___40835;
if(cljs.core.chunked_seq_QMARK_(seq__40265_40836__$1)){
var c__4556__auto___40837 = cljs.core.chunk_first(seq__40265_40836__$1);
var G__40838 = cljs.core.chunk_rest(seq__40265_40836__$1);
var G__40839 = c__4556__auto___40837;
var G__40840 = cljs.core.count(c__4556__auto___40837);
var G__40841 = (0);
seq__40265_40826 = G__40838;
chunk__40266_40827 = G__40839;
count__40267_40828 = G__40840;
i__40268_40829 = G__40841;
continue;
} else {
var c_40842 = cljs.core.first(seq__40265_40836__$1);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_40842);


var G__40843 = cljs.core.next(seq__40265_40836__$1);
var G__40844 = null;
var G__40845 = (0);
var G__40846 = (0);
seq__40265_40826 = G__40843;
chunk__40266_40827 = G__40844;
count__40267_40828 = G__40845;
i__40268_40829 = G__40846;
continue;
}
} else {
}
}
break;
}

return parent;
}));

/** @this {Function} */
(dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq40260){
var G__40261 = cljs.core.first(seq40260);
var seq40260__$1 = cljs.core.next(seq40260);
var G__40262 = cljs.core.first(seq40260__$1);
var seq40260__$2 = cljs.core.next(seq40260__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40261,G__40262,seq40260__$2);
}));

(dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var G__40273 = arguments.length;
switch (G__40273) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___40848 = arguments.length;
var i__4737__auto___40849 = (0);
while(true){
if((i__4737__auto___40849 < len__4736__auto___40848)){
args_arr__4757__auto__.push((arguments[i__4737__auto___40849]));

var G__40850 = (i__4737__auto___40849 + (1));
i__4737__auto___40849 = G__40850;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__40274 = parent;
G__40274.insertBefore(child,parent.firstChild);

return G__40274;
}));

(dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__40275_40851 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__40276_40852 = null;
var count__40277_40853 = (0);
var i__40278_40854 = (0);
while(true){
if((i__40278_40854 < count__40277_40853)){
var c_40856 = chunk__40276_40852.cljs$core$IIndexed$_nth$arity$2(null,i__40278_40854);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_40856);


var G__40857 = seq__40275_40851;
var G__40858 = chunk__40276_40852;
var G__40859 = count__40277_40853;
var G__40860 = (i__40278_40854 + (1));
seq__40275_40851 = G__40857;
chunk__40276_40852 = G__40858;
count__40277_40853 = G__40859;
i__40278_40854 = G__40860;
continue;
} else {
var temp__5735__auto___40861 = cljs.core.seq(seq__40275_40851);
if(temp__5735__auto___40861){
var seq__40275_40863__$1 = temp__5735__auto___40861;
if(cljs.core.chunked_seq_QMARK_(seq__40275_40863__$1)){
var c__4556__auto___40864 = cljs.core.chunk_first(seq__40275_40863__$1);
var G__40865 = cljs.core.chunk_rest(seq__40275_40863__$1);
var G__40866 = c__4556__auto___40864;
var G__40867 = cljs.core.count(c__4556__auto___40864);
var G__40868 = (0);
seq__40275_40851 = G__40865;
chunk__40276_40852 = G__40866;
count__40277_40853 = G__40867;
i__40278_40854 = G__40868;
continue;
} else {
var c_40869 = cljs.core.first(seq__40275_40863__$1);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_40869);


var G__40870 = cljs.core.next(seq__40275_40863__$1);
var G__40871 = null;
var G__40872 = (0);
var G__40873 = (0);
seq__40275_40851 = G__40870;
chunk__40276_40852 = G__40871;
count__40277_40853 = G__40872;
i__40278_40854 = G__40873;
continue;
}
} else {
}
}
break;
}

return parent;
}));

/** @this {Function} */
(dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq40270){
var G__40271 = cljs.core.first(seq40270);
var seq40270__$1 = cljs.core.next(seq40270);
var G__40272 = cljs.core.first(seq40270__$1);
var seq40270__$2 = cljs.core.next(seq40270__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40271,G__40272,seq40270__$2);
}));

(dommy.core.prepend_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Insert `elem` before `other`, `other` must have a parent
 */
dommy.core.insert_before_BANG_ = (function dommy$core$insert_before_BANG_(elem,other){
var p = dommy.core.parent(other);
if(cljs.core.truth_(p)){
} else {
throw (new Error(["Assert failed: ","Target element must have a parent","\n","p"].join('')));
}

p.insertBefore(elem,other);

return elem;
});
/**
 * Insert `elem` after `other`, `other` must have a parent
 */
dommy.core.insert_after_BANG_ = (function dommy$core$insert_after_BANG_(elem,other){
var temp__5733__auto___40875 = other.nextSibling;
if(cljs.core.truth_(temp__5733__auto___40875)){
var next_40876 = temp__5733__auto___40875;
dommy.core.insert_before_BANG_(elem,next_40876);
} else {
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(dommy.core.parent(other),elem);
}

return elem;
});
/**
 * Replace `elem` with `new`, return `new`
 */
dommy.core.replace_BANG_ = (function dommy$core$replace_BANG_(elem,new$){
var p = dommy.core.parent(elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error(["Assert failed: ","Target element must have a parent","\n","p"].join('')));
}

p.replaceChild(new$,elem);

return new$;
});
/**
 * Replace children of `elem` with `child`
 */
dommy.core.replace_contents_BANG_ = (function dommy$core$replace_contents_BANG_(p,child){
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(dommy.core.clear_BANG_(p),child);
});
/**
 * Remove `elem` from `parent`, return `parent`
 */
dommy.core.remove_BANG_ = (function dommy$core$remove_BANG_(var_args){
var G__40280 = arguments.length;
switch (G__40280) {
case 1:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
var p = dommy.core.parent(elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error(["Assert failed: ","Target element must have a parent","\n","p"].join('')));
}

return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2(p,elem);
}));

(dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (p,elem){
var G__40281 = p;
G__40281.removeChild(elem);

return G__40281;
}));

(dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2);

dommy.core.special_listener_makers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__40282){
var vec__40283 = p__40282;
var special_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40283,(0),null);
var real_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40283,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,cljs.core.PersistentArrayMap.createAsIfByAssoc([real_mouse_event,(function (f){
return (function (event){
var related_target = event.relatedTarget;
var listener_target = (function (){var or__4126__auto__ = event.selectedTarget;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return event.currentTarget;
}
})();
if(cljs.core.truth_((function (){var and__4115__auto__ = related_target;
if(cljs.core.truth_(and__4115__auto__)){
return dommy.core.descendant_QMARK_(related_target,listener_target);
} else {
return and__4115__auto__;
}
})())){
return null;
} else {
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(event) : f.call(null,event));
}
});
})])], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560),new cljs.core.Keyword(null,"mouseover","mouseover",-484272303),new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580),new cljs.core.Keyword(null,"mouseout","mouseout",2049446890)], null)));
/**
 * fires f if event.target is found with `selector`
 */
dommy.core.live_listener = (function dommy$core$live_listener(elem,selector,f){
return (function (event){
var selected_target = dommy.core.closest.cljs$core$IFn$_invoke$arity$3(elem,event.target,selector);
if(cljs.core.truth_((function (){var and__4115__auto__ = selected_target;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(dommy.core.attr(selected_target,new cljs.core.Keyword(null,"disabled","disabled",-1529784218)));
} else {
return and__4115__auto__;
}
})())){
(event.selectedTarget = selected_target);

return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(event) : f.call(null,event));
} else {
return null;
}
});
});
/**
 * Returns a nested map of event listeners on `elem`
 */
dommy.core.event_listeners = (function dommy$core$event_listeners(elem){
var or__4126__auto__ = elem.dommyEventListeners;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
dommy.core.update_event_listeners_BANG_ = (function dommy$core$update_event_listeners_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___40890 = arguments.length;
var i__4737__auto___40891 = (0);
while(true){
if((i__4737__auto___40891 < len__4736__auto___40890)){
args__4742__auto__.push((arguments[i__4737__auto___40891]));

var G__40892 = (i__4737__auto___40891 + (1));
i__4737__auto___40891 = G__40892;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,f,args){
var elem__$1 = elem;
return (elem__$1.dommyEventListeners = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,dommy.core.event_listeners(elem__$1),args));
}));

(dommy.core.update_event_listeners_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq40286){
var G__40287 = cljs.core.first(seq40286);
var seq40286__$1 = cljs.core.next(seq40286);
var G__40288 = cljs.core.first(seq40286__$1);
var seq40286__$2 = cljs.core.next(seq40286__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40287,G__40288,seq40286__$2);
}));

dommy.core.elem_and_selector = (function dommy$core$elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_(elem_sel)){
return cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.rest)(elem_sel);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [elem_sel,null], null);
}
});
/**
 * Adds `f` as a listener for events of type `event-type` on
 * `elem-sel`, which must either be a DOM node, or a sequence
 * whose first item is a DOM node.
 * 
 * In other words, the call to `listen!` can take two forms:
 * 
 * If `elem-sel` is a DOM node, i.e., you're doing something like:
 * 
 *     (listen! elem :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on the `elem`.
 * 
 * If `elem-sel` is a sequence:
 * 
 *     (listen! [elem :.selector.for :.some.descendants] :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on descendants of `elem` that match the selector
 * 
 * Also accepts any number of event-type and handler pairs for setting
 * multiple listeners at once:
 * 
 *     (listen! some-elem :click click-handler :hover hover-handler)
 */
dommy.core.listen_BANG_ = (function dommy$core$listen_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___40897 = arguments.length;
var i__4737__auto___40898 = (0);
while(true){
if((i__4737__auto___40898 < len__4736__auto___40897)){
args__4742__auto__.push((arguments[i__4737__auto___40898]));

var G__40900 = (i__4737__auto___40898 + (1));
i__4737__auto___40898 = G__40900;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_(cljs.core.count(type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__40291_40905 = dommy.core.elem_and_selector(elem_sel);
var elem_40906 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40291_40905,(0),null);
var selector_40907 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40291_40905,(1),null);
var seq__40296_40908 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__40303_40909 = null;
var count__40304_40910 = (0);
var i__40305_40911 = (0);
while(true){
if((i__40305_40911 < count__40304_40910)){
var vec__40362_40913 = chunk__40303_40909.cljs$core$IIndexed$_nth$arity$2(null,i__40305_40911);
var orig_type_40914 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40362_40913,(0),null);
var f_40915 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40362_40913,(1),null);
var seq__40306_40920 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_40914,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_40914,cljs.core.identity])));
var chunk__40308_40921 = null;
var count__40309_40922 = (0);
var i__40310_40923 = (0);
while(true){
if((i__40310_40923 < count__40309_40922)){
var vec__40375_40924 = chunk__40308_40921.cljs$core$IIndexed$_nth$arity$2(null,i__40310_40923);
var actual_type_40925 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40375_40924,(0),null);
var factory_40926 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40375_40924,(1),null);
var canonical_f_40927 = (function (){var G__40379 = (factory_40926.cljs$core$IFn$_invoke$arity$1 ? factory_40926.cljs$core$IFn$_invoke$arity$1(f_40915) : factory_40926.call(null,f_40915));
var fexpr__40378 = (cljs.core.truth_(selector_40907)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_40906,selector_40907):cljs.core.identity);
return (fexpr__40378.cljs$core$IFn$_invoke$arity$1 ? fexpr__40378.cljs$core$IFn$_invoke$arity$1(G__40379) : fexpr__40378.call(null,G__40379));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_40906,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_40907,actual_type_40925,f_40915], null),canonical_f_40927], 0));

if(cljs.core.truth_(elem_40906.addEventListener)){
elem_40906.addEventListener(cljs.core.name(actual_type_40925),canonical_f_40927);
} else {
elem_40906.attachEvent(cljs.core.name(actual_type_40925),canonical_f_40927);
}


var G__40928 = seq__40306_40920;
var G__40929 = chunk__40308_40921;
var G__40930 = count__40309_40922;
var G__40931 = (i__40310_40923 + (1));
seq__40306_40920 = G__40928;
chunk__40308_40921 = G__40929;
count__40309_40922 = G__40930;
i__40310_40923 = G__40931;
continue;
} else {
var temp__5735__auto___40932 = cljs.core.seq(seq__40306_40920);
if(temp__5735__auto___40932){
var seq__40306_40933__$1 = temp__5735__auto___40932;
if(cljs.core.chunked_seq_QMARK_(seq__40306_40933__$1)){
var c__4556__auto___40934 = cljs.core.chunk_first(seq__40306_40933__$1);
var G__40935 = cljs.core.chunk_rest(seq__40306_40933__$1);
var G__40936 = c__4556__auto___40934;
var G__40937 = cljs.core.count(c__4556__auto___40934);
var G__40938 = (0);
seq__40306_40920 = G__40935;
chunk__40308_40921 = G__40936;
count__40309_40922 = G__40937;
i__40310_40923 = G__40938;
continue;
} else {
var vec__40380_40939 = cljs.core.first(seq__40306_40933__$1);
var actual_type_40940 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40380_40939,(0),null);
var factory_40941 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40380_40939,(1),null);
var canonical_f_40942 = (function (){var G__40384 = (factory_40941.cljs$core$IFn$_invoke$arity$1 ? factory_40941.cljs$core$IFn$_invoke$arity$1(f_40915) : factory_40941.call(null,f_40915));
var fexpr__40383 = (cljs.core.truth_(selector_40907)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_40906,selector_40907):cljs.core.identity);
return (fexpr__40383.cljs$core$IFn$_invoke$arity$1 ? fexpr__40383.cljs$core$IFn$_invoke$arity$1(G__40384) : fexpr__40383.call(null,G__40384));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_40906,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_40907,actual_type_40940,f_40915], null),canonical_f_40942], 0));

if(cljs.core.truth_(elem_40906.addEventListener)){
elem_40906.addEventListener(cljs.core.name(actual_type_40940),canonical_f_40942);
} else {
elem_40906.attachEvent(cljs.core.name(actual_type_40940),canonical_f_40942);
}


var G__40943 = cljs.core.next(seq__40306_40933__$1);
var G__40944 = null;
var G__40945 = (0);
var G__40946 = (0);
seq__40306_40920 = G__40943;
chunk__40308_40921 = G__40944;
count__40309_40922 = G__40945;
i__40310_40923 = G__40946;
continue;
}
} else {
}
}
break;
}

var G__40947 = seq__40296_40908;
var G__40948 = chunk__40303_40909;
var G__40949 = count__40304_40910;
var G__40950 = (i__40305_40911 + (1));
seq__40296_40908 = G__40947;
chunk__40303_40909 = G__40948;
count__40304_40910 = G__40949;
i__40305_40911 = G__40950;
continue;
} else {
var temp__5735__auto___40951 = cljs.core.seq(seq__40296_40908);
if(temp__5735__auto___40951){
var seq__40296_40952__$1 = temp__5735__auto___40951;
if(cljs.core.chunked_seq_QMARK_(seq__40296_40952__$1)){
var c__4556__auto___40953 = cljs.core.chunk_first(seq__40296_40952__$1);
var G__40954 = cljs.core.chunk_rest(seq__40296_40952__$1);
var G__40955 = c__4556__auto___40953;
var G__40956 = cljs.core.count(c__4556__auto___40953);
var G__40957 = (0);
seq__40296_40908 = G__40954;
chunk__40303_40909 = G__40955;
count__40304_40910 = G__40956;
i__40305_40911 = G__40957;
continue;
} else {
var vec__40385_40958 = cljs.core.first(seq__40296_40952__$1);
var orig_type_40959 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40385_40958,(0),null);
var f_40960 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40385_40958,(1),null);
var seq__40297_40961 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_40959,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_40959,cljs.core.identity])));
var chunk__40299_40962 = null;
var count__40300_40963 = (0);
var i__40301_40964 = (0);
while(true){
if((i__40301_40964 < count__40300_40963)){
var vec__40402_40965 = chunk__40299_40962.cljs$core$IIndexed$_nth$arity$2(null,i__40301_40964);
var actual_type_40966 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40402_40965,(0),null);
var factory_40967 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40402_40965,(1),null);
var canonical_f_40968 = (function (){var G__40406 = (factory_40967.cljs$core$IFn$_invoke$arity$1 ? factory_40967.cljs$core$IFn$_invoke$arity$1(f_40960) : factory_40967.call(null,f_40960));
var fexpr__40405 = (cljs.core.truth_(selector_40907)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_40906,selector_40907):cljs.core.identity);
return (fexpr__40405.cljs$core$IFn$_invoke$arity$1 ? fexpr__40405.cljs$core$IFn$_invoke$arity$1(G__40406) : fexpr__40405.call(null,G__40406));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_40906,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_40907,actual_type_40966,f_40960], null),canonical_f_40968], 0));

if(cljs.core.truth_(elem_40906.addEventListener)){
elem_40906.addEventListener(cljs.core.name(actual_type_40966),canonical_f_40968);
} else {
elem_40906.attachEvent(cljs.core.name(actual_type_40966),canonical_f_40968);
}


var G__40969 = seq__40297_40961;
var G__40970 = chunk__40299_40962;
var G__40971 = count__40300_40963;
var G__40972 = (i__40301_40964 + (1));
seq__40297_40961 = G__40969;
chunk__40299_40962 = G__40970;
count__40300_40963 = G__40971;
i__40301_40964 = G__40972;
continue;
} else {
var temp__5735__auto___40973__$1 = cljs.core.seq(seq__40297_40961);
if(temp__5735__auto___40973__$1){
var seq__40297_40974__$1 = temp__5735__auto___40973__$1;
if(cljs.core.chunked_seq_QMARK_(seq__40297_40974__$1)){
var c__4556__auto___40975 = cljs.core.chunk_first(seq__40297_40974__$1);
var G__40976 = cljs.core.chunk_rest(seq__40297_40974__$1);
var G__40977 = c__4556__auto___40975;
var G__40978 = cljs.core.count(c__4556__auto___40975);
var G__40979 = (0);
seq__40297_40961 = G__40976;
chunk__40299_40962 = G__40977;
count__40300_40963 = G__40978;
i__40301_40964 = G__40979;
continue;
} else {
var vec__40407_40980 = cljs.core.first(seq__40297_40974__$1);
var actual_type_40981 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40407_40980,(0),null);
var factory_40982 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40407_40980,(1),null);
var canonical_f_40983 = (function (){var G__40411 = (factory_40982.cljs$core$IFn$_invoke$arity$1 ? factory_40982.cljs$core$IFn$_invoke$arity$1(f_40960) : factory_40982.call(null,f_40960));
var fexpr__40410 = (cljs.core.truth_(selector_40907)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_40906,selector_40907):cljs.core.identity);
return (fexpr__40410.cljs$core$IFn$_invoke$arity$1 ? fexpr__40410.cljs$core$IFn$_invoke$arity$1(G__40411) : fexpr__40410.call(null,G__40411));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_40906,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_40907,actual_type_40981,f_40960], null),canonical_f_40983], 0));

if(cljs.core.truth_(elem_40906.addEventListener)){
elem_40906.addEventListener(cljs.core.name(actual_type_40981),canonical_f_40983);
} else {
elem_40906.attachEvent(cljs.core.name(actual_type_40981),canonical_f_40983);
}


var G__40984 = cljs.core.next(seq__40297_40974__$1);
var G__40985 = null;
var G__40986 = (0);
var G__40987 = (0);
seq__40297_40961 = G__40984;
chunk__40299_40962 = G__40985;
count__40300_40963 = G__40986;
i__40301_40964 = G__40987;
continue;
}
} else {
}
}
break;
}

var G__40988 = cljs.core.next(seq__40296_40952__$1);
var G__40989 = null;
var G__40990 = (0);
var G__40991 = (0);
seq__40296_40908 = G__40988;
chunk__40303_40909 = G__40989;
count__40304_40910 = G__40990;
i__40305_40911 = G__40991;
continue;
}
} else {
}
}
break;
}

return elem_sel;
}));

(dommy.core.listen_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq40289){
var G__40290 = cljs.core.first(seq40289);
var seq40289__$1 = cljs.core.next(seq40289);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40290,seq40289__$1);
}));

/**
 * Removes event listener for the element defined in `elem-sel`,
 * which is the same format as listen!.
 * 
 *   The following forms are allowed, and will remove all handlers
 *   that match the parameters passed in:
 * 
 *    (unlisten! [elem :.selector] :click event-listener)
 * 
 *    (unlisten! [elem :.selector]
 *      :click event-listener
 *      :mouseover other-event-listener)
 */
dommy.core.unlisten_BANG_ = (function dommy$core$unlisten_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___40992 = arguments.length;
var i__4737__auto___40993 = (0);
while(true){
if((i__4737__auto___40993 < len__4736__auto___40992)){
args__4742__auto__.push((arguments[i__4737__auto___40993]));

var G__40994 = (i__4737__auto___40993 + (1));
i__4737__auto___40993 = G__40994;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_(cljs.core.count(type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__40417_40995 = dommy.core.elem_and_selector(elem_sel);
var elem_40996 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40417_40995,(0),null);
var selector_40997 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40417_40995,(1),null);
var seq__40420_40998 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__40427_40999 = null;
var count__40428_41000 = (0);
var i__40429_41001 = (0);
while(true){
if((i__40429_41001 < count__40428_41000)){
var vec__40474_41002 = chunk__40427_40999.cljs$core$IIndexed$_nth$arity$2(null,i__40429_41001);
var orig_type_41003 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40474_41002,(0),null);
var f_41004 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40474_41002,(1),null);
var seq__40430_41005 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_41003,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_41003,cljs.core.identity])));
var chunk__40432_41006 = null;
var count__40433_41007 = (0);
var i__40434_41008 = (0);
while(true){
if((i__40434_41008 < count__40433_41007)){
var vec__40484_41009 = chunk__40432_41006.cljs$core$IIndexed$_nth$arity$2(null,i__40434_41008);
var actual_type_41010 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40484_41009,(0),null);
var __41011 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40484_41009,(1),null);
var keys_41012 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_40997,actual_type_41010,f_41004], null);
var canonical_f_41013 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_40996),keys_41012);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_40996,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_41012], 0));

if(cljs.core.truth_(elem_40996.removeEventListener)){
elem_40996.removeEventListener(cljs.core.name(actual_type_41010),canonical_f_41013);
} else {
elem_40996.detachEvent(cljs.core.name(actual_type_41010),canonical_f_41013);
}


var G__41014 = seq__40430_41005;
var G__41015 = chunk__40432_41006;
var G__41016 = count__40433_41007;
var G__41017 = (i__40434_41008 + (1));
seq__40430_41005 = G__41014;
chunk__40432_41006 = G__41015;
count__40433_41007 = G__41016;
i__40434_41008 = G__41017;
continue;
} else {
var temp__5735__auto___41018 = cljs.core.seq(seq__40430_41005);
if(temp__5735__auto___41018){
var seq__40430_41019__$1 = temp__5735__auto___41018;
if(cljs.core.chunked_seq_QMARK_(seq__40430_41019__$1)){
var c__4556__auto___41020 = cljs.core.chunk_first(seq__40430_41019__$1);
var G__41021 = cljs.core.chunk_rest(seq__40430_41019__$1);
var G__41022 = c__4556__auto___41020;
var G__41023 = cljs.core.count(c__4556__auto___41020);
var G__41024 = (0);
seq__40430_41005 = G__41021;
chunk__40432_41006 = G__41022;
count__40433_41007 = G__41023;
i__40434_41008 = G__41024;
continue;
} else {
var vec__40488_41025 = cljs.core.first(seq__40430_41019__$1);
var actual_type_41026 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40488_41025,(0),null);
var __41027 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40488_41025,(1),null);
var keys_41028 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_40997,actual_type_41026,f_41004], null);
var canonical_f_41029 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_40996),keys_41028);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_40996,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_41028], 0));

if(cljs.core.truth_(elem_40996.removeEventListener)){
elem_40996.removeEventListener(cljs.core.name(actual_type_41026),canonical_f_41029);
} else {
elem_40996.detachEvent(cljs.core.name(actual_type_41026),canonical_f_41029);
}


var G__41030 = cljs.core.next(seq__40430_41019__$1);
var G__41031 = null;
var G__41032 = (0);
var G__41033 = (0);
seq__40430_41005 = G__41030;
chunk__40432_41006 = G__41031;
count__40433_41007 = G__41032;
i__40434_41008 = G__41033;
continue;
}
} else {
}
}
break;
}

var G__41034 = seq__40420_40998;
var G__41035 = chunk__40427_40999;
var G__41036 = count__40428_41000;
var G__41037 = (i__40429_41001 + (1));
seq__40420_40998 = G__41034;
chunk__40427_40999 = G__41035;
count__40428_41000 = G__41036;
i__40429_41001 = G__41037;
continue;
} else {
var temp__5735__auto___41038 = cljs.core.seq(seq__40420_40998);
if(temp__5735__auto___41038){
var seq__40420_41039__$1 = temp__5735__auto___41038;
if(cljs.core.chunked_seq_QMARK_(seq__40420_41039__$1)){
var c__4556__auto___41040 = cljs.core.chunk_first(seq__40420_41039__$1);
var G__41041 = cljs.core.chunk_rest(seq__40420_41039__$1);
var G__41042 = c__4556__auto___41040;
var G__41043 = cljs.core.count(c__4556__auto___41040);
var G__41044 = (0);
seq__40420_40998 = G__41041;
chunk__40427_40999 = G__41042;
count__40428_41000 = G__41043;
i__40429_41001 = G__41044;
continue;
} else {
var vec__40495_41045 = cljs.core.first(seq__40420_41039__$1);
var orig_type_41046 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40495_41045,(0),null);
var f_41047 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40495_41045,(1),null);
var seq__40421_41048 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_41046,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_41046,cljs.core.identity])));
var chunk__40423_41049 = null;
var count__40424_41050 = (0);
var i__40425_41051 = (0);
while(true){
if((i__40425_41051 < count__40424_41050)){
var vec__40527_41052 = chunk__40423_41049.cljs$core$IIndexed$_nth$arity$2(null,i__40425_41051);
var actual_type_41053 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40527_41052,(0),null);
var __41054 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40527_41052,(1),null);
var keys_41055 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_40997,actual_type_41053,f_41047], null);
var canonical_f_41056 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_40996),keys_41055);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_40996,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_41055], 0));

if(cljs.core.truth_(elem_40996.removeEventListener)){
elem_40996.removeEventListener(cljs.core.name(actual_type_41053),canonical_f_41056);
} else {
elem_40996.detachEvent(cljs.core.name(actual_type_41053),canonical_f_41056);
}


var G__41057 = seq__40421_41048;
var G__41058 = chunk__40423_41049;
var G__41059 = count__40424_41050;
var G__41060 = (i__40425_41051 + (1));
seq__40421_41048 = G__41057;
chunk__40423_41049 = G__41058;
count__40424_41050 = G__41059;
i__40425_41051 = G__41060;
continue;
} else {
var temp__5735__auto___41061__$1 = cljs.core.seq(seq__40421_41048);
if(temp__5735__auto___41061__$1){
var seq__40421_41062__$1 = temp__5735__auto___41061__$1;
if(cljs.core.chunked_seq_QMARK_(seq__40421_41062__$1)){
var c__4556__auto___41063 = cljs.core.chunk_first(seq__40421_41062__$1);
var G__41064 = cljs.core.chunk_rest(seq__40421_41062__$1);
var G__41065 = c__4556__auto___41063;
var G__41066 = cljs.core.count(c__4556__auto___41063);
var G__41067 = (0);
seq__40421_41048 = G__41064;
chunk__40423_41049 = G__41065;
count__40424_41050 = G__41066;
i__40425_41051 = G__41067;
continue;
} else {
var vec__40530_41068 = cljs.core.first(seq__40421_41062__$1);
var actual_type_41069 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40530_41068,(0),null);
var __41070 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40530_41068,(1),null);
var keys_41071 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_40997,actual_type_41069,f_41047], null);
var canonical_f_41072 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_40996),keys_41071);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_40996,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_41071], 0));

if(cljs.core.truth_(elem_40996.removeEventListener)){
elem_40996.removeEventListener(cljs.core.name(actual_type_41069),canonical_f_41072);
} else {
elem_40996.detachEvent(cljs.core.name(actual_type_41069),canonical_f_41072);
}


var G__41073 = cljs.core.next(seq__40421_41062__$1);
var G__41074 = null;
var G__41075 = (0);
var G__41076 = (0);
seq__40421_41048 = G__41073;
chunk__40423_41049 = G__41074;
count__40424_41050 = G__41075;
i__40425_41051 = G__41076;
continue;
}
} else {
}
}
break;
}

var G__41077 = cljs.core.next(seq__40420_41039__$1);
var G__41078 = null;
var G__41079 = (0);
var G__41080 = (0);
seq__40420_40998 = G__41077;
chunk__40427_40999 = G__41078;
count__40428_41000 = G__41079;
i__40429_41001 = G__41080;
continue;
}
} else {
}
}
break;
}

return elem_sel;
}));

(dommy.core.unlisten_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq40415){
var G__40416 = cljs.core.first(seq40415);
var seq40415__$1 = cljs.core.next(seq40415);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40416,seq40415__$1);
}));

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___41081 = arguments.length;
var i__4737__auto___41082 = (0);
while(true){
if((i__4737__auto___41082 < len__4736__auto___41081)){
args__4742__auto__.push((arguments[i__4737__auto___41082]));

var G__41083 = (i__4737__auto___41082 + (1));
i__4737__auto___41082 = G__41083;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_(cljs.core.count(type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__40557_41084 = dommy.core.elem_and_selector(elem_sel);
var elem_41085 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40557_41084,(0),null);
var selector_41086 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40557_41084,(1),null);
var seq__40560_41087 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__40561_41088 = null;
var count__40562_41089 = (0);
var i__40563_41090 = (0);
while(true){
if((i__40563_41090 < count__40562_41089)){
var vec__40573_41091 = chunk__40561_41088.cljs$core$IIndexed$_nth$arity$2(null,i__40563_41090);
var type_41092 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40573_41091,(0),null);
var f_41093 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40573_41091,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_41092,((function (seq__40560_41087,chunk__40561_41088,count__40562_41089,i__40563_41090,vec__40573_41091,type_41092,f_41093,vec__40557_41084,elem_41085,selector_41086){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_41092,dommy$core$this_fn], 0));

return (f_41093.cljs$core$IFn$_invoke$arity$1 ? f_41093.cljs$core$IFn$_invoke$arity$1(e) : f_41093.call(null,e));
});})(seq__40560_41087,chunk__40561_41088,count__40562_41089,i__40563_41090,vec__40573_41091,type_41092,f_41093,vec__40557_41084,elem_41085,selector_41086))
], 0));


var G__41094 = seq__40560_41087;
var G__41095 = chunk__40561_41088;
var G__41096 = count__40562_41089;
var G__41097 = (i__40563_41090 + (1));
seq__40560_41087 = G__41094;
chunk__40561_41088 = G__41095;
count__40562_41089 = G__41096;
i__40563_41090 = G__41097;
continue;
} else {
var temp__5735__auto___41098 = cljs.core.seq(seq__40560_41087);
if(temp__5735__auto___41098){
var seq__40560_41099__$1 = temp__5735__auto___41098;
if(cljs.core.chunked_seq_QMARK_(seq__40560_41099__$1)){
var c__4556__auto___41100 = cljs.core.chunk_first(seq__40560_41099__$1);
var G__41101 = cljs.core.chunk_rest(seq__40560_41099__$1);
var G__41102 = c__4556__auto___41100;
var G__41103 = cljs.core.count(c__4556__auto___41100);
var G__41104 = (0);
seq__40560_41087 = G__41101;
chunk__40561_41088 = G__41102;
count__40562_41089 = G__41103;
i__40563_41090 = G__41104;
continue;
} else {
var vec__40576_41105 = cljs.core.first(seq__40560_41099__$1);
var type_41106 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40576_41105,(0),null);
var f_41107 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40576_41105,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_41106,((function (seq__40560_41087,chunk__40561_41088,count__40562_41089,i__40563_41090,vec__40576_41105,type_41106,f_41107,seq__40560_41099__$1,temp__5735__auto___41098,vec__40557_41084,elem_41085,selector_41086){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_41106,dommy$core$this_fn], 0));

return (f_41107.cljs$core$IFn$_invoke$arity$1 ? f_41107.cljs$core$IFn$_invoke$arity$1(e) : f_41107.call(null,e));
});})(seq__40560_41087,chunk__40561_41088,count__40562_41089,i__40563_41090,vec__40576_41105,type_41106,f_41107,seq__40560_41099__$1,temp__5735__auto___41098,vec__40557_41084,elem_41085,selector_41086))
], 0));


var G__41108 = cljs.core.next(seq__40560_41099__$1);
var G__41109 = null;
var G__41110 = (0);
var G__41111 = (0);
seq__40560_41087 = G__41108;
chunk__40561_41088 = G__41109;
count__40562_41089 = G__41110;
i__40563_41090 = G__41111;
continue;
}
} else {
}
}
break;
}

return elem_sel;
}));

(dommy.core.listen_once_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq40551){
var G__40552 = cljs.core.first(seq40551);
var seq40551__$1 = cljs.core.next(seq40551);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40552,seq40551__$1);
}));


//# sourceMappingURL=dommy.core.js.map
