/*
 * @Author       : Kevin Jobs
 * @Date         : 2022-03-08 17:50:30
 * @LastEditTime : 2022-03-17 19:24:21
 * @lastEditors  : Kevin Jobs
 * @FilePath     : \koa-restful-api\src\controllers\logs.ctrl.ts
 * @Description  : 
 */
import dayjs from 'dayjs';
import Koa from 'koa';
import { LogsService } from '../services';

export default class LogsController {
  static getList = async (ctx: Koa.Context) => {
    const {
      datetime = dayjs().format('YYYY-MM-DD'),
      orderBy = 'datetime',
      order = 'desc',
    } = ctx.query;
    const results = await LogsService.getAllLogs(
      String(datetime),
      String(orderBy),
      String(order)
    );
    ctx.body = { code: 1, msg: 'get logs success', data: results };
    return ctx;
  }

  static visitData = async (ctx: Koa.Context) => {
    const { dates } = ctx.query;
    const dateArr = JSON.parse(dates as string);
    const results = await LogsService.getAllVisitDatas(dateArr);
    ctx.body = { code: 1, msg: 'get logs analysis success', data: results };
    return ctx;
  }
}