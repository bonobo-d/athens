goog.provide('tick.alpha.api');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('tick.core');
goog.require('tick.format');
goog.require('tick.interval');
goog.require('clojure.set');
goog.require('java.time');
goog.require('java.time.format');
tick.alpha.api.new_time = tick.core.new_time;
tick.alpha.api.new_date = tick.core.new_date;
tick.alpha.api.unit_map = tick.core.unit_map;
tick.alpha.api.now = (function tick$alpha$api$now(){
return tick.core.now();
});
tick.alpha.api.today = (function tick$alpha$api$today(){
return tick.core.today();
});
tick.alpha.api.tomorrow = (function tick$alpha$api$tomorrow(){
return tick.core.tomorrow();
});
tick.alpha.api.yesterday = (function tick$alpha$api$yesterday(){
return tick.core.yesterday();
});
tick.alpha.api.time = (function tick$alpha$api$time(var_args){
var G__39110 = arguments.length;
switch (G__39110) {
case 0:
return tick.alpha.api.time.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.alpha.api.time.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tick.alpha.api.time.cljs$core$IFn$_invoke$arity$0 = (function (){
return tick.core.time(tick.alpha.api.now());
}));

(tick.alpha.api.time.cljs$core$IFn$_invoke$arity$1 = (function (v){
return tick.core.time(v);
}));

(tick.alpha.api.time.cljs$lang$maxFixedArity = 1);

tick.alpha.api.date = (function tick$alpha$api$date(var_args){
var G__39112 = arguments.length;
switch (G__39112) {
case 0:
return tick.alpha.api.date.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.alpha.api.date.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tick.alpha.api.date.cljs$core$IFn$_invoke$arity$0 = (function (){
return tick.alpha.api.today();
}));

(tick.alpha.api.date.cljs$core$IFn$_invoke$arity$1 = (function (v){
return tick.core.date(v);
}));

(tick.alpha.api.date.cljs$lang$maxFixedArity = 1);

tick.alpha.api.inst = (function tick$alpha$api$inst(var_args){
var G__39114 = arguments.length;
switch (G__39114) {
case 0:
return tick.alpha.api.inst.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.alpha.api.inst.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tick.alpha.api.inst.cljs$core$IFn$_invoke$arity$0 = (function (){
return tick.core.inst(tick.alpha.api.now());
}));

(tick.alpha.api.inst.cljs$core$IFn$_invoke$arity$1 = (function (v){
return tick.core.inst(v);
}));

(tick.alpha.api.inst.cljs$lang$maxFixedArity = 1);

tick.alpha.api.instant = (function tick$alpha$api$instant(var_args){
var G__39116 = arguments.length;
switch (G__39116) {
case 0:
return tick.alpha.api.instant.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.alpha.api.instant.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tick.alpha.api.instant.cljs$core$IFn$_invoke$arity$0 = (function (){
return tick.core.instant(tick.alpha.api.now());
}));

(tick.alpha.api.instant.cljs$core$IFn$_invoke$arity$1 = (function (v){
return tick.core.instant(v);
}));

(tick.alpha.api.instant.cljs$lang$maxFixedArity = 1);

tick.alpha.api.date_time = (function tick$alpha$api$date_time(var_args){
var G__39118 = arguments.length;
switch (G__39118) {
case 0:
return tick.alpha.api.date_time.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.alpha.api.date_time.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tick.alpha.api.date_time.cljs$core$IFn$_invoke$arity$0 = (function (){
return tick.core.date_time(tick.alpha.api.now());
}));

(tick.alpha.api.date_time.cljs$core$IFn$_invoke$arity$1 = (function (v){
return tick.core.date_time(v);
}));

(tick.alpha.api.date_time.cljs$lang$maxFixedArity = 1);

tick.alpha.api.offset_date_time = (function tick$alpha$api$offset_date_time(var_args){
var G__39120 = arguments.length;
switch (G__39120) {
case 0:
return tick.alpha.api.offset_date_time.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.alpha.api.offset_date_time.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tick.alpha.api.offset_date_time.cljs$core$IFn$_invoke$arity$0 = (function (){
return tick.core.offset_date_time(tick.alpha.api.now());
}));

(tick.alpha.api.offset_date_time.cljs$core$IFn$_invoke$arity$1 = (function (v){
return tick.core.offset_date_time(v);
}));

(tick.alpha.api.offset_date_time.cljs$lang$maxFixedArity = 1);

tick.alpha.api.zoned_date_time = (function tick$alpha$api$zoned_date_time(var_args){
var G__39122 = arguments.length;
switch (G__39122) {
case 0:
return tick.alpha.api.zoned_date_time.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.alpha.api.zoned_date_time.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tick.alpha.api.zoned_date_time.cljs$core$IFn$_invoke$arity$0 = (function (){
return tick.core.zoned_date_time(tick.alpha.api.now());
}));

(tick.alpha.api.zoned_date_time.cljs$core$IFn$_invoke$arity$1 = (function (v){
return tick.core.zoned_date_time(v);
}));

(tick.alpha.api.zoned_date_time.cljs$lang$maxFixedArity = 1);

tick.alpha.api.nanosecond = (function tick$alpha$api$nanosecond(t){
return tick.core.nanosecond(t);
});
tick.alpha.api.microsecond = (function tick$alpha$api$microsecond(t){
return tick.core.microsecond(t);
});
tick.alpha.api.millisecond = (function tick$alpha$api$millisecond(t){
return tick.core.millisecond(t);
});
tick.alpha.api.second = (function tick$alpha$api$second(t){
return tick.core.second(t);
});
tick.alpha.api.minute = (function tick$alpha$api$minute(t){
return tick.core.minute(t);
});
tick.alpha.api.hour = (function tick$alpha$api$hour(t){
return tick.core.hour(t);
});
tick.alpha.api.day_of_week = (function tick$alpha$api$day_of_week(var_args){
var G__39124 = arguments.length;
switch (G__39124) {
case 0:
return tick.alpha.api.day_of_week.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.alpha.api.day_of_week.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tick.alpha.api.day_of_week.cljs$core$IFn$_invoke$arity$0 = (function (){
return tick.core.day_of_week(tick.alpha.api.today());
}));

(tick.alpha.api.day_of_week.cljs$core$IFn$_invoke$arity$1 = (function (v){
return tick.core.day_of_week(v);
}));

(tick.alpha.api.day_of_week.cljs$lang$maxFixedArity = 1);

tick.alpha.api.day_of_month = (function tick$alpha$api$day_of_month(var_args){
var G__39126 = arguments.length;
switch (G__39126) {
case 0:
return tick.alpha.api.day_of_month.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.alpha.api.day_of_month.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tick.alpha.api.day_of_month.cljs$core$IFn$_invoke$arity$0 = (function (){
return tick.core.day_of_month(tick.alpha.api.today());
}));

(tick.alpha.api.day_of_month.cljs$core$IFn$_invoke$arity$1 = (function (v){
return tick.core.day_of_month(v);
}));

(tick.alpha.api.day_of_month.cljs$lang$maxFixedArity = 1);

tick.alpha.api.month = (function tick$alpha$api$month(var_args){
var G__39128 = arguments.length;
switch (G__39128) {
case 0:
return tick.alpha.api.month.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.alpha.api.month.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tick.alpha.api.month.cljs$core$IFn$_invoke$arity$0 = (function (){
return tick.core.month(tick.alpha.api.today());
}));

(tick.alpha.api.month.cljs$core$IFn$_invoke$arity$1 = (function (v){
return tick.core.month(v);
}));

(tick.alpha.api.month.cljs$lang$maxFixedArity = 1);

tick.alpha.api.year = (function tick$alpha$api$year(var_args){
var G__39130 = arguments.length;
switch (G__39130) {
case 0:
return tick.alpha.api.year.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.alpha.api.year.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tick.alpha.api.year.cljs$core$IFn$_invoke$arity$0 = (function (){
return tick.core.year(tick.alpha.api.today());
}));

(tick.alpha.api.year.cljs$core$IFn$_invoke$arity$1 = (function (v){
return tick.core.year(v);
}));

(tick.alpha.api.year.cljs$lang$maxFixedArity = 1);

tick.alpha.api.year_month = (function tick$alpha$api$year_month(var_args){
var G__39132 = arguments.length;
switch (G__39132) {
case 0:
return tick.alpha.api.year_month.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.alpha.api.year_month.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tick.alpha.api.year_month.cljs$core$IFn$_invoke$arity$0 = (function (){
return tick.core.year_month(tick.alpha.api.today());
}));

(tick.alpha.api.year_month.cljs$core$IFn$_invoke$arity$1 = (function (v){
return tick.core.year_month(v);
}));

(tick.alpha.api.year_month.cljs$lang$maxFixedArity = 1);

tick.alpha.api.zone = (function tick$alpha$api$zone(var_args){
var G__39134 = arguments.length;
switch (G__39134) {
case 0:
return tick.alpha.api.zone.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.alpha.api.zone.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tick.alpha.api.zone.cljs$core$IFn$_invoke$arity$0 = (function (){
return tick.core.current_zone();
}));

(tick.alpha.api.zone.cljs$core$IFn$_invoke$arity$1 = (function (z){
return tick.core.zone(z);
}));

(tick.alpha.api.zone.cljs$lang$maxFixedArity = 1);

tick.alpha.api.zone_offset = (function tick$alpha$api$zone_offset(var_args){
var G__39136 = arguments.length;
switch (G__39136) {
case 1:
return tick.alpha.api.zone_offset.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tick.alpha.api.zone_offset.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return tick.alpha.api.zone_offset.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tick.alpha.api.zone_offset.cljs$core$IFn$_invoke$arity$1 = (function (offset){
return tick.core.zone_offset(offset);
}));

(tick.alpha.api.zone_offset.cljs$core$IFn$_invoke$arity$2 = (function (hours,minutes){
return java.time.ZoneOffset.ofHoursMinutes(hours,minutes);
}));

(tick.alpha.api.zone_offset.cljs$core$IFn$_invoke$arity$3 = (function (hours,minutes,seconds){
return java.time.ZoneOffset.ofHoursMinutesSeconds(hours,minutes,seconds);
}));

(tick.alpha.api.zone_offset.cljs$lang$maxFixedArity = 3);

tick.alpha.api.on = (function tick$alpha$api$on(t,d){
return tick.core.on(t,tick.alpha.api.date.cljs$core$IFn$_invoke$arity$1(d));
});
tick.alpha.api.at = (function tick$alpha$api$at(d,t){
return tick.core.at(d,tick.alpha.api.time.cljs$core$IFn$_invoke$arity$1(t));
});
tick.alpha.api.in$ = (function tick$alpha$api$in(ldt,z){
return tick.core.in$(ldt,tick.alpha.api.zone.cljs$core$IFn$_invoke$arity$1(z));
});
tick.alpha.api.offset_by = (function tick$alpha$api$offset_by(ldt,offset){
return tick.core.offset_by(ldt,tick.alpha.api.zone_offset.cljs$core$IFn$_invoke$arity$1(offset));
});
tick.alpha.api.MONDAY = java.time.DayOfWeek.MONDAY;
tick.alpha.api.TUESDAY = java.time.DayOfWeek.TUESDAY;
tick.alpha.api.WEDNESDAY = java.time.DayOfWeek.WEDNESDAY;
tick.alpha.api.THURSDAY = java.time.DayOfWeek.THURSDAY;
tick.alpha.api.FRIDAY = java.time.DayOfWeek.FRIDAY;
tick.alpha.api.SATURDAY = java.time.DayOfWeek.SATURDAY;
tick.alpha.api.SUNDAY = java.time.DayOfWeek.SUNDAY;
tick.alpha.api.JANUARY = java.time.Month.JANUARY;
tick.alpha.api.FEBRUARY = java.time.Month.FEBRUARY;
tick.alpha.api.MARCH = java.time.Month.MARCH;
tick.alpha.api.APRIL = java.time.Month.APRIL;
tick.alpha.api.MAY = java.time.Month.MAY;
tick.alpha.api.JUNE = java.time.Month.JUNE;
tick.alpha.api.JULY = java.time.Month.JULY;
tick.alpha.api.AUGUST = java.time.Month.AUGUST;
tick.alpha.api.SEPTEMBER = java.time.Month.SEPTEMBER;
tick.alpha.api.OCTOBER = java.time.Month.OCTOBER;
tick.alpha.api.NOVEMBER = java.time.Month.NOVEMBER;
tick.alpha.api.DECEMBER = java.time.Month.DECEMBER;
tick.alpha.api.beginning = (function tick$alpha$api$beginning(v){
return tick.core.beginning(v);
});
tick.alpha.api.end = (function tick$alpha$api$end(v){
return tick.core.end(v);
});
tick.alpha.api.duration = (function tick$alpha$api$duration(v){
return tick.core.duration(v);
});
tick.alpha.api.coincident_QMARK_ = tick.core.coincident_QMARK_;
tick.alpha.api.noon = tick.core.noon;
tick.alpha.api.midnight = tick.core.midnight;
tick.alpha.api.midnight_QMARK_ = tick.core.midnight_QMARK_;
tick.alpha.api.epoch = tick.core.epoch;
tick.alpha.api.fields = tick.core.fields;
tick.alpha.api.with$ = tick.core.with$;
tick.alpha.api.ago = tick.core.ago;
tick.alpha.api.hence = tick.core.hence;
tick.alpha.api.UTC = tick.alpha.api.zone.cljs$core$IFn$_invoke$arity$1("UTC");
tick.alpha.api.parse = tick.core.parse;
tick.alpha.api._PLUS_ = (function tick$alpha$api$_PLUS_(var_args){
var G__39142 = arguments.length;
switch (G__39142) {
case 0:
return tick.alpha.api._PLUS_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.alpha.api._PLUS_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___39203 = arguments.length;
var i__4790__auto___39204 = (0);
while(true){
if((i__4790__auto___39204 < len__4789__auto___39203)){
args_arr__4810__auto__.push((arguments[i__4790__auto___39204]));

var G__39205 = (i__4790__auto___39204 + (1));
i__4790__auto___39204 = G__39205;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((1)),(0),null));
return tick.alpha.api._PLUS_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4811__auto__);

}
});

(tick.alpha.api._PLUS_.cljs$core$IFn$_invoke$arity$0 = (function (){
return java.time.Duration.ZERO;
}));

(tick.alpha.api._PLUS_.cljs$core$IFn$_invoke$arity$1 = (function (arg){
return arg;
}));

(tick.alpha.api._PLUS_.cljs$core$IFn$_invoke$arity$variadic = (function (arg,args){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__39137_SHARP_,p2__39138_SHARP_){
return tick.core._PLUS_(p1__39137_SHARP_,p2__39138_SHARP_);
}),arg,args);
}));

/** @this {Function} */
(tick.alpha.api._PLUS_.cljs$lang$applyTo = (function (seq39140){
var G__39141 = cljs.core.first(seq39140);
var seq39140__$1 = cljs.core.next(seq39140);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39141,seq39140__$1);
}));

(tick.alpha.api._PLUS_.cljs$lang$maxFixedArity = (1));

tick.alpha.api._ = (function tick$alpha$api$_(var_args){
var G__39148 = arguments.length;
switch (G__39148) {
case 0:
return tick.alpha.api._.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.alpha.api._.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___39207 = arguments.length;
var i__4790__auto___39208 = (0);
while(true){
if((i__4790__auto___39208 < len__4789__auto___39207)){
args_arr__4810__auto__.push((arguments[i__4790__auto___39208]));

var G__39209 = (i__4790__auto___39208 + (1));
i__4790__auto___39208 = G__39209;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((1)),(0),null));
return tick.alpha.api._.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4811__auto__);

}
});

(tick.alpha.api._.cljs$core$IFn$_invoke$arity$0 = (function (){
return java.time.Duration.ZERO;
}));

(tick.alpha.api._.cljs$core$IFn$_invoke$arity$1 = (function (arg){
return tick.core.negated(arg);
}));

(tick.alpha.api._.cljs$core$IFn$_invoke$arity$variadic = (function (arg,args){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__39143_SHARP_,p2__39144_SHARP_){
return tick.core._(p1__39143_SHARP_,p2__39144_SHARP_);
}),arg,args);
}));

/** @this {Function} */
(tick.alpha.api._.cljs$lang$applyTo = (function (seq39146){
var G__39147 = cljs.core.first(seq39146);
var seq39146__$1 = cljs.core.next(seq39146);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39147,seq39146__$1);
}));

(tick.alpha.api._.cljs$lang$maxFixedArity = (1));

tick.alpha.api.inc = (function tick$alpha$api$inc(t){
return tick.core.inc(t);
});
tick.alpha.api.dec = (function tick$alpha$api$dec(t){
return tick.core.dec(t);
});
tick.alpha.api._GT__GT_ = (function tick$alpha$api$_GT__GT_(t,amt){
return tick.core._GT__GT_(t,amt);
});
tick.alpha.api._LT__LT_ = (function tick$alpha$api$_LT__LT_(t,amt){
return tick.core._LT__LT_(t,amt);
});
tick.alpha.api.max = tick.core.max;
tick.alpha.api.min = tick.core.min;
tick.alpha.api.min_of_type = tick.core.min_of_type;
tick.alpha.api.max_of_type = tick.core.max_of_type;
tick.alpha.api.range = tick.core.range;
tick.alpha.api.int$ = (function tick$alpha$api$int(arg){
return tick.core.int$(arg);
});
tick.alpha.api.long$ = (function tick$alpha$api$long(arg){
return tick.core.long$(arg);
});
tick.alpha.api.nanos = (function tick$alpha$api$nanos(v){
return tick.core.nanos(v);
});
tick.alpha.api.micros = (function tick$alpha$api$micros(v){
return tick.core.micros(v);
});
tick.alpha.api.millis = (function tick$alpha$api$millis(v){
return tick.core.millis(v);
});
tick.alpha.api.seconds = (function tick$alpha$api$seconds(v){
return tick.core.seconds(v);
});
tick.alpha.api.minutes = (function tick$alpha$api$minutes(v){
return tick.core.minutes(v);
});
tick.alpha.api.hours = (function tick$alpha$api$hours(v){
return tick.core.hours(v);
});
tick.alpha.api.days = (function tick$alpha$api$days(v){
return tick.core.days(v);
});
tick.alpha.api.months = (function tick$alpha$api$months(v){
return tick.core.months(v);
});
tick.alpha.api.years = (function tick$alpha$api$years(v){
return tick.core.years(v);
});
tick.alpha.api.units = tick.core.units;
tick.alpha.api.truncate = tick.core.truncate;
tick.alpha.api._LT_ = (function tick$alpha$api$_LT_(var_args){
var G__39153 = arguments.length;
switch (G__39153) {
case 1:
return tick.alpha.api._LT_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tick.alpha.api._LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___39211 = arguments.length;
var i__4790__auto___39212 = (0);
while(true){
if((i__4790__auto___39212 < len__4789__auto___39211)){
args_arr__4810__auto__.push((arguments[i__4790__auto___39212]));

var G__39213 = (i__4790__auto___39212 + (1));
i__4790__auto___39212 = G__39213;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((2)),(0),null));
return tick.alpha.api._LT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4811__auto__);

}
});

(tick.alpha.api._LT_.cljs$core$IFn$_invoke$arity$1 = (function (x){
return true;
}));

(tick.alpha.api._LT_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return tick.core._LT_(x,y);
}));

(tick.alpha.api._LT_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){
while(true){
if(cljs.core.truth_(tick.core._LT_(x,y))){
if(cljs.core.next(more)){
var G__39214 = y;
var G__39215 = cljs.core.first(more);
var G__39216 = cljs.core.next(more);
x = G__39214;
y = G__39215;
more = G__39216;
continue;
} else {
return tick.core._LT_(y,cljs.core.first(more));
}
} else {
return false;
}
break;
}
}));

/** @this {Function} */
(tick.alpha.api._LT_.cljs$lang$applyTo = (function (seq39150){
var G__39151 = cljs.core.first(seq39150);
var seq39150__$1 = cljs.core.next(seq39150);
var G__39152 = cljs.core.first(seq39150__$1);
var seq39150__$2 = cljs.core.next(seq39150__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39151,G__39152,seq39150__$2);
}));

(tick.alpha.api._LT_.cljs$lang$maxFixedArity = (2));

tick.alpha.api._LT__EQ_ = (function tick$alpha$api$_LT__EQ_(var_args){
var G__39158 = arguments.length;
switch (G__39158) {
case 1:
return tick.alpha.api._LT__EQ_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tick.alpha.api._LT__EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___39218 = arguments.length;
var i__4790__auto___39219 = (0);
while(true){
if((i__4790__auto___39219 < len__4789__auto___39218)){
args_arr__4810__auto__.push((arguments[i__4790__auto___39219]));

var G__39220 = (i__4790__auto___39219 + (1));
i__4790__auto___39219 = G__39220;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((2)),(0),null));
return tick.alpha.api._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4811__auto__);

}
});

(tick.alpha.api._LT__EQ_.cljs$core$IFn$_invoke$arity$1 = (function (x){
return true;
}));

(tick.alpha.api._LT__EQ_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return tick.core._LT__EQ_(x,y);
}));

(tick.alpha.api._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){
while(true){
if(cljs.core.truth_(tick.core._LT__EQ_(x,y))){
if(cljs.core.next(more)){
var G__39221 = y;
var G__39222 = cljs.core.first(more);
var G__39223 = cljs.core.next(more);
x = G__39221;
y = G__39222;
more = G__39223;
continue;
} else {
return tick.core._LT__EQ_(y,cljs.core.first(more));
}
} else {
return false;
}
break;
}
}));

/** @this {Function} */
(tick.alpha.api._LT__EQ_.cljs$lang$applyTo = (function (seq39155){
var G__39156 = cljs.core.first(seq39155);
var seq39155__$1 = cljs.core.next(seq39155);
var G__39157 = cljs.core.first(seq39155__$1);
var seq39155__$2 = cljs.core.next(seq39155__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39156,G__39157,seq39155__$2);
}));

(tick.alpha.api._LT__EQ_.cljs$lang$maxFixedArity = (2));

tick.alpha.api._GT_ = (function tick$alpha$api$_GT_(var_args){
var G__39163 = arguments.length;
switch (G__39163) {
case 1:
return tick.alpha.api._GT_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tick.alpha.api._GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___39225 = arguments.length;
var i__4790__auto___39226 = (0);
while(true){
if((i__4790__auto___39226 < len__4789__auto___39225)){
args_arr__4810__auto__.push((arguments[i__4790__auto___39226]));

var G__39227 = (i__4790__auto___39226 + (1));
i__4790__auto___39226 = G__39227;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((2)),(0),null));
return tick.alpha.api._GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4811__auto__);

}
});

(tick.alpha.api._GT_.cljs$core$IFn$_invoke$arity$1 = (function (x){
return true;
}));

(tick.alpha.api._GT_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return tick.core._GT_(x,y);
}));

(tick.alpha.api._GT_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){
while(true){
if(cljs.core.truth_(tick.core._GT_(x,y))){
if(cljs.core.next(more)){
var G__39228 = y;
var G__39229 = cljs.core.first(more);
var G__39230 = cljs.core.next(more);
x = G__39228;
y = G__39229;
more = G__39230;
continue;
} else {
return tick.core._GT_(y,cljs.core.first(more));
}
} else {
return false;
}
break;
}
}));

/** @this {Function} */
(tick.alpha.api._GT_.cljs$lang$applyTo = (function (seq39160){
var G__39161 = cljs.core.first(seq39160);
var seq39160__$1 = cljs.core.next(seq39160);
var G__39162 = cljs.core.first(seq39160__$1);
var seq39160__$2 = cljs.core.next(seq39160__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39161,G__39162,seq39160__$2);
}));

(tick.alpha.api._GT_.cljs$lang$maxFixedArity = (2));

tick.alpha.api._GT__EQ_ = (function tick$alpha$api$_GT__EQ_(var_args){
var G__39168 = arguments.length;
switch (G__39168) {
case 1:
return tick.alpha.api._GT__EQ_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tick.alpha.api._GT__EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___39232 = arguments.length;
var i__4790__auto___39233 = (0);
while(true){
if((i__4790__auto___39233 < len__4789__auto___39232)){
args_arr__4810__auto__.push((arguments[i__4790__auto___39233]));

var G__39234 = (i__4790__auto___39233 + (1));
i__4790__auto___39233 = G__39234;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((2)),(0),null));
return tick.alpha.api._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4811__auto__);

}
});

(tick.alpha.api._GT__EQ_.cljs$core$IFn$_invoke$arity$1 = (function (x){
return true;
}));

(tick.alpha.api._GT__EQ_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return tick.core._GT__EQ_(x,y);
}));

