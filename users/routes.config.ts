import { CommonRoutesConfig } from '../common/routes.config';
import express from 'express';

import {read} from './read';

export class UsersRoutes extends CommonRoutesConfig {
	constructor(app: express.Application) {
		super(app, 'UsersRoutes')
	}

	configureRoutes() {
		this.app.route(`/users`)
			.get((req: express.Request, res: express.Response) => {
				read(req, res);
			})

		return this.app;
	}
}