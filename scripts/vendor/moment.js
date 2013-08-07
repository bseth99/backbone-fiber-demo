(function(t){function e(t,e){return function(n){return u(t.call(this,n),e)}}function n(t,e){return function(n){return this.lang().ordinal(t.call(this,n),e)}}function i(){}function s(t){a(this,t)}function r(t){var e=t.years||t.year||t.y||0,n=t.months||t.month||t.M||0,i=t.weeks||t.week||t.w||0,s=t.days||t.day||t.d||0,r=t.hours||t.hour||t.h||0,a=t.minutes||t.minute||t.m||0,o=t.seconds||t.second||t.s||0,u=t.milliseconds||t.millisecond||t.ms||0;this._input=t,this._milliseconds=u+1e3*o+6e4*a+36e5*r,this._days=s+7*i,this._months=n+12*e,this._data={},this._bubble()}function a(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t}function o(t){return 0>t?Math.ceil(t):Math.floor(t)}function u(t,e){for(var n=t+"";e>n.length;)n="0"+n;return n}function c(t,e,n,i){var s,r,a=e._milliseconds,o=e._days,u=e._months;a&&t._d.setTime(+t._d+a*n),(o||u)&&(s=t.minute(),r=t.hour()),o&&t.date(t.date()+o*n),u&&t.month(t.month()+u*n),a&&!i&&z.updateOffset(t),(o||u)&&(t.minute(s),t.hour(r))}function d(t){return"[object Array]"===Object.prototype.toString.call(t)}function h(t,e){var n,i=Math.min(t.length,e.length),s=Math.abs(t.length-e.length),r=0;for(n=0;i>n;n++)~~t[n]!==~~e[n]&&r++;return r+s}function l(t){return t?se[t]||t.toLowerCase().replace(/(.)s$/,"$1"):t}function f(t,e){return e.abbr=t,P[t]||(P[t]=new i),P[t].set(e),P[t]}function _(t){if(!t)return z.fn._lang;if(!P[t]&&W)try{require("./lang/"+t)}catch(e){return z.fn._lang}return P[t]}function m(t){return t.match(/\[.*\]/)?t.replace(/^\[|\]$/g,""):t.replace(/\\/g,"")}function g(t){var e,n,i=t.match(Z);for(e=0,n=i.length;n>e;e++)i[e]=ue[i[e]]?ue[i[e]]:m(i[e]);return function(s){var r="";for(e=0;n>e;e++)r+=i[e]instanceof Function?i[e].call(s,t):i[e];return r}}function y(t,e){function n(e){return t.lang().longDateFormat(e)||e}for(var i=5;i--&&j.test(e);)e=e.replace(j,n);return re[e]||(re[e]=g(e)),re[e](t)}function p(t,e){switch(t){case"DDDD":return N;case"YYYY":return B;case"YYYYY":return J;case"S":case"SS":case"SSS":case"DDD":return V;case"MMM":case"MMMM":case"dd":case"ddd":case"dddd":return E;case"a":case"A":return _(e._l)._meridiemParse;case"X":return X;case"Z":case"ZZ":return I;case"T":return q;case"MM":case"DD":case"YY":case"HH":case"hh":case"mm":case"ss":case"M":case"D":case"d":case"H":case"h":case"m":case"s":return R;default:return RegExp(t.replace("\\",""))}}function M(t){var e=(I.exec(t)||[])[0],n=(e+"").match(ee)||["-",0,0],i=+(60*n[1])+~~n[2];return"+"===n[0]?-i:i}function w(t,e,n){var i,s=n._a;switch(t){case"M":case"MM":s[1]=null==e?0:~~e-1;break;case"MMM":case"MMMM":i=_(n._l).monthsParse(e),null!=i?s[1]=i:n._isValid=!1;break;case"D":case"DD":case"DDD":case"DDDD":null!=e&&(s[2]=~~e);break;case"YY":s[0]=~~e+(~~e>68?1900:2e3);break;case"YYYY":case"YYYYY":s[0]=~~e;break;case"a":case"A":n._isPm=_(n._l).isPM(e);break;case"H":case"HH":case"h":case"hh":s[3]=~~e;break;case"m":case"mm":s[4]=~~e;break;case"s":case"ss":s[5]=~~e;break;case"S":case"SS":case"SSS":s[6]=~~(1e3*("0."+e));break;case"X":n._d=new Date(1e3*parseFloat(e));break;case"Z":case"ZZ":n._useUTC=!0,n._tzm=M(e)}null==e&&(n._isValid=!1)}function v(t){var e,n,i=[];if(!t._d){for(e=0;7>e;e++)t._a[e]=i[e]=null==t._a[e]?2===e?1:0:t._a[e];i[3]+=~~((t._tzm||0)/60),i[4]+=~~((t._tzm||0)%60),n=new Date(0),t._useUTC?(n.setUTCFullYear(i[0],i[1],i[2]),n.setUTCHours(i[3],i[4],i[5],i[6])):(n.setFullYear(i[0],i[1],i[2]),n.setHours(i[3],i[4],i[5],i[6])),t._d=n}}function b(t){var e,n,i=t._f.match(Z),s=t._i;for(t._a=[],e=0;i.length>e;e++)n=(p(i[e],t).exec(s)||[])[0],n&&(s=s.slice(s.indexOf(n)+n.length)),ue[i[e]]&&w(i[e],n,t);s&&(t._il=s),t._isPm&&12>t._a[3]&&(t._a[3]+=12),t._isPm===!1&&12===t._a[3]&&(t._a[3]=0),v(t)}function k(t){var e,n,i,r,o,u=99;for(r=0;t._f.length>r;r++)e=a({},t),e._f=t._f[r],b(e),n=new s(e),o=h(e._a,n.toArray()),n._il&&(o+=n._il.length),u>o&&(u=o,i=n);a(t,i)}function Y(t){var e,n=t._i,i=K.exec(n);if(i){for(t._f="YYYY-MM-DD"+(i[2]||" "),e=0;4>e;e++)if(te[e][1].exec(n)){t._f+=te[e][0];break}I.exec(n)&&(t._f+=" Z"),b(t)}else t._d=new Date(n)}function D(e){var n=e._i,i=A.exec(n);n===t?e._d=new Date:i?e._d=new Date(+i[1]):"string"==typeof n?Y(e):d(n)?(e._a=n.slice(0),v(e)):e._d=n instanceof Date?new Date(+n):new Date(n)}function T(t,e,n,i,s){return s.relativeTime(e||1,!!n,t,i)}function S(t,e,n){var i=U(Math.abs(t)/1e3),s=U(i/60),r=U(s/60),a=U(r/24),o=U(a/365),u=45>i&&["s",i]||1===s&&["m"]||45>s&&["mm",s]||1===r&&["h"]||22>r&&["hh",r]||1===a&&["d"]||25>=a&&["dd",a]||45>=a&&["M"]||345>a&&["MM",U(a/30)]||1===o&&["y"]||["yy",o];return u[2]=e,u[3]=t>0,u[4]=n,T.apply({},u)}function C(t,e,n){var i,s=n-e,r=n-t.day();return r>s&&(r-=7),s-7>r&&(r+=7),i=z(t).add("d",r),{week:Math.ceil(i.dayOfYear()/7),year:i.year()}}function F(t){var e=t._i,n=t._f;return null===e||""===e?null:("string"==typeof e&&(t._i=e=_().preparse(e)),z.isMoment(e)?(t=a({},e),t._d=new Date(+e._d)):n?d(n)?k(t):b(t):D(t),new s(t))}function O(t,e){z.fn[t]=z.fn[t+"s"]=function(t){var n=this._isUTC?"UTC":"";return null!=t?(this._d["set"+n+e](t),z.updateOffset(this),this):this._d["get"+n+e]()}}function x(t){z.duration.fn[t]=function(){return this._data[t]}}function L(t,e){z.duration.fn["as"+t]=function(){return+this/e}}for(var z,$,H="2.1.0",U=Math.round,P={},W="undefined"!=typeof module&&module.exports,A=/^\/?Date\((\-?\d+)/i,G=/(\-)?(\d*)?\.?(\d+)\:(\d+)\:(\d+)\.?(\d{3})?/,Z=/(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|SS?S?|X|zz?|ZZ?|.)/g,j=/(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g,R=/\d\d?/,V=/\d{1,3}/,N=/\d{3}/,B=/\d{1,4}/,J=/[+\-]?\d{1,6}/,E=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,I=/Z|[\+\-]\d\d:?\d\d/i,q=/T/i,X=/[\+\-]?\d+(\.\d{1,3})?/,K=/^\s*\d{4}-\d\d-\d\d((T| )(\d\d(:\d\d(:\d\d(\.\d\d?\d?)?)?)?)?([\+\-]\d\d:?\d\d)?)?/,Q="YYYY-MM-DDTHH:mm:ssZ",te=[["HH:mm:ss.S",/(T| )\d\d:\d\d:\d\d\.\d{1,3}/],["HH:mm:ss",/(T| )\d\d:\d\d:\d\d/],["HH:mm",/(T| )\d\d:\d\d/],["HH",/(T| )\d\d/]],ee=/([\+\-]|\d\d)/gi,ne="Date|Hours|Minutes|Seconds|Milliseconds".split("|"),ie={Milliseconds:1,Seconds:1e3,Minutes:6e4,Hours:36e5,Days:864e5,Months:2592e6,Years:31536e6},se={ms:"millisecond",s:"second",m:"minute",h:"hour",d:"day",w:"week",M:"month",y:"year"},re={},ae="DDD w W M D d".split(" "),oe="M D H h m s w W".split(" "),ue={M:function(){return this.month()+1},MMM:function(t){return this.lang().monthsShort(this,t)},MMMM:function(t){return this.lang().months(this,t)},D:function(){return this.date()},DDD:function(){return this.dayOfYear()},d:function(){return this.day()},dd:function(t){return this.lang().weekdaysMin(this,t)},ddd:function(t){return this.lang().weekdaysShort(this,t)},dddd:function(t){return this.lang().weekdays(this,t)},w:function(){return this.week()},W:function(){return this.isoWeek()},YY:function(){return u(this.year()%100,2)},YYYY:function(){return u(this.year(),4)},YYYYY:function(){return u(this.year(),5)},gg:function(){return u(this.weekYear()%100,2)},gggg:function(){return this.weekYear()},ggggg:function(){return u(this.weekYear(),5)},GG:function(){return u(this.isoWeekYear()%100,2)},GGGG:function(){return this.isoWeekYear()},GGGGG:function(){return u(this.isoWeekYear(),5)},e:function(){return this.weekday()},E:function(){return this.isoWeekday()},a:function(){return this.lang().meridiem(this.hours(),this.minutes(),!0)},A:function(){return this.lang().meridiem(this.hours(),this.minutes(),!1)},H:function(){return this.hours()},h:function(){return this.hours()%12||12},m:function(){return this.minutes()},s:function(){return this.seconds()},S:function(){return~~(this.milliseconds()/100)},SS:function(){return u(~~(this.milliseconds()/10),2)},SSS:function(){return u(this.milliseconds(),3)},Z:function(){var t=-this.zone(),e="+";return 0>t&&(t=-t,e="-"),e+u(~~(t/60),2)+":"+u(~~t%60,2)},ZZ:function(){var t=-this.zone(),e="+";return 0>t&&(t=-t,e="-"),e+u(~~(10*t/6),4)},z:function(){return this.zoneAbbr()},zz:function(){return this.zoneName()},X:function(){return this.unix()}};ae.length;)$=ae.pop(),ue[$+"o"]=n(ue[$],$);for(;oe.length;)$=oe.pop(),ue[$+$]=e(ue[$],2);for(ue.DDDD=e(ue.DDD,3),i.prototype={set:function(t){var e,n;for(n in t)e=t[n],"function"==typeof e?this[n]=e:this["_"+n]=e},_months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),months:function(t){return this._months[t.month()]},_monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),monthsShort:function(t){return this._monthsShort[t.month()]},monthsParse:function(t){var e,n,i;for(this._monthsParse||(this._monthsParse=[]),e=0;12>e;e++)if(this._monthsParse[e]||(n=z([2e3,e]),i="^"+this.months(n,"")+"|^"+this.monthsShort(n,""),this._monthsParse[e]=RegExp(i.replace(".",""),"i")),this._monthsParse[e].test(t))return e},_weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdays:function(t){return this._weekdays[t.day()]},_weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysShort:function(t){return this._weekdaysShort[t.day()]},_weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),weekdaysMin:function(t){return this._weekdaysMin[t.day()]},weekdaysParse:function(t){var e,n,i;for(this._weekdaysParse||(this._weekdaysParse=[]),e=0;7>e;e++)if(this._weekdaysParse[e]||(n=z([2e3,1]).day(e),i="^"+this.weekdays(n,"")+"|^"+this.weekdaysShort(n,"")+"|^"+this.weekdaysMin(n,""),this._weekdaysParse[e]=RegExp(i.replace(".",""),"i")),this._weekdaysParse[e].test(t))return e},_longDateFormat:{LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D YYYY",LLL:"MMMM D YYYY LT",LLLL:"dddd, MMMM D YYYY LT"},longDateFormat:function(t){var e=this._longDateFormat[t];return!e&&this._longDateFormat[t.toUpperCase()]&&(e=this._longDateFormat[t.toUpperCase()].replace(/MMMM|MM|DD|dddd/g,function(t){return t.slice(1)}),this._longDateFormat[t]=e),e},isPM:function(t){return"p"===(t+"").toLowerCase()[0]},_meridiemParse:/[ap]\.?m?\.?/i,meridiem:function(t,e,n){return t>11?n?"pm":"PM":n?"am":"AM"},_calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},calendar:function(t,e){var n=this._calendar[t];return"function"==typeof n?n.apply(e):n},_relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},relativeTime:function(t,e,n,i){var s=this._relativeTime[n];return"function"==typeof s?s(t,e,n,i):s.replace(/%d/i,t)},pastFuture:function(t,e){var n=this._relativeTime[t>0?"future":"past"];return"function"==typeof n?n(e):n.replace(/%s/i,e)},ordinal:function(t){return this._ordinal.replace("%d",t)},_ordinal:"%d",preparse:function(t){return t},postformat:function(t){return t},week:function(t){return C(t,this._week.dow,this._week.doy).week},_week:{dow:0,doy:6}},z=function(t,e,n){return F({_i:t,_f:e,_l:n,_isUTC:!1})},z.utc=function(t,e,n){return F({_useUTC:!0,_isUTC:!0,_l:n,_i:t,_f:e})},z.unix=function(t){return z(1e3*t)},z.duration=function(t,e){var n,i,s=z.isDuration(t),a="number"==typeof t,o=s?t._input:a?{}:t,u=G.exec(t);return a?e?o[e]=t:o.milliseconds=t:u&&(n="-"===u[1]?-1:1,o={y:0,d:~~u[2]*n,h:~~u[3]*n,m:~~u[4]*n,s:~~u[5]*n,ms:~~u[6]*n}),i=new r(o),s&&t.hasOwnProperty("_lang")&&(i._lang=t._lang),i},z.version=H,z.defaultFormat=Q,z.updateOffset=function(){},z.lang=function(e,n){return e?(n?f(e,n):P[e]||_(e),z.duration.fn._lang=z.fn._lang=_(e),t):z.fn._lang._abbr},z.langData=function(t){return t&&t._lang&&t._lang._abbr&&(t=t._lang._abbr),_(t)},z.isMoment=function(t){return t instanceof s},z.isDuration=function(t){return t instanceof r},z.fn=s.prototype={clone:function(){return z(this)},valueOf:function(){return+this._d+6e4*(this._offset||0)},unix:function(){return Math.floor(+this/1e3)},toString:function(){return this.format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")},toDate:function(){return this._offset?new Date(+this):this._d},toISOString:function(){return y(z(this).utc(),"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")},toArray:function(){var t=this;return[t.year(),t.month(),t.date(),t.hours(),t.minutes(),t.seconds(),t.milliseconds()]},isValid:function(){return null==this._isValid&&(this._isValid=this._a?!h(this._a,(this._isUTC?z.utc(this._a):z(this._a)).toArray()):!isNaN(this._d.getTime())),!!this._isValid},utc:function(){return this.zone(0)},local:function(){return this.zone(0),this._isUTC=!1,this},format:function(t){var e=y(this,t||z.defaultFormat);return this.lang().postformat(e)},add:function(t,e){var n;return n="string"==typeof t?z.duration(+e,t):z.duration(t,e),c(this,n,1),this},subtract:function(t,e){var n;return n="string"==typeof t?z.duration(+e,t):z.duration(t,e),c(this,n,-1),this},diff:function(t,e,n){var i,s,r=this._isUTC?z(t).zone(this._offset||0):z(t).local(),a=6e4*(this.zone()-r.zone());return e=l(e),"year"===e||"month"===e?(i=432e5*(this.daysInMonth()+r.daysInMonth()),s=12*(this.year()-r.year())+(this.month()-r.month()),s+=(this-z(this).startOf("month")-(r-z(r).startOf("month")))/i,s-=6e4*(this.zone()-z(this).startOf("month").zone()-(r.zone()-z(r).startOf("month").zone()))/i,"year"===e&&(s/=12)):(i=this-r,s="second"===e?i/1e3:"minute"===e?i/6e4:"hour"===e?i/36e5:"day"===e?(i-a)/864e5:"week"===e?(i-a)/6048e5:i),n?s:o(s)},from:function(t,e){return z.duration(this.diff(t)).lang(this.lang()._abbr).humanize(!e)},fromNow:function(t){return this.from(z(),t)},calendar:function(){var t=this.diff(z().startOf("day"),"days",!0),e=-6>t?"sameElse":-1>t?"lastWeek":0>t?"lastDay":1>t?"sameDay":2>t?"nextDay":7>t?"nextWeek":"sameElse";return this.format(this.lang().calendar(e,this))},isLeapYear:function(){var t=this.year();return 0===t%4&&0!==t%100||0===t%400},isDST:function(){return this.zone()<this.clone().month(0).zone()||this.zone()<this.clone().month(5).zone()},day:function(t){var e=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=t?"string"==typeof t&&(t=this.lang().weekdaysParse(t),"number"!=typeof t)?this:this.add({d:t-e}):e},month:function(t){var e,n=this._isUTC?"UTC":"";return null!=t?"string"==typeof t&&(t=this.lang().monthsParse(t),"number"!=typeof t)?this:(e=this.date(),this.date(1),this._d["set"+n+"Month"](t),this.date(Math.min(e,this.daysInMonth())),z.updateOffset(this),this):this._d["get"+n+"Month"]()},startOf:function(t){switch(t=l(t)){case"year":this.month(0);case"month":this.date(1);case"week":case"day":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return"week"===t&&this.weekday(0),this},endOf:function(t){return this.startOf(t).add(t,1).subtract("ms",1)},isAfter:function(e,n){return n=n!==t?n:"millisecond",+this.clone().startOf(n)>+z(e).startOf(n)},isBefore:function(e,n){return n=n!==t?n:"millisecond",+this.clone().startOf(n)<+z(e).startOf(n)},isSame:function(e,n){return n=n!==t?n:"millisecond",+this.clone().startOf(n)===+z(e).startOf(n)},min:function(t){return t=z.apply(null,arguments),this>t?this:t},max:function(t){return t=z.apply(null,arguments),t>this?this:t},zone:function(t){var e=this._offset||0;return null==t?this._isUTC?e:this._d.getTimezoneOffset():("string"==typeof t&&(t=M(t)),16>Math.abs(t)&&(t=60*t),this._offset=t,this._isUTC=!0,e!==t&&c(this,z.duration(e-t,"m"),1,!0),this)},zoneAbbr:function(){return this._isUTC?"UTC":""},zoneName:function(){return this._isUTC?"Coordinated Universal Time":""},daysInMonth:function(){return z.utc([this.year(),this.month()+1,0]).date()},dayOfYear:function(t){var e=U((z(this).startOf("day")-z(this).startOf("year"))/864e5)+1;return null==t?e:this.add("d",t-e)},weekYear:function(t){var e=C(this,this.lang()._week.dow,this.lang()._week.doy).year;return null==t?e:this.add("y",t-e)},isoWeekYear:function(t){var e=C(this,1,4).year;return null==t?e:this.add("y",t-e)},week:function(t){var e=this.lang().week(this);return null==t?e:this.add("d",7*(t-e))},isoWeek:function(t){var e=C(this,1,4).week;return null==t?e:this.add("d",7*(t-e))},weekday:function(t){var e=(this._d.getDay()+7-this.lang()._week.dow)%7;return null==t?e:this.add("d",t-e)},isoWeekday:function(t){return null==t?this.day()||7:this.day(this.day()%7?t:t-7)},lang:function(e){return e===t?this._lang:(this._lang=_(e),this)}},$=0;ne.length>$;$++)O(ne[$].toLowerCase().replace(/s$/,""),ne[$]);O("year","FullYear"),z.fn.days=z.fn.day,z.fn.months=z.fn.month,z.fn.weeks=z.fn.week,z.fn.isoWeeks=z.fn.isoWeek,z.fn.toJSON=z.fn.toISOString,z.duration.fn=r.prototype={_bubble:function(){var t,e,n,i,s=this._milliseconds,r=this._days,a=this._months,u=this._data;u.milliseconds=s%1e3,t=o(s/1e3),u.seconds=t%60,e=o(t/60),u.minutes=e%60,n=o(e/60),u.hours=n%24,r+=o(n/24),u.days=r%30,a+=o(r/30),u.months=a%12,i=o(a/12),u.years=i},weeks:function(){return o(this.days()/7)},valueOf:function(){return this._milliseconds+864e5*this._days+2592e6*(this._months%12)+31536e6*~~(this._months/12)},humanize:function(t){var e=+this,n=S(e,!t,this.lang());return t&&(n=this.lang().pastFuture(e,n)),this.lang().postformat(n)},add:function(t,e){var n=z.duration(t,e);return this._milliseconds+=n._milliseconds,this._days+=n._days,this._months+=n._months,this._bubble(),this},subtract:function(t,e){var n=z.duration(t,e);return this._milliseconds-=n._milliseconds,this._days-=n._days,this._months-=n._months,this._bubble(),this},get:function(t){return t=l(t),this[t.toLowerCase()+"s"]()},as:function(t){return t=l(t),this["as"+t.charAt(0).toUpperCase()+t.slice(1)+"s"]()},lang:z.fn.lang};for($ in ie)ie.hasOwnProperty($)&&(L($,ie[$]),x($.toLowerCase()));L("Weeks",6048e5),z.duration.fn.asMonths=function(){return(+this-31536e6*this.years())/2592e6+12*this.years()},z.lang("en",{ordinal:function(t){var e=t%10,n=1===~~(t%100/10)?"th":1===e?"st":2===e?"nd":3===e?"rd":"th";return t+n}}),W&&(module.exports=z),"undefined"==typeof ender&&(this.moment=z),"function"==typeof define&&define.amd&&define(function(){return z})}).call(this);