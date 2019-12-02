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
    
    public static AddNewClient(_clientList, _client) {
        //Check if client exist or not
        if(!_clientList.some(u => u.key === _client.id)) {
            _clientList.push({ key:_client.id, name:_client.name })
        }
        return _clientList;
    }
}