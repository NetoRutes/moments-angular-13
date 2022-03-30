import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "moments-angular-13";

  userData = {
    email: "netorutes@gmail.com",
    birth: "12/02/1991",
  };

  userName = "Wellington";
}
