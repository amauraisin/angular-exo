import { Component, OnInit, Input} from '@angular/core';
import {Post} from '../../models/post.model';
import {PostsService} from '../../services/posts.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input()post: Post;

  constructor(private postsService: PostsService) { }

  ngOnInit() {
  }

  onLikePost(){
    this.post.loveIts++;
    this.postsService.updatePosts();
  }

  onDislikePost(){
    this.post.loveIts--;
    this.postsService.updatePosts();
  }

  onDeletePost(post: Post){
    this.postsService.removePost(post);
  }

  getColor(){
    if(this.post.loveIts>0) return 'green';
    else if(this.post.loveIts<0) return 'red';
  }
}
