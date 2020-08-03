goog.provide('sci.impl.interpreter');
goog.require('cljs.core');
goog.require('cljs.tools.reader.reader_types');
goog.require('sci.impl.analyzer');
goog.require('sci.impl.fns');
goog.require('sci.impl.interop');
goog.require('sci.impl.macros');
goog.require('sci.impl.max_or_throw');
goog.require('sci.impl.opts');
goog.require('sci.impl.parser');
goog.require('sci.impl.types');
goog.require('sci.impl.utils');
goog.require('sci.impl.vars');

sci.impl.interpreter.macros = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 19, [new cljs.core.Symbol(null,"macroexpand","macroexpand",1509933344,null),"null",new cljs.core.Symbol(null,"try","try",-1273693247,null),"null",new cljs.core.Symbol(null,"lazy-seq","lazy-seq",489632906,null),"null",new cljs.core.Symbol(null,"let","let",358118826,null),"null",new cljs.core.Symbol(null,"fn","fn",465265323,null),"null",new cljs.core.Symbol(null,"do","do",1686842252,null),"null",new cljs.core.Symbol(null,"in-ns","in-ns",-2089468466,null),"null",new cljs.core.Symbol(null,"defn","defn",-126010802,null),"null",new cljs.core.Symbol(null,"if","if",1181717262,null),"null",new cljs.core.Symbol(null,"or","or",1876275696,null),"null",new cljs.core.Symbol(null,"macroexpand-1","macroexpand-1",659241329,null),"null",new cljs.core.Symbol(null,"require","require",1172530194,null),"null",new cljs.core.Symbol(null,"syntax-quote","syntax-quote",407366680,null),"null",new cljs.core.Symbol(null,"set!","set!",250714521,null),"null",new cljs.core.Symbol(null,".",".",1975675962,null),"null",new cljs.core.Symbol(null,"quote","quote",1377916282,null),"null",new cljs.core.Symbol(null,"case","case",-1510733573,null),"null",new cljs.core.Symbol(null,"and","and",668631710,null),"null",new cljs.core.Symbol(null,"def","def",597100991,null),"null"], null), null);
/**
 * The and macro from clojure.core.
 */
sci.impl.interpreter.eval_and = (function sci$impl$interpreter$eval_and(ctx,args){
var args__$1 = cljs.core.seq(args);
var args__$2 = args__$1;
while(true){
if(args__$2){
var x = cljs.core.first(args__$2);
var xs = cljs.core.next(args__$2);
var v = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,x) : sci.impl.interpreter.interpret.call(null,ctx,x));
if(cljs.core.truth_(v)){
if(xs){
var G__60679 = xs;
args__$2 = G__60679;
continue;
} else {
return v;
}
} else {
return v;
}
} else {
return true;
}
break;
}
});
/**
 * The or macro from clojure.core.
 */
sci.impl.interpreter.eval_or = (function sci$impl$interpreter$eval_or(ctx,args){
var args__$1 = cljs.core.seq(args);
var args__$2 = args__$1;
while(true){
if(args__$2){
var x = cljs.core.first(args__$2);
var xs = cljs.core.next(args__$2);
var v = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,x) : sci.impl.interpreter.interpret.call(null,ctx,x));
if(cljs.core.truth_(v)){
return v;
} else {
if(xs){
var G__60680 = xs;
args__$2 = G__60680;
continue;
} else {
return v;
}
}
} else {
return null;
}
break;
}
});
/**
 * The let macro from clojure.core
 */
sci.impl.interpreter.eval_let = (function sci$impl$interpreter$eval_let(var_args){
var args__4795__auto__ = [];
var len__4789__auto___60681 = arguments.length;
var i__4790__auto___60682 = (0);
while(true){
if((i__4790__auto___60682 < len__4789__auto___60681)){
args__4795__auto__.push((arguments[i__4790__auto___60682]));

var G__60683 = (i__4790__auto___60682 + (1));
i__4790__auto___60682 = G__60683;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((2) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((2)),(0),null)):null);
return sci.impl.interpreter.eval_let.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4796__auto__);
});

(sci.impl.interpreter.eval_let.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,let_bindings,exprs){
var ctx__$1 = (function (){var ctx__$1 = ctx;
var let_bindings__$1 = let_bindings;
while(true){
var let_name = cljs.core.first(let_bindings__$1);
var let_bindings__$2 = cljs.core.rest(let_bindings__$1);
var let_val = cljs.core.first(let_bindings__$2);
var rest_let_bindings = cljs.core.next(let_bindings__$2);
var val_tag = (function (){var temp__5735__auto__ = cljs.core.meta(let_val);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(m);
} else {
return null;
}
})();
var let_name__$1 = (cljs.core.truth_(val_tag)?cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(let_name,cljs.core.update,new cljs.core.Keyword(null,"tag","tag",-1290361223),((function (ctx__$1,let_bindings__$1,let_name,let_bindings__$2,let_val,rest_let_bindings,val_tag){
return (function (t){
if(cljs.core.truth_(t)){
return t;
} else {
return val_tag;
}
});})(ctx__$1,let_bindings__$1,let_name,let_bindings__$2,let_val,rest_let_bindings,val_tag))
):let_name);
var v = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx__$1,let_val) : sci.impl.interpreter.interpret.call(null,ctx__$1,let_val));
var ctx__$2 = cljs.core.assoc_in(ctx__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),let_name__$1], null),v);
if(cljs.core.not(rest_let_bindings)){
return ctx__$2;
} else {
var G__60684 = ctx__$2;
var G__60685 = rest_let_bindings;
ctx__$1 = G__60684;
let_bindings__$1 = G__60685;
continue;
}
break;
}
})();
if(cljs.core.truth_(exprs)){
var exprs__$1 = exprs;
while(true){
var e = cljs.core.first(exprs__$1);
var ret = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx__$1,e) : sci.impl.interpreter.interpret.call(null,ctx__$1,e));
var nexprs = cljs.core.next(exprs__$1);
if(nexprs){
var G__60686 = nexprs;
exprs__$1 = G__60686;
continue;
} else {
return ret;
}
break;
}
} else {
return null;
}
}));

(sci.impl.interpreter.eval_let.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.interpreter.eval_let.cljs$lang$applyTo = (function (seq59916){
var G__59921 = cljs.core.first(seq59916);
var seq59916__$1 = cljs.core.next(seq59916);
var G__59922 = cljs.core.first(seq59916__$1);
var seq59916__$2 = cljs.core.next(seq59916__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__59921,G__59922,seq59916__$2);
}));

sci.impl.interpreter.eval_if = (function sci$impl$interpreter$eval_if(ctx,expr){
var cond = cljs.core.first(expr);
var expr__$1 = cljs.core.rest(expr);
var then = cljs.core.first(expr__$1);
var expr__$2 = cljs.core.rest(expr__$1);
var else$ = cljs.core.first(expr__$2);
if(cljs.core.truth_((sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,cond) : sci.impl.interpreter.interpret.call(null,ctx,cond)))){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,then) : sci.impl.interpreter.interpret.call(null,ctx,then));
} else {
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,else$) : sci.impl.interpreter.interpret.call(null,ctx,else$));
}
});
sci.impl.interpreter.eval_def = (function sci$impl$interpreter$eval_def(ctx,p__59923){
var vec__59924 = p__59923;
var _def = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59924,(0),null);
var var_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59924,(1),null);
var _QMARK_docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59924,(2),null);
var _QMARK_init = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59924,(3),null);
var docstring = (cljs.core.truth_(_QMARK_init)?_QMARK_docstring:null);
var init = (cljs.core.truth_(docstring)?_QMARK_init:_QMARK_docstring);
var init__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,init) : sci.impl.interpreter.interpret.call(null,ctx,init));
var m = cljs.core.meta(var_name);
var m__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,m) : sci.impl.interpreter.interpret.call(null,ctx,m));
var cnn = sci.impl.vars.getName(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m__$1));
var assoc_in_env = (function (env){
var the_current_ns = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn], null));
var prev = cljs.core.get.cljs$core$IFn$_invoke$arity$2(the_current_ns,var_name);
var prev__$1 = (((!(sci.impl.vars.var_QMARK_(prev))))?sci.impl.vars.__GT_SciVar(prev,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cnn),cljs.core.str.cljs$core$IFn$_invoke$arity$1(var_name)),cljs.core.meta(prev)):prev);
var v = (cljs.core.truth_((function (){var G__59927 = new cljs.core.Keyword("sci.impl","var.unbound","sci.impl/var.unbound",-1824207647);
var G__59928 = init__$1;
return (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__59927,G__59928) : sci.impl.utils.kw_identical_QMARK_.call(null,G__59927,G__59928));
})())?(function (){var G__59929 = prev__$1;
cljs.core.alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__59929,cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m__$1], 0));

return G__59929;
})():(function (){
sci.impl.vars.bindRoot(prev__$1,init__$1);

cljs.core.alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic(prev__$1,cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m__$1], 0));

