import { Rule } from "@sanity/types";

export default {
  name: "signupForm",
  title: "Signup Form",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule: Rule) => Rule.required().error("Name is required"),
    },
    {
      name: "email",
      title: "Email",
      type: "string",
      validation: (Rule: Rule) =>
        Rule.required().email().error("A valid email address is required"),
    },
    {
      name: "password",
      title: "Password",
    type: "string",
    validation: (Rule: Rule) =>
        Rule.required()
            .min(8)
            .error("Password must be at least 10 characters long")
}
  ],
};