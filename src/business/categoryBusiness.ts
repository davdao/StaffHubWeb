import { Config } from "../utils/constants";
import { ResultBase } from "../model/httpRequest/resultbase";
import { category } from "../model/category";

export default class categoryBusiness {
    public static  GetAllCategory() {
        return new Promise<ResultBase<category>>((resolve, reject) => {
            fetch(Config.ApiUrl.Category.GetAll, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then((resp: Response) => {
                    resp.json()
                    .then((res: ResultBase<category>) => {
                        resolve(res);
                    });
                })
                .catch((error) => {
                    reject([]);
                }) ;
            });
    }
    
    public static AddCategory(_category) {
        return new Promise<ResultBase<category>>((resolve, reject) => {
            fetch(Config.ApiUrl.Category.Add, {
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
                    .then((res: ResultBase<category>) => {
                        resolve(res);
                    });
                })
                .catch((error) => {
                    reject([]);
                }) ;
            });
    }

    public static UpdateCategory(_category) {
        return new Promise<ResultBase<category>>((resolve, reject) => {
            fetch(Config.ApiUrl.Category.Update, {
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
                    .then((res: ResultBase<category>) => {
                        resolve(res);
                    });
                })
                .catch((error) => {
                    reject([]);
                }) ;
            });
    }

    public static DeleteCategory(_categoryList, _category) {

    }
}