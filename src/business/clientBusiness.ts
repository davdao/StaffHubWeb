import { Config } from "../utils/constants";
import { ResultBase } from "../model/httpRequest/resultbase";
import { client } from "../model/client";

export default class clientBusiness {
    public static  GetAllClient() {
        return new Promise<ResultBase<client>>((resolve, reject) => {
            fetch(Config.ApiUrl.Client.GetAll, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then((resp: Response) => {
                    resp.json()
                    .then((res: ResultBase<client>) => {
                        resolve(res);
                    });
                })
                .catch((error) => {
                    reject([]);
                }) ;
            });
    }
    
    public static AddCategory(_category) {
        return new Promise<ResultBase<client>>((resolve, reject) => {
            fetch(Config.ApiUrl.Client.Add, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "Name": _category.name,
                    "Color" : _category.color
                }),
            })
                .then((resp: Response) => {
                    resp.json()
                    .then((res: ResultBase<client>) => {
                        resolve(res);
                    });
                })
                .catch((error) => {
                    reject([]);
                }) ;
            });
    }
/*
method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "Title" : _item.title,
                    "StartDate": _item.startDate,
                    "EndDate" : _item.endDate,
                    "Client": {
                        "Name" : _item.client.name,
                        "Id" : _item.client.id
                    }
                }),*/
    public static UpdateCategory(_category) {
        return new Promise<ResultBase<client>>((resolve, reject) => {
            fetch(Config.ApiUrl.Client.Update, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "Id" : _category.id,
                    "Name": _category.name,
                    "Color" : _category.color
                }),
            })
                .then((resp: Response) => {
                    resp.json()
                    .then((res: ResultBase<client>) => {
                        resolve(res);
                    });
                })
                .catch((error) => {
                    reject([]);
                }) ;
            });
    }

    public static DeleteCategory(_clientList, _client) {

    }
}