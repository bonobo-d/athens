goog.provide('shadow.remote.runtime.api');
goog.require('cljs.core');

/**
 * @interface
 */
shadow.remote.runtime.api.IRuntime = function(){};

var shadow$remote$runtime$api$IRuntime$relay_msg$dyn_59714 = (function (runtime,msg){
var x__4428__auto__ = (((runtime == null))?null:runtime);
var m__4429__auto__ = (shadow.remote.runtime.api.relay_msg[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(runtime,msg) : m__4429__auto__.call(null,runtime,msg));
} else {
var m__4426__auto__ = (shadow.remote.runtime.api.relay_msg["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(runtime,msg) : m__4426__auto__.call(null,runtime,msg));
} else {
throw cljs.core.missing_protocol("IRuntime.relay-msg",runtime);
}
}
});
shadow.remote.runtime.api.relay_msg = (function shadow$remote$runtime$api$relay_msg(runtime,msg){
if((((!((runtime == null)))) && ((!((runtime.shadow$remote$runtime$api$IRuntime$relay_msg$arity$2 == null)))))){
return runtime.shadow$remote$runtime$api$IRuntime$relay_msg$arity$2(runtime,msg);
} else {
return shadow$remote$runtime$api$IRuntime$relay_msg$dyn_59714(runtime,msg);
}
});

var shadow$remote$runtime$api$IRuntime$add_extension$dyn_59715 = (function (runtime,key,spec){
var x__4428__auto__ = (((runtime == null))?null:runtime);
var m__4429__auto__ = (shadow.remote.runtime.api.add_extension[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(runtime,key,spec) : m__4429__auto__.call(null,runtime,key,spec));
} else {
var m__4426__auto__ = (shadow.remote.runtime.api.add_extension["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(runtime,key,spec) : m__4426__auto__.call(null,runtime,key,spec));
} else {
throw cljs.core.missing_protocol("IRuntime.add-extension",runtime);
}
}
});
shadow.remote.runtime.api.add_extension = (function shadow$remote$runtime$api$add_extension(runtime,key,spec){
if((((!((runtime == null)))) && ((!((runtime.shadow$remote$runtime$api$IRuntime$add_extension$arity$3 == null)))))){
return runtime.shadow$remote$runtime$api$IRuntime$add_extension$arity$3(runtime,key,spec);
} else {
return shadow$remote$runtime$api$IRuntime$add_extension$dyn_59715(runtime,key,spec);
}
});

var shadow$remote$runtime$api$IRuntime$del_extension$dyn_59716 = (function (runtime,key){
var x__4428__auto__ = (((runtime == null))?null:runtime);
var m__4429__auto__ = (shadow.remote.runtime.api.del_extension[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(runtime,key) : m__4429__auto__.call(null,runtime,key));
} else {
var m__4426__auto__ = (shadow.remote.runtime.api.del_extension["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(runtime,key) : m__4426__auto__.call(null,runtime,key));
} else {
throw cljs.core.missing_protocol("IRuntime.del-extension",runtime);
}
}
});
shadow.remote.runtime.api.del_extension = (function shadow$remote$runtime$api$del_extension(runtime,key){
if((((!((runtime == null)))) && ((!((runtime.shadow$remote$runtime$api$IRuntime$del_extension$arity$2 == null)))))){
return runtime.shadow$remote$runtime$api$IRuntime$del_extension$arity$2(runtime,key);
} else {
return shadow$remote$runtime$api$IRuntime$del_extension$dyn_59716(runtime,key);
}
});

shadow.remote.runtime.api.reply = (function shadow$remote$runtime$api$reply(runtime,p__59710,res){
var map__59711 = p__59710;
var map__59711__$1 = (((((!((map__59711 == null))))?(((((map__59711.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59711.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59711):map__59711);
var mid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59711__$1,new cljs.core.Keyword(null,"mid","mid",-2123385246));
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59711__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
var res__$1 = (function (){var G__59713 = res;
var G__59713__$1 = (cljs.core.truth_(mid)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59713,new cljs.core.Keyword(null,"mid","mid",-2123385246),mid):G__59713);
if(cljs.core.truth_(tid)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59713__$1,new cljs.core.Keyword(null,"tid","tid",-901350880),tid);
} else {
return G__59713__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});

/**
 * @interface
 */
shadow.remote.runtime.api.Inspectable = function(){};

var shadow$remote$runtime$api$Inspectable$describe$dyn_59717 = (function (thing,opts){
var x__4428__auto__ = (((thing == null))?null:thing);
var m__4429__auto__ = (shadow.remote.runtime.api.describe[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(thing,opts) : m__4429__auto__.call(null,thing,opts));
} else {
var temp__5733__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(thing),cljs.core.with_meta(new cljs.core.Symbol("shadow.remote.runtime.api","describe","shadow.remote.runtime.api/describe",1388020131,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true], null)));
if(temp__5733__auto__){
var meta_impl__4427__auto__ = temp__5733__auto__;
return (meta_impl__4427__auto__.cljs$core$IFn$_invoke$arity$2 ? meta_impl__4427__auto__.cljs$core$IFn$_invoke$arity$2(thing,opts) : meta_impl__4427__auto__.call(null,thing,opts));
} else {
var m__4426__auto__ = (shadow.remote.runtime.api.describe["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(thing,opts) : m__4426__auto__.call(null,thing,opts));
} else {
throw cljs.core.missing_protocol("Inspectable.describe",thing);
}
}
}
});
/**
 * returns a map descriptor that tells system how to handle things further
 */
shadow.remote.runtime.api.describe = (function shadow$remote$runtime$api$describe(thing,opts){
if((((!((thing == null)))) && ((!((thing.shadow$remote$runtime$api$Inspectable$describe$arity$2 == null)))))){
return thing.shadow$remote$runtime$api$Inspectable$describe$arity$2(thing,opts);
} else {
return shadow$remote$runtime$api$Inspectable$describe$dyn_59717(thing,opts);
}
});


//# sourceMappingURL=shadow.remote.runtime.api.js.map