return prev__$1;
})()
);
var the_current_ns__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(the_current_ns,var_name,v);
return cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn], null),the_current_ns__$1);
});
var env = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),assoc_in_env);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn,var_name], null));
});
sci.impl.interpreter.resolve_symbol = (function sci$impl$interpreter$resolve_symbol(ctx,sym){
var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var temp__5733__auto__ = cljs.core.find(bindings,sym);
if(cljs.core.truth_(temp__5733__auto__)){
var v = temp__5733__auto__;
return cljs.core.second(v);
} else {
return sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(["Could not resolve symbol: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym),"\nks:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.keys(new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(ctx)))].join(''),sym);
}
});
sci.impl.interpreter.parse_libspec = (function sci$impl$interpreter$parse_libspec(libspec){
if(cljs.core.sequential_QMARK_(libspec)){
var vec__59931 = libspec;
var seq__59932 = cljs.core.seq(vec__59931);
var first__59933 = cljs.core.first(seq__59932);
var seq__59932__$1 = cljs.core.next(seq__59932);
var lib_name = first__59933;
var opts = seq__59932__$1;
var ret = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lib-name","lib-name",1158024282),lib_name], null);
var G__59937 = opts;
var vec__59938 = G__59937;
var seq__59939 = cljs.core.seq(vec__59938);
var first__59940 = cljs.core.first(seq__59939);
var seq__59939__$1 = cljs.core.next(seq__59939);
var opt_name = first__59940;
var first__59940__$1 = cljs.core.first(seq__59939__$1);
var seq__59939__$2 = cljs.core.next(seq__59939__$1);
var fst_opt = first__59940__$1;
var rst_opts = seq__59939__$2;
var ret__$1 = ret;
var G__59937__$1 = G__59937;
while(true){
var ret__$2 = ret__$1;
var vec__59945 = G__59937__$1;
var seq__59946 = cljs.core.seq(vec__59945);
var first__59947 = cljs.core.first(seq__59946);
var seq__59946__$1 = cljs.core.next(seq__59946);
var opt_name__$1 = first__59947;
var first__59947__$1 = cljs.core.first(seq__59946__$1);
var seq__59946__$2 = cljs.core.next(seq__59946__$1);
var fst_opt__$1 = first__59947__$1;
var rst_opts__$1 = seq__59946__$2;
if(cljs.core.not(opt_name__$1)){
return ret__$2;
} else {
var G__59948 = opt_name__$1;
var G__59948__$1 = (((G__59948 instanceof cljs.core.Keyword))?G__59948.fqn:null);
switch (G__59948__$1) {
case "as":
var G__60688 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,new cljs.core.Keyword(null,"as","as",1148689641),fst_opt__$1);
var G__60689 = rst_opts__$1;
ret__$1 = G__60688;
G__59937__$1 = G__60689;
continue;

break;
case "reload":
case "reload-all":
case "verbose":
var G__60690 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,new cljs.core.Keyword(null,"reload","reload",863702807),true);
var G__60691 = cljs.core.cons(fst_opt__$1,rst_opts__$1);
ret__$1 = G__60690;
G__59937__$1 = G__60691;
continue;

break;
case "refer":
case "rename":
case "exclude":
case "only":
var G__60692 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,opt_name__$1,fst_opt__$1);
var G__60693 = rst_opts__$1;
ret__$1 = G__60692;
G__59937__$1 = G__60693;
continue;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__59948__$1)].join('')));

}
}
break;
}
} else {
if((libspec instanceof cljs.core.Symbol)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lib-name","lib-name",1158024282),libspec], null);
} else {
throw (new Error(["Invalid libspec: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(libspec)].join('')));

}
}
});
sci.impl.interpreter.handle_refer_all = (function sci$impl$interpreter$handle_refer_all(the_current_ns,the_loaded_ns,include_sym_QMARK_,rename_sym,only){
var only__$1 = (cljs.core.truth_(only)?cljs.core.set(only):null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ns,p__59953){
var vec__59954 = p__59953;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59954,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59954,(1),null);
if(cljs.core.truth_((((k instanceof cljs.core.Symbol))?(function (){var and__4174__auto__ = (include_sym_QMARK_.cljs$core$IFn$_invoke$arity$1 ? include_sym_QMARK_.cljs$core$IFn$_invoke$arity$1(k) : include_sym_QMARK_.call(null,k));
if(cljs.core.truth_(and__4174__auto__)){
return ((cljs.core.not(only__$1)) || (cljs.core.contains_QMARK_(only__$1,k)));
} else {
return and__4174__auto__;
}
})():false))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ns,(rename_sym.cljs$core$IFn$_invoke$arity$1 ? rename_sym.cljs$core$IFn$_invoke$arity$1(k) : rename_sym.call(null,k)),v);
} else {
return ns;
}
}),the_current_ns,the_loaded_ns);
});
sci.impl.interpreter.handle_require_libspec_env = (function sci$impl$interpreter$handle_require_libspec_env(env,use_QMARK_,current_ns,the_loaded_ns,lib_name,p__59961){
var map__59962 = p__59961;
var map__59962__$1 = (((((!((map__59962 == null))))?(((((map__59962.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59962.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59962):map__59962);
var _parsed_libspec = map__59962__$1;
var as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59962__$1,new cljs.core.Keyword(null,"as","as",1148689641));
var refer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59962__$1,new cljs.core.Keyword(null,"refer","refer",-964295553));
var rename = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59962__$1,new cljs.core.Keyword(null,"rename","rename",1508157613));
var exclude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59962__$1,new cljs.core.Keyword(null,"exclude","exclude",-1230250334));
var only = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59962__$1,new cljs.core.Keyword(null,"only","only",1907811652));
var the_current_ns = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),current_ns], null));
var the_current_ns__$1 = (cljs.core.truth_(as)?cljs.core.assoc_in(the_current_ns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aliases","aliases",1346874714),as], null),lib_name):the_current_ns);
var rename_sym = (cljs.core.truth_(rename)?(function (sym){
var or__4185__auto__ = (rename.cljs$core$IFn$_invoke$arity$1 ? rename.cljs$core$IFn$_invoke$arity$1(sym) : rename.call(null,sym));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return sym;
}
}):cljs.core.identity);
var include_sym_QMARK_ = (cljs.core.truth_(exclude)?(function (){var excludes = cljs.core.set(exclude);
return (function (sym){
return (!(cljs.core.contains_QMARK_(excludes,sym)));
});
})():cljs.core.constantly(true));
var the_current_ns__$2 = (cljs.core.truth_(refer)?(cljs.core.truth_((function (){var or__4185__auto__ = (function (){var G__59969 = new cljs.core.Keyword(null,"all","all",892129742);
var G__59970 = refer;
return (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__59969,G__59970) : sci.impl.utils.kw_identical_QMARK_.call(null,G__59969,G__59970));
})();
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return use_QMARK_;
}
})())?sci.impl.interpreter.handle_refer_all(the_current_ns__$1,the_loaded_ns,include_sym_QMARK_,rename_sym,null):((cljs.core.sequential_QMARK_(refer))?cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ns,sym){
if(cljs.core.truth_((include_sym_QMARK_.cljs$core$IFn$_invoke$arity$1 ? include_sym_QMARK_.cljs$core$IFn$_invoke$arity$1(sym) : include_sym_QMARK_.call(null,sym)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ns,(rename_sym.cljs$core$IFn$_invoke$arity$1 ? rename_sym.cljs$core$IFn$_invoke$arity$1(sym) : rename_sym.call(null,sym)),(function (){var temp__5733__auto__ = cljs.core.find(the_loaded_ns,sym);
if(cljs.core.truth_(temp__5733__auto__)){
var vec__59971 = temp__5733__auto__;
var _k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59971,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59971,(1),null);
return v;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)," does not exist"].join('')));
}
})());
} else {
return ns;
}
}),the_current_ns__$1,refer):(function(){throw (new Error(":refer value must be a sequential collection of symbols"))})()
)):(cljs.core.truth_(use_QMARK_)?sci.impl.interpreter.handle_refer_all(the_current_ns__$1,the_loaded_ns,include_sym_QMARK_,rename_sym,only):the_current_ns__$1
));
var env__$1 = cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),current_ns], null),the_current_ns__$2);
return env__$1;
});
sci.impl.interpreter.handle_require_libspec = (function sci$impl$interpreter$handle_require_libspec(ctx,libspec){
var map__59974 = sci.impl.interpreter.parse_libspec(libspec);
var map__59974__$1 = (((((!((map__59974 == null))))?(((((map__59974.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59974.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59974):map__59974);
var parsed_libspec = map__59974__$1;
var lib_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59974__$1,new cljs.core.Keyword(null,"lib-name","lib-name",1158024282));
var reload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59974__$1,new cljs.core.Keyword(null,"reload","reload",863702807));
var env_STAR_ = new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx);
var env = cljs.core.deref(env_STAR_);
var cnn = sci.impl.vars.current_ns_name();
var namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469));
var use_QMARK_ = new cljs.core.Keyword("sci.impl","use","sci.impl/use",1724565881).cljs$core$IFn$_invoke$arity$1(ctx);
var temp__5733__auto__ = (cljs.core.truth_(reload)?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,lib_name));
if(cljs.core.truth_(temp__5733__auto__)){
var the_loaded_ns = temp__5733__auto__;
return cljs.core.reset_BANG_(env_STAR_,sci.impl.interpreter.handle_require_libspec_env(env,use_QMARK_,cnn,the_loaded_ns,lib_name,parsed_libspec));
} else {
var temp__5733__auto____$1 = new cljs.core.Keyword(null,"load-fn","load-fn",-2121144334).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5733__auto____$1)){
var load_fn = temp__5733__auto____$1;
var temp__5733__auto____$2 = (function (){var G__59984 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),lib_name], null);
return (load_fn.cljs$core$IFn$_invoke$arity$1 ? load_fn.cljs$core$IFn$_invoke$arity$1(G__59984) : load_fn.call(null,G__59984));
})();
if(cljs.core.truth_(temp__5733__auto____$2)){
var map__59989 = temp__5733__auto____$2;
var map__59989__$1 = (((((!((map__59989 == null))))?(((((map__59989.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59989.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59989):map__59989);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59989__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59989__$1,new cljs.core.Keyword(null,"source","source",-433931539));
try{sci.impl.vars.push_thread_bindings(cljs.core.PersistentArrayMap.createAsIfByAssoc([sci.impl.vars.current_ns,cljs.core.deref(sci.impl.vars.current_ns),sci.impl.vars.current_file,file]));

try{var G__59995_60694 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),cljs.core.PersistentArrayMap.EMPTY);
var G__59996_60695 = source;
(sci.impl.interpreter.eval_string_STAR_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.eval_string_STAR_.cljs$core$IFn$_invoke$arity$2(G__59995_60694,G__59996_60695) : sci.impl.interpreter.eval_string_STAR_.call(null,G__59995_60694,G__59996_60695));
}finally {sci.impl.vars.pop_thread_bindings();
}}catch (e59991){if((e59991 instanceof Error)){
var e_60696 = e59991;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(env_STAR_,cljs.core.update,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lib_name], 0));

throw e_60696;
} else {
throw e59991;

}
}
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(env_STAR_,(function (env__$1){
var namespaces__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env__$1,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469));
var the_loaded_ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces__$1,lib_name);
return sci.impl.interpreter.handle_require_libspec_env(env__$1,use_QMARK_,cnn,the_loaded_ns,lib_name,parsed_libspec);
}));
} else {
var or__4185__auto__ = (cljs.core.truth_(reload)?(function (){var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,lib_name);
if(cljs.core.truth_(temp__5735__auto__)){
var the_loaded_ns = temp__5735__auto__;
return cljs.core.reset_BANG_(env_STAR_,sci.impl.interpreter.handle_require_libspec_env(env,use_QMARK_,cnn,the_loaded_ns,lib_name,parsed_libspec));
} else {
return null;
}
})():null);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
throw (new Error(["Could not require ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib_name),"."].join('')));
}
}
} else {
throw (new Error(["Could not require ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib_name),"."].join('')));
}
}
});
sci.impl.interpreter.eval_require = (function sci$impl$interpreter$eval_require(var_args){
var args__4795__auto__ = [];
var len__4789__auto___60697 = arguments.length;
var i__4790__auto___60698 = (0);
while(true){
if((i__4790__auto___60698 < len__4789__auto___60697)){
args__4795__auto__.push((arguments[i__4790__auto___60698]));

var G__60699 = (i__4790__auto___60698 + (1));
i__4790__auto___60698 = G__60699;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sci.impl.interpreter.eval_require.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sci.impl.interpreter.eval_require.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,args){
var libspecs = cljs.core.PersistentVector.EMPTY;
var current_libspec = null;
var args__$1 = args;
while(true){
if(cljs.core.truth_(args__$1)){
var ret = (function (){var G__60005 = ctx;
var G__60006 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60005,G__60006) : sci.impl.interpreter.interpret.call(null,G__60005,G__60006));
})();
if((ret instanceof cljs.core.Symbol)){
var G__60700 = (function (){var G__60007 = libspecs;
if(cljs.core.truth_(current_libspec)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__60007,current_libspec);
} else {
return G__60007;
}
})();
var G__60701 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret], null);
var G__60702 = cljs.core.next(args__$1);
libspecs = G__60700;
current_libspec = G__60701;
args__$1 = G__60702;
continue;
} else {
if((ret instanceof cljs.core.Keyword)){
var G__60703 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(libspecs,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_libspec,ret));
var G__60704 = null;
var G__60705 = cljs.core.next(args__$1);
libspecs = G__60703;
current_libspec = G__60704;
args__$1 = G__60705;
continue;
} else {
var G__60706 = (function (){var G__60008 = libspecs;
if(cljs.core.truth_(current_libspec)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__60008,current_libspec);
} else {
return G__60008;
}
})();
var G__60707 = ret;
var G__60708 = cljs.core.next(args__$1);
libspecs = G__60706;
current_libspec = G__60707;
args__$1 = G__60708;
continue;

}
}
} else {
var libspecs__$1 = (function (){var G__60009 = libspecs;
if(cljs.core.truth_(current_libspec)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__60009,current_libspec);
} else {
return G__60009;
}
})();
return cljs.core.run_BANG_(((function (libspecs,current_libspec,args__$1,libspecs__$1){
return (function (p1__59997_SHARP_){
return sci.impl.interpreter.handle_require_libspec(ctx,p1__59997_SHARP_);
});})(libspecs,current_libspec,args__$1,libspecs__$1))
,libspecs__$1);
}
break;
}
}));

