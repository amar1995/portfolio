import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import { TeximateModule, TeximateComponent, TeximateOptions, TeximateOrder, TeximateHover } from 'ng-teximate';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  text = 'I\'m a Full Stack Developer. Love to learn new thing and share my knowledge to full extend.';
  constructor(private modalService: NgbModal) {
  }
  openBackDropCustomClass(content) {
    this.modalService.open(content, {backdropClass: 'light-blue-backdrop'});
  }
  options: TeximateOptions = {
    type: 'letter',
    animation: { name: 'rubberBand', duration: 1000 },
    word: { type: TeximateOrder.SHUFFLE, delay: 100 },
    letter: { type: TeximateOrder.SHUFFLE, delay: 50 }
  };

  hover: TeximateHover = {
    type: 'letter',
    in: 'zoomIn',
    out: 'bounce'
  };
  title = 'Hello, I am Amar Kumar Bathwal';
  options1: TeximateOptions = {
    type: 'letter',
    animation: { name: 'bounce', duration: 1000 },
    word: { type: TeximateOrder.SHUFFLE, delay: 100 },
    letter: { type: TeximateOrder.SEQUENCE, delay: 50 }
  };

  hover1: TeximateHover = {
    type: 'letter',
    in: 'zoomIn',
    out: 'rubberBand'
  };
  ngOnInit() {
  }
}
