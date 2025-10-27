import { effect, Injectable, Signal, signal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import {
  catchError,
  delay,
  finalize,
  Observable,
  of,
  switchMap,
  tap,
  throwError,
} from 'rxjs';
import { User, USERS } from './siganal-on-services/user-model';

@Injectable()
export class SignalArchitectureService {

  private _isLoading = signal<boolean>(true);

  private _selectedRole = signal<string | null>(null);

  public get isLoading(): Signal<boolean> {
    return this._isLoading.asReadonly();
  }

  private set isLoading(value: boolean) {
    this._isLoading.set(value);
  }

  public usersFiltered = signal<User[]>([]);

  private getUserByRole(role: string | null): Observable<User[]> {
    let filteredUsers = USERS;
    if (role) {
      filteredUsers = USERS.filter((user) => user.role === role);
    }

    return of(filteredUsers).pipe(delay(1500));
  }

  public setSelectedRole(role: string | null) {
    this._selectedRole.set(role);
  }

  public getSelectedRole(): Signal<string | null> {
    return this._selectedRole.asReadonly();
  }

  constructor() {
    this.getUserByRoleEffect();
  }

  private getUserByRoleEffect() {
    effect((onCleanup) => {
      this._isLoading.set(true);

      const request$ = this.getUserByRole(this._selectedRole()).pipe(
        switchMap((users) => {
          if (this._selectedRole() === 'admin') {
            return throwError(() => new Error('Excepción forzada para pruebas'));
          }
          return of(users);
        }),
        catchError((error) => {
          this._isLoading.set(false);
          return of([]);
        }),
        finalize(() => {
          // Always executed, completed or error
          this._isLoading.set(false);
        }),
      );

      request$.subscribe((users) => this.usersFiltered.set(users));

      onCleanup(() => {
         // Run when the effect is re-run or destroyed
      });
    });
  }
}
