goog.provide('shadow.remote.runtime.tap_support');
goog.require('cljs.core');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.obj_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__59948,p__59949){
var map__59950 = p__59948;
var map__59950__$1 = (((((!((map__59950 == null))))?(((((map__59950.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59950.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59950):map__59950);
var svc = map__59950__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59950__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59950__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59950__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__59951 = p__59949;
var map__59951__$1 = (((((!((map__59951 == null))))?(((((map__59951.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59951.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59951):map__59951);
var msg = map__59951__$1;
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59951__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59951__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59951__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__59951__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,tid,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__59954,p__59955){
var map__59956 = p__59954;
var map__59956__$1 = (((((!((map__59956 == null))))?(((((map__59956.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59956.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59956):map__59956);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59956__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__59957 = p__59955;
var map__59957__$1 = (((((!((map__59957 == null))))?(((((map__59957.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59957.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59957):map__59957);
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59957__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__59960,p__59961){
var map__59962 = p__59960;
var map__59962__$1 = (((((!((map__59962 == null))))?(((((map__59962.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59962.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59962):map__59962);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59962__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59962__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__59963 = p__59961;
var map__59963__$1 = (((((!((map__59963 == null))))?(((((map__59963.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59963.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59963):map__59963);
var msg = map__59963__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__59963__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__59966,tid){
var map__59967 = p__59966;
var map__59967__$1 = (((((!((map__59967 == null))))?(((((map__59967.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59967.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59967):map__59967);
var svc = map__59967__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59967__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__59973 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__59974 = null;
var count__59975 = (0);
var i__59976 = (0);
while(true){
if((i__59976 < count__59975)){
var vec__59983 = chunk__59974.cljs$core$IIndexed$_nth$arity$2(null,i__59976);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59983,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59983,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"tid","tid",-901350880),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__59992 = seq__59973;
var G__59993 = chunk__59974;
var G__59994 = count__59975;
var G__59995 = (i__59976 + (1));
seq__59973 = G__59992;
chunk__59974 = G__59993;
count__59975 = G__59994;
i__59976 = G__59995;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__59973);
if(temp__5735__auto__){
var seq__59973__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59973__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__59973__$1);
var G__59996 = cljs.core.chunk_rest(seq__59973__$1);
var G__59997 = c__4556__auto__;
var G__59998 = cljs.core.count(c__4556__auto__);
var G__59999 = (0);
seq__59973 = G__59996;
chunk__59974 = G__59997;
count__59975 = G__59998;
i__59976 = G__59999;
continue;
} else {
var vec__59986 = cljs.core.first(seq__59973__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59986,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59986,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"tid","tid",-901350880),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__60000 = cljs.core.next(seq__59973__$1);
var G__60001 = null;
var G__60002 = (0);
var G__60003 = (0);
seq__59973 = G__60000;
chunk__59974 = G__60001;
count__59975 = G__60002;
i__59976 = G__60003;
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
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__59969_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__59969_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__59970_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__59970_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__59971_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__59971_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__59972_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__59972_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__59989){
var map__59990 = p__59989;
var map__59990__$1 = (((((!((map__59990 == null))))?(((((map__59990.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59990.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59990):map__59990);
var svc = map__59990__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59990__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59990__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
