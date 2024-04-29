# HardPrivateEsbuild

以下のように soft-private と hard-private 両方の Service を DI している Angular アプリケーションをビルドしてみた

```ts
// src/app/app.component.ts
import { Component, OnInit, inject } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { HardPrivateService } from "./services/hard-private.service";
import { SoftPrivateService } from "./services/soft-private.service";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent implements OnInit {
  title = "hard-private-esbuild";

  private softPrivateService = inject(SoftPrivateService);
  private hardPrivateService = inject(HardPrivateService);

  ngOnInit(): void {
    console.log(this.softPrivateService.getPrivateField());
    console.log(this.hardPrivateService.getPrivateField());
  }
}
```

```ts
// src/app/services/soft-private.service.ts
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class SoftPrivateService {
  private longlonglonglonglonglonglonglongMessage = "soft-private-message";

  constructor() {}

  getPrivateField() {
    return this.longlonglonglonglonglonglonglongMessage;
  }
}
```

```ts
// src/app/services/hard-private.service.ts
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class HardPrivateService {
  #longlonglonglonglonglonglonglongMessage = "hard-private-message";

  constructor() {}

  getPrivateField() {
    return this.#longlonglonglonglonglonglonglongMessage;
  }
}
```

ビルド結果は以下のようになった

```mjs
// dist/server/chunk-**.mjs
...
// HardPrivateServiceのコード
var L = (() => {
  var n;
  let o = class o {
    constructor() {
      // hard-privateはprvate fieldがminify時に短縮されている
      u(this, n, "hard-private-message");
    }
    getPrivateField() {
      return f(this, n);
    }
  };
  (n = new WeakMap()),
    (o.ɵfac = function (d) {
      return new (d || o)();
    }),
    (o.ɵprov = g({ token: o, factory: o.ɵfac, providedIn: "root" }));
  let e = o;
  return e;
})();
// SoftPrivateServiceのコード
var V = (() => {
  let n = class n {
    constructor() {
      // soft-privateはそのまま
      this.longlonglonglonglonglonglonglongMessage = "soft-private-message";
    }
    getPrivateField() {
      return this.longlonglonglonglonglonglonglongMessage;
    }
  };
  (n.ɵfac = function (l) {
    return new (l || n)();
  }),
    (n.ɵprov = g({ token: n, factory: n.ɵfac, providedIn: "root" }));
  let e = n;
  return e;
})();
...
```
