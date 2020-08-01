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
var or__4185__auto__ = elem.textContent;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
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
var G__41173 = arguments.length;
switch (G__41173) {
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
var G__41175 = arguments.length;
switch (G__41175) {
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
var G__41178 = arguments.length;
switch (G__41178) {
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
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(base,selector),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__41176_SHARP_){
return (!((p1__41176_SHARP_ === base)));
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
var args__4795__auto__ = [];
var len__4789__auto___41593 = arguments.length;
var i__4790__auto___41594 = (0);
while(true){
if((i__4790__auto___41594 < len__4789__auto___41593)){
args__4795__auto__.push((arguments[i__4790__auto___41594]));

var G__41595 = (i__4790__auto___41594 + (1));
i__4790__auto___41594 = G__41595;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){
if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var style = elem.style;
var seq__41183_41596 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__41184_41597 = null;
var count__41185_41598 = (0);
var i__41186_41599 = (0);
while(true){
if((i__41186_41599 < count__41185_41598)){
var vec__41193_41600 = chunk__41184_41597.cljs$core$IIndexed$_nth$arity$2(null,i__41186_41599);
var k_41601 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41193_41600,(0),null);
var v_41602 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41193_41600,(1),null);
style.setProperty(dommy.utils.as_str(k_41601),v_41602);


var G__41603 = seq__41183_41596;
var G__41604 = chunk__41184_41597;
var G__41605 = count__41185_41598;
var G__41606 = (i__41186_41599 + (1));
seq__41183_41596 = G__41603;
chunk__41184_41597 = G__41604;
count__41185_41598 = G__41605;
i__41186_41599 = G__41606;
continue;
} else {
var temp__5735__auto___41607 = cljs.core.seq(seq__41183_41596);
if(temp__5735__auto___41607){
var seq__41183_41608__$1 = temp__5735__auto___41607;
if(cljs.core.chunked_seq_QMARK_(seq__41183_41608__$1)){
var c__4609__auto___41609 = cljs.core.chunk_first(seq__41183_41608__$1);
var G__41610 = cljs.core.chunk_rest(seq__41183_41608__$1);
var G__41611 = c__4609__auto___41609;
var G__41612 = cljs.core.count(c__4609__auto___41609);
var G__41613 = (0);
seq__41183_41596 = G__41610;
chunk__41184_41597 = G__41611;
count__41185_41598 = G__41612;
i__41186_41599 = G__41613;
continue;
} else {
var vec__41196_41615 = cljs.core.first(seq__41183_41608__$1);
var k_41616 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41196_41615,(0),null);
var v_41617 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41196_41615,(1),null);
style.setProperty(dommy.utils.as_str(k_41616),v_41617);


var G__41618 = cljs.core.next(seq__41183_41608__$1);
var G__41619 = null;
var G__41620 = (0);
var G__41621 = (0);
seq__41183_41596 = G__41618;
chunk__41184_41597 = G__41619;
count__41185_41598 = G__41620;
i__41186_41599 = G__41621;
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
(dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq41181){
var G__41182 = cljs.core.first(seq41181);
var seq41181__$1 = cljs.core.next(seq41181);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41182,seq41181__$1);
}));

/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41631 = arguments.length;
var i__4790__auto___41632 = (0);
while(true){
if((i__4790__auto___41632 < len__4789__auto___41631)){
args__4795__auto__.push((arguments[i__4790__auto___41632]));

var G__41634 = (i__4790__auto___41632 + (1));
i__4790__auto___41632 = G__41634;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,keywords){
var style = elem.style;
var seq__41201_41642 = cljs.core.seq(keywords);
var chunk__41202_41643 = null;
var count__41203_41644 = (0);
var i__41204_41645 = (0);
while(true){
if((i__41204_41645 < count__41203_41644)){
var kw_41646 = chunk__41202_41643.cljs$core$IIndexed$_nth$arity$2(null,i__41204_41645);
style.removeProperty(dommy.utils.as_str(kw_41646));


var G__41651 = seq__41201_41642;
var G__41652 = chunk__41202_41643;
var G__41653 = count__41203_41644;
var G__41654 = (i__41204_41645 + (1));
seq__41201_41642 = G__41651;
chunk__41202_41643 = G__41652;
count__41203_41644 = G__41653;
i__41204_41645 = G__41654;
continue;
} else {
var temp__5735__auto___41655 = cljs.core.seq(seq__41201_41642);
if(temp__5735__auto___41655){
var seq__41201_41656__$1 = temp__5735__auto___41655;
if(cljs.core.chunked_seq_QMARK_(seq__41201_41656__$1)){
var c__4609__auto___41657 = cljs.core.chunk_first(seq__41201_41656__$1);
var G__41658 = cljs.core.chunk_rest(seq__41201_41656__$1);
var G__41659 = c__4609__auto___41657;
var G__41660 = cljs.core.count(c__4609__auto___41657);
var G__41661 = (0);
seq__41201_41642 = G__41658;
chunk__41202_41643 = G__41659;
count__41203_41644 = G__41660;
i__41204_41645 = G__41661;
continue;
} else {
var kw_41662 = cljs.core.first(seq__41201_41656__$1);
style.removeProperty(dommy.utils.as_str(kw_41662));


var G__41663 = cljs.core.next(seq__41201_41656__$1);
var G__41664 = null;
var G__41665 = (0);
var G__41666 = (0);
seq__41201_41642 = G__41663;
chunk__41202_41643 = G__41664;
count__41203_41644 = G__41665;
i__41204_41645 = G__41666;
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
(dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq41199){
var G__41200 = cljs.core.first(seq41199);
var seq41199__$1 = cljs.core.next(seq41199);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41200,seq41199__$1);
}));

dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41667 = arguments.length;
var i__4790__auto___41668 = (0);
while(true){
if((i__4790__auto___41668 < len__4789__auto___41667)){
args__4795__auto__.push((arguments[i__4790__auto___41668]));

var G__41669 = (i__4790__auto___41668 + (1));
i__4790__auto___41668 = G__41669;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){

if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var seq__41207_41670 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__41208_41671 = null;
var count__41209_41672 = (0);
var i__41210_41673 = (0);
while(true){
if((i__41210_41673 < count__41209_41672)){
var vec__41218_41674 = chunk__41208_41671.cljs$core$IIndexed$_nth$arity$2(null,i__41210_41673);
var k_41675 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41218_41674,(0),null);
var v_41676 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41218_41674,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_41675,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_41676),"px"].join('')], 0));


var G__41680 = seq__41207_41670;
var G__41681 = chunk__41208_41671;
var G__41682 = count__41209_41672;
var G__41683 = (i__41210_41673 + (1));
seq__41207_41670 = G__41680;
chunk__41208_41671 = G__41681;
count__41209_41672 = G__41682;
i__41210_41673 = G__41683;
continue;
} else {
var temp__5735__auto___41684 = cljs.core.seq(seq__41207_41670);
if(temp__5735__auto___41684){
var seq__41207_41685__$1 = temp__5735__auto___41684;
if(cljs.core.chunked_seq_QMARK_(seq__41207_41685__$1)){
var c__4609__auto___41686 = cljs.core.chunk_first(seq__41207_41685__$1);
var G__41687 = cljs.core.chunk_rest(seq__41207_41685__$1);
var G__41688 = c__4609__auto___41686;
var G__41689 = cljs.core.count(c__4609__auto___41686);
var G__41690 = (0);
seq__41207_41670 = G__41687;
chunk__41208_41671 = G__41688;
count__41209_41672 = G__41689;
i__41210_41673 = G__41690;
continue;
} else {
var vec__41221_41691 = cljs.core.first(seq__41207_41685__$1);
var k_41692 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41221_41691,(0),null);
var v_41693 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41221_41691,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_41692,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_41693),"px"].join('')], 0));


