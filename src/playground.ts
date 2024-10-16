import { db } from "./server/db";

await db.user.create({
    data: {
        emailAddress: 'test@gmail.com',
        firstName: 'eliot',
        lastName: 'china'
    }
})
console.log("done");
