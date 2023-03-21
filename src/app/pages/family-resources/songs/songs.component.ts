import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Resources } from '../../../core/models/Resources/transformed/resources.model';
import { ResourcesService } from 'src/app/core/services/resources/resources.service';

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

  constructor(private resourcesService: ResourcesService, private sanitizer: DomSanitizer) { }

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