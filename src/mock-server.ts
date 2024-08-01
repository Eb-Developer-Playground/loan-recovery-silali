import {createServer} from "miragejs"

export default function () {
  createServer({
    routes() {
      this.post("/api/login", (schema, request) => {
        return {
          status: 200, body: {
            user_data: {
              email: 'admin@loanrecovery.com',
              name: 'Admin',
            },
            access_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
          }
        }
      }, {
        timing: 2000
      })
    }
  })
}
