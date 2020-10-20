<template>
  <div>
    <h1>A little about you</h1>
    <h4> Please fill some of the basics details to get started</h4>
    <FormulateForm v-model="formValues" @submit="handleSubmit">
      <FormulateInput name="name" label="Name" validation="required" />
      <FormulateInput name="lastname" label="Last Name" validation="required" />
     <FormulateInput
  v-model="value"
  :options="{first: 'Buyer', second: 'Seller'}"
  type="radio"
  label="Choose a role that better defines you."
/>
      
      <FormulateInput type="submit" label="Submit" />
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