import { get, post } from './crud';
const { REACT_APP_API_URL } = process.env;

class GuidService {
    private static guidApiRoute = REACT_APP_API_URL ? REACT_APP_API_URL : 'http://localhost:5000/guid';
    
    public static getSingle(): Promise<any> {
        console.log(process.env);
        return get(this.guidApiRoute);
    }

    public static getBulk(count: number): Promise<any> {
        return post(this.guidApiRoute, count);
    }
}

export default GuidService;