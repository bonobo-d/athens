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
var len__4736__auto___40588 = arguments.length;
var i__4737__auto___40589 = (0);
while(true){
if((i__4737__auto___40589 < len__4736__auto___40588)){
args__4742__auto__.push((arguments[i__4737__auto___40589]));

var G__40590 = (i__4737__auto___40589 + (1));
i__4737__auto___40589 = G__40590;
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
var seq__40139_40593 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__40140_40594 = null;
var count__40141_40595 = (0);
var i__40142_40596 = (0);
while(true){
if((i__40142_40596 < count__40141_40595)){
var vec__40151_40597 = chunk__40140_40594.cljs$core$IIndexed$_nth$arity$2(null,i__40142_40596);
var k_40598 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40151_40597,(0),null);
var v_40599 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40151_40597,(1),null);
style.setProperty(dommy.utils.as_str(k_40598),v_40599);


var G__40600 = seq__40139_40593;
var G__40601 = chunk__40140_40594;
var G__40602 = count__40141_40595;
var G__40603 = (i__40142_40596 + (1));
seq__40139_40593 = G__40600;
chunk__40140_40594 = G__40601;
count__40141_40595 = G__40602;
i__40142_40596 = G__40603;
continue;
} else {
var temp__5735__auto___40604 = cljs.core.seq(seq__40139_40593);
if(temp__5735__auto___40604){
var seq__40139_40605__$1 = temp__5735__auto___40604;
if(cljs.core.chunked_seq_QMARK_(seq__40139_40605__$1)){
var c__4556__auto___40606 = cljs.core.chunk_first(seq__40139_40605__$1);
var G__40607 = cljs.core.chunk_rest(seq__40139_40605__$1);
var G__40608 = c__4556__auto___40606;
var G__40609 = cljs.core.count(c__4556__auto___40606);
var G__40610 = (0);
seq__40139_40593 = G__40607;
chunk__40140_40594 = G__40608;
count__40141_40595 = G__40609;
i__40142_40596 = G__40610;
continue;
} else {
var vec__40155_40611 = cljs.core.first(seq__40139_40605__$1);
var k_40612 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40155_40611,(0),null);
var v_40613 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40155_40611,(1),null);
style.setProperty(dommy.utils.as_str(k_40612),v_40613);


var G__40614 = cljs.core.next(seq__40139_40605__$1);
var G__40615 = null;
var G__40616 = (0);
var G__40617 = (0);
seq__40139_40593 = G__40614;
chunk__40140_40594 = G__40615;
count__40141_40595 = G__40616;
i__40142_40596 = G__40617;
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
(dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq40136){
var G__40137 = cljs.core.first(seq40136);
var seq40136__$1 = cljs.core.next(seq40136);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40137,seq40136__$1);
}));

/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___40618 = arguments.length;
var i__4737__auto___40619 = (0);
while(true){
if((i__4737__auto___40619 < len__4736__auto___40618)){
args__4742__auto__.push((arguments[i__4737__auto___40619]));

var G__40620 = (i__4737__auto___40619 + (1));
i__4737__auto___40619 = G__40620;
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
var seq__40162_40621 = cljs.core.seq(keywords);
var chunk__40163_40622 = null;
var count__40164_40623 = (0);
var i__40165_40624 = (0);
while(true){
if((i__40165_40624 < count__40164_40623)){
var kw_40625 = chunk__40163_40622.cljs$core$IIndexed$_nth$arity$2(null,i__40165_40624);
style.removeProperty(dommy.utils.as_str(kw_40625));


var G__40626 = seq__40162_40621;
var G__40627 = chunk__40163_40622;
var G__40628 = count__40164_40623;
var G__40629 = (i__40165_40624 + (1));
seq__40162_40621 = G__40626;
chunk__40163_40622 = G__40627;
count__40164_40623 = G__40628;
i__40165_40624 = G__40629;
continue;
} else {
var temp__5735__auto___40630 = cljs.core.seq(seq__40162_40621);
if(temp__5735__auto___40630){
var seq__40162_40631__$1 = temp__5735__auto___40630;
if(cljs.core.chunked_seq_QMARK_(seq__40162_40631__$1)){
var c__4556__auto___40632 = cljs.core.chunk_first(seq__40162_40631__$1);
var G__40633 = cljs.core.chunk_rest(seq__40162_40631__$1);
var G__40634 = c__4556__auto___40632;
var G__40635 = cljs.core.count(c__4556__auto___40632);
var G__40636 = (0);
seq__40162_40621 = G__40633;
chunk__40163_40622 = G__40634;
count__40164_40623 = G__40635;
i__40165_40624 = G__40636;
continue;
} else {
var kw_40637 = cljs.core.first(seq__40162_40631__$1);
style.removeProperty(dommy.utils.as_str(kw_40637));


var G__40638 = cljs.core.next(seq__40162_40631__$1);
var G__40639 = null;
var G__40640 = (0);
var G__40641 = (0);
seq__40162_40621 = G__40638;
chunk__40163_40622 = G__40639;
count__40164_40623 = G__40640;
i__40165_40624 = G__40641;
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
(dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq40159){
var G__40160 = cljs.core.first(seq40159);
var seq40159__$1 = cljs.core.next(seq40159);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40160,seq40159__$1);
}));

dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___40642 = arguments.length;
var i__4737__auto___40643 = (0);
while(true){
if((i__4737__auto___40643 < len__4736__auto___40642)){
args__4742__auto__.push((arguments[i__4737__auto___40643]));

var G__40644 = (i__4737__auto___40643 + (1));
i__4737__auto___40643 = G__40644;
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

var seq__40172_40645 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__40173_40646 = null;
var count__40174_40647 = (0);
var i__40175_40648 = (0);
while(true){
if((i__40175_40648 < count__40174_40647)){
var vec__40182_40649 = chunk__40173_40646.cljs$core$IIndexed$_nth$arity$2(null,i__40175_40648);
var k_40650 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40182_40649,(0),null);
var v_40651 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40182_40649,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_40650,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_40651),"px"].join('')], 0));


var G__40652 = seq__40172_40645;
var G__40653 = chunk__40173_40646;
var G__40654 = count__40174_40647;
var G__40655 = (i__40175_40648 + (1));
seq__40172_40645 = G__40652;
chunk__40173_40646 = G__40653;
count__40174_40647 = G__40654;
i__40175_40648 = G__40655;
continue;
} else {
var temp__5735__auto___40656 = cljs.core.seq(seq__40172_40645);
if(temp__5735__auto___40656){
var seq__40172_40657__$1 = temp__5735__auto___40656;
if(cljs.core.chunked_seq_QMARK_(seq__40172_40657__$1)){
var c__4556__auto___40658 = cljs.core.chunk_first(seq__40172_40657__$1);
var G__40659 = cljs.core.chunk_rest(seq__40172_40657__$1);
var G__40660 = c__4556__auto___40658;
var G__40661 = cljs.core.count(c__4556__auto___40658);
var G__40662 = (0);
seq__40172_40645 = G__40659;
chunk__40173_40646 = G__40660;
count__40174_40647 = G__40661;
i__40175_40648 = G__40662;
continue;
} else {
var vec__40185_40663 = cljs.core.first(seq__40172_40657__$1);
var k_40664 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40185_40663,(0),null);
var v_40665 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40185_40663,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_40664,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_40665),"px"].join('')], 0));


