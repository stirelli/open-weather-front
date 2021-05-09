import { ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShareComponent {
  @ViewChild('shareInput', { static: true }) shareInput: ElementRef;
  private shareUrl: string = `${window.location.origin}/forecast/shared/`;

  constructor() {}

  public setValue(value) {
    (this.shareInput.nativeElement as HTMLInputElement).value = this.shareUrl + value;
  }
}
