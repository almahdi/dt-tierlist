import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Marked } from '@ts-stack/markdown';
import * as aboutmd from 'raw-loader!../../../../README.md';

@Component({
  selector: 'app-about-page',
  template: `
      <div class="prose lg:prose-xl prose-purple p-4" [innerHTML]="aboutHtml"></div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [],
})
export class AboutPageComponent {
  aboutHtml;
  constructor(dom: DomSanitizer) {
   const html = Marked.parse(aboutmd.default);
    this.aboutHtml = dom.bypassSecurityTrustHtml(html);
  }
}