var G__40666 = cljs.core.next(seq__40172_40657__$1);
var G__40667 = null;
var G__40668 = (0);
var G__40669 = (0);
seq__40172_40645 = G__40666;
chunk__40173_40646 = G__40667;
count__40174_40647 = G__40668;
i__40175_40648 = G__40669;
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
(dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq40169){
var G__40170 = cljs.core.first(seq40169);
var seq40169__$1 = cljs.core.next(seq40169);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40170,seq40169__$1);
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
var len__4736__auto___40671 = arguments.length;
var i__4737__auto___40672 = (0);
while(true){
if((i__4737__auto___40672 < len__4736__auto___40671)){
args_arr__4757__auto__.push((arguments[i__4737__auto___40672]));

var G__40673 = (i__4737__auto___40672 + (1));
i__4737__auto___40672 = G__40673;
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

var seq__40196_40674 = cljs.core.seq(cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs)));
var chunk__40197_40675 = null;
var count__40198_40676 = (0);
var i__40199_40677 = (0);
while(true){
if((i__40199_40677 < count__40198_40676)){
var vec__40206_40678 = chunk__40197_40675.cljs$core$IIndexed$_nth$arity$2(null,i__40199_40677);
var k_40679__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40206_40678,(0),null);
var v_40680__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40206_40678,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_40679__$1,v_40680__$1);


var G__40681 = seq__40196_40674;
var G__40682 = chunk__40197_40675;
var G__40683 = count__40198_40676;
var G__40684 = (i__40199_40677 + (1));
seq__40196_40674 = G__40681;
chunk__40197_40675 = G__40682;
count__40198_40676 = G__40683;
i__40199_40677 = G__40684;
continue;
} else {
var temp__5735__auto___40685 = cljs.core.seq(seq__40196_40674);
if(temp__5735__auto___40685){
var seq__40196_40686__$1 = temp__5735__auto___40685;
if(cljs.core.chunked_seq_QMARK_(seq__40196_40686__$1)){
var c__4556__auto___40687 = cljs.core.chunk_first(seq__40196_40686__$1);
var G__40688 = cljs.core.chunk_rest(seq__40196_40686__$1);
var G__40689 = c__4556__auto___40687;
var G__40690 = cljs.core.count(c__4556__auto___40687);
var G__40691 = (0);
seq__40196_40674 = G__40688;
chunk__40197_40675 = G__40689;
count__40198_40676 = G__40690;
i__40199_40677 = G__40691;
continue;
} else {
var vec__40209_40692 = cljs.core.first(seq__40196_40686__$1);
var k_40693__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40209_40692,(0),null);
var v_40694__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40209_40692,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_40693__$1,v_40694__$1);


var G__40695 = cljs.core.next(seq__40196_40686__$1);
var G__40696 = null;
var G__40697 = (0);
var G__40698 = (0);
seq__40196_40674 = G__40695;
chunk__40197_40675 = G__40696;
count__40198_40676 = G__40697;
i__40199_40677 = G__40698;
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
var len__4736__auto___40700 = arguments.length;
var i__4737__auto___40701 = (0);
while(true){
if((i__4737__auto___40701 < len__4736__auto___40700)){
args_arr__4757__auto__.push((arguments[i__4737__auto___40701]));

var G__40702 = (i__4737__auto___40701 + (1));
i__4737__auto___40701 = G__40702;
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
var k_40703__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_((function (){var fexpr__40217 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null);
return (fexpr__40217.cljs$core$IFn$_invoke$arity$1 ? fexpr__40217.cljs$core$IFn$_invoke$arity$1(k_40703__$1) : fexpr__40217.call(null,k_40703__$1));
})())){
dommy.core.set_class_BANG_(elem,"");
} else {
elem.removeAttribute(k_40703__$1);
}

return elem;
}));

(dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__40218_40706 = cljs.core.seq(cljs.core.cons(k,ks));
var chunk__40219_40707 = null;
var count__40220_40708 = (0);
var i__40221_40709 = (0);
while(true){
if((i__40221_40709 < count__40220_40708)){
var k_40710__$1 = chunk__40219_40707.cljs$core$IIndexed$_nth$arity$2(null,i__40221_40709);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_40710__$1);


var G__40711 = seq__40218_40706;
var G__40712 = chunk__40219_40707;
var G__40713 = count__40220_40708;
var G__40714 = (i__40221_40709 + (1));
seq__40218_40706 = G__40711;
chunk__40219_40707 = G__40712;
count__40220_40708 = G__40713;
i__40221_40709 = G__40714;
continue;
} else {
var temp__5735__auto___40715 = cljs.core.seq(seq__40218_40706);
if(temp__5735__auto___40715){
var seq__40218_40716__$1 = temp__5735__auto___40715;
if(cljs.core.chunked_seq_QMARK_(seq__40218_40716__$1)){
var c__4556__auto___40717 = cljs.core.chunk_first(seq__40218_40716__$1);
var G__40718 = cljs.core.chunk_rest(seq__40218_40716__$1);
var G__40719 = c__4556__auto___40717;
var G__40720 = cljs.core.count(c__4556__auto___40717);
var G__40721 = (0);
seq__40218_40706 = G__40718;
chunk__40219_40707 = G__40719;
count__40220_40708 = G__40720;
i__40221_40709 = G__40721;
continue;
} else {
var k_40722__$1 = cljs.core.first(seq__40218_40716__$1);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_40722__$1);


var G__40723 = cljs.core.next(seq__40218_40716__$1);
var G__40724 = null;
var G__40725 = (0);
var G__40726 = (0);
seq__40218_40706 = G__40723;
chunk__40219_40707 = G__40724;
count__40220_40708 = G__40725;
i__40221_40709 = G__40726;
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
var len__4736__auto___40733 = arguments.length;
var i__4737__auto___40734 = (0);
while(true){
if((i__4737__auto___40734 < len__4736__auto___40733)){
args_arr__4757__auto__.push((arguments[i__4737__auto___40734]));

var G__40735 = (i__4737__auto___40734 + (1));
i__4737__auto___40734 = G__40735;
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
var temp__5733__auto___40743 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___40743)){
var class_list_40744 = temp__5733__auto___40743;
var seq__40229_40746 = cljs.core.seq(classes__$1);
var chunk__40230_40747 = null;
var count__40231_40748 = (0);
var i__40232_40749 = (0);
while(true){
if((i__40232_40749 < count__40231_40748)){
var c_40751 = chunk__40230_40747.cljs$core$IIndexed$_nth$arity$2(null,i__40232_40749);
class_list_40744.add(c_40751);


var G__40752 = seq__40229_40746;
var G__40753 = chunk__40230_40747;
var G__40754 = count__40231_40748;
var G__40755 = (i__40232_40749 + (1));
seq__40229_40746 = G__40752;
chunk__40230_40747 = G__40753;
count__40231_40748 = G__40754;
i__40232_40749 = G__40755;
continue;
} else {
var temp__5735__auto___40756 = cljs.core.seq(seq__40229_40746);
if(temp__5735__auto___40756){
var seq__40229_40757__$1 = temp__5735__auto___40756;
if(cljs.core.chunked_seq_QMARK_(seq__40229_40757__$1)){
var c__4556__auto___40758 = cljs.core.chunk_first(seq__40229_40757__$1);
var G__40759 = cljs.core.chunk_rest(seq__40229_40757__$1);
var G__40760 = c__4556__auto___40758;
var G__40761 = cljs.core.count(c__4556__auto___40758);
var G__40762 = (0);
seq__40229_40746 = G__40759;
chunk__40230_40747 = G__40760;
count__40231_40748 = G__40761;
i__40232_40749 = G__40762;
continue;
} else {
var c_40765 = cljs.core.first(seq__40229_40757__$1);
class_list_40744.add(c_40765);


var G__40766 = cljs.core.next(seq__40229_40757__$1);
var G__40767 = null;
var G__40768 = (0);
var G__40769 = (0);
seq__40229_40746 = G__40766;
chunk__40230_40747 = G__40767;
count__40231_40748 = G__40768;
i__40232_40749 = G__40769;
continue;
}
} else {
}
}
break;
}
} else {
var seq__40233_40772 = cljs.core.seq(classes__$1);
var chunk__40234_40773 = null;
var count__40235_40774 = (0);
var i__40236_40775 = (0);
while(true){
if((i__40236_40775 < count__40235_40774)){
var c_40776 = chunk__40234_40773.cljs$core$IIndexed$_nth$arity$2(null,i__40236_40775);
var class_name_40777 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_40777,c_40776))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_40777 === ""))?c_40776:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_40777)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_40776)].join('')));
}


var G__40778 = seq__40233_40772;
var G__40779 = chunk__40234_40773;
var G__40780 = count__40235_40774;
var G__40781 = (i__40236_40775 + (1));
seq__40233_40772 = G__40778;
chunk__40234_40773 = G__40779;
count__40235_40774 = G__40780;
i__40236_40775 = G__40781;
continue;
} else {
var temp__5735__auto___40782 = cljs.core.seq(seq__40233_40772);
if(temp__5735__auto___40782){
var seq__40233_40783__$1 = temp__5735__auto___40782;
if(cljs.core.chunked_seq_QMARK_(seq__40233_40783__$1)){
var c__4556__auto___40785 = cljs.core.chunk_first(seq__40233_40783__$1);
var G__40786 = cljs.core.chunk_rest(seq__40233_40783__$1);
var G__40787 = c__4556__auto___40785;
var G__40788 = cljs.core.count(c__4556__auto___40785);
var G__40789 = (0);
seq__40233_40772 = G__40786;
chunk__40234_40773 = G__40787;
count__40235_40774 = G__40788;
i__40236_40775 = G__40789;
continue;
} else {
var c_40794 = cljs.core.first(seq__40233_40783__$1);
var class_name_40795 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_40795,c_40794))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_40795 === ""))?c_40794:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_40795)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_40794)].join('')));
}