(sci.impl.interpreter.eval_require.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.interpreter.eval_require.cljs$lang$applyTo = (function (seq59998){
var G__59999 = cljs.core.first(seq59998);
var seq59998__$1 = cljs.core.next(seq59998);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__59999,seq59998__$1);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_require_state,sci.impl.interpreter.eval_require);
sci.impl.interpreter.eval_use = (function sci$impl$interpreter$eval_use(var_args){
var args__4795__auto__ = [];
var len__4789__auto___60709 = arguments.length;
var i__4790__auto___60710 = (0);
while(true){
if((i__4790__auto___60710 < len__4789__auto___60709)){
args__4795__auto__.push((arguments[i__4790__auto___60710]));

var G__60711 = (i__4790__auto___60710 + (1));
i__4790__auto___60710 = G__60711;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sci.impl.interpreter.eval_use.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sci.impl.interpreter.eval_use.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_require,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword("sci.impl","use","sci.impl/use",1724565881),true),args);
}));

(sci.impl.interpreter.eval_use.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.interpreter.eval_use.cljs$lang$applyTo = (function (seq60010){
var G__60011 = cljs.core.first(seq60010);
var seq60010__$1 = cljs.core.next(seq60010);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60011,seq60010__$1);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_use_state,sci.impl.interpreter.eval_use);
sci.impl.interpreter.eval_case = (function sci$impl$interpreter$eval_case(ctx,p__60012){
var vec__60013 = p__60012;
var _case = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60013,(0),null);
var map__60016 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60013,(1),null);
var map__60016__$1 = (((((!((map__60016 == null))))?(((((map__60016.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60016.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60016):map__60016);
var case_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60016__$1,new cljs.core.Keyword(null,"case-map","case-map",955082964));
var case_val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60016__$1,new cljs.core.Keyword(null,"case-val","case-val",880926521));
var case_default = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60016__$1,new cljs.core.Keyword(null,"case-default","case-default",1140470708));
var v = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,case_val) : sci.impl.interpreter.interpret.call(null,ctx,case_val));
var temp__5733__auto__ = cljs.core.find(case_map,v);
if(cljs.core.truth_(temp__5733__auto__)){
var vec__60018 = temp__5733__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60018,(0),null);
var found = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60018,(1),null);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,found) : sci.impl.interpreter.interpret.call(null,ctx,found));
} else {
if(cljs.core.vector_QMARK_(case_default)){
var G__60021 = ctx;
var G__60022 = cljs.core.second(case_default);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60021,G__60022) : sci.impl.interpreter.interpret.call(null,G__60021,G__60022));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('')));
}
}
});
sci.impl.interpreter.eval_try = (function sci$impl$interpreter$eval_try(ctx,expr){
var map__60023 = new cljs.core.Keyword("sci.impl","try","sci.impl/try",2142624741).cljs$core$IFn$_invoke$arity$1(expr);
var map__60023__$1 = (((((!((map__60023 == null))))?(((((map__60023.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60023.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60023):map__60023);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60023__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var catches = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60023__$1,new cljs.core.Keyword(null,"catches","catches",-1478797617));
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60023__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
try{var _STAR_in_try_STAR__orig_val__60031 = sci.impl.utils._STAR_in_try_STAR_;
var _STAR_in_try_STAR__temp_val__60032 = true;
(sci.impl.utils._STAR_in_try_STAR_ = _STAR_in_try_STAR__temp_val__60032);

try{return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,body) : sci.impl.interpreter.interpret.call(null,ctx,body));
}finally {(sci.impl.utils._STAR_in_try_STAR_ = _STAR_in_try_STAR__orig_val__60031);
}}catch (e60025){if((e60025 instanceof Error)){
var e = e60025;
var temp__5733__auto__ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,c){
var clazz = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(c);
if((e instanceof clazz)){
return cljs.core.reduced(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sci.impl.interpreter","try-result","sci.impl.interpreter/try-result",1789456125),(function (){var G__60026 = cljs.core.assoc_in(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.Keyword(null,"binding","binding",539932593).cljs$core$IFn$_invoke$arity$1(c)], null),e);
var G__60027 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(c);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60026,G__60027) : sci.impl.interpreter.interpret.call(null,G__60026,G__60027));
})()], null));
} else {
return null;
}
}),null,catches);
if(cljs.core.truth_(temp__5733__auto__)){
var vec__60028 = temp__5733__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60028,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60028,(1),null);
return r;
} else {
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,body);
}
} else {
throw e60025;

}
}finally {(sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,finally$) : sci.impl.interpreter.interpret.call(null,ctx,finally$));
}});
sci.impl.interpreter.eval_throw = (function sci$impl$interpreter$eval_throw(ctx,p__60033){
var vec__60034 = p__60033;
var _throw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60034,(0),null);
var ex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60034,(1),null);
var ex__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,ex) : sci.impl.interpreter.interpret.call(null,ctx,ex));
throw ex__$1;
});
sci.impl.interpreter.eval_static_method_invocation = (function sci$impl$interpreter$eval_static_method_invocation(ctx,expr){
return sci.impl.interop.invoke_static_method(cljs.core.first(expr),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__60037_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__60037_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__60037_SHARP_));
}),cljs.core.rest(expr)));
});
sci.impl.interpreter.eval_constructor_invocation = (function sci$impl$interpreter$eval_constructor_invocation(ctx,p__60039){
var vec__60040 = p__60039;
var _new = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60040,(0),null);
var constructor$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60040,(1),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60040,(2),null);
var args__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__60038_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__60038_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__60038_SHARP_));
}),args);
return sci.impl.interop.invoke_constructor(constructor$,args__$1);
});
sci.impl.interpreter.eval_instance_method_invocation = (function sci$impl$interpreter$eval_instance_method_invocation(p__60045,p__60046){
var map__60047 = p__60045;
var map__60047__$1 = (((((!((map__60047 == null))))?(((((map__60047.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60047.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60047):map__60047);
var ctx = map__60047__$1;
var class__GT_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60047__$1,new cljs.core.Keyword(null,"class->opts","class->opts",2061906477));
var vec__60048 = p__60046;
var _dot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60048,(0),null);
var instance_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60048,(1),null);
var method_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60048,(2),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60048,(3),null);
var instance_meta = cljs.core.meta(instance_expr);
var tag_class = new cljs.core.Keyword(null,"tag-class","tag-class",714967874).cljs$core$IFn$_invoke$arity$1(instance_meta);
var instance_expr_STAR_ = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,instance_expr) : sci.impl.interpreter.interpret.call(null,ctx,instance_expr));
var instance_class = (function (){var or__4185__auto__ = tag_class;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.type(instance_expr_STAR_);
}
})();
var instance_class_name = instance_class.name;
var instance_class_symbol = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(instance_class_name);
var allowed_QMARK_ = (function (){var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(class__GT_opts,new cljs.core.Keyword(null,"allow","allow",-1857325745));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(class__GT_opts,instance_class_symbol);
}
})();
var target_class = (cljs.core.truth_(allowed_QMARK_)?instance_class:(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"public-class","public-class",1127293019).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5735__auto__)){
var f = temp__5735__auto__;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(instance_expr_STAR_) : f.call(null,instance_expr_STAR_));
} else {
return null;
}
})());
if(cljs.core.truth_(target_class)){
} else {
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(["Method ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(method_str)," on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(instance_class)," not allowed!"].join(''),instance_expr);
}

var args__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__60044_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__60044_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__60044_SHARP_));
}),args);
return sci.impl.interop.invoke_instance_method(instance_expr_STAR_,target_class,method_str,args__$1);
});
sci.impl.interpreter.eval_in_ns = (function sci$impl$interpreter$eval_in_ns(ctx,p__60052){
var vec__60053 = p__60052;
var _in_ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60053,(0),null);
var ns_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60053,(1),null);
var ns_sym = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,ns_expr) : sci.impl.interpreter.interpret.call(null,ctx,ns_expr));
sci.impl.utils.set_namespace_BANG_(ctx,ns_sym,null);

return null;
});
sci.impl.interpreter.eval_refer = (function sci$impl$interpreter$eval_refer(ctx,p__60056){
var vec__60057 = p__60056;
var seq__60058 = cljs.core.seq(vec__60057);
var first__60059 = cljs.core.first(seq__60058);
var seq__60058__$1 = cljs.core.next(seq__60058);
var _ = first__60059;
var first__60059__$1 = cljs.core.first(seq__60058__$1);
var seq__60058__$2 = cljs.core.next(seq__60058__$1);
var ns_sym = first__60059__$1;
var exprs = seq__60058__$2;
var ns_sym__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,ns_sym) : sci.impl.interpreter.interpret.call(null,ctx,ns_sym));
var exprs__$1 = exprs;
while(true){
if(exprs__$1){
var vec__60060 = exprs__$1;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60060,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60060,(1),null);
var G__60063_60712 = k;
var G__60063_60713__$1 = (((G__60063_60712 instanceof cljs.core.Keyword))?G__60063_60712.fqn:null);
switch (G__60063_60713__$1) {
case "exclude":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),((function (exprs__$1,G__60063_60712,G__60063_60713__$1,vec__60060,k,v,ns_sym__$1,vec__60057,seq__60058,first__60059,seq__60058__$1,_,first__60059__$1,seq__60058__$2,ns_sym,exprs){
return (function (env){
var cnn = sci.impl.vars.current_ns_name();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn,new cljs.core.Keyword(null,"refer","refer",-964295553),ns_sym__$1,new cljs.core.Keyword(null,"exclude","exclude",-1230250334)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.into,cljs.core.PersistentHashSet.EMPTY),v);
});})(exprs__$1,G__60063_60712,G__60063_60713__$1,vec__60060,k,v,ns_sym__$1,vec__60057,seq__60058,first__60059,seq__60058__$1,_,first__60059__$1,seq__60058__$2,ns_sym,exprs))
);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__60063_60713__$1)].join('')));

}

