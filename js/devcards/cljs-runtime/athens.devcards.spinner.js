goog.provide('athens.devcards.spinner');
goog.require('cljs.core');
goog.require('athens.db');
goog.require('athens.views.spinner');
goog.require('devcards.core');
goog.require('stylefy.core');
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.spinner","athens.devcards.spinner",1269258109),new cljs.core.Keyword(null,"Default-Spinner","Default-Spinner",-290996500)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Default-Spinner",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.spinner !== 'undefined') && (typeof athens.devcards.spinner.t_athens$devcards$spinner60244 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.spinner.t_athens$devcards$spinner60244 = (function (meta60245){
this.meta60245 = meta60245;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.spinner.t_athens$devcards$spinner60244.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60246,meta60245__$1){
var self__ = this;
var _60246__$1 = this;
return (new athens.devcards.spinner.t_athens$devcards$spinner60244(meta60245__$1));
}));

(athens.devcards.spinner.t_athens$devcards$spinner60244.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60246){
var self__ = this;
var _60246__$1 = this;
return self__.meta60245;
}));

(athens.devcards.spinner.t_athens$devcards$spinner60244.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.spinner.t_athens$devcards$spinner60244.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__47720__auto__,devcard_opts__47721__auto__){
var self__ = this;
var this__47720__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__47721__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__47739__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.spinner.spinner_component,stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.views.spinner.spinner_style)], null);
if(cljs.core.fn_QMARK_(v__47739__auto__)){
return (function (data_atom__47740__auto__,owner__47741__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__47739__auto__,data_atom__47740__auto__,owner__47741__auto__], null));
});
} else {
return reagent.core.as_element(v__47739__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__47721__auto__))], 0))], 0));
}));

(athens.devcards.spinner.t_athens$devcards$spinner60244.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta60245","meta60245",-326527306,null)], null);
}));

(athens.devcards.spinner.t_athens$devcards$spinner60244.cljs$lang$type = true);

(athens.devcards.spinner.t_athens$devcards$spinner60244.cljs$lang$ctorStr = "athens.devcards.spinner/t_athens$devcards$spinner60244");

(athens.devcards.spinner.t_athens$devcards$spinner60244.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"athens.devcards.spinner/t_athens$devcards$spinner60244");
}));

/**
 * Positional factory function for athens.devcards.spinner/t_athens$devcards$spinner60244.
 */
athens.devcards.spinner.__GT_t_athens$devcards$spinner60244 = (function athens$devcards$spinner$__GT_t_athens$devcards$spinner60244(meta60245){
return (new athens.devcards.spinner.t_athens$devcards$spinner60244(meta60245));
});

}

return (new athens.devcards.spinner.t_athens$devcards$spinner60244(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.spinner","athens.devcards.spinner",1269258109),new cljs.core.Keyword(null,"Spinner-with-custom-message","Spinner-with-custom-message",-1987622770)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Spinner-with-custom-message",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.spinner !== 'undefined') && (typeof athens.devcards.spinner.t_athens$devcards$spinner60248 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.spinner.t_athens$devcards$spinner60248 = (function (meta60249){
this.meta60249 = meta60249;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.spinner.t_athens$devcards$spinner60248.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60250,meta60249__$1){
var self__ = this;
var _60250__$1 = this;
return (new athens.devcards.spinner.t_athens$devcards$spinner60248(meta60249__$1));
}));

(athens.devcards.spinner.t_athens$devcards$spinner60248.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60250){
var self__ = this;
var _60250__$1 = this;
return self__.meta60249;
}));

(athens.devcards.spinner.t_athens$devcards$spinner60248.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.spinner.t_athens$devcards$spinner60248.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__47720__auto__,devcard_opts__47721__auto__){
var self__ = this;
var this__47720__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__47721__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__47739__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.spinner.spinner_component,stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.views.spinner.spinner_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),"Custom Loading Message"], null))], null);
if(cljs.core.fn_QMARK_(v__47739__auto__)){
return (function (data_atom__47740__auto__,owner__47741__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__47739__auto__,data_atom__47740__auto__,owner__47741__auto__], null));
});
} else {
return reagent.core.as_element(v__47739__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__47721__auto__))], 0))], 0));
}));

(athens.devcards.spinner.t_athens$devcards$spinner60248.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta60249","meta60249",1585009813,null)], null);
}));

(athens.devcards.spinner.t_athens$devcards$spinner60248.cljs$lang$type = true);

(athens.devcards.spinner.t_athens$devcards$spinner60248.cljs$lang$ctorStr = "athens.devcards.spinner/t_athens$devcards$spinner60248");

(athens.devcards.spinner.t_athens$devcards$spinner60248.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"athens.devcards.spinner/t_athens$devcards$spinner60248");
}));

/**
 * Positional factory function for athens.devcards.spinner/t_athens$devcards$spinner60248.
 */
athens.devcards.spinner.__GT_t_athens$devcards$spinner60248 = (function athens$devcards$spinner$__GT_t_athens$devcards$spinner60248(meta60249){
return (new athens.devcards.spinner.t_athens$devcards$spinner60248(meta60249));
});

}

return (new athens.devcards.spinner.t_athens$devcards$spinner60248(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));

//# sourceMappingURL=athens.devcards.spinner.js.map
