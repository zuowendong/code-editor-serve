import koaRouter from "koa-router";
import indexController from "../controller/indexController";

const router = new koaRouter({ prefix: "/api" });

router.get('/', indexController.index)

export default router;