var G__41694 = cljs.core.next(seq__41207_41685__$1);
var G__41695 = null;
var G__41696 = (0);
var G__41697 = (0);
seq__41207_41670 = G__41694;
chunk__41208_41671 = G__41695;
count__41209_41672 = G__41696;
i__41210_41673 = G__41697;
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
(dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq41205){
var G__41206 = cljs.core.first(seq41205);
var seq41205__$1 = cljs.core.next(seq41205);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41206,seq41205__$1);
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
var G__41229 = arguments.length;
switch (G__41229) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___41699 = arguments.length;
var i__4790__auto___41700 = (0);
while(true){
if((i__4790__auto___41700 < len__4789__auto___41699)){
args_arr__4810__auto__.push((arguments[i__4790__auto___41700]));

var G__41701 = (i__4790__auto___41700 + (1));
i__4790__auto___41700 = G__41701;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((3)),(0),null));
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4811__auto__);

}
});

(dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k,dommy.utils.as_str(k));
}));

(dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,v){
var k__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_(v)){
if(cljs.core.fn_QMARK_(v)){
var G__41230 = elem;
(G__41230[k__$1] = v);

return G__41230;
} else {
var G__41231 = elem;
G__41231.setAttribute(k__$1,v);

return G__41231;
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

var seq__41232_41703 = cljs.core.seq(cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs)));
var chunk__41233_41704 = null;
var count__41234_41705 = (0);
var i__41235_41706 = (0);
while(true){
if((i__41235_41706 < count__41234_41705)){
var vec__41242_41708 = chunk__41233_41704.cljs$core$IIndexed$_nth$arity$2(null,i__41235_41706);
var k_41709__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41242_41708,(0),null);
var v_41710__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41242_41708,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_41709__$1,v_41710__$1);


var G__41711 = seq__41232_41703;
var G__41712 = chunk__41233_41704;
var G__41713 = count__41234_41705;
var G__41714 = (i__41235_41706 + (1));
seq__41232_41703 = G__41711;
chunk__41233_41704 = G__41712;
count__41234_41705 = G__41713;
i__41235_41706 = G__41714;
continue;
} else {
var temp__5735__auto___41715 = cljs.core.seq(seq__41232_41703);
if(temp__5735__auto___41715){
var seq__41232_41716__$1 = temp__5735__auto___41715;
if(cljs.core.chunked_seq_QMARK_(seq__41232_41716__$1)){
var c__4609__auto___41717 = cljs.core.chunk_first(seq__41232_41716__$1);
var G__41718 = cljs.core.chunk_rest(seq__41232_41716__$1);
var G__41719 = c__4609__auto___41717;
var G__41720 = cljs.core.count(c__4609__auto___41717);
var G__41721 = (0);
seq__41232_41703 = G__41718;
chunk__41233_41704 = G__41719;
count__41234_41705 = G__41720;
i__41235_41706 = G__41721;
continue;
} else {
var vec__41245_41722 = cljs.core.first(seq__41232_41716__$1);
var k_41723__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41245_41722,(0),null);
var v_41724__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41245_41722,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_41723__$1,v_41724__$1);


var G__41725 = cljs.core.next(seq__41232_41716__$1);
var G__41726 = null;
var G__41727 = (0);
var G__41728 = (0);
seq__41232_41703 = G__41725;
chunk__41233_41704 = G__41726;
count__41234_41705 = G__41727;
i__41235_41706 = G__41728;
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
(dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq41225){
var G__41226 = cljs.core.first(seq41225);
var seq41225__$1 = cljs.core.next(seq41225);
var G__41227 = cljs.core.first(seq41225__$1);
var seq41225__$2 = cljs.core.next(seq41225__$1);
var G__41228 = cljs.core.first(seq41225__$2);
var seq41225__$3 = cljs.core.next(seq41225__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41226,G__41227,G__41228,seq41225__$3);
}));

(dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3));

/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var G__41252 = arguments.length;
switch (G__41252) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___41730 = arguments.length;
var i__4790__auto___41731 = (0);
while(true){
if((i__4790__auto___41731 < len__4789__auto___41730)){
args_arr__4810__auto__.push((arguments[i__4790__auto___41731]));

var G__41732 = (i__4790__auto___41731 + (1));
i__4790__auto___41731 = G__41732;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((2)),(0),null));
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4811__auto__);

}
});

(dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
var k_41733__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_((function (){var fexpr__41253 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null);
return (fexpr__41253.cljs$core$IFn$_invoke$arity$1 ? fexpr__41253.cljs$core$IFn$_invoke$arity$1(k_41733__$1) : fexpr__41253.call(null,k_41733__$1));
})())){
dommy.core.set_class_BANG_(elem,"");
} else {
elem.removeAttribute(k_41733__$1);
}

return elem;
}));

(dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__41254_41734 = cljs.core.seq(cljs.core.cons(k,ks));
var chunk__41255_41735 = null;
var count__41256_41736 = (0);
var i__41257_41737 = (0);
while(true){
if((i__41257_41737 < count__41256_41736)){
var k_41738__$1 = chunk__41255_41735.cljs$core$IIndexed$_nth$arity$2(null,i__41257_41737);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_41738__$1);


var G__41739 = seq__41254_41734;
var G__41740 = chunk__41255_41735;
var G__41741 = count__41256_41736;
var G__41742 = (i__41257_41737 + (1));
seq__41254_41734 = G__41739;
chunk__41255_41735 = G__41740;
count__41256_41736 = G__41741;
i__41257_41737 = G__41742;
continue;
} else {
var temp__5735__auto___41743 = cljs.core.seq(seq__41254_41734);
if(temp__5735__auto___41743){
var seq__41254_41744__$1 = temp__5735__auto___41743;
if(cljs.core.chunked_seq_QMARK_(seq__41254_41744__$1)){
var c__4609__auto___41745 = cljs.core.chunk_first(seq__41254_41744__$1);
var G__41746 = cljs.core.chunk_rest(seq__41254_41744__$1);
var G__41747 = c__4609__auto___41745;
var G__41748 = cljs.core.count(c__4609__auto___41745);
var G__41749 = (0);
seq__41254_41734 = G__41746;
chunk__41255_41735 = G__41747;
count__41256_41736 = G__41748;
i__41257_41737 = G__41749;
continue;
} else {
var k_41750__$1 = cljs.core.first(seq__41254_41744__$1);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_41750__$1);


var G__41751 = cljs.core.next(seq__41254_41744__$1);
var G__41752 = null;
var G__41753 = (0);
var G__41754 = (0);
seq__41254_41734 = G__41751;
chunk__41255_41735 = G__41752;
count__41256_41736 = G__41753;
i__41257_41737 = G__41754;
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
(dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq41249){
var G__41250 = cljs.core.first(seq41249);
var seq41249__$1 = cljs.core.next(seq41249);
var G__41251 = cljs.core.first(seq41249__$1);
var seq41249__$2 = cljs.core.next(seq41249__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41250,G__41251,seq41249__$2);
}));

(dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var G__41259 = arguments.length;
switch (G__41259) {
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
var G__41264 = arguments.length;
switch (G__41264) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___41757 = arguments.length;
var i__4790__auto___41758 = (0);
while(true){
if((i__4790__auto___41758 < len__4789__auto___41757)){
args_arr__4810__auto__.push((arguments[i__4790__auto___41758]));

var G__41759 = (i__4790__auto___41758 + (1));
i__4790__auto___41758 = G__41759;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((2)),(0),null));
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4811__auto__);

}
});

(dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,classes){
var classes__$1 = clojure.string.trim(dommy.utils.as_str(classes)).split(/\s+/);
if(cljs.core.seq(classes__$1)){
var temp__5733__auto___41760 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___41760)){
var class_list_41761 = temp__5733__auto___41760;
var seq__41265_41762 = cljs.core.seq(classes__$1);
var chunk__41266_41763 = null;
var count__41267_41764 = (0);
var i__41268_41765 = (0);
while(true){
if((i__41268_41765 < count__41267_41764)){
var c_41766 = chunk__41266_41763.cljs$core$IIndexed$_nth$arity$2(null,i__41268_41765);
class_list_41761.add(c_41766);


var G__41767 = seq__41265_41762;
var G__41768 = chunk__41266_41763;
var G__41769 = count__41267_41764;
var G__41770 = (i__41268_41765 + (1));
seq__41265_41762 = G__41767;
chunk__41266_41763 = G__41768;
count__41267_41764 = G__41769;
i__41268_41765 = G__41770;
continue;
} else {
var temp__5735__auto___41771 = cljs.core.seq(seq__41265_41762);
if(temp__5735__auto___41771){
var seq__41265_41772__$1 = temp__5735__auto___41771;
if(cljs.core.chunked_seq_QMARK_(seq__41265_41772__$1)){
var c__4609__auto___41773 = cljs.core.chunk_first(seq__41265_41772__$1);
var G__41774 = cljs.core.chunk_rest(seq__41265_41772__$1);
var G__41775 = c__4609__auto___41773;
var G__41776 = cljs.core.count(c__4609__auto___41773);
var G__41777 = (0);
seq__41265_41762 = G__41774;
chunk__41266_41763 = G__41775;
count__41267_41764 = G__41776;
i__41268_41765 = G__41777;
continue;
} else {
var c_41778 = cljs.core.first(seq__41265_41772__$1);
class_list_41761.add(c_41778);


var G__41779 = cljs.core.next(seq__41265_41772__$1);
var G__41780 = null;
var G__41781 = (0);
var G__41782 = (0);
seq__41265_41762 = G__41779;
chunk__41266_41763 = G__41780;
count__41267_41764 = G__41781;
i__41268_41765 = G__41782;
continue;
}
} else {
}
}
break;
}
} else {
var seq__41269_41783 = cljs.core.seq(classes__$1);
var chunk__41270_41784 = null;
var count__41271_41785 = (0);
var i__41272_41786 = (0);
while(true){
if((i__41272_41786 < count__41271_41785)){
var c_41787 = chunk__41270_41784.cljs$core$IIndexed$_nth$arity$2(null,i__41272_41786);
var class_name_41788 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_41788,c_41787))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_41788 === ""))?c_41787:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_41788)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_41787)].join('')));
}


var G__41789 = seq__41269_41783;
var G__41790 = chunk__41270_41784;
var G__41791 = count__41271_41785;
var G__41792 = (i__41272_41786 + (1));
seq__41269_41783 = G__41789;
chunk__41270_41784 = G__41790;
count__41271_41785 = G__41791;
i__41272_41786 = G__41792;
continue;
} else {
var temp__5735__auto___41793 = cljs.core.seq(seq__41269_41783);
if(temp__5735__auto___41793){
var seq__41269_41794__$1 = temp__5735__auto___41793;
if(cljs.core.chunked_seq_QMARK_(seq__41269_41794__$1)){
var c__4609__auto___41795 = cljs.core.chunk_first(seq__41269_41794__$1);
var G__41796 = cljs.core.chunk_rest(seq__41269_41794__$1);
var G__41797 = c__4609__auto___41795;
var G__41798 = cljs.core.count(c__4609__auto___41795);
var G__41799 = (0);
seq__41269_41783 = G__41796;
chunk__41270_41784 = G__41797;
count__41271_41785 = G__41798;
i__41272_41786 = G__41799;
continue;
} else {
var c_41800 = cljs.core.first(seq__41269_41794__$1);
var class_name_41801 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_41801,c_41800))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_41801 === ""))?c_41800:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_41801)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_41800)].join('')));
}


var G__41802 = cljs.core.next(seq__41269_41794__$1);
var G__41803 = null;
var G__41804 = (0);
var G__41805 = (0);
seq__41269_41783 = G__41802;
chunk__41270_41784 = G__41803;
count__41271_41785 = G__41804;
i__41272_41786 = G__41805;
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
var seq__41273_41806 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));
var chunk__41274_41807 = null;
var count__41275_41808 = (0);
var i__41276_41809 = (0);
while(true){
if((i__41276_41809 < count__41275_41808)){
var c_41810 = chunk__41274_41807.cljs$core$IIndexed$_nth$arity$2(null,i__41276_41809);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_41810);


var G__41811 = seq__41273_41806;
var G__41812 = chunk__41274_41807;
var G__41813 = count__41275_41808;
var G__41814 = (i__41276_41809 + (1));
seq__41273_41806 = G__41811;
chunk__41274_41807 = G__41812;
count__41275_41808 = G__41813;
i__41276_41809 = G__41814;
continue;
} else {
var temp__5735__auto___41815 = cljs.core.seq(seq__41273_41806);
if(temp__5735__auto___41815){
var seq__41273_41816__$1 = temp__5735__auto___41815;
if(cljs.core.chunked_seq_QMARK_(seq__41273_41816__$1)){
var c__4609__auto___41817 = cljs.core.chunk_first(seq__41273_41816__$1);
var G__41818 = cljs.core.chunk_rest(seq__41273_41816__$1);
var G__41819 = c__4609__auto___41817;
var G__41820 = cljs.core.count(c__4609__auto___41817);
var G__41821 = (0);
seq__41273_41806 = G__41818;
chunk__41274_41807 = G__41819;
count__41275_41808 = G__41820;
i__41276_41809 = G__41821;
continue;
} else {
var c_41822 = cljs.core.first(seq__41273_41816__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_41822);


var G__41823 = cljs.core.next(seq__41273_41816__$1);
var G__41824 = null;
var G__41825 = (0);
var G__41826 = (0);
seq__41273_41806 = G__41823;
chunk__41274_41807 = G__41824;
count__41275_41808 = G__41825;
i__41276_41809 = G__41826;
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
(dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq41261){
var G__41262 = cljs.core.first(seq41261);
var seq41261__$1 = cljs.core.next(seq41261);
var G__41263 = cljs.core.first(seq41261__$1);
var seq41261__$2 = cljs.core.next(seq41261__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41262,G__41263,seq41261__$2);
}));

(dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var G__41281 = arguments.length;
switch (G__41281) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___41828 = arguments.length;
var i__4790__auto___41829 = (0);
while(true){
if((i__4790__auto___41829 < len__4789__auto___41828)){
args_arr__4810__auto__.push((arguments[i__4790__auto___41829]));

var G__41830 = (i__4790__auto___41829 + (1));
i__4790__auto___41829 = G__41830;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((2)),(0),null));
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4811__auto__);

}
});

(dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str(c);
var temp__5733__auto___41831 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___41831)){
var class_list_41832 = temp__5733__auto___41831;
class_list_41832.remove(c__$1);
} else {
var class_name_41833 = dommy.core.class$(elem);
var new_class_name_41834 = dommy.utils.remove_class_str(class_name_41833,c__$1);
if((class_name_41833 === new_class_name_41834)){
} else {
dommy.core.set_class_BANG_(elem,new_class_name_41834);
}
}

return elem;
}));

(dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__41282 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(classes,class$));
var chunk__41283 = null;
var count__41284 = (0);
var i__41285 = (0);
while(true){
if((i__41285 < count__41284)){
var c = chunk__41283.cljs$core$IIndexed$_nth$arity$2(null,i__41285);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__41835 = seq__41282;
var G__41836 = chunk__41283;
var G__41837 = count__41284;
var G__41838 = (i__41285 + (1));
seq__41282 = G__41835;
chunk__41283 = G__41836;
count__41284 = G__41837;
i__41285 = G__41838;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__41282);
if(temp__5735__auto__){
var seq__41282__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41282__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__41282__$1);
var G__41839 = cljs.core.chunk_rest(seq__41282__$1);
var G__41840 = c__4609__auto__;
var G__41841 = cljs.core.count(c__4609__auto__);
var G__41842 = (0);
seq__41282 = G__41839;
chunk__41283 = G__41840;
count__41284 = G__41841;
i__41285 = G__41842;
continue;
} else {
var c = cljs.core.first(seq__41282__$1);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__41843 = cljs.core.next(seq__41282__$1);
var G__41844 = null;
var G__41845 = (0);
var G__41846 = (0);
seq__41282 = G__41843;
chunk__41283 = G__41844;
count__41284 = G__41845;
i__41285 = G__41846;
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
(dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq41278){
var G__41279 = cljs.core.first(seq41278);
var seq41278__$1 = cljs.core.next(seq41278);
var G__41280 = cljs.core.first(seq41278__$1);
var seq41278__$2 = cljs.core.next(seq41278__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41279,G__41280,seq41278__$2);
}));

(dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var G__41287 = arguments.length;
switch (G__41287) {
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
var temp__5733__auto___41850 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___41850)){
var class_list_41851 = temp__5733__auto___41850;
class_list_41851.toggle(c__$1);
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
var G__41289 = arguments.length;
switch (G__41289) {
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
var G__41291 = arguments.length;
switch (G__41291) {
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
var G__41297 = arguments.length;
switch (G__41297) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___41856 = arguments.length;
var i__4790__auto___41857 = (0);
while(true){
if((i__4790__auto___41857 < len__4789__auto___41856)){
args_arr__4810__auto__.push((arguments[i__4790__auto___41857]));

var G__41859 = (i__4790__auto___41857 + (1));
i__4790__auto___41857 = G__41859;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((2)),(0),null));
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4811__auto__);

}
});

(dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__41298 = parent;
G__41298.appendChild(child);

return G__41298;
}));

(dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__41299_41860 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__41300_41861 = null;
var count__41301_41862 = (0);
var i__41302_41863 = (0);
while(true){
if((i__41302_41863 < count__41301_41862)){
var c_41864 = chunk__41300_41861.cljs$core$IIndexed$_nth$arity$2(null,i__41302_41863);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_41864);


var G__41865 = seq__41299_41860;
var G__41866 = chunk__41300_41861;
var G__41867 = count__41301_41862;
var G__41868 = (i__41302_41863 + (1));
seq__41299_41860 = G__41865;
chunk__41300_41861 = G__41866;
count__41301_41862 = G__41867;
i__41302_41863 = G__41868;
continue;
} else {
var temp__5735__auto___41869 = cljs.core.seq(seq__41299_41860);
if(temp__5735__auto___41869){
var seq__41299_41870__$1 = temp__5735__auto___41869;
if(cljs.core.chunked_seq_QMARK_(seq__41299_41870__$1)){
var c__4609__auto___41871 = cljs.core.chunk_first(seq__41299_41870__$1);
var G__41872 = cljs.core.chunk_rest(seq__41299_41870__$1);
var G__41873 = c__4609__auto___41871;
var G__41874 = cljs.core.count(c__4609__auto___41871);
var G__41875 = (0);
seq__41299_41860 = G__41872;
chunk__41300_41861 = G__41873;
count__41301_41862 = G__41874;
i__41302_41863 = G__41875;
continue;
} else {
var c_41876 = cljs.core.first(seq__41299_41870__$1);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_41876);


var G__41878 = cljs.core.next(seq__41299_41870__$1);
var G__41879 = null;
var G__41880 = (0);
var G__41881 = (0);
seq__41299_41860 = G__41878;
chunk__41300_41861 = G__41879;
count__41301_41862 = G__41880;
i__41302_41863 = G__41881;
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
(dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq41294){
var G__41295 = cljs.core.first(seq41294);
var seq41294__$1 = cljs.core.next(seq41294);
var G__41296 = cljs.core.first(seq41294__$1);
var seq41294__$2 = cljs.core.next(seq41294__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41295,G__41296,seq41294__$2);
}));

(dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var G__41309 = arguments.length;
switch (G__41309) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___41884 = arguments.length;
var i__4790__auto___41885 = (0);
while(true){
if((i__4790__auto___41885 < len__4789__auto___41884)){
args_arr__4810__auto__.push((arguments[i__4790__auto___41885]));

var G__41886 = (i__4790__auto___41885 + (1));
i__4790__auto___41885 = G__41886;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((2)),(0),null));
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4811__auto__);

}
});

(dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__41310 = parent;
G__41310.insertBefore(child,parent.firstChild);

return G__41310;
}));

(dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__41311_41887 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__41312_41888 = null;
var count__41313_41889 = (0);
var i__41314_41890 = (0);
while(true){
if((i__41314_41890 < count__41313_41889)){
var c_41891 = chunk__41312_41888.cljs$core$IIndexed$_nth$arity$2(null,i__41314_41890);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_41891);


var G__41892 = seq__41311_41887;
var G__41893 = chunk__41312_41888;
var G__41894 = count__41313_41889;
var G__41895 = (i__41314_41890 + (1));
seq__41311_41887 = G__41892;
chunk__41312_41888 = G__41893;
count__41313_41889 = G__41894;
i__41314_41890 = G__41895;
continue;
} else {
var temp__5735__auto___41896 = cljs.core.seq(seq__41311_41887);
if(temp__5735__auto___41896){
var seq__41311_41897__$1 = temp__5735__auto___41896;
if(cljs.core.chunked_seq_QMARK_(seq__41311_41897__$1)){
var c__4609__auto___41898 = cljs.core.chunk_first(seq__41311_41897__$1);
var G__41899 = cljs.core.chunk_rest(seq__41311_41897__$1);
var G__41900 = c__4609__auto___41898;
var G__41901 = cljs.core.count(c__4609__auto___41898);
var G__41902 = (0);
seq__41311_41887 = G__41899;
chunk__41312_41888 = G__41900;
count__41313_41889 = G__41901;
i__41314_41890 = G__41902;
continue;
} else {
var c_41903 = cljs.core.first(seq__41311_41897__$1);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_41903);


var G__41904 = cljs.core.next(seq__41311_41897__$1);
var G__41905 = null;
var G__41906 = (0);
var G__41907 = (0);
seq__41311_41887 = G__41904;
chunk__41312_41888 = G__41905;
count__41313_41889 = G__41906;
i__41314_41890 = G__41907;
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
(dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq41306){
var G__41307 = cljs.core.first(seq41306);
var seq41306__$1 = cljs.core.next(seq41306);
var G__41308 = cljs.core.first(seq41306__$1);
var seq41306__$2 = cljs.core.next(seq41306__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41307,G__41308,seq41306__$2);
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
var temp__5733__auto___41908 = other.nextSibling;
if(cljs.core.truth_(temp__5733__auto___41908)){
var next_41909 = temp__5733__auto___41908;
dommy.core.insert_before_BANG_(elem,next_41909);
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
var G__41316 = arguments.length;
switch (G__41316) {
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
var G__41317 = p;
G__41317.removeChild(elem);

return G__41317;
}));

(dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2);

dommy.core.special_listener_makers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__41318){
var vec__41319 = p__41318;
var special_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41319,(0),null);
var real_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41319,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,cljs.core.PersistentArrayMap.createAsIfByAssoc([real_mouse_event,(function (f){
return (function (event){
var related_target = event.relatedTarget;
var listener_target = (function (){var or__4185__auto__ = event.selectedTarget;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return event.currentTarget;
}
})();
if(cljs.core.truth_((function (){var and__4174__auto__ = related_target;
if(cljs.core.truth_(and__4174__auto__)){
return dommy.core.descendant_QMARK_(related_target,listener_target);
} else {
return and__4174__auto__;
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
if(cljs.core.truth_((function (){var and__4174__auto__ = selected_target;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.not(dommy.core.attr(selected_target,new cljs.core.Keyword(null,"disabled","disabled",-1529784218)));
} else {
return and__4174__auto__;
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
var or__4185__auto__ = elem.dommyEventListeners;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
dommy.core.update_event_listeners_BANG_ = (function dommy$core$update_event_listeners_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41911 = arguments.length;
var i__4790__auto___41912 = (0);
while(true){
if((i__4790__auto___41912 < len__4789__auto___41911)){
args__4795__auto__.push((arguments[i__4790__auto___41912]));

var G__41913 = (i__4790__auto___41912 + (1));
i__4790__auto___41912 = G__41913;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((2) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((2)),(0),null)):null);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4796__auto__);
});

(dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,f,args){
var elem__$1 = elem;
return (elem__$1.dommyEventListeners = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,dommy.core.event_listeners(elem__$1),args));
}));

(dommy.core.update_event_listeners_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq41322){
var G__41323 = cljs.core.first(seq41322);
var seq41322__$1 = cljs.core.next(seq41322);
var G__41324 = cljs.core.first(seq41322__$1);
var seq41322__$2 = cljs.core.next(seq41322__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41323,G__41324,seq41322__$2);
}));

dommy.core.elem_and_selector = (function dommy$core$elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_(elem_sel)){
var fexpr__41325 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.rest);
return (fexpr__41325.cljs$core$IFn$_invoke$arity$1 ? fexpr__41325.cljs$core$IFn$_invoke$arity$1(elem_sel) : fexpr__41325.call(null,elem_sel));
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
var args__4795__auto__ = [];
var len__4789__auto___41914 = arguments.length;
var i__4790__auto___41915 = (0);
while(true){
if((i__4790__auto___41915 < len__4789__auto___41914)){
args__4795__auto__.push((arguments[i__4790__auto___41915]));

var G__41916 = (i__4790__auto___41915 + (1));
i__4790__auto___41915 = G__41916;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_(cljs.core.count(type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__41328_41917 = dommy.core.elem_and_selector(elem_sel);
var elem_41918 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41328_41917,(0),null);
var selector_41919 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41328_41917,(1),null);
var seq__41331_41920 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__41338_41921 = null;
var count__41339_41922 = (0);
var i__41340_41923 = (0);
while(true){
if((i__41340_41923 < count__41339_41922)){
var vec__41393_41924 = chunk__41338_41921.cljs$core$IIndexed$_nth$arity$2(null,i__41340_41923);
var orig_type_41925 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41393_41924,(0),null);
var f_41926 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41393_41924,(1),null);
var seq__41341_41927 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_41925,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_41925,cljs.core.identity])));
var chunk__41343_41928 = null;
var count__41344_41929 = (0);
var i__41345_41930 = (0);
while(true){
if((i__41345_41930 < count__41344_41929)){
var vec__41409_41931 = chunk__41343_41928.cljs$core$IIndexed$_nth$arity$2(null,i__41345_41930);
var actual_type_41932 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41409_41931,(0),null);
var factory_41933 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41409_41931,(1),null);
var canonical_f_41934 = (function (){var G__41413 = (factory_41933.cljs$core$IFn$_invoke$arity$1 ? factory_41933.cljs$core$IFn$_invoke$arity$1(f_41926) : factory_41933.call(null,f_41926));
var fexpr__41412 = (cljs.core.truth_(selector_41919)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_41918,selector_41919):cljs.core.identity);
return (fexpr__41412.cljs$core$IFn$_invoke$arity$1 ? fexpr__41412.cljs$core$IFn$_invoke$arity$1(G__41413) : fexpr__41412.call(null,G__41413));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_41918,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_41919,actual_type_41932,f_41926], null),canonical_f_41934], 0));

if(cljs.core.truth_(elem_41918.addEventListener)){
elem_41918.addEventListener(cljs.core.name(actual_type_41932),canonical_f_41934);
} else {
elem_41918.attachEvent(cljs.core.name(actual_type_41932),canonical_f_41934);
}


var G__41935 = seq__41341_41927;
var G__41936 = chunk__41343_41928;
var G__41937 = count__41344_41929;
var G__41938 = (i__41345_41930 + (1));
seq__41341_41927 = G__41935;
chunk__41343_41928 = G__41936;
count__41344_41929 = G__41937;
i__41345_41930 = G__41938;
continue;
} else {
var temp__5735__auto___41939 = cljs.core.seq(seq__41341_41927);
if(temp__5735__auto___41939){
var seq__41341_41940__$1 = temp__5735__auto___41939;
if(cljs.core.chunked_seq_QMARK_(seq__41341_41940__$1)){
var c__4609__auto___41941 = cljs.core.chunk_first(seq__41341_41940__$1);
var G__41942 = cljs.core.chunk_rest(seq__41341_41940__$1);
var G__41943 = c__4609__auto___41941;
var G__41944 = cljs.core.count(c__4609__auto___41941);
var G__41945 = (0);
seq__41341_41927 = G__41942;
chunk__41343_41928 = G__41943;
count__41344_41929 = G__41944;
i__41345_41930 = G__41945;
continue;
} else {
var vec__41414_41946 = cljs.core.first(seq__41341_41940__$1);
var actual_type_41947 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41414_41946,(0),null);
var factory_41948 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41414_41946,(1),null);
var canonical_f_41949 = (function (){var G__41418 = (factory_41948.cljs$core$IFn$_invoke$arity$1 ? factory_41948.cljs$core$IFn$_invoke$arity$1(f_41926) : factory_41948.call(null,f_41926));
var fexpr__41417 = (cljs.core.truth_(selector_41919)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_41918,selector_41919):cljs.core.identity);
return (fexpr__41417.cljs$core$IFn$_invoke$arity$1 ? fexpr__41417.cljs$core$IFn$_invoke$arity$1(G__41418) : fexpr__41417.call(null,G__41418));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_41918,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_41919,actual_type_41947,f_41926], null),canonical_f_41949], 0));

