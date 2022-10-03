import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  titleMusic = '';
  artist: string = '';
  music: string = '';
  lyricMusic: string = '';
  translateMusic: string = '';
  translateMusic2: string = '';
  artistMusic: string = '';
  artistMusicId: string = '';
  img: string = '';


  constructor(private homeService: HomeService) { }

  ngOnInit() {
  }

  findLyrics(){
  this.homeService.getMusic(this.artist, this.music).subscribe(
   (result: any) => {
    console.log('Sucesso',result);
    this.lyricMusic = "";
    this.translateMusic= "";
    this.translateMusic2= "";
    this.lyricMusic = result.mus[0].text;
    this.artistMusic = result.art.name;
    this.titleMusic = result.mus[0].name;
    this.artistMusicId = result.art.id;
    this.bringImage ();




if(result.type ! = "soung_notfound"){
  this.translateMusic = result.mus[0]?.translate[0].text;
}

   },
   (error: any) => {
    alert('Não encontramos nenhum resultado sobre')
   },
  )
  }
  bringImage(){
    let artist = this.artistMusicId;

    this.homeService.getImg(artist).subscribe(
          (img: any) => {
            this.img= img.images[0].url;
          }
    );
  }

  translate(){
    this.translateMusic2 = this.translateMusic;


  }

}
