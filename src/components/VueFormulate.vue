<template>
  <div>
    <h1 class= "title">A little about you</h1>
    <h5> Please fill some of the basics details to get started.</h5>
    <FormulateForm v-model="formValues" @submit="handleSubmit">
      <FormulateInput name="name" placeholder="First Name" validation="required" />
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


<style lang="css" scoped>

.title{
position: static;
width: 268px;
height: 42px;
left: 0px;
top: 0px;


font-style: normal;
font-weight: 600;
font-size: 36px;
line-height: 42px;
text-align: right;
letter-spacing: -0.06em;

color: #242424;


/* Inside Auto Layout */

flex: none;
order: 0;
flex-grow: 0;
margin: 0px 8px;

}
</style>