var G__60715 = cljs.core.nnext(exprs__$1);
exprs__$1 = G__60715;
continue;
} else {
return null;
}
break;
}
});
sci.impl.interpreter.eval_resolve = (function sci$impl$interpreter$eval_resolve(ctx,sym){
var sym__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,sym) : sci.impl.interpreter.interpret.call(null,ctx,sym));
return cljs.core.second(sci.impl.analyzer.lookup(ctx,sym__$1,false));
});
cljs.core.vreset_BANG_(sci.impl.utils.eval_resolve_state,sci.impl.interpreter.eval_resolve);
sci.impl.interpreter.macroexpand_1 = (function sci$impl$interpreter$macroexpand_1(ctx,expr){
var original_expr = expr;
if(cljs.core.seq_QMARK_(expr)){
var op = cljs.core.first(expr);
if((op instanceof cljs.core.Symbol)){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(sci.impl.analyzer.special_syms,op))){
return expr;
} else {
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"for","for",316745208,null),null], null), null),op)){
return sci.impl.analyzer.analyze(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword("sci.impl","macroexpanding","sci.impl/macroexpanding",2113471825),true),expr);
} else {
var f = sci.impl.analyzer.resolve_symbol.cljs$core$IFn$_invoke$arity$3(ctx,op,true);
var f__$1 = (cljs.core.truth_(((sci.impl.vars.var_QMARK_(f))?sci.impl.vars.isMacro(f):false))?cljs.core.deref(f):f);
if(cljs.core.truth_(sci.impl.analyzer.macro_QMARK_(f__$1))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(f__$1,original_expr,new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(ctx),cljs.core.rest(expr));
} else {
return expr;
}

}
}
} else {
return expr;
}
} else {
return expr;
}
});
sci.impl.interpreter.macroexpand = (function sci$impl$interpreter$macroexpand(ctx,form){
var ex = sci.impl.interpreter.macroexpand_1(ctx,form);
if((ex === form)){
return form;
} else {
return (sci.impl.interpreter.macroexpand.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.macroexpand.cljs$core$IFn$_invoke$arity$2(ctx,ex) : sci.impl.interpreter.macroexpand.call(null,ctx,ex));
}
});
sci.impl.interpreter.eval_set_BANG_ = (function sci$impl$interpreter$eval_set_BANG_(ctx,p__60064){
var vec__60065 = p__60064;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60065,(0),null);
var obj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60065,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60065,(2),null);
var obj__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,obj) : sci.impl.interpreter.interpret.call(null,ctx,obj));
var v__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,v) : sci.impl.interpreter.interpret.call(null,ctx,v));
if(sci.impl.vars.var_QMARK_(obj__$1)){
return sci.impl.types.setVal(obj__$1,v__$1);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot set ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(obj__$1)," to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v__$1)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"obj","obj",981763962),obj__$1,new cljs.core.Keyword(null,"v","v",21465059),v__$1], null));
}
});
sci.impl.interpreter.eval_do_STAR_ = (function sci$impl$interpreter$eval_do_STAR_(ctx,exprs){
var G__60071 = exprs;
var vec__60072 = G__60071;
var seq__60073 = cljs.core.seq(vec__60072);
var first__60074 = cljs.core.first(seq__60073);
var seq__60073__$1 = cljs.core.next(seq__60073);
var expr = first__60074;
var exprs__$1 = seq__60073__$1;
var G__60071__$1 = G__60071;
while(true){
var vec__60075 = G__60071__$1;
var seq__60076 = cljs.core.seq(vec__60075);
var first__60077 = cljs.core.first(seq__60076);
var seq__60076__$1 = cljs.core.next(seq__60076);
var expr__$1 = first__60077;
var exprs__$2 = seq__60076__$1;
var ret = (function (){try{return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,expr__$1) : sci.impl.interpreter.interpret.call(null,ctx,expr__$1));
}catch (e60078){if((e60078 instanceof Error)){
var e = e60078;
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,expr__$1);
} else {
throw e60078;

}
}})();
var temp__5733__auto__ = cljs.core.seq(exprs__$2);
if(temp__5733__auto__){
var exprs__$3 = temp__5733__auto__;
var G__60716 = exprs__$3;
G__60071__$1 = G__60716;
continue;
} else {
return ret;
}
break;
}
});
sci.impl.interpreter.eval_do = (function sci$impl$interpreter$eval_do(ctx,expr){
var temp__5735__auto__ = cljs.core.next(expr);
if(temp__5735__auto__){
var exprs = temp__5735__auto__;
return sci.impl.interpreter.eval_do_STAR_(ctx,exprs);
} else {
return null;
}
});
sci.impl.interpreter.fn_call = (function sci$impl$interpreter$fn_call(ctx,f,args){
var G__60271 = cljs.core.count(args);
switch (G__60271) {
case (0):
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

break;
case (1):
var arg60081 = (function (){var G__60272 = ctx;
var G__60273 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60272,G__60273) : sci.impl.interpreter.interpret.call(null,G__60272,G__60273));
})();
var args__$1 = cljs.core.rest(args);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(arg60081) : f.call(null,arg60081));

break;
case (2):
var arg60082 = (function (){var G__60274 = ctx;
var G__60275 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60274,G__60275) : sci.impl.interpreter.interpret.call(null,G__60274,G__60275));
})();
var args__$1 = cljs.core.rest(args);
var arg60083 = (function (){var G__60276 = ctx;
var G__60277 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60276,G__60277) : sci.impl.interpreter.interpret.call(null,G__60276,G__60277));
})();
var args__$2 = cljs.core.rest(args__$1);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(arg60082,arg60083) : f.call(null,arg60082,arg60083));

break;
case (3):
var arg60084 = (function (){var G__60278 = ctx;
var G__60279 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60278,G__60279) : sci.impl.interpreter.interpret.call(null,G__60278,G__60279));
})();
var args__$1 = cljs.core.rest(args);
var arg60085 = (function (){var G__60280 = ctx;
var G__60281 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60280,G__60281) : sci.impl.interpreter.interpret.call(null,G__60280,G__60281));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg60086 = (function (){var G__60282 = ctx;
var G__60283 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60282,G__60283) : sci.impl.interpreter.interpret.call(null,G__60282,G__60283));
})();
var args__$3 = cljs.core.rest(args__$2);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(arg60084,arg60085,arg60086) : f.call(null,arg60084,arg60085,arg60086));

break;
case (4):
var arg60087 = (function (){var G__60284 = ctx;
var G__60285 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60284,G__60285) : sci.impl.interpreter.interpret.call(null,G__60284,G__60285));
})();
var args__$1 = cljs.core.rest(args);
var arg60088 = (function (){var G__60286 = ctx;
var G__60287 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60286,G__60287) : sci.impl.interpreter.interpret.call(null,G__60286,G__60287));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg60089 = (function (){var G__60288 = ctx;
var G__60289 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60288,G__60289) : sci.impl.interpreter.interpret.call(null,G__60288,G__60289));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg60090 = (function (){var G__60290 = ctx;
var G__60291 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60290,G__60291) : sci.impl.interpreter.interpret.call(null,G__60290,G__60291));
})();
var args__$4 = cljs.core.rest(args__$3);
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(arg60087,arg60088,arg60089,arg60090) : f.call(null,arg60087,arg60088,arg60089,arg60090));

break;
case (5):
var arg60091 = (function (){var G__60292 = ctx;
var G__60293 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60292,G__60293) : sci.impl.interpreter.interpret.call(null,G__60292,G__60293));
})();
var args__$1 = cljs.core.rest(args);
var arg60092 = (function (){var G__60294 = ctx;
var G__60295 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60294,G__60295) : sci.impl.interpreter.interpret.call(null,G__60294,G__60295));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg60093 = (function (){var G__60296 = ctx;
var G__60297 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60296,G__60297) : sci.impl.interpreter.interpret.call(null,G__60296,G__60297));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg60094 = (function (){var G__60298 = ctx;
var G__60299 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60298,G__60299) : sci.impl.interpreter.interpret.call(null,G__60298,G__60299));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg60095 = (function (){var G__60300 = ctx;
var G__60301 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60300,G__60301) : sci.impl.interpreter.interpret.call(null,G__60300,G__60301));
})();
var args__$5 = cljs.core.rest(args__$4);
return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(arg60091,arg60092,arg60093,arg60094,arg60095) : f.call(null,arg60091,arg60092,arg60093,arg60094,arg60095));

break;
case (6):
var arg60096 = (function (){var G__60302 = ctx;
var G__60303 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60302,G__60303) : sci.impl.interpreter.interpret.call(null,G__60302,G__60303));
})();
var args__$1 = cljs.core.rest(args);
var arg60097 = (function (){var G__60304 = ctx;
var G__60305 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60304,G__60305) : sci.impl.interpreter.interpret.call(null,G__60304,G__60305));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg60098 = (function (){var G__60306 = ctx;
var G__60307 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60306,G__60307) : sci.impl.interpreter.interpret.call(null,G__60306,G__60307));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg60099 = (function (){var G__60308 = ctx;
var G__60309 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60308,G__60309) : sci.impl.interpreter.interpret.call(null,G__60308,G__60309));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg60100 = (function (){var G__60310 = ctx;
var G__60311 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60310,G__60311) : sci.impl.interpreter.interpret.call(null,G__60310,G__60311));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg60101 = (function (){var G__60312 = ctx;
var G__60313 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60312,G__60313) : sci.impl.interpreter.interpret.call(null,G__60312,G__60313));
})();
var args__$6 = cljs.core.rest(args__$5);
return (f.cljs$core$IFn$_invoke$arity$6 ? f.cljs$core$IFn$_invoke$arity$6(arg60096,arg60097,arg60098,arg60099,arg60100,arg60101) : f.call(null,arg60096,arg60097,arg60098,arg60099,arg60100,arg60101));

break;
case (7):
var arg60102 = (function (){var G__60314 = ctx;
var G__60315 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60314,G__60315) : sci.impl.interpreter.interpret.call(null,G__60314,G__60315));
})();
var args__$1 = cljs.core.rest(args);
var arg60103 = (function (){var G__60316 = ctx;
var G__60317 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60316,G__60317) : sci.impl.interpreter.interpret.call(null,G__60316,G__60317));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg60104 = (function (){var G__60318 = ctx;
var G__60319 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60318,G__60319) : sci.impl.interpreter.interpret.call(null,G__60318,G__60319));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg60105 = (function (){var G__60320 = ctx;
var G__60321 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60320,G__60321) : sci.impl.interpreter.interpret.call(null,G__60320,G__60321));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg60106 = (function (){var G__60322 = ctx;
var G__60323 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60322,G__60323) : sci.impl.interpreter.interpret.call(null,G__60322,G__60323));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg60107 = (function (){var G__60324 = ctx;
var G__60325 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60324,G__60325) : sci.impl.interpreter.interpret.call(null,G__60324,G__60325));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg60108 = (function (){var G__60326 = ctx;
var G__60327 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60326,G__60327) : sci.impl.interpreter.interpret.call(null,G__60326,G__60327));
})();
var args__$7 = cljs.core.rest(args__$6);
return (f.cljs$core$IFn$_invoke$arity$7 ? f.cljs$core$IFn$_invoke$arity$7(arg60102,arg60103,arg60104,arg60105,arg60106,arg60107,arg60108) : f.call(null,arg60102,arg60103,arg60104,arg60105,arg60106,arg60107,arg60108));

