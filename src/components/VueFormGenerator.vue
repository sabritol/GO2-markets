<template>
  <div>
    <h2>Vue Form Generator</h2>
    <vue-form-generator :schema="schema" :model="model" :options="formOptions"></vue-form-generator>
    <h3>Values</h3>
    {{model}}
  </div>
</template>

<script>
export default {
  data: () => ({
    model: {
      name: "",
      email: "",
      username: "",
      password: "",
      favoriteLanguage: "",
      acceptTerms: ""
    },
    schema: {
      fields: [
        {
          type: "input",
          inputType: "text",
          label: "Name",
          model: "name",
          required: true,
          validator: "string"
        },
        {
          type: "input",
          inputType: "email",
          label: "Email",
          model: "email",
          required: true,
          placeholder: "email@test.com",
          validator: "email"
        },
        {
          type: "input",
          inputType: "text",
          label: "Username",
          model: "username",
          required: true,
          validator: "string"
        },
        {
          type: "input",
          inputType: "password",
          label: "Password",
          model: "password",
          required: true,
          min: 6,
          hint: "Min of 6 characters",
          validator: "string"
        },
        {
          type: "select",
          label: "Favorite Language",
          model: "favoriteLanguage",
          values: ["Javascript", "VueJs", "CSS3", "HTML5"]
        },
        {
          type: "checkbox",
          default: false,
          label: "Accept Terms",
          model: "acceptTerms",
          required: true,
          validator: 'required'
        },
        {
          type: "submit",
          onSubmit(model) {
            console.log(model);
          },
          label: "",
          buttonText: "Sign Up",
          validateBeforeSubmit: true
        }
      ]
    },
    formOptions: {
      validateAfterLoad: false,
      validateAfterChange: true,
      validateAsync: true
    }
  })
};
</script>