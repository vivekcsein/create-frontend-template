"use client";
import * as z from "zod";
import React, { ReactNode } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/shadcn/button";
import { Input } from "@/components/ui/shadcn/input";
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/shadcn/alert";
import { CardContent } from "../../shadcn/card";
import { PasswordInput } from "../../shadcn/password-input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/shadcn/form";
import { Checkbox } from "../../shadcn/checkbox";

const signInSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
  rememberPassword: z.boolean(),
});

type SignInFormValues = z.infer<typeof signInSchema>;
type authpages = "signin" | "signup" | "forgetpassword";

const Auth_signin = ({
  setActiveTab,
  children,
}: {
  setActiveTab: React.Dispatch<React.SetStateAction<authpages>>;
  children?: ReactNode;
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberPassword: false,
    },
  });

  const onSubmit = async (data: SignInFormValues) => {
    setIsLoading(true);
    setError(null);

    try {
      // Here you would typically call your authentication API
      console.log("Sign in data:", data);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // For demo purposes, let's pretend authentication was successful
      // In a real app, you would handle the response from your auth API
    } catch (err) {
      setError(
        "Failed to sign in. Please check your credentials and try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    setError(null);

    try {
      // Here you would typically initiate Google OAuth flow
      console.log("Signing in with Google");

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
    } catch (err) {
      setError("Failed to sign in with Google. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <CardContent className="space-y-4">
      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="grid gap-4">
            {/* Email Field */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="grid gap-2">
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <FormControl>
                    <Input
                      id="email"
                      placeholder="user@email.com"
                      type="email"
                      autoComplete="email"
                      disabled={isLoading}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Password Field */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="grid gap-2">
                  <FormLabel htmlFor="password">Password</FormLabel>
                  <FormControl>
                    <PasswordInput
                      id="password"
                      placeholder="******"
                      autoComplete="new-password"
                      disabled={isLoading}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* password remember button */}
            <FormField
              control={form.control}
              name="rememberPassword"
              render={({ field }) => (
                <FormItem className="flex justify-between">
                  <div className="flex justify-between gap-1 items-center">
                    <FormControl>
                      <Checkbox
                        id="rememberPassword"
                        checked={field.value} // Bind the value from react-hook-form
                        onCheckedChange={(checked) => field.onChange(checked)} // Update the form state
                      />
                    </FormControl>
                    <FormLabel htmlFor="rememberPassword">
                      Remember Password
                    </FormLabel>
                    <FormMessage />
                  </div>
                  <Button
                    variant={"coolButton"}
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveTab("forgetpassword");
                    }}
                  >
                    Forget Password
                  </Button>
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full cursor-pointer">
              Signin
            </Button>
          </div>
        </form>
      </Form>
    </CardContent>
  );
};

export default Auth_signin;
