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
reitit.frontend.controllers.get_identity = (function reitit$frontend$controllers$get_identity(p__55648,match){
var map__55649 = p__55648;
var map__55649__$1 = (((((!((map__55649 == null))))?(((((map__55649.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55649.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55649):map__55649);
var identity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55649__$1,new cljs.core.Keyword(null,"identity","identity",1647396035));
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55649__$1,new cljs.core.Keyword(null,"parameters","parameters",-1229919748));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55649__$1,new cljs.core.Keyword(null,"params","params",710516235));
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4582__auto__ = (function reitit$frontend$controllers$get_identity_$_iter__55651(s__55652){
return (new cljs.core.LazySeq(null,(function (){
var s__55652__$1 = s__55652;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__55652__$1);
if(temp__5735__auto__){
var s__55652__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__55652__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__55652__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__55654 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__55653 = (0);
while(true){
if((i__55653 < size__4581__auto__)){
var vec__55655 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__55653);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55655,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55655,(1),null);
cljs.core.chunk_append(b__55654,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null));

var G__55673 = (i__55653 + (1));
i__55653 = G__55673;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__55654),reitit$frontend$controllers$get_identity_$_iter__55651(cljs.core.chunk_rest(s__55652__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__55654),null);
}
} else {
var vec__55658 = cljs.core.first(s__55652__$2);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55658,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55658,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null),reitit$frontend$controllers$get_identity_$_iter__55651(cljs.core.rest(s__55652__$2)));
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
var G__55661 = new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693).cljs$core$IFn$_invoke$arity$1(controller);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__55661) : f.call(null,G__55661));
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
var seq__55662_55674 = cljs.core.seq(cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"old","old",-1825222690),changed_controllers)));
var chunk__55663_55675 = null;
var count__55664_55676 = (0);
var i__55665_55677 = (0);
while(true){
if((i__55665_55677 < count__55664_55676)){
var controller_55678 = chunk__55663_55675.cljs$core$IIndexed$_nth$arity$2(null,i__55665_55677);
reitit.frontend.controllers.apply_controller(controller_55678,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__55679 = seq__55662_55674;
var G__55680 = chunk__55663_55675;
var G__55681 = count__55664_55676;
var G__55682 = (i__55665_55677 + (1));
seq__55662_55674 = G__55679;
chunk__55663_55675 = G__55680;
count__55664_55676 = G__55681;
i__55665_55677 = G__55682;
continue;
} else {
var temp__5735__auto___55683 = cljs.core.seq(seq__55662_55674);
if(temp__5735__auto___55683){
var seq__55662_55684__$1 = temp__5735__auto___55683;
if(cljs.core.chunked_seq_QMARK_(seq__55662_55684__$1)){
var c__4609__auto___55685 = cljs.core.chunk_first(seq__55662_55684__$1);
var G__55686 = cljs.core.chunk_rest(seq__55662_55684__$1);
var G__55687 = c__4609__auto___55685;
var G__55688 = cljs.core.count(c__4609__auto___55685);
var G__55689 = (0);
seq__55662_55674 = G__55686;
chunk__55663_55675 = G__55687;
count__55664_55676 = G__55688;
i__55665_55677 = G__55689;
continue;
} else {
var controller_55690 = cljs.core.first(seq__55662_55684__$1);
reitit.frontend.controllers.apply_controller(controller_55690,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__55691 = cljs.core.next(seq__55662_55684__$1);
var G__55692 = null;
var G__55693 = (0);
var G__55694 = (0);
seq__55662_55674 = G__55691;
chunk__55663_55675 = G__55692;
count__55664_55676 = G__55693;
i__55665_55677 = G__55694;
continue;
}
} else {
}
}
break;
}

var seq__55668_55695 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"new","new",-2085437848),changed_controllers));
var chunk__55669_55696 = null;
var count__55670_55697 = (0);
var i__55671_55698 = (0);
while(true){
if((i__55671_55698 < count__55670_55697)){
var controller_55699 = chunk__55669_55696.cljs$core$IIndexed$_nth$arity$2(null,i__55671_55698);
reitit.frontend.controllers.apply_controller(controller_55699,new cljs.core.Keyword(null,"start","start",-355208981));


var G__55700 = seq__55668_55695;
var G__55701 = chunk__55669_55696;
var G__55702 = count__55670_55697;
var G__55703 = (i__55671_55698 + (1));
seq__55668_55695 = G__55700;
chunk__55669_55696 = G__55701;
count__55670_55697 = G__55702;
i__55671_55698 = G__55703;
continue;
} else {
var temp__5735__auto___55704 = cljs.core.seq(seq__55668_55695);
if(temp__5735__auto___55704){
var seq__55668_55706__$1 = temp__5735__auto___55704;
if(cljs.core.chunked_seq_QMARK_(seq__55668_55706__$1)){
var c__4609__auto___55707 = cljs.core.chunk_first(seq__55668_55706__$1);
var G__55708 = cljs.core.chunk_rest(seq__55668_55706__$1);
var G__55709 = c__4609__auto___55707;
var G__55710 = cljs.core.count(c__4609__auto___55707);
var G__55711 = (0);
seq__55668_55695 = G__55708;
chunk__55669_55696 = G__55709;
count__55670_55697 = G__55710;
i__55671_55698 = G__55711;
continue;
} else {
var controller_55712 = cljs.core.first(seq__55668_55706__$1);
reitit.frontend.controllers.apply_controller(controller_55712,new cljs.core.Keyword(null,"start","start",-355208981));


var G__55714 = cljs.core.next(seq__55668_55706__$1);
var G__55715 = null;
var G__55716 = (0);
var G__55717 = (0);
seq__55668_55695 = G__55714;
chunk__55669_55696 = G__55715;
count__55670_55697 = G__55716;
i__55671_55698 = G__55717;
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
