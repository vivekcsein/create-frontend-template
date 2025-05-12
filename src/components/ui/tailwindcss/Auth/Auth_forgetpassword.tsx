"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/shadcn/input";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/shadcn/form";
import { Button } from "@/components/ui/shadcn/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/shadcn/card";

// Schema for email validation
const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
});

const Auth_forgetpassword = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      // Assuming a function to send reset email
      console.log(values);
      // toast.success("Password reset email sent. Please check your inbox.");
    } catch (error) {
      console.error("Error sending password reset email", error);
      // toast.error("Failed to send password reset email. Please try again.");
    }
  };

  return (
    <>
      <CardHeader>
        {/* <CardTitle className="text-6xl center">Forgot Password</CardTitle> */}
        <CardDescription>
          Enter your email address to verify code...
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid gap-4">
              {/* Email Field */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="grid gap-2">
                    {/* <FormLabel htmlFor="email">Email</FormLabel> */}
                    <FormControl>
                      <Input
                        id="email"
                        placeholder="user@mail.com"
                        type="email"
                        autoComplete="email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full cursor-pointer">
                Send Reset Link
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </>
  );
};

export default Auth_forgetpassword;
