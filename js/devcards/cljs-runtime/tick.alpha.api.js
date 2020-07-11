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
var G__55494 = arguments.length;
switch (G__55494) {
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
var G__55496 = arguments.length;
switch (G__55496) {
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
var G__55498 = arguments.length;
switch (G__55498) {
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
var G__55500 = arguments.length;
switch (G__55500) {
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
var G__55502 = arguments.length;
switch (G__55502) {
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
var G__55504 = arguments.length;
switch (G__55504) {
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
var G__55506 = arguments.length;
switch (G__55506) {
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
var G__55508 = arguments.length;
switch (G__55508) {
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
var G__55510 = arguments.length;
switch (G__55510) {
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
var G__55512 = arguments.length;
switch (G__55512) {
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
var G__55514 = arguments.length;
switch (G__55514) {
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
var G__55516 = arguments.length;
switch (G__55516) {
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
var G__55518 = arguments.length;
switch (G__55518) {
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
var G__55520 = arguments.length;
switch (G__55520) {
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
var G__55526 = arguments.length;
switch (G__55526) {
case 0:
return tick.alpha.api._PLUS_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.alpha.api._PLUS_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___55602 = arguments.length;
var i__4790__auto___55603 = (0);
while(true){
if((i__4790__auto___55603 < len__4789__auto___55602)){
args_arr__4810__auto__.push((arguments[i__4790__auto___55603]));

var G__55604 = (i__4790__auto___55603 + (1));
i__4790__auto___55603 = G__55604;
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__55521_SHARP_,p2__55522_SHARP_){
return tick.core._PLUS_(p1__55521_SHARP_,p2__55522_SHARP_);
}),arg,args);
}));

/** @this {Function} */
(tick.alpha.api._PLUS_.cljs$lang$applyTo = (function (seq55524){
var G__55525 = cljs.core.first(seq55524);
var seq55524__$1 = cljs.core.next(seq55524);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__55525,seq55524__$1);
}));

(tick.alpha.api._PLUS_.cljs$lang$maxFixedArity = (1));

tick.alpha.api._ = (function tick$alpha$api$_(var_args){
var G__55532 = arguments.length;
switch (G__55532) {
case 0:
return tick.alpha.api._.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.alpha.api._.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___55606 = arguments.length;
var i__4790__auto___55607 = (0);
while(true){
if((i__4790__auto___55607 < len__4789__auto___55606)){
args_arr__4810__auto__.push((arguments[i__4790__auto___55607]));

var G__55608 = (i__4790__auto___55607 + (1));
i__4790__auto___55607 = G__55608;
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__55527_SHARP_,p2__55528_SHARP_){
return tick.core._(p1__55527_SHARP_,p2__55528_SHARP_);
}),arg,args);
}));

/** @this {Function} */
(tick.alpha.api._.cljs$lang$applyTo = (function (seq55530){
var G__55531 = cljs.core.first(seq55530);
var seq55530__$1 = cljs.core.next(seq55530);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__55531,seq55530__$1);
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
var G__55537 = arguments.length;
switch (G__55537) {
case 1:
return tick.alpha.api._LT_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tick.alpha.api._LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___55611 = arguments.length;
var i__4790__auto___55612 = (0);
while(true){
if((i__4790__auto___55612 < len__4789__auto___55611)){
args_arr__4810__auto__.push((arguments[i__4790__auto___55612]));

var G__55613 = (i__4790__auto___55612 + (1));
i__4790__auto___55612 = G__55613;
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
var G__55614 = y;
var G__55615 = cljs.core.first(more);
var G__55616 = cljs.core.next(more);
x = G__55614;
y = G__55615;
more = G__55616;
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
(tick.alpha.api._LT_.cljs$lang$applyTo = (function (seq55534){
var G__55535 = cljs.core.first(seq55534);
var seq55534__$1 = cljs.core.next(seq55534);
var G__55536 = cljs.core.first(seq55534__$1);
var seq55534__$2 = cljs.core.next(seq55534__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__55535,G__55536,seq55534__$2);
}));

(tick.alpha.api._LT_.cljs$lang$maxFixedArity = (2));

tick.alpha.api._LT__EQ_ = (function tick$alpha$api$_LT__EQ_(var_args){
var G__55542 = arguments.length;
switch (G__55542) {
case 1:
return tick.alpha.api._LT__EQ_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tick.alpha.api._LT__EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___55618 = arguments.length;
var i__4790__auto___55619 = (0);
while(true){
if((i__4790__auto___55619 < len__4789__auto___55618)){
args_arr__4810__auto__.push((arguments[i__4790__auto___55619]));

var G__55620 = (i__4790__auto___55619 + (1));
i__4790__auto___55619 = G__55620;
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
var G__55621 = y;
var G__55622 = cljs.core.first(more);
var G__55623 = cljs.core.next(more);
x = G__55621;
y = G__55622;
more = G__55623;
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
(tick.alpha.api._LT__EQ_.cljs$lang$applyTo = (function (seq55539){
var G__55540 = cljs.core.first(seq55539);
var seq55539__$1 = cljs.core.next(seq55539);
var G__55541 = cljs.core.first(seq55539__$1);
var seq55539__$2 = cljs.core.next(seq55539__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__55540,G__55541,seq55539__$2);
}));

(tick.alpha.api._LT__EQ_.cljs$lang$maxFixedArity = (2));

tick.alpha.api._GT_ = (function tick$alpha$api$_GT_(var_args){
var G__55547 = arguments.length;
switch (G__55547) {
case 1:
return tick.alpha.api._GT_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tick.alpha.api._GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___55625 = arguments.length;
var i__4790__auto___55626 = (0);
while(true){
if((i__4790__auto___55626 < len__4789__auto___55625)){
args_arr__4810__auto__.push((arguments[i__4790__auto___55626]));

var G__55627 = (i__4790__auto___55626 + (1));
i__4790__auto___55626 = G__55627;
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
var G__55628 = y;
var G__55629 = cljs.core.first(more);
var G__55630 = cljs.core.next(more);
x = G__55628;
y = G__55629;
more = G__55630;
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
(tick.alpha.api._GT_.cljs$lang$applyTo = (function (seq55544){
var G__55545 = cljs.core.first(seq55544);
var seq55544__$1 = cljs.core.next(seq55544);
var G__55546 = cljs.core.first(seq55544__$1);
var seq55544__$2 = cljs.core.next(seq55544__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__55545,G__55546,seq55544__$2);
}));

(tick.alpha.api._GT_.cljs$lang$maxFixedArity = (2));

tick.alpha.api._GT__EQ_ = (function tick$alpha$api$_GT__EQ_(var_args){
var G__55552 = arguments.length;
switch (G__55552) {
case 1:
return tick.alpha.api._GT__EQ_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tick.alpha.api._GT__EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___55632 = arguments.length;
var i__4790__auto___55633 = (0);
while(true){
if((i__4790__auto___55633 < len__4789__auto___55632)){
args_arr__4810__auto__.push((arguments[i__4790__auto___55633]));

var G__55634 = (i__4790__auto___55633 + (1));
i__4790__auto___55633 = G__55634;
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
var G__55635 = y;
var G__55636 = cljs.core.first(more);
var G__55637 = cljs.core.next(more);
x = G__55635;
y = G__55636;
more = G__55637;
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
(tick.alpha.api._GT__EQ_.cljs$lang$applyTo = (function (seq55549){
var G__55550 = cljs.core.first(seq55549);
var seq55549__$1 = cljs.core.next(seq55549);
var G__55551 = cljs.core.first(seq55549__$1);
var seq55549__$2 = cljs.core.next(seq55549__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__55550,G__55551,seq55549__$2);
}));

(tick.alpha.api._GT__EQ_.cljs$lang$maxFixedArity = (2));

tick.alpha.api.clock = (function tick$alpha$api$clock(var_args){
var G__55554 = arguments.length;
switch (G__55554) {
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
var len__4789__auto___55639 = arguments.length;
var i__4790__auto___55640 = (0);
while(true){
if((i__4790__auto___55640 < len__4789__auto___55639)){
args__4795__auto__.push((arguments[i__4790__auto___55640]));

var G__55641 = (i__4790__auto___55640 + (1));
i__4790__auto___55640 = G__55641;
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
(tick.alpha.api.extend.cljs$lang$applyTo = (function (seq55555){
var G__55556 = cljs.core.first(seq55555);
var seq55555__$1 = cljs.core.next(seq55555);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__55556,seq55555__$1);
}));

tick.alpha.api.scale = (function tick$alpha$api$scale(var_args){
var args__4795__auto__ = [];
var len__4789__auto___55642 = arguments.length;
var i__4790__auto___55643 = (0);
while(true){
if((i__4790__auto___55643 < len__4789__auto___55642)){
args__4795__auto__.push((arguments[i__4790__auto___55643]));

var G__55644 = (i__4790__auto___55643 + (1));
i__4790__auto___55643 = G__55644;
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
(tick.alpha.api.scale.cljs$lang$applyTo = (function (seq55557){
var G__55558 = cljs.core.first(seq55557);
var seq55557__$1 = cljs.core.next(seq55557);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__55558,seq55557__$1);
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
var G__55562 = arguments.length;
switch (G__55562) {
case 0:
return tick.alpha.api.concur.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.alpha.api.concur.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___55646 = arguments.length;
var i__4790__auto___55647 = (0);
while(true){
if((i__4790__auto___55647 < len__4789__auto___55646)){
args_arr__4810__auto__.push((arguments[i__4790__auto___55647]));

var G__55648 = (i__4790__auto___55647 + (1));
i__4790__auto___55647 = G__55648;
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
(tick.alpha.api.concur.cljs$lang$applyTo = (function (seq55560){
var G__55561 = cljs.core.first(seq55560);
var seq55560__$1 = cljs.core.next(seq55560);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__55561,seq55560__$1);
}));

(tick.alpha.api.concur.cljs$lang$maxFixedArity = (1));

tick.alpha.api.concurrencies = (function tick$alpha$api$concurrencies(var_args){
var args__4795__auto__ = [];
var len__4789__auto___55649 = arguments.length;
var i__4790__auto___55650 = (0);
while(true){
if((i__4790__auto___55650 < len__4789__auto___55649)){
args__4795__auto__.push((arguments[i__4790__auto___55650]));

var G__55651 = (i__4790__auto___55650 + (1));
i__4790__auto___55650 = G__55651;
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
(tick.alpha.api.concurrencies.cljs$lang$applyTo = (function (seq55563){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55563));
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
var G__55565 = arguments.length;
switch (G__55565) {
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
var G__55567 = arguments.length;
switch (G__55567) {
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
