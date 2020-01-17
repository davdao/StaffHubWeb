import { Config } from "../utils/constants";
import { ResultBase } from "../model/httpRequest/resultbase";
import { category } from "../model/category";
import { shift } from "../model/shift";

export default class memberBusiness {
    public static  AddMemberEvent(_userEmail: string, _item: shift, _activityId: string) {
        return new Promise<ResultBase<category>>((resolve, reject) => {
            fetch(Config.ApiUrl.Member.Event.Add.replace("{0}", _userEmail).replace("{1}", _activityId), {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "Title" : _item.title,
                    "StartDate": _item.startDate,
                    "EndDate" : _item.endDate,
                    "Category": {
                        "Name" : _item.category.name,
                        "Id" : parseInt(_item.category.id!)
                    }
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

    public static  UpdateMemberEvent(_item: shift) {
        return new Promise<ResultBase<shift>>((resolve, reject) => {
            fetch(Config.ApiUrl.Member.Event.Update, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(_item),
            })
                .then((resp: Response) => {
                    resp.json()
                    .then((res: ResultBase<shift>) => {
                        resolve(res);
                    });
                })
                .catch((error) => {
                    reject([]);
                }) ;
            });
    }

    public static  DeleteMemberEvent(_item: shift) {
        return new Promise<ResultBase<shift>>((resolve, reject) => {
            fetch(Config.ApiUrl.Member.Event.Delete, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(_item),
            })
                .then((resp: Response) => {
                    resp.json()
                    .then((res: ResultBase<shift>) => {
                        resolve(res);
                    });
                })
                .catch((error) => {
                    reject([]);
                }) ;
            });
    }
}