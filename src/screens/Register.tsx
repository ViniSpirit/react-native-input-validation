import { Box, ScrollView, Stack } from "native-base"
import Layout from "../components/Layout"
import MyButton from "../components/MyButton"
import MyInput from "../components/MyInput"
import Title from "../components/Title"
import { useForm, Controller } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { registerSchemaValidation } from "../YupSchemasValidations"
import { useEffect } from "react"

interface FormData {
  name: string
  cpf: string
  email: string
  password: string
  confirmPassword: string
}

export default function Register() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(registerSchemaValidation),
  })

  const onSubmit = (data: FormData) => {
    console.log(data)
  }

  return (
    <Layout>
      <ScrollView>
        <Title title="Registre-se" my="20px" textAlign="center" />
        <Stack>
          <Controller
            name="name"
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <MyInput
                label="Nome completo"
                placeholder="Nome"
                onChangeText={onChange}
                value={value}
                error={errors.name?.message}
              />
            )}
          />

          <Controller
            name="cpf"
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, onBlur, value } }) => (
              <MyInput
                label="CPF"
                placeholder="CPF"
                onChangeText={onChange}
                value={value}
                error={errors.cpf?.message}
              />
            )}
          />

          <Controller
            name="email"
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <MyInput
                label="Email"
                placeholder="Email"
                onChangeText={onChange}
                value={value}
                error={errors.email?.message}
              />
            )}
          />

          <Controller
            name="password"
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <MyInput
                label="Senha"
                placeholder="Senha"
                onChangeText={onChange}
                value={value}
                secureTextEntry
                error={errors.password?.message}
              />
            )}
          />

          <Controller
            name="confirmPassword"
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <MyInput
                label="Confirmar senha"
                placeholder="Confirmar Senha"
                onChangeText={onChange}
                value={value}
                secureTextEntry
                error={errors.confirmPassword?.message}
              />
            )}
          />
        </Stack>
      </ScrollView>
      <MyButton title="Cadastrar" my="20px" onPress={handleSubmit(onSubmit)} />
    </Layout>
  )
}
