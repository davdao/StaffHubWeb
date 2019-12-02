import { staffGroup } from "../model/staffGroup";
import { Config } from "../utils/constants";
import { ResultBase } from "../model/httpRequest/resultbase";

export default class activityBusiness {
    public static GetActivityById(_id: string) {
        return new Promise<ResultBase<staffGroup>>((resolve, reject) => {
        fetch(Config.ApiUrl.Activity.GetById.replace("{0}", _id), {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((resp: Response) => {
                resp.json()
                .then((res: ResultBase<staffGroup>) => {
                    resolve(res);
                });
            })
            .catch((error) => {
                reject([]);
            }) ;
        });
    }
}
