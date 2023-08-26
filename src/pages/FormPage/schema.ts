import {
  coerce,
  maxLength,
  maxValue,
  minLength,
  minValue,
  number,
  object,
  Output,
  safeInteger,
  string,
} from "valibot";

export const formSchema = object({
  lastName: string([
    minLength(1, "This field is required."),
    maxLength(5, "Please enter within 2 characters."),
  ]),
  firstName: string([
    minLength(1, "This field is required."),
    maxLength(3, "Please enter within 3 characters."),
  ]),
  age: coerce(
    number([
      safeInteger("Please enter numerical values."),
      minValue(10, "Please enter at least 10 characters."),
      maxValue(30, "Please enter up to 30 characters."),
    ]),
    Number
  ),
});

export type FormType = Output<typeof formSchema>;
