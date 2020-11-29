<template>
  <div>
    <h1>A little about you</h1>
    <h4> Please fill some of the basics details to get started.</h4>
    <FormulateForm v-model="formValues" @submit="handleSubmit">
      <FormulateInput name="name" placeholder="First Name" validation="required" label-class="name-placeholder " />
      <FormulateInput name="lastname" placeholder="Last Name" validation="required" />
      <VuePhoneNumberInput v-model="VuePhoneNumberInput" />
<!-- 
  <FormulateInput
  v-model="value"
  :options="{first: 'Buyer', second: 'Seller'}"
  type="radio"
  label="Select your role"
/> -->

<FormulateInput
  v-model="value"
  type="radio"
  label="Buyer"
/>

<FormulateInput
  v-model="value"
  type="radio"
  label="Seller"
/>
      
      <FormulateInput type="submit" label="Submit" />
    </FormulateForm>
    <h3>Values:</h3>
    {{formValues}}
    {{VuePhoneNumberInput}}
  </div>
</template>

<script>
export default {
  data: () => ({
    formValues: {},
    VuePhoneNumberInput: {}
  }),
  methods: {
    handleSubmit() {
        console.log(this.formValues)
    }
  }
  
  
};

