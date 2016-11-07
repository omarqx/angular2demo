import { Directive, ElementRef, HostListener, Input, Renderer } from '@angular/core';
import { PostsService } from './posts.service';

@Directive({
  selector: '[appLoadPosts]',
  providers: [
    PostsService
  ]
})
export class LoadPostsDirective {
  constructor(private el: ElementRef, private renderer: Renderer,private postsService:PostsService) { }
  @HostListener('mousedown',['$event']) onMouseDown(e:MouseEvent) {
    this.postsService.getPostsByUserId(this.el.nativeElement.attributes["data-id"].value)
    .then((x)=>this.setPosts(x.length));
  }
  private setPosts(number) {
    this.el.nativeElement.innerHTML = ""+number;
  }

}