break;
case (8):
var arg60109 = (function (){var G__60328 = ctx;
var G__60329 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60328,G__60329) : sci.impl.interpreter.interpret.call(null,G__60328,G__60329));
})();
var args__$1 = cljs.core.rest(args);
var arg60110 = (function (){var G__60330 = ctx;
var G__60331 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60330,G__60331) : sci.impl.interpreter.interpret.call(null,G__60330,G__60331));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg60111 = (function (){var G__60332 = ctx;
var G__60333 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60332,G__60333) : sci.impl.interpreter.interpret.call(null,G__60332,G__60333));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg60112 = (function (){var G__60334 = ctx;
var G__60335 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60334,G__60335) : sci.impl.interpreter.interpret.call(null,G__60334,G__60335));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg60113 = (function (){var G__60336 = ctx;
var G__60337 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60336,G__60337) : sci.impl.interpreter.interpret.call(null,G__60336,G__60337));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg60114 = (function (){var G__60338 = ctx;
var G__60339 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60338,G__60339) : sci.impl.interpreter.interpret.call(null,G__60338,G__60339));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg60115 = (function (){var G__60340 = ctx;
var G__60341 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60340,G__60341) : sci.impl.interpreter.interpret.call(null,G__60340,G__60341));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg60116 = (function (){var G__60342 = ctx;
var G__60343 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60342,G__60343) : sci.impl.interpreter.interpret.call(null,G__60342,G__60343));
})();
var args__$8 = cljs.core.rest(args__$7);
return (f.cljs$core$IFn$_invoke$arity$8 ? f.cljs$core$IFn$_invoke$arity$8(arg60109,arg60110,arg60111,arg60112,arg60113,arg60114,arg60115,arg60116) : f.call(null,arg60109,arg60110,arg60111,arg60112,arg60113,arg60114,arg60115,arg60116));

break;
case (9):
var arg60117 = (function (){var G__60344 = ctx;
var G__60345 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60344,G__60345) : sci.impl.interpreter.interpret.call(null,G__60344,G__60345));
})();
var args__$1 = cljs.core.rest(args);
var arg60118 = (function (){var G__60346 = ctx;
var G__60347 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60346,G__60347) : sci.impl.interpreter.interpret.call(null,G__60346,G__60347));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg60119 = (function (){var G__60348 = ctx;
var G__60349 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60348,G__60349) : sci.impl.interpreter.interpret.call(null,G__60348,G__60349));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg60120 = (function (){var G__60350 = ctx;
var G__60351 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60350,G__60351) : sci.impl.interpreter.interpret.call(null,G__60350,G__60351));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg60121 = (function (){var G__60352 = ctx;
var G__60353 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60352,G__60353) : sci.impl.interpreter.interpret.call(null,G__60352,G__60353));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg60122 = (function (){var G__60354 = ctx;
var G__60355 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60354,G__60355) : sci.impl.interpreter.interpret.call(null,G__60354,G__60355));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg60123 = (function (){var G__60356 = ctx;
var G__60357 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60356,G__60357) : sci.impl.interpreter.interpret.call(null,G__60356,G__60357));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg60124 = (function (){var G__60358 = ctx;
var G__60359 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60358,G__60359) : sci.impl.interpreter.interpret.call(null,G__60358,G__60359));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg60125 = (function (){var G__60360 = ctx;
var G__60361 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60360,G__60361) : sci.impl.interpreter.interpret.call(null,G__60360,G__60361));
})();
var args__$9 = cljs.core.rest(args__$8);
return (f.cljs$core$IFn$_invoke$arity$9 ? f.cljs$core$IFn$_invoke$arity$9(arg60117,arg60118,arg60119,arg60120,arg60121,arg60122,arg60123,arg60124,arg60125) : f.call(null,arg60117,arg60118,arg60119,arg60120,arg60121,arg60122,arg60123,arg60124,arg60125));

break;
case (10):
var arg60126 = (function (){var G__60362 = ctx;
var G__60363 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60362,G__60363) : sci.impl.interpreter.interpret.call(null,G__60362,G__60363));
})();
var args__$1 = cljs.core.rest(args);
var arg60127 = (function (){var G__60364 = ctx;
var G__60365 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60364,G__60365) : sci.impl.interpreter.interpret.call(null,G__60364,G__60365));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg60128 = (function (){var G__60366 = ctx;
var G__60367 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60366,G__60367) : sci.impl.interpreter.interpret.call(null,G__60366,G__60367));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg60129 = (function (){var G__60368 = ctx;
var G__60369 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60368,G__60369) : sci.impl.interpreter.interpret.call(null,G__60368,G__60369));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg60130 = (function (){var G__60370 = ctx;
var G__60371 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60370,G__60371) : sci.impl.interpreter.interpret.call(null,G__60370,G__60371));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg60131 = (function (){var G__60372 = ctx;
var G__60373 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60372,G__60373) : sci.impl.interpreter.interpret.call(null,G__60372,G__60373));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg60132 = (function (){var G__60374 = ctx;
var G__60375 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60374,G__60375) : sci.impl.interpreter.interpret.call(null,G__60374,G__60375));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg60133 = (function (){var G__60376 = ctx;
var G__60377 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60376,G__60377) : sci.impl.interpreter.interpret.call(null,G__60376,G__60377));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg60134 = (function (){var G__60378 = ctx;
var G__60379 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60378,G__60379) : sci.impl.interpreter.interpret.call(null,G__60378,G__60379));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg60135 = (function (){var G__60380 = ctx;
var G__60381 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60380,G__60381) : sci.impl.interpreter.interpret.call(null,G__60380,G__60381));
})();
var args__$10 = cljs.core.rest(args__$9);
return (f.cljs$core$IFn$_invoke$arity$10 ? f.cljs$core$IFn$_invoke$arity$10(arg60126,arg60127,arg60128,arg60129,arg60130,arg60131,arg60132,arg60133,arg60134,arg60135) : f.call(null,arg60126,arg60127,arg60128,arg60129,arg60130,arg60131,arg60132,arg60133,arg60134,arg60135));

break;
case (11):
var arg60136 = (function (){var G__60382 = ctx;
var G__60383 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60382,G__60383) : sci.impl.interpreter.interpret.call(null,G__60382,G__60383));
})();
var args__$1 = cljs.core.rest(args);
var arg60137 = (function (){var G__60384 = ctx;
var G__60385 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60384,G__60385) : sci.impl.interpreter.interpret.call(null,G__60384,G__60385));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg60138 = (function (){var G__60386 = ctx;
var G__60387 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60386,G__60387) : sci.impl.interpreter.interpret.call(null,G__60386,G__60387));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg60139 = (function (){var G__60388 = ctx;
var G__60389 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60388,G__60389) : sci.impl.interpreter.interpret.call(null,G__60388,G__60389));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg60140 = (function (){var G__60390 = ctx;
var G__60391 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60390,G__60391) : sci.impl.interpreter.interpret.call(null,G__60390,G__60391));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg60141 = (function (){var G__60392 = ctx;
var G__60393 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60392,G__60393) : sci.impl.interpreter.interpret.call(null,G__60392,G__60393));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg60142 = (function (){var G__60394 = ctx;
var G__60395 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60394,G__60395) : sci.impl.interpreter.interpret.call(null,G__60394,G__60395));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg60143 = (function (){var G__60396 = ctx;
var G__60397 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60396,G__60397) : sci.impl.interpreter.interpret.call(null,G__60396,G__60397));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg60144 = (function (){var G__60398 = ctx;
var G__60399 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60398,G__60399) : sci.impl.interpreter.interpret.call(null,G__60398,G__60399));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg60145 = (function (){var G__60400 = ctx;
var G__60401 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60400,G__60401) : sci.impl.interpreter.interpret.call(null,G__60400,G__60401));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg60146 = (function (){var G__60402 = ctx;
var G__60403 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60402,G__60403) : sci.impl.interpreter.interpret.call(null,G__60402,G__60403));
})();
var args__$11 = cljs.core.rest(args__$10);
return (f.cljs$core$IFn$_invoke$arity$11 ? f.cljs$core$IFn$_invoke$arity$11(arg60136,arg60137,arg60138,arg60139,arg60140,arg60141,arg60142,arg60143,arg60144,arg60145,arg60146) : f.call(null,arg60136,arg60137,arg60138,arg60139,arg60140,arg60141,arg60142,arg60143,arg60144,arg60145,arg60146));

break;
case (12):
var arg60147 = (function (){var G__60404 = ctx;
var G__60405 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60404,G__60405) : sci.impl.interpreter.interpret.call(null,G__60404,G__60405));
})();
var args__$1 = cljs.core.rest(args);
var arg60148 = (function (){var G__60406 = ctx;
var G__60407 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60406,G__60407) : sci.impl.interpreter.interpret.call(null,G__60406,G__60407));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg60149 = (function (){var G__60408 = ctx;
var G__60409 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60408,G__60409) : sci.impl.interpreter.interpret.call(null,G__60408,G__60409));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg60150 = (function (){var G__60410 = ctx;
var G__60411 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60410,G__60411) : sci.impl.interpreter.interpret.call(null,G__60410,G__60411));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg60151 = (function (){var G__60412 = ctx;
var G__60413 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60412,G__60413) : sci.impl.interpreter.interpret.call(null,G__60412,G__60413));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg60152 = (function (){var G__60414 = ctx;
var G__60415 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60414,G__60415) : sci.impl.interpreter.interpret.call(null,G__60414,G__60415));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg60153 = (function (){var G__60416 = ctx;
var G__60417 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60416,G__60417) : sci.impl.interpreter.interpret.call(null,G__60416,G__60417));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg60154 = (function (){var G__60418 = ctx;
var G__60419 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60418,G__60419) : sci.impl.interpreter.interpret.call(null,G__60418,G__60419));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg60155 = (function (){var G__60420 = ctx;
var G__60421 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60420,G__60421) : sci.impl.interpreter.interpret.call(null,G__60420,G__60421));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg60156 = (function (){var G__60422 = ctx;
var G__60423 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60422,G__60423) : sci.impl.interpreter.interpret.call(null,G__60422,G__60423));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg60157 = (function (){var G__60424 = ctx;
var G__60425 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60424,G__60425) : sci.impl.interpreter.interpret.call(null,G__60424,G__60425));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg60158 = (function (){var G__60426 = ctx;
var G__60427 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60426,G__60427) : sci.impl.interpreter.interpret.call(null,G__60426,G__60427));
})();
var args__$12 = cljs.core.rest(args__$11);
return (f.cljs$core$IFn$_invoke$arity$12 ? f.cljs$core$IFn$_invoke$arity$12(arg60147,arg60148,arg60149,arg60150,arg60151,arg60152,arg60153,arg60154,arg60155,arg60156,arg60157,arg60158) : f.call(null,arg60147,arg60148,arg60149,arg60150,arg60151,arg60152,arg60153,arg60154,arg60155,arg60156,arg60157,arg60158));