if(cljs.core.truth_(elem_41918.addEventListener)){
elem_41918.addEventListener(cljs.core.name(actual_type_41947),canonical_f_41949);
} else {
elem_41918.attachEvent(cljs.core.name(actual_type_41947),canonical_f_41949);
}


var G__41950 = cljs.core.next(seq__41341_41940__$1);
var G__41951 = null;
var G__41952 = (0);
var G__41953 = (0);
seq__41341_41927 = G__41950;
chunk__41343_41928 = G__41951;
count__41344_41929 = G__41952;
i__41345_41930 = G__41953;
continue;
}
} else {
}
}
break;
}

var G__41954 = seq__41331_41920;
var G__41955 = chunk__41338_41921;
var G__41956 = count__41339_41922;
var G__41957 = (i__41340_41923 + (1));
seq__41331_41920 = G__41954;
chunk__41338_41921 = G__41955;
count__41339_41922 = G__41956;
i__41340_41923 = G__41957;
continue;
} else {
var temp__5735__auto___41958 = cljs.core.seq(seq__41331_41920);
if(temp__5735__auto___41958){
var seq__41331_41959__$1 = temp__5735__auto___41958;
if(cljs.core.chunked_seq_QMARK_(seq__41331_41959__$1)){
var c__4609__auto___41960 = cljs.core.chunk_first(seq__41331_41959__$1);
var G__41961 = cljs.core.chunk_rest(seq__41331_41959__$1);
var G__41962 = c__4609__auto___41960;
var G__41963 = cljs.core.count(c__4609__auto___41960);
var G__41964 = (0);
seq__41331_41920 = G__41961;
chunk__41338_41921 = G__41962;
count__41339_41922 = G__41963;
i__41340_41923 = G__41964;
continue;
} else {
var vec__41419_41966 = cljs.core.first(seq__41331_41959__$1);
var orig_type_41967 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41419_41966,(0),null);
var f_41968 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41419_41966,(1),null);
var seq__41332_41969 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_41967,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_41967,cljs.core.identity])));
var chunk__41334_41970 = null;
var count__41335_41971 = (0);
var i__41336_41972 = (0);
while(true){
if((i__41336_41972 < count__41335_41971)){
var vec__41432_41974 = chunk__41334_41970.cljs$core$IIndexed$_nth$arity$2(null,i__41336_41972);
var actual_type_41975 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41432_41974,(0),null);
var factory_41976 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41432_41974,(1),null);
var canonical_f_41977 = (function (){var G__41436 = (factory_41976.cljs$core$IFn$_invoke$arity$1 ? factory_41976.cljs$core$IFn$_invoke$arity$1(f_41968) : factory_41976.call(null,f_41968));
var fexpr__41435 = (cljs.core.truth_(selector_41919)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_41918,selector_41919):cljs.core.identity);
return (fexpr__41435.cljs$core$IFn$_invoke$arity$1 ? fexpr__41435.cljs$core$IFn$_invoke$arity$1(G__41436) : fexpr__41435.call(null,G__41436));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_41918,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_41919,actual_type_41975,f_41968], null),canonical_f_41977], 0));

if(cljs.core.truth_(elem_41918.addEventListener)){
elem_41918.addEventListener(cljs.core.name(actual_type_41975),canonical_f_41977);
} else {
elem_41918.attachEvent(cljs.core.name(actual_type_41975),canonical_f_41977);
}


var G__41978 = seq__41332_41969;
var G__41979 = chunk__41334_41970;
var G__41980 = count__41335_41971;
var G__41981 = (i__41336_41972 + (1));
seq__41332_41969 = G__41978;
chunk__41334_41970 = G__41979;
count__41335_41971 = G__41980;
i__41336_41972 = G__41981;
continue;
} else {
var temp__5735__auto___41982__$1 = cljs.core.seq(seq__41332_41969);
if(temp__5735__auto___41982__$1){
var seq__41332_41983__$1 = temp__5735__auto___41982__$1;
if(cljs.core.chunked_seq_QMARK_(seq__41332_41983__$1)){
var c__4609__auto___41984 = cljs.core.chunk_first(seq__41332_41983__$1);
var G__41985 = cljs.core.chunk_rest(seq__41332_41983__$1);
var G__41986 = c__4609__auto___41984;
var G__41987 = cljs.core.count(c__4609__auto___41984);
var G__41988 = (0);
seq__41332_41969 = G__41985;
chunk__41334_41970 = G__41986;
count__41335_41971 = G__41987;
i__41336_41972 = G__41988;
continue;
} else {
var vec__41437_41990 = cljs.core.first(seq__41332_41983__$1);
var actual_type_41991 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41437_41990,(0),null);
var factory_41992 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41437_41990,(1),null);
var canonical_f_41993 = (function (){var G__41441 = (factory_41992.cljs$core$IFn$_invoke$arity$1 ? factory_41992.cljs$core$IFn$_invoke$arity$1(f_41968) : factory_41992.call(null,f_41968));
var fexpr__41440 = (cljs.core.truth_(selector_41919)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_41918,selector_41919):cljs.core.identity);
return (fexpr__41440.cljs$core$IFn$_invoke$arity$1 ? fexpr__41440.cljs$core$IFn$_invoke$arity$1(G__41441) : fexpr__41440.call(null,G__41441));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_41918,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_41919,actual_type_41991,f_41968], null),canonical_f_41993], 0));

