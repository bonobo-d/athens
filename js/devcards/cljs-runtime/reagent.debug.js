goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__31530__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__31530 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31532__i = 0, G__31532__a = new Array(arguments.length -  0);
while (G__31532__i < G__31532__a.length) {G__31532__a[G__31532__i] = arguments[G__31532__i + 0]; ++G__31532__i;}
  args = new cljs.core.IndexedSeq(G__31532__a,0,null);
} 
return G__31530__delegate.call(this,args);};
G__31530.cljs$lang$maxFixedArity = 0;
G__31530.cljs$lang$applyTo = (function (arglist__31533){
var args = cljs.core.seq(arglist__31533);
return G__31530__delegate(args);
});
G__31530.cljs$core$IFn$_invoke$arity$variadic = G__31530__delegate;
return G__31530;
})()
);

(o.error = (function() { 
var G__31534__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__31534 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31535__i = 0, G__31535__a = new Array(arguments.length -  0);
while (G__31535__i < G__31535__a.length) {G__31535__a[G__31535__i] = arguments[G__31535__i + 0]; ++G__31535__i;}
  args = new cljs.core.IndexedSeq(G__31535__a,0,null);
} 
return G__31534__delegate.call(this,args);};
G__31534.cljs$lang$maxFixedArity = 0;
G__31534.cljs$lang$applyTo = (function (arglist__31536){
var args = cljs.core.seq(arglist__31536);
return G__31534__delegate(args);
});
G__31534.cljs$core$IFn$_invoke$arity$variadic = G__31534__delegate;
return G__31534;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