break;
case (13):
var arg60159 = (function (){var G__60428 = ctx;
var G__60429 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60428,G__60429) : sci.impl.interpreter.interpret.call(null,G__60428,G__60429));
})();
var args__$1 = cljs.core.rest(args);
var arg60160 = (function (){var G__60430 = ctx;
var G__60431 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60430,G__60431) : sci.impl.interpreter.interpret.call(null,G__60430,G__60431));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg60161 = (function (){var G__60432 = ctx;
var G__60433 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60432,G__60433) : sci.impl.interpreter.interpret.call(null,G__60432,G__60433));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg60162 = (function (){var G__60434 = ctx;
var G__60435 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60434,G__60435) : sci.impl.interpreter.interpret.call(null,G__60434,G__60435));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg60163 = (function (){var G__60436 = ctx;
var G__60437 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60436,G__60437) : sci.impl.interpreter.interpret.call(null,G__60436,G__60437));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg60164 = (function (){var G__60438 = ctx;
var G__60439 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60438,G__60439) : sci.impl.interpreter.interpret.call(null,G__60438,G__60439));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg60165 = (function (){var G__60440 = ctx;
var G__60441 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60440,G__60441) : sci.impl.interpreter.interpret.call(null,G__60440,G__60441));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg60166 = (function (){var G__60442 = ctx;
var G__60443 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60442,G__60443) : sci.impl.interpreter.interpret.call(null,G__60442,G__60443));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg60167 = (function (){var G__60444 = ctx;
var G__60445 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60444,G__60445) : sci.impl.interpreter.interpret.call(null,G__60444,G__60445));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg60168 = (function (){var G__60446 = ctx;
var G__60447 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60446,G__60447) : sci.impl.interpreter.interpret.call(null,G__60446,G__60447));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg60169 = (function (){var G__60448 = ctx;
var G__60449 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60448,G__60449) : sci.impl.interpreter.interpret.call(null,G__60448,G__60449));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg60170 = (function (){var G__60450 = ctx;
var G__60451 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60450,G__60451) : sci.impl.interpreter.interpret.call(null,G__60450,G__60451));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg60171 = (function (){var G__60452 = ctx;
var G__60453 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60452,G__60453) : sci.impl.interpreter.interpret.call(null,G__60452,G__60453));
})();
var args__$13 = cljs.core.rest(args__$12);
return (f.cljs$core$IFn$_invoke$arity$13 ? f.cljs$core$IFn$_invoke$arity$13(arg60159,arg60160,arg60161,arg60162,arg60163,arg60164,arg60165,arg60166,arg60167,arg60168,arg60169,arg60170,arg60171) : f.call(null,arg60159,arg60160,arg60161,arg60162,arg60163,arg60164,arg60165,arg60166,arg60167,arg60168,arg60169,arg60170,arg60171));

break;
case (14):
var arg60172 = (function (){var G__60454 = ctx;
var G__60455 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60454,G__60455) : sci.impl.interpreter.interpret.call(null,G__60454,G__60455));
})();
var args__$1 = cljs.core.rest(args);
var arg60173 = (function (){var G__60456 = ctx;
var G__60457 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60456,G__60457) : sci.impl.interpreter.interpret.call(null,G__60456,G__60457));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg60174 = (function (){var G__60458 = ctx;
var G__60459 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60458,G__60459) : sci.impl.interpreter.interpret.call(null,G__60458,G__60459));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg60175 = (function (){var G__60460 = ctx;
var G__60461 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60460,G__60461) : sci.impl.interpreter.interpret.call(null,G__60460,G__60461));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg60176 = (function (){var G__60462 = ctx;
var G__60463 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60462,G__60463) : sci.impl.interpreter.interpret.call(null,G__60462,G__60463));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg60177 = (function (){var G__60464 = ctx;
var G__60465 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60464,G__60465) : sci.impl.interpreter.interpret.call(null,G__60464,G__60465));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg60178 = (function (){var G__60466 = ctx;
var G__60467 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60466,G__60467) : sci.impl.interpreter.interpret.call(null,G__60466,G__60467));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg60179 = (function (){var G__60468 = ctx;
var G__60469 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60468,G__60469) : sci.impl.interpreter.interpret.call(null,G__60468,G__60469));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg60180 = (function (){var G__60470 = ctx;
var G__60471 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60470,G__60471) : sci.impl.interpreter.interpret.call(null,G__60470,G__60471));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg60181 = (function (){var G__60472 = ctx;
var G__60473 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60472,G__60473) : sci.impl.interpreter.interpret.call(null,G__60472,G__60473));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg60182 = (function (){var G__60474 = ctx;
var G__60475 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60474,G__60475) : sci.impl.interpreter.interpret.call(null,G__60474,G__60475));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg60183 = (function (){var G__60476 = ctx;
var G__60477 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60476,G__60477) : sci.impl.interpreter.interpret.call(null,G__60476,G__60477));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg60184 = (function (){var G__60478 = ctx;
var G__60479 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60478,G__60479) : sci.impl.interpreter.interpret.call(null,G__60478,G__60479));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg60185 = (function (){var G__60480 = ctx;
var G__60481 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60480,G__60481) : sci.impl.interpreter.interpret.call(null,G__60480,G__60481));
})();
var args__$14 = cljs.core.rest(args__$13);
return (f.cljs$core$IFn$_invoke$arity$14 ? f.cljs$core$IFn$_invoke$arity$14(arg60172,arg60173,arg60174,arg60175,arg60176,arg60177,arg60178,arg60179,arg60180,arg60181,arg60182,arg60183,arg60184,arg60185) : f.call(null,arg60172,arg60173,arg60174,arg60175,arg60176,arg60177,arg60178,arg60179,arg60180,arg60181,arg60182,arg60183,arg60184,arg60185));

break;
case (15):
var arg60186 = (function (){var G__60482 = ctx;
var G__60483 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60482,G__60483) : sci.impl.interpreter.interpret.call(null,G__60482,G__60483));
})();
var args__$1 = cljs.core.rest(args);
var arg60187 = (function (){var G__60484 = ctx;
var G__60485 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60484,G__60485) : sci.impl.interpreter.interpret.call(null,G__60484,G__60485));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg60188 = (function (){var G__60486 = ctx;
var G__60487 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60486,G__60487) : sci.impl.interpreter.interpret.call(null,G__60486,G__60487));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg60189 = (function (){var G__60488 = ctx;
var G__60489 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60488,G__60489) : sci.impl.interpreter.interpret.call(null,G__60488,G__60489));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg60190 = (function (){var G__60490 = ctx;
var G__60491 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60490,G__60491) : sci.impl.interpreter.interpret.call(null,G__60490,G__60491));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg60191 = (function (){var G__60492 = ctx;
var G__60493 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60492,G__60493) : sci.impl.interpreter.interpret.call(null,G__60492,G__60493));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg60192 = (function (){var G__60494 = ctx;
var G__60495 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60494,G__60495) : sci.impl.interpreter.interpret.call(null,G__60494,G__60495));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg60193 = (function (){var G__60496 = ctx;
var G__60497 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60496,G__60497) : sci.impl.interpreter.interpret.call(null,G__60496,G__60497));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg60194 = (function (){var G__60498 = ctx;
var G__60499 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60498,G__60499) : sci.impl.interpreter.interpret.call(null,G__60498,G__60499));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg60195 = (function (){var G__60500 = ctx;
var G__60501 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60500,G__60501) : sci.impl.interpreter.interpret.call(null,G__60500,G__60501));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg60196 = (function (){var G__60502 = ctx;
var G__60503 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60502,G__60503) : sci.impl.interpreter.interpret.call(null,G__60502,G__60503));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg60197 = (function (){var G__60504 = ctx;
var G__60505 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60504,G__60505) : sci.impl.interpreter.interpret.call(null,G__60504,G__60505));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg60198 = (function (){var G__60506 = ctx;
var G__60507 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60506,G__60507) : sci.impl.interpreter.interpret.call(null,G__60506,G__60507));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg60199 = (function (){var G__60508 = ctx;
var G__60509 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60508,G__60509) : sci.impl.interpreter.interpret.call(null,G__60508,G__60509));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg60200 = (function (){var G__60510 = ctx;
var G__60511 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60510,G__60511) : sci.impl.interpreter.interpret.call(null,G__60510,G__60511));
})();
var args__$15 = cljs.core.rest(args__$14);
return (f.cljs$core$IFn$_invoke$arity$15 ? f.cljs$core$IFn$_invoke$arity$15(arg60186,arg60187,arg60188,arg60189,arg60190,arg60191,arg60192,arg60193,arg60194,arg60195,arg60196,arg60197,arg60198,arg60199,arg60200) : f.call(null,arg60186,arg60187,arg60188,arg60189,arg60190,arg60191,arg60192,arg60193,arg60194,arg60195,arg60196,arg60197,arg60198,arg60199,arg60200));

break;
case (16):
var arg60201 = (function (){var G__60512 = ctx;
var G__60513 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60512,G__60513) : sci.impl.interpreter.interpret.call(null,G__60512,G__60513));
})();
var args__$1 = cljs.core.rest(args);
var arg60202 = (function (){var G__60514 = ctx;
var G__60515 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60514,G__60515) : sci.impl.interpreter.interpret.call(null,G__60514,G__60515));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg60203 = (function (){var G__60516 = ctx;
var G__60517 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60516,G__60517) : sci.impl.interpreter.interpret.call(null,G__60516,G__60517));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg60204 = (function (){var G__60518 = ctx;
var G__60519 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60518,G__60519) : sci.impl.interpreter.interpret.call(null,G__60518,G__60519));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg60205 = (function (){var G__60520 = ctx;
var G__60521 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60520,G__60521) : sci.impl.interpreter.interpret.call(null,G__60520,G__60521));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg60206 = (function (){var G__60522 = ctx;
var G__60523 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60522,G__60523) : sci.impl.interpreter.interpret.call(null,G__60522,G__60523));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg60207 = (function (){var G__60524 = ctx;
var G__60525 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60524,G__60525) : sci.impl.interpreter.interpret.call(null,G__60524,G__60525));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg60208 = (function (){var G__60526 = ctx;
var G__60527 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60526,G__60527) : sci.impl.interpreter.interpret.call(null,G__60526,G__60527));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg60209 = (function (){var G__60528 = ctx;
var G__60529 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60528,G__60529) : sci.impl.interpreter.interpret.call(null,G__60528,G__60529));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg60210 = (function (){var G__60530 = ctx;
var G__60531 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60530,G__60531) : sci.impl.interpreter.interpret.call(null,G__60530,G__60531));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg60211 = (function (){var G__60532 = ctx;
var G__60533 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60532,G__60533) : sci.impl.interpreter.interpret.call(null,G__60532,G__60533));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg60212 = (function (){var G__60534 = ctx;
var G__60535 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60534,G__60535) : sci.impl.interpreter.interpret.call(null,G__60534,G__60535));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg60213 = (function (){var G__60536 = ctx;
var G__60537 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60536,G__60537) : sci.impl.interpreter.interpret.call(null,G__60536,G__60537));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg60214 = (function (){var G__60538 = ctx;
var G__60539 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60538,G__60539) : sci.impl.interpreter.interpret.call(null,G__60538,G__60539));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg60215 = (function (){var G__60540 = ctx;
var G__60541 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60540,G__60541) : sci.impl.interpreter.interpret.call(null,G__60540,G__60541));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg60216 = (function (){var G__60542 = ctx;
var G__60543 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60542,G__60543) : sci.impl.interpreter.interpret.call(null,G__60542,G__60543));
})();
var args__$16 = cljs.core.rest(args__$15);
return (f.cljs$core$IFn$_invoke$arity$16 ? f.cljs$core$IFn$_invoke$arity$16(arg60201,arg60202,arg60203,arg60204,arg60205,arg60206,arg60207,arg60208,arg60209,arg60210,arg60211,arg60212,arg60213,arg60214,arg60215,arg60216) : f.call(null,arg60201,arg60202,arg60203,arg60204,arg60205,arg60206,arg60207,arg60208,arg60209,arg60210,arg60211,arg60212,arg60213,arg60214,arg60215,arg60216));