(tick.alpha.api._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){
while(true){
if(cljs.core.truth_(tick.core._GT__EQ_(x,y))){
if(cljs.core.next(more)){
var G__39235 = y;
var G__39236 = cljs.core.first(more);
var G__39237 = cljs.core.next(more);
x = G__39235;
y = G__39236;
more = G__39237;
continue;
} else {
return tick.core._GT__EQ_(y,cljs.core.first(more));
}
} else {
return false;
}
break;
}
}));

/** @this {Function} */
(tick.alpha.api._GT__EQ_.cljs$lang$applyTo = (function (seq39165){
var G__39166 = cljs.core.first(seq39165);
var seq39165__$1 = cljs.core.next(seq39165);
var G__39167 = cljs.core.first(seq39165__$1);
var seq39165__$2 = cljs.core.next(seq39165__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39166,G__39167,seq39165__$2);
}));

(tick.alpha.api._GT__EQ_.cljs$lang$maxFixedArity = (2));

tick.alpha.api.clock = (function tick$alpha$api$clock(var_args){
var G__39170 = arguments.length;
switch (G__39170) {
case 0:
return tick.alpha.api.clock.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.alpha.api.clock.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tick.alpha.api.clock.cljs$core$IFn$_invoke$arity$0 = (function (){
return tick.core.current_clock();
}));

(tick.alpha.api.clock.cljs$core$IFn$_invoke$arity$1 = (function (i){
return tick.core.clock(i);
}));

(tick.alpha.api.clock.cljs$lang$maxFixedArity = 1);

tick.alpha.api.atom = tick.core.atom;
tick.alpha.api.swap_BANG_ = tick.core.swap_BANG_;
tick.alpha.api.swap_vals_BANG_ = tick.core.swap_vals_BANG_;
tick.alpha.api.compare_and_set_BANG_ = tick.core.compare_and_set_BANG_;
tick.alpha.api.reset_BANG_ = tick.core.reset_BANG_;
tick.alpha.api.reset_vals_BANG_ = tick.core.reset_vals_BANG_;
tick.alpha.api.new_interval = (function tick$alpha$api$new_interval(x,y){
return tick.interval.new_interval(x,y);
});
tick.alpha.api.extend = (function tick$alpha$api$extend(var_args){
var args__4795__auto__ = [];
var len__4789__auto___39239 = arguments.length;
var i__4790__auto___39240 = (0);
while(true){
if((i__4790__auto___39240 < len__4789__auto___39239)){
args__4795__auto__.push((arguments[i__4790__auto___39240]));

var G__39241 = (i__4790__auto___39240 + (1));
i__4790__auto___39240 = G__39241;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return tick.alpha.api.extend.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(tick.alpha.api.extend.cljs$core$IFn$_invoke$arity$variadic = (function (ival,durations){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(tick.interval.extend,ival,durations);
}));

(tick.alpha.api.extend.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(tick.alpha.api.extend.cljs$lang$applyTo = (function (seq39171){
var G__39172 = cljs.core.first(seq39171);
var seq39171__$1 = cljs.core.next(seq39171);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39172,seq39171__$1);
}));

tick.alpha.api.scale = (function tick$alpha$api$scale(var_args){
var args__4795__auto__ = [];
var len__4789__auto___39242 = arguments.length;
var i__4790__auto___39243 = (0);
while(true){
if((i__4790__auto___39243 < len__4789__auto___39242)){
args__4795__auto__.push((arguments[i__4790__auto___39243]));

var G__39244 = (i__4790__auto___39243 + (1));
i__4790__auto___39243 = G__39244;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return tick.alpha.api.scale.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(tick.alpha.api.scale.cljs$core$IFn$_invoke$arity$variadic = (function (ival,durations){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(tick.interval.extend,ival,durations);
}));

(tick.alpha.api.scale.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(tick.alpha.api.scale.cljs$lang$applyTo = (function (seq39173){
var G__39174 = cljs.core.first(seq39173);
var seq39173__$1 = cljs.core.next(seq39173);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39174,seq39173__$1);
}));

/**
 * Return an interval which forms the bounding-box of the given arguments.
 */
tick.alpha.api.bounds = tick.interval.bounds;
tick.alpha.api.am = (function tick$alpha$api$am(date){
return tick.interval.am(date);
});
tick.alpha.api.pm = (function tick$alpha$api$pm(date){
return tick.interval.pm(date);
});
tick.alpha.api.relation = (function tick$alpha$api$relation(i1,i2){
return tick.interval.relation(i1,i2);
});
tick.alpha.api.new_duration = (function tick$alpha$api$new_duration(n,u){
return tick.core.new_duration(n,u);
});
tick.alpha.api.new_period = (function tick$alpha$api$new_period(n,u){
return tick.core.new_period(n,u);
});
tick.alpha.api.between = (function tick$alpha$api$between(v1,v2){
return tick.core.between(v1,v2);
});
tick.alpha.api.concur = (function tick$alpha$api$concur(var_args){
var G__39178 = arguments.length;
switch (G__39178) {
case 0:
return tick.alpha.api.concur.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.alpha.api.concur.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___39246 = arguments.length;
var i__4790__auto___39247 = (0);
while(true){
if((i__4790__auto___39247 < len__4789__auto___39246)){
args_arr__4810__auto__.push((arguments[i__4790__auto___39247]));

var G__39248 = (i__4790__auto___39247 + (1));
i__4790__auto___39247 = G__39248;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((1)),(0),null));
return tick.alpha.api.concur.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4811__auto__);

}
});

(tick.alpha.api.concur.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
}));

(tick.alpha.api.concur.cljs$core$IFn$_invoke$arity$1 = (function (x){
return x;
}));

(tick.alpha.api.concur.cljs$core$IFn$_invoke$arity$variadic = (function (x,args){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(tick.interval.concur,x,args);
}));

/** @this {Function} */
(tick.alpha.api.concur.cljs$lang$applyTo = (function (seq39176){
var G__39177 = cljs.core.first(seq39176);
var seq39176__$1 = cljs.core.next(seq39176);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39177,seq39176__$1);
}));

(tick.alpha.api.concur.cljs$lang$maxFixedArity = (1));

tick.alpha.api.concurrencies = (function tick$alpha$api$concurrencies(var_args){
var args__4795__auto__ = [];
var len__4789__auto___39249 = arguments.length;
var i__4790__auto___39250 = (0);
while(true){
if((i__4790__auto___39250 < len__4789__auto___39249)){
args__4795__auto__.push((arguments[i__4790__auto___39250]));

var G__39251 = (i__4790__auto___39250 + (1));
i__4790__auto___39250 = G__39251;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return tick.alpha.api.concurrencies.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(tick.alpha.api.concurrencies.cljs$core$IFn$_invoke$arity$variadic = (function (intervals){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(tick.interval.concurrencies,intervals);
}));

(tick.alpha.api.concurrencies.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(tick.alpha.api.concurrencies.cljs$lang$applyTo = (function (seq39179){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq39179));
}));

tick.alpha.api.divide_by = (function tick$alpha$api$divide_by(divisor,t){
return tick.core.divide(t,divisor);
});
tick.alpha.api.divide = (function tick$alpha$api$divide(t,divisor){
return tick.core.divide(t,divisor);
});
tick.alpha.api.ordered_disjoint_intervals_QMARK_ = tick.interval.ordered_disjoint_intervals_QMARK_;
tick.alpha.api.unite = tick.interval.unite;
tick.alpha.api.normalize = tick.interval.normalize;
tick.alpha.api.union = tick.interval.union;
tick.alpha.api.conj = tick.interval.conj;
tick.alpha.api.intersection = tick.interval.intersection;
tick.alpha.api.intersects_QMARK_ = tick.interval.intersects_QMARK_;
tick.alpha.api.difference = tick.interval.difference;
tick.alpha.api.complement = tick.interval.complement;
tick.alpha.api.group_by = tick.interval.group_by;
tick.alpha.api.format = (function tick$alpha$api$format(var_args){
var G__39181 = arguments.length;
switch (G__39181) {
case 1:
return tick.alpha.api.format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tick.alpha.api.format.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tick.alpha.api.format.cljs$core$IFn$_invoke$arity$1 = (function (o){
return tick.format.format.cljs$core$IFn$_invoke$arity$1(o);
}));

(tick.alpha.api.format.cljs$core$IFn$_invoke$arity$2 = (function (fmt,o){
return tick.format.format.cljs$core$IFn$_invoke$arity$2(fmt,o);
}));

(tick.alpha.api.format.cljs$lang$maxFixedArity = 2);

/**
 * Constructs a DateTimeFormatter out of either a
 * 
 *   * format string - "YYYY/mm/DD" "YYY HH:MM" etc.
 *   or
 *   * formatter name - :iso-instant :iso-date etc
 */
tick.alpha.api.formatter = (function tick$alpha$api$formatter(var_args){
var G__39183 = arguments.length;
switch (G__39183) {
case 1:
return tick.alpha.api.formatter.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tick.alpha.api.formatter.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tick.alpha.api.formatter.cljs$core$IFn$_invoke$arity$1 = (function (fmt){
return tick.format.formatter.cljs$core$IFn$_invoke$arity$1(fmt);
}));

(tick.alpha.api.formatter.cljs$core$IFn$_invoke$arity$2 = (function (fmt,locale){
return tick.format.formatter.cljs$core$IFn$_invoke$arity$2(fmt,locale);
}));

(tick.alpha.api.formatter.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=tick.alpha.api.js.map
