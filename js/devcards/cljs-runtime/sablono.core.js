goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('goog.dom');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__48157__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__47971 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var seq__47972 = cljs.core.seq(vec__47971);
var first__47973 = cljs.core.first(seq__47972);
var seq__47972__$1 = cljs.core.next(seq__47972);
var tag = first__47973;
var body = seq__47972__$1;
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(body),cljs.core.first(args)], 0))], null),cljs.core.rest(body));
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first(args)], null),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__48157 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48158__i = 0, G__48158__a = new Array(arguments.length -  0);
while (G__48158__i < G__48158__a.length) {G__48158__a[G__48158__i] = arguments[G__48158__i + 0]; ++G__48158__i;}
  args = new cljs.core.IndexedSeq(G__48158__a,0,null);
} 
return G__48157__delegate.call(this,args);};
G__48157.cljs$lang$maxFixedArity = 0;
G__48157.cljs$lang$applyTo = (function (arglist__48159){
var args = cljs.core.seq(arglist__48159);
return G__48157__delegate(args);
});
G__48157.cljs$core$IFn$_invoke$arity$variadic = G__48157__delegate;
return G__48157;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4582__auto__ = (function sablono$core$update_arglists_$_iter__47978(s__47979){
return (new cljs.core.LazySeq(null,(function (){
var s__47979__$1 = s__47979;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__47979__$1);
if(temp__5735__auto__){
var s__47979__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__47979__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__47979__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__47981 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__47980 = (0);
while(true){
if((i__47980 < size__4581__auto__)){
var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__47980);
cljs.core.chunk_append(b__47981,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__48160 = (i__47980 + (1));
i__47980 = G__48160;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47981),sablono$core$update_arglists_$_iter__47978(cljs.core.chunk_rest(s__47979__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47981),null);
}
} else {
var args = cljs.core.first(s__47979__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__47978(cljs.core.rest(s__47979__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__4795__auto__ = [];
var len__4789__auto___48161 = arguments.length;
var i__4790__auto___48162 = (0);
while(true){
if((i__4790__auto___48162 < len__4789__auto___48161)){
args__4795__auto__.push((arguments[i__4790__auto___48162]));

var G__48163 = (i__4790__auto___48162 + (1));
i__4790__auto___48162 = G__48163;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4582__auto__ = (function sablono$core$iter__48001(s__48002){
return (new cljs.core.LazySeq(null,(function (){
var s__48002__$1 = s__48002;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__48002__$1);
if(temp__5735__auto__){
var s__48002__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__48002__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__48002__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__48004 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__48003 = (0);
while(true){
if((i__48003 < size__4581__auto__)){
var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__48003);
cljs.core.chunk_append(b__48004,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__48164 = (i__48003 + (1));
i__48003 = G__48164;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48004),sablono$core$iter__48001(cljs.core.chunk_rest(s__48002__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48004),null);
}
} else {
var style = cljs.core.first(s__48002__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__48001(cljs.core.rest(s__48002__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(styles);
}));

(sablono.core.include_css.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sablono.core.include_css.cljs$lang$applyTo = (function (seq47987){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq47987));
}));

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
var G__48012 = goog.dom.getDocument().body;
var G__48013 = (function (){var G__48016 = "script";
var G__48017 = ({"src": src});
return goog.dom.createDom(G__48016,G__48017);
})();
return goog.dom.appendChild(G__48012,G__48013);
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js("http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to48021 = (function sablono$core$link_to48021(var_args){
var args__4795__auto__ = [];
var len__4789__auto___48165 = arguments.length;
var i__4790__auto___48166 = (0);
while(true){
if((i__4790__auto___48166 < len__4789__auto___48165)){
args__4795__auto__.push((arguments[i__4790__auto___48166]));

var G__48167 = (i__4790__auto___48166 + (1));
i__4790__auto___48166 = G__48167;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to48021.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sablono.core.link_to48021.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([url], 0))], null),content], null);
}));

(sablono.core.link_to48021.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.link_to48021.cljs$lang$applyTo = (function (seq48024){
var G__48025 = cljs.core.first(seq48024);
var seq48024__$1 = cljs.core.next(seq48024);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48025,seq48024__$1);
}));


sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to48021);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to48031 = (function sablono$core$mail_to48031(var_args){
var args__4795__auto__ = [];
var len__4789__auto___48168 = arguments.length;
var i__4790__auto___48169 = (0);
while(true){
if((i__4790__auto___48169 < len__4789__auto___48168)){
args__4795__auto__.push((arguments[i__4790__auto___48169]));

var G__48170 = (i__4790__auto___48169 + (1));
i__4790__auto___48169 = G__48170;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to48031.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sablono.core.mail_to48031.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__48034){
var vec__48035 = p__48034;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48035,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__4185__auto__ = content;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return e_mail;
}
})()], null);
}));

(sablono.core.mail_to48031.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.mail_to48031.cljs$lang$applyTo = (function (seq48032){
var G__48033 = cljs.core.first(seq48032);
var seq48032__$1 = cljs.core.next(seq48032);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48033,seq48032__$1);
}));


sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to48031);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list48044 = (function sablono$core$unordered_list48044(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4582__auto__ = (function sablono$core$unordered_list48044_$_iter__48045(s__48046){
return (new cljs.core.LazySeq(null,(function (){
var s__48046__$1 = s__48046;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__48046__$1);
if(temp__5735__auto__){
var s__48046__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__48046__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__48046__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__48048 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__48047 = (0);
while(true){
if((i__48047 < size__4581__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__48047);
cljs.core.chunk_append(b__48048,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__48173 = (i__48047 + (1));
i__48047 = G__48173;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48048),sablono$core$unordered_list48044_$_iter__48045(cljs.core.chunk_rest(s__48046__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48048),null);
}
} else {
var x = cljs.core.first(s__48046__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list48044_$_iter__48045(cljs.core.rest(s__48046__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list48044);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list48055 = (function sablono$core$ordered_list48055(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4582__auto__ = (function sablono$core$ordered_list48055_$_iter__48056(s__48057){
return (new cljs.core.LazySeq(null,(function (){
var s__48057__$1 = s__48057;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__48057__$1);
if(temp__5735__auto__){
var s__48057__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__48057__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__48057__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__48059 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__48058 = (0);
while(true){
if((i__48058 < size__4581__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__48058);
cljs.core.chunk_append(b__48059,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__48175 = (i__48058 + (1));
i__48058 = G__48175;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48059),sablono$core$ordered_list48055_$_iter__48056(cljs.core.chunk_rest(s__48057__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48059),null);
}
} else {
var x = cljs.core.first(s__48057__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list48055_$_iter__48056(cljs.core.rest(s__48057__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list48055);
/**
 * Create an image element.
 */
sablono.core.image48060 = (function sablono$core$image48060(var_args){
var G__48062 = arguments.length;
switch (G__48062) {
case 1:
return sablono.core.image48060.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image48060.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.image48060.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0))], null)], null);
}));

(sablono.core.image48060.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0)),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
}));

(sablono.core.image48060.cljs$lang$maxFixedArity = 2);


sablono.core.image = sablono.core.wrap_attrs(sablono.core.image48060);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__48063_SHARP_,p2__48064_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__48063_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__48064_SHARP_),"]"].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__48065_SHARP_,p2__48066_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__48065_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__48066_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__48068 = arguments.length;
switch (G__48068) {
case 2:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (type,name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4185__auto__ = value;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.input_field_STAR_.cljs$lang$maxFixedArity = 3);

/**
 * Creates a color input field.
 */
sablono.core.color_field48069 = (function sablono$core$color_field48069(var_args){
var G__48071 = arguments.length;
switch (G__48071) {
case 1:
return sablono.core.color_field48069.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field48069.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.color_field48069.cljs$core$IFn$_invoke$arity$1 = (function (name__47961__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__47961__auto__);
}));

(sablono.core.color_field48069.cljs$core$IFn$_invoke$arity$2 = (function (name__47961__auto__,value__47962__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__47961__auto__,value__47962__auto__);
}));

(sablono.core.color_field48069.cljs$lang$maxFixedArity = 2);


sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field48069);

/**
 * Creates a date input field.
 */
sablono.core.date_field48072 = (function sablono$core$date_field48072(var_args){
var G__48074 = arguments.length;
switch (G__48074) {
case 1:
return sablono.core.date_field48072.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field48072.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.date_field48072.cljs$core$IFn$_invoke$arity$1 = (function (name__47961__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__47961__auto__);
}));

(sablono.core.date_field48072.cljs$core$IFn$_invoke$arity$2 = (function (name__47961__auto__,value__47962__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__47961__auto__,value__47962__auto__);
}));

(sablono.core.date_field48072.cljs$lang$maxFixedArity = 2);


sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field48072);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field48075 = (function sablono$core$datetime_field48075(var_args){
var G__48077 = arguments.length;
switch (G__48077) {
case 1:
return sablono.core.datetime_field48075.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field48075.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_field48075.cljs$core$IFn$_invoke$arity$1 = (function (name__47961__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__47961__auto__);
}));

(sablono.core.datetime_field48075.cljs$core$IFn$_invoke$arity$2 = (function (name__47961__auto__,value__47962__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__47961__auto__,value__47962__auto__);
}));

(sablono.core.datetime_field48075.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field48075);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field48078 = (function sablono$core$datetime_local_field48078(var_args){
var G__48080 = arguments.length;
switch (G__48080) {
case 1:
return sablono.core.datetime_local_field48078.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field48078.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_local_field48078.cljs$core$IFn$_invoke$arity$1 = (function (name__47961__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__47961__auto__);
}));

(sablono.core.datetime_local_field48078.cljs$core$IFn$_invoke$arity$2 = (function (name__47961__auto__,value__47962__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__47961__auto__,value__47962__auto__);
}));

(sablono.core.datetime_local_field48078.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field48078);

/**
 * Creates a email input field.
 */
sablono.core.email_field48081 = (function sablono$core$email_field48081(var_args){
var G__48083 = arguments.length;
switch (G__48083) {
case 1:
return sablono.core.email_field48081.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field48081.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.email_field48081.cljs$core$IFn$_invoke$arity$1 = (function (name__47961__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__47961__auto__);
}));

(sablono.core.email_field48081.cljs$core$IFn$_invoke$arity$2 = (function (name__47961__auto__,value__47962__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__47961__auto__,value__47962__auto__);
}));

(sablono.core.email_field48081.cljs$lang$maxFixedArity = 2);


sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field48081);

/**
 * Creates a file input field.
 */
sablono.core.file_field48084 = (function sablono$core$file_field48084(var_args){
var G__48086 = arguments.length;
switch (G__48086) {
case 1:
return sablono.core.file_field48084.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field48084.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.file_field48084.cljs$core$IFn$_invoke$arity$1 = (function (name__47961__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__47961__auto__);
}));

(sablono.core.file_field48084.cljs$core$IFn$_invoke$arity$2 = (function (name__47961__auto__,value__47962__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__47961__auto__,value__47962__auto__);
}));

(sablono.core.file_field48084.cljs$lang$maxFixedArity = 2);


sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field48084);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field48087 = (function sablono$core$hidden_field48087(var_args){
var G__48089 = arguments.length;
switch (G__48089) {
case 1:
return sablono.core.hidden_field48087.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field48087.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.hidden_field48087.cljs$core$IFn$_invoke$arity$1 = (function (name__47961__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__47961__auto__);
}));

(sablono.core.hidden_field48087.cljs$core$IFn$_invoke$arity$2 = (function (name__47961__auto__,value__47962__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__47961__auto__,value__47962__auto__);
}));

(sablono.core.hidden_field48087.cljs$lang$maxFixedArity = 2);


sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field48087);

/**
 * Creates a month input field.
 */
sablono.core.month_field48090 = (function sablono$core$month_field48090(var_args){
var G__48092 = arguments.length;
switch (G__48092) {
case 1:
return sablono.core.month_field48090.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field48090.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.month_field48090.cljs$core$IFn$_invoke$arity$1 = (function (name__47961__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__47961__auto__);
}));

(sablono.core.month_field48090.cljs$core$IFn$_invoke$arity$2 = (function (name__47961__auto__,value__47962__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__47961__auto__,value__47962__auto__);
}));

(sablono.core.month_field48090.cljs$lang$maxFixedArity = 2);


sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field48090);

/**
 * Creates a number input field.
 */
sablono.core.number_field48093 = (function sablono$core$number_field48093(var_args){
var G__48095 = arguments.length;
switch (G__48095) {
case 1:
return sablono.core.number_field48093.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field48093.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.number_field48093.cljs$core$IFn$_invoke$arity$1 = (function (name__47961__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__47961__auto__);
}));

(sablono.core.number_field48093.cljs$core$IFn$_invoke$arity$2 = (function (name__47961__auto__,value__47962__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__47961__auto__,value__47962__auto__);
}));

(sablono.core.number_field48093.cljs$lang$maxFixedArity = 2);


sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field48093);

/**
 * Creates a password input field.
 */
sablono.core.password_field48096 = (function sablono$core$password_field48096(var_args){
var G__48098 = arguments.length;
switch (G__48098) {
case 1:
return sablono.core.password_field48096.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field48096.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.password_field48096.cljs$core$IFn$_invoke$arity$1 = (function (name__47961__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__47961__auto__);
}));

(sablono.core.password_field48096.cljs$core$IFn$_invoke$arity$2 = (function (name__47961__auto__,value__47962__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__47961__auto__,value__47962__auto__);
}));

(sablono.core.password_field48096.cljs$lang$maxFixedArity = 2);


sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field48096);

/**
 * Creates a range input field.
 */
sablono.core.range_field48099 = (function sablono$core$range_field48099(var_args){
var G__48101 = arguments.length;
switch (G__48101) {
case 1:
return sablono.core.range_field48099.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field48099.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.range_field48099.cljs$core$IFn$_invoke$arity$1 = (function (name__47961__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__47961__auto__);
}));

(sablono.core.range_field48099.cljs$core$IFn$_invoke$arity$2 = (function (name__47961__auto__,value__47962__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__47961__auto__,value__47962__auto__);
}));

(sablono.core.range_field48099.cljs$lang$maxFixedArity = 2);


sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field48099);

/**
 * Creates a search input field.
 */
sablono.core.search_field48102 = (function sablono$core$search_field48102(var_args){
var G__48104 = arguments.length;
switch (G__48104) {
case 1:
return sablono.core.search_field48102.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field48102.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.search_field48102.cljs$core$IFn$_invoke$arity$1 = (function (name__47961__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__47961__auto__);
}));

(sablono.core.search_field48102.cljs$core$IFn$_invoke$arity$2 = (function (name__47961__auto__,value__47962__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__47961__auto__,value__47962__auto__);
}));

(sablono.core.search_field48102.cljs$lang$maxFixedArity = 2);


sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field48102);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field48105 = (function sablono$core$tel_field48105(var_args){
var G__48107 = arguments.length;
switch (G__48107) {
case 1:
return sablono.core.tel_field48105.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field48105.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.tel_field48105.cljs$core$IFn$_invoke$arity$1 = (function (name__47961__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__47961__auto__);
}));

(sablono.core.tel_field48105.cljs$core$IFn$_invoke$arity$2 = (function (name__47961__auto__,value__47962__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__47961__auto__,value__47962__auto__);
}));

(sablono.core.tel_field48105.cljs$lang$maxFixedArity = 2);


sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field48105);

/**
 * Creates a text input field.
 */
sablono.core.text_field48108 = (function sablono$core$text_field48108(var_args){
var G__48110 = arguments.length;
switch (G__48110) {
case 1:
return sablono.core.text_field48108.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field48108.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_field48108.cljs$core$IFn$_invoke$arity$1 = (function (name__47961__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__47961__auto__);
}));

(sablono.core.text_field48108.cljs$core$IFn$_invoke$arity$2 = (function (name__47961__auto__,value__47962__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__47961__auto__,value__47962__auto__);
}));

(sablono.core.text_field48108.cljs$lang$maxFixedArity = 2);


sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field48108);

/**
 * Creates a time input field.
 */
sablono.core.time_field48111 = (function sablono$core$time_field48111(var_args){
var G__48113 = arguments.length;
switch (G__48113) {
case 1:
return sablono.core.time_field48111.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field48111.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.time_field48111.cljs$core$IFn$_invoke$arity$1 = (function (name__47961__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__47961__auto__);
}));

(sablono.core.time_field48111.cljs$core$IFn$_invoke$arity$2 = (function (name__47961__auto__,value__47962__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__47961__auto__,value__47962__auto__);
}));

(sablono.core.time_field48111.cljs$lang$maxFixedArity = 2);


sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field48111);

