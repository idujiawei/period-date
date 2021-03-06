/*
 * @作者: jiawei 
 * @创建时间: 2019-03-13 11:38:15 
 * @文件主题: 时间段函数
 *
 */

/**
 * 判断小于 10，补 0
 *
 * @param {*} x
 * @returns
 */
export function datePlus0(x: number): number | string {
    if (x < 10) {
        return `0${x}`;
    } else {
        return x;
    }
}


/**
 * 当前日期
 *
 * @returns {year, month, day}
 */
export function nowDate(): any {
    return {
        year: new Date().getFullYear(),
        month: new Date().getMonth(),
        day: new Date().getDate()
    }
}


/**
 * 优化日期格式
 *
 * @param {Object} Date Object
 * @returns {year, month, day}
 */
export function optimize(date: Date): any {
    return {
        year: date.getFullYear(),
        month: datePlus0(date.getMonth() + 1),
        day: datePlus0(date.getDate())
    }
}


/**
 * 今天的日期
 *
 * @param {string} [type="-"] 分隔符 默认 '-'
 * @returns {string} YYYY-MM-DD
 */
export function today(type: string = "-"): string {
    let { year, month, day } = optimize(new Date());
    return `${year}${type}${month}${type}${day}`;
}


/**
 * 昨天的日期
 *
 * @param {string} [type='-'] 分隔符 默认 '-'
 * @returns {string} YYYY-MM-DD
 */
export function yesterday(type: string = '-'): string {
    let { year, month, day } = optimize(new Date(nowDate().year, nowDate().month, nowDate().day - 1));
    return `${year}${type}${month}${type}${day}`;
}


/**
 * 明天的日期
 *
 * @param {string} [type='-'] 分隔符 默认 '-'
 * @returns {string} YYYY-MM-DD
 */
export function tomorrow(type: string = '-'): string {
    let { year, month, day } = optimize(new Date(nowDate().year, nowDate().month, nowDate().day + 1));
    return `${year}${type}${month}${type}${day}`;
}


/**
 * 当前月
 *
 * @param {*} [{ year = nowDate().year, month = nowDate().month + 1, type = "-" }={}]
 * @returns
 */
export function currentMonth({ year = nowDate().year, month = nowDate().month + 1, type = "-" }: any = {}) {
    let { year: _year, month: _month } = optimize(new Date(year, Number(month) - 1, 1));
    return `${_year}${type}${_month}`;
}


/**
 * 获取指定月 1号
 * 默认返回 本月1号
 *
 * @param {number} year   年 默认本年
 * @param {number} month  月 默认本月
 * @param {string} type  分隔符 默认 '-'
 * @returns {string} YYYY-MM-DD
 */
export function monthFirstDay({ year = nowDate().year, month = nowDate().month + 1, type = "-" }: any = {}): string {
    let { year: _year, month: _month, day: _day } = optimize(new Date(year, Number(month) - 1, 1));
    return `${_year}${type}${_month}${type}${_day}`;
}


/**
 * 获取指定月最后一天的日期
 * 默认返回 本月最后一天
 *
 * @param {number} year   年 默认本年
 * @param {number} month  月 默认本月
 * @param {string} type  分隔符 默认 '-'
 * @returns {string} YYYY-MM-DD
 */
export function monthLastDay({ year = nowDate().year, month = nowDate().month + 1, type = "-" }: any = {}): string {
    let { year: _year, month: _month, day: _day } = optimize(new Date(year, month, 0));
    return `${_year}${type}${_month}${type}${_day}`;
}


/**
 * 上个月时间段
 * 默认返回当前月的 上个月
 *
 * @param {string} [type="-"] 分隔符 默认 '-'
 * @returns {array} [YYYY-MM-DD, YYYY-MM-DD]
 */
export function lastMonth({ year = nowDate().year, month = nowDate().month + 1, type = "-" }: any = {}): Array<any> {
    return [monthFirstDay({ year, month: Number(month) - 1, type }), monthLastDay({ year, month: Number(month) - 1, type })];
}


/**
 * 下个月时间段
 * 默认返回当前月的 下个月
 *
 * @param {string} [type='-'] 分隔符 默认 '-'
 * @returns {array} [YYYY-MM-DD, YYYY-MM-DD]
 */
export function nextMonth({ year = nowDate().year, month = nowDate().month + 1, type = "-" }: any = {}): Array<any> {
    return [monthFirstDay({ year, month: Number(month) + 1, type }), monthLastDay({ year, month: Number(month) + 1, type })];
}


