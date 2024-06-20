export interface OutputBlockData {
    id?: string;
    type: any;
    data: any;
}
export declare class CreatePostDto {
    title: string;
    body: OutputBlockData[];
    tags: string;
}
