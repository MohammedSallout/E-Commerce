import * as yup from "yup";

const validateProductId = yup.object().shape({
  productId: yup.number().positive().required(),
});

export { validateProductId };
