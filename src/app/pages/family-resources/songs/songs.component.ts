
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Resources } from '../../../core/models/Resources/transformed/resources.model';
import { ResourcesService } from 'src/app/core/services/resources/resources.service';
import { Router } from '@angular/router';

interface SongResource extends Resources {
  safeLink: SafeResourceUrl;
}

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.scss']
})
export class SongsComponent implements OnInit {
  songs: SongResource[] = [];

  constructor(private resourcesService: ResourcesService, private sanitizer: DomSanitizer, private router:Router) { }

  ngOnInit(): void {
    this.resourcesService.getResources().subscribe((resources: Resources[]) => {
      this.songs = resources.filter(resource => resource.type === 'songs').map(song => {
        return {
          ...song,
          safeLink: this.getSafeUrl(song.link)
        } as SongResource;
      });
    });
  }
  getSafeUrl(url: string): SafeResourceUrl {
    const youtubeEmbedUrl = url.replace('watch?v=', 'embed/');
    return this.sanitizer.bypassSecurityTrustResourceUrl(youtubeEmbedUrl);
  }
}
/* Este es un componente que muestra una lista de canciones obtenidas a través del servicio ResourcesService. La clase SongsComponent implementa la interfaz OnInit y tiene un arreglo de objetos SongResource que representa las canciones. El constructor inyecta los servicios ResourcesService, DomSanitizer y Router. El método ngOnInit suscribe al método getResources del servicio ResourcesService y obtiene las canciones filtrando los recursos que tienen el tipo "songs" y creando un objeto SongResource para cada una de ellas. El método getSafeUrl utiliza el servicio DomSanitizer para obtener una URL segura para incrustar un video de YouTube en la página. */