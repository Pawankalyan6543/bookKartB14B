import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { Option } from "../option.model";
import { StyleManagerService } from "../stylemanager.service";

@Injectable()
export class ThemeService {
  constructor(
    private http: HttpClient,
    private styleManager: StyleManagerService
  ) {}

  getThemeOptions(): Promise<Array<Option>> {
    return this.http.get<Array<Option>>("assets/options.json").toPromise();
  }

  setTheme(themeToSet : any) {
    this.styleManager.setStyle(
      "theme",
      `https://bookcart.azurewebsites.net/${themeToSet}.css`

    );
  }
}
