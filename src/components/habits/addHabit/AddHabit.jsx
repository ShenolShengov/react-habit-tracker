import { Button, Input } from "@mantine/core";
import { zod4Resolver } from "mantine-form-zod-resolver";

import { z } from "zod";
import { useForm } from "@mantine/form";
import api from "../../../api/api";
import enpoints from "../../../api/endpoints";
import { useNavigate } from "react-router";
import { useMutation } from "@tanstack/react-query";
import DashboardSection from "../../ui/DashboardSection";

const schema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Name is reqired")
    .max(30, "Name must be between 1 and 30 symbols"),
  description: z
    .string()
    .max(2000, "Description must be between 1 and 2000 symbols")
    .optional(),
});

export default function AddHabit() {
  const navigate = useNavigate();
  const form = useForm({
    initialValues: {
      name: "",
      description: "",
    },
    validateInputOnChange: true,
    validate: zod4Resolver(schema),
  });
  const { errors, initialize } = form;

  const { mutateAsync: addHabitMutation } = useMutation({
    mutationFn: async (data) => {
      return api.post(enpoints.habits.base, {
        name: data.name.trim(),
        description: data.description.trim(),
      });
    },
  });

  const handleAddHabit = async (data) => {
    try {
      const res = await addHabitMutation(data);
      // form.reset();
      navigate("/dashboard");
    } catch (e) {
      form.setErrors({ name: e.response.data.message });
    }
  };

  return (
    <DashboardSection className="gap-8">
      <div className="flex flex-col pb-4 border-b gap-4 border-gray-400">
        <h1 className="text-3xl font-semibold">Create new habit</h1>
        <p className="opacity-70">
          Define your new habit to start tracking your progress.
        </p>
      </div>
      <form
        className="flex flex-col gap-4"
        onSubmit={form.onSubmit(handleAddHabit)}
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="font-normal">
            Habit Name <span className="text-red-500 pl-0.5 text-sm">*</span>
          </label>
          <input
            key={form.key("name")}
            {...form.getInputProps("name")}
            className="border border-gray-400 border-solid rounded-xl px-3 py-2"
            placeholder="e.g., Drink 8 glasses of water"
            type="text"
          />
          {errors.name && <Input.Error size="md">{errors.name}</Input.Error>}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="description" className="font-normal">
            Description
          </label>
          <textarea
            key={form.key("description")}
            {...form.getInputProps("description")}
            className="border border-gray-400 border-solid rounded-xl px-3 py-2"
            placeholder="Briefly describe your habit and why it's important"
            rows={4}
            type="text"
          />
          {errors.description && (
            <Input.Error size="md">{errors.description}</Input.Error>
          )}
        </div>
        <div className="flex items-center justify-end gap-4">
          <Button variant="outline" size="md" className="rounded-xl!">
            Cancel
          </Button>
          <Button
            type="submit"
            disabled={!form.isValid() || !form.isTouched()}
            variant="filled"
            size="md"
            className="rounded-xl!"
          >
            {form.submitting ? "Loading..." : "Create habit"}
          </Button>
        </div>
      </form>
    </DashboardSection>
  );
}
