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
          ];
        },
        {
          timing: 0,
        },
      );
    },
  });
}
