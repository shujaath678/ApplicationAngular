import { Injectable, Input } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})

export class AuthenticationService implements CanActivate {
	constructor(public router: Router, private http: HttpClient) {}

	public isUserAuthenticated : boolean = false;

	canActivate(): boolean {
		if (!this.isUserAuthenticated) {
			this.router.navigate(['login']);
			return false;
		}
		return true;
	}

	getQuestionsAsync() : Observable<any> {
		return this.http.get('assets/questions.json')
	}
}