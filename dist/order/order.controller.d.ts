import { OrderService } from './order.service';
export declare class OrderController {
    private readonly orderService;
    constructor(orderService: OrderService);
    getOrder(): Promise<any>;
    getAll(id: string): Promise<any>;
    getOne(id: number): Promise<any>;
}
