import { Component, OnInit, ViewEncapsulation, ViewChildren, ElementRef} from '@angular/core';
import { FormBuilder, FormControl, FormsModule, FormGroup, Validators,  FormControlName } from '@angular/forms';
import { TeximateModule, TeximateComponent, TeximateOptions, TeximateOrder, TeximateHover } from 'ng-teximate';
import { GenericValidator } from './generic-validator';
import { Router } from '@angular/router';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/merge';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { AppService } from './app.service';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  text = 'I\'m a Full Stack Developer. Love to learn new thing and share my knowledge to full extend.';
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
  options: TeximateOptions = {
    type: 'letter',
    animation: { name: 'rubberBand', duration: 1000 },
    word: { type: TeximateOrder.SHUFFLE, delay: 100 },
    letter: { type: TeximateOrder.SHUFFLE, delay: 50 }
  };
  hover1: TeximateHover = {
    type: 'letter',
    in: 'zoomIn',
    out: 'rubberBand'
  };
  userDetail: FormGroup;
  validationMessages;
  @ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[];
  displayMessage: { [key: string]: string } = {};
  private genericValidator: GenericValidator;
  constructor(private fb: FormBuilder,
    private router: Router,
    private service: AppService) {
    this.validationMessages = {
      firstName: {
          required: 'Name is required.',
          minlength: 'Name must be at least three characters.'
      },
      lastName: {
          required: 'Surname is required.',
          minlength: 'SurName must be at least three characters.'
      },
      email_id: {
          required: 'Email is required',
          email: 'Invalid Email'
      },
      message: {
        required: 'Message is required'
      }
    };
    this.genericValidator = new GenericValidator(this.validationMessages);
  }


  ngOnInit() {
    this.userDetail = this.fb.group({
      firstName: ['', [ Validators.required, Validators.minLength(3)]],
      lastName: ['', [ Validators.required, Validators.minLength(3)]],
      email_id: ['', [ Validators.required, Validators.email]],
      contact: '',
      message: ['', [ Validators.required ] ]
    });
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewInit(): void {
    // Watch for the blur event from any input element on the form.
      const  controlBlurs: Observable<any>[] = this.formInputElements
          .map((formControl: ElementRef) => Observable.fromEvent(formControl.nativeElement, 'blur'));

      // Merge the blur event observable with the valueChanges observable
      Observable.merge(this.userDetail.valueChanges, ...controlBlurs).debounceTime(800).subscribe(value => {
          this.displayMessage = this.genericValidator.processMessages(this.userDetail);
      });
  }

  onSubmit() {
    console.log(this.userDetail);
    this.service.postFormContact(this.userDetail.value).subscribe(data => {
      console.log(data);
      // this._flashMessagesService.show('Thanks For Feedback. Please, Check your mail', { cssClass: 'alert-success', timeout: 5000});
      window.location.reload();
    })
  }
}
