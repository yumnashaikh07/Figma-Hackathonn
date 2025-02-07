"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { client } from "@/sanity/lib/client";

const formSchema = z.object({
  firstName: z.string().min(1, "First Name is required").max(50, "First Name must be 50 characters or less"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type FormType = z.infer<typeof formSchema>;

export default function SignIn() {
  const form = useForm<FormType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: FormType) {
   try{ await client.create({
      _type: "signinForm",
      email: values.email,
      password: values.password, 
    });

    alert("Sign up successful! Your data has been stored.");
    form.reset();
  } catch (error) {
    console.error("Error storing data in Sanity:", error);
    alert("There was an error submitting the form. Please try again.");
  }

  }

  return (
    <div className="max-w-[500px]  p-10 border-white bg-black text-white border-2 m-10 items-center mx-auto">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="email"
            render={({ field }: any) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }: any) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="Password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="hover:bg-black bg-white hover:text-white text-black hover:border-white border-black hover:border-[1px] px-16 "><Link href={"/dashboard"}>Sign In</Link></Button>
        </form>
      </Form>
    </div>
  );
}
