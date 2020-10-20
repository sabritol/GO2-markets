<template>
  <div>
    <h2>Vue Formulate</h2>
    <FormulateForm v-model="formValues" @submit="handleSubmit">
      <FormulateInput name="name" label="Name" validation="required" />
      <FormulateInput type="email" name="email" label="Email" validation="required|email" />
      <FormulateInput name="username" label="Username" validation="required" />
      <FormulateInput type="password" name="password" label="Password" validation="required" />
      <FormulateInput
        type="select"
        name="favoriteLanguage"
        label="Favorite Language"
        :options="{Javascript: 'Javascript', VueJs: 'VueJs', CSS3: 'CSS3', HTML5: 'HTML5'}"
      />
      <FormulateInput
        type="checkbox"
        name="acceptTerms"
        label="Accept Terms"
        validation="required"
      />
      <FormulateInput type="submit" label="Sign Up" />
    </FormulateForm>
    <h3>Values:</h3>
    {{formValues}}
  </div>
</template>

<script>
export default {
  data: () => ({
    formValues: {}
  }),
  methods: {
    handleSubmit() {
        console.log(this.formValues)
    }
  }
};
</script>