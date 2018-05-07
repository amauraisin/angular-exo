export class Post {
  created_at: string;
  loveIts: number=0;
  constructor(public title: string, public content: string) {
    this.created_at = new Date().toString();
  }
}
