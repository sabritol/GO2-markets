<template>
  <div>
    <h1>A little about you</h1>
    <h4> Please fill some of the basics details to get started.</h4>
    <FormulateForm v-model="formValues" @submit="handleSubmit">
      <FormulateInput name="name" placeholder="First Name" validation="required" />
      <FormulateInput name="lastname" placeholder="Last Name" validation="required" />
      <FormulateInput
  type="tel"
  name="phone"
  placeholder="Phone Number"
  validation="required"
/>
<!-- <VuePhoneNumberInput v-model="yourValue" /> -->

  <FormulateInput
  v-model="value"
  :options="{first: 'Buyer', second: 'Seller'}"
  type="radio"
  label="Select your role"
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
