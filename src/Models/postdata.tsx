export class PostData {
    private id: number;
    private userId: number;
    private title: string;
    private body: string;

    constructor(Id: number, UserId: number, Title: string, Body: string) {
        this.userId = UserId;
        this.id = Id;
        this.title = Title;
        this.body = Body;
    }

    
}