/**
 * Creates a url input field.
 */
sablono.core.url_field48114 = (function sablono$core$url_field48114(var_args){
var G__48116 = arguments.length;
switch (G__48116) {
case 1:
return sablono.core.url_field48114.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field48114.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.url_field48114.cljs$core$IFn$_invoke$arity$1 = (function (name__47961__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__47961__auto__);
}));

(sablono.core.url_field48114.cljs$core$IFn$_invoke$arity$2 = (function (name__47961__auto__,value__47962__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__47961__auto__,value__47962__auto__);
}));

(sablono.core.url_field48114.cljs$lang$maxFixedArity = 2);


sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field48114);

/**
 * Creates a week input field.
 */
sablono.core.week_field48117 = (function sablono$core$week_field48117(var_args){
var G__48119 = arguments.length;
switch (G__48119) {
case 1:
return sablono.core.week_field48117.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field48117.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.week_field48117.cljs$core$IFn$_invoke$arity$1 = (function (name__47961__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__47961__auto__);
}));

(sablono.core.week_field48117.cljs$core$IFn$_invoke$arity$2 = (function (name__47961__auto__,value__47962__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__47961__auto__,value__47962__auto__);
}));

(sablono.core.week_field48117.cljs$lang$maxFixedArity = 2);


sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field48117);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box48120 = (function sablono$core$check_box48120(var_args){
var G__48122 = arguments.length;
switch (G__48122) {
case 1:
return sablono.core.check_box48120.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box48120.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box48120.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.check_box48120.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.check_box48120.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box48120.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box48120.cljs$lang$maxFixedArity = 3);


sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box48120);
/**
 * Creates a radio button.
 */
sablono.core.radio_button48123 = (function sablono$core$radio_button48123(var_args){
var G__48125 = arguments.length;
switch (G__48125) {
case 1:
return sablono.core.radio_button48123.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button48123.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button48123.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.radio_button48123.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)))], null)], null);
}));