/**
 * 返回指定月的 1 号是周几，这个月有多少天
 * 默认返回当前月
 *
 * @param {number} year   年 默认本年
 * @param {number} month  月 默认本月
 * @returns {object} date:日期、firstDay:1号是周几、days:该月的天数
 */
export function monthInfo({ year = nowDate().year, month = nowDate().month + 1, type = "-" }: any = {}): object {
    // 1 号是周几
    let date = new Date(year, Number(month) - 1, 1);
    let weekDay = date.getDay();

    // 0 是星期日，返回 7
    weekDay = weekDay === 0 ? 7 : weekDay;

    // 该月最后一天是几号
    let days = new Date(year, month, 0).getDate();

    return {
        date: `${date.getFullYear()}${type}${datePlus0(date.getMonth() + 1)}`,
        firstDay: weekDay,
        days: days
    }
}


/**
 * 输入日期，返回指定日期所在的一周的日期时间段，从周一到周日
 * 默认是本周
 *
 * @param {number} year   年 默认本年
 * @param {number} month  月 默认本月
 * @param {number} day    日 默认今天
 * @param {string} type  分隔符 默认 '-'
 * @returns {array} [YYYY-MM-DD, YYYY-MM-DD]
 */
export function week({ year = nowDate().year, month = nowDate().month + 1, day = nowDate().day, type = "-" }: any = {}): Array<any> {
    // 获取到今天是周几，如果是 0 ，说明是周日
    let weekDay = new Date(year, Number(month) - 1, day).getDay();
    weekDay = weekDay === 0 ? 7 : weekDay;

    // 周一的日期是，当前日期的 day - weekDay + 1
    let { year: week_start_year, month: week_start_month, day: week_start_day } = optimize(new Date(year, Number(month) - 1, day - weekDay + 1));
    // 周日的日期是，当前日期的 day - weekDay + 7
    let { year: week_end_year, month: week_end_month, day: week_end_day } = optimize(new Date(year, Number(month) - 1, day - weekDay + 7));

    return [`${week_start_year}${type}${week_start_month}${type}${week_start_day}`, `${week_end_year}${type}${week_end_month}${type}${week_end_day}`];
}


/**
 * 获取指定日期 的 上周的日期时间段
 * 默认返回 当前周的上周
 *
 * @param {string} [type="-"] 分隔符 默认 '-'
 * @returns {array} [YYYY-MM-DD, YYYY-MM-DD]
 */
export function lastWeek({ year = nowDate().year, month = nowDate().month + 1, day = nowDate().day, type = "-" }: any = {}): Array<any> {
    let weekDay = new Date(year, Number(month) - 1, day).getDay();
    weekDay = weekDay === 0 ? 7 : weekDay;

    return week({ year, month, day: day - weekDay, type });
}


/**
 * 获取指定日期 的 下周的时间段
 * 默认返回 当前周的下周
 *
 * @param {string} [type="-"] 分隔符 默认 '-'
 * @returns {array} [YYYY-MM-DD, YYYY-MM-DD]
 */
export function nextWeek({ year = nowDate().year, month = nowDate().month + 1, day = nowDate().day, type = "-" }: any = {}): Array<any> {
    let weekDay = new Date(year, Number(month) - 1, day).getDay();
    weekDay = weekDay === 0 ? 7 : weekDay;

    return week({ year, month, day: day + 8 - weekDay, type });
}


/**
 * 将输入日期转换成对象
 * 默认返回 当前的日期
 *
 * @param {string} date 默认当前的日期 
 * 仅支持以下数据格式：'2019-01-09'、 '2019/01/09'、new Date() 得到的时间值、时间戳
 * @returns {year:xxx, month:xxx, day:xxx}
 */
export function formatDateString(date: any): any {
    return optimize(new Date(date));
}


/**
 * 今年
 *
 * @param {string} [type="-"]
 * @returns [YYYY-MM-DD, YYYY-MM-DD]
 */
export function thisYear(type: string = "-") {
    const year = new Date().getFullYear();
    return [`${year}${type}01${type}01`, `${year}${type}12${type}31`]
}


/**
 * 去年
 *
 * @param {string} [type="-"]
 * @returns [YYYY-MM-DD, YYYY-MM-DD]
 */
export function lastYear(type: string = "-") {
    const year = new Date().getFullYear();
    return [`${year - 1}${type}01${type}01`, `${year - 1}${type}12${type}31`]
}