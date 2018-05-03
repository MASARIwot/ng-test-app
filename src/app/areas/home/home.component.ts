import { Component } from "@angular/core";

import { AppInfoService } from "../../shared";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent {
  title = this.appInfo.title;

  constructor(private appInfo: AppInfoService,
    private route: ActivatedRoute) {
      this.route.params.subscribe( params => console.log(params) );
      this.route.queryParams.subscribe( params => console.log(params) );
      this.route.fragment.subscribe( params => console.log(params) );
     }
}
