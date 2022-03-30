import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-emitter",
  templateUrl: "./emitter.component.html",
  styleUrls: ["./emitter.component.scss"],
})
export class EmitterComponent implements OnInit {
  number = 0;
  text = "";

  constructor() {}

  ngOnInit(): void {}

  onChangeNumber(msg: any) {
    this.text = msg;
    console.log("deu bom");
    this.number = Math.floor(Math.random() * 100);
  }
}
