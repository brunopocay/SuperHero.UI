import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SuperHero } from 'src/app/Models/super-hero';
import { SuperHeroService } from 'src/app/Services/super-hero.service';

@Component({
  selector: 'app-edit-hero',
  templateUrl: './edit-hero.component.html',
  styleUrls: ['./edit-hero.component.css']
})
export class EditHeroComponent implements OnInit {

  @Input() hero?: SuperHero;
  @Output() heroUpdated = new EventEmitter<SuperHero[]>();

  constructor(private service: SuperHeroService) {}

  ngOnInit(): void {
    
  }

  updateHero(hero: SuperHero) {
    this.service.UpdateSuperHero(hero).subscribe((heroes: SuperHero[]) => this.heroUpdated.emit(heroes));
  }

  deleteHero(hero: SuperHero) {
    this.service.DeleteSuperHero(hero).subscribe((heroes: SuperHero[]) => this.heroUpdated.emit(heroes));
  }

  createHero(hero: SuperHero) {
    this.service.CreateSuperHero(hero).subscribe((heroes: SuperHero[]) => this.heroUpdated.emit(heroes));
  }

}
