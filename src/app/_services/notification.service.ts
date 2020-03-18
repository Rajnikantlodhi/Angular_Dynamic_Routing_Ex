import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Subject } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class NotificationService {
 public notification$: Subject<string> = new Subject();

  constructor(private snacBar: MatSnackBar) {

    this.notification$.subscribe(message => {
      this.snacBar.open(message, '', {duration: 500});
    });
}
}
