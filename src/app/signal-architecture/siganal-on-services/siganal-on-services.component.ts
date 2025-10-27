import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SignalArchitectureService } from '../signal-architecture.service';
import { ROLE_NAMES } from './user-model';

@Component({
  selector: 'app-siganal-on-services',
  standalone: false,
  templateUrl: './siganal-on-services.component.html',
  styleUrl: './siganal-on-services.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [SignalArchitectureService],
})
export class SiganalOnServicesComponent {
  onRoleSelection(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const selectedRole = selectElement.value;

    this.signalArchitectureService.setSelectedRole(
      selectedRole ? selectedRole : null
    );
  }

  signalArchitectureService = inject(SignalArchitectureService);
  isLoading = this.signalArchitectureService.isLoading;

  roles = ROLE_NAMES;
  usersFiltered = this.signalArchitectureService.usersFiltered;
}
