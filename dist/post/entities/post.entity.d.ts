import { OutputBlockData } from '../dto/create-post.dto';
import { UserEntity } from '../../user/entities/user.entity';
export declare class PostEntity {
    id: number;
    title: string;
    body: OutputBlockData[];
    description: string;
    user: UserEntity;
    views: number;
    tags?: string;
    createdAt: Date;
    updatedAt: Date;
}
