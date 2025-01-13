import { currentUser } from "@clerk/nextjs/server";
import { PrismaClient } from "@prisma/client";

// Initialize Prisma Client
const prisma = new PrismaClient();
export  const checkUser=async()=>{
    const user=await currentUser();
    console.log(user);
    //check for current logged in clerk user

    if(!user){
        return null
    }
    //check if the user alread in the database or not

    const loggerUser=await prisma.user.findUnique({
        where:{
          clerkUserId:user.id
        }
    })
    

    //if the user in the database then reaturn database
    if(loggerUser){
        return loggerUser
    }

    //if not in database the create
    const newUser=await prisma.user.create({

        data:{
          clerkUserId:user.id,
            name:`${user.firstName} ${user.lastName}`,
            imageUrl:user.imageUrl,
            email:user.emailAddresses[0].emailAddress,
        }
    })
}