break;
case (17):
var arg60217 = (function (){var G__60544 = ctx;
var G__60545 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60544,G__60545) : sci.impl.interpreter.interpret.call(null,G__60544,G__60545));
})();
var args__$1 = cljs.core.rest(args);
var arg60218 = (function (){var G__60546 = ctx;
var G__60547 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60546,G__60547) : sci.impl.interpreter.interpret.call(null,G__60546,G__60547));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg60219 = (function (){var G__60548 = ctx;
var G__60549 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60548,G__60549) : sci.impl.interpreter.interpret.call(null,G__60548,G__60549));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg60220 = (function (){var G__60550 = ctx;
var G__60551 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60550,G__60551) : sci.impl.interpreter.interpret.call(null,G__60550,G__60551));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg60221 = (function (){var G__60552 = ctx;
var G__60553 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60552,G__60553) : sci.impl.interpreter.interpret.call(null,G__60552,G__60553));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg60222 = (function (){var G__60554 = ctx;
var G__60555 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60554,G__60555) : sci.impl.interpreter.interpret.call(null,G__60554,G__60555));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg60223 = (function (){var G__60556 = ctx;
var G__60557 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60556,G__60557) : sci.impl.interpreter.interpret.call(null,G__60556,G__60557));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg60224 = (function (){var G__60558 = ctx;
var G__60559 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60558,G__60559) : sci.impl.interpreter.interpret.call(null,G__60558,G__60559));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg60225 = (function (){var G__60560 = ctx;
var G__60561 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60560,G__60561) : sci.impl.interpreter.interpret.call(null,G__60560,G__60561));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg60226 = (function (){var G__60562 = ctx;
var G__60563 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60562,G__60563) : sci.impl.interpreter.interpret.call(null,G__60562,G__60563));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg60227 = (function (){var G__60564 = ctx;
var G__60565 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60564,G__60565) : sci.impl.interpreter.interpret.call(null,G__60564,G__60565));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg60228 = (function (){var G__60566 = ctx;
var G__60567 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60566,G__60567) : sci.impl.interpreter.interpret.call(null,G__60566,G__60567));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg60229 = (function (){var G__60568 = ctx;
var G__60569 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60568,G__60569) : sci.impl.interpreter.interpret.call(null,G__60568,G__60569));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg60230 = (function (){var G__60570 = ctx;
var G__60571 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60570,G__60571) : sci.impl.interpreter.interpret.call(null,G__60570,G__60571));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg60231 = (function (){var G__60572 = ctx;
var G__60573 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60572,G__60573) : sci.impl.interpreter.interpret.call(null,G__60572,G__60573));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg60232 = (function (){var G__60574 = ctx;
var G__60575 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60574,G__60575) : sci.impl.interpreter.interpret.call(null,G__60574,G__60575));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg60233 = (function (){var G__60576 = ctx;
var G__60577 = cljs.core.first(args__$16);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60576,G__60577) : sci.impl.interpreter.interpret.call(null,G__60576,G__60577));
})();
var args__$17 = cljs.core.rest(args__$16);
return (f.cljs$core$IFn$_invoke$arity$17 ? f.cljs$core$IFn$_invoke$arity$17(arg60217,arg60218,arg60219,arg60220,arg60221,arg60222,arg60223,arg60224,arg60225,arg60226,arg60227,arg60228,arg60229,arg60230,arg60231,arg60232,arg60233) : f.call(null,arg60217,arg60218,arg60219,arg60220,arg60221,arg60222,arg60223,arg60224,arg60225,arg60226,arg60227,arg60228,arg60229,arg60230,arg60231,arg60232,arg60233));

break;
case (18):
var arg60234 = (function (){var G__60578 = ctx;
var G__60579 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60578,G__60579) : sci.impl.interpreter.interpret.call(null,G__60578,G__60579));
})();
var args__$1 = cljs.core.rest(args);
var arg60235 = (function (){var G__60580 = ctx;
var G__60581 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60580,G__60581) : sci.impl.interpreter.interpret.call(null,G__60580,G__60581));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg60236 = (function (){var G__60582 = ctx;
var G__60583 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60582,G__60583) : sci.impl.interpreter.interpret.call(null,G__60582,G__60583));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg60237 = (function (){var G__60584 = ctx;
var G__60585 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60584,G__60585) : sci.impl.interpreter.interpret.call(null,G__60584,G__60585));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg60238 = (function (){var G__60586 = ctx;
var G__60587 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60586,G__60587) : sci.impl.interpreter.interpret.call(null,G__60586,G__60587));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg60239 = (function (){var G__60588 = ctx;
var G__60589 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60588,G__60589) : sci.impl.interpreter.interpret.call(null,G__60588,G__60589));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg60240 = (function (){var G__60590 = ctx;
var G__60591 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60590,G__60591) : sci.impl.interpreter.interpret.call(null,G__60590,G__60591));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg60241 = (function (){var G__60592 = ctx;
var G__60593 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60592,G__60593) : sci.impl.interpreter.interpret.call(null,G__60592,G__60593));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg60242 = (function (){var G__60594 = ctx;
var G__60595 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60594,G__60595) : sci.impl.interpreter.interpret.call(null,G__60594,G__60595));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg60243 = (function (){var G__60596 = ctx;
var G__60597 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60596,G__60597) : sci.impl.interpreter.interpret.call(null,G__60596,G__60597));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg60244 = (function (){var G__60598 = ctx;
var G__60599 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60598,G__60599) : sci.impl.interpreter.interpret.call(null,G__60598,G__60599));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg60245 = (function (){var G__60600 = ctx;
var G__60601 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60600,G__60601) : sci.impl.interpreter.interpret.call(null,G__60600,G__60601));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg60246 = (function (){var G__60602 = ctx;
var G__60603 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60602,G__60603) : sci.impl.interpreter.interpret.call(null,G__60602,G__60603));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg60247 = (function (){var G__60604 = ctx;
var G__60605 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60604,G__60605) : sci.impl.interpreter.interpret.call(null,G__60604,G__60605));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg60248 = (function (){var G__60606 = ctx;
var G__60607 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60606,G__60607) : sci.impl.interpreter.interpret.call(null,G__60606,G__60607));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg60249 = (function (){var G__60608 = ctx;
var G__60609 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60608,G__60609) : sci.impl.interpreter.interpret.call(null,G__60608,G__60609));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg60250 = (function (){var G__60610 = ctx;
var G__60611 = cljs.core.first(args__$16);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60610,G__60611) : sci.impl.interpreter.interpret.call(null,G__60610,G__60611));
})();
var args__$17 = cljs.core.rest(args__$16);
var arg60251 = (function (){var G__60612 = ctx;
var G__60613 = cljs.core.first(args__$17);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60612,G__60613) : sci.impl.interpreter.interpret.call(null,G__60612,G__60613));
})();
var args__$18 = cljs.core.rest(args__$17);
return (f.cljs$core$IFn$_invoke$arity$18 ? f.cljs$core$IFn$_invoke$arity$18(arg60234,arg60235,arg60236,arg60237,arg60238,arg60239,arg60240,arg60241,arg60242,arg60243,arg60244,arg60245,arg60246,arg60247,arg60248,arg60249,arg60250,arg60251) : f.call(null,arg60234,arg60235,arg60236,arg60237,arg60238,arg60239,arg60240,arg60241,arg60242,arg60243,arg60244,arg60245,arg60246,arg60247,arg60248,arg60249,arg60250,arg60251));

break;
case (19):
var arg60252 = (function (){var G__60614 = ctx;
var G__60615 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60614,G__60615) : sci.impl.interpreter.interpret.call(null,G__60614,G__60615));
})();
var args__$1 = cljs.core.rest(args);
var arg60253 = (function (){var G__60616 = ctx;
var G__60617 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60616,G__60617) : sci.impl.interpreter.interpret.call(null,G__60616,G__60617));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg60254 = (function (){var G__60618 = ctx;
var G__60619 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60618,G__60619) : sci.impl.interpreter.interpret.call(null,G__60618,G__60619));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg60255 = (function (){var G__60620 = ctx;
var G__60621 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60620,G__60621) : sci.impl.interpreter.interpret.call(null,G__60620,G__60621));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg60256 = (function (){var G__60622 = ctx;
var G__60623 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60622,G__60623) : sci.impl.interpreter.interpret.call(null,G__60622,G__60623));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg60257 = (function (){var G__60624 = ctx;
var G__60625 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60624,G__60625) : sci.impl.interpreter.interpret.call(null,G__60624,G__60625));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg60258 = (function (){var G__60626 = ctx;
var G__60627 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60626,G__60627) : sci.impl.interpreter.interpret.call(null,G__60626,G__60627));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg60259 = (function (){var G__60628 = ctx;
var G__60629 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60628,G__60629) : sci.impl.interpreter.interpret.call(null,G__60628,G__60629));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg60260 = (function (){var G__60630 = ctx;
var G__60631 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60630,G__60631) : sci.impl.interpreter.interpret.call(null,G__60630,G__60631));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg60261 = (function (){var G__60632 = ctx;
var G__60633 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60632,G__60633) : sci.impl.interpreter.interpret.call(null,G__60632,G__60633));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg60262 = (function (){var G__60634 = ctx;
var G__60635 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60634,G__60635) : sci.impl.interpreter.interpret.call(null,G__60634,G__60635));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg60263 = (function (){var G__60636 = ctx;
var G__60637 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60636,G__60637) : sci.impl.interpreter.interpret.call(null,G__60636,G__60637));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg60264 = (function (){var G__60638 = ctx;
var G__60639 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60638,G__60639) : sci.impl.interpreter.interpret.call(null,G__60638,G__60639));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg60265 = (function (){var G__60640 = ctx;
var G__60641 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60640,G__60641) : sci.impl.interpreter.interpret.call(null,G__60640,G__60641));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg60266 = (function (){var G__60642 = ctx;
var G__60643 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60642,G__60643) : sci.impl.interpreter.interpret.call(null,G__60642,G__60643));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg60267 = (function (){var G__60644 = ctx;
var G__60645 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60644,G__60645) : sci.impl.interpreter.interpret.call(null,G__60644,G__60645));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg60268 = (function (){var G__60646 = ctx;
var G__60647 = cljs.core.first(args__$16);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60646,G__60647) : sci.impl.interpreter.interpret.call(null,G__60646,G__60647));
})();
var args__$17 = cljs.core.rest(args__$16);
var arg60269 = (function (){var G__60648 = ctx;
var G__60649 = cljs.core.first(args__$17);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60648,G__60649) : sci.impl.interpreter.interpret.call(null,G__60648,G__60649));
})();
var args__$18 = cljs.core.rest(args__$17);
var arg60270 = (function (){var G__60650 = ctx;
var G__60651 = cljs.core.first(args__$18);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60650,G__60651) : sci.impl.interpreter.interpret.call(null,G__60650,G__60651));
})();
var args__$19 = cljs.core.rest(args__$18);
return (f.cljs$core$IFn$_invoke$arity$19 ? f.cljs$core$IFn$_invoke$arity$19(arg60252,arg60253,arg60254,arg60255,arg60256,arg60257,arg60258,arg60259,arg60260,arg60261,arg60262,arg60263,arg60264,arg60265,arg60266,arg60267,arg60268,arg60269,arg60270) : f.call(null,arg60252,arg60253,arg60254,arg60255,arg60256,arg60257,arg60258,arg60259,arg60260,arg60261,arg60262,arg60263,arg60264,arg60265,arg60266,arg60267,arg60268,arg60269,arg60270));

