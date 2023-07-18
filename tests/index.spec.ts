import express, { Express, Response, Request, NextFunction } from 'express';
import request from 'supertest';
import { Eroutes } from '../src/index';

let app: Express;
let eroutes: Eroutes;

beforeEach(() => {
  app = express();
  eroutes = new Eroutes();
});

describe('Checking all basic route creation operation', () => {
  it('should get main route', async () => {
    const route = '/';
    eroutes.add({
      route: route,
      controller: (_req: Request, res: Response) => {
        return res.status(200).send({ message: 'Testing message' });
      },
      middleware: null,
      method: 'get',
    });
    app.use(eroutes.initializeRoutes());
    const res = await request(app).get(route);
    expect(res.body).toHaveProperty('message');
  });

  it('should get a nested route response', async () => {
    const route = '/route/nested';
    eroutes.add({
      route: route,
      controller: (_req: Request, res: Response) => {
        return res
          .status(200)
          .send({ nested: 'Testing message in nested route' });
      },
      middleware: null,
      method: 'get',
    });
    app.use(eroutes.initializeRoutes());
    const res = await request(app).get(route);
    expect(res.body).toHaveProperty('nested');
  });

  it('should get a amount of active routes', async () => {
    const routes = ['/route1', '/route2', '/route3'];
    eroutes.add({
      route: routes[0],
      controller: (_req: Request, res: Response) => {
        return res
          .status(200)
          .send({ nested: 'Testing message in nested route' });
      },
      middleware: null,
      method: 'get',
    });
    eroutes.add({
      route: routes[1],
      controller: (_req: Request, res: Response) => {
        return res
          .status(200)
          .send({ nested: 'Testing message in nested route' });
      },
      middleware: null,
      method: 'get',
    });
    eroutes.add({
      route: routes[2],
      controller: (_req: Request, res: Response) => {
        return res
          .status(200)
          .send({ nested: 'Testing message in nested route' });
      },
      middleware: null,
      method: 'get',
    });
    app.use(eroutes.initializeRoutes());
    const amount = eroutes.getAll().length;
    expect(amount).toBe(3);
  });

  it('should check if middlewares are working', async () => {
    const route = '/';
    const middlewaresResponses = new Array();
    const middlewares = [
      (_req: Request, _response: Response, next: NextFunction) => {
        middlewaresResponses.push('The ');
        next();
      },
      (_req: Request, _response: Response, next: NextFunction) => {
        middlewaresResponses.push('middlewares ');
        next();
      },
      (_req: Request, _response: Response, next: NextFunction) => {
        middlewaresResponses.push('are ');
        next();
      },
      (_req: Request, _response: Response, next: NextFunction) => {
        middlewaresResponses.push('working!');
        next();
      },
    ];
    eroutes.add({
      route: route,
      controller: (_req: Request, res: Response) => {
        return res.status(200).send({ message: 'Testing message' });
      },
      middleware: middlewares,
      method: 'get',
    });
    app.use(eroutes.initializeRoutes());
    await request(app).get(route);
    expect(middlewaresResponses.join('')).toBe('The middlewares are working!');
  });
});
