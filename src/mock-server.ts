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
      this.put(
        '/api/updateUserProfile',
        (schema, request) => {
          return request.requestBody;
        },
        { timing: 3000 },
      );
      this.get(
        '/api/loans',
        (schema, request) => {
          return [
            {
              id: 'LOAN001',
              borrower: {
                id: 'BORROWER001',
                fullName: 'Alice Johnson',
                accountNumber: 'ACC123456789',
                status: 'active',
                creditScore: 720,
                email: 'alice.johnson@example.com',
                phoneNumber: '+1234567890',
                loanCount: 2,
                createdAt: '2022-01-15T10:00:00Z',
                lastUpdated: '2024-08-14T09:00:00Z',
                address: '123 Elm Street, Springfield, IL',
                notes: 'Preferred customer',
              },
              loanAmount: 5000,
              interestRate: 5.5,
              startDate: '2023-01-01',
              endDate: '2026-01-01',
              outstandingBalance: 3000,
              status: 'current',
              repayments: [
                {
                  date: '2024-07-01',
                  amount: 150,
                  status: 'paid',
                },
                {
                  date: '2024-08-01',
                  amount: 150,
                  status: 'due',
                },
              ],
              repaymentSchedule: 'monthly',
              paymentPeriodInYears: 3,
            },
            {
              id: 'LOAN002',
              borrower: {
                id: 'BORROWER002',
                fullName: 'Bob Smith',
                accountNumber: 'ACC987654321',
                status: 'delinquent',
                creditScore: 650,
                email: 'bob.smith@example.com',
                phoneNumber: '+0987654321',
                loanCount: 1,
                createdAt: '2021-06-20T11:30:00Z',
                lastUpdated: '2024-08-14T10:00:00Z',
                address: '456 Oak Avenue, Springfield, IL',
                notes: 'Recent payment issues',
              },
              loanAmount: 10000,
              interestRate: 7.0,
              startDate: '2022-06-01',
              endDate: '2027-06-01',
              outstandingBalance: 8000,
              status: 'overdue',
              repayments: [
                {
                  date: '2024-03-01',
                  amount: 500,
                  status: 'overdue',
                },
              ],
              repaymentSchedule: 'quarterly',
              paymentPeriodInYears: 5,
            },
            {
              id: 'LOAN003',
              borrower: {
                id: 'BORROWER003',
                fullName: 'Charlie Brown',
                accountNumber: 'ACC192837465',
                status: 'in_good_standing',
                creditScore: 800,
                email: 'charlie.brown@example.com',
                phoneNumber: '+1122334455',
                loanCount: 3,
                createdAt: '2020-09-10T12:45:00Z',
                lastUpdated: '2024-08-14T11:00:00Z',
                address: '789 Pine Street, Springfield, IL',
                notes: 'Excellent credit history',
              },
              loanAmount: 15000,
              interestRate: 4.0,
              startDate: '2024-01-01',
              endDate: '2029-01-01',
              outstandingBalance: 15000,
              status: 'current',
              repayments: [],
              repaymentSchedule: 'yearly',
              paymentPeriodInYears: 5,
            },
            {
              id: 'LOAN004',
              borrower: {
                id: 'BORROWER004',
                fullName: 'Diana Prince',
                accountNumber: 'ACC546372819',
                status: 'suspended',
                creditScore: 670,
                email: 'diana.prince@example.com',
                phoneNumber: '+2233445566',
                loanCount: 1,
                createdAt: '2023-03-01T14:00:00Z',
                lastUpdated: '2024-08-14T12:00:00Z',
                address: '101 Maple Street, Springfield, IL',
                notes: 'Account suspended due to verification issues',
              },
              loanAmount: 7000,
              interestRate: 6.0,
              startDate: '2023-03-01',
              endDate: '2026-03-01',
              outstandingBalance: 6000,
              status: 'current',
              repayments: [
                {
                  date: '2024-06-01',
                  amount: 200,
                  status: 'paid',
                },
              ],
              repaymentSchedule: 'monthly',
              paymentPeriodInYears: 3,
            },
            {
              id: 'LOAN005',
              borrower: {
                id: 'BORROWER005',
                fullName: 'Eve Adams',
                accountNumber: 'ACC564738291',
                status: 'pending_verification',
                creditScore: 710,
                email: 'eve.adams@example.com',
                phoneNumber: '+3344556677',
                loanCount: 0,
                createdAt: '2024-05-20T15:15:00Z',
                lastUpdated: '2024-08-14T13:00:00Z',
                address: '202 Birch Street, Springfield, IL',
                notes: 'Application under review',
              },
              loanAmount: 8000,
              interestRate: 5.8,
              startDate: '2024-06-01',
              endDate: '2027-06-01',
              outstandingBalance: 8000,
              status: 'current',
              repayments: [],
              repaymentSchedule: 'bi-annually',
              paymentPeriodInYears: 3,
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
