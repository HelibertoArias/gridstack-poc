import { computed, Injectable, Signal, signal } from '@angular/core';
import { delay, of, tap } from 'rxjs';
import { User, USERS } from './siganal-on-services/user-model';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class SignalArchitectureService {
  private readonly text = signal<string>('Initial Name');

  private selectedRole = signal<string | undefined>(undefined);
  // public users = signal<User[] | undefined>(undefined);

  public userFiltered = computed(() => {
    const role = this.selectedRole();
    const users = this.users();
    if (!role || !users) {
      return users;
    }
    return users.filter((user) => user.role === role);
  });

  getSelectedRole() : Signal<string | undefined> {
    return this.selectedRole.asReadonly();
  }

  setSelectedRole(role: string | undefined) {
    this.selectedRole.set(role);
  }

  users$ = of(USERS).pipe(
    delay(3000),
    tap(() => {
      console.log('Users data emitted');
    })
  );

  users = toSignal(this.users$, { initialValue: undefined });

  textCalculated: Signal<string> = computed(() => {
    return `Calculated: ${this.text()}`;
  });

  getText(): Signal<string> {
    return this.text;
  }

  setText(newText: string): void {
    this.text.set(newText);
  }
}
