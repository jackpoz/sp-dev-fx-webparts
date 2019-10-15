export class ListItem {

    public title: string;
    public description:string;
    public imageUrl: string;

    constructor(data: any) {
      this.title = data.title || data.Title;
      this.description = data.description || data.Description;
      this.imageUrl = data.imageUrl || data.ImageUrl;
    }
}
