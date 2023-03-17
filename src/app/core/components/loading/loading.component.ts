import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { LoadingService } from '../../services/loading/loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent {
  public showLoading$?: Observable<boolean>;
  constructor(private loadingService: LoadingService) {}

  public ngOnInit(): void {
      this.showLoading$ = this.loadingService.shouldShowLoading$;
  }
}
