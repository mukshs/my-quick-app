import { Component } from '@angular/core';
import {PostsService} from '../services/posts.service';

@Component({
    moduleId: module.id,
    selector: 'user',
    templateUrl: 'user.component.html',
    providers: [PostsService]
})
export class UserComponent  {
  name: string;
  mail: string;
  address: Address;
  hobbies: string[];
  showHobbies: boolean;
  posts: Post[];

  constructor(private postsService: PostsService) {
    this.name = 'Mukesh Soyal';
    this.mail = 'mukeshsoyal@live.com';
    this.hobbies = ['Cricket', 'Tennis'];
    this.address = {
        street : 'Jai bhanu society',
        city : 'Ahmedabad',
        postcode : '123456'
    };
    this.showHobbies = false;
    this.postsService.getPosts().subscribe(posts => {
        this.posts = posts;
        console.log(posts);
    });
  }

  toggleHobbies() {
    this.showHobbies = !this.showHobbies;
  }

  addHobby(hobby: string) {
      this.hobbies.push(hobby);
  }

  deleteHobby(index: number) {
    this.hobbies.splice(index, 1);
  }
}

interface Address {
    street: string;
    city: string;
    postcode: string;
}

interface Post {
    id: number;
    title: string;
    body: string;
}