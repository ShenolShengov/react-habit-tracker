import {
  Anchor,
  Button,
  Container,
  Paper,
  PasswordInput,
  Text,
  TextInput,
  Title,
  InputError,
} from "@mantine/core";
import { zod4Resolver } from "mantine-form-zod-resolver";
import { z } from "zod";
import { useForm } from "@mantine/form";
import { useNavigate } from "react-router";
import { useAuth } from "../../store/auth-context";

const schema = z.object({
  email: z.email({ error: "Invalid email" }),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

export default function Register() {
  const { register } = useAuth();
  const navigate = useNavigate();
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },
    validateInputOnChange: true,
    validate: zod4Resolver(schema),
  });

  const handleRegister = async (data) => {
    try {
      await register(data.email.trim(), data.password.trim());
      navigate("/");
    } catch (e) {
      console.error(e);
      form.setErrors({ email: "Email is already taken" });
    }
  };

  return (
    <Container
      size={420}
      className="flex grow justify-center items-stretch flex-col gap-4"
    >
      <Title className="self-center">Create your account</Title>

      <Text className="self-center">
        Already have an account? <Anchor component={Link} to="/login">Log in</Anchor>
      </Text>

      <Paper withBorder shadow="sm" p={22} className="mt-4!" radius="md">
        <form onSubmit={form.onSubmit(handleRegister)}>
          <TextInput
            label="Email"
            placeholder="you@mantine.dev"
            radius="md"
            key={form.key("email")}
            {...form.getInputProps("email")}
          />
          <PasswordInput
            label="Password"
            placeholder="Your password"
            mt="md"
            radius="md"
            key={form.key("password")}
            {...form.getInputProps("password")}
          />
          <Button
            disabled={form.submitting || !form.isValid()}
            type="submit"
            fullWidth
            mt="xl"
            radius="md"
          >
            {form.submitting ? "Loading..." : "Sign up"}
          </Button>
          {form.errors.root && (
            <InputError size="xl" mt={"md"}>
              {form.errors.root}
            </InputError>
          )}
        </form>
      </Paper>
    </Container>
  );
}
