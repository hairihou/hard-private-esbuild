import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SoftPrivateService {
  private longlonglonglonglonglonglonglongMessage = 'soft-private-message';

  constructor() {}

  getPrivateField() {
    return this.longlonglonglonglonglonglonglongMessage;
  }
}
