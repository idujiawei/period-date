## 时间段函数集合

调用方法，返回特定的时间段，适用于动态获取日期。

### Installation

```js
npm install --save period-date
```

### API

#### 将输入日期转换成对象，默认返回当前的日期

formatDateString

* @param {string} date 默认当前的日期
* 仅支持以下数据格式：'2019-01-09'、 '2019/01/09'、new Date() 得到的时间值、时间戳
* @returns {year: xxx, month: xxx, day: xxx}

```js
import { formatDateString } from 'period-date';

console.log(formatDateString()); // {year: 2019, month: "03", day: 15}
console.log(formatDateString('2019/09/9')); // {year: 2019, month: "09", day: "09"}
```

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

lastMonth

* @param {string} [type="-"] 分隔符 默认 '-'
* @returns {array} [YYYY-MM-DD, YYYY-MM-DD]

```js
import { lastMonth } from 'period-date';

console.log(lastMonth()); // ["2019-02-01", "2019-02-28"]
console.log(lastMonth({ year: 2018, month: 9 })); // ["2018-08-01", "2018-08-31"]
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
import { week } from 'period-date';

console.log(week()); // ["2019-03-11", "2019-03-17"]
console.log(week({ year: 2018, month: 9, day: 10 })); // ["2018-09-10", "2018-09-16"]
```

#### 获取指定日期 的 上周的日期时间段，默认返回 当前周的上周

lastWeek

* @param {string} [type="-"] 分隔符 默认 '-'
* @returns {array} [YYYY-MM-DD, YYYY-MM-DD]

```js
import { lastWeek } from 'period-date';

console.log(lastWeek()); // ["2019-03-04", "2019-03-10"]
console.log(lastWeek({ year: 2018, month: 9, day: 10 })); // ["2018-09-03", "2018-09-09"]
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

#### 获取今年的时间段

thisYear

* @param {string} [type="-"]
* @returns [YYYY-MM-DD, YYYY-MM-DD]

```js
import { thisYear } from 'period-date';

console.log(thisYear()); // ["2019-01-01", "2019-12-31"]
```


#### 获取去年的时间段

lastYear

* @param {string} [type="-"]
* @returns [YYYY-MM-DD, YYYY-MM-DD]

```js
import { lastYear } from 'period-date';

console.log(lastYear()); // ["2018-01-01", "2018-12-31"]
```

