import { Injectable } from '@angular/core';
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class GifsService {
  private _tagsHistory: string[] = [];
  private apiKey: string = 'OZjzUXU8Ne4FxUw0yMZaa1VPGeG1JsxL';

  constructor() { }

  get tagsHistory(): string[] {
    return [...this._tagsHistory];
  }

  private sortHistory(tag:string) {
    tag = tag.toLowerCase();
    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter(oldTag => oldTag !== tag);
    }
  }

  public searchTag(tag: string): void {
    if (tag.length === 0) return;
    this.sortHistory(tag);

    this._tagsHistory.unshift(tag)
    this._tagsHistory = this._tagsHistory.splice(0,10);
  }
}