var G__40796 = cljs.core.next(seq__40233_40783__$1);
var G__40797 = null;
var G__40798 = (0);
var G__40799 = (0);
seq__40233_40772 = G__40796;
chunk__40234_40773 = G__40797;
count__40235_40774 = G__40798;
i__40236_40775 = G__40799;
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
var seq__40237_40803 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));
var chunk__40238_40804 = null;
var count__40239_40805 = (0);
var i__40240_40806 = (0);
while(true){
if((i__40240_40806 < count__40239_40805)){
var c_40809 = chunk__40238_40804.cljs$core$IIndexed$_nth$arity$2(null,i__40240_40806);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_40809);


var G__40810 = seq__40237_40803;
var G__40811 = chunk__40238_40804;
var G__40812 = count__40239_40805;
var G__40813 = (i__40240_40806 + (1));
seq__40237_40803 = G__40810;
chunk__40238_40804 = G__40811;
count__40239_40805 = G__40812;
i__40240_40806 = G__40813;
continue;
} else {
var temp__5735__auto___40814 = cljs.core.seq(seq__40237_40803);
if(temp__5735__auto___40814){
var seq__40237_40815__$1 = temp__5735__auto___40814;
if(cljs.core.chunked_seq_QMARK_(seq__40237_40815__$1)){
var c__4556__auto___40816 = cljs.core.chunk_first(seq__40237_40815__$1);
var G__40817 = cljs.core.chunk_rest(seq__40237_40815__$1);
var G__40818 = c__4556__auto___40816;
var G__40819 = cljs.core.count(c__4556__auto___40816);
var G__40820 = (0);
seq__40237_40803 = G__40817;
chunk__40238_40804 = G__40818;
count__40239_40805 = G__40819;
i__40240_40806 = G__40820;
continue;
} else {
var c_40821 = cljs.core.first(seq__40237_40815__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_40821);


var G__40822 = cljs.core.next(seq__40237_40815__$1);
var G__40823 = null;
var G__40824 = (0);
var G__40825 = (0);
seq__40237_40803 = G__40822;
chunk__40238_40804 = G__40823;
count__40239_40805 = G__40824;
i__40240_40806 = G__40825;
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
var len__4736__auto___40827 = arguments.length;
var i__4737__auto___40828 = (0);
while(true){
if((i__4737__auto___40828 < len__4736__auto___40827)){
args_arr__4757__auto__.push((arguments[i__4737__auto___40828]));

var G__40829 = (i__4737__auto___40828 + (1));
i__4737__auto___40828 = G__40829;
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
var temp__5733__auto___40830 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___40830)){
var class_list_40831 = temp__5733__auto___40830;
class_list_40831.remove(c__$1);
} else {
var class_name_40832 = dommy.core.class$(elem);
var new_class_name_40833 = dommy.utils.remove_class_str(class_name_40832,c__$1);
if((class_name_40832 === new_class_name_40833)){
} else {
dommy.core.set_class_BANG_(elem,new_class_name_40833);
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


var G__40834 = seq__40246;
var G__40835 = chunk__40247;
var G__40836 = count__40248;
var G__40837 = (i__40249 + (1));
seq__40246 = G__40834;
chunk__40247 = G__40835;
count__40248 = G__40836;
i__40249 = G__40837;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__40246);
if(temp__5735__auto__){
var seq__40246__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40246__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__40246__$1);
var G__40838 = cljs.core.chunk_rest(seq__40246__$1);
var G__40839 = c__4556__auto__;
var G__40840 = cljs.core.count(c__4556__auto__);
var G__40841 = (0);
seq__40246 = G__40838;
chunk__40247 = G__40839;
count__40248 = G__40840;
i__40249 = G__40841;
continue;
} else {
var c = cljs.core.first(seq__40246__$1);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__40842 = cljs.core.next(seq__40246__$1);
var G__40843 = null;
var G__40844 = (0);
var G__40845 = (0);
seq__40246 = G__40842;
chunk__40247 = G__40843;
count__40248 = G__40844;
i__40249 = G__40845;
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
var G__40254 = arguments.length;
switch (G__40254) {
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
var temp__5733__auto___40847 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___40847)){
var class_list_40848 = temp__5733__auto___40847;
class_list_40848.toggle(c__$1);
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
var G__40256 = arguments.length;
switch (G__40256) {
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
var len__4736__auto___40852 = arguments.length;
var i__4737__auto___40853 = (0);
while(true){
if((i__4737__auto___40853 < len__4736__auto___40852)){
args_arr__4757__auto__.push((arguments[i__4737__auto___40853]));

var G__40854 = (i__4737__auto___40853 + (1));
i__4737__auto___40853 = G__40854;
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
var seq__40265_40855 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__40266_40856 = null;
var count__40267_40857 = (0);
var i__40268_40858 = (0);
while(true){
if((i__40268_40858 < count__40267_40857)){
var c_40859 = chunk__40266_40856.cljs$core$IIndexed$_nth$arity$2(null,i__40268_40858);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_40859);


var G__40860 = seq__40265_40855;
var G__40861 = chunk__40266_40856;
var G__40862 = count__40267_40857;
var G__40863 = (i__40268_40858 + (1));
seq__40265_40855 = G__40860;
chunk__40266_40856 = G__40861;
count__40267_40857 = G__40862;
i__40268_40858 = G__40863;
continue;
} else {
var temp__5735__auto___40864 = cljs.core.seq(seq__40265_40855);
if(temp__5735__auto___40864){
var seq__40265_40865__$1 = temp__5735__auto___40864;
if(cljs.core.chunked_seq_QMARK_(seq__40265_40865__$1)){
var c__4556__auto___40866 = cljs.core.chunk_first(seq__40265_40865__$1);
var G__40867 = cljs.core.chunk_rest(seq__40265_40865__$1);
var G__40868 = c__4556__auto___40866;
var G__40869 = cljs.core.count(c__4556__auto___40866);
var G__40870 = (0);
seq__40265_40855 = G__40867;
chunk__40266_40856 = G__40868;
count__40267_40857 = G__40869;
i__40268_40858 = G__40870;
continue;
} else {
var c_40871 = cljs.core.first(seq__40265_40865__$1);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_40871);


var G__40872 = cljs.core.next(seq__40265_40865__$1);
var G__40873 = null;
var G__40874 = (0);
var G__40875 = (0);
seq__40265_40855 = G__40872;
chunk__40266_40856 = G__40873;
count__40267_40857 = G__40874;
i__40268_40858 = G__40875;
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
var len__4736__auto___40877 = arguments.length;
var i__4737__auto___40878 = (0);
while(true){
if((i__4737__auto___40878 < len__4736__auto___40877)){
args_arr__4757__auto__.push((arguments[i__4737__auto___40878]));

var G__40879 = (i__4737__auto___40878 + (1));
i__4737__auto___40878 = G__40879;
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
var seq__40275_40880 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__40276_40881 = null;
var count__40277_40882 = (0);
var i__40278_40883 = (0);
while(true){
if((i__40278_40883 < count__40277_40882)){
var c_40884 = chunk__40276_40881.cljs$core$IIndexed$_nth$arity$2(null,i__40278_40883);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_40884);


var G__40885 = seq__40275_40880;
var G__40886 = chunk__40276_40881;
var G__40887 = count__40277_40882;
var G__40888 = (i__40278_40883 + (1));
seq__40275_40880 = G__40885;
chunk__40276_40881 = G__40886;
count__40277_40882 = G__40887;
i__40278_40883 = G__40888;
continue;
} else {
var temp__5735__auto___40889 = cljs.core.seq(seq__40275_40880);
if(temp__5735__auto___40889){
var seq__40275_40890__$1 = temp__5735__auto___40889;
if(cljs.core.chunked_seq_QMARK_(seq__40275_40890__$1)){
var c__4556__auto___40891 = cljs.core.chunk_first(seq__40275_40890__$1);
var G__40892 = cljs.core.chunk_rest(seq__40275_40890__$1);
var G__40893 = c__4556__auto___40891;
var G__40894 = cljs.core.count(c__4556__auto___40891);
var G__40895 = (0);
seq__40275_40880 = G__40892;
chunk__40276_40881 = G__40893;
count__40277_40882 = G__40894;
i__40278_40883 = G__40895;
continue;
} else {
var c_40896 = cljs.core.first(seq__40275_40890__$1);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_40896);


var G__40897 = cljs.core.next(seq__40275_40890__$1);
var G__40898 = null;
var G__40899 = (0);
var G__40900 = (0);
seq__40275_40880 = G__40897;
chunk__40276_40881 = G__40898;
count__40277_40882 = G__40899;
i__40278_40883 = G__40900;
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
var temp__5733__auto___40905 = other.nextSibling;
if(cljs.core.truth_(temp__5733__auto___40905)){
var next_40906 = temp__5733__auto___40905;
dommy.core.insert_before_BANG_(elem,next_40906);
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
var len__4736__auto___40924 = arguments.length;
var i__4737__auto___40925 = (0);
while(true){
if((i__4737__auto___40925 < len__4736__auto___40924)){
args__4742__auto__.push((arguments[i__4737__auto___40925]));

var G__40926 = (i__4737__auto___40925 + (1));
i__4737__auto___40925 = G__40926;
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
(dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq40289){
var G__40290 = cljs.core.first(seq40289);
var seq40289__$1 = cljs.core.next(seq40289);
var G__40291 = cljs.core.first(seq40289__$1);
var seq40289__$2 = cljs.core.next(seq40289__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40290,G__40291,seq40289__$2);
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
var len__4736__auto___40937 = arguments.length;
var i__4737__auto___40938 = (0);
while(true){
if((i__4737__auto___40938 < len__4736__auto___40937)){
args__4742__auto__.push((arguments[i__4737__auto___40938]));

var G__40939 = (i__4737__auto___40938 + (1));
i__4737__auto___40938 = G__40939;
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

var vec__40294_40943 = dommy.core.elem_and_selector(elem_sel);
var elem_40944 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40294_40943,(0),null);
var selector_40945 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40294_40943,(1),null);
var seq__40297_40948 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__40304_40949 = null;
var count__40305_40950 = (0);
var i__40306_40951 = (0);
while(true){
if((i__40306_40951 < count__40305_40950)){
var vec__40362_40952 = chunk__40304_40949.cljs$core$IIndexed$_nth$arity$2(null,i__40306_40951);
var orig_type_40953 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40362_40952,(0),null);
var f_40954 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40362_40952,(1),null);
var seq__40307_40956 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_40953,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_40953,cljs.core.identity])));
var chunk__40309_40957 = null;
var count__40310_40958 = (0);
var i__40311_40959 = (0);
while(true){
if((i__40311_40959 < count__40310_40958)){
var vec__40379_40962 = chunk__40309_40957.cljs$core$IIndexed$_nth$arity$2(null,i__40311_40959);
var actual_type_40963 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40379_40962,(0),null);
var factory_40964 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40379_40962,(1),null);
var canonical_f_40966 = (function (){var G__40383 = (factory_40964.cljs$core$IFn$_invoke$arity$1 ? factory_40964.cljs$core$IFn$_invoke$arity$1(f_40954) : factory_40964.call(null,f_40954));
var fexpr__40382 = (cljs.core.truth_(selector_40945)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_40944,selector_40945):cljs.core.identity);
return (fexpr__40382.cljs$core$IFn$_invoke$arity$1 ? fexpr__40382.cljs$core$IFn$_invoke$arity$1(G__40383) : fexpr__40382.call(null,G__40383));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_40944,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_40945,actual_type_40963,f_40954], null),canonical_f_40966], 0));

if(cljs.core.truth_(elem_40944.addEventListener)){
elem_40944.addEventListener(cljs.core.name(actual_type_40963),canonical_f_40966);
} else {
elem_40944.attachEvent(cljs.core.name(actual_type_40963),canonical_f_40966);
}


var G__40973 = seq__40307_40956;
var G__40974 = chunk__40309_40957;
var G__40975 = count__40310_40958;
var G__40976 = (i__40311_40959 + (1));
seq__40307_40956 = G__40973;
chunk__40309_40957 = G__40974;
count__40310_40958 = G__40975;
i__40311_40959 = G__40976;
continue;
} else {
var temp__5735__auto___40977 = cljs.core.seq(seq__40307_40956);
if(temp__5735__auto___40977){
var seq__40307_40978__$1 = temp__5735__auto___40977;
if(cljs.core.chunked_seq_QMARK_(seq__40307_40978__$1)){
var c__4556__auto___40979 = cljs.core.chunk_first(seq__40307_40978__$1);
var G__40981 = cljs.core.chunk_rest(seq__40307_40978__$1);
var G__40982 = c__4556__auto___40979;
var G__40983 = cljs.core.count(c__4556__auto___40979);
var G__40984 = (0);
seq__40307_40956 = G__40981;
chunk__40309_40957 = G__40982;
count__40310_40958 = G__40983;
i__40311_40959 = G__40984;
continue;
} else {
var vec__40387_40987 = cljs.core.first(seq__40307_40978__$1);
var actual_type_40988 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40387_40987,(0),null);
var factory_40989 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40387_40987,(1),null);
var canonical_f_40990 = (function (){var G__40391 = (factory_40989.cljs$core$IFn$_invoke$arity$1 ? factory_40989.cljs$core$IFn$_invoke$arity$1(f_40954) : factory_40989.call(null,f_40954));
var fexpr__40390 = (cljs.core.truth_(selector_40945)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_40944,selector_40945):cljs.core.identity);
return (fexpr__40390.cljs$core$IFn$_invoke$arity$1 ? fexpr__40390.cljs$core$IFn$_invoke$arity$1(G__40391) : fexpr__40390.call(null,G__40391));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_40944,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_40945,actual_type_40988,f_40954], null),canonical_f_40990], 0));

if(cljs.core.truth_(elem_40944.addEventListener)){
elem_40944.addEventListener(cljs.core.name(actual_type_40988),canonical_f_40990);
} else {
elem_40944.attachEvent(cljs.core.name(actual_type_40988),canonical_f_40990);
}


var G__40996 = cljs.core.next(seq__40307_40978__$1);
var G__40997 = null;
var G__40998 = (0);
var G__40999 = (0);
seq__40307_40956 = G__40996;
chunk__40309_40957 = G__40997;
count__40310_40958 = G__40998;
i__40311_40959 = G__40999;
continue;
}
} else {
}
}
break;
}

var G__41001 = seq__40297_40948;
var G__41002 = chunk__40304_40949;
var G__41003 = count__40305_40950;
var G__41004 = (i__40306_40951 + (1));
seq__40297_40948 = G__41001;
chunk__40304_40949 = G__41002;
count__40305_40950 = G__41003;
i__40306_40951 = G__41004;
continue;
} else {
var temp__5735__auto___41005 = cljs.core.seq(seq__40297_40948);
if(temp__5735__auto___41005){
var seq__40297_41006__$1 = temp__5735__auto___41005;
if(cljs.core.chunked_seq_QMARK_(seq__40297_41006__$1)){
var c__4556__auto___41008 = cljs.core.chunk_first(seq__40297_41006__$1);
var G__41009 = cljs.core.chunk_rest(seq__40297_41006__$1);
var G__41010 = c__4556__auto___41008;
var G__41011 = cljs.core.count(c__4556__auto___41008);
var G__41012 = (0);
seq__40297_40948 = G__41009;
chunk__40304_40949 = G__41010;
count__40305_40950 = G__41011;
i__40306_40951 = G__41012;
continue;
} else {
var vec__40392_41018 = cljs.core.first(seq__40297_41006__$1);
var orig_type_41019 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40392_41018,(0),null);
var f_41020 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40392_41018,(1),null);
var seq__40298_41024 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_41019,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_41019,cljs.core.identity])));
var chunk__40300_41025 = null;
var count__40301_41026 = (0);
var i__40302_41028 = (0);
while(true){
if((i__40302_41028 < count__40301_41026)){
var vec__40409_41031 = chunk__40300_41025.cljs$core$IIndexed$_nth$arity$2(null,i__40302_41028);
var actual_type_41032 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40409_41031,(0),null);
var factory_41033 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40409_41031,(1),null);
var canonical_f_41034 = (function (){var G__40413 = (factory_41033.cljs$core$IFn$_invoke$arity$1 ? factory_41033.cljs$core$IFn$_invoke$arity$1(f_41020) : factory_41033.call(null,f_41020));
var fexpr__40412 = (cljs.core.truth_(selector_40945)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_40944,selector_40945):cljs.core.identity);
return (fexpr__40412.cljs$core$IFn$_invoke$arity$1 ? fexpr__40412.cljs$core$IFn$_invoke$arity$1(G__40413) : fexpr__40412.call(null,G__40413));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_40944,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_40945,actual_type_41032,f_41020], null),canonical_f_41034], 0));