if(cljs.core.truth_(elem_41918.addEventListener)){
elem_41918.addEventListener(cljs.core.name(actual_type_41991),canonical_f_41993);
} else {
elem_41918.attachEvent(cljs.core.name(actual_type_41991),canonical_f_41993);
}


var G__41997 = cljs.core.next(seq__41332_41983__$1);
var G__41998 = null;
var G__41999 = (0);
var G__42000 = (0);
seq__41332_41969 = G__41997;
chunk__41334_41970 = G__41998;
count__41335_41971 = G__41999;
i__41336_41972 = G__42000;
continue;
}
} else {
}
}
break;
}

var G__42001 = cljs.core.next(seq__41331_41959__$1);
var G__42002 = null;
var G__42003 = (0);
var G__42004 = (0);
seq__41331_41920 = G__42001;
chunk__41338_41921 = G__42002;
count__41339_41922 = G__42003;
i__41340_41923 = G__42004;
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
(dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq41326){
var G__41327 = cljs.core.first(seq41326);
var seq41326__$1 = cljs.core.next(seq41326);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41327,seq41326__$1);
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
var args__4795__auto__ = [];
var len__4789__auto___42005 = arguments.length;
var i__4790__auto___42007 = (0);
while(true){
if((i__4790__auto___42007 < len__4789__auto___42005)){
args__4795__auto__.push((arguments[i__4790__auto___42007]));

var G__42008 = (i__4790__auto___42007 + (1));
i__4790__auto___42007 = G__42008;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_(cljs.core.count(type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__41447_42013 = dommy.core.elem_and_selector(elem_sel);
var elem_42014 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41447_42013,(0),null);
var selector_42015 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41447_42013,(1),null);
var seq__41450_42016 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__41457_42017 = null;
var count__41458_42018 = (0);
var i__41459_42019 = (0);
while(true){
if((i__41459_42019 < count__41458_42018)){
var vec__41500_42021 = chunk__41457_42017.cljs$core$IIndexed$_nth$arity$2(null,i__41459_42019);
var orig_type_42022 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41500_42021,(0),null);
var f_42023 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41500_42021,(1),null);
var seq__41460_42025 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_42022,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_42022,cljs.core.identity])));
var chunk__41462_42026 = null;
var count__41463_42027 = (0);
var i__41464_42028 = (0);
while(true){
if((i__41464_42028 < count__41463_42027)){
var vec__41512_42029 = chunk__41462_42026.cljs$core$IIndexed$_nth$arity$2(null,i__41464_42028);
var actual_type_42030 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41512_42029,(0),null);
var __42031 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41512_42029,(1),null);
var keys_42032 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_42015,actual_type_42030,f_42023], null);
var canonical_f_42033 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_42014),keys_42032);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_42014,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_42032], 0));

if(cljs.core.truth_(elem_42014.removeEventListener)){
elem_42014.removeEventListener(cljs.core.name(actual_type_42030),canonical_f_42033);
} else {
elem_42014.detachEvent(cljs.core.name(actual_type_42030),canonical_f_42033);
}


var G__42036 = seq__41460_42025;
var G__42037 = chunk__41462_42026;
var G__42038 = count__41463_42027;
var G__42039 = (i__41464_42028 + (1));
seq__41460_42025 = G__42036;
chunk__41462_42026 = G__42037;
count__41463_42027 = G__42038;
i__41464_42028 = G__42039;
continue;
} else {
var temp__5735__auto___42040 = cljs.core.seq(seq__41460_42025);
if(temp__5735__auto___42040){
var seq__41460_42041__$1 = temp__5735__auto___42040;
if(cljs.core.chunked_seq_QMARK_(seq__41460_42041__$1)){
var c__4609__auto___42042 = cljs.core.chunk_first(seq__41460_42041__$1);
var G__42044 = cljs.core.chunk_rest(seq__41460_42041__$1);
var G__42045 = c__4609__auto___42042;
var G__42046 = cljs.core.count(c__4609__auto___42042);
var G__42047 = (0);
seq__41460_42025 = G__42044;
chunk__41462_42026 = G__42045;
count__41463_42027 = G__42046;
i__41464_42028 = G__42047;
continue;
} else {
var vec__41515_42049 = cljs.core.first(seq__41460_42041__$1);
var actual_type_42050 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41515_42049,(0),null);
var __42051 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41515_42049,(1),null);
var keys_42052 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_42015,actual_type_42050,f_42023], null);
var canonical_f_42053 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_42014),keys_42052);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_42014,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_42052], 0));

if(cljs.core.truth_(elem_42014.removeEventListener)){
elem_42014.removeEventListener(cljs.core.name(actual_type_42050),canonical_f_42053);
} else {
elem_42014.detachEvent(cljs.core.name(actual_type_42050),canonical_f_42053);
}


var G__42054 = cljs.core.next(seq__41460_42041__$1);
var G__42055 = null;
var G__42056 = (0);
var G__42057 = (0);
seq__41460_42025 = G__42054;
chunk__41462_42026 = G__42055;
count__41463_42027 = G__42056;
i__41464_42028 = G__42057;
continue;
}
} else {
}
}
break;
}

var G__42061 = seq__41450_42016;
var G__42062 = chunk__41457_42017;
var G__42063 = count__41458_42018;
var G__42064 = (i__41459_42019 + (1));
seq__41450_42016 = G__42061;
chunk__41457_42017 = G__42062;
count__41458_42018 = G__42063;
i__41459_42019 = G__42064;
continue;
} else {
var temp__5735__auto___42067 = cljs.core.seq(seq__41450_42016);
if(temp__5735__auto___42067){
var seq__41450_42068__$1 = temp__5735__auto___42067;
if(cljs.core.chunked_seq_QMARK_(seq__41450_42068__$1)){
var c__4609__auto___42069 = cljs.core.chunk_first(seq__41450_42068__$1);
var G__42070 = cljs.core.chunk_rest(seq__41450_42068__$1);
var G__42071 = c__4609__auto___42069;
var G__42072 = cljs.core.count(c__4609__auto___42069);
var G__42073 = (0);
seq__41450_42016 = G__42070;
chunk__41457_42017 = G__42071;
count__41458_42018 = G__42072;
i__41459_42019 = G__42073;
continue;
} else {
var vec__41522_42074 = cljs.core.first(seq__41450_42068__$1);
var orig_type_42075 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41522_42074,(0),null);
var f_42076 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41522_42074,(1),null);
var seq__41451_42077 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_42075,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_42075,cljs.core.identity])));
var chunk__41453_42078 = null;
var count__41454_42079 = (0);
var i__41455_42080 = (0);
while(true){
if((i__41455_42080 < count__41454_42079)){
var vec__41531_42086 = chunk__41453_42078.cljs$core$IIndexed$_nth$arity$2(null,i__41455_42080);
var actual_type_42087 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41531_42086,(0),null);
var __42088 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41531_42086,(1),null);
var keys_42089 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_42015,actual_type_42087,f_42076], null);
var canonical_f_42090 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_42014),keys_42089);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_42014,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_42089], 0));

