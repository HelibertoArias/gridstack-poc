export const ROLE_NAMES = ['admin' , 'user' , 'editor' , 'manager'];


export interface User {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  role: string;
  isActive: boolean;
  createdAt: string; // ISO date string
  avatarUrl?: string;
  phone?: string;
  bio?: string;
  company?: string;
  location?: string;
}
export const USERS: User[] = [
  {
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
    location: 'Madrid, ES'
  },
  {
    id: 'u_2b7d4e8f',
    firstName: 'Carlos',
    lastName: 'Ramírez',
    username: 'carlos.r',
    email: 'carlos.ramirez@example.com',
    role: 'manager',
    isActive: true,
    createdAt: '2023-11-20T14:30:00.000Z',
    avatarUrl: 'https://i.pravatar.cc/150?img=2',
    phone: '+34 600 123 002',
    bio: 'Líder de equipo de frontend.',
    company: 'GridStack POC',
    location: 'Barcelona, ES'
  },
  {
    id: 'u_3c6e1a4d',
    firstName: 'Lucía',
    lastName: 'Fernández',
    username: 'lucia.f',
    email: 'lucia.fernandez@example.com',
    role: 'editor',
    isActive: true,
    createdAt: '2024-03-10T08:45:00.000Z',
    avatarUrl: 'https://i.pravatar.cc/150?img=3',
    phone: '+34 600 123 003',
    bio: 'Editora técnica y documentadora.',
    company: 'DocsLab',
    location: 'Valencia, ES'
  },
  {
    id: 'u_4d9b2c7e',
    firstName: 'Diego',
    lastName: 'Soto',
    username: 'diego.s',
    email: 'diego.soto@example.com',
    role: 'user',
    isActive: false,
    createdAt: '2022-07-01T12:00:00.000Z',
    avatarUrl: 'https://i.pravatar.cc/150?img=4',
    phone: '+34 600 123 004',
    bio: 'Desarrollador backend.',
    company: 'API Works',
    location: 'Sevilla, ES'
  },
  {
    id: 'u_5e0f8d1b',
    firstName: 'Ana',
    lastName: 'López',
    username: 'ana.lopez',
    email: 'ana.lopez@example.com',
    role: 'user',
    isActive: true,
    createdAt: '2024-05-02T16:20:00.000Z',
    avatarUrl: 'https://i.pravatar.cc/150?img=5',
    phone: '+34 600 123 005',
    bio: 'QA y automatización de pruebas.',
    company: 'QualityFirst',
    location: 'Bilbao, ES'
  },
  {
    id: 'u_6f2c3a9d',
    firstName: 'Javier',
    lastName: 'Mendoza',
    username: 'javi.m',
    email: 'javier.mendoza@example.com',
    role: 'editor',
    isActive: true,
    createdAt: '2023-12-15T10:05:00.000Z',
    avatarUrl: 'https://i.pravatar.cc/150?img=6',
    phone: '+34 600 123 006',
    bio: 'Creador de contenido técnico.',
    company: 'TechWrites',
    location: 'Granada, ES'
  },
  {
    id: 'u_7a1e6b5c',
    firstName: 'Sofía',
    lastName: 'Cruz',
    username: 'sofia.c',
    email: 'sofia.cruz@example.com',
    role: 'manager',
    isActive: true,
    createdAt: '2024-06-01T09:00:00.000Z',
    avatarUrl: 'https://i.pravatar.cc/150?img=7',
    phone: '+34 600 123 007',
    bio: 'Coordinadora de operaciones frontend.',
    company: 'GridStack POC',
    location: 'Alicante, ES'
  },
  {
    id: 'u_8b4d0f2a',
    firstName: 'Miguel',
    lastName: 'Ortiz',
    username: 'miguel.o',
    email: 'miguel.ortiz@example.com',
    role: 'manager',
    isActive: false,
    createdAt: '2021-09-09T11:11:00.000Z',
    avatarUrl: 'https://i.pravatar.cc/150?img=8',
    phone: '+34 600 123 008',
    bio: 'Operaciones y soporte.',
    company: 'OpsTeam',
    location: 'Zaragoza, ES'
  },
  {
    id: 'u_9c5f7e3b',
    firstName: 'Elena',
    lastName: 'Vega',
    username: 'elena.v',
    email: 'elena.vega@example.com',
    role: 'user',
    isActive: true,
    createdAt: '2024-02-18T13:40:00.000Z',
    avatarUrl: 'https://i.pravatar.cc/150?img=9',
    phone: '+34 600 123 009',
    bio: 'Analista de datos.',
    company: 'DataSight',
    location: 'Murcia, ES'
  },
  {
    id: 'u_a0d8c6f4',
    firstName: 'Pablo',
    lastName: 'Ibarra',
    username: 'pablo.i',
    email: 'pablo.ibarra@example.com',
    role: 'admin',
    isActive: true,
    createdAt: '2024-04-12T18:25:00.000Z',
    avatarUrl: 'https://i.pravatar.cc/150?img=10',
    phone: '+34 600 123 010',
    bio: 'Ingeniero de plataforma.',
    company: 'InfraWorks',
    location: 'Donostia, ES'
  }
];



