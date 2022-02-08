import { Component, OnInit } from '@angular/core';
import { DomSanitizer, Meta, SafeHtml, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';


import { BlogService } from '../services/blog.service';



@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {

  blog: any;
  loading: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private service: BlogService,
    private sanitizer: DomSanitizer,
    private titleService: Title,
    private meta: Meta

  ) { }

  ngOnInit(): void {

    this.route.paramMap
      .subscribe(params => {
        let id = params.get('id');
        this.getDetails(id);
      });

  }

  getDetails(id): void {
    this.loading = true;
    this.service.getOne(id)
      .subscribe(blog => {
        this.blog = blog;
        this.performSeo(this.blog);
        this.loading = false;
      });
  }

  performSeo(blog) {
    this.titleService.setTitle(blog.title);
    this.meta.addTags([
      { name: 'description', content: blog.title },
      { name: 'keywords', content: blog.tags.toString() }  
    ]);
  }

  transformHtml(htmlTextWithStyle): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(htmlTextWithStyle);
  }

}