if(cljs.core.truth_(elem_40944.addEventListener)){
elem_40944.addEventListener(cljs.core.name(actual_type_41032),canonical_f_41034);
} else {
elem_40944.attachEvent(cljs.core.name(actual_type_41032),canonical_f_41034);
}


var G__41038 = seq__40298_41024;
var G__41039 = chunk__40300_41025;
var G__41040 = count__40301_41026;
var G__41041 = (i__40302_41028 + (1));
seq__40298_41024 = G__41038;
chunk__40300_41025 = G__41039;
count__40301_41026 = G__41040;
i__40302_41028 = G__41041;
continue;
} else {
var temp__5735__auto___41045__$1 = cljs.core.seq(seq__40298_41024);
if(temp__5735__auto___41045__$1){
var seq__40298_41046__$1 = temp__5735__auto___41045__$1;
if(cljs.core.chunked_seq_QMARK_(seq__40298_41046__$1)){
var c__4556__auto___41047 = cljs.core.chunk_first(seq__40298_41046__$1);
var G__41048 = cljs.core.chunk_rest(seq__40298_41046__$1);
var G__41049 = c__4556__auto___41047;
var G__41050 = cljs.core.count(c__4556__auto___41047);
var G__41051 = (0);
seq__40298_41024 = G__41048;
chunk__40300_41025 = G__41049;
count__40301_41026 = G__41050;
i__40302_41028 = G__41051;
continue;
} else {
var vec__40414_41052 = cljs.core.first(seq__40298_41046__$1);
var actual_type_41053 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40414_41052,(0),null);
var factory_41054 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40414_41052,(1),null);
var canonical_f_41058 = (function (){var G__40418 = (factory_41054.cljs$core$IFn$_invoke$arity$1 ? factory_41054.cljs$core$IFn$_invoke$arity$1(f_41020) : factory_41054.call(null,f_41020));
var fexpr__40417 = (cljs.core.truth_(selector_40945)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_40944,selector_40945):cljs.core.identity);
return (fexpr__40417.cljs$core$IFn$_invoke$arity$1 ? fexpr__40417.cljs$core$IFn$_invoke$arity$1(G__40418) : fexpr__40417.call(null,G__40418));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_40944,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_40945,actual_type_41053,f_41020], null),canonical_f_41058], 0));

