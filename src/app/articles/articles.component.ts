import { Component, AfterViewChecked, ElementRef } from '@angular/core';
import { ReadArticlesService } from '../read-articles.service';
import { ChangeDetectorRef } from '@angular/core';


@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements AfterViewChecked {
  isScroll = false;
  articles = [];
  contentHeight = 270;

  private jsonURL = '../../assets/articles.json';
  constructor(private readArticle: ReadArticlesService,
              private elem: ElementRef,
              private cdRef: ChangeDetectorRef) {
    this.readArticle.getArticles().subscribe(data => this.articles = data);
  }

  ngAfterViewChecked() {
    console.log('ngafterview');
    const elements = this.elem.nativeElement.querySelectorAll('.article-text');
    elements.forEach(element => {
      if (element.offsetHeight < this.contentHeight) {
        element.nextSibling.classList.add('hide');
        element.nextSibling.nextSibling.classList.add('hide');
      }
    });
    this.cdRef.detectChanges();
  }

  toggleText() {
    this.isScroll = !this.isScroll;
  }
}
