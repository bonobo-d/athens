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
var G__47219__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__47039 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var seq__47040 = cljs.core.seq(vec__47039);
var first__47041 = cljs.core.first(seq__47040);
var seq__47040__$1 = cljs.core.next(seq__47040);
var tag = first__47041;
var body = seq__47040__$1;
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(body),cljs.core.first(args)], 0))], null),cljs.core.rest(body));
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first(args)], null),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__47219 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47220__i = 0, G__47220__a = new Array(arguments.length -  0);
while (G__47220__i < G__47220__a.length) {G__47220__a[G__47220__i] = arguments[G__47220__i + 0]; ++G__47220__i;}
  args = new cljs.core.IndexedSeq(G__47220__a,0,null);
} 
return G__47219__delegate.call(this,args);};
G__47219.cljs$lang$maxFixedArity = 0;
G__47219.cljs$lang$applyTo = (function (arglist__47221){
var args = cljs.core.seq(arglist__47221);
return G__47219__delegate(args);
});
G__47219.cljs$core$IFn$_invoke$arity$variadic = G__47219__delegate;
return G__47219;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4529__auto__ = (function sablono$core$update_arglists_$_iter__47045(s__47046){
return (new cljs.core.LazySeq(null,(function (){
var s__47046__$1 = s__47046;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__47046__$1);
if(temp__5735__auto__){
var s__47046__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__47046__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__47046__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__47048 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__47047 = (0);
while(true){
if((i__47047 < size__4528__auto__)){
var args = cljs.core._nth(c__4527__auto__,i__47047);
cljs.core.chunk_append(b__47048,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__47222 = (i__47047 + (1));
i__47047 = G__47222;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47048),sablono$core$update_arglists_$_iter__47045(cljs.core.chunk_rest(s__47046__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47048),null);
}
} else {
var args = cljs.core.first(s__47046__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__47045(cljs.core.rest(s__47046__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__4742__auto__ = [];
var len__4736__auto___47223 = arguments.length;
var i__4737__auto___47224 = (0);
while(true){
if((i__4737__auto___47224 < len__4736__auto___47223)){
args__4742__auto__.push((arguments[i__4737__auto___47224]));

var G__47225 = (i__4737__auto___47224 + (1));
i__4737__auto___47224 = G__47225;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4529__auto__ = (function sablono$core$iter__47057(s__47058){
return (new cljs.core.LazySeq(null,(function (){
var s__47058__$1 = s__47058;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__47058__$1);
if(temp__5735__auto__){
var s__47058__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__47058__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__47058__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__47060 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__47059 = (0);
while(true){
if((i__47059 < size__4528__auto__)){
var style = cljs.core._nth(c__4527__auto__,i__47059);
cljs.core.chunk_append(b__47060,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__47226 = (i__47059 + (1));
i__47059 = G__47226;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47060),sablono$core$iter__47057(cljs.core.chunk_rest(s__47058__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47060),null);
}
} else {
var style = cljs.core.first(s__47058__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__47057(cljs.core.rest(s__47058__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(styles);
}));

(sablono.core.include_css.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sablono.core.include_css.cljs$lang$applyTo = (function (seq47052){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq47052));
}));

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",({"src": src})));
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
sablono.core.link_to47081 = (function sablono$core$link_to47081(var_args){
var args__4742__auto__ = [];
var len__4736__auto___47227 = arguments.length;
var i__4737__auto___47228 = (0);
while(true){
if((i__4737__auto___47228 < len__4736__auto___47227)){
args__4742__auto__.push((arguments[i__4737__auto___47228]));

var G__47229 = (i__4737__auto___47228 + (1));
i__4737__auto___47228 = G__47229;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to47081.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sablono.core.link_to47081.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([url], 0))], null),content], null);
}));

(sablono.core.link_to47081.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.link_to47081.cljs$lang$applyTo = (function (seq47082){
var G__47083 = cljs.core.first(seq47082);
var seq47082__$1 = cljs.core.next(seq47082);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47083,seq47082__$1);
}));


sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to47081);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to47084 = (function sablono$core$mail_to47084(var_args){
var args__4742__auto__ = [];
var len__4736__auto___47230 = arguments.length;
var i__4737__auto___47231 = (0);
while(true){
if((i__4737__auto___47231 < len__4736__auto___47230)){
args__4742__auto__.push((arguments[i__4737__auto___47231]));

var G__47232 = (i__4737__auto___47231 + (1));
i__4737__auto___47231 = G__47232;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to47084.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sablono.core.mail_to47084.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__47088){
var vec__47090 = p__47088;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47090,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__4126__auto__ = content;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return e_mail;
}
})()], null);
}));

(sablono.core.mail_to47084.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.mail_to47084.cljs$lang$applyTo = (function (seq47085){
var G__47086 = cljs.core.first(seq47085);
var seq47085__$1 = cljs.core.next(seq47085);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47086,seq47085__$1);
}));


sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to47084);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list47099 = (function sablono$core$unordered_list47099(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4529__auto__ = (function sablono$core$unordered_list47099_$_iter__47100(s__47101){
return (new cljs.core.LazySeq(null,(function (){
var s__47101__$1 = s__47101;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__47101__$1);
if(temp__5735__auto__){
var s__47101__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__47101__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__47101__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__47103 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__47102 = (0);
while(true){
if((i__47102 < size__4528__auto__)){
var x = cljs.core._nth(c__4527__auto__,i__47102);
cljs.core.chunk_append(b__47103,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__47233 = (i__47102 + (1));
i__47102 = G__47233;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47103),sablono$core$unordered_list47099_$_iter__47100(cljs.core.chunk_rest(s__47101__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47103),null);
}
} else {
var x = cljs.core.first(s__47101__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list47099_$_iter__47100(cljs.core.rest(s__47101__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list47099);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list47109 = (function sablono$core$ordered_list47109(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4529__auto__ = (function sablono$core$ordered_list47109_$_iter__47110(s__47111){
return (new cljs.core.LazySeq(null,(function (){
var s__47111__$1 = s__47111;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__47111__$1);
if(temp__5735__auto__){
var s__47111__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__47111__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__47111__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__47113 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__47112 = (0);
while(true){
if((i__47112 < size__4528__auto__)){
var x = cljs.core._nth(c__4527__auto__,i__47112);
cljs.core.chunk_append(b__47113,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__47234 = (i__47112 + (1));
i__47112 = G__47234;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47113),sablono$core$ordered_list47109_$_iter__47110(cljs.core.chunk_rest(s__47111__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47113),null);
}
} else {
var x = cljs.core.first(s__47111__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list47109_$_iter__47110(cljs.core.rest(s__47111__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list47109);
/**
 * Create an image element.
 */
sablono.core.image47120 = (function sablono$core$image47120(var_args){
var G__47122 = arguments.length;
switch (G__47122) {
case 1:
return sablono.core.image47120.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image47120.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.image47120.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0))], null)], null);
}));

(sablono.core.image47120.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0)),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
}));

(sablono.core.image47120.cljs$lang$maxFixedArity = 2);


sablono.core.image = sablono.core.wrap_attrs(sablono.core.image47120);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__47125_SHARP_,p2__47126_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__47125_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__47126_SHARP_),"]"].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__47131_SHARP_,p2__47132_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__47131_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__47132_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__47134 = arguments.length;
switch (G__47134) {
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4126__auto__ = value;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.input_field_STAR_.cljs$lang$maxFixedArity = 3);

/**
 * Creates a color input field.
 */
sablono.core.color_field47135 = (function sablono$core$color_field47135(var_args){
var G__47137 = arguments.length;
switch (G__47137) {
case 1:
return sablono.core.color_field47135.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field47135.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.color_field47135.cljs$core$IFn$_invoke$arity$1 = (function (name__47031__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__47031__auto__);
}));

(sablono.core.color_field47135.cljs$core$IFn$_invoke$arity$2 = (function (name__47031__auto__,value__47032__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__47031__auto__,value__47032__auto__);
}));

(sablono.core.color_field47135.cljs$lang$maxFixedArity = 2);


sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field47135);

/**
 * Creates a date input field.
 */
sablono.core.date_field47138 = (function sablono$core$date_field47138(var_args){
var G__47140 = arguments.length;
switch (G__47140) {
case 1:
return sablono.core.date_field47138.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field47138.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.date_field47138.cljs$core$IFn$_invoke$arity$1 = (function (name__47031__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__47031__auto__);
}));

(sablono.core.date_field47138.cljs$core$IFn$_invoke$arity$2 = (function (name__47031__auto__,value__47032__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__47031__auto__,value__47032__auto__);
}));

(sablono.core.date_field47138.cljs$lang$maxFixedArity = 2);


sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field47138);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field47141 = (function sablono$core$datetime_field47141(var_args){
var G__47143 = arguments.length;
switch (G__47143) {
case 1:
return sablono.core.datetime_field47141.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field47141.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_field47141.cljs$core$IFn$_invoke$arity$1 = (function (name__47031__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__47031__auto__);
}));

(sablono.core.datetime_field47141.cljs$core$IFn$_invoke$arity$2 = (function (name__47031__auto__,value__47032__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__47031__auto__,value__47032__auto__);
}));

(sablono.core.datetime_field47141.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field47141);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field47144 = (function sablono$core$datetime_local_field47144(var_args){
var G__47146 = arguments.length;
switch (G__47146) {
case 1:
return sablono.core.datetime_local_field47144.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field47144.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_local_field47144.cljs$core$IFn$_invoke$arity$1 = (function (name__47031__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__47031__auto__);
}));

(sablono.core.datetime_local_field47144.cljs$core$IFn$_invoke$arity$2 = (function (name__47031__auto__,value__47032__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__47031__auto__,value__47032__auto__);
}));

(sablono.core.datetime_local_field47144.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field47144);

/**
 * Creates a email input field.
 */
sablono.core.email_field47147 = (function sablono$core$email_field47147(var_args){
var G__47149 = arguments.length;
switch (G__47149) {
case 1:
return sablono.core.email_field47147.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field47147.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.email_field47147.cljs$core$IFn$_invoke$arity$1 = (function (name__47031__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__47031__auto__);
}));

(sablono.core.email_field47147.cljs$core$IFn$_invoke$arity$2 = (function (name__47031__auto__,value__47032__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__47031__auto__,value__47032__auto__);
}));

(sablono.core.email_field47147.cljs$lang$maxFixedArity = 2);


sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field47147);

/**
 * Creates a file input field.
 */
sablono.core.file_field47150 = (function sablono$core$file_field47150(var_args){
var G__47152 = arguments.length;
switch (G__47152) {
case 1:
return sablono.core.file_field47150.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field47150.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.file_field47150.cljs$core$IFn$_invoke$arity$1 = (function (name__47031__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__47031__auto__);
}));

(sablono.core.file_field47150.cljs$core$IFn$_invoke$arity$2 = (function (name__47031__auto__,value__47032__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__47031__auto__,value__47032__auto__);
}));

(sablono.core.file_field47150.cljs$lang$maxFixedArity = 2);


sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field47150);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field47153 = (function sablono$core$hidden_field47153(var_args){
var G__47155 = arguments.length;
switch (G__47155) {
case 1:
return sablono.core.hidden_field47153.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field47153.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.hidden_field47153.cljs$core$IFn$_invoke$arity$1 = (function (name__47031__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__47031__auto__);
}));

(sablono.core.hidden_field47153.cljs$core$IFn$_invoke$arity$2 = (function (name__47031__auto__,value__47032__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__47031__auto__,value__47032__auto__);
}));

(sablono.core.hidden_field47153.cljs$lang$maxFixedArity = 2);


sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field47153);

/**
 * Creates a month input field.
 */
sablono.core.month_field47156 = (function sablono$core$month_field47156(var_args){
var G__47158 = arguments.length;
switch (G__47158) {
case 1:
return sablono.core.month_field47156.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field47156.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.month_field47156.cljs$core$IFn$_invoke$arity$1 = (function (name__47031__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__47031__auto__);
}));

(sablono.core.month_field47156.cljs$core$IFn$_invoke$arity$2 = (function (name__47031__auto__,value__47032__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__47031__auto__,value__47032__auto__);
}));

(sablono.core.month_field47156.cljs$lang$maxFixedArity = 2);


sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field47156);

/**
 * Creates a number input field.
 */
sablono.core.number_field47159 = (function sablono$core$number_field47159(var_args){
var G__47161 = arguments.length;
switch (G__47161) {
case 1:
return sablono.core.number_field47159.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field47159.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.number_field47159.cljs$core$IFn$_invoke$arity$1 = (function (name__47031__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__47031__auto__);
}));

(sablono.core.number_field47159.cljs$core$IFn$_invoke$arity$2 = (function (name__47031__auto__,value__47032__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__47031__auto__,value__47032__auto__);
}));

(sablono.core.number_field47159.cljs$lang$maxFixedArity = 2);


sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field47159);

/**
 * Creates a password input field.
 */
sablono.core.password_field47162 = (function sablono$core$password_field47162(var_args){
var G__47164 = arguments.length;
switch (G__47164) {
case 1:
return sablono.core.password_field47162.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field47162.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.password_field47162.cljs$core$IFn$_invoke$arity$1 = (function (name__47031__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__47031__auto__);
}));

(sablono.core.password_field47162.cljs$core$IFn$_invoke$arity$2 = (function (name__47031__auto__,value__47032__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__47031__auto__,value__47032__auto__);
}));

(sablono.core.password_field47162.cljs$lang$maxFixedArity = 2);


sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field47162);

/**
 * Creates a range input field.
 */
sablono.core.range_field47165 = (function sablono$core$range_field47165(var_args){
var G__47167 = arguments.length;
switch (G__47167) {
case 1:
return sablono.core.range_field47165.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field47165.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.range_field47165.cljs$core$IFn$_invoke$arity$1 = (function (name__47031__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__47031__auto__);
}));

(sablono.core.range_field47165.cljs$core$IFn$_invoke$arity$2 = (function (name__47031__auto__,value__47032__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__47031__auto__,value__47032__auto__);
}));

(sablono.core.range_field47165.cljs$lang$maxFixedArity = 2);


sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field47165);

/**
 * Creates a search input field.
 */
sablono.core.search_field47168 = (function sablono$core$search_field47168(var_args){
var G__47170 = arguments.length;
switch (G__47170) {
case 1:
return sablono.core.search_field47168.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field47168.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.search_field47168.cljs$core$IFn$_invoke$arity$1 = (function (name__47031__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__47031__auto__);
}));

(sablono.core.search_field47168.cljs$core$IFn$_invoke$arity$2 = (function (name__47031__auto__,value__47032__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__47031__auto__,value__47032__auto__);
}));

(sablono.core.search_field47168.cljs$lang$maxFixedArity = 2);


sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field47168);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field47171 = (function sablono$core$tel_field47171(var_args){
var G__47173 = arguments.length;
switch (G__47173) {
case 1:
return sablono.core.tel_field47171.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field47171.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.tel_field47171.cljs$core$IFn$_invoke$arity$1 = (function (name__47031__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__47031__auto__);
}));

(sablono.core.tel_field47171.cljs$core$IFn$_invoke$arity$2 = (function (name__47031__auto__,value__47032__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__47031__auto__,value__47032__auto__);
}));

(sablono.core.tel_field47171.cljs$lang$maxFixedArity = 2);


sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field47171);

/**
 * Creates a text input field.
 */
sablono.core.text_field47174 = (function sablono$core$text_field47174(var_args){
var G__47176 = arguments.length;
switch (G__47176) {
case 1:
return sablono.core.text_field47174.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field47174.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_field47174.cljs$core$IFn$_invoke$arity$1 = (function (name__47031__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__47031__auto__);
}));

(sablono.core.text_field47174.cljs$core$IFn$_invoke$arity$2 = (function (name__47031__auto__,value__47032__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__47031__auto__,value__47032__auto__);
}));

(sablono.core.text_field47174.cljs$lang$maxFixedArity = 2);


sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field47174);

/**
 * Creates a time input field.
 */
sablono.core.time_field47177 = (function sablono$core$time_field47177(var_args){
var G__47179 = arguments.length;
switch (G__47179) {
case 1:
return sablono.core.time_field47177.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field47177.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.time_field47177.cljs$core$IFn$_invoke$arity$1 = (function (name__47031__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__47031__auto__);
}));

(sablono.core.time_field47177.cljs$core$IFn$_invoke$arity$2 = (function (name__47031__auto__,value__47032__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__47031__auto__,value__47032__auto__);
}));

(sablono.core.time_field47177.cljs$lang$maxFixedArity = 2);


sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field47177);

/**
 * Creates a url input field.
 */
sablono.core.url_field47180 = (function sablono$core$url_field47180(var_args){
var G__47182 = arguments.length;
switch (G__47182) {
case 1:
return sablono.core.url_field47180.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field47180.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.url_field47180.cljs$core$IFn$_invoke$arity$1 = (function (name__47031__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__47031__auto__);
}));

(sablono.core.url_field47180.cljs$core$IFn$_invoke$arity$2 = (function (name__47031__auto__,value__47032__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__47031__auto__,value__47032__auto__);
}));

(sablono.core.url_field47180.cljs$lang$maxFixedArity = 2);


sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field47180);

/**
 * Creates a week input field.
 */
sablono.core.week_field47183 = (function sablono$core$week_field47183(var_args){
var G__47185 = arguments.length;
switch (G__47185) {
case 1:
return sablono.core.week_field47183.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field47183.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.week_field47183.cljs$core$IFn$_invoke$arity$1 = (function (name__47031__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__47031__auto__);
}));

(sablono.core.week_field47183.cljs$core$IFn$_invoke$arity$2 = (function (name__47031__auto__,value__47032__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__47031__auto__,value__47032__auto__);
}));

(sablono.core.week_field47183.cljs$lang$maxFixedArity = 2);


sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field47183);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box47186 = (function sablono$core$check_box47186(var_args){
var G__47188 = arguments.length;
switch (G__47188) {
case 1:
return sablono.core.check_box47186.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box47186.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box47186.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.check_box47186.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.check_box47186.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box47186.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box47186.cljs$lang$maxFixedArity = 3);


sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box47186);
/**
 * Creates a radio button.
 */
sablono.core.radio_button47189 = (function sablono$core$radio_button47189(var_args){
var G__47191 = arguments.length;
switch (G__47191) {
case 1:
return sablono.core.radio_button47189.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button47189.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button47189.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.radio_button47189.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)))], null)], null);
}));

