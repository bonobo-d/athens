goog.provide('day8.re_frame.forward_events_fx');
goog.require('cljs.core');
goog.require('re_frame.core');
/**
 * Looks at the required-events items and returns a predicate which
 *   will either
 *   - match only the event-keyword if a keyword is supplied
 *   - match the entire event vector if a collection is supplied
 *   - returns a callback-pred if it is a fn
 */
day8.re_frame.forward_events_fx.as_callback_pred = (function day8$re_frame$forward_events_fx$as_callback_pred(callback_pred){
if(cljs.core.truth_(callback_pred)){
if(cljs.core.fn_QMARK_(callback_pred)){
return callback_pred;
} else {
if((callback_pred instanceof cljs.core.Keyword)){
return (function (p__61734){
var vec__61735 = p__61734;
var event_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61735,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61735,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(callback_pred,event_id);
});
} else {
if(cljs.core.coll_QMARK_(callback_pred)){
return (function (event_v){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(callback_pred,event_v);
});
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([callback_pred], 0))," isn't an event predicate"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"callback-pred","callback-pred",90867475),callback_pred], null));

}
}
}
} else {
return null;
}
});
var G__61738_61747 = new cljs.core.Keyword(null,"forward-events","forward-events",1216790539);
var G__61739_61748 = (function (){var process_one_entry = (function (p__61740){
var map__61741 = p__61740;
var map__61741__$1 = (((((!((map__61741 == null))))?(((((map__61741.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61741.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61741):map__61741);
var m = map__61741__$1;
var unregister = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61741__$1,new cljs.core.Keyword(null,"unregister","unregister",2105339971));
var register = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61741__$1,new cljs.core.Keyword(null,"register","register",1968522516));
var events = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61741__$1,new cljs.core.Keyword(null,"events","events",1792552201));
var dispatch_to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61741__$1,new cljs.core.Keyword(null,"dispatch-to","dispatch-to",-354764401));
var _ = ((cljs.core.map_QMARK_(m))?null:(function(){throw (new Error(["Assert failed: ",["re-frame: effects handler for :forward-events expected a map or a list of maps. Got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join(''),"\n","(map? m)"].join('')))})());
var ___$1 = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"unregister","unregister",2105339971),null], null), null),cljs.core.set(cljs.core.keys(m)))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"events","events",1792552201),null,new cljs.core.Keyword(null,"dispatch-to","dispatch-to",-354764401),null,new cljs.core.Keyword(null,"register","register",1968522516),null], null), null),cljs.core.set(cljs.core.keys(m))))))?null:(function(){throw (new Error(["Assert failed: ",["re-frame: effects handler for :forward-events given wrong map keys",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.set(cljs.core.keys(m)))].join(''),"\n","(or (= #{:unregister} (-> m keys set)) (= #{:events :dispatch-to :register} (-> m keys set)))"].join('')))})());
if(cljs.core.truth_(unregister)){
return re_frame.core.remove_post_event_callback(unregister);
} else {
var events_preds = cljs.core.map.cljs$core$IFn$_invoke$arity$2(day8.re_frame.forward_events_fx.as_callback_pred,events);
var post_event_callback_fn = (function (event_v,___$2){
if(cljs.core.truth_(cljs.core.some((function (pred){
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(event_v) : pred.call(null,event_v));
}),events_preds))){
var G__61743 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(dispatch_to,event_v);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__61743) : re_frame.core.dispatch.call(null,G__61743));
} else {
return null;
}
});
return re_frame.core.add_post_event_callback.cljs$core$IFn$_invoke$arity$2(register,post_event_callback_fn);
}
});
return (function (val){
if(cljs.core.map_QMARK_(val)){
return process_one_entry(val);
} else {
if(cljs.core.sequential_QMARK_(val)){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(process_one_entry,val));
} else {
var G__61744 = new cljs.core.Keyword(null,"error","error",-978969032);
var G__61745 = ":forward-events expected a map or a list of maps, but got: ";
var G__61746 = val;
return (re_frame.core.console.cljs$core$IFn$_invoke$arity$3 ? re_frame.core.console.cljs$core$IFn$_invoke$arity$3(G__61744,G__61745,G__61746) : re_frame.core.console.call(null,G__61744,G__61745,G__61746));

}
}
});
})();
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__61738_61747,G__61739_61748) : re_frame.core.reg_fx.call(null,G__61738_61747,G__61739_61748));

//# sourceMappingURL=day8.re_frame.forward_events_fx.js.map
