"use client";

import * as z from "zod";
import React, { ReactNode } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/libs/redux/store";
import { Button } from "@/components/ui/shadcn/button";
import { Input } from "@/components/ui/shadcn/input";
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/shadcn/alert";
import { CardContent } from "../../shadcn/card";
import { PasswordInput } from "../../shadcn/password-input";
import { Checkbox } from "../../shadcn/checkbox";
import { useRouter } from "next/navigation";
import WaveInput from "../Inputs/WaveInput";
import { signIn } from "@/libs/redux/features/authSlice";
// import { signinUser } from "@/libs/redux/features/userAuthSlice";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/shadcn/form";

const signInSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 8 characters long" })
    .regex(/[a-zA-Z0-9]/, { message: "Password must be alphanumeric" })
    .regex(/^.{8,30}$/, { message: "Minimum 8 and maximum 30 characters." })
    .regex(/(?=.*[A-Z])/, { message: "At least one uppercase character." })
    .regex(/(?=.*[a-z])/, { message: "At least one lowercase character." })
    .regex(/(?=.*\d)/, { message: "At least one digit." })
    .regex(/[$&+,:;=?@#|'<>.^*()%!-]/, {
      message: "At least one special character.",
    }),
  rememberPassword: z.boolean(),
});

type SignInFormValues = z.infer<typeof signInSchema>;

const Auth_signin = ({
  setActiveTab,
}: {
  setActiveTab: React.Dispatch<React.SetStateAction<authpages>>;
  children?: ReactNode;
}) => {
  const [error, setError] = useState<string | null>(null);
  const dispatch: AppDispatch = useDispatch();
  const authStatus = useSelector((state: RootState) =>
    state.auth.loading
      ? "loading"
      : state.auth.isAuthenticated
        ? "authenticated"
        : "idle"
  );

  const router = useRouter();

  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberPassword: false,
    },
  });

  const onSubmit = async (data: SignInFormValues) => {
    setError(null);
    try {
      const resultAction = await dispatch(
        signIn({ email: data.email, password: data.password })
      );
      if (signIn.fulfilled.match(resultAction)) {
        // Redirect or update UI on successful sign in
        router.push("/dashboard"); // Change to your protected route
      } else {
        setError(
          (resultAction.payload as string) ||
            "Failed to sign in. Please try again."
        );
      }
    } catch (_err) {
      setError("Failed to sign in. Please try again.");
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
                      disabled={authStatus === "loading"}
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
                      autoComplete="current-password"
                      disabled={authStatus === "loading"}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Remember Password Checkbox */}
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
            <Button
              type="submit"
              variant={"submit"}
              className="w-full cursor-pointer"
              data-content={authStatus === "loading" ? "" : "sign in"}
              disabled={authStatus === "loading"}
            >
              {authStatus === "loading" ? <WaveInput /> : ""}
            </Button>
          </div>
        </form>
      </Form>
    </CardContent>
  );
};

export default Auth_signin;
