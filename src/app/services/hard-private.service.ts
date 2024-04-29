import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HardPrivateService {
  #longlonglonglonglonglonglonglongMessage = 'hard-private-message';

  constructor() {}

  getPrivateField() {
    return this.#longlonglonglonglonglonglonglongMessage;
  }
}
