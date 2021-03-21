import { createBeer } from '../services/beerService.js';

export default async ({ request, response }) => {
    if (!request.hasBody) {
        response.status = 400;
        response.body = { msg: 'Invalid beer data' };
        return;
    }

    const {
        name ,brand ,ispremiun
    } = await request.body().value;


    if (!name || !brand) {
        response.status = 422;
        response.body = { msg: 'Incorrect beer data. Name and brand are required' };
        return;
    }

    const beerId = await createBeer({ name, brand, is_premium :ispremiun });

    response.body = { msg: 'Beer created', beerId };
};
