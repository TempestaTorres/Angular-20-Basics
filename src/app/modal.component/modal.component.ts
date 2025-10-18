import {Component, inject, Input} from '@angular/core';
import {NgbActiveModal, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';

// Subscribe component
@Component({
  selector: 'ngbd-modal-content',
  imports: [NgbModule, FormsModule],
  template: `
		<div class="modal-header text-bg-primary">
			<h5 class="modal-title">{{ title }}</h5>
			<button type="button" class="btn-close" aria-label="Close" (click)="activeModal.dismiss('Cross click')"></button>
		</div>
		<div class="modal-body">
      <form novalidate (submit)="onFormSubmit($event)">
        <div class="mb-3">
          <label for="input-email" class="form-label">Email address</label>
          <input type="email" class="form-control" id="input-email" [(ngModel)]="inputEmail" name="email" aria-describedby="emailHelp">
          <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div class="d-flex justify-content-between">
          <button type="submit" class="btn btn-primary">Submit</button>
          <button type="button" class="btn btn-outline-secondary" (click)="activeModal.close('Close click')">{{ closeLabel }}</button>
        </div>
      </form>
		</div>
	`
})
export class NgbdModalContent {
  activeModal = inject(NgbActiveModal); //needs provider NgbActiveModal in appConfig

  @Input() title: string = '';
  @Input() closeLabel : String = 'Close';

  public inputEmail : string = '';

  public onFormSubmit(event: Event): void {

    event.preventDefault();
    console.log("Form submitted: " + this.inputEmail);
  }
}

// View Modal Component
@Component({
  selector: 'view-modal-content',
  imports: [NgbModule],
  template: `
		<div class="modal-header text-bg-primary">
			<h5 class="modal-title">{{ title }}</h5>
			<button type="button" class="btn-close" aria-label="Close" (click)="activeModal.dismiss('Cross click')"></button>
		</div>
		<div class="modal-body position-relative">
      <video autoplay loop playsinline>
        <source src="/mp4/Lipsy_August_Penelope_7X3.mp4">
        Your browser does not support HTML5 video.
      </video>
		</div>
		<div class="modal-footer">
			<button type="button" class="btn btn-outline-primary" (click)="activeModal.close('Close click')">{{ closeLabel }}</button>
		</div>
	`
})
export class NgbdViewModalComponent {
  activeModal = inject(NgbActiveModal); //needs provider NgbActiveModal in appConfig

  @Input() title: string = '';
  @Input() closeLabel : String = 'Close';
}
