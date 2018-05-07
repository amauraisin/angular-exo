import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Post } from '../../models/post.model';


import { Router } from '@angular/router';
import {PostsService} from '../../services/posts.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './newpost.component.html',
  styleUrls: ['./newpost.component.scss']
})
export class NewpostComponent implements OnInit {

  postForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private postServices: PostsService,
              private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.postForm = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required]
    });
  }

  onSaveForm() {
    const title = this.postForm.get('title').value;
    const content = this.postForm.get('content').value;
    const newPost = new Post(title, content);

    this.postServices.createNewPost(newPost);
    this.router.navigate(['/posts']);
  }


}

