import { createServer, Response } from 'miragejs';

export default function () {
  createServer({
    routes() {
      this.post(
        '/api/login',
        (schema, request) => {
          return {
            userData: {
              email: 'admin@loanrecovery.com',
              name: 'Admin',
            },
            accessToken:
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
          };
        },
        {
          timing: 2000,
        },
      );

      this.post(
        '/api/logout',
        (schema, request) => {
          return new Response(200);
        },
        {
          timing: 2000,
        },
      );
      this.post(
        '/api/register',
        (schema, request) => {
          return {
            email: 'admin@loanrecovery.com',
            name: 'Admin',
            password: '123456',
          };
        },
        {
          timing: 2000,
        },
      );
      this.get(
        '/api/loans',
        (schema, request) => {
          return [
            {
              id: 'L12345ABC',
              borrower: {
                id: 'f5f45df1-6596-4cf2-82f6-f4f2a0b08327',
                firstName: 'John',
                lastName: 'Doe',
                accountNumber: 'AC12345678',
                contactInfo: {
                  phoneNumbers: ['+1234567890'],
                  address: '123 Elm Street',
                  email: 'john.doe@example.com',
                },
                income: 35000,
                references: [
                  {
                    name: 'Jane Doe',
                    relationship: 'Friend',
                    phoneNumber: '+1234567891',
                  },
                  {
                    name: 'Mike Smith',
                    relationship: 'Colleague',
                    phoneNumber: '+1234567892',
                  },
                ],
              },
              loanAmount: 50000,
              interestRate: 5.5,
              startDate: '2023-01-15',
              endDate: '2025-01-15',
              repaymentSchedule: [
                {
                  date: '2023-02-15',
                  amount: 1500,
                  status: 'paid',
                },
                {
                  date: '2023-03-15',
                  amount: 1500,
                  status: 'due',
                },
              ],
              outstandingBalance: 48500,
              status: 'current',
            },
            {
              id: 'L67890XYZ',
              borrower: {
                id: 'd91c1f43-08dc-4a7e-b0f4-7ea0c2a6e8f0',
                firstName: 'Emily',
                lastName: 'Johnson',
                accountNumber: 'AC87654321',
                contactInfo: {
                  phoneNumbers: ['+1234567893'],
                  address: '456 Oak Avenue',
                  email: 'emily.johnson@example.com',
                },
                income: 42000,
                references: [
                  {
                    name: 'Sarah Johnson',
                    relationship: 'Sister',
                    phoneNumber: '+1234567894',
                  },
                  {
                    name: 'David Brown',
                    relationship: 'Neighbor',
                    phoneNumber: '+1234567895',
                  },
                ],
              },
              loanAmount: 60000,
              interestRate: 4.8,
              startDate: '2023-03-10',
              endDate: '2025-03-10',
              repaymentSchedule: [
                {
                  date: '2023-04-10',
                  amount: 2000,
                  status: 'due',
                },
                {
                  date: '2023-05-10',
                  amount: 2000,
                  status: 'paid',
                },
              ],
              outstandingBalance: 58000,
              status: 'overdue',
            },
            {
              id: 'L11223DEF',
              borrower: {
                id: 'b42c8a4a-16b1-4c5b-8d73-0bfa2b4c8d1b',
                firstName: 'Michael',
                lastName: 'Williams',
                accountNumber: 'AC23456789',
                contactInfo: {
                  phoneNumbers: ['+1234567896'],
                  address: '789 Pine Road',
                  email: 'michael.williams@example.com',
                },
                income: 47000,
                references: [
                  {
                    name: 'Laura Williams',
                    relationship: 'Wife',
                    phoneNumber: '+1234567897',
                  },
                  {
                    name: 'James Miller',
                    relationship: 'Friend',
                    phoneNumber: '+1234567898',
                  },
                ],
              },
              loanAmount: 55000,
              interestRate: 5.0,
              startDate: '2023-02-20',
              endDate: '2025-02-20',
              repaymentSchedule: [
                {
                  date: '2023-03-20',
                  amount: 1600,
                  status: 'overdue',
                },
                {
                  date: '2023-04-20',
                  amount: 1600,
                  status: 'paid',
                },
              ],
              outstandingBalance: 53400,
              status: 'defaulted',
            },
            {
              id: 'L33445UVW',
              borrower: {
                id: 'a94d0d2e-53d0-4e3f-89bb-fcdd9d881c42',
                firstName: 'Olivia',
                lastName: 'Martinez',
                accountNumber: 'AC34567890',
                contactInfo: {
                  phoneNumbers: ['+1234567899'],
                  address: '321 Maple Lane',
                  email: 'olivia.martinez@example.com',
                },
                income: 39000,
                references: [
                  {
                    name: 'Robert Martinez',
                    relationship: 'Husband',
                    phoneNumber: '+1234567800',
                  },
                  {
                    name: 'Anna Davis',
                    relationship: 'Colleague',
                    phoneNumber: '+1234567801',
                  },
                ],
              },
              loanAmount: 65000,
              interestRate: 4.5,
              startDate: '2023-04-01',
              endDate: '2025-04-01',
              repaymentSchedule: [
                {
                  date: '2023-05-01',
                  amount: 1700,
                  status: 'paid',
                },
                {
                  date: '2023-06-01',
                  amount: 1700,
                  status: 'due',
                },
              ],
              outstandingBalance: 63300,
              status: 'settled',
            },
            {
              id: 'L55667GHI',
              borrower: {
                id: '9e72f3d6-f3a7-4a6b-97e1-5e4d9d8f7a3b',
                firstName: 'Aiden',
                lastName: 'Brown',
                accountNumber: 'AC45678901',
                contactInfo: {
                  phoneNumbers: ['+1234567802'],
                  address: '654 Birch Boulevard',
                  email: 'aiden.brown@example.com',
                },
                income: 41000,
                references: [
                  {
                    name: 'Sophia Brown',
                    relationship: 'Mother',
                    phoneNumber: '+1234567803',
                  },
                  {
                    name: 'Daniel Lee',
                    relationship: 'Friend',
                    phoneNumber: '+1234567804',
                  },
                ],
              },
              loanAmount: 70000,
              interestRate: 6.0,
              startDate: '2023-05-05',
              endDate: '2025-05-05',
              repaymentSchedule: [
                {
                  date: '2023-06-05',
                  amount: 1800,
                  status: 'paid',
                },
                {
                  date: '2023-07-05',
                  amount: 1800,
                  status: 'due',
                },
              ],
              outstandingBalance: 68200,
              status: 'written_off',
            },
            {
              id: 'L12345ABC',
              borrower: {
                id: 'f5f45df1-6596-4cf2-82f6-f4f2a0b08327',
                firstName: 'John',
                lastName: 'Doe',
                accountNumber: 'AC12345678',
                contactInfo: {
                  phoneNumbers: ['+1234567890'],
                  address: '123 Elm Street',
                  email: 'john.doe@example.com',
                },
                income: 35000,
                references: [
                  {
                    name: 'Jane Doe',
                    relationship: 'Friend',
                    phoneNumber: '+1234567891',
                  },
                  {
                    name: 'Mike Smith',
                    relationship: 'Colleague',
                    phoneNumber: '+1234567892',
                  },
                ],
              },
              loanAmount: 50000,
              interestRate: 5.5,
              startDate: '2023-01-15',
              endDate: '2025-01-15',
              repaymentSchedule: [
                {
                  date: '2023-02-15',
                  amount: 1500,
                  status: 'paid',
                },
                {
                  date: '2023-03-15',
                  amount: 1500,
                  status: 'due',
                },
              ],
              outstandingBalance: 48500,
              status: 'current',
            },
            {
              id: 'L12346DEF',
              borrower: {
                id: 'a3c4d8e2-6b1f-45a9-8a6c-2f9f3c5e6a9f',
                firstName: 'Alice',
                lastName: 'Johnson',
                accountNumber: 'AC98765432',
                contactInfo: {
                  phoneNumbers: ['+1234567893'],
                  address: '456 Oak Avenue',
                  email: 'alice.johnson@example.com',
                },
                income: 45000,
                references: [
                  {
                    name: 'Bob Johnson',
                    relationship: 'Brother',
                    phoneNumber: '+1234567894',
                  },
                  {
                    name: 'Susan Clark',
                    relationship: 'Friend',
                    phoneNumber: '+1234567895',
                  },
                ],
              },
              loanAmount: 60000,
              interestRate: 4.5,
              startDate: '2023-02-20',
              endDate: '2026-02-20',
              repaymentSchedule: [
                {
                  date: '2023-03-20',
                  amount: 2000,
                  status: 'paid',
                },
                {
                  date: '2023-04-20',
                  amount: 2000,
                  status: 'due',
                },
              ],
              outstandingBalance: 58000,
              status: 'overdue',
            },
            {
              id: 'L12347GHI',
              borrower: {
                id: 'd4e7f5b3-7a6c-48e3-91e3-2c5f4d8f9e7a',
                firstName: 'Michael',
                lastName: 'Brown',
                accountNumber: 'AC56473829',
                contactInfo: {
                  phoneNumbers: ['+1234567896'],
                  address: '789 Pine Road',
                  email: 'michael.brown@example.com',
                },
                income: 50000,
                references: [
                  {
                    name: 'Emma Brown',
                    relationship: 'Wife',
                    phoneNumber: '+1234567897',
                  },
                  {
                    name: 'David Wilson',
                    relationship: 'Friend',
                    phoneNumber: '+1234567898',
                  },
                ],
              },
              loanAmount: 70000,
              interestRate: 6.0,
              startDate: '2023-03-10',
              endDate: '2027-03-10',
              repaymentSchedule: [
                {
                  date: '2023-04-10',
                  amount: 2500,
                  status: 'paid',
                },
                {
                  date: '2023-05-10',
                  amount: 2500,
                  status: 'due',
                },
              ],
              outstandingBalance: 67500,
              status: 'defaulted',
            },
            {
              id: 'L12348JKL',
              borrower: {
                id: 'c8d9e2f1-7b2a-4a3e-91e2-2c3f4d5f8b6a',
                firstName: 'Sarah',
                lastName: 'Williams',
                accountNumber: 'AC83749201',
                contactInfo: {
                  phoneNumbers: ['+1234567899'],
                  address: '321 Birch Lane',
                  email: 'sarah.williams@example.com',
                },
                income: 42000,
                references: [
                  {
                    name: 'James Williams',
                    relationship: 'Husband',
                    phoneNumber: '+1234567800',
                  },
                  {
                    name: 'Linda Harris',
                    relationship: 'Colleague',
                    phoneNumber: '+1234567801',
                  },
                ],
              },
              loanAmount: 45000,
              interestRate: 5.0,
              startDate: '2023-04-05',
              endDate: '2025-04-05',
              repaymentSchedule: [
                {
                  date: '2023-05-05',
                  amount: 1500,
                  status: 'paid',
                },
                {
                  date: '2023-06-05',
                  amount: 1500,
                  status: 'due',
                },
              ],
              outstandingBalance: 43500,
              status: 'settled',
            },
            {
              id: 'L12349MNO',
              borrower: {
                id: 'b9e2f3d4-7a6b-4c3e-92e1-2d5f4e8b7c6d',
                firstName: 'David',
                lastName: 'Jones',
                accountNumber: 'AC49283756',
                contactInfo: {
                  phoneNumbers: ['+1234567802'],
                  address: '654 Cedar Street',
                  email: 'david.jones@example.com',
                },
                income: 48000,
                references: [
                  {
                    name: 'Karen Jones',
                    relationship: 'Wife',
                    phoneNumber: '+1234567803',
                  },
                  {
                    name: 'Robert Taylor',
                    relationship: 'Friend',
                    phoneNumber: '+1234567804',
                  },
                ],
              },
              loanAmount: 55000,
              interestRate: 4.8,
              startDate: '2023-05-15',
              endDate: '2026-05-15',
              repaymentSchedule: [
                {
                  date: '2023-06-15',
                  amount: 2000,
                  status: 'paid',
                },
                {
                  date: '2023-07-15',
                  amount: 2000,
                  status: 'due',
                },
              ],
              outstandingBalance: 53000,
              status: 'written_off',
            },
            {
              id: 'L12350PQR',
              borrower: {
                id: 'c7f8e9d5-7a6b-4d3e-92e2-2d4f5e9c6b7d',
                firstName: 'Linda',
                lastName: 'Martinez',
                accountNumber: 'AC58374920',
                contactInfo: {
                  phoneNumbers: ['+1234567805'],
                  address: '987 Maple Boulevard',
                  email: 'linda.martinez@example.com',
                },
                income: 53000,
                references: [
                  {
                    name: 'John Martinez',
                    relationship: 'Brother',
                    phoneNumber: '+1234567806',
                  },
                  {
                    name: 'Patricia Lewis',
                    relationship: 'Friend',
                    phoneNumber: '+1234567807',
                  },
                ],
              },
              loanAmount: 65000,
              interestRate: 4.9,
              startDate: '2023-06-20',
              endDate: '2026-06-20',
              repaymentSchedule: [
                {
                  date: '2023-07-20',
                  amount: 2200,
                  status: 'paid',
                },
                {
                  date: '2023-08-20',
                  amount: 2200,
                  status: 'due',
                },
              ],
              outstandingBalance: 62800,
              status: 'current',
            },
            {
              id: 'L12351STU',
              borrower: {
                id: 'd7e9f2c3-7a6c-4e3e-91e3-2d5f4d8c7b6e',
                firstName: 'James',
                lastName: 'Lee',
                accountNumber: 'AC10293847',
                contactInfo: {
                  phoneNumbers: ['+1234567808'],
                  address: '234 Willow Lane',
                  email: 'james.lee@example.com',
                },
                income: 46000,
                references: [
                  {
                    name: 'Mary Lee',
                    relationship: 'Sister',
                    phoneNumber: '+1234567809',
                  },
                  {
                    name: 'Thomas Young',
                    relationship: 'Friend',
                    phoneNumber: '+1234567810',
                  },
                ],
              },
              loanAmount: 48000,
              interestRate: 5.3,
              startDate: '2023-07-15',
              endDate: '2025-07-15',
              repaymentSchedule: [
                {
                  date: '2023-08-15',
                  amount: 1800,
                  status: 'paid',
                },
                {
                  date: '2023-09-15',
                  amount: 1800,
                  status: 'due',
                },
              ],
              outstandingBalance: 46200,
              status: 'overdue',
            },
            {
              id: 'L12352VWX',
              borrower: {
                id: 'e9f3c4d5-7b6a-4d3e-92e1-2d5f4e8c6b7d',
                firstName: 'Barbara',
                lastName: 'Clark',
                accountNumber: 'AC39284756',
                contactInfo: {
                  phoneNumbers: ['+1234567811'],
                  address: '789 Elm Drive',
                  email: 'barbara.clark@example.com',
                },
                income: 47000,
                references: [
                  {
                    name: 'Richard Clark',
                    relationship: 'Husband',
                    phoneNumber: '+1234567812',
                  },
                  {
                    name: 'Steven Harris',
                    relationship: 'Friend',
                    phoneNumber: '+1234567813',
                  },
                ],
              },
              loanAmount: 52000,
              interestRate: 5.1,
              startDate: '2023-08-05',
              endDate: '2026-08-05',
              repaymentSchedule: [
                {
                  date: '2023-09-05',
                  amount: 2000,
                  status: 'paid',
                },
                {
                  date: '2023-10-05',
                  amount: 2000,
                  status: 'due',
                },
              ],
              outstandingBalance: 50000,
              status: 'defaulted',
            },
            {
              id: 'L12353YZA',
              borrower: {
                id: 'c9d8e2f3-7a6b-4c3e-91e2-2d5f4e9b6c7e',
                firstName: 'Daniel',
                lastName: 'Lopez',
                accountNumber: 'AC49583726',
                contactInfo: {
                  phoneNumbers: ['+1234567814'],
                  address: '456 Pine Avenue',
                  email: 'daniel.lopez@example.com',
                },
                income: 51000,
                references: [
                  {
                    name: 'Samantha Lopez',
                    relationship: 'Wife',
                    phoneNumber: '+1234567815',
                  },
                  {
                    name: 'Gary Thomas',
                    relationship: 'Friend',
                    phoneNumber: '+1234567816',
                  },
                ],
              },
              loanAmount: 60000,
              interestRate: 4.7,
              startDate: '2023-09-10',
              endDate: '2026-09-10',
              repaymentSchedule: [
                {
                  date: '2023-10-10',
                  amount: 2200,
                  status: 'paid',
                },
                {
                  date: '2023-11-10',
                  amount: 2200,
                  status: 'due',
                },
              ],
              outstandingBalance: 57800,
              status: 'settled',
            },
            {
              id: 'L12354BCD',
              borrower: {
                id: 'd8e9f2c4-7b6a-4e3e-92e2-2d5f4e9c6b7d',
                firstName: 'Joseph',
                lastName: 'White',
                accountNumber: 'AC38475629',
                contactInfo: {
                  phoneNumbers: ['+1234567817'],
                  address: '123 Cedar Court',
                  email: 'joseph.white@example.com',
                },
                income: 52000,
                references: [
                  {
                    name: 'Angela White',
                    relationship: 'Wife',
                    phoneNumber: '+1234567818',
                  },
                  {
                    name: 'Brian King',
                    relationship: 'Friend',
                    phoneNumber: '+1234567819',
                  },
                ],
              },
              loanAmount: 53000,
              interestRate: 4.6,
              startDate: '2023-10-05',
              endDate: '2026-10-05',
              repaymentSchedule: [
                {
                  date: '2023-11-05',
                  amount: 2100,
                  status: 'paid',
                },
                {
                  date: '2023-12-05',
                  amount: 2100,
                  status: 'due',
                },
              ],
              outstandingBalance: 50800,
              status: 'written_off',
            },
            {
              id: 'L12355EFG',
              borrower: {
                id: 'e8f3c4d5-7b6c-4e3e-92e2-2d5f4e9c6b7e',
                firstName: 'Emily',
                lastName: 'Hall',
                accountNumber: 'AC39582647',
                contactInfo: {
                  phoneNumbers: ['+1234567820'],
                  address: '789 Oak Lane',
                  email: 'emily.hall@example.com',
                },
                income: 49000,
                references: [
                  {
                    name: 'Nicholas Hall',
                    relationship: 'Husband',
                    phoneNumber: '+1234567821',
                  },
                  {
                    name: 'Donna Moore',
                    relationship: 'Friend',
                    phoneNumber: '+1234567822',
                  },
                ],
              },
              loanAmount: 58000,
              interestRate: 4.7,
              startDate: '2023-11-10',
              endDate: '2026-11-10',
              repaymentSchedule: [
                {
                  date: '2023-12-10',
                  amount: 2300,
                  status: 'paid',
                },
                {
                  date: '2024-01-10',
                  amount: 2300,
                  status: 'due',
                },
              ],
              outstandingBalance: 55700,
              status: 'current',
            },
            {
              id: 'L12356HIJ',
              borrower: {
                id: 'f8d9e2c3-7a6b-4e3e-91e3-2d5f4e8c6b7d',
                firstName: 'Christopher',
                lastName: 'Young',
                accountNumber: 'AC49583761',
                contactInfo: {
                  phoneNumbers: ['+1234567823'],
                  address: '321 Birch Road',
                  email: 'christopher.young@example.com',
                },
                income: 54000,
                references: [
                  {
                    name: 'Jessica Young',
                    relationship: 'Wife',
                    phoneNumber: '+1234567824',
                  },
                  {
                    name: 'Paul Baker',
                    relationship: 'Friend',
                    phoneNumber: '+1234567825',
                  },
                ],
              },
              loanAmount: 61000,
              interestRate: 4.5,
              startDate: '2023-12-15',
              endDate: '2026-12-15',
              repaymentSchedule: [
                {
                  date: '2024-01-15',
                  amount: 2400,
                  status: 'paid',
                },
                {
                  date: '2024-02-15',
                  amount: 2400,
                  status: 'due',
                },
              ],
            },
          ];
        },
        {
          timing: 0,
        },
      );

      this.post('/api/loans', () => new Response(200), { timing: 5000 });

      this.get('/api/borrowers', () => {
        return [
          {
            id: 'a7f3f9d7-91f1-4f44-905e-6a2d03dfd83d',
            fullName: 'John Doe',
            accountNumber: 'ACC174391',
            status: 'active',
            creditScore: 712,
            email: 'john.doe@example.com',
            phoneNumber: '555-4367-9284',
            loanCount: 2,
            createdAt: '2021-05-12T00:00:00.000Z',
            lastUpdated: '2023-07-20T00:00:00.000Z',
            address: '123 Main St, Springfield',
            notes: 'Notes for John Doe',
          },
          {
            id: 'b8e5b8a6-4e7b-4f44-8c2e-1a7d2e6e4b44',
            fullName: 'Jane Smith',
            accountNumber: 'ACC239874',
            status: 'in_good_standing',
            creditScore: 786,
            email: 'jane.smith@example.com',
            phoneNumber: '555-8473-5123',
            loanCount: 1,
            createdAt: '2020-11-03T00:00:00.000Z',
            lastUpdated: '2023-08-01T00:00:00.000Z',
            address: '456 Elm St, Riverside',
            notes: 'Notes for Jane Smith',
          },
          {
            id: 'c9f4e6b8-5f6e-4c77-8b8c-3c2f4d8d5c3e',
            fullName: 'Michael Johnson',
            accountNumber: 'ACC768902',
            status: 'delinquent',
            creditScore: 642,
            email: 'michael.johnson@example.com',
            phoneNumber: '555-9123-6472',
            loanCount: 3,
            createdAt: '2021-08-15T00:00:00.000Z',
            lastUpdated: '2023-07-15T00:00:00.000Z',
            address: '789 Oak St, Maplewood',
            notes: 'Notes for Michael Johnson',
          },
          {
            id: 'd4e6f7c9-3f5d-4f4e-8c7e-2a9d6f6b3e5a',
            fullName: 'Emily Davis',
            accountNumber: 'ACC349812',
            status: 'pending_verification',
            creditScore: 754,
            email: 'emily.davis@example.com',
            phoneNumber: '555-2743-9123',
            loanCount: 1,
            createdAt: '2022-01-22T00:00:00.000Z',
            lastUpdated: '2023-07-25T00:00:00.000Z',
            address: '101 Pine St, Willowbrook',
            notes: 'Notes for Emily Davis',
          },
          {
            id: 'e7f8c9a5-2f4b-4c4e-9c6e-3b9f4e8d3c7e',
            fullName: 'David Wilson',
            accountNumber: 'ACC412976',
            status: 'defaulted',
            creditScore: 590,
            email: 'david.wilson@example.com',
            phoneNumber: '555-1934-8253',
            loanCount: 4,
            createdAt: '2020-04-10T00:00:00.000Z',
            lastUpdated: '2023-08-05T00:00:00.000Z',
            address: '202 Birch St, Brookside',
            notes: 'Notes for David Wilson',
          },
          {
            id: 'f6d5c4b3-2f3d-4e6f-9b8e-2c3f6d4e5b6a',
            fullName: 'Sarah Lee',
            accountNumber: 'ACC583729',
            status: 'suspended',
            creditScore: 621,
            email: 'sarah.lee@example.com',
            phoneNumber: '555-3847-2913',
            loanCount: 2,
            createdAt: '2020-09-18T00:00:00.000Z',
            lastUpdated: '2023-07-30T00:00:00.000Z',
            address: '306 Cedar St, Greendale',
            notes: 'Notes for Sarah Lee',
          },
          {
            id: 'g7h8i9j0-3f4e-5g6h-8j9k-1l2m3n4o5p6q',
            fullName: 'Alice Brown',
            accountNumber: 'ACC682917',
            status: 'rehabilitated',
            creditScore: 670,
            email: 'alice.brown@example.com',
            phoneNumber: '555-8392-6731',
            loanCount: 1,
            createdAt: '2021-03-14T00:00:00.000Z',
            lastUpdated: '2023-08-07T00:00:00.000Z',
            address: '150 Maple St, Hilltown',
            notes: 'Notes for Alice Brown',
          },
          {
            id: 'h6g5f4e3-2d1c-3b4a-5c6d-7e8f9g0h1i2j',
            fullName: 'James Martin',
            accountNumber: 'ACC749825',
            status: 'in_good_standing',
            creditScore: 789,
            email: 'james.martin@example.com',
            phoneNumber: '555-9321-8374',
            loanCount: 2,
            createdAt: '2020-06-25T00:00:00.000Z',
            lastUpdated: '2023-08-01T00:00:00.000Z',
            address: '270 Oakwood Ave, Greenwood',
            notes: 'Notes for James Martin',
          },
          {
            id: 'i9j0k1l2-3b4c-5d6e-7f8g-9h0i1j2k3l4m',
            fullName: 'Lisa White',
            accountNumber: 'ACC493271',
            status: 'under_review',
            creditScore: 701,
            email: 'lisa.white@example.com',
            phoneNumber: '555-7384-2901',
            loanCount: 3,
            createdAt: '2020-07-30T00:00:00.000Z',
            lastUpdated: '2023-07-29T00:00:00.000Z',
            address: '400 Pinecone St, Lakeside',
            notes: 'Notes for Lisa White',
          },
          {
            id: 'j0k1l2m3-4n5o-6p7q-8r9s-0t1u2v3w4x5y',
            fullName: 'Robert Green',
            accountNumber: 'ACC518297',
            status: 'black_listed',
            creditScore: 550,
            email: 'robert.green@example.com',
            phoneNumber: '555-9374-5261',
            loanCount: 5,
            createdAt: '2019-12-14T00:00:00.000Z',
            lastUpdated: '2023-08-08T00:00:00.000Z',
            address: '350 Willow St, Forestville',
            notes: 'Notes for Robert Green',
          },
        ];
      });

      this.passthrough();
    },
  });
}
