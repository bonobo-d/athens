goog.provide('athens.devcards.right_sidebar');
goog.require('cljs.core');
goog.require('athens.views.buttons');
goog.require('athens.views.right_sidebar');
goog.require('devcards.core');
goog.require('re_frame.core');
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.right_sidebar","athens.devcards.right_sidebar",-251367266),new cljs.core.Keyword(null,"Toggle","Toggle",-1755095056)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Toggle",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.right_sidebar !== 'undefined') && (typeof athens.devcards.right_sidebar.t_athens$devcards$right_sidebar60176 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.right_sidebar.t_athens$devcards$right_sidebar60176 = (function (meta60177){
this.meta60177 = meta60177;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.right_sidebar.t_athens$devcards$right_sidebar60176.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60178,meta60177__$1){
var self__ = this;
var _60178__$1 = this;
return (new athens.devcards.right_sidebar.t_athens$devcards$right_sidebar60176(meta60177__$1));
}));

(athens.devcards.right_sidebar.t_athens$devcards$right_sidebar60176.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60178){
var self__ = this;
var _60178__$1 = this;
return self__.meta60177;
}));

(athens.devcards.right_sidebar.t_athens$devcards$right_sidebar60176.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.right_sidebar.t_athens$devcards$right_sidebar60176.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__47720__auto__,devcard_opts__47721__auto__){
var self__ = this;
var this__47720__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__47721__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__47739__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"primary","primary",817773892),true,new cljs.core.Keyword(null,"on-click-fn","on-click-fn",739785852),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("right-sidebar","toggle","right-sidebar/toggle",-1089397191)], null));
})], null),"Toggle"], null);
if(cljs.core.fn_QMARK_(v__47739__auto__)){
return (function (data_atom__47740__auto__,owner__47741__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__47739__auto__,data_atom__47740__auto__,owner__47741__auto__], null));
});
} else {
return reagent.core.as_element(v__47739__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__47721__auto__))], 0))], 0));
}));

(athens.devcards.right_sidebar.t_athens$devcards$right_sidebar60176.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta60177","meta60177",902498940,null)], null);
}));

(athens.devcards.right_sidebar.t_athens$devcards$right_sidebar60176.cljs$lang$type = true);

(athens.devcards.right_sidebar.t_athens$devcards$right_sidebar60176.cljs$lang$ctorStr = "athens.devcards.right-sidebar/t_athens$devcards$right_sidebar60176");

(athens.devcards.right_sidebar.t_athens$devcards$right_sidebar60176.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"athens.devcards.right-sidebar/t_athens$devcards$right_sidebar60176");
}));

/**
 * Positional factory function for athens.devcards.right-sidebar/t_athens$devcards$right_sidebar60176.
 */
athens.devcards.right_sidebar.__GT_t_athens$devcards$right_sidebar60176 = (function athens$devcards$right_sidebar$__GT_t_athens$devcards$right_sidebar60176(meta60177){
return (new athens.devcards.right_sidebar.t_athens$devcards$right_sidebar60176(meta60177));
});

}

return (new athens.devcards.right_sidebar.t_athens$devcards$right_sidebar60176(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.right_sidebar","athens.devcards.right_sidebar",-251367266),new cljs.core.Keyword(null,"Right-Sidebar","Right-Sidebar",-1012062233)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Right-Sidebar",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.right_sidebar !== 'undefined') && (typeof athens.devcards.right_sidebar.t_athens$devcards$right_sidebar60179 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.right_sidebar.t_athens$devcards$right_sidebar60179 = (function (meta60180){
this.meta60180 = meta60180;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.right_sidebar.t_athens$devcards$right_sidebar60179.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60181,meta60180__$1){
var self__ = this;
var _60181__$1 = this;
return (new athens.devcards.right_sidebar.t_athens$devcards$right_sidebar60179(meta60180__$1));
}));

(athens.devcards.right_sidebar.t_athens$devcards$right_sidebar60179.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60181){
var self__ = this;
var _60181__$1 = this;
return self__.meta60180;
}));

(athens.devcards.right_sidebar.t_athens$devcards$right_sidebar60179.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.right_sidebar.t_athens$devcards$right_sidebar60179.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__47720__auto__,devcard_opts__47721__auto__){
var self__ = this;
var this__47720__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__47721__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__47739__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"height","height",1025178622),"60vh",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"flex-end"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.right_sidebar.right_sidebar_component], null)], null);
if(cljs.core.fn_QMARK_(v__47739__auto__)){
return (function (data_atom__47740__auto__,owner__47741__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__47739__auto__,data_atom__47740__auto__,owner__47741__auto__], null));
});
} else {
return reagent.core.as_element(v__47739__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__47721__auto__))], 0))], 0));
}));

(athens.devcards.right_sidebar.t_athens$devcards$right_sidebar60179.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta60180","meta60180",-1114712454,null)], null);
}));

(athens.devcards.right_sidebar.t_athens$devcards$right_sidebar60179.cljs$lang$type = true);

(athens.devcards.right_sidebar.t_athens$devcards$right_sidebar60179.cljs$lang$ctorStr = "athens.devcards.right-sidebar/t_athens$devcards$right_sidebar60179");

(athens.devcards.right_sidebar.t_athens$devcards$right_sidebar60179.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"athens.devcards.right-sidebar/t_athens$devcards$right_sidebar60179");
}));

/**
 * Positional factory function for athens.devcards.right-sidebar/t_athens$devcards$right_sidebar60179.
 */
athens.devcards.right_sidebar.__GT_t_athens$devcards$right_sidebar60179 = (function athens$devcards$right_sidebar$__GT_t_athens$devcards$right_sidebar60179(meta60180){
return (new athens.devcards.right_sidebar.t_athens$devcards$right_sidebar60179(meta60180));
});

}

return (new athens.devcards.right_sidebar.t_athens$devcards$right_sidebar60179(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),false], null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));

//# sourceMappingURL=athens.devcards.right_sidebar.js.map