if(cljs.core.truth_(elem_40944.addEventListener)){
elem_40944.addEventListener(cljs.core.name(actual_type_41053),canonical_f_41058);
} else {
elem_40944.attachEvent(cljs.core.name(actual_type_41053),canonical_f_41058);
}


var G__41062 = cljs.core.next(seq__40298_41046__$1);
var G__41063 = null;
var G__41064 = (0);
var G__41065 = (0);
seq__40298_41024 = G__41062;
chunk__40300_41025 = G__41063;
count__40301_41026 = G__41064;
i__40302_41028 = G__41065;
continue;
}
} else {
}
}
break;
}

var G__41068 = cljs.core.next(seq__40297_41006__$1);
var G__41069 = null;
var G__41070 = (0);
var G__41071 = (0);
seq__40297_40948 = G__41068;
chunk__40304_40949 = G__41069;
count__40305_40950 = G__41070;
i__40306_40951 = G__41071;
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
(dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq40292){
var G__40293 = cljs.core.first(seq40292);
var seq40292__$1 = cljs.core.next(seq40292);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40293,seq40292__$1);
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
var len__4736__auto___41076 = arguments.length;
var i__4737__auto___41077 = (0);
while(true){
if((i__4737__auto___41077 < len__4736__auto___41076)){
args__4742__auto__.push((arguments[i__4737__auto___41077]));

var G__41079 = (i__4737__auto___41077 + (1));
i__4737__auto___41077 = G__41079;
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

var vec__40424_41081 = dommy.core.elem_and_selector(elem_sel);
var elem_41082 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40424_41081,(0),null);
var selector_41083 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40424_41081,(1),null);
var seq__40427_41105 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__40434_41106 = null;
var count__40435_41107 = (0);
var i__40436_41108 = (0);
while(true){
if((i__40436_41108 < count__40435_41107)){
var vec__40513_41109 = chunk__40434_41106.cljs$core$IIndexed$_nth$arity$2(null,i__40436_41108);
var orig_type_41110 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40513_41109,(0),null);
var f_41111 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40513_41109,(1),null);
var seq__40437_41113 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_41110,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_41110,cljs.core.identity])));
var chunk__40439_41114 = null;
var count__40440_41115 = (0);
var i__40441_41116 = (0);
while(true){
if((i__40441_41116 < count__40440_41115)){
var vec__40534_41118 = chunk__40439_41114.cljs$core$IIndexed$_nth$arity$2(null,i__40441_41116);
var actual_type_41119 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40534_41118,(0),null);
var __41120 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40534_41118,(1),null);
var keys_41122 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_41083,actual_type_41119,f_41111], null);
var canonical_f_41123 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_41082),keys_41122);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_41082,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_41122], 0));

