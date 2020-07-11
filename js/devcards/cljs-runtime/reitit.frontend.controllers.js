goog.provide('reitit.frontend.controllers');
goog.require('cljs.core');
reitit.frontend.controllers.pad_same_length = (function reitit$frontend$controllers$pad_same_length(a,b){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(a,cljs.core.take.cljs$core$IFn$_invoke$arity$2((cljs.core.count(b) - cljs.core.count(a)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null)));
});
reitit.frontend.controllers.params_warning = (new cljs.core.Delay((function (){
return console.warn("Reitit-frontend controller :params is deprecated. Replace with :identity or :parameters option.");
}),null));
/**
 * Get controller identity given controller and match.
 * 
 *   To select interesting properties from Match :parameters option can be set.
 *   Value should be param-type => [param-key]
 *   Resulting value is map of param-type => param-key => value.
 * 
 *   For other uses, :identity option can be used to provide function from
 *   Match to identity.
 * 
 *   Default value is nil, i.e. controller identity doesn't depend on Match.
 */
reitit.frontend.controllers.get_identity = (function reitit$frontend$controllers$get_identity(p__50224,match){
var map__50225 = p__50224;
var map__50225__$1 = (((((!((map__50225 == null))))?(((((map__50225.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50225.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50225):map__50225);
var identity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50225__$1,new cljs.core.Keyword(null,"identity","identity",1647396035));
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50225__$1,new cljs.core.Keyword(null,"parameters","parameters",-1229919748));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50225__$1,new cljs.core.Keyword(null,"params","params",710516235));
if(cljs.core.not((function (){var and__4174__auto__ = identity;
if(cljs.core.truth_(and__4174__auto__)){
return parameters;
} else {
return and__4174__auto__;
}
})())){
} else {
throw (new Error(["Assert failed: ","Use either :identity or :parameters for controller, not both.","\n","(not (and identity parameters))"].join('')));
}

if(cljs.core.truth_(params)){
cljs.core.deref(reitit.frontend.controllers.params_warning);
} else {
}

if(cljs.core.truth_(parameters)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4582__auto__ = (function reitit$frontend$controllers$get_identity_$_iter__50227(s__50228){
return (new cljs.core.LazySeq(null,(function (){
var s__50228__$1 = s__50228;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__50228__$1);
if(temp__5735__auto__){
var s__50228__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__50228__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__50228__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__50230 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__50229 = (0);
while(true){
if((i__50229 < size__4581__auto__)){
var vec__50231 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__50229);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50231,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50231,(1),null);
cljs.core.chunk_append(b__50230,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null));

var G__50249 = (i__50229 + (1));
i__50229 = G__50249;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50230),reitit$frontend$controllers$get_identity_$_iter__50227(cljs.core.chunk_rest(s__50228__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50230),null);
}
} else {
var vec__50234 = cljs.core.first(s__50228__$2);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50234,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50234,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null),reitit$frontend$controllers$get_identity_$_iter__50227(cljs.core.rest(s__50228__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(parameters);
})());
} else {
if(cljs.core.truth_(identity)){
return (identity.cljs$core$IFn$_invoke$arity$1 ? identity.cljs$core$IFn$_invoke$arity$1(match) : identity.call(null,match));
} else {
if(cljs.core.truth_(params)){
return (params.cljs$core$IFn$_invoke$arity$1 ? params.cljs$core$IFn$_invoke$arity$1(match) : params.call(null,match));
} else {
return null;

}
}
}
});
/**
 * Run side-effects (:start or :stop) for controller.
 *   The side-effect function is called with controller identity value.
 */
reitit.frontend.controllers.apply_controller = (function reitit$frontend$controllers$apply_controller(controller,method){
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(controller,method);
if(cljs.core.truth_(temp__5735__auto__)){
var f = temp__5735__auto__;
var G__50238 = new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693).cljs$core$IFn$_invoke$arity$1(controller);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__50238) : f.call(null,G__50238));
} else {
return null;
}
});
/**
 * Applies changes between current controllers and
 *   those previously enabled. Reinitializes controllers whose
 *   identity has changed.
 */
reitit.frontend.controllers.apply_controllers = (function reitit$frontend$controllers$apply_controllers(old_controllers,new_match){
var new_controllers = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (controller){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(controller,new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693),reitit.frontend.controllers.get_identity(controller,new_match));
}),new cljs.core.Keyword(null,"controllers","controllers",-1120410624).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(new_match)));
var changed_controllers = cljs.core.vec(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (old,new$){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old,new$)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"old","old",-1825222690),old,new cljs.core.Keyword(null,"new","new",-2085437848),new$], null);
} else {
return null;
}
}),reitit.frontend.controllers.pad_same_length(old_controllers,new_controllers),reitit.frontend.controllers.pad_same_length(new_controllers,old_controllers))));
var seq__50241_50253 = cljs.core.seq(cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"old","old",-1825222690),changed_controllers)));
var chunk__50242_50254 = null;
var count__50243_50255 = (0);
var i__50244_50256 = (0);
while(true){
if((i__50244_50256 < count__50243_50255)){
var controller_50257 = chunk__50242_50254.cljs$core$IIndexed$_nth$arity$2(null,i__50244_50256);
reitit.frontend.controllers.apply_controller(controller_50257,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__50258 = seq__50241_50253;
var G__50259 = chunk__50242_50254;
var G__50260 = count__50243_50255;
var G__50261 = (i__50244_50256 + (1));
seq__50241_50253 = G__50258;
chunk__50242_50254 = G__50259;
count__50243_50255 = G__50260;
i__50244_50256 = G__50261;
continue;
} else {
var temp__5735__auto___50262 = cljs.core.seq(seq__50241_50253);
if(temp__5735__auto___50262){
var seq__50241_50263__$1 = temp__5735__auto___50262;
if(cljs.core.chunked_seq_QMARK_(seq__50241_50263__$1)){
var c__4609__auto___50264 = cljs.core.chunk_first(seq__50241_50263__$1);
var G__50265 = cljs.core.chunk_rest(seq__50241_50263__$1);
var G__50266 = c__4609__auto___50264;
var G__50267 = cljs.core.count(c__4609__auto___50264);
var G__50268 = (0);
seq__50241_50253 = G__50265;
chunk__50242_50254 = G__50266;
count__50243_50255 = G__50267;
i__50244_50256 = G__50268;
continue;
} else {
var controller_50269 = cljs.core.first(seq__50241_50263__$1);
reitit.frontend.controllers.apply_controller(controller_50269,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__50270 = cljs.core.next(seq__50241_50263__$1);
var G__50271 = null;
var G__50272 = (0);
var G__50273 = (0);
seq__50241_50253 = G__50270;
chunk__50242_50254 = G__50271;
count__50243_50255 = G__50272;
i__50244_50256 = G__50273;
continue;
}
} else {
}
}
break;
}

var seq__50245_50274 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"new","new",-2085437848),changed_controllers));
var chunk__50246_50275 = null;
var count__50247_50276 = (0);
var i__50248_50277 = (0);
while(true){
if((i__50248_50277 < count__50247_50276)){
var controller_50278 = chunk__50246_50275.cljs$core$IIndexed$_nth$arity$2(null,i__50248_50277);
reitit.frontend.controllers.apply_controller(controller_50278,new cljs.core.Keyword(null,"start","start",-355208981));


var G__50279 = seq__50245_50274;
var G__50280 = chunk__50246_50275;
var G__50281 = count__50247_50276;
var G__50282 = (i__50248_50277 + (1));
seq__50245_50274 = G__50279;
chunk__50246_50275 = G__50280;
count__50247_50276 = G__50281;
i__50248_50277 = G__50282;
continue;
} else {
var temp__5735__auto___50283 = cljs.core.seq(seq__50245_50274);
if(temp__5735__auto___50283){
var seq__50245_50284__$1 = temp__5735__auto___50283;
if(cljs.core.chunked_seq_QMARK_(seq__50245_50284__$1)){
var c__4609__auto___50285 = cljs.core.chunk_first(seq__50245_50284__$1);
var G__50286 = cljs.core.chunk_rest(seq__50245_50284__$1);
var G__50287 = c__4609__auto___50285;
var G__50288 = cljs.core.count(c__4609__auto___50285);
var G__50289 = (0);
seq__50245_50274 = G__50286;
chunk__50246_50275 = G__50287;
count__50247_50276 = G__50288;
i__50248_50277 = G__50289;
continue;
} else {
var controller_50290 = cljs.core.first(seq__50245_50284__$1);
reitit.frontend.controllers.apply_controller(controller_50290,new cljs.core.Keyword(null,"start","start",-355208981));


var G__50291 = cljs.core.next(seq__50245_50284__$1);
var G__50292 = null;
var G__50293 = (0);
var G__50294 = (0);
seq__50245_50274 = G__50291;
chunk__50246_50275 = G__50292;
count__50247_50276 = G__50293;
i__50248_50277 = G__50294;
continue;
}
} else {
}
}
break;
}

return new_controllers;
});

//# sourceMappingURL=reitit.frontend.controllers.js.map
