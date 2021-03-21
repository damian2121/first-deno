import client from '../db/database.js';

class BeerRepo {
    create(beer) {
        return client.queryArray(
            'INSERT INTO beers (name, brand, is_premium, registration_date) VALUES ($1, $2, $3, $4)',
            beer.name,
            beer.brand,
            beer.is_premium,
            beer.registration_date
        );
    }

    selectAll() {
        console.log(client)
        return client.queryArray('SELECT * FROM beers ORDER BY id');
    }

    selectById(id) {
        return client.queryArray(`SELECT * FROM beers WHERE id = $1`, id);
    }

    update(id, beer) {
        var latestBeer = this.selectById(id);
        var query = `UPDATE beers SET name = $1, brand = $2, is_premium = $3 WHERE id = $4`;

        return client.queryArray(
            query,
            beer.name !== undefined ? beer.name : latestBeer.name,
            beer.brand !== undefined ? beer.brand : latestBeer.brand,
            beer.is_premium !== undefined ? beer.is_premium : latestBeer.is_premium,
            id
        );
    }

    delete(id) {
        return client.queryArray(`DELETE FROM beers WHERE id = $1`, id);
    }
}

export default new BeerRepo();