if(cljs.core.truth_(elem_41082.removeEventListener)){
elem_41082.removeEventListener(cljs.core.name(actual_type_41119),canonical_f_41123);
} else {
elem_41082.detachEvent(cljs.core.name(actual_type_41119),canonical_f_41123);
}


var G__41124 = seq__40437_41113;
var G__41125 = chunk__40439_41114;
var G__41126 = count__40440_41115;
var G__41127 = (i__40441_41116 + (1));
seq__40437_41113 = G__41124;
chunk__40439_41114 = G__41125;
count__40440_41115 = G__41126;
i__40441_41116 = G__41127;
continue;
} else {
var temp__5735__auto___41129 = cljs.core.seq(seq__40437_41113);
if(temp__5735__auto___41129){
var seq__40437_41131__$1 = temp__5735__auto___41129;
if(cljs.core.chunked_seq_QMARK_(seq__40437_41131__$1)){
var c__4556__auto___41132 = cljs.core.chunk_first(seq__40437_41131__$1);
var G__41139 = cljs.core.chunk_rest(seq__40437_41131__$1);
var G__41140 = c__4556__auto___41132;
var G__41141 = cljs.core.count(c__4556__auto___41132);
var G__41142 = (0);
seq__40437_41113 = G__41139;
chunk__40439_41114 = G__41140;
count__40440_41115 = G__41141;
i__40441_41116 = G__41142;
continue;
} else {
var vec__40540_41144 = cljs.core.first(seq__40437_41131__$1);
var actual_type_41145 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40540_41144,(0),null);
var __41146 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40540_41144,(1),null);
var keys_41148 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_41083,actual_type_41145,f_41111], null);
var canonical_f_41149 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_41082),keys_41148);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_41082,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_41148], 0));

if(cljs.core.truth_(elem_41082.removeEventListener)){
elem_41082.removeEventListener(cljs.core.name(actual_type_41145),canonical_f_41149);
} else {
elem_41082.detachEvent(cljs.core.name(actual_type_41145),canonical_f_41149);
}


var G__41157 = cljs.core.next(seq__40437_41131__$1);
var G__41158 = null;
var G__41159 = (0);
var G__41160 = (0);
seq__40437_41113 = G__41157;
chunk__40439_41114 = G__41158;
count__40440_41115 = G__41159;
i__40441_41116 = G__41160;
continue;
}
} else {
}
}
break;
}

var G__41163 = seq__40427_41105;
var G__41164 = chunk__40434_41106;
var G__41165 = count__40435_41107;
var G__41166 = (i__40436_41108 + (1));
seq__40427_41105 = G__41163;
chunk__40434_41106 = G__41164;
count__40435_41107 = G__41165;
i__40436_41108 = G__41166;
continue;
} else {
var temp__5735__auto___41167 = cljs.core.seq(seq__40427_41105);
if(temp__5735__auto___41167){
var seq__40427_41168__$1 = temp__5735__auto___41167;
if(cljs.core.chunked_seq_QMARK_(seq__40427_41168__$1)){
var c__4556__auto___41171 = cljs.core.chunk_first(seq__40427_41168__$1);
var G__41172 = cljs.core.chunk_rest(seq__40427_41168__$1);
var G__41173 = c__4556__auto___41171;
var G__41174 = cljs.core.count(c__4556__auto___41171);
var G__41175 = (0);
seq__40427_41105 = G__41172;
chunk__40434_41106 = G__41173;
count__40435_41107 = G__41174;
i__40436_41108 = G__41175;
continue;
} else {
var vec__40543_41178 = cljs.core.first(seq__40427_41168__$1);
var orig_type_41179 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40543_41178,(0),null);
var f_41180 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40543_41178,(1),null);
var seq__40428_41181 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_41179,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_41179,cljs.core.identity])));
var chunk__40430_41182 = null;
var count__40431_41183 = (0);
var i__40432_41184 = (0);
while(true){
if((i__40432_41184 < count__40431_41183)){
var vec__40554_41186 = chunk__40430_41182.cljs$core$IIndexed$_nth$arity$2(null,i__40432_41184);
var actual_type_41187 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40554_41186,(0),null);
var __41188 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40554_41186,(1),null);
var keys_41191 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_41083,actual_type_41187,f_41180], null);
var canonical_f_41192 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_41082),keys_41191);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_41082,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_41191], 0));

if(cljs.core.truth_(elem_41082.removeEventListener)){
elem_41082.removeEventListener(cljs.core.name(actual_type_41187),canonical_f_41192);
} else {
elem_41082.detachEvent(cljs.core.name(actual_type_41187),canonical_f_41192);
}


