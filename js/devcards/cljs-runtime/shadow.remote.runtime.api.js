goog.provide('shadow.remote.runtime.api');
goog.require('cljs.core');

/**
 * @interface
 */
shadow.remote.runtime.api.IRuntime = function(){};

shadow.remote.runtime.api.relay_msg = (function shadow$remote$runtime$api$relay_msg(runtime,msg){
if((((!((runtime == null)))) && ((!((runtime.shadow$remote$runtime$api$IRuntime$relay_msg$arity$2 == null)))))){
return runtime.shadow$remote$runtime$api$IRuntime$relay_msg$arity$2(runtime,msg);
} else {
var x__4487__auto__ = (((runtime == null))?null:runtime);
var m__4488__auto__ = (shadow.remote.runtime.api.relay_msg[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(runtime,msg) : m__4488__auto__.call(null,runtime,msg));
} else {
var m__4485__auto__ = (shadow.remote.runtime.api.relay_msg["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(runtime,msg) : m__4485__auto__.call(null,runtime,msg));
} else {
throw cljs.core.missing_protocol("IRuntime.relay-msg",runtime);
}
}
}
});

shadow.remote.runtime.api.add_extension = (function shadow$remote$runtime$api$add_extension(runtime,key,spec){
if((((!((runtime == null)))) && ((!((runtime.shadow$remote$runtime$api$IRuntime$add_extension$arity$3 == null)))))){
return runtime.shadow$remote$runtime$api$IRuntime$add_extension$arity$3(runtime,key,spec);
} else {
var x__4487__auto__ = (((runtime == null))?null:runtime);
var m__4488__auto__ = (shadow.remote.runtime.api.add_extension[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(runtime,key,spec) : m__4488__auto__.call(null,runtime,key,spec));
} else {
var m__4485__auto__ = (shadow.remote.runtime.api.add_extension["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(runtime,key,spec) : m__4485__auto__.call(null,runtime,key,spec));
} else {
throw cljs.core.missing_protocol("IRuntime.add-extension",runtime);
}
}
}
});

shadow.remote.runtime.api.del_extension = (function shadow$remote$runtime$api$del_extension(runtime,key){
if((((!((runtime == null)))) && ((!((runtime.shadow$remote$runtime$api$IRuntime$del_extension$arity$2 == null)))))){
return runtime.shadow$remote$runtime$api$IRuntime$del_extension$arity$2(runtime,key);
} else {
var x__4487__auto__ = (((runtime == null))?null:runtime);
var m__4488__auto__ = (shadow.remote.runtime.api.del_extension[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(runtime,key) : m__4488__auto__.call(null,runtime,key));
} else {
var m__4485__auto__ = (shadow.remote.runtime.api.del_extension["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(runtime,key) : m__4485__auto__.call(null,runtime,key));
} else {
throw cljs.core.missing_protocol("IRuntime.del-extension",runtime);
}
}
}
});

shadow.remote.runtime.api.reply = (function shadow$remote$runtime$api$reply(runtime,p__61126,res){
var map__61127 = p__61126;
var map__61127__$1 = (((((!((map__61127 == null))))?(((((map__61127.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61127.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61127):map__61127);
var mid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61127__$1,new cljs.core.Keyword(null,"mid","mid",-2123385246));
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61127__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
var res__$1 = (function (){var G__61129 = res;
var G__61129__$1 = (cljs.core.truth_(mid)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61129,new cljs.core.Keyword(null,"mid","mid",-2123385246),mid):G__61129);
if(cljs.core.truth_(tid)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61129__$1,new cljs.core.Keyword(null,"tid","tid",-901350880),tid);
} else {
return G__61129__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});

/**
 * @interface
 */
shadow.remote.runtime.api.Inspectable = function(){};

/**
 * returns a map descriptor that tells system how to handle things further
 */
shadow.remote.runtime.api.describe = (function shadow$remote$runtime$api$describe(thing,opts){
if((((!((thing == null)))) && ((!((thing.shadow$remote$runtime$api$Inspectable$describe$arity$2 == null)))))){
return thing.shadow$remote$runtime$api$Inspectable$describe$arity$2(thing,opts);
} else {
var x__4487__auto__ = (((thing == null))?null:thing);
var m__4488__auto__ = (shadow.remote.runtime.api.describe[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(thing,opts) : m__4488__auto__.call(null,thing,opts));
} else {
var temp__5733__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(thing),new cljs.core.Symbol("shadow.remote.runtime.api","describe","shadow.remote.runtime.api/describe",1388020131,null));
if(temp__5733__auto__){
var meta_impl__4486__auto__ = temp__5733__auto__;
return (meta_impl__4486__auto__.cljs$core$IFn$_invoke$arity$2 ? meta_impl__4486__auto__.cljs$core$IFn$_invoke$arity$2(thing,opts) : meta_impl__4486__auto__.call(null,thing,opts));
} else {
var m__4485__auto__ = (shadow.remote.runtime.api.describe["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(thing,opts) : m__4485__auto__.call(null,thing,opts));
} else {
throw cljs.core.missing_protocol("Inspectable.describe",thing);
}
}
}
}
});


//# sourceMappingURL=shadow.remote.runtime.api.js.map
