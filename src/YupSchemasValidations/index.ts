import * as yup from "yup"
import { isValidCPF } from "../helpers/cpf"

export const registerSchemaValidation = yup
  .object({
    name: yup
      .string()
      .required("nome obrigatório")
      .min(5, "nome deve possuir no mínimo 5 letras"),

    cpf: yup
      .string()
      .required("CPF obrigatório")
      .test("cpfValidation", "CPF inválido", (value) => isValidCPF(value)),

    email: yup.string().required("email obrigatório").email("email inválido"),
    password: yup
      .string()
      .required("senha obrigatória")
      .min(6, "mínimo de 6 dígitos"),
    confirmPassword: yup
      .string()
      .required("confirme a senha")
      .oneOf([yup.ref("password"), null], "senhas devem ser iguais"),
  })
  .required()