var G__41200 = seq__40428_41181;
var G__41201 = chunk__40430_41182;
var G__41202 = count__40431_41183;
var G__41203 = (i__40432_41184 + (1));
seq__40428_41181 = G__41200;
chunk__40430_41182 = G__41201;
count__40431_41183 = G__41202;
i__40432_41184 = G__41203;
continue;
} else {
var temp__5735__auto___41206__$1 = cljs.core.seq(seq__40428_41181);
if(temp__5735__auto___41206__$1){
var seq__40428_41207__$1 = temp__5735__auto___41206__$1;
if(cljs.core.chunked_seq_QMARK_(seq__40428_41207__$1)){
var c__4556__auto___41210 = cljs.core.chunk_first(seq__40428_41207__$1);
var G__41212 = cljs.core.chunk_rest(seq__40428_41207__$1);
var G__41213 = c__4556__auto___41210;
var G__41214 = cljs.core.count(c__4556__auto___41210);
var G__41215 = (0);
seq__40428_41181 = G__41212;
chunk__40430_41182 = G__41213;
count__40431_41183 = G__41214;
i__40432_41184 = G__41215;
continue;
} else {
var vec__40557_41219 = cljs.core.first(seq__40428_41207__$1);
var actual_type_41220 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40557_41219,(0),null);
var __41221 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40557_41219,(1),null);
var keys_41225 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_41083,actual_type_41220,f_41180], null);
var canonical_f_41226 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_41082),keys_41225);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_41082,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_41225], 0));

if(cljs.core.truth_(elem_41082.removeEventListener)){
elem_41082.removeEventListener(cljs.core.name(actual_type_41220),canonical_f_41226);
} else {
elem_41082.detachEvent(cljs.core.name(actual_type_41220),canonical_f_41226);
}


var G__41234 = cljs.core.next(seq__40428_41207__$1);
var G__41235 = null;
var G__41236 = (0);
var G__41237 = (0);
seq__40428_41181 = G__41234;
chunk__40430_41182 = G__41235;
count__40431_41183 = G__41236;
i__40432_41184 = G__41237;
continue;
}
} else {
}
}
break;
}

var G__41242 = cljs.core.next(seq__40427_41168__$1);
var G__41243 = null;
var G__41244 = (0);
var G__41245 = (0);
seq__40427_41105 = G__41242;
chunk__40434_41106 = G__41243;
count__40435_41107 = G__41244;
i__40436_41108 = G__41245;
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
(dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq40420){
var G__40421 = cljs.core.first(seq40420);
var seq40420__$1 = cljs.core.next(seq40420);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40421,seq40420__$1);
}));

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___41249 = arguments.length;
var i__4737__auto___41250 = (0);
while(true){
if((i__4737__auto___41250 < len__4736__auto___41249)){
args__4742__auto__.push((arguments[i__4737__auto___41250]));

var G__41251 = (i__4737__auto___41250 + (1));
i__4737__auto___41250 = G__41251;
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

var vec__40562_41254 = dommy.core.elem_and_selector(elem_sel);
var elem_41255 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40562_41254,(0),null);
var selector_41256 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40562_41254,(1),null);
var seq__40565_41257 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__40566_41258 = null;
var count__40567_41259 = (0);
var i__40568_41260 = (0);
while(true){
if((i__40568_41260 < count__40567_41259)){
var vec__40575_41263 = chunk__40566_41258.cljs$core$IIndexed$_nth$arity$2(null,i__40568_41260);
var type_41264 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40575_41263,(0),null);
var f_41265 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40575_41263,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_41264,((function (seq__40565_41257,chunk__40566_41258,count__40567_41259,i__40568_41260,vec__40575_41263,type_41264,f_41265,vec__40562_41254,elem_41255,selector_41256){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_41264,dommy$core$this_fn], 0));

return (f_41265.cljs$core$IFn$_invoke$arity$1 ? f_41265.cljs$core$IFn$_invoke$arity$1(e) : f_41265.call(null,e));
});})(seq__40565_41257,chunk__40566_41258,count__40567_41259,i__40568_41260,vec__40575_41263,type_41264,f_41265,vec__40562_41254,elem_41255,selector_41256))
], 0));


var G__41271 = seq__40565_41257;
var G__41272 = chunk__40566_41258;
var G__41273 = count__40567_41259;
var G__41274 = (i__40568_41260 + (1));
seq__40565_41257 = G__41271;
chunk__40566_41258 = G__41272;
count__40567_41259 = G__41273;
i__40568_41260 = G__41274;
continue;
} else {
var temp__5735__auto___41277 = cljs.core.seq(seq__40565_41257);
if(temp__5735__auto___41277){
var seq__40565_41278__$1 = temp__5735__auto___41277;
if(cljs.core.chunked_seq_QMARK_(seq__40565_41278__$1)){
var c__4556__auto___41280 = cljs.core.chunk_first(seq__40565_41278__$1);
var G__41282 = cljs.core.chunk_rest(seq__40565_41278__$1);
var G__41283 = c__4556__auto___41280;
var G__41284 = cljs.core.count(c__4556__auto___41280);
var G__41285 = (0);
seq__40565_41257 = G__41282;
chunk__40566_41258 = G__41283;
count__40567_41259 = G__41284;
i__40568_41260 = G__41285;
continue;
} else {
var vec__40578_41286 = cljs.core.first(seq__40565_41278__$1);
var type_41287 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40578_41286,(0),null);
var f_41288 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40578_41286,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_41287,((function (seq__40565_41257,chunk__40566_41258,count__40567_41259,i__40568_41260,vec__40578_41286,type_41287,f_41288,seq__40565_41278__$1,temp__5735__auto___41277,vec__40562_41254,elem_41255,selector_41256){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_41287,dommy$core$this_fn], 0));

return (f_41288.cljs$core$IFn$_invoke$arity$1 ? f_41288.cljs$core$IFn$_invoke$arity$1(e) : f_41288.call(null,e));
});})(seq__40565_41257,chunk__40566_41258,count__40567_41259,i__40568_41260,vec__40578_41286,type_41287,f_41288,seq__40565_41278__$1,temp__5735__auto___41277,vec__40562_41254,elem_41255,selector_41256))
], 0));


var G__41295 = cljs.core.next(seq__40565_41278__$1);
var G__41296 = null;
var G__41297 = (0);
var G__41298 = (0);
seq__40565_41257 = G__41295;
chunk__40566_41258 = G__41296;
count__40567_41259 = G__41297;
i__40568_41260 = G__41298;
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
(dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq40560){
var G__40561 = cljs.core.first(seq40560);
var seq40560__$1 = cljs.core.next(seq40560);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40561,seq40560__$1);
}));


//# sourceMappingURL=dommy.core.js.map
