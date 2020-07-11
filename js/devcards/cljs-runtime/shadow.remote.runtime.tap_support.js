goog.provide('shadow.remote.runtime.tap_support');
goog.require('cljs.core');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.obj_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__60980,p__60981){
var map__60982 = p__60980;
var map__60982__$1 = (((((!((map__60982 == null))))?(((((map__60982.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60982.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60982):map__60982);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60982__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__60983 = p__60981;
var map__60983__$1 = (((((!((map__60983 == null))))?(((((map__60983.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60983.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60983):map__60983);
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60983__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.conj,tid);
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__60986,p__60987){
var map__60988 = p__60986;
var map__60988__$1 = (((((!((map__60988 == null))))?(((((map__60988.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60988.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60988):map__60988);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60988__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__60989 = p__60987;
var map__60989__$1 = (((((!((map__60989 == null))))?(((((map__60989.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60989.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60989):map__60989);
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60989__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.disj,tid);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__60994,p__60995){
var map__60996 = p__60994;
var map__60996__$1 = (((((!((map__60996 == null))))?(((((map__60996.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60996.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60996):map__60996);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60996__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60996__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__60997 = p__60995;
var map__60997__$1 = (((((!((map__60997 == null))))?(((((map__60997.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60997.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60997):map__60997);
var msg = map__60997__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__60997__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var map__61000 = obj_support;
var map__61000__$1 = (((((!((map__61000 == null))))?(((((map__61000.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61000.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61000):map__61000);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61000__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var tap_ids = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"oid","oid",-768692334),cljs.core.take.cljs$core$IFn$_invoke$arity$2(num,cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__60993_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__60993_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj-info","obj-info",-373842651),new cljs.core.Keyword(null,"added-at","added-at",-352499434)], null));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__60992_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tap","tap",-1086702463),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__60992_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj-info","obj-info",-373842651),new cljs.core.Keyword(null,"from","from",1815293044)], null)));
}),cljs.core.vals(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))))))));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__61002,tid){
var map__61003 = p__61002;
var map__61003__$1 = (((((!((map__61003 == null))))?(((((map__61003.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61003.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61003):map__61003);
var svc = map__61003__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61003__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.disj,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__61009 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__61010 = null;
var count__61011 = (0);
var i__61012 = (0);
while(true){
if((i__61012 < count__61011)){
var tid = chunk__61010.cljs$core$IIndexed$_nth$arity$2(null,i__61012);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"tid","tid",-901350880),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__61016 = seq__61009;
var G__61017 = chunk__61010;
var G__61018 = count__61011;
var G__61019 = (i__61012 + (1));
seq__61009 = G__61016;
chunk__61010 = G__61017;
count__61011 = G__61018;
i__61012 = G__61019;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__61009);
if(temp__5735__auto__){
var seq__61009__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61009__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__61009__$1);
var G__61020 = cljs.core.chunk_rest(seq__61009__$1);
var G__61021 = c__4609__auto__;
var G__61022 = cljs.core.count(c__4609__auto__);
var G__61023 = (0);
seq__61009 = G__61020;
chunk__61010 = G__61021;
count__61011 = G__61022;
i__61012 = G__61023;
continue;
} else {
var tid = cljs.core.first(seq__61009__$1);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"tid","tid",-901350880),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__61024 = cljs.core.next(seq__61009__$1);
var G__61025 = null;
var G__61026 = (0);
var G__61027 = (0);
seq__61009 = G__61024;
chunk__61010 = G__61025;
count__61011 = G__61026;
i__61012 = G__61027;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__61005_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__61005_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__61006_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__61006_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__61007_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__61007_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__61008_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__61008_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__61013){
var map__61014 = p__61013;
var map__61014__$1 = (((((!((map__61014 == null))))?(((((map__61014.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61014.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61014):map__61014);
var svc = map__61014__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61014__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61014__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
