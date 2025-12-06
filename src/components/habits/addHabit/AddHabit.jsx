import { Button, Input } from "@mantine/core";
import { zod4Resolver } from "mantine-form-zod-resolver";

import { useForm } from "@mantine/form";
import api from "../../../api/api";
import enpoints from "../../../api/endpoints";
import { useNavigate, useParams } from "react-router";
import { useMutation, useQuery } from "@tanstack/react-query";
import DashboardSection from "../../ui/DashboardSection";
import habitSchema from "../../../schemas/habit.schema";
import useCreateHabit from "../../../hooks/useCreateHabit";
import useUpdateHabit from "../../../hooks/useUpdateHabit";

export default function AddHabit() {
  const { id } = useParams();
  const isEditing = !!id;
  const navigate = useNavigate();
  const form = useForm({
    initialValues: {
      name: "",
      description: "",
    },
    validateInputOnChange: true,
    validate: zod4Resolver(habitSchema),
  });

  const { errors, initialize } = form;

  const { data: initialData, error } = useQuery({
    queryKey: ["task", id ?? 0],
    queryFn: async () => {
      const res = await api.get(enpoints.habits.byId(id));
      const { data: habit } = res;
      initialize({ name: habit.name, description: habit.description });
      return habit;
    },
    enabled: isEditing,
    retry: false,
  });

  if (error) {
    navigate("/not-found");
  }

  const { mutateAsync: addHabitMutation } = useCreateHabit();

  const { mutateAsync: editHabitMutation } = useUpdateHabit();

  const handleAction = async (data) => {
    try {
      if (isEditing) {
        await editHabitMutation({ id, initialData, data });
      } else {
        await addHabitMutation(data);
      }
      navigate("/dashboard");
    } catch (e) {
      form.setErrors({ name: e.response.data.message });
    }
  };

  const onCancel = () => {
    navigate("/dashboard");
  };

  return (
    <DashboardSection className="gap-8">
      <div className="flex flex-col pb-4 border-b gap-4 border-gray-400">
        <h1 className="text-3xl font-semibold">
          {isEditing ? "Edit habit" : "Create new habit"}
        </h1>
        {!isEditing && (
          <p className="opacity-70">
            Define your new habit to start tracking your progress.
          </p>
        )}
      </div>
      <form
        className="flex flex-col gap-4"
        onSubmit={form.onSubmit(handleAction)}
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
          <Button
            onClick={onCancel}
            variant="outline"
            size="md"
            className="rounded-xl!"
          >
            Cancel
          </Button>
          <Button
            type="submit"
            disabled={!form.isValid() || !form.isTouched()}
            variant="filled"
            size="md"
            className="rounded-xl!"
          >
            {form.submitting
              ? "Loading..."
              : isEditing
              ? "Edit habit"
              : "Create habit"}
          </Button>
        </div>
      </form>
    </DashboardSection>
  );
}