if(cljs.core.truth_(elem_42014.removeEventListener)){
elem_42014.removeEventListener(cljs.core.name(actual_type_42087),canonical_f_42090);
} else {
elem_42014.detachEvent(cljs.core.name(actual_type_42087),canonical_f_42090);
}


var G__42091 = seq__41451_42077;
var G__42092 = chunk__41453_42078;
var G__42093 = count__41454_42079;
var G__42094 = (i__41455_42080 + (1));
seq__41451_42077 = G__42091;
chunk__41453_42078 = G__42092;
count__41454_42079 = G__42093;
i__41455_42080 = G__42094;
continue;
} else {
var temp__5735__auto___42095__$1 = cljs.core.seq(seq__41451_42077);
if(temp__5735__auto___42095__$1){
var seq__41451_42096__$1 = temp__5735__auto___42095__$1;
if(cljs.core.chunked_seq_QMARK_(seq__41451_42096__$1)){
var c__4609__auto___42097 = cljs.core.chunk_first(seq__41451_42096__$1);
var G__42098 = cljs.core.chunk_rest(seq__41451_42096__$1);
var G__42099 = c__4609__auto___42097;
var G__42100 = cljs.core.count(c__4609__auto___42097);
var G__42101 = (0);
seq__41451_42077 = G__42098;
chunk__41453_42078 = G__42099;
count__41454_42079 = G__42100;
i__41455_42080 = G__42101;
continue;
} else {
var vec__41534_42102 = cljs.core.first(seq__41451_42096__$1);
var actual_type_42103 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41534_42102,(0),null);
var __42104 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41534_42102,(1),null);
var keys_42105 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_42015,actual_type_42103,f_42076], null);
var canonical_f_42106 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_42014),keys_42105);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_42014,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_42105], 0));

if(cljs.core.truth_(elem_42014.removeEventListener)){
elem_42014.removeEventListener(cljs.core.name(actual_type_42103),canonical_f_42106);
} else {
elem_42014.detachEvent(cljs.core.name(actual_type_42103),canonical_f_42106);
}


var G__42107 = cljs.core.next(seq__41451_42096__$1);
var G__42108 = null;
var G__42109 = (0);
var G__42110 = (0);
seq__41451_42077 = G__42107;
chunk__41453_42078 = G__42108;
count__41454_42079 = G__42109;
i__41455_42080 = G__42110;
continue;
}
} else {
}
}
break;
}

var G__42111 = cljs.core.next(seq__41450_42068__$1);
var G__42112 = null;
var G__42113 = (0);
var G__42114 = (0);
seq__41450_42016 = G__42111;
chunk__41457_42017 = G__42112;
count__41458_42018 = G__42113;
i__41459_42019 = G__42114;
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
(dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq41445){
var G__41446 = cljs.core.first(seq41445);
var seq41445__$1 = cljs.core.next(seq41445);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41446,seq41445__$1);
}));

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___42115 = arguments.length;
var i__4790__auto___42116 = (0);
while(true){
if((i__4790__auto___42116 < len__4789__auto___42115)){
args__4795__auto__.push((arguments[i__4790__auto___42116]));

var G__42117 = (i__4790__auto___42116 + (1));
i__4790__auto___42116 = G__42117;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_(cljs.core.count(type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__41539_42118 = dommy.core.elem_and_selector(elem_sel);
var elem_42119 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41539_42118,(0),null);
var selector_42120 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41539_42118,(1),null);
var seq__41542_42121 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__41543_42122 = null;
var count__41544_42123 = (0);
var i__41545_42124 = (0);
while(true){
if((i__41545_42124 < count__41544_42123)){
var vec__41555_42125 = chunk__41543_42122.cljs$core$IIndexed$_nth$arity$2(null,i__41545_42124);
var type_42126 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41555_42125,(0),null);
var f_42127 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41555_42125,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_42126,((function (seq__41542_42121,chunk__41543_42122,count__41544_42123,i__41545_42124,vec__41555_42125,type_42126,f_42127,vec__41539_42118,elem_42119,selector_42120){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_42126,dommy$core$this_fn], 0));

return (f_42127.cljs$core$IFn$_invoke$arity$1 ? f_42127.cljs$core$IFn$_invoke$arity$1(e) : f_42127.call(null,e));
});})(seq__41542_42121,chunk__41543_42122,count__41544_42123,i__41545_42124,vec__41555_42125,type_42126,f_42127,vec__41539_42118,elem_42119,selector_42120))
], 0));


var G__42128 = seq__41542_42121;
var G__42129 = chunk__41543_42122;
var G__42130 = count__41544_42123;
var G__42131 = (i__41545_42124 + (1));
seq__41542_42121 = G__42128;
chunk__41543_42122 = G__42129;
count__41544_42123 = G__42130;
i__41545_42124 = G__42131;
continue;
} else {
var temp__5735__auto___42132 = cljs.core.seq(seq__41542_42121);
if(temp__5735__auto___42132){
var seq__41542_42133__$1 = temp__5735__auto___42132;
if(cljs.core.chunked_seq_QMARK_(seq__41542_42133__$1)){
var c__4609__auto___42134 = cljs.core.chunk_first(seq__41542_42133__$1);
var G__42135 = cljs.core.chunk_rest(seq__41542_42133__$1);
var G__42136 = c__4609__auto___42134;
var G__42137 = cljs.core.count(c__4609__auto___42134);
var G__42138 = (0);
seq__41542_42121 = G__42135;
chunk__41543_42122 = G__42136;
count__41544_42123 = G__42137;
i__41545_42124 = G__42138;
continue;
} else {
var vec__41558_42139 = cljs.core.first(seq__41542_42133__$1);
var type_42140 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41558_42139,(0),null);
var f_42141 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41558_42139,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_42140,((function (seq__41542_42121,chunk__41543_42122,count__41544_42123,i__41545_42124,vec__41558_42139,type_42140,f_42141,seq__41542_42133__$1,temp__5735__auto___42132,vec__41539_42118,elem_42119,selector_42120){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_42140,dommy$core$this_fn], 0));

return (f_42141.cljs$core$IFn$_invoke$arity$1 ? f_42141.cljs$core$IFn$_invoke$arity$1(e) : f_42141.call(null,e));
});})(seq__41542_42121,chunk__41543_42122,count__41544_42123,i__41545_42124,vec__41558_42139,type_42140,f_42141,seq__41542_42133__$1,temp__5735__auto___42132,vec__41539_42118,elem_42119,selector_42120))
], 0));


var G__42142 = cljs.core.next(seq__41542_42133__$1);
var G__42143 = null;
var G__42144 = (0);
var G__42145 = (0);
seq__41542_42121 = G__42142;
chunk__41543_42122 = G__42143;
count__41544_42123 = G__42144;
i__41545_42124 = G__42145;
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
(dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq41537){
var G__41538 = cljs.core.first(seq41537);
var seq41537__$1 = cljs.core.next(seq41537);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41538,seq41537__$1);
}));


//# sourceMappingURL=dommy.core.js.map