break;
default:
var args__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__4373_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__4373_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__4373_SHARP_));
}),args);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args__$1);

}
});
sci.impl.interpreter.eval_special_call = (function sci$impl$interpreter$eval_special_call(ctx,f_sym,expr){
var G__60652 = sci.impl.utils.strip_core_ns(f_sym);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,".",".",1975675962,null),G__60652)){
if(cljs.core.truth_(ctx.get(new cljs.core.Keyword(null,"dry-run","dry-run",-1102788647)))){
return null;
} else {
return sci.impl.interpreter.eval_instance_method_invocation(ctx,expr);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"and","and",668631710,null),G__60652)){
return sci.impl.interpreter.eval_and(ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"case","case",-1510733573,null),G__60652)){
return sci.impl.interpreter.eval_case(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"if","if",1181717262,null),G__60652)){
return sci.impl.interpreter.eval_if(ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"do","do",1686842252,null),G__60652)){
return sci.impl.interpreter.eval_do(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"macroexpand","macroexpand",1509933344,null),G__60652)){
return sci.impl.interpreter.macroexpand(ctx,(function (){var G__60653 = ctx;
var G__60654 = cljs.core.second(expr);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60653,G__60654) : sci.impl.interpreter.interpret.call(null,G__60653,G__60654));
})());
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"def","def",597100991,null),G__60652)){
return sci.impl.interpreter.eval_def(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"let","let",358118826,null),G__60652)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_let,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"in-ns","in-ns",-2089468466,null),G__60652)){
return sci.impl.interpreter.eval_in_ns(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"use","use",-205850897,null),G__60652)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_use,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"set!","set!",250714521,null),G__60652)){
return sci.impl.interpreter.eval_set_BANG_(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"recur","recur",1202958259,null),G__60652)){
return sci.impl.interpreter.fn_call(ctx,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(sci.impl.fns.__GT_Recur,cljs.core.vector),cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"require","require",1172530194,null),G__60652)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_require,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"new","new",-444906321,null),G__60652)){
if(cljs.core.truth_(ctx.get(new cljs.core.Keyword(null,"dry-run","dry-run",-1102788647)))){
return null;
} else {
return sci.impl.interpreter.eval_constructor_invocation(ctx,expr);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"macroexpand-1","macroexpand-1",659241329,null),G__60652)){
return sci.impl.interpreter.macroexpand_1(ctx,(function (){var G__60655 = ctx;
var G__60656 = cljs.core.second(expr);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60655,G__60656) : sci.impl.interpreter.interpret.call(null,G__60655,G__60656));
})());
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"refer","refer",676235974,null),G__60652)){
return sci.impl.interpreter.eval_refer(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"lazy-seq","lazy-seq",489632906,null),G__60652)){
return (new cljs.core.LazySeq(null,(function (){var G__60657 = ctx;
var G__60658 = cljs.core.second(expr);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__60657,G__60658) : sci.impl.interpreter.interpret.call(null,G__60657,G__60658));
})(),null,null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"throw","throw",595905694,null),G__60652)){
return sci.impl.interpreter.eval_throw(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"try","try",-1273693247,null),G__60652)){
return sci.impl.interpreter.eval_try(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"resolve","resolve",56086045,null),G__60652)){
return sci.impl.interpreter.eval_resolve(ctx,cljs.core.second(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"or","or",1876275696,null),G__60652)){
return sci.impl.interpreter.eval_or(ctx,cljs.core.rest(expr));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__60652)].join('')));

}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
sci.impl.interpreter.eval_call = (function sci$impl$interpreter$eval_call(ctx,expr){
try{var f = cljs.core.first(expr);
var m = cljs.core.meta(f);
var op = (cljs.core.truth_(m)?m.get(new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978)):null);
if((((f instanceof cljs.core.Symbol)) && (cljs.core.not(op)))){
return sci.impl.interpreter.eval_special_call(ctx,f,expr);
} else {
if(cljs.core.truth_((function (){var G__60660 = op;
var G__60661 = new cljs.core.Keyword(null,"static-access","static-access",-1860919441);
return (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__60660,G__60661) : sci.impl.utils.kw_identical_QMARK_.call(null,G__60660,G__60661));
})())){
if(cljs.core.truth_(ctx.get(new cljs.core.Keyword(null,"dry-run","dry-run",-1102788647)))){
return null;
} else {
return sci.impl.interpreter.eval_static_method_invocation(ctx,expr);
}
} else {
var f__$1 = (cljs.core.truth_(op)?(sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,f) : sci.impl.interpreter.interpret.call(null,ctx,f)):f);
if(cljs.core.ifn_QMARK_(f__$1)){
if(cljs.core.truth_(ctx.get(new cljs.core.Keyword(null,"dry-run","dry-run",-1102788647)))){
return null;
} else {
return sci.impl.interpreter.fn_call(ctx,f__$1,cljs.core.rest(expr));
}
} else {
throw (new Error(["Cannot call ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f__$1], 0))," as a function."].join('')));
}

}
}
}catch (e60659){if((e60659 instanceof Error)){
var e = e60659;
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,expr);
} else {
throw e60659;

}
}});
sci.impl.interpreter.fix_meta = (function sci$impl$interpreter$fix_meta(v,old_meta){
if(cljs.core.truth_((((((!((v == null))))?(((((v.cljs$lang$protocol_mask$partition0$ & (262144))) || ((cljs.core.PROTOCOL_SENTINEL === v.cljs$core$IWithMeta$))))?true:false):false))?cljs.core.meta(v):false))){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$2(v,(function (m){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978)),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(old_meta));
}));
} else {
return v;
}
});
sci.impl.interpreter.interpret = (function sci$impl$interpreter$interpret(ctx,expr){
if((expr instanceof sci.impl.types.EvalVar)){
var v = expr.sci$impl$types$IBox$getVal$arity$1(null);
if(cljs.core.not(sci.impl.vars.isMacro(v))){
return cljs.core.deref(v);
} else {
throw (new Error(["Can't take value of a macro: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v),""].join('')));
}
} else {
var m = cljs.core.meta(expr);
var op = (cljs.core.truth_(m)?m.get(new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978)):null);
var ret = ((cljs.core.not(op))?expr:(function (){var G__60668 = op;
var G__60668__$1 = (((G__60668 instanceof cljs.core.Keyword))?G__60668.fqn:null);
switch (G__60668__$1) {
case "call":
return sci.impl.interpreter.eval_call(ctx,expr);

break;
case "try":
return sci.impl.interpreter.eval_try(ctx,expr);

break;
case "fn":
return sci.impl.fns.eval_fn(ctx,sci.impl.interpreter.interpret,sci.impl.interpreter.eval_do_STAR_,expr);

break;
case "static-access":
return sci.impl.interop.get_static_field(expr);

break;
case "var-value":
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(expr,(0));

break;
case "deref!":
var v = cljs.core.first(expr);
var v__$1 = ((sci.impl.vars.var_QMARK_(v))?cljs.core.deref(v):v);
var v__$2 = cljs.core.force(v__$1);
return v__$2;

break;
case "resolve-sym":
return sci.impl.interpreter.resolve_symbol(ctx,expr);

break;
case "needs-ctx":
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2(expr,ctx);

break;
default:
if(cljs.core.map_QMARK_(expr)){
return cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__60665_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__60665_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__60665_SHARP_));
}),cljs.core.keys(expr)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__60666_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__60666_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__60666_SHARP_));
}),cljs.core.vals(expr)));
} else {
if(((cljs.core.vector_QMARK_(expr)) || (cljs.core.set_QMARK_(expr)))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(expr),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__60667_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__60667_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__60667_SHARP_));
}),expr));
} else {
throw (new Error(["unexpected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr),", type: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(expr)),", meta:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(expr))].join('')));

}
}

}
})());
var ret__$1 = (cljs.core.truth_(m)?sci.impl.interpreter.fix_meta(ret,m):ret);
var temp__5733__auto__ = ctx.get(new cljs.core.Keyword(null,"realize-max","realize-max",-1846442543));
if(cljs.core.truth_(temp__5733__auto__)){
var n = temp__5733__auto__;
return sci.impl.max_or_throw.max_or_throw(ret__$1,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"expression","expression",202311876),expr),n);
} else {
return ret__$1;
}
}
});
sci.impl.interpreter.do_QMARK_ = (function sci$impl$interpreter$do_QMARK_(expr){
return ((cljs.core.list_QMARK_(expr)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.first(expr))));
});
sci.impl.interpreter.eval_form = (function sci$impl$interpreter$eval_form(ctx,form){
if(sci.impl.interpreter.do_QMARK_(form)){
var exprs = cljs.core.rest(form);
var ret = null;
while(true){
if(cljs.core.seq(exprs)){
var G__60719 = cljs.core.rest(exprs);
var G__60720 = (function (){var G__60671 = ctx;
var G__60672 = cljs.core.first(exprs);
return (sci.impl.interpreter.eval_form.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.eval_form.cljs$core$IFn$_invoke$arity$2(G__60671,G__60672) : sci.impl.interpreter.eval_form.call(null,G__60671,G__60672));
})();
exprs = G__60719;
ret = G__60720;
continue;
} else {
return ret;
}
break;
}
} else {
var analyzed = sci.impl.analyzer.analyze(ctx,form);
var ret = sci.impl.interpreter.interpret(ctx,analyzed);
return ret;
}
});
cljs.core.vreset_BANG_(sci.impl.utils.eval_form_state,sci.impl.interpreter.eval_form);
sci.impl.interpreter.eval_string_STAR_ = (function sci$impl$interpreter$eval_string_STAR_(ctx,s){
sci.impl.vars.push_thread_bindings(cljs.core.PersistentArrayMap.createAsIfByAssoc([sci.impl.vars.current_ns,cljs.core.deref(sci.impl.vars.current_ns)]));

try{var reader = cljs.tools.reader.reader_types.indexing_push_back_reader.cljs$core$IFn$_invoke$arity$1(cljs.tools.reader.reader_types.string_push_back_reader.cljs$core$IFn$_invoke$arity$1(s));
var ret = null;
while(true){
var expr = sci.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,reader);
if(cljs.core.truth_((function (){var G__60675 = new cljs.core.Keyword("edamame.impl.parser","eof","edamame.impl.parser/eof",720552006);
var G__60676 = expr;
return (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__60675,G__60676) : sci.impl.utils.kw_identical_QMARK_.call(null,G__60675,G__60676));
})())){
return ret;
} else {
var ret__$1 = sci.impl.interpreter.eval_form(ctx,expr);
var G__60721 = ret__$1;
ret = G__60721;
continue;
}
break;
}
}finally {sci.impl.vars.pop_thread_bindings();
}});
sci.impl.interpreter.eval_string = (function sci$impl$interpreter$eval_string(var_args){
var G__60678 = arguments.length;
switch (G__60678) {
case 1:
return sci.impl.interpreter.eval_string.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sci.impl.interpreter.eval_string.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.interpreter.eval_string.cljs$core$IFn$_invoke$arity$1 = (function (s){
return sci.impl.interpreter.eval_string.cljs$core$IFn$_invoke$arity$2(s,null);
}));

(sci.impl.interpreter.eval_string.cljs$core$IFn$_invoke$arity$2 = (function (s,opts){
var init_ctx = sci.impl.opts.init(opts);
var ret = sci.impl.interpreter.eval_string_STAR_(init_ctx,s);
return ret;
}));

(sci.impl.interpreter.eval_string.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=sci.impl.interpreter.js.map
