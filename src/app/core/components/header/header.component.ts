import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CoreFacadeService } from '@app/core/services/core.facade.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  constructor(private coreFacadeService: CoreFacadeService) {}

  ngOnInit() {}

  public search(term: string): void {
    this.coreFacadeService.search(term);
  }
}