(sablono.core.radio_button48123.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0))),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button48123.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id([sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)),"-",sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button48123.cljs$lang$maxFixedArity = 3);


sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button48123);
sablono.core.hash_key = (function sablono$core$hash_key(x){
var G__48126 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));
return goog.string.hashCode(G__48126);
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options48127 = (function sablono$core$select_options48127(coll){
var iter__4582__auto__ = (function sablono$core$select_options48127_$_iter__48128(s__48129){
return (new cljs.core.LazySeq(null,(function (){
var s__48129__$1 = s__48129;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__48129__$1);
if(temp__5735__auto__){
var s__48129__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__48129__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__48129__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__48131 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__48130 = (0);
while(true){
if((i__48130 < size__4581__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__48130);
cljs.core.chunk_append(b__48131,((cljs.core.sequential_QMARK_(x))?(function (){var vec__48132 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48132,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48132,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48132,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options48127.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options48127.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options48127.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__48203 = (i__48130 + (1));
i__48130 = G__48203;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48131),sablono$core$select_options48127_$_iter__48128(cljs.core.chunk_rest(s__48129__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48131),null);
}
} else {
var x = cljs.core.first(s__48129__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__48135 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48135,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48135,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48135,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options48127.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options48127.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options48127.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options48127_$_iter__48128(cljs.core.rest(s__48129__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(coll);
});

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options48127);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down48138 = (function sablono$core$drop_down48138(var_args){
var G__48140 = arguments.length;
switch (G__48140) {
case 2:
return sablono.core.drop_down48138.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down48138.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.drop_down48138.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down48138.cljs$core$IFn$_invoke$arity$3(name,options,null);
}));

(sablono.core.drop_down48138.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
}));

(sablono.core.drop_down48138.cljs$lang$maxFixedArity = 3);


sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down48138);
/**
 * Creates a text area element.
 */
sablono.core.text_area48141 = (function sablono$core$text_area48141(var_args){
var G__48143 = arguments.length;
switch (G__48143) {
case 1:
return sablono.core.text_area48141.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area48141.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_area48141.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.text_area48141.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4185__auto__ = value;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.text_area48141.cljs$lang$maxFixedArity = 2);


sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area48141);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label48144 = (function sablono$core$label48144(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label48144);
/**
 * Creates a submit button.
 */
sablono.core.submit_button48145 = (function sablono$core$submit_button48145(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button48145);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button48146 = (function sablono$core$reset_button48146(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button48146);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to48147 = (function sablono$core$form_to48147(var_args){
var args__4795__auto__ = [];
var len__4789__auto___48206 = arguments.length;
var i__4790__auto___48207 = (0);
while(true){
if((i__4790__auto___48207 < len__4789__auto___48206)){
args__4795__auto__.push((arguments[i__4790__auto___48207]));

var G__48208 = (i__4790__auto___48207 + (1));
i__4790__auto___48207 = G__48208;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to48147.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sablono.core.form_to48147.cljs$core$IFn$_invoke$arity$variadic = (function (p__48150,body){
var vec__48151 = p__48150;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48151,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48151,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),(function (){var G__48154 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null);
var G__48155 = "_method";
var G__48156 = method_str;
return (sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3(G__48154,G__48155,G__48156) : sablono.core.hidden_field.call(null,G__48154,G__48155,G__48156));
})()], null)),body));
}));

(sablono.core.form_to48147.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.form_to48147.cljs$lang$applyTo = (function (seq48148){
var G__48149 = cljs.core.first(seq48148);
var seq48148__$1 = cljs.core.next(seq48148);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48149,seq48148__$1);
}));


sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to48147);

//# sourceMappingURL=sablono.core.js.map
