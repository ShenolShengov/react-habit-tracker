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
import { Link, useNavigate } from "react-router";
import { useAuth } from "../../store/authContext";

const schema = z.object({
  email: z.email({ error: "Invalid email" }),
  password: z.string().min(7, "Password must be at least 8 characters long"),
});

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },
    validateInputOnChange: true,
    validate: zod4Resolver(schema),
  });

  const handleLogin = async (data) => {
    try {
      await login(data.email, data.password);
      navigate("/");
    } catch (e) {
      console.error(e);
      form.setErrors({ root: "Invalid email or password" });
    }
  };

  return (
    <Container
      size={420}
      className="flex grow justify-center items-stretch flex-col gap-4"
    >
      <Title className="self-center">Welcome back!</Title>

      <Text className="self-center">
        Do not have an account yet? <Anchor component={Link} to="/register">Create account</Anchor>
      </Text>

      <Paper withBorder shadow="sm" p={22} className="mt-4!" radius="md">
        <form onSubmit={form.onSubmit(handleLogin)}>
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
            {form.submitting ? "Loading..." : "Sign in"}
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
