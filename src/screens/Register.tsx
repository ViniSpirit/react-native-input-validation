import { Box, ScrollView, Stack } from "native-base"
import Layout from "../components/Layout"
import MyButton from "../components/MyButton"
import MyInput from "../components/MyInput"
import Title from "../components/Title"

export default function Register() {
  return (
    <Layout>
      <ScrollView>
        <Title title="Registre-se" my="20px" textAlign="center" />
        <Stack space={2}>
          <MyInput label="Nome" placeholder="Nome" />
          <MyInput label="Email" placeholder="Email" />
          <MyInput label="Senha" placeholder="Senha" />
          <MyInput label="Confirmar senha" placeholder="Confirmar Senha" />
        </Stack>
      </ScrollView>
      <MyButton title="Cadastrar" my="20px" />
    </Layout>
  )
}
