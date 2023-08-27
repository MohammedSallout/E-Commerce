import * as yup from "yup";

const validateCategoryId = yup.object().shape({
  categoryId: yup.number().positive().required(),
});

const validateCategory = yup.object().shape({
  name: yup.string().required("Category name is required").trim(),
  img: yup.string().required("Category image is required"),
});

export { validateCategoryId, validateCategory };
