## 时间段函数集合

调用方法，返回特定的时间段，适用于动态获取日期。

### API

#### 获取当天的日期

today

* @param {string} [type="-"] 分隔符 默认 '-'
* @returns {string} YYYY-MM-DD

```js
import { today } from 'period-date';

console.log(today()); // 2019-03-13
```

#### 获取昨天的日期

yesterday

* @param {string} [type="-"] 分隔符 默认 '-'
* @returns {string} YYYY-MM-DD

```js
import { yesterday } from 'period-date';

console.log(yesterday()); // 2019-03-12
```

#### 获取明天的日期

tomorrow

* @param {string} [type="-"] 分隔符 默认 '-'
* @returns {string} YYYY-MM-DD

```js
import { tomorrow } from 'period-date';

console.log(tomorrow()); // 2019-03-14
```

#### 获取指定月 1号，默认返回 本月1号

monthFirstDay

* @param {number || string} year   年 默认本年
* @param {number || string} month  月 默认本月
* @param {string} type  分隔符 默认 '-'
* @returns {string} YYYY-MM-DD

```js
import { monthFirstDay } from 'period-date';

console.log(monthFirstDay()); // 2019-03-01
console.log(monthFirstDay({ year: 2018, month: 9 })); // 2018-09-01
```

#### 获取指定月最后一天的日期，默认返回 本月最后一天

monthLastDay

* @param {number || string} year   年 默认本年
* @param {number || string} month  月 默认本月
* @param {string} type  分隔符 默认 '-'
* @returns {string} YYYY-MM-DD

```js
import { monthLastDay } from 'period-date';

console.log(monthLastDay()); // 2019-03-31
console.log(monthLastDay({ year: 2018, month: 9 })); // 2018-09-30
```

#### 上个月时间段，默认返回当前月的 上个月

prevMonth

* @param {string} [type="-"] 分隔符 默认 '-'
* @returns {array} [YYYY-MM-DD, YYYY-MM-DD]

```js
import { prevMonth } from 'period-date';

console.log(prevMonth()); // ["2019-02-01", "2019-02-28"]
console.log(prevMonth({ year: 2018, month: 9 })); // ["2018-08-01", "2018-08-31"]
```

#### 下个月时间段，默认返回当前月的 下个月

nextMonth

* @param {string} [type='-'] 分隔符 默认 '-'
* @returns {array} [YYYY-MM-DD, YYYY-MM-DD]

```js
import { nextMonth } from 'period-date';

console.log(nextMonth()); // ["2019-04-01", "2019-04-30"]
console.log(nextMonth({ year: 2018, month: 9 })); // ["2018-10-01", "2018-10-31"]
```

#### 返回指定月的 1 号是周几，这个月有多少天，默认返回当前月

monthInfo

* @param {number} year   年 默认本年
* @param {number} month  月 默认本月
* @returns {object} date:日期、firstDay:1号是周几、days:该月的天数

```js
import { monthInfo } from 'period-date';

console.log(monthInfo()); // {date: "2019-03", firstDay: 5, days: 31}
console.log(monthInfo({ year: 2018, month: 9 })); // {date: "2018-09", firstDay: 6, days: 30}
```

#### 输入日期，返回指定日期所在的一周的日期时间段，从周一到周日，默认是本周

week

* @param {number} year   年 默认本年
* @param {number} month  月 默认本月
* @param {number} day    日 默认今天
* @param {string} type  分隔符 默认 '-'
* @returns {array} [YYYY-MM-DD, YYYY-MM-DD]

```js
import { monthInfo } from 'period-date';

console.log(week()); // ["2019-03-11", "2019-03-17"]
console.log(week({ year: 2018, month: 9, day: 10 })); // ["2018-09-10", "2018-09-16"]
```

#### 获取指定日期 的 上周的日期时间段，默认返回 当前周的上周

prevWeek

* @param {string} [type="-"] 分隔符 默认 '-'
* @returns {array} [YYYY-MM-DD, YYYY-MM-DD]

```js
import { prevWeek } from 'period-date';

console.log(prevWeek()); // ["2019-03-04", "2019-03-10"]
console.log(prevWeek({ year: 2018, month: 9, day: 10 })); // ["2018-09-03", "2018-09-09"]
```

#### 获取指定日期 的 下周的时间段，默认返回 当前周的下周

nextWeek

* @param {string} [type="-"] 分隔符 默认 '-'
* @returns {array} [YYYY-MM-DD, YYYY-MM-DD]

```js
import { nextWeek } from 'period-date';

console.log(nextWeek()); // ["2019-03-18", "2019-03-24"]
console.log(nextWeek({ year: 2018, month: 9, day: 10 })); // ["2018-09-17", "2018-09-23"]
```

