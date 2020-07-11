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
var G__31335__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__31335 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31336__i = 0, G__31336__a = new Array(arguments.length -  0);
while (G__31336__i < G__31336__a.length) {G__31336__a[G__31336__i] = arguments[G__31336__i + 0]; ++G__31336__i;}
  args = new cljs.core.IndexedSeq(G__31336__a,0,null);
} 
return G__31335__delegate.call(this,args);};
G__31335.cljs$lang$maxFixedArity = 0;
G__31335.cljs$lang$applyTo = (function (arglist__31341){
var args = cljs.core.seq(arglist__31341);
return G__31335__delegate(args);
});
G__31335.cljs$core$IFn$_invoke$arity$variadic = G__31335__delegate;
return G__31335;
})()
);

(o.error = (function() { 
var G__31342__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__31342 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31343__i = 0, G__31343__a = new Array(arguments.length -  0);
while (G__31343__i < G__31343__a.length) {G__31343__a[G__31343__i] = arguments[G__31343__i + 0]; ++G__31343__i;}
  args = new cljs.core.IndexedSeq(G__31343__a,0,null);
} 
return G__31342__delegate.call(this,args);};
G__31342.cljs$lang$maxFixedArity = 0;
G__31342.cljs$lang$applyTo = (function (arglist__31344){
var args = cljs.core.seq(arglist__31344);
return G__31342__delegate(args);
});
G__31342.cljs$core$IFn$_invoke$arity$variadic = G__31342__delegate;
return G__31342;
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
