import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { HeroComponent } from "./hero/hero.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { FooterComponent } from "./footer/footer.component";
import { PromotionListComponent } from "./promotion-list/promotion-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, HeroComponent, ProductListComponent, FooterComponent, PromotionListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sony-website-dummy';
}
