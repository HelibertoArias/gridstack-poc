import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SignalArchitectureService } from '../signal-architecture.service';
import { ROLE_NAMES, User } from './user-model';

@Component({
  selector: 'app-siganal-on-services',
  standalone: false,
  templateUrl: './siganal-on-services.component.html',
  styleUrl: './siganal-on-services.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiganalOnServicesComponent {
  testName() {
    //  this.testPerson.firstName = 'UpdatedName ' + Math.floor(Math.random() * 1000);
    this.testPerson = {
      ...this.testPerson,
      firstName: 'UpdatedName ' + Math.floor(Math.random() * 1000),
    };
  }

  testPerson: User = {
    id: 'u_1a3f9b2c',
    firstName: 'María',
    lastName: 'González',
    username: 'maria.g',
    email: 'maria.gonzalez@example.com',
    role: 'admin',
    isActive: true,
    createdAt: '2024-01-05T09:12:00.000Z',
    avatarUrl: 'https://i.pravatar.cc/150?img=1',
    phone: '+34 600 123 001',
    bio: 'Responsable de producto con enfoque en UX.',
    company: 'GridStack POC',
    location: 'Madrid, ES',
  };

  onRoleSelection(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const selectedRole = selectElement.value;
    this.signalArchitectureService.setSelectedRole(selectedRole || undefined);
  }
  signalArchitectureService = inject(SignalArchitectureService);

  text = this.signalArchitectureService.getText();
  textCalculated = this.signalArchitectureService.textCalculated;
  roles = ROLE_NAMES;
  usersFiltered = this.signalArchitectureService.userFiltered;
}
