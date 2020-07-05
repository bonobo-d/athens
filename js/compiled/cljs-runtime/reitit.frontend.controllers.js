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
reitit.frontend.controllers.get_identity = (function reitit$frontend$controllers$get_identity(p__57973,match){
var map__57974 = p__57973;
var map__57974__$1 = (((((!((map__57974 == null))))?(((((map__57974.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57974.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57974):map__57974);
var identity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57974__$1,new cljs.core.Keyword(null,"identity","identity",1647396035));
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57974__$1,new cljs.core.Keyword(null,"parameters","parameters",-1229919748));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57974__$1,new cljs.core.Keyword(null,"params","params",710516235));
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4582__auto__ = (function reitit$frontend$controllers$get_identity_$_iter__57976(s__57977){
return (new cljs.core.LazySeq(null,(function (){
var s__57977__$1 = s__57977;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__57977__$1);
if(temp__5735__auto__){
var s__57977__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__57977__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__57977__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__57979 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__57978 = (0);
while(true){
if((i__57978 < size__4581__auto__)){
var vec__57980 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__57978);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57980,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57980,(1),null);
cljs.core.chunk_append(b__57979,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null));

var G__57998 = (i__57978 + (1));
i__57978 = G__57998;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57979),reitit$frontend$controllers$get_identity_$_iter__57976(cljs.core.chunk_rest(s__57977__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57979),null);
}
} else {
var vec__57983 = cljs.core.first(s__57977__$2);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57983,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57983,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null),reitit$frontend$controllers$get_identity_$_iter__57976(cljs.core.rest(s__57977__$2)));
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
var G__57986 = new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693).cljs$core$IFn$_invoke$arity$1(controller);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__57986) : f.call(null,G__57986));
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
var seq__57987_58000 = cljs.core.seq(cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"old","old",-1825222690),changed_controllers)));
var chunk__57988_58001 = null;
var count__57989_58002 = (0);
var i__57990_58003 = (0);
while(true){
if((i__57990_58003 < count__57989_58002)){
var controller_58004 = chunk__57988_58001.cljs$core$IIndexed$_nth$arity$2(null,i__57990_58003);
reitit.frontend.controllers.apply_controller(controller_58004,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__58005 = seq__57987_58000;
var G__58006 = chunk__57988_58001;
var G__58007 = count__57989_58002;
var G__58008 = (i__57990_58003 + (1));
seq__57987_58000 = G__58005;
chunk__57988_58001 = G__58006;
count__57989_58002 = G__58007;
i__57990_58003 = G__58008;
continue;
} else {
var temp__5735__auto___58009 = cljs.core.seq(seq__57987_58000);
if(temp__5735__auto___58009){
var seq__57987_58010__$1 = temp__5735__auto___58009;
if(cljs.core.chunked_seq_QMARK_(seq__57987_58010__$1)){
var c__4609__auto___58011 = cljs.core.chunk_first(seq__57987_58010__$1);
var G__58012 = cljs.core.chunk_rest(seq__57987_58010__$1);
var G__58013 = c__4609__auto___58011;
var G__58014 = cljs.core.count(c__4609__auto___58011);
var G__58015 = (0);
seq__57987_58000 = G__58012;
chunk__57988_58001 = G__58013;
count__57989_58002 = G__58014;
i__57990_58003 = G__58015;
continue;
} else {
var controller_58016 = cljs.core.first(seq__57987_58010__$1);
reitit.frontend.controllers.apply_controller(controller_58016,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__58017 = cljs.core.next(seq__57987_58010__$1);
var G__58018 = null;
var G__58019 = (0);
var G__58020 = (0);
seq__57987_58000 = G__58017;
chunk__57988_58001 = G__58018;
count__57989_58002 = G__58019;
i__57990_58003 = G__58020;
continue;
}
} else {
}
}
break;
}

var seq__57991_58021 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"new","new",-2085437848),changed_controllers));
var chunk__57992_58022 = null;
var count__57993_58023 = (0);
var i__57994_58024 = (0);
while(true){
if((i__57994_58024 < count__57993_58023)){
var controller_58025 = chunk__57992_58022.cljs$core$IIndexed$_nth$arity$2(null,i__57994_58024);
reitit.frontend.controllers.apply_controller(controller_58025,new cljs.core.Keyword(null,"start","start",-355208981));


var G__58026 = seq__57991_58021;
var G__58027 = chunk__57992_58022;
var G__58028 = count__57993_58023;
var G__58029 = (i__57994_58024 + (1));
seq__57991_58021 = G__58026;
chunk__57992_58022 = G__58027;
count__57993_58023 = G__58028;
i__57994_58024 = G__58029;
continue;
} else {
var temp__5735__auto___58030 = cljs.core.seq(seq__57991_58021);
if(temp__5735__auto___58030){
var seq__57991_58031__$1 = temp__5735__auto___58030;
if(cljs.core.chunked_seq_QMARK_(seq__57991_58031__$1)){
var c__4609__auto___58032 = cljs.core.chunk_first(seq__57991_58031__$1);
var G__58033 = cljs.core.chunk_rest(seq__57991_58031__$1);
var G__58034 = c__4609__auto___58032;
var G__58035 = cljs.core.count(c__4609__auto___58032);
var G__58036 = (0);
seq__57991_58021 = G__58033;
chunk__57992_58022 = G__58034;
count__57993_58023 = G__58035;
i__57994_58024 = G__58036;
continue;
} else {
var controller_58037 = cljs.core.first(seq__57991_58031__$1);
reitit.frontend.controllers.apply_controller(controller_58037,new cljs.core.Keyword(null,"start","start",-355208981));


var G__58038 = cljs.core.next(seq__57991_58031__$1);
var G__58039 = null;
var G__58040 = (0);
var G__58041 = (0);
seq__57991_58021 = G__58038;
chunk__57992_58022 = G__58039;
count__57993_58023 = G__58040;
i__57994_58024 = G__58041;
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
