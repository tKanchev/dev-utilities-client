import { get, post } from './crud';
const { REACT_APP_API_URL } = process.env;

class GuidService {
    private static guidApiRoute = REACT_APP_API_URL ? REACT_APP_API_URL : 'https://guid-gen-api.azurewebsites.net/guid';
    
    public static getSingle(): Promise<any> {
        return get(this.guidApiRoute);
    }

    public static getBulk(count: number): Promise<any> {
        return post(this.guidApiRoute, count);
    }
}

export default GuidService;