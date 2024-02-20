import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";



export default function LogInForm() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Next.js 14 Auth</CardTitle>
        <CardDescription>Log in to continue</CardDescription>
      </CardHeader>
      <form>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" required />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">Password</Label>
              <Input id="password" name="password" type="password" required />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button type="submit">Login</Button>
          <Link
            href='/portal/sign-up'
            className={buttonVariants({ variant: 'link' })}>
            Create an account
          </Link>
        </CardFooter>
      </form>
    </Card>
  )
}