(sablono.core.radio_button47189.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0))),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button47189.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id([sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)),"-",sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button47189.cljs$lang$maxFixedArity = 3);


sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button47189);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0)));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options47192 = (function sablono$core$select_options47192(coll){
var iter__4529__auto__ = (function sablono$core$select_options47192_$_iter__47193(s__47194){
return (new cljs.core.LazySeq(null,(function (){
var s__47194__$1 = s__47194;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__47194__$1);
if(temp__5735__auto__){
var s__47194__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__47194__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__47194__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__47196 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__47195 = (0);
while(true){
if((i__47195 < size__4528__auto__)){
var x = cljs.core._nth(c__4527__auto__,i__47195);
cljs.core.chunk_append(b__47196,((cljs.core.sequential_QMARK_(x))?(function (){var vec__47197 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47197,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47197,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47197,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options47192.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options47192.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options47192.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__47265 = (i__47195 + (1));
i__47195 = G__47265;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47196),sablono$core$select_options47192_$_iter__47193(cljs.core.chunk_rest(s__47194__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47196),null);
}
} else {
var x = cljs.core.first(s__47194__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__47200 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47200,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47200,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47200,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options47192.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options47192.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options47192.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options47192_$_iter__47193(cljs.core.rest(s__47194__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(coll);
});

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options47192);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down47203 = (function sablono$core$drop_down47203(var_args){
var G__47205 = arguments.length;
switch (G__47205) {
case 2:
return sablono.core.drop_down47203.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down47203.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.drop_down47203.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down47203.cljs$core$IFn$_invoke$arity$3(name,options,null);
}));

(sablono.core.drop_down47203.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null),sablono.core.select_options(options,selected)], null);
}));

(sablono.core.drop_down47203.cljs$lang$maxFixedArity = 3);


sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down47203);
/**
 * Creates a text area element.
 */
sablono.core.text_area47206 = (function sablono$core$text_area47206(var_args){
var G__47208 = arguments.length;
switch (G__47208) {
case 1:
return sablono.core.text_area47206.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area47206.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_area47206.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.text_area47206.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4126__auto__ = value;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.text_area47206.cljs$lang$maxFixedArity = 2);


sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area47206);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label47209 = (function sablono$core$label47209(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label47209);
/**
 * Creates a submit button.
 */
sablono.core.submit_button47210 = (function sablono$core$submit_button47210(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button47210);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button47211 = (function sablono$core$reset_button47211(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button47211);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to47212 = (function sablono$core$form_to47212(var_args){
var args__4742__auto__ = [];
var len__4736__auto___47268 = arguments.length;
var i__4737__auto___47269 = (0);
while(true){
if((i__4737__auto___47269 < len__4736__auto___47268)){
args__4742__auto__.push((arguments[i__4737__auto___47269]));

var G__47270 = (i__4737__auto___47269 + (1));
i__4737__auto___47269 = G__47270;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to47212.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sablono.core.form_to47212.cljs$core$IFn$_invoke$arity$variadic = (function (p__47215,body){
var vec__47216 = p__47215;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47216,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47216,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
}));

(sablono.core.form_to47212.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.form_to47212.cljs$lang$applyTo = (function (seq47213){
var G__47214 = cljs.core.first(seq47213);
var seq47213__$1 = cljs.core.next(seq47213);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47214,seq47213__$1);
}));


sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to47212);

//# sourceMappingURL=sablono.core.js.map
