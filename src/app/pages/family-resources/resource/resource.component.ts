import { Component, Input } from '@angular/core';
import { Resources } from 'src/app/core/models/Resources/transformed/resources.model';

@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.scss']
})
export class ResourceComponent {
  @Input() resources?: Resources;
}
