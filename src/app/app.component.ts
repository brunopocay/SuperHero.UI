import { Component, OnInit } from '@angular/core';
import { SuperHero } from './Models/super-hero';
import { SuperHeroService } from './Services/super-hero.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'SuperHero.UI';
  heroes: SuperHero[] = [];
  heroToEdit?: SuperHero;

  constructor(private superHeroService: SuperHeroService) {}
  
  
  ngOnInit(): void {
    this.superHeroService.GetSuperHeroes().subscribe((result: SuperHero[]) => (this.heroes = result));
  }

  initNewHero(){
    this.heroToEdit = new SuperHero;
  }

  editHero(hero: SuperHero) {
    this.heroToEdit = hero;
  }

  updateHeroList(heroes: SuperHero[]) {
    this.heroes = heroes;
  }


}
