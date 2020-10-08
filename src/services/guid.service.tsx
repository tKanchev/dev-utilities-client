import { get, post } from './crud';

class GuidService {
    private static guidApiRoute = 'http://localhost:5000/guid';
    
    public static getSingle(): Promise<any> {
        return get(this.guidApiRoute);
    }

    public static getBulk(count: number): Promise<any> {
        return post(this.guidApiRoute, count);
    }
}

export default GuidService;