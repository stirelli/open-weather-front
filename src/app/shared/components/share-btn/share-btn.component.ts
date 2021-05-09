import { Component, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-share-btn',
  templateUrl: './share-btn.component.html',
  styleUrls: ['./share-btn.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShareBtnComponent {
  @Output() shareEvent: EventEmitter<void> = new EventEmitter<void>();

  constructor() {}

  public share(): void {
    this.shareEvent.emit();
  }
}
